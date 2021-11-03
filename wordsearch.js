const wordSearch = (letters, word) => {
  // horizontally joining the metric
  const horizontalJoin = letters.map((ls) => ls.join(""));
  // next step is to check if word exist vertically
  const verticalMatrix = transpose(letters);
  const verticalJoin = verticalMatrix.map((ls) => ls.join(""));

  for (let v of verticalJoin) {
    if (v === word || v.includes(word)) {
      return true;
    }
  }
  for (let l of horizontalJoin) {
    // check if the the l is the word or l contains the word
    // this checks if the word is included horizontally
    if (l === word || l.includes(word)) {
      return true;
    }
  }
  return false;
};

const transpose = function (matrix) {
  // Put your solution here
  let outputArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    // new row array to push the new values
    outputArray.push([]);
    //outputArray.push(newrow)
    for (let j = 0; j < matrix.length; j++) {
      // original element = a[i][j] == > out[j][i]
      outputArray[i].push(matrix[j][i]);
    }
  }
  return outputArray;
};

module.exports = wordSearch;



