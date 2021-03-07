let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  // Display how many seconds left
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // Check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countdown);
    }
    // Display it
    displayTimeLeft(seconds); 
  }, 1000)
};

function displayTimeLeft(seconds) {
  console.log(seconds)
}


 