<template>
  <div>
    <table>
      <tr>
        <th v-for="(value, key) in rows[0]" :key="key"><a @click="sortData(key)">{{ key }}</a></th>
      </tr>
      <tr v-for="(row, index) in rows" :key="{index}">
        <td v-for="(value, key) in row" :key="key">{{ value }}</td>
      </tr>
    </table>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TableData',

  data () {
    return {
      defRows: this.$store.state.data.slice(this.$store.state.startIndex-1),
      ascFlags: []
    }
  },

  computed: {
      rows: function(){
        let tableData = this.$store.state.data.slice(parseInt(this.$store.state.startIndex-1), 
        parseInt(this.$store.state.startIndex-1)+parseInt(this.$store.state.perPage));
        if(tableData == null)
        return this.defRows;
        else
        return tableData;
      
      },

      ascSort: function(){
        if(this.ascFlags === [])
        for(let i=0; i < rows[0].length; i++){
          this.ascFlags = {key:rows[0].keys()[i], value:true};
          return this.ascFlags;
        }
        else{
            return this.ascFlags;
        }
      
      },
  },

  methods: {
			sortData(key) {
        if(this.ascSort[key]){
          this.$store.commit('sort', key);
          this.ascSort[key] = false;
        }
        else{
          this.$store.commit('sortDesc', key);
          this.ascSort[key] = true;
        }

			}
		}
  
}
</script>



<style lang="scss">
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 5px;
}

tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

th {
  text-align: left;
  border: 1px solid #ddd;
  border-bottom: 3px solid #ddd;
  font-family: 'Glyphicons Halflings';
  position: relative;
  cursor: pointer;
}

th::after {
  content: '';
  position: absolute;
  top: 12px;
  right: 8px;
  display: block;
  opacity: 0.2;
  font-size: 0.7em;
}

th.sortAsc::after {
  content: '\25b2';
  opacity: 0.8;
}

th.sortDesc::after {
  content: '\25bc';
  opacity: 0.8;
}

td {
  border: 1px solid #ddd;
}

td,
th, a {
  padding: 8px;
}
</style>
