<template>
  <div class="c2p2-success">
    <h2>{{ $t('c2p2.success.title') }}</h2>
    <p>{{ $t('c2p2.success.message') }}</p>
    <router-link class="btn btn-primary" to="/dashboard">
      {{ $t('c2p2.success.dashboard') }}
    </router-link>
  </div>
</template>

<style scoped>
.c2p2-success {
  max-width: 480px;
  margin: 4rem auto;
  text-align: center;
}
</style>
