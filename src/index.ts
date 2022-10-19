import "./styles.css";

let sumaNum: number = 0;

for (let index = 0; index < 10; index++) {
  let num: number = Number(prompt("Ingrese 10 nros"));
  sumaNum = sumaNum + num;
  //console.log(sumaNum);
}
console.log(sumaNum);
let promedio: number = sumaNum / 10;
console.log(promedio);
