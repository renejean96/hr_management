// Ready for Ant Design Vue redesign

<template>
  <div class="login-bg">
    <div class="login-bg-geo"></div>
    <a-row justify="center" align="middle" style="min-height: 100vh;">
      <a-col>
        <a-card class="login-card" :bordered="false">
          <div class="login-logo-center">
            <img src="@/assets/logo.png" alt="Logo" class="login-logo-img" />
          </div>
          <a-row align="middle" class="login-content-row">
            <a-col :span="12" class="login-svg-col">
              <img src="@/assets/login_svg.svg" alt="Login Illustration" class="login-svg" />
            </a-col>
            <a-col :span="12" class="login-form-col">
              <div class="login-tabs-row">
                <span class="login-tab active">Login</span>
                <span class="login-tab" @click="$router.push('/signup')">Sign Up</span>
              </div>
              <a-form layout="vertical" @submit.prevent="onLogin" class="login-form-fields">
                <a-form-item label="Username">
                  <a-input v-model:value="username" placeholder="Username" size="large" class="login-input" />
                </a-form-item>
                <a-form-item label="Password">
                  <a-input-password v-model:value="password" placeholder="Password" size="large" class="login-input" />
                </a-form-item>
                <div class="login-controls">
                  <a-checkbox v-model:checked="remember">Remember</a-checkbox>
                  <a-button type="link" style="padding: 0;">Forgot Password?</a-button>
                </div>
                <div class="login-btns">
                  <a-button type="primary" block class="login-btn" size="large" @click="onLogin">Login</a-button>
                  <a-button block size="large" class="google-btn">
                    <img src="@/assets/google_icon.png" alt="Google" class="google-icon" />
                    Login with Google
                  </a-button>
                </div>
              </a-form>
            </a-col>
          </a-row>
        </a-card>
        <div class="login-footer">
          <a-typography-text type="secondary" style="font-size: 12px;">
            Release Notes<br />version 2023.211<br />Copyright © 2023-24 HRM and services
          </a-typography-text>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      remember: false
    }
  },
  methods: {
    onLogin() {
      // Handle login logic here
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
.login-bg {
  min-height: 100vh;
  background: #F7F9FB;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.login-bg-geo {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 0;
  background: url('data:image/svg+xml;utf8,<svg width="100%25" height="100%25" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 800,0 400,600" fill="%23E3EAFD" opacity="0.18"/><polygon points="0,600 800,600 400,0" fill="%23E3EAFD" opacity="0.18"/></svg>') no-repeat center center;
  background-size: cover;
}
.login-card {
  width: 700px;
  min-height: 420px;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  padding: 0 0 0 0;
  background: #fff;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-logo-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 0;
}
.login-logo-img {
  height: 38px;
  margin-bottom: 0;
}
.login-content-row {
  margin-top: 12px;
  min-height: 260px;
  display: flex;
  align-items: center;
}
.login-svg-col {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #dde2e5;
  height: 100%;
}
.login-svg {
  width: 180px;
  max-width: 100%;
}
.login-form-col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 32px;
  height: 100%;
}
.login-tabs-row {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 18px;
  margin-top: 0;
}
.login-tab {
  font-size: 28px;
  font-weight: 700;
  color: #A0AEC0;
  cursor: pointer;
  padding-bottom: 2px;
  transition: color 0.2s;
  border-bottom: 2px solid transparent;
  letter-spacing: 0.5px;
}
.login-tab.active {
  color: #1D3557;
  font-weight: 700;
  border-bottom: 4px solid #FCA311;
}
.login-form-fields {
  width: 100%;
}
.login-btns {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
}
.login-input {
  border-radius: 8px !important;
  border: 1px solid #B6C6E3 !important;
  background: #F7F9FB !important;
}
.login-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.login-btn {
  background: #FCA311 !important;
  border: none !important;
  color: #fff !important;
  font-weight: 600;
  border-radius: 8px;
}
.login-btn:hover {
  background: #e5941a !important;
}
.google-btn {
  background: #3B82F6 !important;
  color: #fff !important;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none !important;
  border-radius: 8px;
  font-weight: 600;
}
.google-btn:hover {
  background: #2563eb !important;
}
.google-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
.login-footer {
  margin-top: 32px;
  text-align: center;
  color: #A0AEC0;
  font-size: 13px;
  position: relative;
  z-index: 2;
}
@media (max-width: 992px) {
  .login-card {
    width: 98vw;
    min-width: 320px;
    height: auto;
    padding: 1.5rem 0.5rem;
  }
  .login-logo-center {
    margin-top: 24px;
  }
  .login-content-row {
    height: auto;
  }
  .login-svg-col {
    display: none;
  }
  .login-form-col {
    padding-left: 0;
  }
}
</style> 