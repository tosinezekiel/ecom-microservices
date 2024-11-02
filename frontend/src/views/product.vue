<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Products</h1>
    
    <div v-if="productStore.loading" class="text-center">
      Loading...
    </div>
    
    <div v-else-if="productStore.error" class="text-red-500">
      {{ productStore.error }}
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="product in productStore.products"
        :key="product.id"
        class="border rounded-lg p-4"
      >
        <h2 class="text-lg font-semibold">{{ product.name }}</h2>
        <p class="text-gray-600">${{ product.price }}</p>
        <button
          @click="addToCart(product)"
          class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '../store/product'

const productStore = useProductStore()

onMounted(() => {
  productStore.fetchProducts()
})

const addToCart = (product: any) => {
  // Implement cart functionality
}
</script>