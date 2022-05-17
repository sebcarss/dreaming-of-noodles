import { kebabCase, titleCase } from "./string-utils"

describe("Test the kebabCase function", () => {
    it ("should return sri-lanka", () => {
        let result = kebabCase("Sri Lanka")
        expect(result).toEqual("sri-lanka")
    })
})

describe("Test the titleCase function", () => {
    it ("should return Sri Lanka", () => {
        let result = titleCase("sri lanka")
        expect(result).toEqual("Sri Lanka")
    })
    it ("should return Gluten Free", () => {
        let result = titleCase("gluten-free")
        expect(result).toEqual("Gluten Free")
    })
})