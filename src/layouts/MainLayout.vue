<template>
  <a-layout style="min-height: 100vh;">
    <SidebarMenu :selectedMenu="selectedMenu" @menuClick="$emit('menuClick', $event)" />
    <a-layout>
      <TopBar :username="username" @search="$emit('search', $event)" />
      <a-layout-content class="main-content">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'MainLayout',
  components: { SidebarMenu, TopBar },
  props: {
    selectedMenu: {
      type: String,
      default: 'home'
    },
    username: {
      type: String,
      default: 'Jane Doe'
    }
  }
}
</script>

<style scoped>
.main-content {
  padding: 32px 40px;
  background: #f5f8fd;
  min-height: 100vh;
}
</style> 