//arrow fn箭头函数，不具备this，arguments
//它的this就是上一级的this
//在vue中很多时候不能用箭头函数

//如何更改this指向
//1）call apply bind三个方法
//2) var that = this
//3) =>

function a(b) {
    return b+1;
}
//上面的函数相当于下面的箭头函数，参数只有一个，可以省略小括号
//前面是定义函数名，也可以不定义，后面是要传的参数，无参数也需要一个小括号
let a1 = b => {
    return b+1;
}
//或者不写大括号，这时箭头后的就是返回值，不能写return，有大括号则必须写return
let a2 = b => b+2;

console.log(a2(1));
console.log('-----------');

//正常函数写法
function fn(a) {
    return function fnn(b) {
        return a+b;
    }
}
console.log(fn(1)(2));
//闭包：函数执行的一瞬间可以算闭包，函数执行完了还是会销毁作用域
//闭包是产生不会销毁的作用域(作用：模块化)
//如我在上面的函数上加上let val=function fn(a)
//执行的时候val(),这样函数执行完之后返回值会被赋给val，这样就绝对不会被销毁
//且返回值必须是引用数据类型（如函数）


//转换成箭头函数写法
let fn1 = a=> b=> a+b;  //高阶函数（两层嵌套以上（含两层）的函数）

//稍完整一点的箭头函数
let fn2 = a=>{
    return b=> {
        return a+b;
    }
}

console.log(fn1(3)(4));
console.log(fn2(3)(4));
console.log('---------');

[1,2,3].forEach(item=>console.log(item));