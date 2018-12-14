<template>
  <nav>
      <ul>
        <li><span v-bind:class="{ available: this.$store.state.startIndex != 1 }"
        v-on="{ click: this.$store.state.startIndex != 1 ? changePageToPrev : empty }">Previous</span></li>
        <li v-for="index in pageCount" :key="index">
          <span class="available" v-bind:class="{ current: index == currentPage }">
            <a @click="changePage(index)">{{index}}</a>
          </span> 
        </li>
        <li><span v-bind:class="{ available: parseInt(this.$store.state.startIndex) + parseInt(this.$store.state.perPage) < parseInt(this.$store.state.data.length) }"
        v-on="{ click: parseInt(this.$store.state.startIndex) + parseInt(this.$store.state.perPage) < parseInt(this.$store.state.data.length) ? changePageToNext : empty }">Next</span></li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
      pageAmount: 0,
      currentPage: 1
    }
  },

  computed: {
      pageCount: function(){
        if(this.$store.state.data)
        this.pageAmount = Math.ceil(this.$store.state.data.length * 1.0 / this.$store.state.perPage);
        return this.pageAmount;
      },
  },

  methods: {
			changePage(page) {
        this.currentPage = page;
        this.$store.commit('setStartIndex', (page-1) * this.$store.state.perPage + 1);
      },
      
      changePageToPrev() {
        this.currentPage--;
        this.$store.commit('setStartIndex', (this.currentPage-1) * this.$store.state.perPage + 1);

      },
      
      changePageToNext() {
        this.currentPage++;
        this.$store.commit('setStartIndex', (this.currentPage-1) * this.$store.state.perPage + 1);

      },

      empty() {
        
      }
    }
    

  
}
</script>



<style>
nav {
  background: seashell;
}
li {
  display: inline;
}
li span {
  padding: 4px;
}
.available {
  color: blue;
  cursor: pointer;
}
li span a {
  color: red;
}
.available a {
  color: blue;
}
.available a:hover {
  cursor: pointer;
}
.available span {
  cursor: pointer;
}
.current a {
  font-size: 2em;
  color: orangered;
}

</style>
