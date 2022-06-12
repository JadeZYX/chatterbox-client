// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  // function benefit:render specific html element
  render: _.template(`
      <div class="chat">
        <div class="username"></div>
        <div></div>
      </div>
    `)
};
//when invoke how to pass in input??? in messagesView.js line 25???