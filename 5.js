const printNum = (n) => {
  let count = 1;

  let intervalId = setInterval(() => {
    if (count >= n) {
      clearInterval(intervalId);
    }
    console.log(count++);
  }, 1000);
};

printNum(5);
