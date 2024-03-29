const fs = jest.createMockFromModule('fs');

function readdirSync(path) {
    if (path.includes('regions')) {
        return ['001_Hokkaido', '002_Aomori'];
    }
    
    return [
        '2019-01-01-hello-world-1.md',  
        '2019-01-02-hello-world-2.md', 
        '2019-01-03-hello-world-3.md',
        'missing-frontmatter-title.md',
        'missing-frontmatter-excerpt.md'
    ];
}

function readFileSync(path, encoding) {
    if (path.includes('2019-01-01-hello-world')) {
        return "---\ntitle: Hello World 1\nexcerpt: 'Hello World 1 excerpt'\ndate: '2019-01-01'\ntags: [hello, world]\npublished: true\n---\n\nHello World 1";
    } else if (path.includes('2019-01-02-hello-world-2')) {
        return "---\ntitle: Hello World 2\nexcerpt: 'Hello World 2 excerpt'\ndate: '2019-01-03'\ntags: [hello, world]\npublished: true\n---\n\nHello World 2";
    } else if (path.includes('2019-01-03-hello-world-3')) {
        return "---\ntitle: Hello World 3\nexcerpt: 'Hello World 3 excerpt'\ndate: '2019-01-02'\ntags: [hello, world]\npublished: false\n---\n\nHello World 3";
    } else if (path.includes('missing-frontmatter-title.md')) {
        return "---\nexcerpt: 'Missing title excerpt'\ndate: '2010-01-02'\ntags: [missing, title]\npublished: true\n---\n\nMissing Title";
    } else if (path.includes('missing-frontmatter-excerpt.md')) {
        return "---\ntitle: 'Missing excerpt title'\ndate: '2010-01-02'\ntags: [missing, title]\npublished: true\n---\n\nMissing Title";
    } else if (path.includes('001_Hokkaido')) {
        return "---\ncountry: Japan\nregion: Hokkaido\ngridLinkUrl: '/japan/hokkaido'\ngridLinkImage: '/japan-hokkaido.jpg'\nsplashImage: '/splash-image.webp'\nsplashImageAlt: 'Splash Image Alt'\n---\nWelcome to Hokkaido!"
    } else if (path.includes('002_Aomori')) {
        return "---\ncountry: Japan\nregion: Aomori\ngridLinkUrl: '/japan/aomori'\ngridLinkImage: '/japan-aomori.jpg'\nsplashImage: '/splash-image.webp'\nsplashImageAlt: 'Splash Image Alt'\n---\nWelcome to Aomori!"
    } else {
        throw new Error('File not found');
    }
}

fs.readdirSync = readdirSync;
fs.readFileSync = readFileSync;

module.exports = fs;

