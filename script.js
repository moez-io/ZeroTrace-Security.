function generate() {
  let text = document.getElementById("input").value;
  if (text === "") {
    alert("Enter a keyword");
    return;
  }

  let secure = text + "@$1**55";
  document.getElementById("output").innerText =
    "Secure Password: " + secure;
}
