let vowels = ["a", "A", "i", "I", "u", "U", "e", "E", "o", "O", ""];

function vocalSeeker(board) {
  let count = 0;
  let character = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      for (let k = 0; k < vowels.length; k++) {
        if (board[i][j] === vowels[k]) {
          count++;
          character += vowels[k];
        }
      }
    }
  }
  return `vowel ditemukan ${count} dan kumpulan vokal adalah ${character}`
}

//Driver Code
let board = [
  ["*", "*", "*", 10],
  ["x", "*", -5, -10, "*", 100],
  ["a", "A", "o", "b", "o"],
];

console.log(vocalSeeker(board));
