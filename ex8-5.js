// This one needs to be named in the book text!!

load('./BetterHash2.js');

var pnumbers = new HashTable();
var name, number;
while (name != "finished") {
  putstr("Enter a name (or 'finished' when done): ");
  name = readline();
  if (name == "finished") {
  break;
  }
  putstr("Enter a number: ");
  number = readline();
  pnumbers.put(name, number);
}
name = "";
putstr("Name for number (Enter quit to stop): ");
while (name != "quit") {
  name = readline();
  if (name == "quit") {
  break;
  }
  print(name + "'s number is " + pnumbers.get(name));
  putstr("Name for number (Enter quit to stop): ");
}
