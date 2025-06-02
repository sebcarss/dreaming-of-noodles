
export function getImagePath(filename: string) {
    const s3FilePath = process.env.NEXT_PUBLIC_S3_IMAGE_BUCKET;
    if (!s3FilePath) throw new Error("S3_IMAGE_BUCKET env variable is not set");
    return s3FilePath + filename;
}