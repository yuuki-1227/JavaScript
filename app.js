var hello = 'Hello World';
alert(hello);

var int1 = 1;
alert(int1);

var str1 = 'Hello';
var str2 = 'World!!!'
alert(str1 + str2);

var orange = 100;
var apple = 120;

if(orange < apple){
  alert('みかんの値段がリンゴより安い');
} else if(orange == apple){
  alert('みかんとリンゴが値段が同じ');
} else{
  alert('みかんの値段がリンゴより高い');
}

var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です。');

var i;
var num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');


var alertString;
alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
  var addStr = "Hello " + strA;
  return addStr;
}

var promptStr = prompt('何か好きな文字を入力してください。')

alert(promptStr);