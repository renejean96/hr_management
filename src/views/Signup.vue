// Ready for Ant Design Vue redesign

<template>
  <div class="signup-bg">
    <div class="signup-bg-geo"></div>
    <a-row justify="center" align="middle" style="min-height: 100vh;">
      <a-col>
        <a-card class="signup-card" :bordered="false">
          <div class="signup-logo-center">
            <img src="@/assets/logo.png" alt="Logo" class="signup-logo-img" />
          </div>
          <a-row align="middle" class="signup-content-row">
            <a-col :span="12" class="signup-svg-col">
              <img src="@/assets/sign_up_svg.svg" alt="Sign Up Illustration" class="signup-svg" />
            </a-col>
            <a-col :span="12" class="signup-form-col">
              <div class="signup-tabs-row">
                <span class="signup-tab" @click="$router.push('/login')">Login</span>
                <span class="signup-tab active">Sign Up</span>
              </div>
              <a-form layout="vertical" @submit.prevent="onSignup" class="signup-form-fields">
                <a-form-item label="First Name">
                  <a-input v-model:value="firstName" placeholder="First Name" size="large" class="signup-input" />
                </a-form-item>
                <a-form-item label="Last Name">
                  <a-input v-model:value="lastName" placeholder="Last Name" size="large" class="signup-input" />
                </a-form-item>
                <a-form-item label="Email">
                  <a-input v-model:value="email" placeholder="Email" size="large" class="signup-input" />
                </a-form-item>
                <a-form-item label="Password">
                  <a-input-password v-model:value="password" placeholder="Password" size="large" class="signup-input" />
                </a-form-item>
                <a-form-item label="Re-enter Password">
                  <a-input-password v-model:value="confirmPassword" placeholder="Re-enter Password" size="large" class="signup-input" />
                </a-form-item>
                <div class="signup-btns">
                  <a-button type="primary" block class="signup-btn" size="large" @click="onSignup">Sign Up</a-button>
                  <a-button block size="large" class="google-btn">
                    <img src="@/assets/google_icon.png" alt="Google" class="google-icon" />
                    Sign Up with Google
                  </a-button>
                </div>
              </a-form>
            </a-col>
          </a-row>
        </a-card>
        <div class="signup-footer">
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
  name: 'SignupView',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSignup() {
      // Basic validation example
      if (!this.firstName || !this.lastName || !this.email || !this.password || !this.confirmPassword) {
        this.$message.error('Please fill in all fields.');
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.$message.error('Passwords do not match.');
        return;
      }
      // Add further validation and submission logic here
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
.signup-bg {
  min-height: 100vh;
  background: #F7F9FB;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.signup-bg-geo {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 0;
  background: url('data:image/svg+xml;utf8,<svg width="100%25" height="100%25" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 800,0 400,600" fill="%23E3EAFD" opacity="0.18"/><polygon points="0,600 800,600 400,0" fill="%23E3EAFD" opacity="0.18"/></svg>') no-repeat center center;
  background-size: cover;
}
.signup-card {
  width: 700px;
  min-height: 520px;
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
.signup-logo-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 0;
}
.signup-logo-img {
  height: 38px;
  margin-bottom: 0;
}
.signup-content-row {
  margin-top: 12px;
  min-height: 320px;
  display: flex;
  align-items: center;
}
.signup-svg-col {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #dde2e5;
  height: 100%;
}
.signup-svg {
  width: 180px;
  max-width: 100%;
}
.signup-form-col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 32px;
  height: 100%;
}
.signup-tabs-row {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 18px;
  margin-top: 0;
}
.signup-tab {
  font-size: 28px;
  font-weight: 700;
  color: #A0AEC0;
  cursor: pointer;
  padding-bottom: 2px;
  transition: color 0.2s;
  border-bottom: 2px solid transparent;
  letter-spacing: 0.5px;
}
.signup-tab.active {
  color: #1D3557;
  font-weight: 700;
  border-bottom: 4px solid #FCA311;
}
.signup-form-fields {
  width: 100%;
}
.signup-btns {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
}
.signup-input {
  border-radius: 8px !important;
  border: 1px solid #B6C6E3 !important;
  background: #F7F9FB !important;
}
.signup-btn {
  background: #FCA311 !important;
  border: none !important;
  color: #fff !important;
  font-weight: 600;
  border-radius: 8px;
}
.signup-btn:hover {
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
.signup-footer {
  margin-top: 32px;
  text-align: center;
  color: #A0AEC0;
  font-size: 13px;
  position: relative;
  z-index: 2;
}
@media (max-width: 992px) {
  .signup-card {
    width: 98vw;
    min-width: 320px;
    height: auto;
    padding: 1.5rem 0.5rem;
  }
  .signup-logo-center {
    margin-top: 24px;
  }
  .signup-content-row {
    height: auto;
  }
  .signup-svg-col {
    display: none;
  }
  .signup-form-col {
    padding-left: 0;
  }
}
</style> 