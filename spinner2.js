process.stdout.write('hello from spinner2.js... \rheyyy\n');
const spinner = ['|', '/', '-', '\\'];
let index = 0;

const animateSpinner = () => {
  process.stdout.write('\r' + spinner[index] + '   ');
  index = (index + 1) % spinner.length;
};

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    animateSpinner();
  }, i * 200); // Adjust the delay as needed
}
