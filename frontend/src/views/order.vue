<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Orders</h1>
    
    <div v-if="orderStore.loading" class="text-center">
      Loading...
    </div>
    
    <div v-else-if="orderStore.error" class="text-red-500">
      {{ orderStore.error }}
    </div>
    
    <div v-else class="space-y-4">
      <div
        v-for="order in orderStore.orders"
        :key="order.id"
        class="border rounded-lg p-4"
      >
        <h2 class="text-lg font-semibold">Order #{{ order.id }}</h2>
        <p class="text-gray-600">Status: {{ order.status }}</p>
        <p class="text-gray-600">Total: ${{ order.total }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useOrderStore } from '../store/order'

const orderStore = useOrderStore()

onMounted(() => {
  orderStore.fetchOrders()
})
</script>