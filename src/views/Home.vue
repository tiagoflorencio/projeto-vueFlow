<script setup>
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";
import { ref } from "vue";
import { initialElements } from "../plugins/initial-elements";
import SaveRestoreControls from "../plugins/Controls";
// import SaveRestoreControls from './Controls.vue'
import ToolbarNode from "../components/ToolbarNode.vue";

const { onConnect, addEdges } = useVueFlow();

const elements = ref(initialElements);

onConnect((params) => addEdges(params));
</script>

<template>
  <VueFlow
    v-model="elements"
    class="basicflow"
    :default-edge-options="{ type: 'smoothstep' }"
    :default-viewport="{ zoom: 1.5 }"
    :min-zoom="0.2"
    :max-zoom="4"
    fit-view-on-init
  >
    <template #node-toolbar="nodeProps">
      <ToolbarNode
        :data="nodeProps.data"
        :label="nodeProps.label"
        :id="nodeProps.id"
      />
    </template>
    <SaveRestoreControls />

    <!-- <Background pattern-color="#aaa" gap="8" /> -->

    <MiniMap />

    <Controls />
  </VueFlow>
</template>
