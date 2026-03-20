var SHIZUOKA=[],HAMAMATU=[],DATE=new Date()
var content=document.getElementById("content")
var button=document.getElementById("button")
var theme=document.getElementById("theme")
var hour=DATE.getHours(),minute=DATE.getMinutes(),day=DATE.getDay()
var data_split=4;
Set_Datas("愛野")
function More_Info_Bus(){
  content.innerHTML=""
  View_Bus_Soon(SHIZUOKA,"静岡方面",100)
  View_Bus_Soon(HAMAMATU,"浜松方面",100)
  button.innerHTML="-"
  button.setAttribute("onclick","Decrease_Info_Bus()")
}
function Decrease_Info_Bus(){
  content.innerHTML="";
  View_Bus_Soon(SHIZUOKA,"静岡方面",4);
  View_Bus_Soon(HAMAMATU,"浜松方面",4);
  button.innerHTML="+";
  button.setAttribute("onclick","More_Info_Bus()");
}
function View_Bus_Soon(times,description,view_num){
  var tmp = "<div class='time-line'><p class='time-line-description'>"+description+"</p>"
  var count=0;
  for(var i=0;i<(times.length)/data_split&&count<view_num;i++){
    if(
      (
        (Number(times[i*data_split])==hour&&Number(times[i*data_split+1])>minute)||
        (Number(times[i*data_split])>hour)
      ) &&
      (times[i*data_split+3]=="普通")
    ){
      tmp+="<p>"+times[i*data_split]+":"+String(times[i*data_split+1]).padStart(2,'0')+times[i*data_split+2][0]+"</p>"
      count++
    }
  }
  if(
    (hour>times[times.length-data_split])||
    (hour==times[times.length-data_split]&&minute>times[times.length-2])
  ){
    tmp += "<p style='font-size:20px'>本日の電車は終了しました</p>"
  }
  content.innerHTML+=tmp+"</div>"
}
function Set_Datas(input){
  if (day === 6 || day === 0) {input+="2";theme.innerHTML+="(休日)";}
  SHIZUOKA=[],HAMAMATU=[]
  fetch("/DATA/"+input+"_s.txt?"+Math.floor(Math.random()*10000))
  .then(response =>{
    if(!response.ok){
      throw new Error('Network response for '+input+'was not ok')
    }
    return response.text()
  })
  .then(data=>Do_View(data,SHIZUOKA))
  .catch(error => {
    console.error("Error fetching"+input+"_s.txt",error)
  });

  fetch("/DATA/"+input+"_h.txt?"+Math.floor(Math.random()*10000))
  .then(response =>{
    if(!response.ok){
      throw new Error('Network respones for '+input+"_h.txt was not ok")
    }
    return response.text()
  })
  .then(data=>Do_View(data,HAMAMATU))
  .catch(error => {
    console.error("Error fetching"+input+"_h.txt",error)
  });
}
function Do_View (text,array) {
  for(var i=0;i<text.length/2;i++){
    array[i]=text.slice(i*2,i*2+2)
  }
  console.log(array)
  if(SHIZUOKA.length&&HAMAMATU.length){
    console.log("GO")
    Decrease_Info_Bus()
  }else{
    console.log("YET")
  }
}
function view_menu(){
  var menu=document.getElementById("menu")
  menu.style.display="block"
}
function close_menu(){
  var menu=document.getElementById("menu")
  menu.style.display="none"
}
function theme_my_station(){
  if(localStorage.getItem('station')){
    theme.innerHTML="<span onclick='theme_aino_station()'>"+localStorage.getItem('station')+"</span>駅時刻表"
    Set_Datas(localStorage.getItem('station'))
  }
}
function theme_aino_station(){
    theme.innerHTML="<span onclick='theme_my_station()'>愛野</span>駅時刻表";
    Set_Datas("愛野");
}