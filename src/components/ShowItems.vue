<template>
  <div>
    Show 
    <select v-model="perPage">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="25">25</option>
    </select>
    entries per page
  </div>
</template>

<script>
export default {
  
  computed: {
    perPage: {
      get() {
        return this.$store.state.perPage;
      },
      set(value) {
        this.$store.commit('setPerPage', value);
      },
    },
  },
};
</script>

<style scoped>
select {
  outline: none;
}
</style>
