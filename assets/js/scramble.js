function scrambleTextAnimation(
  container,
  targetText,
  charSet,
  flipProbability,
) {
  // Convert charSet and targetText into arrays of grapheme clusters
  const charArray = Array.from(charSet);
  const chars = Array.from(targetText);

  const randomChar = () =>
    charArray[Math.floor(Math.random() * charArray.length)];

  let scrambledText = chars.map(() => randomChar());
  container.textContent = scrambledText.join("");

  const interval = setInterval(() => {
    let isDone = true;

    scrambledText = scrambledText.map((currentChar, index) => {
      if (currentChar !== chars[index]) {
        isDone = false;
        return Math.random() < flipProbability ? chars[index] : randomChar();
      }
      return currentChar;
    });

    container.textContent = scrambledText.join("");

    if (isDone) {
      clearInterval(interval);
    }
  }, 40); // Adjust interval duration for animation speed
}

const text = document.querySelector(".fancy-font > .text");
const emoji = document.querySelector(".fancy-font > .emoji");
if (false && text) {
  scrambleTextAnimation(
    text,
    "Hello! I'm Matt",
    "abcdefghijklmnopqrstuvwxyz",
    0.1,
  );
  scrambleTextAnimation(
    emoji,
    "👋",
    "🤚🖐✋🖖👌🤌🤏✌🤞🫰🤙🫵👍👎👊🤜🤛🫳🫴👏🙌👐🤲🙏🤝",
    0.1,
  );
} else console.log("Container not found");

AOS.init({
  easing: "ease-out-quart",
  duration: 1000,
});
