
var i,j,k;
var AINO=[[7,50],[7,58],[8,8],[8,12],[8,25],[8,38],[8,52],[9,5],[9,25],[9,55],[10,7],[10,15],[10,20],[10,27],[11,00],[11,45],[12,5],[12,25],[12,45],[13,5],[13,30],[14,7],[14,42],[15,10],[15,54],[16,7],[16,22],[16,37],[17,20],[18,7],[19,18],[20,11]];
var DAIGAKU=[[8,51],[9,40],[10,40],[11,35],[11,55],[12,15],[12,35],[12,55],[13,15],[14,0],[14,35],[14,50],[15,0],[15,40],[16,0],[16,15],[16,20],[16,30],[17,0],[17,27],[17,40],[17,55],[18,0],[18,20],[18,35],[18,50],[19,10],[19,28],[19,45],[20,4],[20,30],[20,45]];
var EKI=[[5,58,"興津"],[6,19,"静岡"],[6,32,"沼津"],[6,45,"興津"],[7,0,"沼津"],[7,7,"熱海"],[7,23,"静岡"],[7,34,"沼津"],[7,46,"興津"],[8,7,"熱海"],[8,20,"興津"],[8,32,"沼津"],[8,45,"興津"],[9,0,"沼津"],[9,13,"静岡"],[9,24,"掛川"],[9,32,"興津"],[9,51,"興津"]
,[10,0,"掛川"],[10,12,"静岡"],[10,31,"興津"],[10,47,"興津"],[10,47,"興津"],[10,59,"掛川"],[11,13,"興津"],[11,30,"興津"],[11,50,"興津"],[12,0,"掛川"],[12,13,"興津"],[12,32,"静岡"],[12,49,"興津"],[12,59,"掛川"],[13,13,"静岡"],[13,31,"静岡"],[13,50,"興津"],[14,0,"掛川"],[14,13,"興津"],[14,32,"静岡"],[14,50,"興津"],[14,59,"掛川"],[15,11,"静岡"],[15,32,"熱海"],[15,50,"興津"],[16,14,"沼津"],[16,23,"掛川"],[16,32,"熱海"],[16,43,"熱海"],[16,59,"熱海"],[17,14,"熱海"],[17,20,"掛川"],[17,32,"静岡"],[17,32,"静岡"],[17,43,"熱海"],[17,54,"熱海"],[18,13,"三島"],[18,21,"掛川"],[18,31,"熱海"],[18,47,"興津"],[19,1,"静岡"],[19,13,"静岡"],[19,24,"三島"],[19,40,"熱海"],[19,58,"静岡"],[20,16,"静岡"],[20,27,"掛川"],[20,41,"三島"],[20,57,"静岡"],[21,17,"三島"],[21,44,"静岡"],[22,3,"静岡"],[22,25,"静岡"],[22,52,"静岡"],[23,20,"島田"],[23,50,"掛川"],[24,11,"菊川"]];
var EKI2=[[5,49,"浜松"],[6,1,"豊橋"],[6,20,"岐阜"],[6,43,"浜松"],[6,55,"岐阜"],[7,13,"豊橋"],[7,26,"豊橋"],[7,40,"浜松"],[7,51,"浜松"],[8,1,"浜松"],[8,21,"浜松"],[8,39,"浜松"],[8,57,"浜松"],[9,9,"浜松"],[9,20,"浜松"],[9,20,"浜松"],[9,34,"浜松"],[9,46,"浜松"],[9,56,"豊橋"],[10,11,"浜松"],[10,22,"豊橋"],[10,32,"豊橋"],[10,51,"浜松"],[11,11,"浜松"],[11,23,"豊橋"],[11,32,"浜松"],[11,53,"浜松"],[12,11,"浜松"],[12,23,"浜松"],[12,33,"浜松"],[12,52,"浜松"],[13,11,"浜松"],[13,23,"浜松"],[13,32,"浜松"],[13,53,"浜松"],[14,11,"浜松"],[14,24,"岐阜"],[14,33,"浜松"],[14,52,"浜松"],[15,11,"豊橋"],[15,20,"浜松"],[15,33,"豊橋"],[15,53,"浜松"],[16,11,"浜松"],[16,32,"浜松"],[16,43,"豊橋"],[16,54,"浜松"],[17,19,"浜松"],[17,33,"浜松"],[17,44,"豊橋"],[17,52,"浜松"],[18,11,"浜松"],[18,20,"浜松"],[18,28,"浜松"],[18,37,"浜松"],[18,45,"豊橋"]
,[19,2,"浜松"],[19,10,"浜松"],[19,21,"浜松"],[19,39,"浜松"],[20,2,"浜松"],[20,18,"浜松"],[20,27,"浜松"],[20,40,"浜松"],[20,55,"浜松"],[21,9,"豊橋"],[21,25,"浜松"],[21,34,"浜松"],[22,6,"豊橋"],[22,30,"浜松"],[23,5,"浜松"],[23,31,"浜松"],[24,6,"浜松"]];
var now = new Date();
var Year = now.getFullYear();
var Month = now.getMonth()+1;
var Date = now.getDate();
var Hour = now.getHours();
var Min = now.getMinutes();
var VC=0;
  var Button=document.getElementById("hamburger");
  Button.addEventListener('click', {
  handleEvent: function (event) {
    console.log(1);
    var wrapper=document.getElementsByClassName("menu-wrapper-parent");
    wrapper[0].style.display="block";
  }
});
var Close=document.getElementById("close");
Close.addEventListener('click', {
handleEvent: function (event) {
  console.log(2);
  var wrapper=document.getElementsByClassName("menu-wrapper-parent");
  wrapper[0].style.display="none";
}
});
