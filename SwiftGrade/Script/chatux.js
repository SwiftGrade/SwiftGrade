// for content change
function handleButtonClick(button) {
    // Remove the 'active' class from all buttons
    var buttons = document.querySelectorAll('.chatmenu button');
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    button.classList.add('active');

    // Display the content of the active button
    var activeContent = document.getElementById('userTop');
    activeContent.innerHTML = button.innerHTML;
}

// send message
function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value.trim();

    if (message !== '') {
        var chatbox = document.querySelector('.chatbox');
        var newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.innerText = message;
        chatbox.appendChild(newMessage);

        // Clear the input field after sending the message
        messageInput.value = '';
    }
}