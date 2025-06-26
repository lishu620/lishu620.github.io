import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '璃殊的小站',
    },

    nav: [
      {
        text: '归档',
        link: '/archives/',
        icon: 'i-ri-archive-line',
      },
      {
        text: '云笔记',
        link: 'https://note.mlishu.xyz/',
        icon: 'i-ri-booklet-line',
    },
    ],

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2025,
      beian: {
        enable: false,
        // 备案号
        icp: '',
      },
    },
  },

  unocss: { safelist },
})
