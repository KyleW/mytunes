// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({
  initialize: function(){
    this.on('ended', function(){
      this.remove(this.at(0));
      if(this.length >0){
        this.playFirst();
      }
    },this);

    this.on('add',function(){
      if (this.length === 1){
        console.log(this);
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(){
      this.remove(this.at(0));
      if(this.length > 0) {
        this.playFirst();
      }
    }, this);
  },

  playFirst : function(song) {
    this.at(0).play();
  }
});