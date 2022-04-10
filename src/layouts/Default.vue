<template>
  <div class="flex flex-col min-h-screen justify-between bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-400">
    <header class="py-6 bg-gray-300 dark:bg-gray-700 dark:text-white">
      <div class="container">
        <div class="flex justify-between items-center">
          <strong>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
          </strong>
          <nav class="space-x-5">
            <g-link to="/">Home</g-link>
            <g-link to="/about/">About</g-link>
          </nav>
          <theme-switcher />
        </div>
      </div>
    </header>

    <slot/>

    <footer class="container">
      <hr class="dark:border-gray-400" />
      <div class="py-6 space-y-2 lg:space-y-0 lg:flex lg:justify-between lg:items-center">
        <p>Copyright &copy; 2022 {{ $static.metadata.siteName }}</p>
        <nav class="flex items-center space-x-2">
          <a href="#wip">FAQ</a>
          <span>
            |
          </span>
          <a href="#wip">Terms</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}
</style>

<script>
// import the theme-switcher here
import ThemeSwitcher from '../components/ThemeSwitcher'

// reguster theme-swticher under components
export default {
  components: {
    ThemeSwitcher,
  }
}
</script>