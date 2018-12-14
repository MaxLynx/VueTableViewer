<template>
  <div class="search-items">
    Search: <input type="search" v-model="searchText" />
  </div>
</template>

<script>
export default {
  name: 'SearchItems',
  data () {
    return {
      searchText: ''
    }
  },

  watch: {
    searchText: function(val, oldVal) {
      this.$store.commit('find', val);
    }
  }
}
</script>

<style scoped>
.search-items input {
  padding: 5px;
  outline: none;
  border: 1px solid #ddd;
}
</style>
