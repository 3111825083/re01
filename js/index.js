function tiaozhuan() {
  window.location.href = "/html/jieyou.html";
}
function jia() {
  let shuju = window.document.getElementById("shu");
  let shuzi = parseInt(shuju.innerText);
  shuju.innerText = shuzi + 1;
}
