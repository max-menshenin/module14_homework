/* Напишите функцию, которая создает пустой объект, но без прототипа. */
// 
function createObj() {
	return Object.create(null); 
}
// Создаем пустой объект
sampleObj = createObj();

console.log(Object.getPrototypeOf(sampleObj));