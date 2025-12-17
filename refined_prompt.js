/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with various separators (spaces, underscores, or hyphens)
 * and converts it to camelCase notation where the first word is lowercase and subsequent
 * words are capitalized with no separators.
 * 
 * @function camelCase
 * @param {string} input - The input string to convert. Must be a non-empty string containing
 *                         at least one alphabetic character.
 * @returns {string} The converted camelCase string with non-alphabetic characters removed.
 * 
 * @throws {Error} If input is not a string.
 * @throws {Error} If input string is empty.
 * @throws {Error} If input contains no alphabetic characters after splitting and filtering.
 * @throws {Error} If a word contains no alphabetic characters after removing non-alphabetic chars.
 * 
 * @example
 * camelCase('hello world')        // Returns: 'helloWorld'
 * camelCase('hello_world')        // Returns: 'helloWorld'
 * camelCase('hello-world')        // Returns: 'helloWorld'
 * camelCase('hello world 123')    // Returns: 'helloWorld'
 * 
 * @example
 * // Error cases:
 * camelCase('')                   // Throws: 'Input string cannot be empty'
 * camelCase(123)                  // Throws: 'Input must be a string'
 * camelCase('___')                // Throws: 'Input must contain at least one alphabetic character'
 */
function camelCase(input) {
    // Validate input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check if string is empty
    if (input.length === 0) {
        throw new Error('Input string cannot be empty');
    }

    // Split by common separators (spaces, underscores, hyphens) and filter out empty strings
    const words = input
        .split(/[\s_-]+/)
        .filter(word => word.length > 0);

    // Check if any valid words remain after filtering
    if (words.length === 0) {
        throw new Error('Input must contain at least one alphabetic character');
    }

    // Remove non-alphabetic characters from each word and convert to camelCase
    const camelCased = words
        .map((word, index) => {
            // Remove non-alphabetic characters
            const cleanWord = word.replace(/[^a-zA-Z]/g, '');
            
            if (cleanWord.length === 0) {
                throw new Error('Word must contain at least one alphabetic character');
                return '';
            }

            // First word is lowercase, subsequent words are capitalized
            if (index === 0) {
                return cleanWord.toLowerCase();
            }
            return cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1).toLowerCase();
        })
        .filter(word => word.length > 0)
        .join('');

    if (camelCased.length === 0) {
        throw new Error('Input must contain at least one alphabetic character');
    }

    return camelCased;
}

module.exports = camelCase;

