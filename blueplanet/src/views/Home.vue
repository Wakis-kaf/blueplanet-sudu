<template>
    <div id="home">
      <div class="home-in">
        <!--在主页中引入头部导航栏-->
        <nav-bar></nav-bar>
        <!-- 在首页中引入棋盘  -->
        <chess-board></chess-board>
        <div class="info">
          <p>这是备案信息</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
  #home{
    width: 100%;
    height: 100%;
    overflow: auto;
    .home-in{
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      top: 0;
      left: 0;
      .info{
        width: 100%;
        height: 50px;
        max-height: 6%;
        background-color: black;
        position: relative;
        bottom: 0;
        text-align: center;
        p{
          color: #fffffc;
        }
      }
    }
  }
</style>
