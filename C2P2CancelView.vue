<template>
  <div class="c2p2-cancel">
    <h2>{{ $t('c2p2.cancel.title') }}</h2>
    <p>{{ $t('c2p2.cancel.message') }}</p>
    <router-link class="btn btn-secondary" to="/checkout">
      {{ $t('c2p2.cancel.retry') }}
    </router-link>
  </div>
</template>

<style scoped>
.c2p2-cancel {
  max-width: 480px;
  margin: 4rem auto;
  text-align: center;
}
</style>
