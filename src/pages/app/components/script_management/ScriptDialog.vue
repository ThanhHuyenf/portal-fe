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
    script = {
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

let script = reactive({
  "script_name": "",
  "script_version": "",
  "script_desc": "",
  "script_up": ""
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
  <el-dialog v-model="dialog" :title="$t( action !== 'edit' ? 'dialog.add' : 'dialog.edit') + ' script'" width="600px">
    <el-form
        ref="formDevice"
        label-position="right"
        label-width="auto"
        :model="script">
      <el-form-item :label="$t('script_management.name')" prop="script_name">
        <el-input v-model="script.script_name"/>
      </el-form-item>
      <el-form-item :label="$t('script_management.version')" prop="script_version">
        <el-input v-model="script.script_version"/>
      </el-form-item>
      <el-form-item :label="$t('script_management.note')" prop="script_desc">
        <el-input v-model="script.script_desc"/>
      </el-form-item>
      <el-form-item :label="$t('script_management.file')" prop="script_up">
        <el-input v-model="script.script_up"/>
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