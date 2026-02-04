// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// fake contact form submit
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "Thank you! Your message has been recorded (demo).";
  msg.classList.add("text-success");
  form.reset();
});
