const {PythonShell} = require('python-shell');

class Tools {

    constructor() {

    }

    getYTInformation() {
        PythonShell.run('../static/py/getYTinfo.py', null, function (err, results) {
            if (err) throw err;
            console.log(results);
        });
    }

};

module.exports = Tools;