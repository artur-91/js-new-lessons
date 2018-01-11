function OurJquery(elements){
	this.elements = elements;
	this.on = function (evantname,f){
		for (var i = 0; i < this.elements.length; i++){
			elements[i].addEventListenner(evantname,f)
		}
	}
}