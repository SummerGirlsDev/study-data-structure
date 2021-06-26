# 탐색 알고리즘

## 선형 탐색(Linear Search)

- 특정 값을 찾기 위해 맨 앞부터 순서대로 하나하나 확인하는 탐색 방법이다.
- 특정 사물함 안에 들어 있는 물건을 찾기 위해 사물함을 앞에서부터 하나하나 열어보고 확인하는 것과 같다.
- 장점 : 단순해서 이해하기 쉽다.
- 단점 : 찾는 값이 앞쪽에 있으면 짧은 시간에 탐색할 수 있지만, 뒤쪽에 있거나 없거나 데이터 양이 많으면 탐색하는 데 많은 시간이 걸린다.
  
<br>

![선형 탐색 알고리즘 설명](https://www.tutorialspoint.com/data_structures_algorithms/images/linear_search.gif)

출처 : [tutorialspoint](https://www.tutorialspoint.com/data_structures_algorithms/linear_search_algorithm.htm)

<br>

### 알고리즘

```
선형 탐색 (Array A, Value x)
Step 1: i에 0을 대입해라
Step 2: i > A.length 이면 step 7로 가라
Step 3: A[i] = x 이면 step 6으로 가라
Step 4: i에 i + 1을 대입해라
Step 5: Step 2로 돌아가 반복해라
Step 6: 'i번째 요소와 일치합니다'라고 출력한 후 step 8로 가라
Step 7: '값을 찾지 못했습니다'고 출력해라
Step 8: 종료
```

### 의사 코드

```
procedure linear_search (array, value)

   for each item in the array
      if match item === value
         return the item's location
      end if
   end for
   return 'Not Found'

end procedure
```

### JS로 구현

```javascript
function linearSearch (array, value) {
  for (let i = 0; i < array.length; i++) {
  	if (array[i] === value) {
    	return `${i}번째 요소와 일치합니다.`
    }
  }
  return `값을 찾지 못했습니다.`
}

const list = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

console.log(linearSearch(list, 10)); 
// 출력 : 9번째 요소와 일치합니다.
console.log(linearSearch(list, 11));
// 출력 : 값을 찾지 못했습니다.
```

### 시간 복잡도
`O(n)`

<br>

___

<br>

## 이진 탐색(Binary Search)
- 미리 오름차순이나 내림차순으로 정렬되어 있는 데이터를 대상으로 한다.
- 탐색하는 범위를 절반씩 추려 나가면서 탐색한다.
- 전화번호부에서 전화번호를 찾을 때 절반씩 펼쳐서 찾는 것과 같다.
- 장점 : 선형 탐색법보다 빠르다.
- 단점 : 데이터가 적은 경우나 원하는 데이터가 맨 앞의 가까운 위치에 저장되어 있는 경우는 선형 탐색법이 더 빠를 수 있다.

<br>

![이진 탐색 알고리즘 설명](https://blog.penjee.com/wp-content/uploads/2015/04/binary-and-linear-search-animations.gif)

출처 : [penjee blog](https://blog.penjee.com/binary-vs-linear-search-animated-gifs/)

<br>

### 알고리즘

```
이진 탐색 (Array A, Value x)
Step 1: head에 0, tail에 (A.length - 1)을 대입해라
Step 2: head <= tail 이면 step 7로 가라
Step 3: center에 ((head + tail) / 2)의 소수점 버림 값을 대입해라
Step 4: A[center] = x 이면 step 8로 가라
Step 5: A[center] < x 이면 head에 (center + 1) 값을 대입하고 반대라면 tail에 (center - 1) 값을 대입해라
Step 6: step 2로 돌아가 반복해라
Step 7: '값을 찾지 못했습니다'고 출력한 후에 step 9로 가라
step 8 : 'center번째 요소와 일치합니다'라고 출력해라
Step 9: 종료
```

### 의사 코드

```
Procedure binary_search
   A ← sorted array
   n ← size of array
   x ← value to be searched

   Set head = 0
   Set tail = n - 1 

   while x not found
      if head <= tail
         EXIT: x does not exists.
   
      set center = Math.floor((head + tail) / 2)
      
      if A[center] < x
         set head = center + 1
         
      if A[center] > x
         set tail = center - 1 

      if A[center] = x 
         EXIT: x found at location center
   end while
   
end procedure
```

### JS로 구현

```javascript
function binarySearch (array, value) {
  let head = 0;
  let tail = array.length - 1;

  while ( head <= tail ) {
    const center = Math.floor((head + tail) / 2);
    if (array[center] === value) {
      return `${center}번째 요소와 일치합니다.`
    }
    array[center] < value 
      ? head = center + 1
      : tail = center - 1;
  }
  return `값을 찾지 못했습니다.`
}

const list = [10, 30, 52, 74, 93, 25, 46, 65, 87, 110];
const sortedList = list.sort((a, b) => a - b);
// sortedList = [10, 25, 30, 46, 52, 65, 74, 87, 93, 110]

console.log(binarySearch(sortedList, 93)); 
// 출력 : 8번째 요소와 일치합니다.
console.log(binarySearch(sortedList, 94));
// 출력 : 값을 찾지 못했습니다.
```

### 시간 복잡도
`O(log(n))`

<br>

___

<br>

### 참고

- 처음 만나는 알고리즘, 이토 시즈카
- https://github.com/trekhleb/javascript-algorithms