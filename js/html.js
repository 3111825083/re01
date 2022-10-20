function tianjia() {
  let c = document.createElement("textarea");
  c.id = "xianshi";
  let a = document.getElementById("shurukuang").value;
  localStorage.setItem("yi", a);
  let b = localStorage.getItem("yi");

  document.getElementById("xianshi").innerHTML = b;
}
