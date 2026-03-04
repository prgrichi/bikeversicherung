<template>
  <div class="app-shell">
    <TheHeader />

    <main id="main-content" tabindex="-1">
      <slot></slot>
    </main>

    <TheFooter />
  </div>
</template>

<script setup></script>
