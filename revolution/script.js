// algorithm編>manabukun>script.js
let btn = document.querySelector('button');
btn.addEventListener('click', () =>{
  let ipt = document.querySelector('input');
  if(ipt.value == seikai[qnum]){
    window.alert(`${ipt.value}正解おめでとう`);
  } else{
    window.alert(`${ipt.value}ざんねん`);
  }  
});

let qnum = 0;
let showMidasi = (mida) => {
  let hajime = document.querySelector('header');
  hajime.innerHTML = `<h1>${mida}</h1>`;
};
showMidasi(midasi[qnum]);
  
let showMon = (dai) => {
  let mondai = document.querySelector('div');
  mondai.innerHTML = `<h2>${dai}</h2>`;
};
showMon(qands[qnum][0]);
  
let showSentaku = (taku) => {
  let list = document.querySelector('div');
  list.innerHTML += `<h3>${taku}</h3>`;
};
showSentaku(qands[qnum][1]);
showSentaku(qands[qnum][2]);
showSentaku(qands[qnum][3]);
showSentaku(qands[qnum][4]);
    
function change(){
  qnum = qnum + 1;
  if(qnum >= midasi.length){
      location.href = "end.html";
  }
  showMidasi(midasi[qnum]);
  showMon(qands[qnum][0]);
  showSentaku(qands[qnum][1]);
  showSentaku(qands[qnum][2]);
  showSentaku(qands[qnum][3]);
  showSentaku(qands[qnum][4]);
}