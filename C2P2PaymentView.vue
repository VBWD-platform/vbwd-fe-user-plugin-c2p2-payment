<template>
  <div class="c2p2-payment">
    <div v-if="loading" class="c2p2-payment__loading">
      <p>{{ $t('c2p2.payment.redirecting') }}</p>
    </div>
    <div v-else-if="error" class="c2p2-payment__error">
      <p>{{ error }}</p>
      <button class="btn btn-primary" @click="createAndRedirect">
        {{ $t('c2p2.payment.retry') }}
      </button>
    </div>
    <div v-else-if="!invoiceId" class="c2p2-payment__no-invoice">
      <p>{{ $t('c2p2.payment.noInvoice') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usePaymentRedirect } from 'vbwd-view-component';
import { api } from '@/api';

const { loading, error, invoiceId, readInvoiceFromQuery, createAndRedirect } =
  usePaymentRedirect('/plugins/c2p2', api);

onMounted(() => {
  readInvoiceFromQuery();
  if (invoiceId.value) {
    createAndRedirect();
  }
});
</script>

<style scoped>
.c2p2-payment {
  max-width: 480px;
  margin: 4rem auto;
  padding: 1.5rem;
  text-align: center;
}

.c2p2-payment__error {
  color: var(--vbwd-color-danger, #b22);
}
</style>
