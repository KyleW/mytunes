// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  initialize: function(){
    this.on('ended', this.playNext,this);

    this.on('add',function(){
      if (this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', this.playNext, this);
  },

  playNext:function(){
    this.remove(this.at(0));
    if(this.length > 0) {
      this.playFirst();
    }
  },

  playFirst : function(song) {
    this.at(0).play();
  }

});