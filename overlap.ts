

//the problem is reduced to the intersection of two lines segments in 1D Dimension

export function overlap(min1: number | null, max1: number | null, min2: number | null, max2: number | null) {
  { min1 == null ? min1 = -Infinity : null }
  { min2 == null ? min2 = -Infinity : null }
  { max1 == null ? max1 = +Infinity : null }
  {max2 == null ? max2 = +Infinity : null}
  return  !((max1 < min2) || (max2 < min1))
}

