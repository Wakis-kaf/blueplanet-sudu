<!-- 完成首页棋盘   -->
<template>
    <div id="chessboard">
      <div class="chess-in">
        <div class="chess-tool">
          <div class="choose-difficulty">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                选择难度<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>入门</el-dropdown-item>
                <el-dropdown-item>简单</el-dropdown-item>
                <el-dropdown-item>中等</el-dropdown-item>
                <el-dropdown-item >高级</el-dropdown-item>
                <el-dropdown-item >大师</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="chess-contain">
          <ul>
            <li v-for="(index) in 81" :key="index" :class="[{'li-border-right':index%9===3||index%9===6},{'li-border-bottom':index>=19&&index<=27||index>=46&&index<=54},{'isSelected':index===isSelected}]"  @click="selectli(index)">
              <span>{{index%10}}</span>
            </li>
          </ul>
        </div>
        <div class="user-tool">
          <ul>
            <li>
              <i class="iconfont icon-chexiao
"></i>
              <span>撤销</span>
            </li>
            <li>
              <i class="el-icon-delete"></i>
              <span>删除</span>
            </li>
            <li>
              <i class="iconfont icon-tishi"></i>
              <span>提示</span>
            </li>
          </ul>
        </div>
        <div class="chess-numselect">
          <ul>
            <li  v-for="(index) in 9 " :key="index" @click="selectNum"> {{index}}</li>
            <li class="mark">
              <i class="iconfont icon-bi mark-bi"></i>
              <span>标记</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'chessBoard',
  data () {
    return {
      isSelected: -1
    }
  },
  methods: {
    selectli (index) {
      this.isSelected = index
    },
    selectNum (e) {
      // console.log(e.target)
    }
  }
}
</script>

<style scoped lang="scss">
  #chessboard{
    width: 100%;
    min-height:calc(100% - 50px) ;
    max-height: 100%;
    overflow: hidden;
    background-color: #CCCCCC;
    position: relative;
    left: 0;
    top: 0;
    .chess-in{
      width: 80%;
      height: auto;
      margin: 0 auto;
      position: absolute;
      z-index: 998;
      border: 2px solid #333366;
      border-radius: 10px;
      padding: 5px;
      padding-top: 0;
      top: 46%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      .chess-tool{
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        padding-top:5px;
        .choose-difficulty{
          width: 100%;
          padding: 5px 10px;
          border-radius: 5px;
          box-sizing: border-box;
          background-color: rgba(0,0,0,0.3);
          .el-dropdown-link {
            cursor: pointer;
            color: #fffffc;
            font-size: 16px;
            letter-spacing: 2px;
          }
          .el-icon-arrow-down {
            font-size: 20px;
            color:black;
          }
        }
      }
      .chess-contain{
        max-width: 100%;
        width: 310px;
        height: 310px;
        margin: 0 auto;
        background-color: #FFFFFF;
        ul{
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          word-break: break-all;
          border: 1px solid;
          font-size: 0;
          .li-border-right{
            border-right:4px solid black;
          }
          .li-border-bottom{
            border-bottom:4px solid black;
          }
          .isSelected{
            border: 1px solid red;
            border-radius: 6px;
            background-color: black;
            color: #fffffc;
          }
          li{
            width: 100/9*1%;
            height: 100/9*1%;
            display: inline-block;
            background-color: #FFFFFF;
            border: 1px solid #333366;
            box-sizing: border-box;
            position: relative;
            user-select: none;
            left: 0;
            top: 0;
            span{
              width: 100%;
              display: inline-block;
              font-size: 25px;
              font-weight: bold;
              text-align: center;
              position: absolute;
              user-select: none;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
      .user-tool{
        max-width: 100%;
        width: 310px;
        height: 30px;
        /*background-color: skyblue;*/
        border: 1px dashed;
        margin: 0 auto;
        margin-top: 5px;
        ul{
          width: 100%;
          height: 100%;
          li{
            display: inline-block;
            width: 100/4*1%;
            height: 100%;
            vertical-align: top;
            line-height: 30px;
            text-align: center;
            background-color: #dddddd;
            border-right: 1px solid;
            box-sizing: border-box;
            i{
              font-size: 15px;
              margin-right: 5px;
              color: #d43c33;
            }
            span{
              font-size: 16px;
              color: #333366;
              font-weight: bold;
              font-family: 'Arial';
            }
            &:nth-child(1){
              i{
                color: #003366;

              }
            }
            &:nth-child(3){
              i{
                color: #339966;

              }
            }

          }
        }
      }
      .chess-numselect{
        max-width: 100%;
        width: 310px;
        height: 60px;
        margin:  0 auto;
        ul{
          width: 100%;
          height: 100%;
          margin-top: 5px;
          background-color: rgba(0,0,0,0.1);
          font-size: 0;
          word-break: break-all;
          li{
            display: inline-block;
            font-size: 24px;
            width: 100/5*1%;
            height: 50%;
            box-sizing: border-box;
            border-radius: 6px;
            border: 1px solid ;
            text-align: center;
            line-height: 30px;
            font-weight: bold;
            color: #333366;
          }
          .mark{
            font-size: 14px;
            vertical-align: top;
            .mark-bi{
              margin-right: 2px;
            }
          }
        }
      }
    }
    @media screen and (min-width: 1000px){
      .chess-in{
        width: 60%;
        .chess-contain{
          width: 450px;
          height: 450px;
          margin: 0 auto;
          background-color: purple;
        }
        .chess-numselect{
          width: 450px;
        }
        .user-tool{
          width: 450px;
        }
      }
    }
    @media screen and (max-width: 1000px){
      .chess-in{
        padding-top: 0%;
        width: 90%;
      }
    }

  }

</style>
