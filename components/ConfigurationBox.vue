<script setup lang="ts">
const props = defineProps<{
  cpu: string
  gpu: string
  power: string
  disk: string
  memory: string
  battery: string
  weight: string
  cooling: string
  screen: string
  resolution: string
  refreshRate: string
  brightness: string
  colorGamut: string
  port: string
  expand: string
  gameModes: string[]
}>()
</script>

<template>
  <div class="spec-box">
    <div class="header">
      <span class="cpu">CPU：{{ props.cpu }}</span>
      <span class="gpu">GPU：{{ props.gpu }}</span>
    </div>
    <hr>
    <div class="performance">
      综合性能释放：<span class="highlight">{{ props.power }}</span>
    </div>

    <div class="spec-table">
      <div><strong>硬盘：</strong>{{ props.disk }}</div>
      <div><strong>内存：</strong>{{ props.memory }}</div>
      <div><strong>电池：</strong>{{ props.battery }}</div>
      <div><strong>重量：</strong>{{ props.weight }}</div>
      <div><strong>散热：</strong>{{ props.cooling }}</div>

      <div><strong>尺寸：</strong>{{ props.screen }}</div>
      <div><strong>分辨率：</strong>{{ props.resolution }}</div>
      <div><strong>刷新率：</strong>{{ props.refreshRate }}</div>
      <div><strong>亮度：</strong>{{ props.brightness }}</div>
      <div><strong>色域：</strong>{{ props.colorGamut }}</div>
    </div>

    <div class="extra">
      <div><strong>接口：</strong>{{ props.port }}</div>
      <div><strong>拓展性：</strong>{{ props.expand }}</div>
      <div>
        <strong>游戏模式：</strong>
        <ul>
          <li v-for="mode in props.gameModes" :key="mode">{{ mode }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spec-box {
  background: #FFFFFF;
  color: #fff;
  padding: 1.5em;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  font-family: "Segoe UI", sans-serif;
  max-width: 600px;
  margin: 1.5em auto;
  line-height: 1.6;
}

.header {
  display: flex;
  justify-content: center; /* 水平居中 */
  gap: 1em;                /* CPU 和 GPU 间距 */
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 1em;
}

.cpu {
  color: #00bfff;
}

.gpu {
  color: #7fff00;
}

.performance {
  font-size: 1.1em;
  margin-bottom: 1em;
  color: #000;
}

.performance .highlight {
  font-size: 1.6em;
  font-weight: bold;
  color: #ffd700;
}

.spec-table {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4em 1em;
  margin-bottom: 1em;
  color: #000;
}

.extra {
  font-size: 0.95em;
  color: #000;
}

.extra ul {
  margin: 0.3em 0 0 1em;
  padding: 0;
  list-style: disc;
  color: #000;
}
</style>
