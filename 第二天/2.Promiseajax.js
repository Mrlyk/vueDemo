//封装一个promiseajax
function ajax({url='',type='get', dataType='json'}) {

    return new Promise(((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType = dataType;
        xhr.onload=function () { //xhr.readState=4 xhr.status=200相当于onload成功
            resolve(xhr.response) //成功调用
        };
        xhr.onerror=function(err){ //调用失败的方法
            reject(err)
        }
        xhr.send();

    }))
}

ajax({url:'./2.carts.json'}).then()

// ajax({}).then(()=>{},()=>{})

// $.ajax({
//     url:'',
//     data:{},
//     type:'get',
//     dataType:'json',
//     success:''
// })