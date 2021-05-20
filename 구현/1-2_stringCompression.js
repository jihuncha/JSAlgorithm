//NOTE: 실수 한 점 : 10개이상 중복 100개이상 중복 처리 x

function solution(s) {
    // 처음 min length 는 input 값 length 로 초기화
    let answer = s.length;

    // 한번에 자르는 갯수 (1~ length의 절반 까지만)
    for (let i = 1; i <= Math.floor(s.length / 2); i++){
        // 여기에 자른 갯수로 나온 length 값 셋팅
        let min = s.length;
        // 비교 기준 string
        let target = undefined;
        // 중복 카운트 수 
        let count = 0;

        // 인터벌을 j + i 만큼 뛰어서 체크
        for (let j = 0; j < s.length; j = j + i){
            // 첫번째 인덱스 일때 기준 값 셋팅
            if (j === 0) {
                target = s.substr(0, i);
            // 나머지 인덱스 일때 비교 시작
            } else {
                // 중복일때는 count up
                if (target === s.substr(j, i)) {
                    count += 1;
                } else {
                    // 중복이 아닐때 count가 오르면 length에서 해당 길이만큼 - (count 10~100) 처리 필요
                    // count 값은 나자신 제외한 카운트 수 (중복되는 갯수만큼 빼주고, 해당 숫자 자릿수 만큼 더 뺌)
                    if (count > 0) {
                        min -= (i * count) - ((count + 1).toString().length);
                    }
                    // 기준 string 셋팅 및 count 초기화 
                    target = s.substr(j, i);
                    count = 0;
                }
            }
        }
        // 중복으로 탐색 종료 시 count값 남아있어서 한번 더 비교해줘야함
        if (count > 0) {
            min -= (i * count) - ((count + 1).toString().length);
        }
        // 제일 작은 값 갱신
        if (min < answer) {
            answer = min;
        }
    }
    return answer;
}

let input = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxz';
console.log(solution(input))