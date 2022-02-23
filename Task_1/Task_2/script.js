/*Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

const obj = {a: 'hat'};
let str = 'a';
const hasFunc = (str, obj) => obj.hasOwnProperty(str);
console.log(obj.hasOwnProperty(str));
   