module.exports = {
    images: {
        loader: 'cloudinary',
        domains: ['res.cloudinary.com'],
        path: 'https://res.cloudinary.com/dreaming-of-noodles/image/fetch'
    },
    generateBuildId: () => 'build',
}