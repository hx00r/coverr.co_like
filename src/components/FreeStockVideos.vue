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
  <!-- Home Hero Video Section End -->
  <!-- End of images section -->
  <section class="free-stock-videos-container p-5 lg:pt-0 lg:p-20">
    <div class="header-container flex justify-between">
      <h1 class="text-white text-3xl font-bold mb-10">Free Stock Videos</h1>
      <button>
        <span class="text-gray-400 mr-4 text-md"> Sort By </span>
        <span class="text-white"> Newest </span>
      </button>
    </div>
    <div class="grid grid-cols-12 gap-5">
      <!--  -->
      <div
        class="video-card-container col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 w-full h-full cursor-pointer"
        @mouseover="playVid($event)"
        @mouseleave="stopVid()"
      >
        <div class="relative">
          <a href="" class="">
            <img
              src="@/assets/videos/free_stock_videos/img1.webp"
              class="absolute top-0 bottom-0 left-0 right-0 hover:opacity-0 z-10"
              alt=""
            />
            <video
              src="@/assets/videos/free_stock_videos/vid1.mp4"
              muted
              loop
              class=""
            ></video>
          </a>
          <div
            class="video-overlay-top-bottom justify-between absolute top-0 bottom-0 left-0 right-0 flex flex-col"
          >
            <div
              class="top-video-overlay overlay-gradient-bg w-full p-5 flex justify-end text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="15"
              >
                <path
                  fill="currentColor"
                  d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
                ></path>
              </svg>
            </div>
            <div
              class="bottom-video-overlay overlay-gradient-bg-bottom w-full p-5 flex justify-end text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="15"
              >
                <path
                  fill="currentColor"
                  d="M360 431.1H24c-13.25 0-24 10.76-24 24.02C0 469.2 10.75 480 24 480h336c13.25 0 24-10.76 24-24.02C384 442.7 373.3 431.1 360 431.1zM302.5 207.7L216 299.7v-243.6C216 42.76 205.3 32 192 32S168 42.76 168 56.02v243.6L81.47 207.7C76.75 202.6 70.38 200.1 64 200.1c-5.906 0-11.81 2.158-16.44 6.536c-9.656 9.069-10.12 24.27-1.031 33.93l128 136.1c9.062 9.694 25.88 9.694 34.94 0l128-136.1c9.094-9.663 8.625-24.86-1.031-33.93C326.8 197.5 311.6 197.1 302.5 207.7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div
        class="video-card-container col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 w-full h-full cursor-pointer"
        @mouseover="playVid($event)"
        @mouseleave="stopVid()"
      >
        <div class="relative">
          <a href="" class="">
            <img
              src="@/assets/videos/free_stock_videos/img2.webp"
              class="absolute top-0 bottom-0 left-0 right-0 hover:opacity-0 z-10"
              alt=""
            />
            <video
              src="@/assets/videos/free_stock_videos/vid2.mp4"
              muted
              loop
              class=""
            ></video>
          </a>
          <div
            class="video-overlay-top-bottom justify-between absolute top-0 bottom-0 left-0 right-0 flex flex-col"
          >
            <div
              class="top-video-overlay overlay-gradient-bg w-full p-5 flex justify-end text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="15"
              >
                <path
                  fill="currentColor"
                  d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
                ></path>
              </svg>
            </div>
            <div
              class="bottom-video-overlay overlay-gradient-bg-bottom w-full p-5 flex justify-end text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="15"
              >
                <path
                  fill="currentColor"
                  d="M360 431.1H24c-13.25 0-24 10.76-24 24.02C0 469.2 10.75 480 24 480h336c13.25 0 24-10.76 24-24.02C384 442.7 373.3 431.1 360 431.1zM302.5 207.7L216 299.7v-243.6C216 42.76 205.3 32 192 32S168 42.76 168 56.02v243.6L81.47 207.7C76.75 202.6 70.38 200.1 64 200.1c-5.906 0-11.81 2.158-16.44 6.536c-9.656 9.069-10.12 24.27-1.031 33.93l128 136.1c9.062 9.694 25.88 9.694 34.94 0l128-136.1c9.094-9.663 8.625-24.86-1.031-33.93C326.8 197.5 311.6 197.1 302.5 207.7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div
        class="video-card-container col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 w-full h-full cursor-pointer"
        @mouseover="playVid($event)"
        @mouseleave="stopVid()"
      >
        <div class="relative">
          <a href="" class="">
            <img
              src="@/assets/videos/free_stock_videos/img3.webp"
              class="absolute top-0 bottom-0 left-0 right-0 hover:opacity-0 z-10"
              alt=""
            />
            <video
              src="@/assets/videos/free_stock_videos/vid3.mp4"
              muted
              loop
              class=""
            ></video>
          </a>
          <div
            class="video-overlay-top-bottom justify-between absolute top-0 bottom-0 left-0 right-0 flex flex-col"
          >
            <div
              class="top-video-overlay overlay-gradient-bg w-full p-5 flex justify-end text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="15"
              >
                <path
                  fill="currentColor"
                  d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
                ></path>
              </svg>
            </div>
            <div
              class="bottom-video-overlay overlay-gradient-bg-bottom w-full p-5 flex justify-end text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="15"
              >
                <path
                  fill="currentColor"
                  d="M360 431.1H24c-13.25 0-24 10.76-24 24.02C0 469.2 10.75 480 24 480h336c13.25 0 24-10.76 24-24.02C384 442.7 373.3 431.1 360 431.1zM302.5 207.7L216 299.7v-243.6C216 42.76 205.3 32 192 32S168 42.76 168 56.02v243.6L81.47 207.7C76.75 202.6 70.38 200.1 64 200.1c-5.906 0-11.81 2.158-16.44 6.536c-9.656 9.069-10.12 24.27-1.031 33.93l128 136.1c9.062 9.694 25.88 9.694 34.94 0l128-136.1c9.094-9.663 8.625-24.86-1.031-33.93C326.8 197.5 311.6 197.1 302.5 207.7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div
        class="video-card-container col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 w-full h-full cursor-pointer"
        @mouseover="playVid($event)"
        @mouseleave="stopVid()"
      >
        <div class="relative">
          <a href="" class="">
            <img
              src="@/assets/videos/free_stock_videos/img4.webp"
              class="absolute top-0 bottom-0 left-0 right-0 hover:opacity-0 z-10"
              alt=""
            />
            <video
              src="@/assets/videos/free_stock_videos/vid4.mp4"
              muted
              loop
              class=""
            ></video>
          </a>
          <div
            class="video-overlay-top-bottom justify-between absolute top-0 bottom-0 left-0 right-0 flex flex-col"
          >
            <div
              class="top-video-overlay overlay-gradient-bg w-full p-5 flex justify-end text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="15"
              >
                <path
                  fill="currentColor"
                  d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
                ></path>
              </svg>
            </div>
            <div
              class="bottom-video-overlay overlay-gradient-bg-bottom w-full p-5 flex justify-end text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="15"
              >
                <path
                  fill="currentColor"
                  d="M360 431.1H24c-13.25 0-24 10.76-24 24.02C0 469.2 10.75 480 24 480h336c13.25 0 24-10.76 24-24.02C384 442.7 373.3 431.1 360 431.1zM302.5 207.7L216 299.7v-243.6C216 42.76 205.3 32 192 32S168 42.76 168 56.02v243.6L81.47 207.7C76.75 202.6 70.38 200.1 64 200.1c-5.906 0-11.81 2.158-16.44 6.536c-9.656 9.069-10.12 24.27-1.031 33.93l128 136.1c9.062 9.694 25.88 9.694 34.94 0l128-136.1c9.094-9.663 8.625-24.86-1.031-33.93C326.8 197.5 311.6 197.1 302.5 207.7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div
        class="video-card-container col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 w-full h-full cursor-pointer"
        @mouseover="playVid($event)"
        @mouseleave="stopVid()"
      >
        <div class="relative">
          <a href="" class="">
            <img
              src="@/assets/videos/free_stock_videos/img5.webp"
              class="absolute top-0 bottom-0 left-0 right-0 hover:opacity-0 z-10"
              alt=""
            />
            <video
              src="@/assets/videos/free_stock_videos/vid5.mp4"
              muted
              loop
              class=""
            ></video>
          </a>
          <div
            class="video-overlay-top-bottom justify-between absolute top-0 bottom-0 left-0 right-0 flex flex-col"
          >
            <div
              class="top-video-overlay overlay-gradient-bg w-full p-5 flex justify-end text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="15"
              >
                <path
                  fill="currentColor"
                  d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
                ></path>
              </svg>
            </div>
            <div
              class="bottom-video-overlay overlay-gradient-bg-bottom w-full p-5 flex justify-end text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="15"
              >
                <path
                  fill="currentColor"
                  d="M360 431.1H24c-13.25 0-24 10.76-24 24.02C0 469.2 10.75 480 24 480h336c13.25 0 24-10.76 24-24.02C384 442.7 373.3 431.1 360 431.1zM302.5 207.7L216 299.7v-243.6C216 42.76 205.3 32 192 32S168 42.76 168 56.02v243.6L81.47 207.7C76.75 202.6 70.38 200.1 64 200.1c-5.906 0-11.81 2.158-16.44 6.536c-9.656 9.069-10.12 24.27-1.031 33.93l128 136.1c9.062 9.694 25.88 9.694 34.94 0l128-136.1c9.094-9.663 8.625-24.86-1.031-33.93C326.8 197.5 311.6 197.1 302.5 207.7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div
        class="video-card-container col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 w-full h-full cursor-pointer"
        @mouseover="playVid($event)"
        @mouseleave="stopVid()"
      >
        <div class="relative">
          <a href="" class="">
            <img
              src="@/assets/videos/free_stock_videos/img6.webp"
              class="absolute top-0 bottom-0 left-0 right-0 hover:opacity-0 z-10"
              alt=""
            />
            <video
              src="@/assets/videos/free_stock_videos/vid6.mp4"
              muted
              loop
              class=""
            ></video>
          </a>
          <div
            class="video-overlay-top-bottom justify-between absolute top-0 bottom-0 left-0 right-0 flex flex-col"
          >
            <div
              class="top-video-overlay overlay-gradient-bg w-full p-5 flex justify-end text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="15"
              >
                <path
                  fill="currentColor"
                  d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
                ></path>
              </svg>
            </div>
            <div
              class="bottom-video-overlay overlay-gradient-bg-bottom w-full p-5 flex justify-end text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="15"
              >
                <path
                  fill="currentColor"
                  d="M360 431.1H24c-13.25 0-24 10.76-24 24.02C0 469.2 10.75 480 24 480h336c13.25 0 24-10.76 24-24.02C384 442.7 373.3 431.1 360 431.1zM302.5 207.7L216 299.7v-243.6C216 42.76 205.3 32 192 32S168 42.76 168 56.02v243.6L81.47 207.7C76.75 202.6 70.38 200.1 64 200.1c-5.906 0-11.81 2.158-16.44 6.536c-9.656 9.069-10.12 24.27-1.031 33.93l128 136.1c9.062 9.694 25.88 9.694 34.94 0l128-136.1c9.094-9.663 8.625-24.86-1.031-33.93C326.8 197.5 311.6 197.1 302.5 207.7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </section>
</template>

<style scoped>
.overlay-gradient-bg {
  background: linear-gradient(
    to bottom,
    rgba(23, 23, 25, 0.65),
    rgba(23, 23, 25, 0.482) 60%,
    transparent 100%
  ) !important;
}
.overlay-gradient-bg-bottom {
  align-items: center;
  background: linear-gradient(
    to top,
    rgba(23, 23, 25, 0.65),
    rgba(23, 23, 25, 0.482) 60%,
    transparent 100%
  );
  transition: transform 0.15s ease-in-out;
  transform: translateY(4px);
}
</style>
