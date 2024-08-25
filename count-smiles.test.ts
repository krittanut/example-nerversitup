import { countSmile } from "./count-smiles";


describe('count-smile function ', () => {

    it('should return 2', () => {
        const data = [':)', ';(', ':-D'];
        const res = countSmile(data);
        expect(res).toEqual(2);
    });

    it('should return 3', () => {
        const data = [';D', ':-(', ':-)', ';~)'];
        const res = countSmile(data);
        expect(res).toEqual(3);
    })

    it('should return 1', () => {
        const data = [';]', ':[', ';*', ':$', ';-D'];
        const res = countSmile(data);
        expect(res).toEqual(1);
    })
})