<template>
  <MainContainer one-screen title="Danh sách game">
    <template v-slot:header-action>
      <el-button plain type="primary">Thêm mới game</el-button>
    </template>

    <el-row :gutter="20">
      <el-col v-for="game in games" :key="game.id" :span="6">
        <CardGame :game="game"/>
      </el-col>
    </el-row>
  </MainContainer>

</template>
<script setup>
import {ref} from 'vue'
import CardGame from "~/pages/app/components/game/CardGame.vue";

const rating = ref(3)
const games = [
  {
    id: 1,
    name: "Trò chơi ném tiêu",
    description: "Game 1 description",
    status: 'Live Stream',
    rating: '4',
    totalDownload: '1000',
  }, {
    id: 2,
    name: "Trò chơi tài sửu",
    description: "Game 2 description",
    status: 'Live Stream',
    rating: '4',
    totalDownload: '1000',
  },
  {
    id: 3,
    name: "Trò chơi poker",
    description: "Game 3 description",
    status: 'Live Stream',
    rating: '4',
    totalDownload: '1000',
  },
  {
    id: 4,
    name: "Trò chơi bắn súng",
    description: "Game 4 description",
    status: 'Live Stream',
    rating: '4',
    totalDownload: '1000',
  },
  {
    id: 5,
    name: "Trò chơi blackjack",
    description: "Game 5 description",
    status: 'Live Stream',
    rating: '4',
    totalDownload: '1000',
  },
  {
    id: 6,
    name: "Trò chơi bắn súng",
    description: "Game 5 description",
    status: 'Live Stream',
    rating: '4',
    totalDownload: '1000',
  }
]
</script>
<style lang="scss" scoped>

</style>