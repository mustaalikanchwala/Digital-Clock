const clock = document.getElementById('clock');
const date = document.getElementById('date');
setInterval(()=>{
  let time = new Date()
clock.innerHTML = time.toLocaleTimeString();
date.innerHTML = time.toLocaleDateString();
},1000);
