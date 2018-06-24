const messages = require('./messages/messages.service.js');
const users = require('./users/users.service.js');
const poi=require('./ok/ok.service.js');
module.exports = function (app) {
  app.configure(messages);
  app.configure(users);
 app.configure(poi)
};
