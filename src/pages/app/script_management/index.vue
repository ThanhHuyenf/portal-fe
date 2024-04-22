<script setup>
import {onMounted, reactive, ref} from "vue"
import MyIcon from '@/components/my-icon/index.vue'
import MyPagination from '@/components/my-pagination/index.vue'
import {ElMessage, ElMessageBox} from 'element-plus'
import ScriptDialog from "~/pages/app/components/script_management/ScriptDialog.vue";

const input = ''
const state = reactive({
  loading: false,
  data: [
    {
      "script_id": 1,
      "script_name": "Test Script",
      "script_version": "1.0.0",
      "script_desc": "For testing only",
      "script_up": "/uploads/admin/202310/demo.js"
    }
  ],
})
const searchParams = reactive({
  script_name: '',
  script_version: '',
  script_note:''
})

const scriptDialog = ref(null)

const onEdit = (row) => {
  openScriptDialog('edit', row )
}
onMounted(() => {
  console.log('onMounted', scriptDialog.value)
})
const onDelete = (row) => {
  ElMessageBox.confirm(
      'We will permanently delete the file. Continue?',
      'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }
  )
      .then(() => {
        ElMessage({
          type: 'success',
          message: 'Delete completed',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Delete canceled',
        })
      })
}

const openScriptDialog = (type, user ) => {
  scriptDialog.value.open(type, user)
}
</script>
<template>
  <MainContainer one-screen title="Script management">
    <template v-slot:header-action>
      <el-button plain type="primary" @click="openScriptDialog('add', {} )">Add</el-button>
    </template>
    <el-form :inline="true">
      <el-form-item :label="$t('script_management.name')">
        <el-input v-model="searchParams.script_name" :placeholder="$t('pd.script_name')" style="width: 240px"/>
      </el-form-item>
      <el-form-item :label="$t('script_management.version')">
        <el-input v-model="searchParams.script_version" :placeholder="$t('pd.script_version')" style="width: 240px"/>
      </el-form-item>
      <el-form-item :label="$t('script_management.note')">
        <el-input v-model="searchParams.script_note" :placeholder="$t('pd.script_note')" style="width: 240px"/>
      </el-form-item>
    </el-form>


    <el-table v-loading="state.loading" :data="state.data" class-name="mt-10" row-key="devices_id">
      <el-table-column :label="$t('device.no')" prop="script_id" min-width="30px"/>
      <el-table-column :label="$t('script_management.name')" prop="script_name" min-width="80px"/>
      <el-table-column :label="$t('script_management.version')" prop="script_version" min-width="80px"/>
      <el-table-column :label="$t('script_management.note')" prop="script_desc" min-width="80px"/>

      <el-table-column :label="$t('script_management.file')">
        <template #default="{ row }">
          <a href="row.script_up">Download</a>
          <!--          <el-input v-model="searchParams.script_note" :placeholder="$t('pd.script_note')" style="width: 240px"/>-->
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="Actions" width="120">
        <template #default="{ row }">
          <my-icon class="cursor-pointer" color="primary" name="majesticons:edit-pen-2" size="20px"
                   @click="onEdit(row)"/>
          <my-icon class="ml-10 cursor-pointer" color="primary" name="ic:baseline-delete" size="20px"
                   @click="onDelete(row)"/>
        </template>
      </el-table-column>
    </el-table>
    <my-pagination
        :current-page="1"
        :page-size="10"
        :total="state.data.length"
        class="mt-10"
        layout="prev, pager, next"
    />
  </MainContainer>
  <ScriptDialog ref="scriptDialog"/>
</template>
<style lang="scss" scoped>

</style>