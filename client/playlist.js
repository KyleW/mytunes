$(document).ready(function(){
  var playlists = {};

  $('#save').on('click',function(){
    var name = prompt("What should we call your playlist?");
    playlists[name] = MyTunes.Models.AppModel.get('songQueue'); //add reference to current playlist
    $('<span>').text(name).appendTo('#playlists');
  });

  $('#playLists').on('click','span',function(){
    //remove the existing playlist
    //open the new one
  });


});