<script setup>
import { ref } from 'vue'

const dialog = ref(true)
const test = "test"
</script>

<template>
<el-dialog v-model="dialog" title="device" width="600px">
  <el-form>
    {{$t( test === 'test' ? 'device.current_task' : 'device.time_online')}}
  </el-form>
</el-dialog>
</template>

<style scoped lang="scss">

</style>