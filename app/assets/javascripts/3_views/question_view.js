var QuestionView = Backbone.View.extend({
	app_view: null,
	initialize: function(options){
		this.app_view = options.app_view;

		this.listenTo(this.model, "change:sentence", this.change);
	},

	render: function(){

		if( this.$el.parent().size() === 0 ){
			this.setElement(window.JST["question_view"](this.model.attributes));
			this.app_view.$el.append( this.$el );
		}
	},

	onSync: function(){
		console.log("onSync");
	},

	onAdded: function(){
		console.log("onAdded");
	},

	change: function(model){

	}


});