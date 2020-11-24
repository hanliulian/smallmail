import axios from 'axios'

// export function request(config, success, failure) {
//     //1、创建axios的实例
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     //2、发送真正的网络请求
//     instance(config).then((res) => {
//         success(res)
//     }).catch((res) => {
//         failure(res)
//     }); 
//     instance(config.baseConfig).then((res) => {
//         config.success(res)
//     }).catch((res) => {
//         config.failure(res)
//     }); 
// }

export function request(config){
    const instance = axios.create({
        baseURL:'http://152.136.185.210:8000/api/w6',
        timeout:5000
    })
    instance.interceptors.request.use(config=>{
        //console.log(config)
        return config
    },err=>{
        //console.log(err)
    })
    //instance.interceptors.response.use()
    return instance(config)
}