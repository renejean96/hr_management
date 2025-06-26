<template>
  <a-layout-header class="main-header">
    <div class="main-header-inner">
      <a-input-search placeholder="Search" class="search-bar" />
      <a-dropdown placement="bottomRight" trigger="['click']">
        <div class="header-profile" style="cursor:pointer;">
          <a-avatar class="header-avatar">JD</a-avatar>
          <a-typography-text class="header-username">{{ username }}</a-typography-text>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item key="profile">Profile</a-menu-item>
            <a-menu-item key="logout" @click="logout">Logout</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    username: {
      type: String,
      default: 'Jane Doe'
    }
  },
  methods: {
    logout() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.main-header {
  background: #fff;
  height: 56px;
  padding: 0;
  box-shadow: none;
  border-bottom: 1px solid #E5EAF2;
  display: flex;
  align-items: center;
}
.main-header-inner {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
}
.search-bar {
  width: 320px;
  background: #F7F9FB;
  border-radius: 8px;
  border: none;
}
.header-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header-avatar {
  background: #1D3557 !important;
  font-size: 16px;
  width: 32px !important;
  height: 32px !important;
}
.header-username {
  color: #1D3557;
  font-weight: 500;
  font-size: 15px;
}
</style> 