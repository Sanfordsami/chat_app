function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();
  
    if (message === "") return;
  
    const chatWindow = document.getElementById("chat-window");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.style.margin = "10px 0";
    messageElement.style.padding = "8px 12px";
    messageElement.style.background = "#d1e7dd";
    messageElement.style.borderRadius = "10px";
    messageElement.style.alignSelf = "flex-end";
    messageElement.style.maxWidth = "70%";
  
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  
    input.value = "";
  }
  