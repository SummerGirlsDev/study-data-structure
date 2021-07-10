// 에라토스테네스의 체로 소수를 구해, 임의의 소수를 선정해 곱한 값을 반환하는 함수
// 매번 에라토스테네스의 체로 소수를 구하는 것은 낭비 => 한번만 구하고
// 렉시컬 환경에 소수 목록이 있고 이를 가져다 쓰기

function Primes(n) {
  // 에라토스 테네스의 체로 소수 구하기
  let p = new Array(n + 1).fill(true);
  p[0] = false;
  p[1] = false;

  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (p[i]) {
      primes.push(i);

      // 배수들 전부 false
      let nextNum = i * i;
      while (nextNum <= n) {
        p[nextNum] = false;
        nextNum += i;
      }
    }
  }

  p = null; // 필요 없어진 배열 메모리 해제

  return function (m) {
    let product = 1;
    let products = [];
    for (let i = 0; i < m; i++) {
      // 랜덤 소수 고르기
      product *= primes[Math.floor(Math.random() * primes.length)];
      products.push(product);
    }
    return products;
  };
}

let primeProduct = Primes(10);
console.log(primeProduct(2));
