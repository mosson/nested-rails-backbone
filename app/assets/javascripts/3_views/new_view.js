var NewView = Backbone.View.extend({
  initialize: function(options){
    this.app_view = options.app_view;
  },

  events: {
    "click a": "save_new_question"
  },

  render: function(){
    if( this.$el.parent().size() === 0 ){
      this.setElement( window.JST["new_view"](_.extend( this.model.attributes, {app_id: this.app_view.cid} ) ) );
      $("#MainViewContainer"+this.app_view.cid).append( this.$el );
    }

    return this;
  },

  save_new_question: function(e){
    e.preventDefault();
    this.model.set("answer_type", $(e.currentTarget).data("answer-type") ).save();
  }
});