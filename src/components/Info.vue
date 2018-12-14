<template>
  <div>
      <span>Showing {{this.$store.state.startIndex}}-{{parseInt(this.$store.state.startIndex,10) -1 
        + parseInt(this.$store.state.perPage,10)}} of {{this.$store.state.data.length}} entries</span>
    </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    
  }
  
  
}
</script>



<style>

</style>
