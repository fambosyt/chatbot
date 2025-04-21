// Funktion, die aufgerufen wird, wenn der Benutzer eine Nachricht sendet
function sendMessage() {
  const userInput = document.getElementById('userInput').value;
  if (userInput.trim() === '') return;

  // Füge die Nachricht des Benutzers zum Chatfenster hinzu
  addMessage(userInput, 'user');

  // Generiere die Antwort des Chatbots
  const botResponse = getBotResponse(userInput);

  // Füge die Antwort des Bots zum Chatfenster hinzu
  setTimeout(() => addMessage(botResponse, 'bot'), 1000);

  // Leere das Eingabefeld
  document.getElementById('userInput').value = '';
}

// Funktion, die die Nachricht hinzufügt (entweder vom User oder Bot)
function addMessage(message, sender) {
  const chatbox = document.getElementById('chatbox');
  const newMessage = document.createElement('div');
  newMessage.classList.add('message', sender);
  newMessage.textContent = message;
  chatbox.appendChild(newMessage);
  chatbox.scrollTop = chatbox.scrollHeight; // Scrolle zum neuesten Eintrag
}

// Funktion, die die Antwort des Chatbots basierend auf der Benutzereingabe generiert
function getBotResponse(userInput) {
  // Hier kannst du einfache Regeln für den Bot erstellen
  const userMessage = userInput.toLowerCase();

  if (userMessage.includes('hallo') || userMessage.includes('hi')) {
    return 'Hallo! Wie kann ich dir helfen?';
  } else if (userMessage.includes('wie geht es dir')) {
    return 'Mir geht es gut, danke der Nachfrage!';
  } else if (userMessage.includes('hilfe')) {
    return 'Ich bin ein einfacher Chatbot. Was möchtest du wissen?';
  } else if (userMessage.includes('dein name')) {
    return 'Ich bin der Chatbot, wie darf ich dich nennen?';
  } else {
    return 'Tut mir leid, das habe ich nicht verstanden. Kannst du das bitte anders formulieren?';
  }
}
