
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

// var EKI=[[5,58,"興津"],[6,19,"静岡"],[6,32,"沼津"],[6,45,"興津"],[7,0,"沼津"],[7,7,"熱海"],[7,23,"静岡"],[7,34,"沼津"],[7,46,"興津"],[8,7,"熱海"],[8,20,"興津"],[8,32,"沼津"],[8,45,"興津"],[9,0,"沼津"],[9,13,"静岡"],[9,24,"掛川"],[9,32,"興津"],[9,51,"興津"]
// ,[10,0,"掛川"],[10,12,"静岡"],[10,31,"興津"],[10,47,"興津"],[10,47,"興津"],[10,59,"掛川"],[11,13,"興津"],[11,30,"興津"],[11,50,"興津"],[12,0,"掛川"],[12,13,"興津"],[12,32,"静岡"],[12,49,"興津"],[12,59,"掛川"],[13,13,"静岡"],[13,31,"静岡"],[13,50,"興津"],[14,0,"掛川"],[14,13,"興津"],[14,32,"静岡"],[14,50,"興津"],[14,59,"掛川"],[15,11,"静岡"],[15,32,"熱海"],[15,50,"興津"],[16,14,"沼津"],[16,23,"掛川"],[16,32,"熱海"],[16,43,"熱海"],[16,59,"熱海"],[17,14,"熱海"],[17,20,"掛川"],[17,32,"静岡"],[17,32,"静岡"],[17,43,"熱海"],[17,54,"熱海"],[18,13,"三島"],[18,21,"掛川"],[18,31,"熱海"],[18,47,"興津"],[19,1,"静岡"],[19,13,"静岡"],[19,24,"三島"],[19,40,"熱海"],[19,58,"静岡"],[20,16,"静岡"],[20,27,"掛川"],[20,41,"三島"],[20,57,"静岡"],[21,17,"三島"],[21,44,"静岡"],[22,3,"静岡"],[22,25,"静岡"],[22,52,"静岡"],[23,20,"島田"],[23,50,"掛川"],[24,11,"菊川"]];
// var EKI2=[[5,49,"浜松"],[6,1,"豊橋"],[6,20,"岐阜"],[6,43,"浜松"],[6,55,"岐阜"],[7,13,"豊橋"],[7,26,"豊橋"],[7,40,"浜松"],[7,51,"浜松"],[8,1,"浜松"],[8,21,"浜松"],[8,39,"浜松"],[8,57,"浜松"],[9,9,"浜松"],[9,20,"浜松"],[9,20,"浜松"],[9,34,"浜松"],[9,46,"浜松"],[9,56,"豊橋"],[10,11,"浜松"],[10,22,"豊橋"],[10,32,"豊橋"],[10,51,"浜松"],[11,11,"浜松"],[11,23,"豊橋"],[11,32,"浜松"],[11,53,"浜松"],[12,11,"浜松"],[12,23,"浜松"],[12,33,"浜松"],[12,52,"浜松"],[13,11,"浜松"],[13,23,"浜松"],[13,32,"浜松"],[13,53,"浜松"],[14,11,"浜松"],[14,24,"岐阜"],[14,33,"浜松"],[14,52,"浜松"],[15,11,"豊橋"],[15,20,"浜松"],[15,33,"豊橋"],[15,53,"浜松"],[16,11,"浜松"],[16,32,"浜松"],[16,43,"豊橋"],[16,54,"浜松"],[17,19,"浜松"],[17,33,"浜松"],[17,44,"豊橋"],[17,52,"浜松"],[18,11,"浜松"],[18,20,"浜松"],[18,28,"浜松"],[18,37,"浜松"],[18,45,"豊橋"]
// ,[19,2,"浜松"],[19,10,"浜松"],[19,21,"浜松"],[19,39,"浜松"],[20,2,"浜松"],[20,18,"浜松"],[20,27,"浜松"],[20,40,"浜松"],[20,55,"浜松"],[21,9,"豊橋"],[21,25,"浜松"],[21,34,"浜松"],[22,6,"豊橋"],[22,30,"浜松"],[23,5,"浜松"],[23,31,"浜松"],[24,6,"浜松"]];
// var now = new Date();
// var Year = now.getFullYear();
// var Month = now.getMonth()+1;
// var Date = now.getDate();
// var Hour = now.getHours();
// var Min = now.getMinutes();
// //スクールバス
// console.log(AINO);
// //静岡駅行き表示
// for(i=0;i<EKI.length;i++){
//   if(EKI[i][0]==Hour){
//     if(EKI[i][1]>Min){
//       var p=document.createElement("p");
//       p.innerHTML=EKI[i][0]+":"+String(EKI[i][1]).padStart(2, '0');
//       p.classList.add("Nextp");
//       ShizuokaTime[0].appendChild(p);
//       VC++;
//     }
//   }
//   if(EKI[i][0]>Hour){
//     var p=document.createElement("p");
//     p.innerHTML=EKI[i][0]+":"+String(EKI[i][1]).padStart(2, '0');
//     p.classList.add("Nextp");
//     ShizuokaTime[0].appendChild(p);
//     VC++;
//   }
//   if(VC==3){
//     VC=0;
//     break;
//   }
//  }
//  //浜松駅行き表示
// for(i=0;i<EKI2.length;i++){
//   if(EKI2[i][0]==Hour){
//     if(EKI2[i][1]>Min){
//       var p=document.createElement("p");
//       p.innerHTML=EKI2[i][0]+":"+String(EKI2[i][1]).padStart(2, '0');
//       p.classList.add("Nextp");
//       HamamatuTime[0].appendChild(p);
//       VC++;
//     }
//   }
//   if(EKI2[i][0]>Hour){
//     var p=document.createElement("p");
//     p.innerHTML=EKI2[i][0]+":"+String(EKI2[i][1]).padStart(2, '0');
//     p.classList.add("Nextp");
//     HamamatuTime[0].appendChild(p);
//     VC++;
//   }
//   if(VC==3){
//     VC=0;
//     break;
//   }
//  }
//   //var tr=document.createElement('tr');

