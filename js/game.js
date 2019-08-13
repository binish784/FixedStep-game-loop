var updateSpan=document.getElementById("updateCount");
var renderSpan=document.getElementById("renderCount");

var updateCount=0;
var renderCount=0;

function update(){
	updateCount++;
	updateSpan.innerHTML=updateCount;
};


function render(){
	renderCount++;
	renderSpan.innerHTML=renderCount;
};


