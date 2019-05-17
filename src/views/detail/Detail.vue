<template>
  <div class="app">
    <!--基本信息-->
    <div class="basic-info-wrapper">
      <h1 class="title">- 关 于 我 们 -</h1>
      <el-card class="basic-info">
        <el-form label-position="right"
                 label-width="10vw">
          <!--        <el-form-item>-->
          <!--          上海昱辰网络科技有限公司，致力于软件开发运营及推广。-->
          <!--        </el-form-item>-->
          <el-form-item label="主营范围：">
            网络，信息，电子科技领域内的技术开发，技术咨询，技术服务，计算机系统集成，
            软件开发，各类广告的设计，制作，代理，发布，电脑图文设计制作，
            文化艺术交流活动策划，市场营销策划，企业管理咨询，
            计算机、软件、电子产品、电子元器件、通讯产品、智能设备的销售。
          </el-form-item>
          <el-form-item label="企业文化：">
            以人为本、开拓创新
          </el-form-item>
          <el-form-item label="经营理念：">
            合作、共赢、整合、利他、互助、抱团、联盟
          </el-form-item>
          <el-form-item label="竞争理念：">
            只有合作伙伴，没有竞争对手
          </el-form-item>
          <el-form-item label="团队理念：">
            将公司打造成军队般的执行力，学校般的学习力，家庭般的幸福工作环境
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <!--主要领导-->
    <div class="leadership-wrapper">
      <h1 class="title">- 主 要 领 导 -</h1>
      <el-card class="leadership">
        <el-form label-position="right"
                 label-width="7vw">
          <el-form-item label="法人：">
            邵昱溱
          </el-form-item>
          <el-form-item label="总经理：">
            邵昱溱
          </el-form-item>
          <el-form-item label="监事：">
            邵星澈
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <!--联系方式-->
    <div class="contact-wrapper">
      <h1 class="title">- 联 系 我 们 -</h1>
      <el-card class="contact">
        <el-form label-position="right"
                 label-width="6vw">
          <el-form-item label="联系人：">
            邵昱溱
          </el-form-item>
          <el-form-item label="电话：">
            1234567890123
          </el-form-item>
          <el-form-item label="地址：">
            上海浦东新区扬新路24号
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Detail"
  };
</script>

<style scoped>
  .app {
    background-color: #282c34;
    height: 80vh;
  }

  .el-card {
    width: 50vw;
    margin: 5vh auto;
  }

  .basic-info {
    width: 42vw;
  }

  .leadership-wrapper {
    float: left;
    margin-left: 23vw;
  }

  .leadership {
    width: 20vw;
  }

  .contact-wrapper {
    float: right;
    margin-right: 22vw;
  }

  .contact {
    width: 24vw;
  }
</style>
