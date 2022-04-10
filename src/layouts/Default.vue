<template>
  <div class="flex flex-col min-h-screen justify-between text-gray-800">
    <header class="bg-gray-100 py-6">
      <div class="container">
        <div class="flex justify-between items-center">
          <strong>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
          </strong>
          <nav class="space-x-5">
            <g-link to="/">Home</g-link>
            <g-link to="/about/">About</g-link>
          </nav>
        </div>
      </div>
    </header>

    <slot/>

    <footer class="bg-gray-100 py-6">
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
  @apply m-0 p-0 leading-normal;
}
</style>
