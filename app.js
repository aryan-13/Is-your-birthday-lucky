const birthD = document.querySelector('#b-date');
const luckyNum = document.querySelector('#luck-num');

// BUTTON SELECTOR
const checkBtn = document.querySelector('.btn');

// OUTPUT
const output = document.querySelector('.display-result');
// VARIABLES
var dob = 0;
var lnum = 0;
checkBtn.addEventListener('click', () => {
  dob = birthD.value;
  lnum = luckyNum.value;
  var s = calculateSum(dob);
  console.log(s);
  if (s % lnum === 0) {
    output.innerHTML = 'Your birth date is lucky!🌟';
    output.style.color = '#34D399';
  } else {
    output.innerHTML = 'Your birth date is not lucky!';
    output.style.color = '#EF4444';
  }
});

function calculateSum(dob) {
  dob = dob.replaceAll('-', '');
  var sum = 0;
  console.log(dob);
  for (var i = 0; i < dob.length; i++) {
    sum = sum + Number(dob[i]);
    // console.log(i + 'sum: ', sum);
  }

  return sum;
}
