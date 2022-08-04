
let a = document.querySelector('#pin');
a.addEventListener('click', sendRequest);

let b = document.querySelector('#pin2');
b.addEventListener('click', sendRequest2);

let c = document.querySelector('#pin3');
c.addEventListener('click', sendRequest3);

let d = document.querySelector('#pin4');
d.addEventListener('click', sendRequest4);

let e = document.querySelector('#pin5');
e.addEventListener('click', sendRequest5);

let f = document.querySelector('#pin6');
f.addEventListener('click', sendRequest6);

let g = document.querySelector('#pin7');
g.addEventListener('click', sendRequest7);

let h = document.querySelector('#pin8');
h.addEventListener('click', sendRequest8);

let i = document.querySelector('#pin9');
i.addEventListener('click', sendRequest9);

let j = document.querySelector('#pin10');
j.addEventListener('click', sendRequest10);

let k = document.querySelector('#pin11');
k.addEventListener('click', sendRequest11);

let l = document.querySelector('#pin12');
l.addEventListener('click', sendRequest12);

// 通信を開始する処理
function sendRequest() {
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

function sendRequest2(){
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

function sendRequest3(){
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

function sendRequest4(){
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

function sendRequest5(){
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/993800.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

function sendRequest6(){
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1880252.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

function sendRequest7(){
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2147714.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

function sendRequest8(){
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

function sendRequest9(){
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2968815.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

function sendRequest10(){
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/3451189.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

function sendRequest11(){
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/5128581.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

function sendRequest12(){
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/5368361.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let a = document.querySelector('span#name');
    let b = document.querySelector('span#ido');
    let c = document.querySelector('span#keido');
    let d = document.querySelector('span#whether');
    let e = document.querySelector('span#min');
    let f = document.querySelector('span#max');
    let g = document.querySelector('span#humidity');
    let h = document.querySelector('span#speed');
    let i = document.querySelector('span#diretion');
    let name = resp.data.name;
    let ido = resp.data.coord.lon;
    let keido = resp.data.coord.lat;
    let whether = resp.data.weather[0].description;
    let min = resp.data.main.temp_min;
    let max = resp.data.main.temp_max;
    let humidity = resp.data.main.humidity;
    let speed = resp.data.wind.speed;
    let diretion = resp.data.wind.deg
    // data をコンソールに出力
    console.log(name);
    a.textContent = name;
    console.log(ido);
    b.textContent = ido;
    console.log(keido);
    c.textContent = keido;
    console.log(whether);
    d.textContent = whether;
    console.log(min);
    e.textContent = min;
    console.log(max);
    f.textContent = max;
    console.log(humidity);
    g.textContent = humidity;
    console.log(speed);
    h.textContent = speed;
    console.log(diretion);
    i.textContent = diretion;
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}