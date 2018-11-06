const add = (a,b) => a+b;

test("test to see if two numbers add", () => {
  const result = add(4,5);
  expect(result).toBe(9);
})

const getGreeting = (name = 'Anonymous') => `Hello ${name}!`

test("Should get a greeting message", () => {
  const result = getGreeting("Hossein");
  expect(result).toBe("Hello Hossein!")
})

test("Should get Anon greeting", () => {
  const result = getGreeting();
  expect(result).toBe(`Hello Anonymous!`)
})