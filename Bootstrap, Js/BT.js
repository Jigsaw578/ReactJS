var inputWords = ['Apple', 'Banana', 'Apple', 'Durinan', 'Durinan', 'Durinan']

function countWords(inputWords) {
    return inputWords.reduce(function (obj,name) {
        if (obj[name]) {
            ++obj[name]
        } else obj[name] = 1
        return obj
    }, {})
}
console.log(countWords(inputWords));