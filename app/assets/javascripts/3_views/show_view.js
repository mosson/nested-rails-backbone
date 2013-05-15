var ShowView = Backbone.View.extend({
  initialize: function(options){
    this.app_view = options.app_view;
  },
  render: function(){
    if( this.$el.parent().size() === 0 ){
      this.setElement( window.JST["show_view"](_.extend( this.model.attributes, {app_id: this.app_view.cid} ) ) );
      $("#MainViewContainer").append( this.$el );
    }

    return this;
  }
});