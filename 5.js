const printNum = (n) => {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
};

printNum(5);
