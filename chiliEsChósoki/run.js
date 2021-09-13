var  kepek = document.getElementById("kepek");
console.log(kepek)
//kepek.innerHTML="<img src='csoki.jpg' alt='csoki' title='csoki'/>"
//kepek.innerHTML="<img src='chili.jpg' alt='chili' title='chili'/>"
for (let index = 0; index < 20; index++) {
    var chili =document.createElement("img")
    chili.src="chili.jpg"
    chili.title="chili"+index;
    chili.id ="chili"+index;
    chili.border ="3px";
    console.log(chili.id)
    kepek.appendChild(chili)
}
function clear(){
    for (let index = 0; index < 20; index++) {
        document.getElementById("chili"+index).style.border="3px solid black";
    }
}
function pvp(){
    console.log("a");
    clear()
    document.getElementById("gamemode").innerHTML="Játék mód: PvP";
}
//document.getElementById("chili0").style.border="3px solid red";
var csoki =document.createElement("img")
csoki.src="csoki.jpg" 
csoki.title="csocsolatte"
kepek.appendChild(csoki)
