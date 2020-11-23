function ukazCas() {
  let dt = new Date();
  let s = dt.toLocaleTimeString() ;
  document.getElementById("cas").innerHTML = s;
}
let startTime;
function poNacteni() {
 startTime = Date.now();
  let dt = new Date();
  let tyden = new Array("neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota");
  with (dt){
  den = getDay();
  }
  let rok = new Array("ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince");
  with (dt){
  mesic = getMonth();
  }
  let s = "Dnes je " + tyden[den] + " " + dt.getDate() + "." + rok[mesic] + "." + dt.getFullYear();
  console.log(s);
  document.getElementById("datum").innerHTML = s;
  

  setInterval(ukazCas, 1000);
}

function patekTrinact(){
  let mesic = new Date().getMonth(); 
  let patek = " ";
  let rok = 12;
  for (let i = 0; i < rok; i++){
    let datum = new Date (2020, mesic + i, 13).getDay(); 
    if(datum == 5){
      let den = new Date (2020, mesic + i, 13).toLocaleDateString();
      patek = patek + den + ", "; 
    }
  }
  patek += ".";
  document.getElementById("patek").innerHTML = patek;
  console.log(patek);
}