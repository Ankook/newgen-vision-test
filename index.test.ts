import { filterCourses } from "./index";
import { requiredRange1,requiredRange2, requiredRange3 } from "./index";

let coursesForTests;


beforeEach(() => {
  coursesForTests  = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] },  
  { name: "Courses in Italy", prices: [100, 200] },  
  { name: "Courses in Russia", prices: [null, 400] }, 
  { name: "Courses in China", prices: [50, 250] },    
  { name: "Courses in USA", prices: [200, null] },  
  { name: "Courses in Kazakhstan", prices: [56, 324] }, 
  { name: "Courses in France", prices: [null, null] }, 
]; 
})


test('testing first example', () => {
  expect(filterCourses(coursesForTests, requiredRange1)).toStrictEqual(
    [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] }
  ]);
})

test('testing second example', () => {
  expect(filterCourses(coursesForTests, requiredRange2)).toStrictEqual(
    [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] }
  ])
});

test('testing third example', () => {
  expect(filterCourses(coursesForTests, requiredRange3)).toStrictEqual(
    [
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },    
    { name: "Courses in USA", prices: [200, null] }, 
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] } 
  ])
});
