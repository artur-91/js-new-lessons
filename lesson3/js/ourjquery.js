function $(selector){
	var elements = document.querySelector(selector)
	return new Ourjquery(elements)
}

function Ourjquery(elements){
	this.elements = elements;
	this.on = function(eventname,f){
		for(var i = 0; i < this.elements.length; i++){
			this.elements[i].addEventListener(eventname,f);
		}
	}
	this.addClass = function(name){
		for(var i = 0; i < this.elements.length; i++){
			this.elements[i].classList.add(name);
		}
		return this;

	}
	this.removeClass = function(name){
		for(var i = 0; i < this.elements.length; i++){
			this.elements[i].classList.remove(name);
		}
		return this;
	}
	 
}