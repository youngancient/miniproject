document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".subdiv button").forEach((atag) => {
    atag.onclick = () => {
      let m = atag.innerHTML.toLowerCase();
      if (m == "hobbies") {
        toggleButtonA(m);
      } else if (m == "capabilities") {
        toggleButtonB(m);
      } else if (m == "interests") {
        document.querySelector(".ul-interests").style.display = "block";
        toggleButtonC(m);
      }
      document
        .querySelector("footer")
        .scrollIntoView({ behavior: "smooth", block: "end" });
    };
  });
});
//Redundancy choke here.. i look forward to upgrading this shitty code!
let isPressedA = false;
function toggleButtonA(va) {
  if (!isPressedA) {
    document.querySelector(`.ul-${va}`).style.display = "block";
    isPressedA  = true;
  } else {
    document.querySelector(`.ul-${va}`).style.display = "none";
    isPressedA = false;
  }
}
let isPressedB = false;
function toggleButtonB(va) {
  if (!isPressedB ) {
    document.querySelector(`.ul-${va}`).style.display = "block";
    isPressedB  = true;
  } else {
    document.querySelector(`.ul-${va}`).style.display = "none";
    isPressedB = false;
  }
}
let isPressedC = false;
function toggleButtonC(va) {
  if (!isPressedC) {
    document.querySelector(`.ul-${va}`).style.display = "block";
    isPressedC = true;
  } else {
    document.querySelector(`.ul-${va}`).style.display = "none";
    isPressedC= false;
  }
}


let navOpen = false;
document.querySelector(".fa-bars ").onclick = () => {
  toggle();
};


function toggle() {
  if (!navOpen) {
    document.querySelector(".alinks").style.display = "flex";
    navOpen = true;
    swap(navOpen);
  } else {
    document.querySelector(".alinks").style.display = "none";
    navOpen = false;
    swap(navOpen);
  }
}
function swap(bool){
  if(bool){
    document.querySelector(".fa-solid").classList.remove("fa-bars");
    document.querySelector(".fa-solid").classList.add("fa-xmark");
  }else{
    document.querySelector(".fa-solid").classList.remove("fa-xmark");
    document.querySelector(".fa-solid").classList.add("fa-bars");
  }
}
