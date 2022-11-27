<script setup>
import { reactive } from "vue";
const data = reactive({
  current_video: false,
});
const playVid = (e) => {
  let a_children = e.path[1];
  let video_trigger = a_children.childNodes[1];
  if (video_trigger.tagName === "VIDEO") {
    data.current_video = video_trigger;
    video_trigger.play();
  }
};
const stopVid = () => {
  data.current_video.pause();
  data.current_video.currentTime = 0;
};
</script>
<template>
  <section class="popular-shutterstock-videos bg-black p-5 lg:pt-6 lg:px-20">
    <h1 class="text-white text-2xl font-bold mb-5">
      Popular Shutterstock Videos
    </h1>
    <div class="shutterstock-container grid grid-cols-12 gap-5">
      <!--  -->
      <div
        class="video-card-container col-span-6 md:col-span-4 lg:col-span-3 cursor-pointer"
        @mouseover="playVid($event)"
        @mouseleave="stopVid()"
      >
        <div class="relative">
          <a href="" class="">
            <img
              src="@/assets/videos/shutterstock/1.webp"
              class="absolute top-0 bottom-0 left-0 right-0 hover:opacity-0 z-20"
              alt=""
            />
            <video
              src="@/assets/videos/shutterstock/1.mp4"
              muted
              loop
              class=""
            ></video>
          </a>
          <span
            class="text-white text-md z-10 px-3 mb-3 truncate absolute left-0 right-0 bottom-0 top-auto"
          >
            Metaverse VR virtual reality game playing, man and woman play
            metaverse virtual digital technology game control with VR goggle
          </span>
        </div>
      </div>
      <!--  -->
      <div
        class="video-card-container col-span-6 md:col-span-4 lg:col-span-3 cursor-pointer"
        @mouseover="playVid($event)"
        @mouseleave="stopVid()"
      >
        <div class="relative">
          <a href="" class="">
            <img
              src="@/assets/videos/shutterstock/2.jpg"
              class="absolute top-0 bottom-0 left-0 right-0 hover:opacity-0 z-20"
              alt=""
            />
            <video
              src="@/assets/videos/shutterstock/2.mp4"
              muted
              loop
              class=""
            ></video>
          </a>
          <span
            class="text-white text-md z-10 px-3 mb-3 truncate absolute left-0 right-0 bottom-0 top-auto"
          >
            Car Factory 3D Concept: Automated Robot Arm Assembly Line
            Manufacturing Advanced High-Tech Green Energy Electric Vehicles.
            Construction, Building, Welding Industrial Production Conveyor.
            Close-up
          </span>
        </div>
      </div>
      <!--  -->
      <div
        class="video-card-container col-span-6 md:col-span-4 lg:col-span-3 cursor-pointer"
        @mouseover="playVid($event)"
        @mouseleave="stopVid()"
      >
        <div class="relative">
          <a href="" class="">
            <img
              src="@/assets/videos/shutterstock/3.jpg"
              class="absolute top-0 bottom-0 left-0 right-0 hover:opacity-0 z-20"
              alt=""
            />
            <video
              src="@/assets/videos/shutterstock/3.mp4"
              muted
              loop
              class=""
            ></video>
          </a>
          <span
            class="text-white text-md z-10 px-3 mb-3 truncate absolute left-0 right-0 bottom-0 top-auto"
          >
            Bright motion timelapse of a speedy night drive in a big city, side
            view from the car window to the road and glittering streets and
            buildings all turning into colorful light trails.
          </span>
        </div>
      </div>
      <!--  -->
      <div
        class="video-card-container col-span-6 md:col-span-4 lg:col-span-3 cursor-pointer"
        @mouseover="playVid($event)"
        @mouseleave="stopVid()"
      >
        <div class="relative">
          <a href="" class="">
            <img
              src="@/assets/videos/shutterstock/4.jpg"
              class="absolute top-0 bottom-0 left-0 right-0 hover:opacity-0 z-20"
              alt=""
            />
            <video
              src="@/assets/videos/shutterstock/4.mp4"
              muted
              loop
              class=""
            ></video>
          </a>
          <span
            class="text-white text-md z-10 px-3 mb-3 truncate absolute left-0 right-0 bottom-0 top-auto"
          >
            Abstract Tech Earth Globalization in 3d Motion Graphic. Concept
            Transmit Ai Networking on Fiber Optic. Transfer 5g Web
            Communications Signal on Worldwide. Global Business Dots on Rotating
            Blue Planet
          </span>
        </div>
      </div>
      <!--  -->
    </div>
  </section>
</template>
<style scoped></style>
