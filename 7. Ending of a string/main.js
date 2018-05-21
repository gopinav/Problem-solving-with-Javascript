// 1. with substr()

function confirmEnding(string, target) {
  return (string.substr(-target.length) === target) ? true : false;
}
confirmEnding('Bastian', 'n');

/*

2. with endsWith()

function confirmEnding(string, target) {
  return string.endsWith(target);
}

*/