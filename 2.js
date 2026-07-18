const multiplicationTable = (num) => {
  let baris = "";

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      baris += " " + i * j;
    }

    console.log(baris);
    baris = "";
  }
};

multiplicationTable(5);
