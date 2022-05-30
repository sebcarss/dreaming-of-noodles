module.exports = {
    images: {
        loader: 'cloudinary',
        domains: ['res.cloudinary.com'],
        path: 'https://res.cloudinary.com/dreaming-of-noodles/image/fetch'
    },
    generateBuildId: () => 'build',
    env: {
        IMAGE_PATH: 'https://dreamingofnoodles.s3.eu-west-1.amazonaws.com/images/',
    },
}