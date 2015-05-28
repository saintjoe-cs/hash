function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
  this.buildChains = buildChains;
}

function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

function betterHash(string) {
  var H = 31;
  var total = 0;
  for (var i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total += this.table.length-1;
  }
  return parseInt(total);
}

function buildChains() {
  for (var i = 0; i < this.table.length; ++i) {
    this.table[i] = [];
  }
}

function showDistro() {
  var n = 0;
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i][0] !== undefined) {
      print(i + ": " + this.table[i]);
    }
  }
}

function put(data) {
  var key = this.betterHash(data);
  var index = 0;
  if (this.table[key][index] == undefined) {
    this.table[key][index] = data;
  }
  else {
    while (this.table[key][index] !== undefined) {
      ++index;
    }
    this.table[key][index] = data;
  }
}

function get(key) {
  var index = 0;
  var pos = this.betterHash(key);
  if (this.table[pos][index] == key) {
    return this.table[pos][index+1];
    }
  else {
    while (this.table[pos][index] != key && index < this.table[pos].length) {
      index += 2;
      }
      return this.table[pos][index+1];
    }
  print("Impossible situation has occurred");
  return undefined;
}
