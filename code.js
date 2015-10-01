

var circulo = {
	radio:3,
	color:'red'
};


var rectangulo ={
	ancho: 5,
	largo: 10,
	color :'purple'
}

function Circulo(radio){
	this.radio=radio;
	this.area= function(){
		return this.radio*this.radio*PI.Math;
	}
}

var circulito = new Circulo(20);
circulito.area();


function PersonajeAnime(name,serie,genero,puntaje){
	this.name=name;
	this.serie=serie;
	this.genero=genero;
	this.puntaje=puntaje;
	this.saluda= function(){
		var mensaje= 'Hola soy' + ' '+ this.name
		return console.log(mensaje);
	}
}



var yu = new PersonajeAnime("Yu","Charlotte","varon","4");
// yu.saluda();

// var $caja_personaje= $('.Caja_anime');
// var $btn_buscar= $('.btn_Buscar');

// $btn_buscar.on("click",BuscandoPj);

function BuscandoPj(){
	var name_personaje= $caja_personaje.val();
	if(name_personaje == "konata" || name_personaje== "Konata" || name_personaje == "KONATA"){
		var konata = new PersonajeAnime("Konata","Lucky Star","chica","5");
		konata.saluda();
	}
}

function Profesor(n){
	this.name= n;
}

function Curso(profesor){
	this.profesor=profesor;
	this.saludar= function(){
		console.log("Hola alumnos soy el profesor" +  ' ' +this.profesor.name);
	}
}



var joel= new Profesor("Joel Gonzales Tipismana");
var GitHub = new Curso(joel);
GitHub.saludar();

// Poliformismo

function expresate( ser_vivo ){
	ser_vivo.hablar();
}



function Perro(n){
	this.name=n;
	this.sonido= "Gua Gua";
	this.hablar= function (){
		return console.log(this.sonido);
	}
}

function Gato(n){
	this.name=n;
	this.sonido="Miauuuu";
	this.hablar= function(){
		return console.log(this.sonido);
	}
}

function Humano(n){
	this.name=n;
	this.sonido= "Hola soy Humano";
	this.hablar= function(){
		return	console.log(this.sonido);
	}
}

var Roko= new Perro("Roko");
var Michifu= new Gato("Michifu");
var Joel = new Humano("Joel");

expresate(Roko);
expresate(Michifu);
expresate(Joel);


// Promesas con ECMAScRIPT 6


encontrarSeries()
	.then(function(){
		encontrarPersonaje(personaje[0])
	})
	.then(function(){
		encontrarPersonaje(personaje[1])
	})
	.then(function(){
		encontrarPersonaje(personaje[2])
	})
	.then(function(){
		encontrarPersonaje(personaje[3])
	})
	.then(function(){
		encontrarPersonaje(personaje[4])
	})
	// para que no se crachee todo con catch()
	.catch()

// clases con ECMAScript 6
class Auto{
	constructor(key){
		this.key=key;
	}
	adelante(hola){
		var saludo=hola;
		.then(function(){
			
		})
	}
	atras(){

	}
}


function Rectangulo(ato,ancho){
	this.alto= alto;
	this.ancho= ancho;
	this.area=function(){
		area_rectangulo=this.alto*this.ancho;
		return console.log('El area del Rectangulo es: ' + area_rectangulo);
	}
}

var Roberto_Rectangulo= new rectangulo(23,12);
Roberto_Rectangulo.area();


function Expresate( ser_vivo ){
	ser_vivo.habla();
}

function Perro(n){
	this.name=n;
	this.habla=function(){
		return console.log("Hola soy ub perro");
	}
}

function Gato(n){
	this.name=n;
	this.habla=function(){
		var saludo="";
		for(var i=0;i<=1000;i++){
			saluda+="Nyann";
		}
		return console.log(saluda + "Me llamo" + this.name);
	}
}

function Humano(n){
	this.name=n;
	this.habla=function(){
		var saludo="Hola soy un Humano";
		return	console.log(saludo + "Me llamo: " + this.name);
	}
}


var gato_sakamoto= new Gato("Sakamoto");
var perro_roko= new Perro("Roko");
var humano_joel= new Humano("Joel");


Expresate(gato_sakamoto);
Expresate(perro_roko);
Expresate(humano_joel);


// Math

Math.ceil(4.2) --> 5
Math.floor(3.4) --> 3
Math.round(0.6)  -->  1
Math.round(2.2)  --> 2

Math.random()

let rand = Math.random() * (1000 - 500)
rand = Math.ceil(rand)




