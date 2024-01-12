require('dotenv').config();
const fs = require('fs');
var https = require('https');
const { exit } = require('process');

var data = {
    branch: process.env.SCREEPS_API_BRANCH,         
    modules: {
        main: fs.readFileSync('./dist/screeps.js', 'utf-8').toString(),
    }
};

var req = https.request({
    hostname: 'screeps.com',
    port: 443,
    path: '/api/user/code',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Token': process.env.SCREEPS_API_TOKEN
    }
}, (res) => {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        const response = JSON.parse(chunk);
        if (response?.error != null) {
            console.error(`ERROR: ${response.error}`);
            exit(1);
        } else if (response?.ok != null) {
            console.log("Uploaded sucessfully");
        } else {
            console.log(chunk);
            exit(1);
        }
    });
    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });
});

req.write(JSON.stringify(data));
req.end();