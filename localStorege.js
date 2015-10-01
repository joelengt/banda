var $ =window.jQuery

class MarvelApi {
	constructor (key){
		this.key = key
		this.baseUrl = 'http://gateway.marvel.com/v1/public/'
	}

	findSeries (title){
		let url = `${this.baseUrl}series=${title}&apikey=${this.key}`
		// LocalStorage
		if(LocalStorage[url]){
			let datos = LocalStorage[url]
			datos = JSON.parse(datos)
			console.log('Hola desde el cache')
			return Promise.resolve(datos)
		} else {
			return Promise.resolve($.get(url))
			.then((res) => {
				let= datos = res.data.results[0]
				datos = JSON.stringify(datos)
				LocalStorage[url] = datos
				return Promise.resolve(datos)
			})
		}
	}
// SImepre usar return cuando se usan las promesas
	getResourceURI (resourceURI){
		let url = `${resourceURI}?apikey=${this.key}`
		if(LocalStorage[url]){
			let dtos = LocalStorage[url]
			datos = JSON.parse(datos)
			console.log("Hola desde el cache")
			return Promise.resolve(datos)
		}

		return Promise.resolve($.get(url))
		.then((res) =>{
			let datos = res.data.results[0]
			datos = JSON.stringify(datos)
			LocalStorage[url]
			return Promise.resolve(datos)
		})
	}

	searchCharacter (name){
		let url = ´${this.baseUrl}/charanters?name=${name}&apikey=${this.key}´
		return new Promise(function (done){
			$.get(url).done(function(data){
				done(data)
			})
		})
		.then(function (res){
			// En js si niego un valor considerado 0 (cero), !0 !null etc se vuelve true
			if(!res.data.total){
				return Promise.reject('no se encontro al personaje')
			}
			return res.data.results[0]
		})
	}
}


window.MarvelApi = MarvelApi






class Personaje{
	constructor(name,LastName){
		this.name = name
		this.LastName = LastName
	}
	cabeza(key){
		this.key = key
		this.saludo =>{
			return console.log("mama")
		}

	}
	cuerpo(res){
		.then((res)=>{
			return console.log("mama")

		})
	}
}


Personaje.cabeza();


// usando Template de ECMAScript 6

class saludo{
	constructor(){

	}
	cabeza(){

	}
	pier(){

	}
}

var Saludar(){
	var hola=1;
	foo: function() {},
	bar: function() {
		document.addEventListener("click", function e(){
			this.foo()
			let hola=12;
		}
	}
}