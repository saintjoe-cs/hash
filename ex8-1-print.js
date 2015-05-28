// Example 8-1
load("HashTablePrint.js");

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
  "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();
