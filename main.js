
var table=document.getElementById("tbody");
var table2=document.getElementById("tbody2");
var table3=document.getElementById("tbody3");
var AINOTime=document.getElementsByClassName("AINOTime");
var DAIGAKUTime=document.getElementsByClassName("DAIGAKUTime");
var ShizuokaTime=document.getElementsByClassName("ShizuokaTime");
var HamamatuTime=document.getElementsByClassName("HamamatuTime");
var i,j,k;
var AINO,DAIGAKU;

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


function Aino_To_Daigaku () {
  //console.log(this.responseText);
  AINO=this.responseText.split(",");
  for(i=0;i<AINO.length;i++){
     AINO[i]=AINO[i].replace('\r\n','');
  }
  console.log(AINO);
}
function Daigaku_To_Aino () {
  //console.log(this.responseText);
  DAIGAKU=this.responseText.split(",");
  for(i=0;i<DAIGAKU.length;i++){
     DAIGAKU[i]=DAIGAKU[i].replace('\r\n','');
  }
  console.log(DAIGAKU);
}
function Shizuoka_To_Hamamatu () {
  //console.log(this.responseText);
  Hamamatu=this.responseText.split(",");
  for(i=0;i<Hamamatu.length;i++){
     Hamamatu[i]=Hamamatu[i].replace('\r\n','');
  }
  console.log(Hamamatu);
}
function Hamamatu_To_Shizuoka () {
  //console.log(this.responseText);
  Shizuoka=this.responseText.split(",");
  for(i=0;i<Shizuoka.length;i++){
     Shizuoka[i]=Shizuoka[i].replace('\r\n','');
  }
  console.log(Shizuoka);
}