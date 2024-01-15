// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {

    //test gamertag is less than 8 characters
    test('should return false if gamer tag has less than 8 characters', () => {
        const GamerTag = 'crazy';
        const result = isValid(GamerTag);
        expect(result).toBe(false);
    });

    //test gamertag is longer than 8 characters
    test('should return true if gamer tag has at least 8 characters', () => {
        const GamerTag = 'MyGamerTagIsLongEnough_';
        const result = isValid(GamerTag);
        expect(result).toBe(true);
    });

    //test gamertag don't have special characters
    test('should return false if gamer tag does not contain a special character', () => {
        const gamerTagWithoutSpecialChar = 'GamerTag';
        const result = isValid(gamerTagWithoutSpecialChar);
        expect(result).toBe(false);
    });
    
    //test gamertag have special characters
    test('should return true if gamer tag contains at least one special character', () => {
        const gamerTagWithSpecialChar = 'GamerTagè';
        const result = isValid(gamerTagWithSpecialChar);
        expect(result).toBe(true);
    });
});
