var div = document.querySelector(".header-nav div");

document.querySelector(".menu").addEventListener("click", () => {
 
  if (div.classList.contains("active")) {
    div.classList.remove("active");
    console.log("jshsj");
  } else {
  
    // div.style.marginTop="0%";
   div.classList.add("active");
  }
});

