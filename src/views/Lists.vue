<template>
  <div>
    <h1>Welcome to the List Page</h1>

    <input v-model="item" placeholder="enter item">
    <button @click="addItem">Add Item</button>

    <h2>Item List</h2>
    <ul data-cy="itemList">
      <li v-for="item in itemList" :key="item">
        {{ item }}
      </li>
</ul>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item: '',
        itemList: []
      }
    },
    methods: {
      addItem() {
        this.itemList.push(this.item)
        this.item = ''
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>