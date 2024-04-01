<template>
  <ElCard class="mb-20 relative h-400">
    <span class="tag absolute right-0 top-4">Game</span>
    <div class="h-200">
    </div>
    <span class="status">{{ game.status }}</span>
    <h3 class="text-secondary my-6">{{ game.name }}</h3>
    <p class="text-xl font-semibold mb-4">Lượt tải: {{ game.totalDownload }}</p>
    <RatingStar :rating="game.rating" :total-rating="5"/>
    <ElButton class="w-full mt-10 text-secondary">Chi tiết/ Cập nhật thông tin</ElButton>
  </ElCard>
</template>
<script setup>
const props = defineProps({
  game: Object
})
</script>
<style lang="scss" scoped>
.tag {
  padding: 4px 8px;
  background: rgba(147, 197, 253);
  font-size: 10px;
  border-radius: 2px 0px 0px 2px;
  color: white;
}

.status {
  color: #0893C8;
  background: #E6F8FF;
  padding: 6px 8px;
  font-size: 10px;
  font-weight: bold;
}
</style>