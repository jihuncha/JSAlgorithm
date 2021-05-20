// 럭키 스트레이트 쓰는 조건
// => 현재 점수 N 일때 자릿수 기준 반으로 나눠서 왼쪽 자릿수 합 = 오른쪽 자릿수 합
// 자릿수는 항상 짝수

// function solution(num) {
//     let copyStr = num.toString();
//     let left = 0;
//     let right = 0;

//     for (let i = 0; i < copyStr.length; i++) {
//         if (i < copyStr.length / 2) {
//             left += Number(copyStr[i])
//         } else {
//             right += Number(copyStr[i])
//         }
//     }
//     return left === right ? 'LUCKY' : 'READY'
// }

// let input = 7755;
// console.log(solution(input));



// 백준식 문제 풀이
function solution(input) {
    let copyStr = input;
    let left = 0;
    let right = 0;

    for (let i = 0; i < copyStr.length; i++) {
        if (i < copyStr.length / 2) {
            left += Number(copyStr[i])
        } else {
            right += Number(copyStr[i])
        }
    }
    console.log(left === right ? 'LUCKY' : 'READY');
}
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input;
rl.on("line", function (line) {
    input = line;
    rl.close();
}).on("close", function () {
    solution(input);
    process.exit();
});