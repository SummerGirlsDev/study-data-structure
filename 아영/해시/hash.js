// hash함수를 사용해 데이터를 저장하고 찾는 방법

// 간단한 해시함수를 사용한다.
function hash(data){
  // 데이터를 받으면 11로 나눈 나머지 값을 리턴한다.
  return data % 11;
}

// 해시함수로 데이터 저장하기
const arr = [12,25,36,20,30,8,42]; // 저장할 데이터
function hashSave(arr){
  // 1. 해시함수로 데이터를 저장할 때는 기존 데이터 공간보다
  // 약 1.5배~2배 정도 공간을 만들어둔다.
  // 만든 저장배열에 값이 없다는 의미로 null을 채워놓는다.
  let hashArr = new Array(Math.floor(arr.length * 1.5)).fill(null);

  // 2. 배열에 데이터 저장하기
  for(let i=0; i< arr.length; i++){
    // 해시함수를 사용해 첨자(idx)를 가져온다.
    let idx = hash(arr[i]);
    // 단, 좋지않은 해시함수를 사용할 경우.
    // 데이터가 충돌이 날 수있다.
    // 따라서, 
    // 2-1. hashArr[idx]에 값이 없을 경우 데이터를 저장한다
    if(hashArr[idx] === null){
      hashArr[idx] = arr[i]; 
      // console.log('null인 경우', i ,hashArr);
    }
    else{
    // 2-2.값이 있을 경우 == 충돌이 난 경우
    // 다음 방에 데이터를 저장시켜준다. 
      hashArr[hash(idx + 1)] = arr[i];
      // console.log('null이 아닌경우 -', i ,hashArr)
    }
  }  
  return hashArr;
}
const hashArr = hashSave(arr);

// 해시함수로 데이터 찾기
function hashSearch( hashArr , value){
  // 1. 찾을 값에 해시함수를 적용해 첨자(idx)를 얻어온다
  let idx = hash(value);
  // 2. 종료 조건 - 값을 찾으면 탈출
  for(let i=0; i<hashArr.length; i++){
    if(hashArr[idx] === value){
      return `${idx}번째에 데이터 ${hashArr[idx]}가 존재합니다.`
    }else{
      // 같지 않으면 value + 1을 해서 다시 찾는다
      idx = hash(value + 1);
    }
  }
  return '데이터가 존재하지 않습니다.';
}

console.log(hashSearch(hashArr, 2000));