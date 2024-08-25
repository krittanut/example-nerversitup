import { countSmile } from "./count-smiles";
import { findTheOdd } from "./find-odd";


describe('find odd function ', () => {

    it('should return 7 ', () => {
        const res = findTheOdd([7]);
        expect(res).toEqual(7);
    })

    it('should return 0 ', () => {
        const res = findTheOdd([0]);
        expect(res).toEqual(0);
    })

    it('should return 2 ', () => {
        const res = findTheOdd([1, 1, 2]);
        expect(res).toEqual(2);
    })

    it('should return 2 ', () => {
        const res = findTheOdd([0, 1, 0, 1, 0]);
        expect(res).toEqual(0);
    })

    it('should return 2 ', () => {
        const res = findTheOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
        expect(res).toEqual(4);
    })

})