function solution(name) {
    var answer = 0;

    // 각 알파벳 크기 더해줌
    for (let i = 0; i < name.length; i++ ){
        answer += howFar(name[i]);
    }
    // 최소거리는 그냥 쭉간거
    let minMove = name.length - 1;

    for (let i = 1; i < name.length; i++){
        if (name[i] === 'A') {
            for (var j = i + 1; j < name.length; j++){
                if (name[j] !== 'A') {
                    break;
                }
            }
            const left = i - 1;
            const right = name.length - j;
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);

            i = j;
        }
    }
    return answer + minMove;

    function howFar(idx) {
        if (idx.charCodeAt(0) <= 75) {
            return idx.charCodeAt(0) - 'A'.charCodeAt(0)
        } else {
            // Z 로 움직이면 조이스틱 한번 위로 !
            return 'Z'.charCodeAt(0) - idx.charCodeAt(0) + 1;
        }
    }
}


var name = 'JCAAAAARCA'
console.log(solution(name));
