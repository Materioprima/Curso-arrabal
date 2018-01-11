$(document).ready(function(){
	var lista=["piedra.png","papel.png","tijera.png"];
	var rondas=0;
	var victorias=0;
	var maquina=0;
	var bienvenid=$(".bienvenida");
	var res=$(".resul");
	var cpu=0;
	var marca=$(".marcador");
	function hola() {
		bienvenid.text('Marcador');
	}
function proceso(valor){
		cpu=Math.floor(Math.random()*3);
		if(valor==0 && cpu==2){
				victorias++;
				rondas++;
				res.text('Has ganado');
				fin(rondas);
		}else if (valor==1 && cpu==0){
				victorias++;
				rondas++;
				res.text('Has ganado');
				fin(rondas);
		}else if(valor==2 && cpu==1){
				victorias++;
				rondas++;
				res.text('Has ganado');
				fin(rondas);
		}else if (valor==cpu) {
			rondas++;
			res.text('Empate');
			fin(rondas);
		}else{
			rondas++;
			maquina++;
			res.text('Has perdido');
			fin(rondas);
		}
		marca.text(victorias+'-'+maquina);
	}
	function fin(round){
		if(victorias==3 || maquina==3){
			if(victorias>=2){
				res.text('Felicidades, has ganado a la CPU.');
			}else if (maquina==victorias) {
				res.text('Empate');
			}else{
				res.text('Ha ganado la CPU, vuelve a intentarlo');
			}
			bienvenid.text('Fin del juego');
		}
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

