import { permutations } from "./permutations"

describe('permutations function ', () => {
    it("with input 'a' should return ['a']", () => {
        const res = permutations('a');
        expect(res).toEqual(['a']);
    })

    it("with input 'ab' should return ['ab','ba']", () => {
        const res = permutations('ab');
        expect(res).toEqual(['ab','ba']);
    })

    it("with input 'abc' should return ['abc','acb','bac','bca','cab','cba']", () => {
        const res = permutations('abc');
        expect(res).toEqual(['abc','acb','bac','bca','cab','cba']);
    })

    it("with input 'aabb' should return ['aabb','ababa','abba','baab','baba','bbaa']", () => {
        const res = permutations('aabb');
        expect(res).toEqual(['aabb','abab','abba','baab','baba','bbaa']);
    })
})