
function changeCaseByFunction(str) {
    let answer = '';
    for (let index = 0; index < str.length; index++) {
        if (str[index] >= 'a' && str[index] <= 'z')
            answer += str[index].toUpperCase();
        else answer += str[index].toLowerCase();
    }

    return answer;
}

const changeCaseByArrow = (str) => {

    let answer = '';
    for (let index = 0; index < str.length; index++) {
        if (str[index] >= 'a' && str[index] <= 'z')
            answer += str[index].toUpperCase();
        else answer += str[index].toLowerCase();
    }

    return answer;

};

module.exports = { changeCaseByFunction, changeCaseByArrow };