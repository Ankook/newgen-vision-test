import { overlap } from "./overlap";




test('testing first eight examples', () => {
  expect(overlap(null, 200, 0, 100)).toBe(true);
  expect(overlap(null, 200, 500, null)).toBe(false);
  expect(overlap(null, 200, 100, 200)).toBe(true);
  expect(overlap(null, 200, null, 400)).toBe(true);
  expect(overlap(null, 200, 50, 250)).toBe(true);
  expect(overlap(null, 200, 200, null)).toBe(true);
  expect(overlap(null, 200, 56, 324)).toBe(true);
  expect(overlap(null, 200, null, null)).toBe(true);
});

test('testing second eight examples', () => {
  expect(overlap(100,350, 0, 100)).toBe(true);
  expect(overlap(100,350, 500, null)).toBe(false);
  expect(overlap(100,350, 100, 200)).toBe(true);
  expect(overlap(100,350, null, 400)).toBe(true);
  expect(overlap(100,350, 50, 250)).toBe(true);
  expect(overlap(100,350, 200, null)).toBe(true);
  expect(overlap(100,350, 56, 324)).toBe(true);
  expect(overlap(100,350, null, null)).toBe(true);
});

test('testing second eight examples', () => {
  expect(overlap(200,null, 0, 100)).toBe(false);
  expect(overlap(200,null, 500, null)).toBe(true);
  expect(overlap(200,null, 100, 200)).toBe(true);
  expect(overlap(200,null, null, 400)).toBe(true);
  expect(overlap(200,null, 50, 250)).toBe(true);
  expect(overlap(200,null, 200, null)).toBe(true);
  expect(overlap(200,null, 56, 324)).toBe(true);
  expect(overlap(200,null, null, null)).toBe(true);
});