
function countVowelsInStringFunction(str) {

    let counter = 0
    for (let idx = 0; idx < str.length; idx++)
        if (str[idx] === 'a' || str[idx] === 'e' || str[idx] === 'i' || str[idx] === 'o' || str[idx] === 'u')
            counter++
    return counter
}

const countVowelsInStringArrow = (str) => str.split("").reduce((counter, ele) =>
    counter = ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'i' || ele === 'u' ? counter + 1 : counter,
    0)

module.exports = { countVowelsInStringFunction, countVowelsInStringArrow }