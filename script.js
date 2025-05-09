const checkForPalindrome = () => {
  let textInput = document.getElementById('text-input');
  let text = textInput.value;
  let normalisedText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let reversedText = normalisedText.split('').reverse().join('');

  let resultElement = document.getElementById('result');

  if (normalisedText === '') {
    alert('Please input a value');
  } else if (normalisedText.length === 1) {
    resultElement.innerText = `${text} is a palindrome`;
  } else if (normalisedText === reversedText) {
    resultElement.innerText = `${text} is a palindrome`;
  } else {
    resultElement.innerText = `${text} is not a palindrome`;
  }
};
