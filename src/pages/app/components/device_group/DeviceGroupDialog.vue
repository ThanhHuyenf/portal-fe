<script setup>
import {reactive, ref} from 'vue'

const dialog = ref(false)

const formDevice = ref()
const action = ref('Add new')
const open = (type, obj = {}) => {
  dialog.value = true
  if(type === 'edit') {
    action.value = 'edit'
    console.log("edit", obj)
    device_group = {
      ...obj,
    }
  } else {
    action.value = 'add-new'
  }
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.value?.resetFields()
}

let device_group = reactive({
  group_name: "",
  group_note: "",
})

const close=()=>{
  resetForm(formDevice)
  dialog.value = false
}

defineExpose({
  open
});
</script>

<template>
<el-dialog v-model="dialog" :title="$t( action !== 'edit' ? 'dialog.add' : 'dialog.edit')" width="600px">
  <el-form
      ref="formDevice"
      label-position="right"
      label-width="auto"
      :model="device_group">
    <el-form-item :label="$t('device.device_name')" prop="devices_name">
      <el-input v-model="device_group.group_name"/>
    </el-form-item>
    <el-form-item :label="$t('device.device_name')" prop="devices_name">
      <el-input v-model="device_group.group_name"/>
    </el-form-item>
  </el-form>
  <template #footer>
    <el-button @click="close">{{ $t('dialog.cancel') }}</el-button>
    <el-button type="primary" @click="close">{{ $t('dialog.submit') }}</el-button>
  </template>
</el-dialog>
</template>

<style scoped lang="scss">

</style>