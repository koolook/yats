import { simple } from './simple-test';
describe('simple-test', () => {
    it('should succeed', () => {
        expect(simple(1)).toBe(2);
    });
    it('should succeed 2', () => {
        expect(simple(2)).toBe(3);
    });
    
});
