var FlowView = Backbone.View.extend({
	app_view: null,

	initialize: function(options){
		this.app_view = options.app_view;
		this.listenTo(this.model, "change:sentence", this.refresh_sentence);
		this.listenTo(this.model, "change:is_editing", this.toggle_activate);
	},

	events: {
		"click a": "edit"
	},

	render: function(){
		if( this.$el.parent().size() === 0 ){
			var template = this.model.attributes;
			template.app_id = this.app_view.cid;
			this.setElement( window.JST["flow_view"](template));
			$("#FlowViewContainer"+this.app_view.cid).append( this.$el );
		}
	},

	edit: function(e){
		e.preventDefault();
		window.router.navigate("/edit/" + this.model.id, true);
	},

	refresh_sentence: function(model){
		this.$el.find(".sentence").html( model.get("sentence") );
	},

	toggle_activate: function( model ){
		if( model.get("is_editing") ){
			this.$el.addClass("active");
		}else{
			this.$el.removeClass("active");
		}
	}

});