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
      { name: "Courses in England", prices: [0, 100] }, 
      { name: "Courses in Germany", prices: [500, null] },  
      { name: "Courses in Italy", prices: [100, 200] },  
      { name: "Courses in Russia", prices: [null, 400] }, 
      { name: "Courses in China", prices: [50, 250] },    
      { name: "Courses in USA", prices: [200, null] },  
      { name: "Courses in Kazakhstan", prices: [56, 324] }, 
      { name: "Courses in France", prices: [null, null] },  
    ]; 


    


export function filterCourses(courses: Array<CourseType>, requiredRange) {
  let result = courses.filter(course => overlap(requiredRange[0], requiredRange[1], course.prices[0], course.prices[1]) == true);
  return result;
  
}