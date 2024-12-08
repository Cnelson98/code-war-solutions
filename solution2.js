// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  let average;
  classPoints.push(yourPoints);
  for (let i = 0; i < classPoints.length; i++) {
    sum = sum + classPoints[i];
  }
  average = sum / classPoints.length;

  if (yourPoints > average) {
    return true;
  } else {
    return false;
  }
}

// Used conditional if/else statements to find the sum of the average scores
