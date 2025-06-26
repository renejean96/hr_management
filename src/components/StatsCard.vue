<template>
  <a-card class="stats-card" style="position: relative;">
    <div class="stats-img-container">
      <a-card 
        class="stats-number-card"
        :style="{
          width: '80px', 
          height: '80px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          borderRadius: '30px',
          left: '-20px',
          top: '-20px',
          position: 'absolute',
          //backgroundColor: numberCardColor || '#f0f8ff'
        }"
      >
        <div 
          class="stats-number"
          :style="{
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            color: numberColor || '#1D3557'
          }"
        >
          {{ number }}
        </div>
      </a-card>
      <a-flex justify="flex-end">
        <img 
          :src="iconSrc || '@/assets/Illustrations.png'" 
          class="stats-img" 
          :alt="title" 
        />
      </a-flex>
    </div>
    <div class="stats-title-container">
      <a-flex justify="flex-start">
        <div class="stats-title" :style="{ width: titleWidth || 'auto' }">
          {{ title }}
        </div>
      </a-flex>
    </div>
  </a-card>
</template>

<script>
export default {
  name: 'StatsCard',
  props: {
    number: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    iconSrc: {
      type: String,
      default: '@/assets/Illustrations.png'
    },
    numberColor: {
      type: String,
      default: '#1D3557'
    },
    numberCardColor: {
      type: String,
      default: '#f0f8ff'
    },
    titleWidth: {
      type: String,
      default: 'auto'
    }
  }
}
</script>

<style scoped>
.stats-card {
  border-radius: 12px;
  min-height: 140px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  background: #fff;
}

.stats-number {
  font-size: 1.5rem;
  font-weight: 700;
}

.stats-title {
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
}

.stats-img {
  width: 48px;
  margin-top: 8px;
}
</style> 