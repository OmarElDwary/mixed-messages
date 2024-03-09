const messages = require('./messages.js')

const getRandomMsg = () => {
  const keys = Object.keys(messages);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const arr = messages[randomKey];
  const randomMsg = arr[Math.floor(Math.random() * arr.length)];
  console.log(randomMsg);
};
getRandomMsg();