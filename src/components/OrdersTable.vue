<script setup lang="ts">
import { defineProps } from "vue";
import type { Order } from "@/types/order";

defineProps<{
  orders: Order[];
  height: number;
}>();
</script>

<template>
  <v-table :height="height" striped="even" fixed-header>
    <thead>
      <tr>
        <th class="text-left">Orden</th>
        <th class="text-left">VIN</th>
        <th class="text-left">Modelo</th>
        <th class="text-left">Fecha</th>
        <th class="text-left">Tipo</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="({ orden, vin, modelo, fecha, tipo }, index) in orders"
        :key="index"
      >
        <td>{{ orden }}</td>
        <td>{{ vin }}</td>
        <td>{{ modelo }}</td>
        <td>{{ new Date(fecha).toISOString().slice(0, 10) }}</td>
        <td>{{ tipo }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
