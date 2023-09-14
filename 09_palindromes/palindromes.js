const palindromes = function (string) {
    let originalString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return originalString === originalString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
