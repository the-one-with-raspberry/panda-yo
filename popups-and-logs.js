function myFunction() {
  var txt;
  if (confirm("Estabilishing connection...")) {
    txt = "Confirmed. Unpausing process.";
  } else {
    txt = "Connection cancelled. It will not work.";
  }
  console.log txt;
}
