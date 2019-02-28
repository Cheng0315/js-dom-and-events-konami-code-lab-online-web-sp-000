const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const main = document.body
main.addEventListener('keydown', init(event));

let index = 0;

function init(e) {
  // Write your JavaScript code inside the init() function
  console.log(e.which)
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
