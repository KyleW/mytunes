// SongQueueView.js - Defines a backbone view class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueView = Backbone.View.extend({
  tagName: "table",
  initialize: function() {
    this.render();

    this.collection.on('remove', function() {
      this.render();
    },this);

    this.collection.on('add', function() {
      this.render();
    },this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>').addClass('songQueue').append(
      this.collection.map(function(song){
        return new MyTunes.Views.SongQueueEntryView({model: song}).render();
      })
    );
  }
});
