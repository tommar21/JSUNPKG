var principal = window.pageYOffset;
var nav = document.getElementById("pt");
var open = document.getElementById("ham");
var cerrado = true;
var menu = document.getElementById("yea");
AOS.init();



window.addEventListener("scroll", function () {
	// obtengo posición del scroll
	var desplazamiento = window.pageYOffset;
	// en responsive, al estar abiertos los enlaces, al hacer scroll desaparecen
	menu.style.height = "0%";
	cerrado = true;

	// detecto si el scroll baja o sube
	if (desplazamiento >= principal) {
	// scroll baja
		if (desplazamiento < 500) {
			nav.style.left = '0px';
			nav.style.opacity = '1';
		}else {
			nav.style.left = '-2000px';
			nav.style.opacity = '0'
		}

		principal = desplazamiento;

	}else {
	// scroll sube
	    // si subo 200 o mas mostrar nav
		if ((principal - desplazamiento) >= 200) {
			nav.style.left = '0px';
			nav.style.opacity = '1';	
			principal = desplazamiento;
		}

	}
})

open.addEventListener("click", function(){

	if (cerrado) {
		menu.style.height = "100%";
		cerrado = false;
	} else {
		menu.style.height = "0%";
		menu.style.overflow = 'hidden';
		cerrado = true;
	}

})