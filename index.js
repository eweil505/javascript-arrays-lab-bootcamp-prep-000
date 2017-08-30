var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newArr = kittens.push(name);
  return newArr;
}

function removeLastKitten() {
  var newArr = kittens.pop();
  return newArr;
}

function removeFirstKitten() {
  var newArr = kittens.unshift();
  return newArr; 
}
