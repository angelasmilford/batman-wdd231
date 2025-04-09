import { toggleDarkMode } from "./darkmode.js";
import { toggleMenu } from "./hamburger.js";
import { toggleFeedbackModal } from "./feedbackModal.js";

document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
document.querySelector(".menu").addEventListener("click", toggleMenu); //change
document.querySelector(".btn-modal").addEventListener("click", toggleFeedbackModal);
document.querySelector(".close-btn").addEventListener("click", toggleFeedbackModal);