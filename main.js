let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #1b1b32;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #1b1b32;">Programadora web y estudiante de Ing. en Computación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
