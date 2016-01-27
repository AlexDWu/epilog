var controller = require('../controllers');
var request = require('request');


module.exports = function(app) {

  app.get('/', function (req, res) {

  });

  // app.post('/api/signin', );
  // app.post('/api/signup', );
  // app.get('/api/recent', );

  ////////////////////////////////////STORIES//////////////////////////////////////////
  app.get('/api/stories', controller.stories.getAllStories);


  app.get('/api/stories/:storyId', controller.stories.getOneStory);


  app.post('/api/stories', controller.stories.addStory);

  ////////////////////////////////////MOMENTS//////////////////////////////////////////
  app.post('/api/moments/:storyId', controller.moments.addMoment);

  
  //might not need this going forward...
  app.get('/api/moments/:storyId', controller.moments.getAllMoments);

  // app.get('/api/moments/:tagId', );
  // app.get('/api/tags', );
  // app.post('/api/tags', );
  // app.get('/api/comments', );
  // app.post('/api/comments/:momentId', );
  // app.get('/api/users', );
  // app.post('/api/users', );
};