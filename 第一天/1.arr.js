let arr=[1,2,3,4,5];


//编程式
for(let i=0;i<arr.length;i++){
    console.log((arr[i]));
}
console.log("-------");

//1)forEach,声明式，不关心如何实现,不支持return,item:每一项
arr.forEach(function (item,index) {
    console.log(item)

});
console.log("-------");
//forEach,for in,for,(for of es6语法）的区别

//key会变成字符串类型，数组的私有属性也会打印出来
for(let key in arr){
    console.log(key)
}
console.log("-------");

//es6语法，支持return，并且是值of数组（不能遍历对象）
for(let val of arr){
    console.log(val);
}
console.log("-------");

//2）filter 不会操作原数组，返回一个新的数组，回调函数的返回结果
//回调函数返回true，表示这一项放到新数组中
//删除某些元素时使用
let newArr=arr.filter(function (item) {
    return item>2&&item<5;
});
console.log(newArr);
console.log("-------filter");

//3)map 映射,将原有的数组映射成一个新数组,不操作原数组,回调函数返回结果
//回调函数返回什么，这一项就是什么
//更新某些元素时使用
let arr1=arr.map(function (item) {
    //反引号``，tab上面的，是es6中的模版字符串,如果用es5的写法就要'<li>'+item+'</li>'，很麻烦
    //在模版字符串中,遇到变量用${}取值
    return `<li>${item}</li>`
});
console.log(arr1.join(''));
console.log("-------map");


//includes 数组中包含就返回true，不包含就返回false，返回布尔值
console.log(arr.includes(5));
console.log("-------includes");

//5)find 返回找到的那一项,回调函数中，返回处表示找到了，找到第一个就停止迭代
//如果找不到返回的是undefined
let result=arr.find(function (item,index) {
    return item.toString().indexOf(55)>-1;
})
console.log(result);
console.log("-------find");

//6）some 迭代找到true后停止,返回true,找不到返回false
let result1=arr.some(function (item,index) {
    return item.toString().indexOf(55)>-1;
})
console.log(result1);
console.log("-------some");
//7）every 找到false后停止，返回false

//8）reduce 收敛 返回的是叠加后的结果(变为一个数) 原数组不变，回调函数四个参数，返回的结果
//第一次prev代表的是数组的第一项，next是数组的第二项
//第二次prev是undefined，next是数组的第三项  ,（如果第一次没有返回值的话）
//reduce还有第二个参数initialValue，用来设置初始值，如果传入的第一个prev对象不是需要的值的话可以设置初始值
arr.reduce(function (prev,next,item,index) {
    console.log(prev,next);
    return next;   //本次的返回值会作为下次的prev
})

//reduce用来拼接数组
let flat=[[2,3],[4,5]] .reduce(function (prev,next) {
    return prev.concat(next);

});
console.log(flat);

