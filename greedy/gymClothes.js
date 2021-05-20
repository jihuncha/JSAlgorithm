
function solution(n, lost, reserve) {
    var answer = 0;

    // 매개 변수 복사 (원본 건드리기 x )
    let copyLost = lost.slice();
    let copyReserve = reserve.slice();

    let tempArr = [];

    // lost , reserve 중복 값 제거
    for (let i = 0; i < copyReserve.length; i++){
        if (copyLost.includes(copyReserve[i])) {
            copyLost.splice(copyLost.indexOf(copyReserve[i]), 1);
            copyReserve.splice(i, 1);
            i -= 1;
        }
    }
    // 위 아래 둘다 포함하는 요소 제거 후 별도로 저장
    for (let i = 0; i < copyReserve.length; i++){
        if (copyLost.includes(copyReserve[i] - 1) && copyLost.includes(copyReserve[i] + 1)) {
            tempArr.push(copyReserve[i]);
            copyReserve.splice(i, 1);
            i -= 1;
        }
    }
    // 한가지만 해당하는 요소들 양쪽 배열에서 제거
    for (let i = 0; i < copyReserve.length; i++){
        if (copyLost.includes(copyReserve[i] - 1) && !(copyLost.includes(copyReserve[i] + 1))) {
            copyLost.splice(copyLost.indexOf(copyReserve[i] - 1), 1);
            copyReserve.splice(i, 1);
            i -= 1;
        } else if (copyLost.includes(copyReserve[i] + 1) && !(copyLost.includes(copyReserve[i] - 1))) {
            copyLost.splice(copyLost.indexOf(copyReserve[i] + 1), 1);
            copyReserve.splice(i, 1);
            i -= 1;
        }
    }

    // 위 아래 둘다 해당 되는 요소중 lost 에 남은 것 아무거나 삭제
    for (let i = 0; i < tempArr.length; i++){
        if (copyLost.includes(tempArr[i] - 1)) {
            copyLost.splice(copyLost.indexOf(tempArr[i] - 1), 1)
            tempArr.splice(i,1)
            i -= 1;
        } else if (copyLost.includes(tempArr[i] + 1)) {
            copyLost.splice(copyLost.indexOf(tempArr[i] + 1), 1)
            tempArr.splice(i,1)
            i -= 1;
        }
    }
    // lost 배열에서 남은것 n 에서 차감 후 리턴
    answer = n - copyLost.length;
    return answer;
}

let n = 5;
let lost = [2,4];
let reserve = [3];

console.log(solution(n, lost, reserve));

// 바로 이웃(앞,뒤) 만 체육복 빌려주기 가능
// 전체 학생 수 n
// 도난 lost
// 여벌 reserve

// n 조건 2 ~ 30
// 1 < reserve < n

