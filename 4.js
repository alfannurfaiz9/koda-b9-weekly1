// 1. Method Math.round
// - Tidak menerima input
// - Output berupa bilangan bulat terdekat
// - Digunakan untuk membulatkan bilangan desimal

// Contoh Penggunaan:
const num = 5.6;
const rounded = Math.round(num);

console.log(num);
// num: 5.6
console.log(rounded);
// rounded: 6

// 2. Method Object.keys
// - Input berupa Object
// - Output berupa array dengan kumpulan key dari Object
// - Digunakan untuk membuat array berisi yang masing masing key dari Object

// Contoh Penggunaan:
const object = {
  name: "budi",
  address: "jakarta",
};

const keys = Object.keys(object);

console.log(object);
// object: {name: "budi", address: "jakarta"}
console.log(keys);
// keys: ["name", "address"]

// 3. Method String.split
// - Input berupa separator dan limit
// - Output berupa array dari string yang sudah di split berdasarkan separator dan limit
// - Digunakan untuk membuat array berisi string yang di split berdasarkan separator dan limit

// Contoh Penggunaan:
const name = "koda academy";
const split = name.split(" ");

console.log(name);
// name: "koda academy"
console.log(split);
// split: ["koda", "academy"]

// 4. Methond Array.pop
// - Tidak menerima input
// - Output berupa string dari array index ke terakhir
// - Digunakan untuk menghapus isi array index ke terakhir dan mengambil nilainya dalam bentuk string

// Contoh Penggunaan:
const arr = ["koda", "academy"];
const pop = arr.pop();

console.log(arr);
// arr: ["koda"]
console.log(pop);
// pop: "academy"

// 5. Method Object.values
// - Input berupa objek
// - Output berupa array dari masing masing values dari key di dalam Object
// - Digunakan untuk membuat array berisi masing masing value dari key di dalam Object

// Contoh Penggunaan:
const obj = {
  name: "budi",
  address: "jakarta",
};

const values = Object.values(obj);

console.log(obj);
// obj: {name: "budi", address: "jakarta"}
console.log(values);
// values: ["budi", "jakarta"]
