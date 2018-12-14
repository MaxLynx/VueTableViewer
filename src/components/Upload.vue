<template>
  <div>
      <textarea
		 placeholder="insert link to json"
		 rows="1"
		 v-model="dataLink"
		/>
		<button
			@click="loadData()"
		>GET DATA
		</button>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
      dataLink: ''
    }
  },

  methods: {
			loadData() {
         this.$store.dispatch('loadAsync', this.dataLink);

			}
		}
  
}
</script>



<style lang="scss">
button {
	width: 100px;
	background-color: #44c767;
	border: 1px solid #18ab29;
	cursor: pointer;
	color: #ffffff;
	font-size: 14px;
	padding: 8px 8px;
	text-transform: uppercase;
	text-decoration: none;
	text-shadow: 0px 1px 0px #2f6627;
  margin: 0;
}

button:hover {
	background-color: #5cbf2a;
}

button:active {
	position: relative;
	//top: 1px;
}
textarea {
  width: 500px;
}
</style>