//     //var td=document.createElement('td');

//     //tr.appendChild(td);

//   //table.appendChild(tr);

//   for(i=6;i<21;i++){
//     var tr=document.createElement('tr');
//     for(j=0;j<3;j++){
//       var td=document.createElement('td');
//       var s='';
//       if(j==0){
//         td.innerHTML=i;
//         tr.appendChild(td);
//       }//j=0　時間
//       if(j==1){
//         for(k=0;k<AINO.length;k++)
//         if(AINO[k][0]==i)
//         s=s+String(AINO[k][1])+" ";
//         if(s)
//         td.innerHTML=s;
//         tr.appendChild(td);
//       }//j=1 愛野
//       if(j==2){
//         for(k=0;k<DAIGAKU.length;k++)
//         if(DAIGAKU[k][0]==i)
//         s=s+String(DAIGAKU[k][1])+" ";
//         if(s)
//         td.innerHTML=s;
//         tr.appendChild(td);
//       }//j=2 大学
//     }
//     table.appendChild(tr);
//   }
// //愛野駅静岡方面の時刻表
//  //愛野駅からの時刻表
//  for(i=5;i<25;i++){
//   var tr=document.createElement('tr');
//   for(j=0;j<3;j++){
//     var td=document.createElement('td');
//     var s='';
//     if(j==0){
//       td.innerHTML=i;
//       tr.appendChild(td);
//     }//j=0　時間
//     if(j==1){
//       for(k=0;k<EKI.length;k++)
//       if(EKI[k][0]==i)
//       s=s+String(EKI[k][1])+" ";
//       if(s)
//       td.innerHTML=s;
//       tr.appendChild(td);
//     }//j=1 駅時間
//     if(j==2){
//       for(k=0;k<EKI.length;k++)
//       if(EKI[k][0]==i)
//       s=s+String(EKI[k][2])+" ";
//       if(s)
//       td.innerHTML=s;
//       tr.appendChild(td);
//     }//j=2 行先
//   }
//   table2.appendChild(tr);
// }
// //愛野駅浜松方面の時刻表
// //愛野駅からの時刻表
// for(i=5;i<25;i++){
//   var tr=document.createElement('tr');
//   for(j=0;j<3;j++){
//     var td=document.createElement('td');
//     var s='';
//     if(j==0){
//       td.innerHTML=i;
//       tr.appendChild(td);
//     }//j=0　時間
//     if(j==1){
//       for(k=0;k<EKI2.length;k++)
//       if(EKI2[k][0]==i)
//       s=s+String(EKI2[k][1])+" ";
//       if(s)
//       td.innerHTML=s;
//       tr.appendChild(td);
//     }//j=1 駅時間
//     if(j==2){
//       for(k=0;k<EKI2.length;k++)
//       if(EKI2[k]
//         [0]==i)
//       s=s+String(EKI2[k][2])+" ";
//       if(s)
//       td.innerHTML=s;
//       tr.appendChild(td);
//     }//j=2 行先
//   }
//   table3.appendChild(tr);
// }
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