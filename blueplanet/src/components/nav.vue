
<!--  完成首页导航栏      -->
<template>
  <div id="nav-box">
    <div class="nav-container">
      <div class="nav">
        <div class="logo">
          <img src="" alt=""/>
        </div>
        <h1>蓝星数独</h1>
        <div class="item" @click="showNavBar(),triggerNav_Anime()" >
          <div class="spanlist">
            <span ref="one"></span>
            <span ref="two"></span>
            <span ref="three"></span>
          </div>
        </div>
        <transition name="navbar">
          <ul class="navbar" v-show="isShowNavBar">
            <li><a href="javascript:;">个人中心</a></li>
            <li><a href="javascript:;">注册</a></li>
            <li><a href="javascript:;">登录</a></li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  mounted () {
  },
  data () {
    return {
      isShowNavBar: false,
      isShowItem: false
    }
  },
  methods: {
    triggerNav_Anime () {
      if (this.isShowItem) {
        // 显示为x型
        // this.$refs.one.style.borderColor = '#333366'
        this.$refs.one.style.borderColor = '#663366'

        this.$refs.one.style.transform = 'translateY(100%) rotateZ(45deg)'
        this.$refs.one.style.width = '80%'
        this.$refs.one.style.transformOrigin = 'center bottom '

        this.$refs.two.style.borderColor = 'transparent'

        this.$refs.three.style.borderColor = '#663366'
        this.$refs.three.style.transformOrigin = 'center bottom'
        this.$refs.three.style.width = '80%'
        this.$refs.three.style.transform = ' translateY(-100%) rotateZ(-45deg)'
      } else {
        // 显示为=型
        this.$refs.one.style.width = '60%'
        this.$refs.one.style.borderColor = '#333366'
        this.$refs.one.style.transform = ' translateY(0%) rotateZ(0deg)'

        this.$refs.two.style.borderColor = '#333366'

        this.$refs.three.style.borderColor = '#333366'
        this.$refs.three.style.width = '60%'
        this.$refs.three.style.transform = ' translateY(0%) rotateZ(0deg)'
      }
    },
    showNavBar () {
      this.isShowNavBar = !this.isShowNavBar
      this.isShowItem = !this.isShowItem
    }
  }
}
</script>

<style scoped lang="scss">
#nav-box{
  width: 100%;
  height: auto;
  .nav-container {
    width: 100%;
    height: auto;
    margin: 0 auto;
    .nav {
      width: 100%;
      height: auto;
      overflow: hidden;
      background-color: #dddddd;
      position: relative;
      left: 0;
      top: 0;
      .logo{
        width: 40px;
        height: 40px;
        background-color:red;
        float: left;
        margin-left: 5%;
        margin-top: 5px;
        margin-bottom: 5px;
      }
      h1{
        width: auto;
        height: 50px;
        text-align: center;
        margin:0 auto;
        position: absolute;
        left: 50%;
        line-height: 40px;
        font-size: 20px;
        transform: translateX(-50%);
      }
      /* 响应式编写pc端代码 */
      @media screen and (min-width: 1000px){
        .navbar{
          display: block !important;
          width: auto;
          height: 100%;
          float: right;
          /*background-color: yellow;*/
          margin-right: 10%;
          li{
            display: inline-block;
            line-height: 50px;
            text-align: center;
            margin-right: 20px;
            a{
              display: inline-block;
              width: 100%;
              height: 100%;
              color: #333366;
              font-weight: bold;
              box-sizing: border-box;
              border-bottom: 3px solid transparent;
              &:hover{
                color: #339966;
                border-color: #339966;
              }
            }
          }
        }
      }
      /* 响应式编写移动端代码 */
      @media screen and (max-width: 1000px){
        .item{
          width: 35px;
          height: 37px;
          margin-right: 5%;
          /*background-color: red;*/
          float: right;
          margin-top: 5px;
          border: 1px solid #333366;
          box-sizing: border-box;
          padding-bottom: 5px;
          .spanlist{
            width: 100%;
            height: 100%;
            span{
              display: block;
              width: 60%;
              height: 30%;
              border-bottom: 3px solid #333366;
              box-sizing: border-box;
              margin: 0 auto;
              border-radius: 1px;
              transition: all 0.5s;
            }
          }
        }
        .navbar{
          width: 100%;
          height:auto;
          float: right;
          background-color: gray;
          border-bottom: 1px #ffcc33;
          li{
            display: block;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: #333333;
            box-sizing: border-box;
            a{
              display:inline-block;
              width: 100%;
              height: 100%;
              color: #dddddd;
              box-sizing: border-box;
              border-bottom: 3px solid transparent;
              &:hover{
                color: #339966;
                border-color: #339966;
              }
            }
          }
        }
        /*设置navbar相关动画*/
        .navbar-enter{
          height: 0px;
        }
        .navbar-enter-to{
          height: 150px;
        }
        .navbar-enter-active{
          transition: all 0.5s;
        }
        .navbar-leave{
          height: 150px;
        }
        .navbar-leave-to{
          height: 0px;
        }
        .navbar-leave-active{
          transition: all 0.5s;
        }
        /*设置item相关动画*/
        .item-enter{
          span{
            &:nth-child(1){
              transform: rotateZ(45deg) translateY(25%) translateX(50%);
            }
            &:nth-child(2){
              display: none;
            }
            &:nth-child(3){
              transform: rotateZ(-45deg) translateY(-25%);
            }
          }
        }
        .item-enter-to{
          span{
            &:nth-child(1){
              transform: rotateZ(0) translateY(0) translateX(0);
            }
            &:nth-child(2){
              display: block;
            }
            &:nth-child(3){
              transform: rotateZ(0) translateY(0);
            }
          }
        }
        .item-enter-active{
          transition: all 2s;
        }
        .item-leave{
          span{
            &:nth-child(1){
              transform: rotateZ(0) translateY(0) translateX(0);
            }
            &:nth-child(2){
              display: block;
            }
            &:nth-child(3){
              transform: rotateZ(0) translateY(0);
            }
          }
        }
        .item-leave-to{
          span{
            &:nth-child(1){
              transform: rotateZ(45deg) translateY(25%) translateX(50%);
            }
            &:nth-child(2){
              display: none;
            }
            &:nth-child(3){
              transform: rotateZ(-45deg) translateY(-25%);
            }
          }

        }
        .item-leave-active{
          transition: all 2s;
        }
      }
    }
  }
}
</style>
