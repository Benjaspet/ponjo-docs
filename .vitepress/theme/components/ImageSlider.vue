<!-- .vitepress/theme/components/ImageSlider.vue -->
<template>
  <div class="slider">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img class="custom-img" :src="image" :alt="'Slide ' + index" />
      </div>
    </div>
    <div class="navigation">
      <button class="custom-button" @click="prevSlide">Previous</button>
      <button class="custom-button" @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
                            images: {
                              type: Array,
                              required: true,
                            },
                          });

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};
</script>

<style>
.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 20px 0;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

.custom-img {
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
}

.navigation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.custom-button {
  background-color: gray;
  color: white;
  border: none;
  padding: 10px;
  margin: 5px 0;
  width: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 10px;
}

.custom-button:hover {
  background-color: darkgray;
}

@media (max-width: 600px) {

  .custom-img {
    max-width: 300px;
  }

  .custom-button {
    width: 80%;
  }
}
</style>
