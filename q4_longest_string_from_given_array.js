function longestStringByFunction(arr) {
    let answer = "";

    arr.forEach((str) => {
        if (str.length > answer.length)
            answer = str
    })

    return answer
}

const longestStringByArrow = (arr) => arr.reduce((maxStr, currStr) => maxStr = maxStr.length < currStr.length ? currStr : maxStr, "");

module.exports = { longestStringByFunction, longestStringByArrow }