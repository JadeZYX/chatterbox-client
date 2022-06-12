// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
      username: App.username,
      text: $('#message')[0].value,
      roomname: App.roomname
    }

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    Parse.create(message,
      () => {
        Parse.readAll((msgArray) => {
          Messages._data = msgArray;
        })
      });
    MessagesView.render();

    console.log(Parse.create());

    console.log('submit click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
    //.attr(attributeName,value) attrbuteName is the name of the attribute to set
    //value:A value to set for the attribute. If null, the specified attribute will be removed (as in .removeAttr()).
  }

};