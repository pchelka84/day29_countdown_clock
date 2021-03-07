let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  // Display how many seconds left
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // Check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countdown);
    }
    // Display it
    console.log(secondsLeft)
  }, 1000)
};
timer(10)
 