function longestStringByFunction(arr) {
    let answer = '';

    arr.forEach((str) => {

        answer = str.length > answer.length ? str : (
            str.length === answer.length ? (str[0] < answer[0] ? str : answer) : answer
        );
    });

    return answer;
}

const longestStringByArrow = (arr) => arr.reduce((maxStr, currStr) => maxStr = maxStr.length < currStr.length ? currStr : maxStr, '');

module.exports = { longestStringByFunction, longestStringByArrow };