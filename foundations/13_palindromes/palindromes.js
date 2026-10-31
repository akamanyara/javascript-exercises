const palindromes = function (string) {
    // clean the string:
    // only letters and numeric values and lower values
    let alphanumerical = "qwertyuiopasdfghjklzxcvbnm1234567890";
    let clearString = Array.from(string)
                        .map(letter => letter.toLowerCase())
                        .filter(letter => alphanumerical.includes(letter))
    // reverse the string
    let reversedString = [...clearString].reverse() // spread creates copy so reverse()
                                                    // doesnt affect original one
    // check for palindromes
    for (let i = 0; i < clearString.length; ++i) {
        if (clearString[i] === reversedString[i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;