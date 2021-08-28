//定義
var AINO,DAIGAKU,SHIZUOKA,HAMAMATU,DATE;
var body=document.getElementById("body");
Set_Datas();
//関数---------------------------------------------------------------------
function View_Bus(){
  var div=document.createElement("div");
  div.classList.add("content");
  div.appendChild(View_Bus_Soon(AINO,"愛野駅発"));
  div.appendChild(View_Bus_Soon(DAIGAKU,"大学発"));
  body.appendChild(div);
}

function View_Bus_Soon(times,description){
  var div=document.createElement("div");
  var p=document.createElement("p");
  p.innerHTML=description;
  div.appendChild(p);
  div.classList.add("bus-soon");
  var count=0;
  for(var i=0;i<times.length&&count<3;i++){
    if(times[i*3]>DATE.getHours()){
      var p=document.createElement("p");
      p.innerHTML=times[i*3]+":"+String(times[1+i*3]).padStart(2, '0');
      div.appendChild(p);
      count++;
    }
  }
  return div;
}
function Set_Datas(){
  var AD = new XMLHttpRequest();
  AD.addEventListener("load", Aino_To_Daigaku);
  AD.open("GET", "./AD.txt");
  AD.send();
  var DA = new XMLHttpRequest();
  DA.addEventListener("load", Daigaku_To_Aino);
  DA.open("GET", "./DA.txt");
  DA.send();
  var SH = new XMLHttpRequest();
  SH.addEventListener("load", Shizuoka_To_Hamamatu);
  SH.open("GET", "./SH.txt");
  SH.send();
  var HS = new XMLHttpRequest();
  HS.addEventListener("load", Hamamatu_To_Shizuoka);
  HS.open("GET", "./HS.txt");
  HS.send();
  DATE = new Date();
  HS.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        View_Bus();
    }
  }
}

function Aino_To_Daigaku () {
  AINO=this.responseText.split(",");
  for(i=0;i<AINO.length;i++){
     AINO[i]=AINO[i].replace('\r\n','');
  }
  console.log(AINO);
}

function Daigaku_To_Aino () {
  DAIGAKU=this.responseText.split(",");
  for(i=0;i<DAIGAKU.length;i++){
     DAIGAKU[i]=DAIGAKU[i].replace('\r\n','');
  }
}

function Shizuoka_To_Hamamatu () {
  HAMAMATU=this.responseText.split(",");
  for(i=0;i<HAMAMATU.length;i++){
    HAMAMATU[i]=HAMAMATU[i].replace('\r\n','');
  }
}

function Hamamatu_To_Shizuoka () {
  SHIZUOKA=this.responseText.split(",");
  for(i=0;i<SHIZUOKA.length;i++){
    SHIZUOKA[i]=SHIZUOKA[i].replace('\r\n','');
  }
}
