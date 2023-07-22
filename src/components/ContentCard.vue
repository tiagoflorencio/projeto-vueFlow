<template>
    <div>
      <!-- Inclua o código HTML que você deseja dentro do nó do fluxograma -->
      <input type="text" v-model="inputValue" />
      <button @click="handleButtonClick">Click me</button>
      <!-- Outros elementos HTML aqui -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputValue: '',
      };
    },
    methods: {
      handleButtonClick() {
        // Lógica do clique do botão
      },
      // Outros métodos aqui
    },
  };
  </script>