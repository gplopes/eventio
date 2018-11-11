import beautifyDate, { monthNames } from '../beautifyDate';

test("beautifyDate - should beautify/format date", () => {
  const date = new Date('Nov 11, 2018 9:00')
  const result = "November 11, 2018 - 9:00 AM";
  expect(beautifyDate(date)).toBe(result);
});