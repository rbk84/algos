import MaskingParser from "./MaskingParser";

const parser = new MaskingParser();
const maskedStr = parser.mask('2026-03-05 09:20:11 INFO Customer verification name=Кузнецов Дмитрий Олегович email=d.kuznetsov@example.com card=4000 0000 0000 0002');
console.log(maskedStr);