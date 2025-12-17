function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    return input
        .toLowerCase()
        .replace(/[^a-z0-9\s_-]/g, '')
        .split(/[\s_-]+/)
        .filter(word => word.length > 0)
        .join('-');
}

module.exports = toKebabCase;