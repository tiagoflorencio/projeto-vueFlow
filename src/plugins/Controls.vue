<script setup lang="js">
import { Panel, useVueFlow, Position } from '@vue-flow/core'
import ContentCard from "../components/ContentCard.vue";

const flowKey = 'example-flow'

const defaultNodeStyle = {
  border: "1px solid #10b981",
  borderRadius: "99px",
};


const { nodes, addNodes, setNodes, setEdges, dimensions, setTransform, toObject } = useVueFlow()

function onSave() {
  localStorage.setItem(flowKey, JSON.stringify(toObject()))
}

function onRestore() {
  const flow = JSON.parse(localStorage.getItem(flowKey))

  if (flow) {
    const [x = 0, y = 0] = flow.position
    setNodes(flow.nodes)
    setEdges(flow.edges)
    setTransform({ x, y, zoom: flow.zoom || 0 })
  }
}

function onAdd() {
  const id = nodes.value.length + 1

  const newNode = {
    id: id,
    // label: `Node ${id}`,
      position: { x: Math.random() * dimensions.value.width, y: Math.random() * dimensions.value.height },
      targetPosition: Position.Left, sourcePosition: Position.Right,
      render: (h) => h(ContentCard),
       style: defaultNodeStyle,
       type: "toolbar",
        data: {toolbarPosition: "top", teste: "informações"}
  }


  addNodes([newNode])
}
</script>

<template>
  <Panel position="top-right" class="save-restore-controls">
    <button style="background-color: #182035" @click="onSave">save</button>
    <button style="background-color: #182035" @click="onRestore">
      restore
    </button>
    <button style="background-color: #019733" @click="onAdd">add card</button>
  </Panel>
</template>
