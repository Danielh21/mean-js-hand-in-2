const path = require("path");
const fs = require("fs");
const { expect } = require("chai");
const ds = require("../lib/dirSearch");





describe('dirSearch test', function () {

    let testDir = 'testDir';
    let path1 = 'testDir/testFile.txt'
    let file2 = 'file.js'
    let path2 = testDir+'/'+file2;

    before(function (done) {
        fs.mkdir(testDir, function () {
            fs.writeFile(path1, "string", function () {
                fs.writeFile(path2, "javascript", done);
            })
        })
    });

    after(function (done) {
        fs.unlink(path1, function () {
            fs.unlink(path2, function () {
                fs.rmdir(testDir, done);
            })
        })
    })

    describe('know folder', function () {
        it('should finde the file.js', function (done) {
            ds.dirSearcher(testDir, 'js', function (err,data) {
                expect(err).to.equal(null);
                expect(data.length).to.equal(1);
                expect(data[0]).to.equal(file2);
                done();
            })
        });
    });
});