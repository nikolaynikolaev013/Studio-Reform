import { untranslated } from '../untranslsated';

describe('untranslated utility', () => {
  it('should return the same string that was passed in', () => {
    const testString = 'Test string';
    const result = untranslated(testString);
    expect(result).toBe(testString);
  });

  it('should handle empty strings', () => {
    const emptyString = '';
    const result = untranslated(emptyString);
    expect(result).toBe(emptyString);
  });

  it('should handle strings with special characters', () => {
    const specialString = 'Бисквитки = по-яко преживяване. Съгласен?';
    const result = untranslated(specialString);
    expect(result).toBe(specialString);
  });

  it('should handle strings with numbers and symbols', () => {
    const mixedString = 'Price: 25лв - 30% discount!';
    const result = untranslated(mixedString);
    expect(result).toBe(mixedString);
  });

  it('should handle multiline strings', () => {
    const multilineString = 'Line 1\nLine 2\nLine 3';
    const result = untranslated(multilineString);
    expect(result).toBe(multilineString);
  });
});
