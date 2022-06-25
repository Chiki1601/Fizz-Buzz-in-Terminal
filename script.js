const windowContent = document.querySelector(".window-content");

function getLastLine() {
  const lines = document.querySelectorAll(".line");
  return lines[lines.length - 1];
}

function createContent(value) {
  const line = document.createElement("p");
  line.classList.add("line");
  line.textContent = "~  " + value;
  return line;
}

function render(value) {
  const content = createContent(value);
  windowContent.appendChild(content);
  const topPos = content.offsetTop;
  windowContent.scrollTop = topPos;
}

function initCommand() {
  const command = [..."fizzbuzz init "];
  render("");
  const line = getLastLine();
  let timeout = false;
  command.forEach((char, i) => {
    timeout = setTimeout(() => {
      line.textContent += char;
      if (i === command.length - 2) {
        clearTimeout(timeout);
        timeout = false;
        timeout = setTimeout(() => {
          render("");
          loading();
        }, i * 50);
      }
    }, i * 150);
  });
}

function loading() {
  const command = [..."....."];
  const line = getLastLine();
  line.textContent += 'loading';
  let timeout = false;
  command.forEach((char, i) => {
    timeout = setTimeout(() => {
      line.textContent += char;
      if (i === command.length - 2) {
        clearTimeout(timeout);
        timeout = false;
        timeout = setTimeout(() => {
          outputting();
        }, i * 50);
      }
    }, i * 350);
  });
}

function outputting() {
  const line = getLastLine();
  let timeout = false;
  for (let i = 1; i <= 101; i++) {
    timeout = setTimeout(() => {
      let content = i;
      if (i % 5 === 0 && i % 3 === 0) {
        content = "FizzBuzz";
      } else if (i % 5 === 0) {
        content = "Buzz";
      } else if (i % 3 === 0) {
        content = "Fizz";
      } else if (i === 101) {
        content = "✨ fizzbuzz finished";
        clearTimeout(timeout);
        timeout = false;
      }
      render(content);
    }, i * 50);
  }
}

initCommand();