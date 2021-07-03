[홈으로](../README.md)
# 🔮 탐색 알고리즘
> **원하는** 데이터를 **찾아내는** 알고리즘

검색 엔진도 탐색 알고리즘을 사용한다.
### 목차
+ [선형 탐색](#선형-탐색)
+ [이진 탐색](#이진-탐색)
---
### 선형 탐색
(Linear Search)
> **맨 앞**부터 **순서대로** 조사하여 찾는 탐색 알고리즘
#### 특징
+ 단순하다
+ 탐색 효율이 나쁘다
+ 잘 사용하지 않는다.
#### 빅오 표기법
**시간복잡도** : `O(n)`
#### 코드
[코드 링크](./linear.js)
```
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
```
<b>결과</b>
`배열의 3번째 요소가 일치합니다`

---
### 이진 탐색
(Binary Search)
> **탐색**하는 **범위**를 **절반씩** 추려나가는 탐색 알고리즘

<span style="color:red; font-weight:bold">주의사항</span>
미리 **오름차순**이나 **내림차순**으로 **정렬**되어있는 데이터에 사용할 수 있는 알고리즘이다.
#### 특징
+ 데이터가 정렬이 되어있어야 사용할 수 있다.
+ 속도가 선형 탐색보다 훨씬 빠르다.
#### 탐색 순서
오름차순 데이터를 기준으로 설명한다.
1. 배열의 가장 **가운데 값**을 확인한다.
2. **가운데 값**이 찾는 값이라면 그대로 반환한다. 
3. **찾고자하는 값**보다 **가운데 값**이 **크다**면 가운데 인덱스를 기준으로 **오른쪽 값** 전부를 **탐색**에서 **제외**한다.
찾고자하는 값보다 **작다면** **왼쪽 값** 전부를 **탐색**에서 **제외**한다.
4. 남은 탐색 데이터에서 **2-3단계를 반복**한다.
#### 빅오 표기법
**시간복잡도** : `O(log n)`
절반씩 줄어들면 O(log n)의 복잡도를 가진다.
#### 코드
[코드 링크](./binary.js)
```
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
```
<b>결과</b>
`200 데이터를 찾지 못했습니다.`
