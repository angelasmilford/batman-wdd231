export function initTopnav() {
    const menubtn = document.querySelector(".menu");
    const topnav = document.querySelector(".topnav");
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2");
    const bar3 = document.querySelector(".bar3");
  
    function updateTopnavVisibility() {
      if (window.innerWidth >= 800) {
        topnav.style.display = "block";
      } else {
        topnav.style.display = "none";
      }
    }
  
    menubtn.onclick = function () {
      if (window.innerWidth < 800) {
        if (topnav.style.display === "none" || topnav.style.display === "") {
          topnav.style.display = "block";
          bar1.style.marginLeft = "50px";  
          bar3.style.marginLeft = "-50px";
        } else {
          topnav.style.display = "none";
          bar1.style.marginLeft = ""; 
          bar3.style.marginLeft = ""; 
        }
      }
    };
  
    window.onresize = function () {
      if (window.innerWidth >= 800) {
        bar1.style.marginLeft = ""; 
        bar3.style.marginLeft = ""; 
      }
    };
  
    updateTopnavVisibility();
    window.addEventListener('resize', updateTopnavVisibility);
  }
