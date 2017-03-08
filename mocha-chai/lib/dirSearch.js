const path = require("path");
let fs = require("fs");

let dirSearcher = function (pathToDir, ext, callback) {
    fs.readdir(pathToDir, function (err, data) {
        if (err) {
            return callback(err);
        }
        let extension = "." + ext;
        let filtered = data.filter((file) => path.extname(file) === extension);
        callback(null, filtered); //.join("\n")
    })
}
module.exports = {
    dirSearcher: dirSearcher
}