process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinner = ['|', '/', '-', '\\'];
let index = 0;

const animateSpinner = () => {
  process.stdout.write('\r' + spinner[index] + '   ');
  index = (index + 1) % spinner.length;
};

setTimeout(() => {
  animateSpinner();
}, 100);

setTimeout(() => {
  animateSpinner();
}, 300);

setTimeout(() => {
  animateSpinner();
}, 500);

setTimeout(() => {
  animateSpinner();
}, 700);

setTimeout(() => {
  animateSpinner();
}, 900);

setTimeout(() => {
  animateSpinner();
}, 1100);

setTimeout(() => {
  animateSpinner();
}, 1300);

setTimeout(() => {
  animateSpinner();
}, 1500);
