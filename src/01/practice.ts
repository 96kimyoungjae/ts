// 과제 1
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 예시: 1부터 100 사이의 랜덤 숫자 생성
const randomNumber = generateRandomNumber(1, 100);
generateRandomNumber(1, 100);
