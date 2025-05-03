let currentValue = '';
let isMeterToCm = true;

function valuecal(val) {
  currentValue += val;
  document.getElementById('inputMeter').value = currentValue;
  updateInputField();
}

function clearall() {
  currentValue = '';
  updateInputField();
  document.getElementById('inputMeter').value = '';
  document.getElementById('resultCm').value = '';
}

function updateInputField() {
    document.getElementById('inputMeter').value = currentValue;
  }

function convertToCm() {
  const input = parseFloat(currentValue);
  if (isNaN(input)) {
    document.getElementById('resultCm').value = 'Input tidak valid';
    return;
  }

  let result;
  if (isMeterToCm) {
    result = input * 100;
    document.getElementById('resultCm').value = result + ' CM';
    document.getElementById('resultCm').value = result + ' CM';
  } else {
      result = input / 100;
      document.getElementById('resultCm').value = result + ' M';
    }
}

document.addEventListener('DOMContentLoaded', () => {
  const flipButton = document.querySelector('.button-flip');
  const introTitle = document.querySelector('.intro h2');
  const introText = document.querySelector('.intro p');
  const inputField = document.getElementById('inputMeter');
  const resultField = document.getElementById('resultCm');
  const mainTitle = document.getElementById('main-title');

  flipButton.addEventListener('click', () => {
    isMeterToCm = !isMeterToCm;
    if (isMeterToCm) {
      document.title = 'M => CM CONVERTER';
      mainTitle.textContent = 'Meter(M) => Sentimeter(CM) CONVERTER';
      flipButton.textContent = 'CM => M';
      introTitle.textContent = 'M => CM';
      inputField.placeholder = 'Masukkan Angka M';
      resultField.placeholder = 'Hasil (Cm)';
    } else {
        document.title = 'CM => M CONVERTER';
        mainTitle.textContent = 'Sentimeter(CM) => Meter(M) CONVERTER';
        flipButton.textContent = 'M => CM';
        introTitle.textContent = 'CM => M';
        inputField.placeholder = 'Masukkan Angka CM';
        resultField.placeholder = 'Hasil (M)';
      }
    clearall();
  });

  inputField.addEventListener('input', (e) => {
    currentValue = e.target.value;
  });

  inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      convertToCm();
    }
  });
});