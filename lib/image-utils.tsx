
export function getImagePath(filename: string) {
    const s3FilePath = process.env.S3_IMAGE_BUCKET;
    const imagePath = s3FilePath + filename;
    return imagePath;
}