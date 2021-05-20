#### 1.  fs 모듈 사용

> 현재 백준에서 해당 관련 모듈 사용 오류가 있어서 사용하면 Refer 에러 뜸...

```javascript
let fs = require('fs')
// 한줄일때 (값으로 받기)
var input = fs.readFileSync('/dev/stdin').toString()
// 여러줄일때 (배열로 받기)
// 숫자 input 사용시 parseInt() 사용
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
```



#### 2. Readline 모듈 사용

```javascript
// 정답
function solution(input){
  console.log('정답');
}

// 모듈
const readline = require('readline')
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
})
//===================== 한개 입력 ========================
let input;

rl.on("line",function(line){
  // line 에 사용자 입력 들어옴
  input = line;
  
  // 정수 형태로 사용할때는 parseInt로 변환
  input = parseInt(line);
  // 한줄을 받고 입력 종료
  rl.close();
}).on("close",function(){
  //개발로직 작성
  solution(input);
  // 프로세스 종료
  process.exit();
})
//===================== 한줄 입력 ========================
let input;
let list = [];
rl.on("line", function (line) { 
  input = line; 
  rl.close(); 
}).on("close", function () { 
  //한줄에 입력된 값을 띄어쓰기 기준으로 list배열에 삽입. 
  list.push(input.split(' ').map((el) => el)); 
  //입력된 문자열이 전부 정수라면 parseInt로 형변환 
  list.push(input.split(' ').map((el) => parseInt(el))); 
  solution(list); 
  process.exit(); 
});
//===================== 여러줄 입력 ========================
let input = []; 
let list = []; 
rl.on("line", function (line) { 
  //여러줄 입력 
  input.push(line) 
  //rl.close()가 없어서 계속입력 
  //로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료 
}).on("close", function () { 
  // 이런식으로 적절하게 입력값을 처리해줘야한다. 
  let n = parseInt(input[0]); 
  //띄어쓰기 기준으로 배열에 넣기 
  let list = input[1].split(' ').map((el) => parseInt(el)); 
  solution(list); 
  //프로세스 종료 
  process.exit(); 
});

```

