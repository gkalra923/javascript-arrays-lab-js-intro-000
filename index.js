const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destrucivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}