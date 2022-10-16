import { kebabCase, titleCase } from "./string-utils"

describe("Test the kebabCase function", () => {
    it ("should return sri-lanka", () => {
        let result: string = kebabCase("Sri Lanka")
        expect(result).toEqual("sri-lanka")
    })

    it ("should return an empty string", () => {
        let result: string = kebabCase("")
        expect(result).toEqual("")
    })
})

describe("Test the titleCase function", () => {
    it ("should return Sri Lanka", () => {
        let result: string = titleCase("sri lanka")
        expect(result).toEqual("Sri Lanka")
    })
    it ("should return Gluten Free", () => {
        let result: string = titleCase("gluten-free")
        expect(result).toEqual("Gluten Free")
    })
    it ("should return An Empty String", () => {
        let result: string = titleCase("")
        expect(result).toEqual("")
    })
})