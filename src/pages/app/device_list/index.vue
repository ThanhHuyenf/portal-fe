<script setup>
import {onMounted, reactive, ref} from "vue"
import MyIcon from '@/components/my-icon/index.vue'
import MyPagination from '@/components/my-pagination/index.vue'
import {ElMessage, ElMessageBox} from 'element-plus'
import DeviceGroupDialog from "~/pages/app/components/device_group/DeviceGroupDialog.vue";

const input = ''
const state = reactive({
  loading: false,
  data: [
    {
      "id": 1,
      "group_name": "Unclassified",
      "group_note": ""
    },
    {
      "id": 2,
      "group_name": "Group 1",
      "group_note": "one"
    },
    {
      "id": 3,
      "group_name": "Group 2",
      "group_note": "two"
    },
    {
      "id": 4,
      "group_name": "Group 3",
      "group_note": "Douyin project"
    },
    {
      "id": 5,
      "group_name": "Test Group",
      "group_note": "For testing only"
    }
  ],
})
const searchParams = reactive({
  group_name: '',
  group_note: '',
})

const deviceGroupDialog = ref(null)

const onEdit = (row) => {
  openUserListDialog('edit', row )
}
onMounted(() => {
  console.log('onMounted', deviceGroupDialog.value)
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

const openUserListDialog = (type, user ) => {
  deviceGroupDialog.value.open(type, user)
}
</script>
<template>
  <MainContainer one-screen title="Danh sách device group">
    <template v-slot:header-action>
      <el-button plain type="primary" @click="openUserListDialog('add', {} )">Add</el-button>
    </template>
    <el-form :inline="true">
      <el-form-item :label="$t('device_group.name')">
        <el-input v-model="searchParams.deviceName" :placeholder="$t('pd.group_name')" style="width: 240px"/>
      </el-form-item>
      <el-form-item :label="$t('device_group.note')">
        <el-input v-model="searchParams.deviceGroup" :placeholder="$t('pd.group_note')" style="width: 240px"/>
      </el-form-item>
    </el-form>


    <el-table v-loading="state.loading" :data="state.data" class-name="mt-10" row-key="devices_id">
      <el-table-column :label="$t('device.no')" prop="id" min-width="30px"/>
      <el-table-column :label="$t('device_group.gr_name')" prop="group_name" min-width="80px"/>
      <el-table-column :label="$t('device_group.note')" prop="group_note" min-width="80px"/>

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
  <DeviceGroupDialog ref="deviceGroupDialog"/>
</template>
<style lang="scss" scoped>

</style>