<script setup>
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
</script>

<template>
	<el-config-provider :locale="en">
		<router-view />
	</el-config-provider>
</template>

<style lang="scss"></style>
