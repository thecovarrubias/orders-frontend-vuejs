<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

import type { VForm } from "vuetify/components";
import type { User } from "@/types/user";

import useHeight from "@/composables/useHeight";

const router = useRouter();
const { height } = useHeight();

const formRef = ref<VForm | null>(null)

const user = reactive<User>({
  username: "",
  password: "",
});

const rules: Array<(value: string | null) => true | string> = [
  (value) => {
    if (value) return true;
    return "Campo requerido.";
  },
];

const onSubmit = async (): Promise<void> => {
  const form = formRef.value;
  
  if (!form) return;

  const { valid } = await form.validate();

  if (!valid) return;

  router.push({ name: "Orders" });
};
</script>

<template>
  <v-container class="bg-grey-lighten-3 pa-0 ma-0" :height="height" fluid>
    <v-row
      align="center"
      align-content="center"
      justify="center"
      no-gutters
      :style="{ height: height + 'px' }"
    >
      <v-col :cols="12" :sm="6" :md="4">
        <v-card class="py-8 px-5" :elevation="0" rounded="0">
          <v-card-title class="text-h4">Acceso</v-card-title>
          <v-card-subtitle>Para empezar a revisar los pedidos</v-card-subtitle>

          <v-card-text>
            <v-form ref="formRef" @submit.prevent>
              <v-text-field
                v-model="user.username"
                class="mb-2"
                label="Usuario"
                variant="outlined"
                :rules="rules"
              />

              <v-text-field
                v-model="user.password"
                class="mb-2"
                label="Contraseña"
                type="password"
                variant="outlined"
                :rules="rules"
              />

              <v-btn
                class="mt-2"
                type="submit"
                color="blue"
                size="large"
                block
                flat
                @click="onSubmit"
              >
                Acceder
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
