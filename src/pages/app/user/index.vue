<template>
  <MainContainer one-screen title="Danh sách người dùng">
    <template v-slot:header-action>
      <el-button plain type="primary" @click="openUserListDialog({}, 'add-new')">Add</el-button>
    </template>
    <el-form :inline="true">
      <el-form-item :label="$t('device.device_name')">
        <el-input v-model="searchParams.deviceName" :placeholder="$t('pd.device_name')" style="width: 240px"/>
      </el-form-item>
      <el-form-item :label="$t('device.device_group')">
        <el-input v-model="searchParams.deviceGroup" :placeholder="$t('pd.device_group')" style="width: 240px"/>
      </el-form-item>
      <el-form-item :label="$t('device.device_id')">
        <el-input v-model="searchParams.deviceId" :placeholder="$t('pd.device_id')"/>
      </el-form-item>
      <el-form-item :label="$t('device.device_model')">
        <el-input v-model="searchParams.deviceModel" :placeholder="$t('pd.device_model')"/>
      </el-form-item>
      <el-form-item :label="$t('device.device_status')">
        <el-select v-model="searchParams.deviceStatus" :placeholder="$t('pd.device_status')" style="width: 240px">
          <el-option label="Online" value="Active"/>
          <el-option label="Offline" value="Inactive"/>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('device.current_task')">
        <el-input v-model="searchParams.currentTask" :placeholder="$t('pd.current_task')"/>
      </el-form-item>
      <el-form-item :label="$t('device.task_status')">
        <el-select v-model="searchParams.taskStatus" :placeholder="$t('pd.task_status')" style="width: 240px">
          <el-option label="Start" value="Running"/>
          <el-option label="Stop" value="Stopped"/>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('device.task_parameters')">
        <el-input v-model="searchParams.taskParameters" :placeholder="$t('pd.task_parameters')"/>
      </el-form-item>
    </el-form>


    <el-table v-loading="state.loading" :data="state.data" class-name="mt-10" row-key="devices_id">
      <el-table-column :label="$t('device.no')" prop="devices_id" min-width="30px"/>
      <el-table-column :label="$t('device.device_name')" prop="devices_name" min-width="80px"/>
      <el-table-column :label="$t('device.device_group')" prop="devicesgroup.group_name" min-width="80px"/>
      <el-table-column :label="$t('device.device_id')"  prop="devices_fd" min-width="100"/>
      <el-table-column :label="$t('device.device_model')"  prop="devices_model"/>
      <el-table-column label="Trạng thái" prop="status">
        <template #default="{ row }">
          <el-tag
              :type="row.devices_status === 1 ? 'success' : 'danger'"
              effect="dark"
          >
            {{ row.devices_status === 1 ? 'Online' : "Offline"}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('device.current_task')"  prop="cur_task"/>
      <el-table-column :label="$t('device.task_status')"  prop="start_stop"/>
      <el-table-column :label="$t('device.time_online')"  prop="devices_uptime"/>

      <el-table-column fixed="right" label="Actions" width="100">
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
  <device-dialog ref="userListDialog"/>
<!--  <UserList ref="userListDialog"/>-->
</template>
<script setup>
import {onMounted, reactive, ref} from "vue"
import MyIcon from '@/components/my-icon/index.vue'
import MyPagination from '@/components/my-pagination/index.vue'
import {ElMessage, ElMessageBox} from 'element-plus'
// import UserList from "~/pages/app/components/dialog/UserList.vue";

import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { setI18nLanguage } from '../../../../i18n';
import DeviceDialog from "~/pages/app/components/devices/DeviceDialog.vue";

const { locale } = useI18n({ useScope: 'global' });
watch(locale, (val) => {
  setI18nLanguage(val);
});

const input = ''
const state = reactive({
  loading: false,
  data: [
      {
        "devices_id": 77,
        "devices_name": "a",
        "devices_fd": "9d9e8580c4f26c7899ed0d27b01b8669",
        "devices_model": "samsung",
        "devices_status": 0,
        "cur_task": "none",
        "start_stop": 0,
        "devices_uptime": 1711052640,
        "devicesgroup": {
          "group_name": "Unclassified"
        }
      },
{
  "devices_id": 76,
    "devices_name": "a",
    "devices_fd": "673934e6948415705a92d3fb631eb04d",
    "devices_model": "samsung",
    "devices_status": 0,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711052641,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 75,
    "devices_name": "a",
    "devices_fd": "81123e424dd59629e9237e103076664e",
    "devices_model": "samsung",
    "devices_status": 0,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711052643,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 74,
    "devices_name": "a",
    "devices_fd": "b238aac3e9674ddfa4659366c174ee7",
    "devices_model": "samsung",
    "devices_status": 0,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711052640,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 73,
    "devices_name": "a",
    "devices_fd": "9587fcff01f15f38e1359fd9ab097460",
    "devices_model": "samsung",
    "devices_status": 0,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711052675,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 72,
    "devices_name": "a",
    "devices_fd": "2e0599cf716c95bf6ff0b2921421192f",
    "devices_model": "samsung",
    "devices_status": 0,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711052649,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 71,
    "devices_name": "a",
    "devices_fd": "fbde35cc9bd473e971ad5d4812b90f5",
    "devices_model": "samsung",
    "devices_status": 0,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711052643,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 70,
    "devices_name": "a",
    "devices_fd": "e7f5c02baa5cfe62c74e315a2704d13",
    "devices_model": "samsung",
    "devices_status": 0,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711052644,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 69,
    "devices_name": "a",
    "devices_fd": "1a184045d346d2d6e4473983eb04cb2e",
    "devices_model": "samsung",
    "devices_status": 1,
    "cur_task": "",
    "start_stop": 0,
    "devices_uptime": 1711048050,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 68,
    "devices_name": "a",
    "devices_fd": "c31aaaf1ef991bc633a51b157cfeca22",
    "devices_model": "samsung",
    "devices_status": 1,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711051650,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 67,
    "devices_name": "a",
    "devices_fd": "28bb3ad6a4c95b29a44c5c6a8bb57015",
    "devices_model": "samsung",
    "devices_status": 1,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711051650,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 66,
    "devices_name": "a",
    "devices_fd": "bcbe9c4859de78c5c842ba4e6d3cf333",
    "devices_model": "samsung",
    "devices_status": 1,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711051650,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 65,
    "devices_name": "a",
    "devices_fd": "f1de245cba6042dfa36036161881a128",
    "devices_model": "samsung",
    "devices_status": 1,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711051653,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 64,
    "devices_name": "a",
    "devices_fd": "8247f0d35702080d2ba52562d0537858",
    "devices_model": "samsung",
    "devices_status": 0,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711052640,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 63,
    "devices_name": "a",
    "devices_fd": "4ea3c1837c57cc49bfb36d9fb32dd6a3",
    "devices_model": "samsung",
    "devices_status": 1,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711051650,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 62,
    "devices_name": "a",
    "devices_fd": "1067c26f0b72960a9bfb0386ec4bce40",
    "devices_model": "samsung",
    "devices_status": 0,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711052640,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 61,
    "devices_name": "a",
    "devices_fd": "82d418d69782fedfae6575bff1c18a31",
    "devices_model": "samsung",
    "devices_status": 1,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711051651,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 60,
    "devices_name": "a",
    "devices_fd": "d1166844d46fee9b8b6899211ee801b9",
    "devices_model": "samsung",
    "devices_status": 0,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711052640,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 59,
    "devices_name": "a",
    "devices_fd": "7ee45987ebb4de04420ec636ba7ee2ac",
    "devices_model": "samsung",
    "devices_status": 1,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711051651,
    "devicesgroup": {
  "group_name": "Unclassified"
}
},
{
  "devices_id": 58,
    "devices_name": "a",
    "devices_fd": "aa8d8c60881c144001443d9b6ba3ef90",
    "devices_model": "samsung",
    "devices_status": 0,
    "cur_task": "none",
    "start_stop": 0,
    "devices_uptime": 1711052640,
    "devicesgroup": {
  "group_name": "Unclassified"
}
}
],
  list: [
    {
      id: 1,
      username: "Admin",
      email: "tranvananh@gmail.com",
      agency: "Agency 1",
      type: "Admin",
      status: true,
    }, {
      id: 2,
      username: "User 2",
      email: "email@hotmail.com",
      agency: "Agency 1",
      type: "User",
      status: false,
    }, {
      id: 3,
      username: "User 3",
      email: "nguyenvanB@gmail.com",
      agency: "Agency 2",
      type: "User",
      status: true,
    },
    {
      id: 4,
      username: "User 4",
      email: "thanhhuyen@gmail.com",
      agency: "Agency 2",
      type: "User",
      status: true,
    }
  ],
})
const searchParams = reactive({
  deviceName: '',
  deviceGroup: '',
  deviceId: '',
  deviceModel: '',
  deviceStatus: '',
  currentTask: '',
  taskStatus: '',
  taskParameters: '',
})

const userListDialog = ref(null)

const onEdit = (row) => {
  openUserListDialog(row, 'edit')
}
onMounted(() => {
  console.log('onMounted', userListDialog.value)
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

const openUserListDialog = (user, type) => {
  userListDialog.value.open(user, type)
}
</script>
<style lang="scss" scoped>

</style>