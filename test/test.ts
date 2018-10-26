import teleformat from '../src/index';

test('it works', () => {
  console.log(teleformat.decorate("+141"));
  console.log(teleformat.decorate("+1415"));
  console.log(teleformat.decorate("+141590"));
  console.log(teleformat.decorate("+1415900"));
  console.log(teleformat.decorate("+14159007625"));

  console.log(teleformat.decorate("+440215868741256"));
  console.log(teleformat.decorate("+4401312265895"));
  
  console.log(teleformat.decorate("+4401387266835"));
  console.log(teleformat.decorate("+4401387366835"));

  console.log(teleformat.decorate("+610245893568"));
  console.log(teleformat.decorate("+610445893568"));
});
