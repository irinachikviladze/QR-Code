// select the form and input elements
const form = document.querySelector('form');
const textInput = document.querySelector('#text');

// select the QR code container
const qrcodeContainer = document.querySelector('#qrcode');

// create a new QRCode object
const qrcode = new QRCode(qrcodeContainer);

// listen for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // generate QR code with the entered text
  qrcode.makeCode(textInput.value);
});