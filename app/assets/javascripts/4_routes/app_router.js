var AppRouter = Backbone.Router.extend({
	app_view: null,

	routes: {
		"": 					"index",
		"/": 					"index",
		"/new": 			"new",
		"new": 				"new",
		":id": 				"show",
		"/:id": 			"show",
		"edit/:id": 	"edit",
		"/edit/:id": 	"edit"
	},

	make_app: function(){
		if( !this.app_view )
			this.app_view = new AppView({collection: this.collection}).render();
	},

	action: function(f){
		this.dfd.done (  [_.bind(this.make_app, this)].concat(arguments) );
	},

	initialize: function(){
		this.dfd = new $.Deferred();

		this.collection = new Questions();
		this.collection.fetch({
			success: _.bind( function(){
				this.dfd.resolve();
			}, this )
		})
	},

	index: function(){
		this.action(_.bind(function(){
			console.log("index");

		}, this));
	},

	new: function(){
		this.action( _.bind(function(){
			console.log("new");

			var model = new Question();

			this.app_view.render_new_view( model );
		}, this) );
	},

	show: function(){
		this.action( _.bind(function(){
			console.log("show");

			var model = this.collection.findWhere({id: parseInt(id) });

			this.app_view.render_show_view( model );
		}, this) );
	},

	edit: function(id){
		this.action( _.bind(function(){
			console.log("edit");

			var model = this.collection.findWhere({id: parseInt(id) });

			this.app_view.render_edit_view( model );
		}, this) );
	}

});