<!-- 登录页面 -->
<template>
  <div>
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/font_2084201_rgrc9ljxqr.css"
    />
    <div class="off">
      <section class="loginContainer">
        <div class="loginInner">
          <div class="login_header">
            <h2 class="login_logo">美团外卖</h2>
            <div class="login_header_title">
              <a
                href="javascript:;"
                @click="login = false"
                :class="!login ? 'on' : ''"
                >短信登录</a
              >
              <a
                href="javascript:;"
                @click="login = true"
                :class="!login ? '' : 'on'"
                >密码登录</a
              >
            </div>
          </div>
          <div class="login_content">
            <form>
              <div :class="!login ? 'on' : ''">
                <section class="login_message">
                  <input
                    type="tel"
                    maxlength="11"
                    placeholder="手机号"
                    v-model="cell"
                  />
                  <button
                    :disabled="(!isNumber && times == 0) || times > 0"
                    class="get_verification"
                    :class="{ iscolor: isNumber && times == 0 }"
                    @click="gettime"
                  >
                    <!-- 当 时间大于0时执行 获取验证码不显示          当时间小于0时 显示获取验证码 -->
                    {{ times > 0 ? `${times}s验证码已发送` : "获取验证码" }}
                  </button>
                </section>
                <section class="login_verification">
                  <input
                    type="tel"
                    maxlength="8"
                    placeholder="验证码"
                    v-model="code"
                  />
                </section>
                <section class="login_hint">
                  温馨提示：未注册美团外卖帐号的手机号，登录时将自动注册，且代表已同意
                  <a href="javascript:;">《用户服务协议》</a>
                </section>
              </div>
              <div :class="!login ? '' : 'on'">
                <section>
                  <section class="login_message">
                    <input
                      type="tel"
                      maxlength="11"
                      placeholder="手机/邮箱/用户名"
                      v-model="userNumber"
                    />
                  </section>
                  <section class="login_verification">
                    <input
                      :type="typeVal ? 'text' : 'password'"
                      maxlength="8"
                      place
                      holder="密码"
                      placeholder="密码"
                      v-model="userpassword"
                    />
                    <div
                      class="switch_button"
                      @click="typeVal = !typeVal"
                      :class="typeVal ? 'on' : 'off'"
                    >
                      <div class="switch_circle"></div>
                      <span class="switch_text">ABC</span>
                    </div>
                  </section>
                  <section class="login_message">
                    <input
                      type="text"
                      maxlength="11"
                      placeholder="验证码"
                      v-model="imgPassword"
                    />
                    <img
                      class="get_verification"
                      :src="imgSrc"
                      alt="captcha"
                      @click="ImgSrc"
                    />
                  </section>
                </section>
              </div>
              <button class="login_submit" @click="mylogin">登录</button>
            </form>
            <a href="javascript:;" class="about_us">关于我们</a>
          </div>
          <router-link to="/profile">
            <a href="javascript:" class="go_back">
              <i class="iconfont icon-leftarrow"></i>
            </a>
          </router-link>
        </div>
      </section>
    </div>
    <AlertTip v-if="isAlert" :Alerttitle="Alerttitle" @overAlert="overAlert" />
  </div>
</template>

<script>
import AlertTip from "@/components/AlertTip/AlertTip";
import { reqSendCode, reqPwdLogin } from "../../api/index";
export default {
  data() {
    return {
      login: false, //登录选择   短信登陆||密码登录
      cell: "", //双向绑定手机号
      times: 0, //验证码初始时间
      typeVal: false, //input输入框 type 的属性值
      isAlert: false, //弹出框
      Alerttitle: "我是弹出框", //弹出框文本
      code: "", //验证码
      userNumber: "", //用户账号
      userpassword: "",
      imgSrc: "", //图片验证码的路径
      imgPassword: "", //验证码
    };
  },
  components: {
    AlertTip,
  },
  computed: {
    // 手机号 表单验证
    isNumber() {
      return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.cell);
    },
  },
  mounted() {
    //生命周期  在页面初始时 给图片验证码 更改路径
    this.imgSrc = `http://localhost:4000/captcha`;
  },

  methods: {
    // 当点击图片验证码时  更改图片验证码的路径
    ImgSrc() {
      this.imgSrc = `http://localhost:4000/captcha?Time=${new Date()}`;
      console.log(11);
    },
    async gettime() {
      //发送手机验证码
      let rules = await reqSendCode(this.cell);
      if (rules.code == 1) {
        this.startAlert(rules.msg);
        return;
      }
      //验证码触发过等待时间
      this.times = 30;
      //定时器  每一秒减一  当时间为 0时 定时器结束
      let timer = setInterval(() => {
        this.times--;
        if (this.times == 0) {
          clearInterval(timer);
        }
      }, 1000);
    },

    //
    async mylogin() {
      // 结构赋值   this
      let rules;
      let {
        login,
        isNumber,
        startAlert,
        code,
        userNumber,
        userpassword,
        imgPassword,
      } = this;
      // 判断是   短信登录  ||  密码登录
      if (!login) {
        // 手机号错误时
        if (!isNumber) {
          startAlert("手机号码错误！！！");
          return;
          // 验证码错误时
        } else if (!code) {
          startAlert("手机验证码错误！！！");
          return;
        }
        // 密码登录时判断
      } else if (!userNumber) {
        startAlert("登录账号错误！！！");
        return;
      } else if (!userpassword) {
        startAlert("登录密码错误！！！");
        return;
      }
      rules = await reqPwdLogin({
        name: userNumber,
        paw: userpassword,
        captcha: imgPassword,
      });
      if (rules.code == 0) {
        this.$router.replace("/profile");
        this.$store.dispatch("setDemoValue", rules);
        console.log(1);
      } else {
        startAlert(rules.msg);
      }
    },
    // 点击显示 弹出框
    startAlert(newAlerttitle) {
      this.isAlert = true;
      this.Alerttitle = newAlerttitle;
    },
    overAlert() {
      this.isAlert = false;
    },
  },
};
</script>

<style lang='stylus' type='text/stylus' scoped>
@import '../../assets/stylus/mixins.styl';

.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_logo {
        font-size: 40px;
        font-weight: bold;
        color: $dColor;
        text-align: center;
      }

      .login_header_title {
        padding-top: 40px;
        text-align: center;

        >a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;

          &:first-child {
            margin-right: 40px;
          }

          &.on {
            color: $dColor;
            font-weight: 700;
            border-bottom: 2px solid $dColor;
          }
        }
      }
    }

    .login_content {
      >form {
        >div {
          display: none;

          &.on {
            display: block;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 10px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;

            &:focus {
              border: 1px solid $dColor;
            }
          }

          .login_message {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .get_verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;

              &.iscolor {
                color: #333;
              }
            }
          }

          .login_verification {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .switch_button {
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              transition: background-color 0.3s, border-color 0.3s;
              padding: 0 6px;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #fff;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);

              &.off {
                background: #fff;

                .switch_text {
                  float: right;
                  color: #ddd;
                }
              }

              &.on {
                background: $dColor;

                .switch_circle {
                  transform: translateX(27px);
                }
              }

              >.switch_circle {
                // transform translateX(27px)
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;
              }
            }
          }

          .login_hint {
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;

            >a {
              color: $dColor;
            }
          }
        }

        .login_submit {
          display: block;
          width: 100%;
          height: 38px;
          margin-top: 30px;
          border-radius: 4px;
          background: $dColor;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 38px;
          border: 0;
        }
      }

      .about_us {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }

    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;

      >.iconfont {
        font-size: 20px;
        color: #999;
      }
    }
  }
}
</style>