describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new MyTunes.Models.SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url'
    });
<<<<<<< HEAD
    // spyOn(Song.prototype, 'enqueue'); // Uncomment this when working on the second test
   //spyOn(MyTunes.Collections.Songs.prototype, 'play'); //original version'
    spyOn(model, 'play');
=======
    // spyOn(MyTunes.Models.SongModel.prototype, 'enqueue'); // Uncomment this when working on the second test
    spyOn(MyTunes.Models.SongModel.prototype, 'play');
>>>>>>> 73b2f3fe83da5e048bddf3871f9f363210c45db4
    view = new MyTunes.Views.LibraryEntryView({model: model});
    view.render();
  });

  it('plays clicked songs', function(){
    view.$el.children().first().click();
    expect(model.play).toHaveBeenCalled();
  });

  // Comment out the above spec when implementing the below
  xit('queues clicked songs', function(){
    view.$el.children().first().click();
    expect(model.enqueue).toHaveBeenCalled();
  });
});
