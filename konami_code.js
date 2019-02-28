const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]




function init(e) {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', init(event));
  let index = 0;

  function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
}
