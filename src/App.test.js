import { add, total } from "./App"; //for mock function, remove the add function

//Jest Mock functions
const add = jest.fn(() => 3); //doesn't run the imported "add" since it is commented out; just checking that the "add" test works(by returning 3)

// console.log(add(1, 2));

//Unit test: this is a unit test because it tests only one thing

test("add", () => {
  //   const value = add(1, 2);
  //   expect(value).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 3);//will fail because add is called above with 1 and 2
  //expect(add(5, 2)).toBe(7);
});

//First examples
// test("Fake Test", () => {
//   expect(true).toBeTruthy();
// });

// test("Fake Two", () => {
//   expect(false).toBeTruthy(); //the "false" there is wrong; rather should be "true"
// });

//Integration test: testing things(functions) that depend on other things(functions) to work
// test("total", () => {
//   expect(total(5, 20)).toBe("$25");
// });
