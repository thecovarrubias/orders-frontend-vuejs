<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { Filters } from "@/types/filters";

defineProps<{
  filters: Filters;
  height: number;
}>();

const emit = defineEmits<{
  (e: "submit"): void;
  (e: "clear"): void;
}>();
</script>

<template>
  <v-card :height="height" border rounded="0">
    <v-card-title class="text-h5">Ordenes</v-card-title>
    <v-card-subtitle>Seleccione uno o más filtros:</v-card-subtitle>

    <v-divider class="my-4" />

    <v-card-text>
      <v-form @submit.prevent>
        <v-text-field
          v-model="filters.vin"
          label="VIN"
          variant="outlined"
          clearable
        />
        <v-text-field
          v-model="filters.startDate"
          label="Fecha inicial"
          variant="outlined"
          type="date"
          clearable
        />
        <v-text-field
          v-model="filters.endDate"
          label="Fecha final"
          variant="outlined"
          type="date"
          clearable
        />

        <v-btn class="mb-4" color="grey-lighten-3" block flat @click="emit('clear')">
          Limpiar
        </v-btn>
        
        <v-btn type="submit" color="blue" block flat @click="emit('submit')">
          Buscar
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>
