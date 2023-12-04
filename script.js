let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#111111 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  const typingText = document.getElementById('typing-text');

const phrase = 'Hello, I am M Moazam CEO of Code Ninja';

let i = 0;
let isCompleted = false;
let partPhrase = '';
let speed = 100;
let isEnd = true;

function checkEnd() {
	if (isEnd) {
		speed = 2000;
		isEnd = false;
	} else speed = 100;
}

