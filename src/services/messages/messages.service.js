// Initializes the `messages` service on path `/messages`
const createService = require('feathers-nedb');
const createModel = require('../../models/messages.model');
const hooks = require('./messages.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'messages',
    Model,
    paginate,
    events:['myevent']
  };

  // Initialize our service with any options it requires
  app.use('/messages', createService(options));
  app.service('messages').emit('myevent',{a:'klahkjhg'})

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('messages');

  service.hooks(hooks);
};
