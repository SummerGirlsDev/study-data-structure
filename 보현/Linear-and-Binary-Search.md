# 1. 선형, 이진 탐색법

## 시작하기에 앞서, 탐색이란?

구글이나 네이버와 같이 검색 포털은 알고 싶은 정보를 찾을 수 있는 '검색 엔진'을 제공하는데, 여기서 '검색'의 다른 명칭이 바로 '탐색'이다. 탐색은 원하는 데이터를 찾아내는 것을 말한다. 검색 엔진의 데이터 탐색 프로그램에서 사용하고 있는 알고리즘이 바로 '탐색 알고리즘'이다. 

## 1. 선형 탐색법(Linear Search)

- 맨 앞부터 순서대로 찾는 방식
- 선형 탐색법은 다른 말로 'Linear Search(리니어 서치)'라고도 하는데, 여기서의 Linear(리니어)는 리니어 모터카의 '리니어'와 같이 '일직선'이라는 의미를 갖고 있다. 즉, 탐색이 한 쪽 끝에서 다른 한 쪽 끝으로 나아가는 방식인 것이다. 그렇기 때문에 데이터 수가 많아지면 탐색 효율은 그다지 좋지 못하다.
- 탐색 처리는 반복 구조로 기술한다. 반복 구조에서는 종료 조건을 잊지 말아야 한다.
- 데이터가 적은 경우나 원하는 데이터가 맨 앞의 가까운 위치에 저장되어 있는 경우 선형 탐색법이 이진 탐색법보다 빠를 수 있다.

## 2. 이진 탐색법(Binary Search)

- 범위를 절반씩 추려가면서 찾는다.
- 이진 탐색법의 대상은 미리 오름차순이나 내림차순으로 정렬되어 있는 데이터이다.
- 선형 탐색법과 비교했을 때 평균적으로 이진 탐색법의 탐색 속도가 더 빠르다. (예를 들어 데이터가 많고 원하는 데이터가 배열의 끝부분의 저장되어 있는 경우)

### 2.1 이진 탐색법의 알고리즘 구성

1. 가운데 요소를 선택하는 처리
    - 두 숫자의 가운데는 바로 평균
    - 가운데를 계산하기 위해 필요한 변수는 3개

        1) head: 맨 앞 요소의 첨자를 보관하는 정수형 변수

        2) tail: 맨 끝의 첨자를 보관하는 정수형 변수

        3) center: (head+tail) / 2를 계산하게 되면 가운데 요소의 첨자를 알 수 있는데, 이를 저장할 변수

    💡 **만약 요소가 짝수일 때는?**

    요소가 짝수인 경우에는 center에 해당되는 요소가 2개다. 예를 들어 head가 0이고, tail은 5라고 했을 때 center는 2.5가 된다. 이때 2.5라는 요소는 존재하지 않기 때문에 반올림, 올림, 내림 세 가지 패턴으로 해결을 하여 진행을 하면 된다.

2. 가운데 데이터와 원하는 데이터를 비교하는 처리
    - 가운데 데이터가 원하는 데이터인 경우
        - 즉시 탐색이 종료된다.
    - 가운데 데이터가 원하는 데이터가 아닌 경우
        - 원하는 데이터를 찾지 못하였기 때문에 다음 탐색 범위를 절반으로 좁히는 처리로 이동한다.
3. 탐색 범위를 절반으로 좁히는 처리

---

## 💡 Big O 표기법

![bigO](https://user-images.githubusercontent.com/65386533/123521957-f83c5580-d6f4-11eb-9dfd-9aab02f71697.png)

- 빅오(Big-O)는 시공간 복잡도를 수학적으로 표시하는 대표적인 방법을 말한다 단, 코드의 실제 러닝 타임을 표시하는 것이 아니며, 인풋 데이터 증가율에 따른 알고리즘의 성능을 (논리적으로) 예측하기 위해 사용한다.
- 선형 탐색법: `O(n)`에 해당

    입력 데이터의 크기에 비례해 처리 시간이 증가하는 알고리즘이다. 예를 들어 데이터가 10배가 되면, 처리 시간도 10배가 된다.

- 이진 탐색법: `O(logN)`에 해당

    입력 데이터의 크기가 커질 수록 처리 시간이 로그(log: 지수 함수의 역함수) 만큼 짧아지는 알고리즘이다. 예를 들어 데이터가 10배가 되면, 처리 시간은 2배가 된다.

---

- 참고

    <처음 만나는 알고리즘> 이토 시즈카 저.

    [https://velog.io/@raram2/big-o-notation-and-time-complexity](https://velog.io/@raram2/big-o-notation-and-time-complexity)
