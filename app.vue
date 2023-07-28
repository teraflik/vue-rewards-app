<template>
  <header>
      <Titlebar />
  </header>

  <main class="container">
    <NuxtPage page-key="index"/>
  </main>

  <nav class="fixed-bottom">
      <Navbar />
  </nav>
</template>

<style>
.fs-7 {
  font-size: 0.75rem !important;
}
</style>
