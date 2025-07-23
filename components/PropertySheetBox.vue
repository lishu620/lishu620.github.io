<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
  name: string
  values: number[]
  pros: string
  cons: string
}>()

const chartRef = ref<HTMLDivElement | null>(null)
let myChart: echarts.ECharts | null = null

const renderChart = () => {
  if (!chartRef.value) return

  if (!myChart) {
    myChart = echarts.init(chartRef.value)
  }

  myChart.setOption({
    tooltip: {},
    radar: {
      indicator: [
        { name: '质感', max: 100 },
        { name: '性价比', max: 100 },
        { name: '性能', max: 100 },
        { name: '散热', max: 100 },
        { name: '售后', max: 100 },
      ],
      radius: 60,
    },
    series: [{
      name: '属性值',
      type: 'radar',
      data: [
        {
          value: props.values,
          name: props.name,
        }
      ],
    }],
  })

  myChart.resize()
}

onMounted(() => {
  renderChart()
  window.addEventListener('resize', () => {
    myChart?.resize()
  })
})

watch(() => props.values, () => {
  renderChart()
})
</script>

<template>
  <div class="card-container">
    <div class="chart-box" ref="chartRef" />
    <div class="info">
      <div class="title">{{ props.name }}</div>
      <div class="line"><span class="label">优点：</span>{{ props.pros }}</div>
      <div class="line"><span class="label">缺点：</span>{{ props.cons }}</div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1em;
  max-width: 600px;
  margin: 1em auto;
  background: #fdfdfd;
  box-shadow: 0 4px 8px rgba(0,0,0,0.06);
  flex-wrap: wrap;
}

.chart-box {
  width: 250px;
  height: 250px;
  flex-shrink: 0;
}

.info {
  flex: 1;
  padding-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

.line {
  margin: 0.4em 0;
  font-size: 1em;
}

.label {
  font-weight: bold;
  color: #409eff;
}
</style>
