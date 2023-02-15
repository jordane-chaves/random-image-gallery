export function removeFullScreen() {
  const divFullScreen = document.getElementById('full_screen');

  if (divFullScreen) {
    divFullScreen.remove();
  }
}
