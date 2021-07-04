# 해시 탐색(Hash Search)

- 해시(Hash)란 단어는 '잘게 썬다', '잘게 자른다'라는 의미로, '원래의 숫자를 모양이 변할 정도로 요리하여 전혀 다른 값을 생성한다'는 의미로 파악해 두는 것이 좋다.
- 어떤 데이터가 어떤 요소에 들어 있는지 전혀 모르는 상태에서 검색을 시작하는 선형 탐색, 이진 탐색과 달리, 나중에 데이터를 탐색하기 쉽도록 데이터를 보관하는 단계에서 사전 준비를 해 둔다.
- 예를 들면, 24인 데이터는 첨자 24의 요소에 넣어 두고, 36인 데이터는 36의 요소에 넣어둔다. (이를 위해서 최소 0 ~ 36까지의 요소를 가진 배열이 만들어져 있어야 한다.) -> Direct Address Table
- 이렇게 하면 너무 많은 메모리를 낭비하는 것이기 때문에 특정 계산식을 거친 후의 데이터를 요소에 저장하는 방식으로 효율성을 높일 수 있다.

<br>

![해시 탐색 알고리즘 설명](https://www.tutorialspoint.com/data_structures_algorithms/images/hash_function.jpg)

출처 : [tutorialspoint](https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm)

<br>

- 예를 들면, 26인 데이터를 0 ~ 26까지의 요소가 들어있는 배열을 만들어 요소 26에 저장하는 대신, 0 ~ 6까지의 요소만 들어있는 배열을 만들어두고 데이터를 7로 나눠 그 나머지 값인 5를 산출해 요소 5에 저장하는 방식이다.
- 위의 예시에서 데이터를 7로 나눈 것 같이 데이터를 대표하는 요소 값을 계산하는 함수는 '해시 함수'라고 하며, 해시 함수를 통해 산출된 값을 '해시값'이라고 한다.
- 해시 테이블이란 해시함수를 사용하여 변환한 값을 index로 삼아 key와 value를 저장하는 자료구조이다.
- 장점 : 특정 데이터에 매우 빠르게 접근할 수 있다.
- 단점 : 해시 테이블에 사용하는 배열의 크기는 너무 작으면 충돌이 많아지고 선형 탐색의 빈도가 높아진다. 반대로, 크기가 너무 크면 데이터가 없는 상자가 많아져서 메모리를 낭비하게 된다. -> 이와 같은 단점을 극복하기 위해서 해시 알고리즘을 견고하게 설계해야한다.
  
<br>

## 충돌 해결

### Chaining
![해시 탐색 체이닝 설명](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hash_table_5_0_1_1_1_1_0_LL.svg/750px-Hash_table_5_0_1_1_1_1_0_LL.svg.png)

출처 : [wikipedia](https://en.wikipedia.org/wiki/Hash_table#Separate_chaining)

- 체이닝이란, 충돌이 발생했을 때 이를 동일한 주소에 연결리스트 형태로 저장하는 방법을 말한다.
- 삽입할 때는 연결리스트에 추가하기만 하면 되기 때문에 시간 복잡도는 O(1)이지만, 탐색 및 삭제할 때는 최악의 경우 키 값의 개수인 n에 대해 O(n)이 걸리게 된다.(모든 값에서 충돌이 일어나 모든 값을 한 index에 연결리스트에 연결한 경우)

### Open Addressing

- 개방 주소법이란, 충돌이 발생하면 그 다음으로 비어있는 주소를 찾아 저장하는 방식을 말한다.

![해시 탐색 체이닝 설명](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Hash_table_5_0_1_1_1_1_0_SP.svg/570px-Hash_table_5_0_1_1_1_1_0_SP.svg.png)

출처 : [wikipedia](https://en.wikipedia.org/wiki/Hash_table#Open_addressing)

  1. 선형 탐사(Linear Probing)

     - 충돌이 발생하면 다음 주소가 비어있는지 확인하고, 채워져 있다면 그 다음 주소가 비어있는지 확인한다. 즉, index를 1씩 증가시켜 사용 가능한 주소를 찾는다.
     - 바로 인접한 인덱스에 데이터를 삽입해가기 때문에 데이터가 밀집되는 군집(cluster)이 쉽게 발생한다는 단점이 있다.

  2. 이차 탐사/제곱 탐사(Quadratic Probing)

      - index를 매번 1씨 증가시키는 대신 완전 제곱을 사용한다.
      - 사용 가능한 인덱스에 키를 균등하게 분배하는 데 도움이 되어 군집 문제를 해결하기 좋다.


  3. 재해싱/이중해싱(Double Hashing)

      - 두 번째 해시 함수를 적용한다.
      - 일반적으로 사용하는 두 번째 해싱 함수는 다음과 같다.
        - <code>hash<sub>2</sub>(첫번째 해싱 결과) = R - (첫번째 해싱 결과 % R)</code> 

![개방 주소법 탐사 방법 간 비교](https://slidetodoc.com/presentation_image/8ff4e88afb1b4b09f43de766f99ceb5d/image-27.jpg)

출처 : [Hashing Techniques 11 Overview Hash string key integer](https://slidetodoc.com/hashing-techniques-11-overview-hash-string-key-integer/)


## 구현
- 선형 탐사 및 이차 탐사

   ```javascript
   class HashTable {
     constructor(size) {
       this.size = size;
       this.keys = this.initArray(size);
       this.values = this.initArray(size);
       this.limit = 0;
     }
     
     putLinear(key, value) {
       if(this.limit >= this.size) throw 'hash table is full';
       
       let hashedIndex = this.hash(key);
       
       // 선형 탐사
       while (this.keys[hashedIndex] != null) {
         hashedIndex++;
         
         hashedIndex = hashedIndex % this.size;
       }
       
       this.keys[hashedIndex] = key;
       this.values[hashedIndex] = value;
       this.limit++;
     }
     
     putQuad(key, value) {
       if(this.limit >= this.size) throw 'hash table is full';
       
       let hashedIndex = this.hash(key), squareIndex = 1;
       
       // 이차 탐사
       while (this.keys[hashedIndex] != null) {
         hashedIndex += Math.pow(squareIndex, 2);
         
         hashedIndex = hashedIndex % this.size;
         squareIndex++;
       }
       
       this.keys[hashedIndex] = key;
       this.values[hashedIndex] = value;
       this.limit++;
     }

     getLinear(key) {
       let hashedIndex = this.hash(key);

       while (this.keys[hashedIndex] != key) {
           hashedIndex++;

           hashedIndex = hashedIndex % this.size;

       }
       return this.values[hashedIndex];
     }

     getQuad(key) {
       let hashedIndex = this.hash(key), squareIndex = 1;

       while (this.keys[hashedIndex] != key) {
         hashedIndex += Math.pow(squareIndex, 2);
         
         hashedIndex = hashedIndex % this.size;
         squareIndex++;
       }
       return this.values[hashedIndex];
     }
     
     hash(key) {
       // 키가 정수인지 확인한다.
       if(!Number.isInteger(key)) throw 'must be int';
       return key % this.size;
     }
     
     initArray(size) {
       let array = [];
       for (let i = 0; i < size; i++) {
         array.push(null);
       }
       return array;
     }
   }

   // 선형 탐사 예시
   const exampleLinear = new HashTable(13);

   exampleLinear.putLinear(7, "hi");
   exampleLinear.putLinear(20, "hello");
   exampleLinear.putLinear(33, "sunny");
   exampleLinear.putLinear(46, "weather");
   exampleLinear.putLinear(59, "wow");
   exampleLinear.putLinear(72, "forty");
   exampleLinear.putLinear(85, "happy");
   exampleLinear.putLinear(98, "sad");

   console.log(exampleLinear);
   /* {
     keys: [85, 98, null, null, null, null, null, 7, 20, 33, 46, 59, 72],
     limit: 8,
     size: 13,
     values: ["happy", "sad", null, null, null, null, null, "hi", "hello", "sunny", "weather", "wow", "forty"]
   } */

   // 이중 탐사 예시
   const exampleQuad = new HashTable(13);

   exampleQuad.putQuad(7, "hi");
   exampleQuad.putQuad(20, "hello");
   exampleQuad.putQuad(33, "sunny");
   exampleQuad.putQuad(46, "weather");
   exampleQuad.putQuad(59, "wow");
   exampleQuad.putQuad(72, "forty");
   exampleQuad.putQuad(85, "happy");
   exampleQuad.putQuad(98, "sad");

   console.log(exampleQuad);
   /* {
     keys: [null, null, null, 85, 72, null, 98, 7, 20, null, 59, 46, 33],
     limit: 8,
     size: 13,
     values: [null, null, null, "happy", "forty", null, "sad", "hi", "hello", null, "wow", "weather", "sunny"]
   } */
   ```

- 선형 탐사를 활용한 이중 해싱
  ```javascript
  class HashTable {
    constructor(size) {
      this.size = size;
      this.keys = this.initArray(size);
      this.values = this.initArray(size);
      this.limit = 0;
    }
    
    putDouble(key, value) {
      // 선형 탐사 이용
      if(this.limit >= this.size) throw 'hash table is full';
      
      let hashedIndex = this.hash(key);
      
      while (this.keys[hashedIndex] != null) {
        hashedIndex++;
        
        hashedIndex = hashedIndex % this.size;
      }
      
      this.keys[hashedIndex] = key;
      this.values[hashedIndex] = value;
      this.limit++;
    }
    
    getDouble(key) {
      let hashedIndex = this.hash(key);

      while (this.keys[hashedIndex] != key) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;

      }
      return this.values[hashedIndex];
    }
    
    hash(key) {
      // 키가 정수인지 확인한다.
      if(!Number.isInteger(key)) throw 'must be int';
      return this.secondHash(key);
    }
    
    secondHash(Key) {
      const R = this.size - 2;
      return R - Key % R;
    } 
    
    initArray(size) {
      let array = [];
      for (let i = 0; i < size; i++) {
        array.push(null);
      }
      return array;
    }
  }

  const exampleDouble = new HashTable(13);

  // 이중 해싱 예시
  exampleDouble.putDouble(7, "hi");
  exampleDouble.putDouble(20, "hello");
  exampleDouble.putDouble(33, "sunny");
  exampleDouble.putDouble(46, "weather");
  exampleDouble.putDouble(59, "wow");
  exampleDouble.putDouble(72, "forty");
  exampleDouble.putDouble(85, "happy");
  exampleDouble.putDouble(98, "sad");

  console.log(exampleDouble);
  /* {
    keys: [null, 98, 20, 85, 7, 72, null, 59, null, 46, null, 33, null],
    limit: 8,
    size: 13,
    values: [null, "sad", "hello", "happy", "hi", "forty", null, "wow", null, "weather", null, "sunny", null]
  } */
  ```

<br>

## 시간 복잡도
* 평균 : `O(1)`
* 최악의 경우 : `O(n)`

<br>

___

<br>

### 참고

- [처음 만나는 알고리즘, 이토 시즈카](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=107823801)
- https://github.com/trekhleb/javascript-algorithms
- [자바스크립트로 하는 자료 구조와 알고리즘, 배세민](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=204103185)
- [geeksforgeeks](https://www.geeksforgeeks.org/double-hashing/)
- [배하람 블로그](https://baeharam.github.io/posts/data-structure/hash-table/)
- [libretexts](https://eng.libretexts.org/Courses/Folsom_Lake_College/CISP_430%3A_Data_Structures_(Aljuboori)/07%3A_Hash_Tables/7.01%3A_Time_complexity_and_common_uses_of_hash_tables#cite_note-1)