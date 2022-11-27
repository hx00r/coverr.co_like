<script setup></script>
<template>
  <section
    id="home-hero"
    class="flex items-stretch box-border overflow-hidden w-full relative"
    style="min-height: calc(100vh - 180px) !important"
  >
    <div class="video-container">
      <div
        class="video-player_container__player absolute w-full h-full lg:h-fit"
      >
        <video
          src="@/assets/videos/header_bg.mp4"
          class="video-player__video"
          autoplay
          loop
        ></video>
      </div>
    </div>

    <div class="overlay absolute top-0"></div>

    <div
      class="home-hero-baner-content-contianer flex flex-col h-full w-full p-5 lg:px-20 mt-40 z-20"
    >
      <div class="content max-w-lg">
        <div class="text-white text-4xl lg:text-5xl font-bold">
          <h1 class="tracking-tight lg:leading-snug">
            Beautiful Free Stock Video Footage
          </h1>
        </div>
        <div class="hero-search-input">
          <div
            class="top-search-container flex flex-1 items-center border-1 mr-1 mt-4 min-w-0 max-w-md h-16 p-6 border-white bg-white rounded-md"
          >
            <form action="" class="flex grow min-w-0">
              <input
                type="text"
                name="top-search-query"
                id=""
                class="bg-transparent flex-auto min-w-0 focus:outline-none text-black"
                placeholder="Search"
                autocomplete="off"
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                  class="h-auto min-w-0 text-gray-600"
                >
                  <path
                    fill="currentColor"
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div
          class="hero-trending-container text-white space-x-4 mt-5 text-md mb-24"
        >
          <span class="font-bold">Trending:</span>
          <a href="" class="text-gray-300 hover:text-white"> halloween </a>
          <a href="" class="text-gray-300 hover:text-white"> fall </a>
          <a href="" class="text-gray-300 hover:text-white"> people </a>
          <a href="" class="text-gray-300 hover:text-white"> flowers </a>
          <a href="" class="text-gray-300 hover:text-white"> christmas </a>
        </div>
      </div>
      <!-- m-5 mx-10 -->
      <div class="">
        <div
          class="video-of-the-day-container text-gray-400 right-0 bottom-5 px-10 w-full flex absolute justify-center lg:justify-end"
        >
          <a
            class="hover:text-white cursor-pointer flex space-x-1 tracking-wider"
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
            <span> Download video of the day </span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- Home Hero Video Section End -->
</template>

<style scoped>
.video-player__video {
  display: block;
  height: 100%;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  position: relative;
  transition: opacity 0.15s ease-in-out;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.467);
  height: 100%;
  width: 100%;
}
</style>
