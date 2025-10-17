// Update user time every second
function updateTime() {
  const timeEl = document.getElementById("user-time");
  timeEl.textContent = Date.now();
}

updateTime();

setInterval(updateTime, 1000);


 // Focus management for accessibility
// document.addEventListener('keydown', function(e) {
//   if (e.key === 'Tab') {
//       document.documentElement.classList.add('keyboard-navigation');
//   }
// });

// document.addEventListener('mousedown', function() {
//   document.documentElement.classList.remove('keyboard-navigation');
// });