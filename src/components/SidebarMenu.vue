<template>
  <a-layout-sider width="80" class="sidebar" :style="{ background: '#1D3557' }">
    <div class="sidebar-logo">
      <img src="@/assets/dash_board_logo_svg.svg" alt="Logo" class="sidebar-logo-img" />
    </div>
    <a-menu mode="inline" @click="onMenuClick" :selectedKeys="[selectedMenu]" class="sidebar-menu">
      <a-menu-item key="home" :class="{'sidebar-menu-item': true, 'active': selectedMenu === 'home'}">
        <img src="@/assets/home_svg.svg" alt="Home" class="sidebar-icon" />
      </a-menu-item>
      <a-menu-item key="jobs" :class="{'sidebar-menu-item': true, 'active': selectedMenu === 'jobs'}">
        <img src="@/assets/jobs_svg.svg" alt="Jobs" class="sidebar-icon" />
      </a-menu-item>
      <a-menu-item key="candidates" :class="{'sidebar-menu-item': true, 'active': selectedMenu === 'candidates'}">
        <img src="@/assets/candidate_svg.svg" alt="Candidates" class="sidebar-icon" />
      </a-menu-item>
      <a-menu-item key="reports" :class="{'sidebar-menu-item': true, 'active': selectedMenu === 'reports'}">
        <img src="@/assets/reports_svg.svg" alt="Reports" class="sidebar-icon" />
      </a-menu-item>
      <a-menu-item key="calendar" :class="{'sidebar-menu-item': true, 'active': selectedMenu === 'calendar'}">
        <img src="@/assets/calendar_svg.svg" alt="Calendar" class="sidebar-icon" />
      </a-menu-item>
      <slot />
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'SidebarMenu',
  props: {
    selectedMenu: {
      type: String,
      default: 'home'
    }
  },
  methods: {
    onMenuClick({ key }) {
      if (key === 'home') this.$router.push('/home');
      else if (key === 'candidates') this.$router.push('/candidate');
      else this.$router.push('/home');
      this.$emit('menuClick', key);
    }
  }
}
</script>

<style scoped>
.sidebar {
  background: #1D3557 !important;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
}
.sidebar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-bottom: 32px;
}
.sidebar-logo-img {
  height: 36px;
  width: 36px;
  object-fit: contain;
}
.sidebar-menu {
  background: transparent !important;
  color: #fff !important;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sidebar-menu-item {
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 64px !important;
  margin-bottom: 20px !important;
  background: transparent !important;
  border: none !important;
  position: relative;
  border-left: 6px solid transparent;
  transition: border-color 0.2s;
}
.sidebar-menu-item.active {
  border-left: 6px solid #FFA726 !important;
  background: transparent !important;
}
.sidebar-menu-item .ant-menu-title-content {
  display: none;
}
.sidebar-icon {
  width: 36px;
  height: 36px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}
.ant-menu-item-selected .sidebar-icon {
  color: #FCA311 !important;
}
.ant-menu-item-selected {
  background: transparent !important;
  border-right: none !important;
}
.sidebar-menu-item .ant-menu-item {
  height: 100px !important;
}
</style> 