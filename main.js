function openModal1(e) {
  var modal = document.querySelector(".modal1");
  var modalBg = document.querySelector(".modalBackground");
  document.querySelector("body").classList.add("modal-open");
  modalBg.style.display ="block";
  modal.style.display="block";
  e.preventDefault();
  console.log("hi");
}

function closeModal1(){
  var modal = document.querySelector(".modal1");
  var modalBg = document.querySelector(".modalBackground");
  document.querySelector("body").classList.remove("modal-open");
  modalBg.style.display ="none";
  modal.style.display="none";
}

function openModal2(e) {
  var modal = document.querySelector(".modal2");
  var modalBg = document.querySelector(".modalBackground");
  document.querySelector("body").classList.add("modal-open");
  modalBg.style.display ="block";
  modal.style.display="block";
  e.preventDefault();
}

function closeModal2(){
  var modal = document.querySelector(".modal2");
  var modalBg = document.querySelector(".modalBackground");
  document.querySelector("body").classList.remove("modal-open");
  modalBg.style.display ="none";
  modal.style.display="none";
}

function openModal3(e) {
  var modal = document.querySelector(".modal3");
  var modalBg = document.querySelector(".modalBackground");
  document.querySelector("body").classList.add("modal-open");
  modalBg.style.display ="block";
  modal.style.display="block";
  e.preventDefault();
}

function closeModal3(){
  var modal = document.querySelector(".modal3");
  var modalBg = document.querySelector(".modalBackground");
  document.querySelector("body").classList.remove("modal-open");
  modalBg.style.display ="none";
  modal.style.display="none";
}

function openModal4(e) {
  var modal = document.querySelector(".modal4");
  var modalBg = document.querySelector(".modalBackground");
  document.querySelector("body").classList.add("modal-open");
  modalBg.style.display ="block";
  modal.style.display="block";
  e.preventDefault();
}

function closeModal4(){
  var modal = document.querySelector(".modal4");
  var modalBg = document.querySelector(".modalBackground");
  document.querySelector("body").classList.remove("modal-open");
  modalBg.style.display ="none";
  modal.style.display="none";
}
