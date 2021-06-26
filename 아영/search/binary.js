// binary search를 사용하기 위해서는 데이터가 정렬되어있어야한다.

const arr = [1,2,3,4,5,6,7,8,9,10,11];

function binarySearch(sortedArr, value){
  let head = 0;
  let tail = sortedArr.length - 1; // 배열은 0 부터 시작이기 때문

  // 종료 조건
  // head가 tail보다 크거나 같으면 데이터를 찾지 못한 경우다.
  while(head <= tail){
    // 1. 가운데 값 구하기
    let center = Math.floor((head + tail)/2);
    // 2. 가운데 idx값이 찾는 데이터 값일 경우
    if(sortedArr[center] === value) return `${center}번째에 데이터가 존재합니다.`;
    // 3. 탐색 범위를 반으로 줄이기
    // 3-1. 찾는 값이 센터보다 작은 경우
    if(sortedArr[center] > value){
      tail = center - 1;
    }
    // 3-2. 찾는 값이 센터보다 큰 경우
    else{
      head = center + 1;
    }
  }
  return `${value} 데이터를 찾지 못했습니다.`
}

console.log(binarySearch(arr,200));