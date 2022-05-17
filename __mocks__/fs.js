const fs = jest.createMockFromModule('fs');

function readdirSync(path) {
    return ['2019-01-01-hello-world.md', '2019-01-02-hello-world-2.md'];
}

fs.readdirSync = readdirSync;

module.exports = fs;