<template>
  <div class="flex flex-col min-h-screen justify-between bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
    <header class="py-6 bg-gray-100 dark:bg-gray-700">
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

    <footer class="py-6 bg-gray-100 dark:bg-gray-700">
      <div class="container text-center">
        <p>&copy; 2022 {{ $static.metadata.siteName }}</p>
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