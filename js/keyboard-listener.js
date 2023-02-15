import { removeFullScreen } from './remove-full-screen.js';

const keyboardActions = {
  'Escape': removeFullScreen,
};

function keyboardListener(event) {
  const keyPress = event.key;
  const actionFunction = keyboardActions[keyPress];

  if (actionFunction) {
    actionFunction();
  }
}

document.addEventListener('keydown', keyboardListener);
