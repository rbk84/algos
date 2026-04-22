import { findAllLCS } from "./solution";

describe('findAllLCS', () => {
    test('should return a valid array of strings', () => {
        const res = findAllLCS('ABDEFADRFG', 'DAFERG');
        expect(res).toEqual(['AERG', 'DERG', 'AFRG', 'DFRG', 'DARG', 'DAFG']);
    });
});