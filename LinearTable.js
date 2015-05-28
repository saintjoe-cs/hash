function HashTable() {
 this.values = [];
 this.table = new Array(137);
 this.simpleHash = simpleHash;
 this.betterHash = betterHash;
 this.showDistro = showDistro;
 this.put = put;
 this.get = get;
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

function showDistro() {
 var n = 0;
 for (var i = 0; i < this.table.length; ++i) {
 if (this.table[i] != undefined) {
 print(i + ": " + this.table[i]);
 }
 }
}

function put(key, data) {
 var pos = this.betterHash(key);
 if (this.table[pos] === undefined) {
 this.table[pos] = key;
 this.values[pos] = data;
 }
 else {
 while (this.table[pos] !== undefined) {
 pos++;
 }
 this.table[pos] = key;
 this.values[pos] = data;
 }
}

function get(key) {
 var hash = -1;
 hash = this.betterHash(key);
 if (hash > -1) {
 for (var i = hash; this.table[hash] !== undefined; i++) {
 if (this.table[hash] == key) {
 return this.values[hash];
 }
 }
 }
 return undefined;
}


