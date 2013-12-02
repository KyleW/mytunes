// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= this.artist %>)</td><td><%= this.title %></td>'),

  events: {
    'click': function() {
      this.model.play();
    }
    // 'remove': function(){
    //   console.log("We're being removed");
    // },
    // 'add': function() {
    //   console.log("We're being added!");
    // }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});

