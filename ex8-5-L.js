load('./LinearTable.js');

function getRandomInt (min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
 for (var i = 0; i < arr.length; ++i) {
 var num = "";
 for (var j = 1; j <= 9; ++j) {
 num += Math.floor(Math.random() * 10);
 }
 num += getRandomInt(50,100);
 arr[i] = num;
 }
}

var hTable = new HashTable();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
 "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; ++i) {
 hTable.put(someNames[i]);
}
for (var i = 0; i < someNames.length; ++i) {
 hTable.put(someNames[i]);
}
hTable.showDistro();
print(hTable.get("Holly"));
