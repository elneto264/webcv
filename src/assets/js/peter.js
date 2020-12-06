let entrada = document.getElementById('entrada');


let n = [];


function solution(n) {
    n.push(entrada.value);

    let s = `${n}`;
    let r = s;
    let sameN = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] == s[i]) {
            sameN++;
        }
        if (s[i - 1] < s[i]) {
            sameN = 0;
        }
        if (s[i - 1] > s[i]) {
            let d = parseInt(s[i - 1]);
            d -= 1;
            if (s[i] == 0) {
                r = s.substring(0, i - 1 - sameN) + d + "".padEnd(s.length - i + sameN, 9);
            } else {
                r = s.substring(0, i - 1 - sameN) + d + "".padEnd(s.length - i + sameN, 9);
            }
            break;
        }

    }
    console.log("output " + r);
    return parseInt(r)

}

function result() {
    let result = document.getElementById('result');
    result.innerHTML = solution(r);
}