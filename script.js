const container = document.getElementById("container")
const colors = ["#ff3300","#ff9900", "#ff4000", "#00ffff","#00ff00","#ff00ff","#262673","#8000ff","#800033","#e60000"]
const DOTS = 500
for(let i=0; i<DOTS; i++){
	const dot = document.createElement("div")
	dot.classList.add("dot")
	dot.addEventListener("mouseover",() => setColor(dot))
	dot.addEventListener("mouseout",() => removeColor(dot))
	container.appendChild(dot)
	
}

function setColor(element){
	const color = getRandomColor()
	element.style.background=color
	element.style.boxShadow='0 0 2px ${color}, 0 0 10px ${color}'
	
}

function removeColor(element){
	element.style.background="#1d1d1d"
	element.style.boxShadow=" 0 0 2px #000"
}

function getRandomColor(){
	return colors [Math.floor(Math.random()*colors.length)]
}