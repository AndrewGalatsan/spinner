process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r| testing  ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/  if spinner  ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-  is ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\ working  '); 
}, 700);