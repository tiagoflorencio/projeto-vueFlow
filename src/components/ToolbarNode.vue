<script setup>
import { Handle, Position } from "@vue-flow/core";
import { NodeToolbar } from "@vue-flow/node-toolbar";
import { ref } from "vue";

defineProps(["data", "label", "id"]);

let editDialog = ref(false);
let deleteDialog = ref(false);

function onEdit(data) {
  editDialog.value = true;
}

function onDelete(data) {
  deleteDialog.value = true;
}
</script>

<template>
  <NodeToolbar
    style="display: flex; gap: 0.5rem; align-items: center"
    :is-visible="data.toolbarVisible"
    :position="data.toolbarPosition"
  >
    <v-btn
      density="comfortable"
      icon="mdi-pencil-outline"
      @click="onEdit(data)"
    ></v-btn>
    <v-btn
      density="comfortable"
      icon="mdi-delete-outline"
      @click="onDelete(data)"
    ></v-btn>
  </NodeToolbar>

  <div :style="{ padding: '10px 20px' }">Node {{ id }}</div>

  <Handle type="target" :position="Position.Left" />
  <Handle type="source" :position="Position.Right" />

  <v-dialog v-model="editDialog" width="40vh">
    <v-card>
      <v-card-title> Edição </v-card-title>
      <v-card-text>Informações para editar</v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="editDialog = false">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="deleteDialog" width="40vh">
    <v-card>
      <v-card-title> Exclusão </v-card-title>

      <v-card-text> Tem certeza que deseja excluir ? </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="deleteDialog = false"
          >Fechar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
