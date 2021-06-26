// 입력값
const arr = ['a','b','c','d','e'];

// 배열 자료구조에서 데이터를 찾는 linear search
function linearSearch (arr, value){
  // 종료 조건
  for(let i = 0;i < arr.length; i++){
    if(arr[i] === value){
      return `배열의 ${i}번째 요소가 일치합니다`;
    }
  }
  return `배열에 데이터를 찾을 수 없습니다.`;
}
console.log(linearSearch(arr,'d'));