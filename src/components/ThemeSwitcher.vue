<template>
  <button
    title="Toggle theme between light and dark"
    @click.prevent="toggleTheme"
  >
    <!-- <span v-if="theme === 'light'">Switch to Dark Mode</span>
    <span v-else>Switch to Light Mode</span> -->
    <span>Swith Theme</span>
  </button>
</template>

<script>
export default {
  data () {
    return {
      theme: ''
    }
  },
  mounted () {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const defaultTheme = userPrefersDark ? 'dark' : 'light'
    const theme = localStorage.getItem('theme') || defaultTheme
    this.setTheme(theme)
  },
  methods: {
    toggleTheme () {
      const newTheme = this.theme === 'light' ? 'dark' : 'light'
      this.setTheme(newTheme)
    },
    setTheme (newTheme) {
      this.theme = newTheme
      if (this.theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', newTheme)
    }
  }
}
</script>