<template>
  <MainContainer one-screen title="Danh sách người dùng">
    <template v-slot:header-action>
      <el-button plain type="primary" @click="openUserListDialog({}, 'add-new')">Thêm mới user</el-button>
    </template>
    <el-input v-model="input" :prefix-icon="Search" placeholder="Search by name..." style="width: 240px"/>
    <el-table v-loading="state.loading" :data="state.list" class-name="mt-10" row-key="id">
      <el-table-column label="Mã người dùng" prop="id"/>
      <el-table-column label="Tên đăng nhập" prop="username"/>
      <el-table-column label="Email" prop="email" width="260px"/>
      <el-table-column label="Nhóm/ Đại lý" prop="agency"></el-table-column>
      <el-table-column label="Loại" prop="type"></el-table-column>
      <el-table-column label="Trạng thái" prop="status">
        <template #default="{ row }">
          <el-switch v-model="row.status"></el-switch>
        </template>
      </el-table-column>

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
        :total="state.list.length"
        class="mt-10"
        layout="prev, pager, next"
    />
  </MainContainer>
  <UserList ref="userListDialog"/>
</template>
<script setup>
import {onMounted, reactive, ref} from "vue"
import {Search} from '@element-plus/icons-vue'
import MyIcon from '@/components/my-icon/index.vue'
import MyPagination from '@/components/my-pagination/index.vue'
import {ElMessage, ElMessageBox} from 'element-plus'
import UserList from "~/pages/app/components/dialog/UserList.vue";

const input = ''
const state = reactive({
  loading: false,
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
  ]
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