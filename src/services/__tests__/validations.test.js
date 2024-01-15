// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBeDefined();
    });

    test('should return false if gamer tag has less than 8 characters', () => {
        const GamerTag = 'crazy';
        const result = isValid(GamerTag);
        expect(result).toBe(false);
    });

    test('should return true if gamer tag has at least 8 characters', () => {
        const GamerTag = 'MyGamerTagIsLongEnough';
        const result = isValid(GamerTag);
        expect(result).toBe(true);
    });
});
