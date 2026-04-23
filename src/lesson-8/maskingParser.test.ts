import MaskingParser from "./MaskingParser";
import fs from 'fs';
import path from 'path';

describe('MaskingParser.mask', () => {
    test('should return a string with the correct masked data', () => {
        const fileInputPath = path.join(__dirname, 'input.log');
        const fileResultPath = path.join(__dirname, 'result.log');
        const fileInputContent = fs.readFileSync(fileInputPath, 'utf-8').split(/\r?\n/);
        const fileResultContent = fs.readFileSync(fileResultPath, 'utf-8').split(/\r?\n/);
        const parser = new MaskingParser();

        for (let i = 0; i < fileInputContent.length; i++) {
            expect(parser.mask(fileInputContent[i])).toBe(fileResultContent[i]);
        }
    });
});