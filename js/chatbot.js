const chatbotResponses = {
  welcome: "Welcome to Caffotto Rajkot, where artisan coffee and gourmet cuisine blend into a luxury experience. I am your virtual Concierge. How may I assist you today?",
  hours: "Caffotto Rajkot is open daily from 11:00 AM until 11:00 PM. Reservations can be placed online through our Reservations section.",
  location: "We are located at Labh Enclave, Shop No. 2, 1st Floor, Navjivan Society, Kishanpara, Rajkot, Gujarat.",
  recommend: "Our chef highly recommends the Bianca al Tartufo Gourmet Pizza (topped with fresh buffalo mozzarella and black truffle shavings, $36.00) paired with our 24K Golden Espresso Ritual ($24.00) for a truly majestic culinary journey.",
  reserve: "To book a table, simply click on our 'Reserve Table' button in the navigation bar or use the interactive grid in our Reservations section.",
  prive: "We offer priority table reservations, private coffee cuppings, and culinary workshops for our regular patrons. Contact our lounge desk to learn more.",
  contact: "You can reach our hospitality desk directly at caffotto.rajkot@gmail.com or via phone/WhatsApp at +91 99987 77059."
};

function initChatbot() {
  const triggerBtn = document.getElementById('chatbot-trigger-btn');
  const panel = document.getElementById('chat-widget-panel');
  const closeBtn = document.getElementById('chat-close-btn');
  const chatForm = document.getElementById('chat-input-form');
  const chatInput = document.getElementById('chat-input-field');
  const chatBody = document.getElementById('chat-body');
  const hintButtons = document.querySelectorAll('.chat-hint-btn');

  if (!panel || !triggerBtn) return;

  // Toggle chat widget
  triggerBtn.addEventListener('click', () => {
    const isVisible = panel.style.display === 'flex';
    panel.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) {
      chatInput.focus();
      // Scroll to bottom
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  });

  closeBtn.addEventListener('click', () => {
    panel.style.display = 'none';
  });

  // Append Message
  function appendMessage(text, sender = 'bot') {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // AI Response Router
  function getResponse(userInput) {
    const query = userInput.toLowerCase();
    
    if (query.includes('hour') || query.includes('time') || query.includes('open')) {
      return chatbotResponses.hours;
    }
    if (query.includes('location') || query.includes('where') || query.includes('address')) {
      return chatbotResponses.location;
    }
    if (query.includes('recommend') || query.includes('signature') || query.includes('best') || query.includes('food')) {
      return chatbotResponses.recommend;
    }
    if (query.includes('reserve') || query.includes('table') || query.includes('book')) {
      return chatbotResponses.reserve;
    }
    if (query.includes('member') || query.includes('prive') || query.includes('club') || query.includes('loyalty')) {
      return chatbotResponses.prive;
    }
    if (query.includes('contact') || query.includes('phone') || query.includes('email') || query.includes('whatsapp')) {
      return chatbotResponses.contact;
    }
    
    return "Thank you for contacting Caffotto Concierge. I will alert our hospitality manager to assist you with: '" + userInput + "'. Alternatively, feel free to ask about our hours, signature recommendations, or table bookings.";
  }

  // Handle Form Submission
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    chatInput.value = '';

    // Typing simulation
    setTimeout(() => {
      const response = getResponse(text);
      appendMessage(response, 'bot');
    }, 600);
  });

  // Quick Hint Clicks
  hintButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-hint');
      appendMessage(text, 'user');
      
      setTimeout(() => {
        const response = chatbotResponses[text] || "I will be happy to assist you with that request.";
        appendMessage(response, 'bot');
      }, 500);
    });
  });

  // Initial welcome message if chat body is empty
  if (chatBody.children.length === 0) {
    appendMessage(chatbotResponses.welcome, 'bot');
  }
}

window.initChatbot = initChatbot;
