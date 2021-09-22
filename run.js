var  kepek = document.getElementById("kepek");
console.log(kepek)
var numberOfElvettChili =0;
var jatekos =false;//true = p1, false = p2
var jatekMod;
//kepek.innerHTML="<img src='csoki.jpg' alt='csoki' title='csoki'/>"
//kepek.innerHTML="<img src='chili.jpg' alt='chili' title='chili'/>"
for (let index = 0; index < 20; index++) {
    var chili =document.createElement("img")
    chili.src="kepek/chili.jpg"
    chili.title="chili"+index;
    chili.id ="chili"+index;
    chili.border ="3px";
    chili.onclick=function(){
        if (jatekMod=="pvp") {
            
            playerFight(index)
        }
        else if (jatekMod=="pve"){
           
            AiRobot(index)
        }
    }
    console.log(chili.id)
    kepek.appendChild(chili)
}
var csoki =document.createElement("img")
csoki.src="kepek/csoki.jpg" 
csoki.title="csocsolatte"
kepek.appendChild(csoki)
function kepreKatt(){
}
function clear(){
    for (let index = 0; index < 20; index++) {
        document.getElementById("chili"+index).style.border="3px solid black";
    }
    document.getElementById("elvesz").value = 1;
    numberOfElvettChili=0;
    jatekos =false;
}
function AiRobot(params){
    var elvesz;
    var sum;
    if(!(params>0)){
        elvesz = document.getElementById("elvesz").value;
        sum = parseInt(elvesz) + parseInt(numberOfElvettChili);
    }
    else{
        elvesz = parseInt(params+1)-parseInt(numberOfElvettChili);
        sum = parseInt(elvesz) + parseInt(numberOfElvettChili)
    }
    if (elvesz >0 &&elvesz<4 && sum <21) {
        for (let index = 0; index < elvesz; index++) {
            document.getElementById("chili"+numberOfElvettChili).style.border="3px solid #33b864";
            numberOfElvettChili++;
            //console.log("hahah"+numberOfElvettChili)
        }
        if(sum==20){
            alert("Vesztettél hahaha!")
            clear()
            return;
        }
        var lehetosegek = parseInt(20) - parseInt(numberOfElvettChili);
        var sikerKerdojel=false;
        for (let index = 1; index <= 3; index++) {
            if ((lehetosegek-index-1)%4==0) {
                sikerKerdojel=true;
                RobotElvesz(index)
                alert("Robot:\nElveszek "+index +" chilit")
                break;
            }
        }
        if (!sikerKerdojel) {
            if (numberOfElvettChili==19) {
                RobotElvesz(1)
                alert("Robot:\nElveszek "+1 +" chilit")
                alert("Nyertél lol")
                clear()
                return;
            }
            else{
                const rnd = Math.floor(Math.random() * 3)+1;
                RobotElvesz(rnd)
                alert("Robot:\nElveszek "+rnd +" chilit")
            }
        }
    }
}
function RobotElvesz(params) {
    var elvesz = document.getElementById("elvesz").value;
    var sum = parseInt(elvesz) + parseInt(numberOfElvettChili);
    for (let index = 0; index < params; index++) {
        document.getElementById("chili"+numberOfElvettChili).style.border="3px solid #189ad3";
        if (numberOfElvettChili<19) {
            numberOfElvettChili++;
        }
        //console.log("hahah"+numberOfElvettChili)
    }
}
function playerFight(params) {
    var elvesz;
    var sum;
    if(!(params>0)){
        elvesz = document.getElementById("elvesz").value;
        sum = parseInt(elvesz) + parseInt(numberOfElvettChili);
    }
    else{
        elvesz = parseInt(params+1)-parseInt(numberOfElvettChili);
        sum = parseInt(elvesz) + parseInt(numberOfElvettChili)
    }
    //console.log("teszt "+sum);
    if (elvesz >0 &&elvesz<4 && sum <21) {
        console.log(elvesz)
        for (let index = 0; index < elvesz; index++) {
            if (jatekos) {
                console.log("kurvaaa")
                document.getElementById("chili"+numberOfElvettChili).style.border="3px solid #33b864";
            }else{
                console.log("kurvaaa")
                document.getElementById("chili"+numberOfElvettChili).style.border="3px solid #189ad3";
            }
            numberOfElvettChili++;
        }
        if (jatekos) {
            document.getElementById("jelenlegiJatekos").innerHTML="Jelenlegi játékos: Player 1";
            document.getElementById("jelenlegiJatekos").style.color="#189ad3";
        }
        else {
            document.getElementById("jelenlegiJatekos").innerHTML="Jelenlegi játékos: Player 2";
            document.getElementById("jelenlegiJatekos").style.color="#33b864";
        }
        jatekos=!jatekos;
        console.log(jatekos)
    }
    if(sum==20){
        if (jatekos) {
            alert("Player 2 nyert");
        }
        else{
            alert("Player 1 nyert");
        }
        clear()
    }
}
function ok(){
    if (jatekMod=="pvp") {
        playerFight()
    }
    else if (jatekMod=="pve"){
        AiRobot()
    }
}
function pvp(){
    jatekMod="pvp";
    clear()
    document.getElementById("gamemode").innerHTML="Játék mód: PvP";
    document.getElementById("jelenlegiJatekos").innerHTML="Jelenlegi játékos: Player 1";
    document.getElementById("jelenlegiJatekos").style.color="#189ad3";
}
function pve(){
    jatekMod="pve"
    clear()
    document.getElementById("gamemode").innerHTML="Játék mód: PvE";
    document.getElementById("jelenlegiJatekos").innerHTML="Jelenlegi játékos: Te";
}
//document.getElementById("chili0").style.border="3px solid red";
