/*
  DOM要素、日付の変数を定義する
*/
var AINO=[],DAIGAKU=[],DATE=new Date()
var theme=document.getElementById("theme")
var content=document.getElementById("content")
var button=document.getElementById("button")
var yyyymm = DATE.getFullYear().toString() + String(DATE.getMonth() + 1).padStart(2, '0');
var AD="/DATA/AD.txt?" + Math.floor(Math.random() * 10000)
var DA="/DATA/DA.txt?" + Math.floor(Math.random() * 10000)
var hour=DATE.getHours(),minute=DATE.getMinutes(),month=DATE.getMonth()+1,day=DATE.getDay(),date=DATE.getDate()
/*
  日付毎に挙動を変更。
  ■例外運行→土日でも表示■例外運休→平日でも非表示■土日非表示■通常運行
*/ 
if(month== 11 && [15].includes(date)){/*例外運行 */
  console.log("例外運行")
  Set_Datas();
}else if(month== 10 & [27].includes(date)){/*例外運休 */
  console.log("例外運休")
  content.innerHTML = "<p class='center'>運休日(※詳細は<a href='https://www.sist.ac.jp/media/schoolbus"+yyyymm+".pdf'target='_blank'style='color:blue;'>PDF</a>を参照)</p>"
  button.remove()
}else if (day === 6 || day === 0) {/*土日休*/
  console.log("土日休")
  content.innerHTML = "<p class='center'>運休日(※詳細は<a href='https://www.sist.ac.jp/media/schoolbus"+yyyymm+".pdf'target='_blank'style='color:blue;'>PDF</a>を参照)</p>"
  button.remove()
}else{/*通常運行 */
  Set_Datas();
}
/*
  Set_Datas() 
    特別日、時刻のCSVファイルのパス AD,DAを変更。
    関数fet_File()へパス,格納変数を指定。
*/
function Set_Datas(){
  //変則運行の場合リンクを変える
  if(month==10 && [24].includes(date)){//変則運行1
    theme.innerHTML="スクールバス時刻表<br><span style='font-size:15px'>10/24変則運行</span>"
    //愛野→大学を変更(変則)
    AD="/DATA/AD_E.txt?" + Math.floor(Math.random() * 10000)
    //大学→愛野を変更(変則)
    DA="/DATA/DA_E.txt?" + Math.floor(Math.random() * 10000)
  }else if(month==10 && [25,26].includes(date)){  //変則運行2
    theme.innerHTML="スクールバス時刻表<br><span style='font-size:15px'>10/25,26変則運行</span>"
    //愛野→大学を変更(変則)
    AD="/DATA/AD_EE.txt?" + Math.floor(Math.random() * 10000)
    //大学→愛野を変更(変則)
    DA="/DATA/DA_EE.txt?" + Math.floor(Math.random() * 10000)
  }
  //愛野駅から大学
  fetch_File(AD,AINO);
  //大学から愛野駅
  fetch_File(DA,DAIGAKU);
}
// 共通のfetch処理を関数化
function fetch_File(url, target){
  fetch(url)
    .then(response => response.ok ? response.text() : Promise.reject(`Network response for ${target}.txt was not ok`))
    .then(data => Do_View(data, target))
    .catch(error => {
      location.reload();
    });
};
/*
  Do_View() Set_Datas()のCSV読み込みをトリガーとして実行される。
  両方のCSVが読み込まれた段階でログ[GO]が出力され、関数Decrease_Info_Bus()を実行する。
*/
function Do_View (text,array) {
  for(var i=0;i<text.length/2;i++){
    array[i]=text.slice(i*2,i*2+2)
  }
  console.log(array)
  if(AINO.length&&DAIGAKU.length){
    Decrease_Info_Bus()
  }
}
/*
  Decrease_Info_Bus() コンテンツをリセットし、時刻を直近４つのみ表示する。
*/
function Decrease_Info_Bus(){
  content.innerHTML="";
  View_Bus_Soon(AINO,"愛野駅->大学",4);
  View_Bus_Soon(DAIGAKU,"大学->愛野駅",4);
  button.innerHTML="+";
  button.setAttribute("onclick","More_Info_Bus()");
}
/*
  More_Info_Bus() コンテンツをリセットし、時刻を全て表示する。
*/
function More_Info_Bus(){
  content.innerHTML=""
  View_Bus_Soon(AINO,"愛野駅->大学",50)
  View_Bus_Soon(DAIGAKU,"大学->愛野駅",50)
  button.innerHTML="-"
  button.setAttribute("onclick","Decrease_Info_Bus()")
}
/*
  View_Bus_Soon() 受け取った引数を元にcontentのDOMの内容を決定・更新する
    times:表示する時刻情報の配列 [07,20,07,40,08,10,...]
    description:バスの行き先の記述 愛野駅->大学
    view_num:表示する時刻の数 4 or 50個
*/
function View_Bus_Soon(times, description, view_num) {
  const timeline = document.createElement('div');
  timeline.className = 'time-line';
  timeline.innerHTML = `<p class='time-line-description'>${description}</p>`;
  const upcomingTimes = times
    .reduce((acc, _, i) => (i % 2 === 0 ? [...acc, times.slice(i, i + 2)] : acc), [])
    .filter(([h, m]) => h > hour || (h === hour && m > minute))
    .slice(0, view_num);
  timeline.innerHTML += upcomingTimes.length
    ? upcomingTimes.map(([h, m]) => `<p>${h}:${String(m).padStart(2, '0')}</p>`).join('')
    : "<p style='font-size:20px'>本日のバスは<br>終了しました</p>";
  content.appendChild(timeline);
}

/*
  View_menu(),close_menu()
  DOM要素 menuをonclickをトリガーに表示、非表示する。
*/
function view_menu(){
  var menu=document.getElementById("menu")
  menu.style.display="block"
}
function close_menu(){
  var menu=document.getElementById("menu")
  menu.style.display="none"
}