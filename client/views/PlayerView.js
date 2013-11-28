// PlayerView.js - Defines a backbone view class for the music player.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.model.on('ended', function(model){
    console.log("HERE!");
    this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

  // ended: function() {
  //   console.log("HEREREHREHREHRHE")
  // }


});
