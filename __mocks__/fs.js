const fs = jest.createMockFromModule('fs');

function readdirSync(path) {
    return ['2019-01-01-hello-world-1.md', '2019-01-02-hello-world-2.md', '2019-01-03-hello-world-3.md'];
}

function readFileSync(path, encoding) {
    if (path.includes('2019-01-01-hello-world')) {
        return "---\ntitle: Hello World 1\nexcerpt: 'Hello excerpt'\ndate: '2019-01-01'\ntags: [hello, world]\npublished: true\n---\n\nHello World 1";
    } else if (path.includes('2019-01-02-hello-world-2')) {
        return "---\ntitle: Hello World 2\nexcerpt: 'Hello excerpt'\ndate: '2019-01-02'\ntags: [hello, world]\npublished: true\n---\n\nHello World 2";
    } else if (path.includes('2019-01-03-hello-world-3')) {
        return "---\ntitle: Hello World 3\nexcerpt: 'Hello excerpt'\ndate: '2019-01-03'\ntags: [hello, world]\npublished: false\n---\n\nHello World 3";
    } else {
        throw new Error('File not found');
    }
}

fs.readdirSync = readdirSync;
fs.readFileSync = readFileSync;

module.exports = fs;