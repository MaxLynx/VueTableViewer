<template>
  <div>
    <div class="app-upload">
      <Upload />
    </div>

    <div class="app-header">
      <ShowItems />
      <SearchItems />
    </div>

    <TableData />

    <div class="app-footer">
      <Info />
      <Pagination />
    </div>

  </div>
</template>

<script>
import Info from './components/Info.vue';
import Pagination from './components/Pagination.vue';
import SearchItems from './components/SearchItems.vue';
import ShowItems from './components/ShowItems.vue';
import TableData from './components/TableData.vue';
import Upload from './components/Upload.vue';


export default {
  name: 'App',

  components: {
    Info,
    Pagination,
    SearchItems,
    ShowItems,
    TableData,
    Upload
  },

}
</script>

<style>
* {
  box-sizing: border-box;
  color: #73879c;
  font-size: 14px;
}

.app-header,
.app-footer {
  display: flex;
  justify-content: space-between;
  padding: 8px 2px;
}

.app-upload {
  padding: 10px 0;
}
</style>