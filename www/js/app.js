$(document).foundation();

var coverReveal = {
	  delay    : 200,
	  distance : '90px',
	  easing   : 'ease-in-out',
	  rotate   : { z: 10 },
	  scale    : 1.1
	};
window.sr = ScrollReveal();
sr.reveal('.project-cover', coverReveal);
