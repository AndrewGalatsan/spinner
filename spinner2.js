const string = process.stdout.write('trying if spinner is working \rtesting\n');


const spinner2 = (string) => {
  for (let i = 0; i < string.length; i++){
    setTimeout(() => {
      process.stdout.write('\r| ${string[i]}  ');
    }, 100);
  }
}



