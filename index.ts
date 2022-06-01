  import { overlap } from "./overlap";
 
type requiredRangeType = Array<number | null>

  export const requiredRange1:requiredRangeType = [null, 200];
  export const requiredRange2:requiredRangeType = [100, 350];
  export const requiredRange3:requiredRangeType = [200, null];


  type CourseType = {
    name: string,
    prices: requiredRangeType
  }

  export const courses: Array<CourseType> = [
      { name: "Courses in England", prices: [0, 100] }, //не подходит
      { name: "Courses in Germany", prices: [500, null] },  //подходит
      { name: "Courses in Italy", prices: [100, 200] },  //подходит
      { name: "Courses in Russia", prices: [null, 400] }, //подходит
      { name: "Courses in China", prices: [50, 250] },    // подходит
      { name: "Courses in USA", prices: [200, null] },  //подходит
      { name: "Courses in Kazakhstan", prices: [56, 324] }, //подходит
      { name: "Courses in France", prices: [null, null] },  //подходит
    ]; 


    


export function filterCourses(courses: Array<CourseType>, requiredRange) {
  let result = courses.filter(course => overlap(requiredRange[0], requiredRange[1], course.prices[0], course.prices[1]) == true);
  return result;
  
}