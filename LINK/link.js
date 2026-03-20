var SHIZUOKA=[],HAMAMATU=[],DATE=new Date()
var content=document.getElementById("content")
var default_button=document.getElementById("default_button")
var button=document.getElementById("button")
var station_name=document.getElementById("station_name")
var station = document.getElementById("station")
var form = document.getElementById("form-link")
var hour=DATE.getHours(),minute=DATE.getMinutes(),day=DATE.getDay()
var station_number=["60","59","58","57","56","55","54","53","52","51","50","49","156","48","147","47","46","45","44","43","42","41","40","39","38","37","36","35","34","33","32","31","30","29","28","27","26","25","24","23","22","21","20",]
var data_split=4
if(localStorage.getItem('station')){
  selectOptionByValue(station_name,localStorage.getItem('station'))
  station.innerHTML= form.station_name.value+"駅"
  station.setAttribute("href","https://ekitan.com/timetable/railway/line-station/149-"
   +station_number[form.station_name.selectedIndex]+"/d1?view=pocket");
  Set_Datas(localStorage.getItem('station'))
}else{
  Set_Datas("愛野")
}

function More_Info_Bus(){
  content.innerHTML=""
  View_Bus_Soon(SHIZUOKA,"静岡方面",100)
  View_Bus_Soon(HAMAMATU,"浜松方面",100)
  button.innerHTML="-"
  button.setAttribute("onclick","Decrease_Info_Bus()")
  default_button.style.display="block"
}
function Decrease_Info_Bus(){
  content.innerHTML="";
  View_Bus_Soon(SHIZUOKA,"静岡方面",4);
  View_Bus_Soon(HAMAMATU,"浜松方面",4);
  button.innerHTML="+";
  button.setAttribute("onclick","More_Info_Bus()");
  default_button.style.display="none"
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
    (hour>times[times.length-4])||
    (hour==times[times.length-4]&&minute>times[times.length-2])
  ){
    tmp += "<p style='font-size:20px>本日の電車は終了しました</p>"
  }
  content.innerHTML+=tmp+"</div>"
}
function Set_Datas(input){
  if (day === 6 || day === 0) {input+="2";document.getElementById("theme").innerHTML="JR各駅時刻表(休日)";}
  SHIZUOKA=[],HAMAMATU=[]
  fetch("/DATA/"+input+"_h.txt?"+Math.floor(Math.random()*1000))
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
  fetch("/DATA/"+input+"_s.txt?"+Math.floor(Math.random()*1000))
  .then(response =>{
    if(!response.ok){
      throw new Error('Network response for '+input+'_s.txt was not ok')
    }
    return response.text()
  })
  .then(data=>Do_View(data,SHIZUOKA))
  .catch(error => {
    console.error("Error fetching"+input+"_s.txt",error)
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
function selectOptionByValue(selectElement, valueToSelect) {
  for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === valueToSelect) {
          selectElement.selectedIndex = i;
          break;
      }
  }
}
form.addEventListener("change", function() {
  Set_Datas(form.station_name.value)
  station.innerHTML= form.station_name.value+"駅"
  station.setAttribute("href","https://ekitan.com/timetable/railway/line-station/149-"
   +station_number[form.station_name.selectedIndex]+"/d1?view=pocket");
});
function set_station(){
  console.log(form.station_name.value)
  localStorage.setItem('station',form.station_name.value);
}