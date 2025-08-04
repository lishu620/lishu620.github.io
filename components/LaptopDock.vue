<script setup lang="ts">
import { ref } from 'vue'

type Sub = {
  title: string
  desc: string
}

type Category = {
  name: string
  subs: Sub[]
}

const props = defineProps<{
  categories: Category[]
}>()

const active = ref<string>(props.categories[0]?.name || '')

const setActive = (name: string) => {
  active.value = name
}
</script>

<template>
  <div class="dock-wrapper">
    <div class="dock-tabs">
      <div
        v-for="cat in props.categories"
        :key="cat.name"
        :class="['tab', { active: active === cat.name }]"
        @mouseenter="setActive(cat.name)"
      >
        {{ cat.name }}
      </div>
    </div>

    <div class="cards-area">
      <div
        v-for="cat in props.categories"
        :key="cat.name + '-panel'"
        v-show="active === cat.name"
        class="subcards"
      >
        <div
          v-for="sub in cat.subs"
          :key="sub.title"
          class="card"
        >
          <div class="left"></div>
          <div class="right">
            <div class="subtitle">{{ sub.title }}</div>
            <div class="description">{{ sub.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dock-wrapper {
  max-width: 1000px;
  margin: 2em auto;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  color: #fff;
}

.dock-tabs {
  display: flex;
  gap: 1rem;
  padding: 0.5em 1em;
  background: #0f0f16;
  border-radius: 10px;
  margin-bottom: 1em;
  overflow-x: auto;
}

.tab {
  padding: 0.6em 1.2em;
  cursor: pointer;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  position: relative;
  font-weight: 600;
  user-select: none;
  transition: background 0.2s;
}
.tab.active {
  background: linear-gradient(135deg, #00bfff, #7fff00);
  color: #000;
}

.cards-area {
  background: #12121e;
  padding: 1em;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.subcards {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}

.card {
  display: flex;
  background: #1e1e2e;
  border-radius: 12px;
  overflow: hidden;
  flex: 1 1 280px;
  min-width: 280px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

.left {
  flex: 0 0 20px;
}

.right {
  flex: 1;
  padding: 0.8em 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.subtitle {
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 0.4em;
}

.description {
  font-size: 0.75em;
  line-height: 1.3;
  overflow: hidden;
}
</style>
