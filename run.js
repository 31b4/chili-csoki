var  kepek = document.getElementById("kepek");
console.log(kepek)
var numberOfElvettChili =0;
var jatekos =false;//true = p1, false = p2
//kepek.innerHTML="<img src='csoki.jpg' alt='csoki' title='csoki'/>"
//kepek.innerHTML="<img src='chili.jpg' alt='chili' title='chili'/>"
for (let index = 0; index < 20; index++) {
    var chili =document.createElement("img")
    chili.src="kepek/chili.jpg"
    chili.title="chili"+index;
    chili.id ="chili"+index;
    chili.border ="3px";
    console.log(chili.id)
    kepek.appendChild(chili)
}
var csoki =document.createElement("img")
csoki.src="kepek/csoki.jpg" 
csoki.title="csocsolatte"
kepek.appendChild(csoki)
function clear(){
    for (let index = 0; index < 20; index++) {
        document.getElementById("chili"+index).style.border="3px solid black";
    }
}
function ok(){
    var elvesz = document.getElementById("elvesz").value;
    var sum = parseInt(elvesz) + parseInt(numberOfElvettChili);
    //console.log("teszt "+sum);
    if (elvesz >0 && sum <21) {
        console.log(elvesz)
        for (let index = 0; index < elvesz; index++) {
            document.getElementById("chili"+numberOfElvettChili).style.border="3px solid red";
            numberOfElvettChili++;
        }
        if (jatekos) {
            document.getElementById("jelenlegiJatekos").innerHTML="Jelenlegi játékos: Player 1";
        }
        else {
            document.getElementById("jelenlegiJatekos").innerHTML="Jelenlegi játékos: Player 2";
        }
        jatekos=!jatekos;
        //console.log(jatekos)
    }
    if(sum==20){
        if (jatekos) {
            alert("Player 2 nyert");
        }
        else{
            alert("Player 1 nyert");
        }
    }
}

function pvp(){
    numberOfElvettChili=0;
    console.log("a");
    clear()
    document.getElementById("gamemode").innerHTML="Játék mód: PvP";
    document.getElementById("jelenlegiJatekos").innerHTML="Jelenlegi játékos: Player 1";
}
function pve(){
    alert("coming soon");
}
//document.getElementById("chili0").style.border="3px solid red";
