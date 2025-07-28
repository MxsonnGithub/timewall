const form = document.getElementById('message-form');
const wall = document.getElementById('wall');
const clearBtn = document.getElementById('clear');

let messages = JSON.parse(localStorage.getItem('memorialMessages')) || [];

function renderMessages() {
  wall.innerHTML = '';
  messages.forEach((msg, index) => {
    const div = document.createElement('div');
    div.className = 'message';
    div.textContent = msg;
    wall.appendChild(div);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('message');
  const msg = input.value.trim();
  if (msg) {
    messages.push(msg);
    localStorage.setItem('memorialMessages', JSON.stringify(messages));
    renderMessages();
    input.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to reset the wall?')) {
    messages = [];
    localStorage.removeItem('memorialMessages');
    renderMessages();
  }
});

renderMessages();
