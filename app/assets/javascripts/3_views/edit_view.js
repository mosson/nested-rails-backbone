var EditView = Backbone.View.extend({
  initialize: function(options){
    this.app_view = options.app_view;
  },

  events: {
    "click a.save": "save_model"
  },

  render: function(){
    if( this.$el.parent().size() === 0 ){
      this.setElement( window.JST["edit_view"](this.model.attributes) );
      $("#MainViewContainer"+this.app_view.cid).append( this.$el );

      this.$el.find("textarea").on("keydown keyup change", _.bind(this.update_sentence,this));
    }
  },

  update_sentence: function(e){
    this.model.set('sentence', $(e.currentTarget).val() );
  },

  save_model: function(e){
    e.preventDefault();
    this.model.save();
  }
});