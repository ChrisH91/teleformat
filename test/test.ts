import teleformat from '../src/index';

test('it works', () => {
  console.log(teleformat.decorate("+141"));
  console.log(teleformat.decorate("+1415"));
  console.log(teleformat.decorate("+141590"));
  console.log(teleformat.decorate("+1415900"));
  console.log(teleformat.decorate("+14159007625"));
});
