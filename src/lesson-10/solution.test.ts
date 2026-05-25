import { getListFromFile } from "./solution";
import path from 'path';

describe('getListFromFile', () => {
    test('should return correct list', () => {
        const result = getListFromFile(path.join(__dirname, 'input.txt'));
        expect(result).toEqual({
            3: [ "Петя" ],
            5: [ "Вася", "Аня" ]
        })
    });
});