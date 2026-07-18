const multiplicationTable = (num) => {
  let n = 1;
  let baris = "";

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      baris += " " + n++;
    }

    console.log(baris);
    baris = "";
  }
};

multiplicationTable(5);
