$(document).ready(function(){
	var lista=["piedra.png","papel.png","tijeras.png","win.png","lus.png"];
	var victorias=0;
	var maquina=0;
	var res=$(".resul");
function hola() {
	$(".bienvenida").text('Marcador');
}
function reseto(s){
	$(".bienvenida").addClass("animation");
	if(s==3){
		$(".bienvenida").text('Felicidades has ganado a la CPU');
	}else if(s==4){
		$(".bienvenida").text('Has perdido, vuelve a intentarlo');
	}
	$(".fin").attr('src',lista[s]);
	$(".cl4").removeClass("oculto");
}
function proceso(valor){
		var cpu=Math.floor(Math.random()*3);
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
			reseto(3);
		}else if(maquina==3){
			reseto(4);
		}
		$(".marcador").text(victorias+'-'+maquina);
		$(".ia").text('La CPU ha jugado:');
		$(".iaimg").attr('src',lista[cpu]);

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
	$(".cl4").click(function(){
		victorias=0;
		maquina=0;
		hola();
		$(".marcador").text('0-0');
		$(".ia").text('');
		res.text('');
		$(".iaimg").attr('src','');
		$(".fin").attr('src','');
		$(".bienvenida").removeClass("animation");
		$(".cl4").addClass("oculto");
	})

});

