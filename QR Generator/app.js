const api_url =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const input = document.getElementById("inputText");
const imgBox = document.getElementById("img-box");
const qrImage = document.getElementById("qrImage");

function generateQR() {
  if (input.value.length > 0) {
    qrImage.src = api_url + input.value;
    imgBox.classList.add("show-img");
  } else {
    imgBox.classList.remove("show-img");
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
  }
}
