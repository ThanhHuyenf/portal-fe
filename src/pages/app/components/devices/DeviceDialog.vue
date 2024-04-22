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
    device = {
      ...obj,
      devices_status: obj.devices_status === 1
    }
    console.log(device)
  } else {
    action.value = 'add-new'
  }
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.value?.resetFields()
}

let device = reactive({
  devices_name: "",
  devices_fd: "",
  devices_model: "",
  devices_status: false,
  devicesgroup: {
    group_name: ""
  },
  cur_task: "",
  task_status: false,
  time_online: ""
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
      :model="device">
    <el-form-item :label="$t('device.device_name')" prop="devices_name">
      <el-input v-model="device.devices_name"/>
    </el-form-item>
    <el-form-item :label="$t('device.device_group')" prop="devicesgroup.group_name">
      <el-input v-model="device.devicesgroup.group_name"/>
    </el-form-item>
    <el-form-item :label="$t('device.device_id')" prop="devices_fd">
      <el-input v-model="device.devices_fd"/>
    </el-form-item>
    <el-form-item :label="$t('device.device_model')" prop="devices_model">
      <el-input v-model="device.devices_model"/>
    </el-form-item>
    <el-form-item :label="$t('device.device_status')" prop="devices_status">
      <el-switch v-model="device.devices_status"></el-switch>
    </el-form-item>
    <el-form-item :label="$t('device.current_task')" prop="cur_task">
      <el-input v-model="device.cur_task"/>
    </el-form-item>
    <el-form-item :label="$t('device.task_status')" prop="task_status">
      <el-switch v-model="device.task_status"/>
    </el-form-item>
    <el-form-item :label="$t('device.time_online')" prop="time_online">
      <el-date-picker
          v-model="device.time_online"
          type="date"
          placeholder="Pick a day"
      />
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