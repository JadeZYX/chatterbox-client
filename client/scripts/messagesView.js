// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // MessagesView.render();


  },

  render: function() {
    // TODO: Render _all_ the messages.
    this.$chats.html('');//expty the chats
    //访问_data里的每一个元素用render Message的方法添加到页面。对吗？？
    //console.log(Messages._data);
    for(var i = 0; i< Messages._data.length;i++){
      MessagesView.renderMessage(Messages._data[i].text);
    }

    /*
    $chats.clear();
    foreach(var msg in window.messages) {
      renderMessage(msg);
    }
    */
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var $singleMes = $(`<div>${message}</div>`);// MessageView.render(message);
    $(MessagesView.$chats).append($singleMes)
    /*
    var $msg = $(`<div>${message.text}<div>`);

    this.$chats.append($msg);
    */
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    $("#message").on('click',function(){
      //发送者是谁？？？
      let sender = event.target.text.username;
      Friends.friendsList.push(sender);
    });
  }
};
/*
console.log(MessagesView.$chats,typeof(MessagesView.$chats));
div#chats  type is object
*/