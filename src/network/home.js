import {request} from './request';
//在创建网络相关模块时，组件和组件之间通过接口建立联系，降低耦合度
//主页相关的网络请求封装到一个地方，方便管理
export function getHomeMultidata() {
    return request ({
        url:'/home/multidata'
    })
}