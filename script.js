const checkForPalindrome = () => {
  let textInput = document.getElementById('text-input');
  let value = textInput.value.trim();

  if (value === '') {
    alert('Please input a value');
  }

  let normalisedText = value.replace(/[ _,.:/\-\(\)]/g, '').toLowerCase();
  console.log('normalisedText', normalisedText);

  let reversedText = normalisedText.split('').reverse().join('');
  console.log('reversedText', reversedText);

  let resultElement = document.getElementById('result');

  if (normalisedText === reversedText) {
    resultElement.innerText = `${value} is a palindrome`;
  } else {
    resultElement.innerText = `${value} is not a palindrome`;
  }
};
