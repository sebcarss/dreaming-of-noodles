const fs = jest.createMockFromModule('fs');

function readdirSync(dirPath) {
    return [ 
        "/path/to/a.js", 
        "/path/to/b.js"
    ];
}

fs.readdirSync = readdirSync;

module.exports = fs;