const angle = [
  [0, 0],
  [0, 5],
  [5, 0],
  [5, 5],
];

const angleAdjacent = [
  [0, 1],
  [1, 0],
  [1, 1],
  [0, 4],
  [1, 4],
  [1, 5],
  [4, 0],
  [4, 1],
  [5, 1],
  [4, 4],
  [4, 5],
  [5, 5],
];

// 一致した時
function someElement(arr, opponentPutArr) {
  return check(arr, opponentPutArr, true);
}

// 一致していない時
function differentElement(arr, opponentPutArr) {
  return check(arr, opponentPutArr, false);
}

// [[1, 0], [2, 0], [3, 0]]
// [[2, 0], [3, 0], [4, 0]]
// some [[2, 0], [3, 0]]
// diff [[2, 0], [3, 0], [4, 0]]

// [[1, 0], [2, 0], [3, 0]]
// [[1, 1], [1, 3], [3, 1]]
// diff [[1, 1], [1, 3], [3, 1]]

// 石が置ける場所をチェック
function check(positionArr, opponentPutArr, match) {
  let _result = [];

  // 一致したもの配列に入れる
  let matchArr = [];
  opponentPutArr.forEach((el) => {
    for (let i = 0; i < positionArr.length; i++) {
      const a = el.toString() === positionArr[i].toString();
      if (a) {
        matchArr.push(el);
      }
    }
  });

  // matchによって処理を分ける
  if (match) {
    _result = matchArr;
  } else {
    opponentPutArr.forEach((el) => {
      const a = matchArr.includes(el);
      if (!a) {
        _result.push(el);
      }
    });
  }

  return _result;
}

export const opponentSelect = (opponent, opponentPutArr) => {
  const anglePutArr = someElement(angle, opponentPutArr);
  if (anglePutArr.length !== 0) {
    return anglePutArr;
  }
  const notAngleAdjacent = differentElement(angleAdjacent, opponentPutArr);
  if (notAngleAdjacent.length !== 0) {
    return notAngleAdjacent;
  }

  return opponentPutArr;
};
