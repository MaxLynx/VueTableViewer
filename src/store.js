import Vue from 'vue'
import Vuex from 'vuex'
import localdata from './assets/data.json'
import axios from 'axios';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    startIndex: 1,
    perPage: 5,
    data: localdata
  },

  mutations: {
    setPerPage: (state, value) => (state.perPage = value),
    setStartIndex: (state, value) => (state.startIndex = value),
    load: (state, data) => (state.data = data),
    find(state, key) {
      if(key === '')
      state.data = localdata;
      else{
        let found = [];
        for(let i=0; i < state.data.length; i++){
          if(Object.values(state.data[i]).join().search(key) > 0){
            found.push(state.data[i]);
          }
        }
        state.data = found;
      }
    },
    sort(state, field) {
      state.data = state.data.sort(function(a, b) {
        var x = a[field]; var y = b[field];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    },
    sortDesc(state, field) {
      state.data = state.data.sort(function(a, b) {
        var x = a[field]; var y = b[field];
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    });
    }
  },
//https://apeps.kiev.ua/post/getphones
  actions: {
    loadAsync (context, link) {
        axios(link)
        .then(response => {
          context.commit("load", response.data);    
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
})
