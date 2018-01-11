$(document).ready(function(){
	var lista=["piedra.png","papel.png","tijeras.png","win.png","lus.png"];
	var rondas=0;
	var victorias=0;
	var maquina=0;
	var bienvenid=$(".bienvenida");
	var res=$(".resul");
	var cpu=0;
	var marca=$(".marcador");
	var iajugada=$(".ia");
	var imag=$('.iaimg');
function hola() {
	bienvenid.text('Marcador');
}
function reseto(){
	victorias=0;
	maquina=0;
	hola();
}
function proceso(valor){
		cpu=Math.floor(Math.random()*3);
		if(valor==0 && cpu==2){
				victorias++;
				res.text('Has ganado');
		}else if (valor==1 && cpu==0){
				victorias++;
				res.text('Has ganado');
		}else if(valor==2 && cpu==1){
				victorias++;
				res.text('Has ganado');
		}else if (valor==cpu) {
			rondas++;
			res.text('Empate');
		}else{
			maquina++;
			res.text('Has perdido');
		}
		if(victorias==3){
			res.text('Felicidades, has ganado a la CPU.');
			bienvenid.text('Fin del juego');
			reseto();
		}else if(maquina==3){
			res.text('Has perdido, vuelve a intentarlo');
			bienvenid.text('Fin del juego');
			reseto();
		}
		marca.text(victorias+'-'+maquina);
		iajugada.text('La CPU ha jugado:');
		imag.attr('src',lista[cpu]);

	}
	hola();
	$(".cl1").click(function(){
		proceso(0);
	});
	$(".cl2").click(function(){
		proceso(1);
	});
	$(".cl3").click(function(){
		proceso(2);
	});

});

