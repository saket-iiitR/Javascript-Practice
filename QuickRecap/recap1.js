const myPercent = function (curr_sgpa, prev_cgpa, semsester) {
  let new_cgpa = (prev_cgpa * (semsester - 1) + curr_sgpa) / semsester;
  return new_cgpa;
};
const Grade = function (cgpa) {
  if (cgpa >= 9) console.log(`Outstanding! your CGPA: ${cgpa}`);
  else if (cgpa >= 8) console.log(`Excellent! your CGPA: ${cgpa}`);
  else if (cgpa >= 7) console.log(`Good! your CGPA: ${cgpa}`);
  else if (cgpa >= 6) console.log(`Okay! your CGPA: ${cgpa}`);
};
Grade(myPercent(9.09, 7.95, 6));
