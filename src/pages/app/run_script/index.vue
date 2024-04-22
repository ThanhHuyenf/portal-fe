<script setup>
import {reactive, ref} from "vue"

const state = reactive({
  loading: false,
  data:  {
    "devices_group": [
      "1"
    ],
    "run_time": "1696844340",
    "run_type": "1",
    "run_script": "1",
    "run_param": "账号----aaa|密码----bbb"
  },
  "sql_field_data": {
    "devices_groups": [
      {
        "key": "Unclassified",
        "val": 1
      },
      {
        "key": "Group 1",
        "val": 2
      },
      {
        "key": "Group 2",
        "val": 3
      },
      {
        "key": "Group 3",
        "val": 4
      },
      {
        "key": "Test Group",
        "val": 5
      }
    ],
    "run_scripts": [
      {
        "key": "Test Script",
        "val": 1
      }
    ]
  }
})
</script>
<template>
  <MainContainer one-screen title="Danh sách device group">
    <el-form label-position="right"
             label-width="auto">
      <el-form-item :label="group">

      </el-form-item>
    </el-form>

  </MainContainer>
</template>
<style lang="scss" scoped>

</style>