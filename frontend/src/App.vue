<template>
  <div>
    <header>
      <nav class="bg-gray-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <router-link to="/" class="text-xl font-bold">Shop</router-link>
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <router-link
                    to="/products"
                    class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    Products
                  </router-link>
                  <router-link
                    to="/orders"
                    class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    Orders
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view />
    </div>
  </div>
</template>
