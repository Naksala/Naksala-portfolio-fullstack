import { useEffect, useState } from "react";

// Types a word letter by letter, waits, deletes it, then moves to the next word.
export default function useTyped(words, typeSpeed = 70, pause = 1400) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let letterCount = 0;
    let deleting = false;
    let timer;

    function tick() {
      const word = words[wordIndex];
      setText(word.slice(0, letterCount));

      let delay = deleting ? 35 : typeSpeed;
      if (!deleting && letterCount === word.length) {
        deleting = true;          // finished typing, hold for a moment
        delay = pause;
      } else if (deleting && letterCount === 0) {
        deleting = false;         // finished deleting, go to the next word
        wordIndex = (wordIndex + 1) % words.length;
        delay = 300;
      } else {
        letterCount += deleting ? -1 : 1;
      }
      timer = setTimeout(tick, delay);
    }

    tick();
    return () => clearTimeout(timer);
  }, [words, typeSpeed, pause]);

  return text;
}
