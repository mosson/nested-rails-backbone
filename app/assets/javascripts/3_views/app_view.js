var AppView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, "reset",		this.render);
		this.listenTo(this.collection, "add",			_.debounce( _.bind( this.refresh_flow, this ), 60 ) );
		this.listenTo(this.collection, "remove",	_.debounce( _.bind( this.refresh_flow, this ), 60 ) );
	},

	events: {
		"click a.new-trigger": "navigate_new"
	},

	render: function(){
		if( this.$el.parent().size() === 0 ){
			this.setElement( window.JST["app_view"]({app_id: this.cid}));
			$("#AppViewContainer").append( this.$el );
		}

 		this.refresh_flow();

		return this;
	},

	refresh_flow: function(){
		$("#FlowViewContainer"+this.cid).html("");

		var index = 1;
		this.collection.each( _.bind(function(model){
			model.set("order_index", index);
			new FlowView({model: model, app_view: this}).render();
			index ++;
		}, this) );
	},

	navigate_new: function(e){
		e.preventDefault();
		window.router.navigate("/new", true);
	},

	render_new_view: function(model){
		this.listenTo(model, "change:answer_type", this.append_new_question);

		$("#MainViewContainer"+this.cid).html("");

		new NewView({model: model, app_view: this}).render();
	},

	append_new_question: function(model){
		window.router.navigate("/edit/"+model.id, {trigger: false} );
		this.collection.add(model);

		this.render_edit_view( model );
	},

	render_show_view: function( model ){
		$("#MainViewContainer"+this.cid).html("");

		new ShowView({model: model, app_view: this}).render();
	},

	render_edit_view: function( model ){
		$("#MainViewContainer"+this.cid).html("");

		this.activate_flow( model );
		
		new EditView({model: model, app_view: this}).render();
	},

	activate_flow: function( model ){
		this.collection.each(_.bind( function(m){
			m.set({"is_editing": m === model });
		}, this ) );
	}
});