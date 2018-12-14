<template>
  <div>
      <span>Showing {{this.$store.state.startIndex}}-{{lastIndex()}} of {{this.$store.state.data.length}} entries</span>
    </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    
  },

  methods: {
      lastIndex(){
        let expected = parseInt(this.$store.state.startIndex,10) -1 
        + parseInt(this.$store.state.perPage,10);
        if(expected > this.$store.state.data.length)
        return this.$store.state.data.length;
        else
        return expected;
      },
  }
  
  
}
</script>



<style>

</style>
