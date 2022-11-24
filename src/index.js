const input = document.querySelector('#input');
const checkBtn = document.querySelector('#check');
const result = document.querySelector('#result');
const regex = /[^A-Za-z0-9]/g;

const handleInputChange = () => {
  if (input.value.trim()) {
    checkBtn.removeAttribute('disabled');
  } else {
    checkBtn.setAttribute('disabled', true);
    result.classList.add('hide');
  }
};

const checkPalindrome = () => {
  const inputValue = input.value;
  const originWord = inputValue.toLowerCase().replaceAll(regex, '');
  const reversedWord = originWord.split('').reverse().join('');

  if (originWord === reversedWord) {
    result.innerHTML = `Yes, <span class="highlight">'${inputValue}'</span> is a palindrome!`
  } else {
    result.innerHTML = `No, <span class="highlight">'${inputValue}'</span> isn't a palindrome!`
  }

  result.classList.remove('hide');
};

input.addEventListener('input', handleInputChange);
checkBtn.addEventListener('click', checkPalindrome);
