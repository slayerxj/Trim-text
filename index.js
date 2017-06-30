var fs = require("fs");
fs.readFile('pending.txt', (err, data) => {
    var longString = data.toString();
    var name = "";
    var items = [];
    for (var i = 0; i < longString.length; i++) {
        var char = longString.charAt(i);
        if ((char !== " ") && (char !== "\r") && (char !== "\n")) {
            name = name + char;
        } else {
            if (name != "") {
                items.push(name);
            }
            name = "";
        }
    }

    fs.writeFile("trimed.js", "module.exports = " + JSON.stringify(items, null, "\n"), function (err) {
        if (err) {
            throw err;
        }
    });
})