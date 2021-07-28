process.stdout.write('hello from spinner2.js... \rheyyy\n');
const array =  ['|', '/', '-', '\\','|', '/', '-', '\\','|'];
let time = 0;
for (const char in array){
   setTimeout(() => {
     process.stdout.write(`\r${array[char]}   `);
   },time);
   time+=100;
}
setTimeout(() => {
  console.log('');
}, 1000);





// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);




