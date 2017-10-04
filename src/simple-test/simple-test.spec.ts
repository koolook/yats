import { simple } from './simple-test';
describe('simple-test', () => {
    it('should succeed', () => {
        expect(simple(1)).toBe(2);
    })
});
