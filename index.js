const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name) {
  return [...kittens, name];
}

 function prependKitten(name) {
   return [name,...kittens];
 }

 function removeLastKitten(){
   var array = kittens;
   array.pop();
   return array;
 }
