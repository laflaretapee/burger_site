document.addEventListener("DOMContentLoaded", function() {
  const scannerContainer = document.getElementById('scanner-container');
  const resultDiv = document.getElementById('result');
  const startScanningButton = document.getElementById('start-scanning');

  const html5QrCode = new Html5Qrcode("preview");

  startScanningButton.addEventListener('click', () => {
      html5QrCode.start(
          { facingMode: "environment" }, 
          {
              fps: 10,
              qrbox: 250
          },
          (decodedText, decodedResult) => {
              resultDiv.innerHTML = `Result: ${decodedText}`;
          },
          (errorMessage) => {
              console.error(errorMessage);
          }
      ).catch((err) => {
          console.error(`Error: ${err}`);
      });
  });
});
