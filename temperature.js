/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(" ");
for (let i = 0; i < n; i++) {
  const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
}

//Retouner 0; so aici,e temperature en entrée
//Retourner la température la plus proche de 0
//Se 2 temp egale, retourner celle qui est positive

if (n === 0) return console.log(0);

const numPos = inputs.filter((number) => number > 0);
const minPos = Math.min(...numPos);

const numNeg = inputs.filter((number) => number < 0);
const maxNeg = Math.max(...numNeg);

if (minPos <= Math.abs(maxNeg)) {
  return console.log(minPos);
} else {
  return console.log(maxNeg);
}
