export function initFeedbackModal() {
    const modal = document.querySelector(".feedback-modal");
    const btn = document.querySelector(".btn-modal");
    const closebtn = document.querySelector(".close-btn");
  
    if (!modal || !btn || !closebtn) return;
  
    btn.onclick = function () {
      const currentDisplay = window.getComputedStyle(modal).display;
      console.log("Current display:", currentDisplay);
  
      modal.style.display = currentDisplay === "none" ? "block" : "none";
    };
  
    closebtn.onclick = function () {
      modal.style.display = "none";
    };
  
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
