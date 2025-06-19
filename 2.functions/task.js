function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
		if (arr[i] < min) min = arr[i];
		sum += arr[i];
	}

	let avg = sum / arr.length;
	avg = Number(avg.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}
getArrayParams();


function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
summElementsWorker();

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};
	let min = Infinity;
	let max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
		if (arr[i] < min) min = arr[i];
	}

	let difference = max - min;

	return difference;
}
differenceMaxMinWorker()

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	};

	return sumEvenElement - sumOddElement;
}
differenceEvenOddWorker();

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	if (countEvenElement === 0) {
		return 0;
	}

	let avg = sumEvenElement / countEvenElement;

	return avg;
}
averageEvenElementsWorker();

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		};
	};
	return maxWorkerResult;
}