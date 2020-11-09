<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from '@/views/home/childComps/HomeSwiper'
import RecommendView from '@/views/home/childComps/RecommendView'
import {getHomeMultidata} from 'network/home'


export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        //result:null,
        banners:[],
        recommends:[],

      }
    },
    created() {
      getHomeMultidata().then(res=>{
        console.log(res)
        //函数调用，压入函数栈（保存函数调用过程中所有变量）
        //函数调用结束->弹出函数栈（释放函数所有变量）
        //如果不加指针，函数执行完，res被释放，请求返回的对象没有指针
        //垃圾回收机制会将这个对象回收
        //盯着的贼跑不了，不盯着贼就跑了
        //this.result = res;
        //console.log(res.data)
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    }
}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>