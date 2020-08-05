const { music, sentence } = require('./app');
const fragment = 'My favorite artists are ';

test('array has a length of 4', () => {
  expect(music.length).toBe(4);
});

test('array returns the correct value', () => {
  expect(fragment+music.join(', ')).toEqual(sentence);
});
