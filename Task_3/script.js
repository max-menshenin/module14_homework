/* Напишите функцию, которая создает пустой объект, но без прототипа. */

function createObj() {
	return Object.create(null);
}
sampleObj = createObj();

console.log(Object.getPrototypeOf(sampleObj));