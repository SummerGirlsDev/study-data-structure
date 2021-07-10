// 소스를 구하는 알고리즘
// 정수 n을 지정하고 2 이상 n이하 정수의 목록을 만든다
// 가장 작은 수인 2는 소수다
// 2의 배수들을 모두 목록에서 지운다
// 남은 가장 작은 수는 3이다
// 3의 배수들을 모두 목록에서 지운다
// 반복 -> 목록에는 소수만 남는다

// 쌍둥이 소수란?
// 두 수의 차가 2인 소수 쌍을 말한다 3과 5,11과 13이다

let n = 100;

function 에라토스테네스(n) {
	// 목록을 true로 채운다
	const isPrime = new Array(n + 1).fill(true);
	// 0과 1은 소수가 아니다
	isPrime[0] = false;
	isPrime[1] = false;

	// 소수는 루트 n 까지만 구하면 충분하다
	let max = Math.floor(Math.sqrt(n));
	let x = 2;

	while (x <= max) {
		for (let i = 2 * x; i <= n; i += x) {
			isPrime[i] = false; // x의 배수는 항상 합성수
		}
		while (!isPrime[++x]); // 다음 소수 찾기
	}

	// 쌍둥이 소수
	for (let i = 2; i < n - 2; i++) {
		if (isPrime[i] && isPrime[i + 2]) console.log('쌍둥이 ', i, i + 2);
	}

	return isPrime;
}
const res = 에라토스테네스(10);
console.log(res);
