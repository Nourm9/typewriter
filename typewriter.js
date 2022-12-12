const sentence = "hello there from lighthouse labs";
let interval = 0;
for (const char of sentence) {
  setTimeout(() => {
    //prints out each character of string with 50ms delay
    //prints each char on new line
    process.stdout.write(char+"\n");
  }, interval);
  interval += 50;
};