<script setup lang="ts">
import type { Order } from "@/types/order";

import { ref, onMounted } from "vue";

import { useOrdersStore } from "@/stores/orders";

const { getOrders } = useOrdersStore();
const orders = ref<Order[]>([]);

onMounted(() => (orders.value = getOrders()));
</script>

<template>
  <h1>Orders</h1>

  <ul>
    <li v-for="(order, index) in orders" :key="index">
      {{ order.modelo }}
    </li>
  </ul>
</template>
