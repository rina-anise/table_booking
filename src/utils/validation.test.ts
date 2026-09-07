import { describe, it, expect } from "vitest";
import { validatePhone } from "./validation";

describe('validatePhone', () => {
    it('Принимает валидный номер в формате 7XXXXXXXXXX', () => {
        expect(validatePhone('79676767676')).toBe(null)
    })
    it('Принимает валидный номер в формате 8XXXXXXXXXX', () => {
        expect(validatePhone('89676767676')).toBe(null)
    })
    it('Принимает валидный номер в формате с лишними знаками', () => {
        expect(validatePhone('7 (967) 676-67-67 ')).toBe(null)
    })
    it('Отклоняет пустую строку', () => {
        expect(validatePhone('')).not.toBe(null)
    })
    it('Отклоняет слишком короткий номер', () => {
        expect(validatePhone('89676767')).not.toBe(null)
    })
    it('Отклоняет номер, не начинающийся с 8 или 9', () => {
        expect(validatePhone('189676767')).not.toBe(null)
    })
})