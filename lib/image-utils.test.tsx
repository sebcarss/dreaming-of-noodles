import { getImagePath } from "./image-utils";

describe("Full image path concatentation", () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
        jest.resetModules() // clears the cache
        process.env = { ...OLD_ENV };
    });

    afterAll(() => {
        process.env = OLD_ENV;
    });

    it("Should return the full image file path", () => {
        process.env.S3_IMAGE_BUCKET = 's3_file_path/';
        const filepath = getImagePath("image_name.jpg");
        expect(filepath).toBe("s3_file_path/image_name.jpg");
    });
});