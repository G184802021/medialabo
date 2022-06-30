// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
var ha = false;
// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();
//hantei();
//hantei();
//hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    kaisu++;
    let kai = kaisu;
    let yo =yoso;
    let s = document.querySelector('span#kaisu');
    s.textContent = kai;
    s = document.querySelector('span#yoso');
    s.textContent = yoso;
    let result = "";
    s = document.querySelector('span#result');
    if(ha){
        result="答えは "+kotae+" でした．すでにゲームは終わっています";
        
   
    }
    else if(yoso === kotae){
        result="正解です．おめでとう!";
        ha= true;
        
    } else {
        if(kaisu === 3){
            result="まちがい．残念でした答えは "+kotae+" です";
            ha=true;
       
        }
        else if (yoso < kotae){
            result="まちがい．答えはもっと大きいですよ";
            
        } else {
            result="まちがい．答えはもっと小さいですよ";
            
        }
    }
    s.textContent = result;
}