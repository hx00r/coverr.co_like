<script setup>
import { reactive } from "vue";

const data = reactive({
  slides: {
    slides_data: [
      {
        index: 1,
        slide_url: require("@/assets/videos/slider_1.mp4"),
      },
      {
        index: 2,
        slide_url: require("@/assets/videos/slider_2.mp4"),
      },
    ],
    active_idx: 1,
  },
});
const slideAction = (out) => {
  if (out) {
    if (data.slides.active_idx > 1) {
      console.log("less than 1");
      data.slides.active_idx = data.slides.active_idx - 1;
    }
  } else {
    let calc_slide_idxs = data.slides.active_idx + 1;
    if (calc_slide_idxs <= data.slides.slides_data.length) {
      data.slides.active_idx = parseInt(calc_slide_idxs);
    }
  }
};
</script>
<template>
  <section class="home-highlights p-5 lg:pt-0 lg:p-28 mt-14 text-white">
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 md:col-span-6 highlights-box px-5">
        <h1 class="text-2xl md:text-5xl font-bold mb-10">
          Videos for every need <br />
          <span class="text-3xl font-bold">-</span> completely free
        </h1>
        <div class="text-box__text-container text-textbox-text text-md pr-4">
          <p class="mb-9">
            Our world runs on video. In a time when attention stretches every
            which way, videos cut through the noise and capture engagement
            quickly, whether you're trying to hook in new customers or inspire
            your followers.
          </p>
          <p class="mb-9">
            Explore our collection of 100% free stock videos. From b-roll
            footage that creates a seamless segue to the perfect background
            setting for music videos, our handpicked videos will elevate any
            project. Discover snow-capped mountains, dazzling urban jungles, and
            abstract twinkling lights, completely free for personal or
            commercial use. Attribution never required, always appreciated.
          </p>
          <p class="">
            Level up your next creative project, promo video, social media post,
            and more, with a few clicks and endless inspiration.
          </p>
        </div>
      </div>

      <div
        class="col-span-12 md:col-span-6 highlights-slider flex flex-col items-center overflow-hidden"
      >
        <transition-group
          name="slide"
          mode="out-in"
          enter-class="slide-in"
          leave-class="slide-out"
          enter-active-class="animated slide-in-active"
          leave-active-class="animated slide-out-active"
        >
          <div
            class="slider__video-container border-1 p-5 rounded-3xl border-textbox-text mb-1 h-fit"
            v-for="slide in data.slides.slides_data"
            :key="slide.index"
            :class="slide.index != data.slides.active_idx ? 'hidden' : 'block'"
          >
            <video :src="slide.slide_url" class="" muted autoplay loop></video>
          </div>
        </transition-group>

        <div class="slider-action flex justify-between space-x-5 mt-10">
          <button class="left-slide-action" @click="slideAction(true)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
              class="text-gray-400 hover:text-white"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <span class="slide-action-name"> Work </span>
          <button class="right-slide-action" @click="slideAction()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
              class="text-gray-400 hover:text-white"
            >
              <g transform="rotate(180 8 8)">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.animated {
  transition: all 400ms;
  position: absolute;
  transform: translate(-50%, -50%);
}

.slide-in {
  opacity: 0;
  transform: translate(-40%, -50%);
}

.slide-in-active {
  transition-delay: 150ms;
}

.slide-out {
  opacity: 1;
}

.slide-out-active {
  opacity: 0;
  transform: translate(-60%, -50%);
}
</style>
