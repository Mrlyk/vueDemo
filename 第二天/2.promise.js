function buy(callback) {
    setTimeout(() => {
        let a = 'cai1';
        callback(a);
    }, 2000)
};
// 回调函数 是将后续要处理的逻辑传入到当前要做的事，事情做好后调用此函数
// 这个函数就是回调函数
// 如下将cook这个函数作为回调函数传入buy，cook就是buy的回调函数
// 程序会暂时不动回调函数而继续往下走并promise 2秒后执行这个回调函数
// 继续往下走然后输出了-----，当距执行完主函数2000毫秒这个时间后再执行这个回调函数

buy(function cook(val) {
    console.log(val);
});
console.log('------------');
//promise 就是来解决回调问题的，不许要向上面写的这么复杂
//promise 有三个状态：成功  失败  等待pending
//  Promise 是es6中自带的一个新特性，在es6中是一个构造函数
//resolve,reject是promise自带的两个状态，开始函数是在pending状态
//resolve代表转向成功态，reject代表转向失败态,他们两个都是函数
//promise的实例就是一个then方法，then方法有两个参数就是resolve和reject
let p = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let b = 'cai2';
        reject(b);
    }, 1000)
});
p.then((data)=>{console.log(data)},(err)=>{console.log('err')});

//只有Promise方法才有then，如果不先创建Promise实例而直接去用会报错
function buyPack() {
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve('>0.5')
            }else {
                reject('<0.5')
            }
        },Math.random()*1000)
    }))
}

buyPack().then(
    function (data) {
        console.log(data);
},
    function (data) {
        console.log(data);
})