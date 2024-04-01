<template>
  <div class="wrapper">
    <span v-for="star in totalRating"
          :key="star"
          :class="{ filled:star <= rating, noHover: !blockClick }"
          class="star"
          @click="setRating(star)"
    >★</span>
  </div>
</template>
<script>
export default {name: 'RatingStar'}
</script>
<script setup>
import {defineProps} from "vue";
import {defineEmits} from "vue";

const props = defineProps({
  rating: Number,
  totalRating: Number,
  blockClick: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(["update-rating:value"])
const setRating = (star) => {
  if (!props.blockClick) return;
  emits("update-rating", star);
};

</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 2px;
}

.star {
  cursor: pointer;
  color: #d8d8d8;
}

.star:hover,
.star:active,
.star.filled {
  color: orange;
}

.noHover {
  pointer-events: none;
}
</style>