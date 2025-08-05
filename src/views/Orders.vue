<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Order } from "@/types/order";
import type { Filters } from "@/types/filters";

import { useOrdersStore } from "@/stores/orders";
import useHeight from "@/composables/useHeight";

import OrdersFilters from "@/components/OrdersFilters.vue";
import OrdersTable from "@/components/OrdersTable.vue";

const { getOrders } = useOrdersStore();
const { height } = useHeight();

const orders = ref<Order[]>([]);
const filters = ref<Filters>({
  vin: "",
  startDate: "",
  endDate: "",
});

const onSubmit = () => {
  orders.value = getOrders(filters.value);
};

const clearFilters = () => {
  filters.value = {
    vin: "",
    startDate: "",
    endDate: "",
  };
  orders.value = getOrders();
};

onMounted(() => (orders.value = getOrders()));
</script>

<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-row no-gutters>
      <v-col :cols="2">
        <OrdersFilters
          v-model:filters="filters"
          @submit="onSubmit"
          @clear="clearFilters"
          :height="height"
        />
      </v-col>

      <v-col :cols="10">
        <OrdersTable :orders="orders" :height="height" />
      </v-col>
    </v-row>
  </v-container>
</template>
