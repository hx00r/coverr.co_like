<script setup></script>
<template>
  <!-- Home Hero Video Section End -->
  <section class="explore-collections p-5 pt-4 lg:p-20 lg:pt-16">
    <h1 class="text-white text-3xl font-bold mb-3">Explore collections</h1>
    <div class="collections-container w-full h-full">
      <div class="grid grid-cols-12 gap-5">
        <div
          class="collection-card text-white font-bold text-xl w-auto col-span-12 md:col-span-6 lg:col-span-4"
        >
          <div class="overlay-card-container relative">
            <a href="">
              <img
                src="@/assets/imgs/thumbnail.jpg"
                alt=""
                style="height: 280px !important"
              />
              <span
                class="card-inner-text absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"
              >
                <span class="z-20">Halloween</span>
                <div class="overlay-effect z-10"></div>
              </span>
            </a>
          </div>
        </div>

        <div
          class="collection-card relative text-white font-bold text-xl col-span-12 md:col-span-6 lg:col-span-4"
        >
          <div class="overlay-card-container relative">
            <a href="">
              <img
                src="@/assets/imgs/thumbnail(1).jpg"
                class=""
                alt=""
                style="height: 280px !important"
              />
              <span
                class="card-inner-text absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"
              >
                <span class="z-20">Staff Picks</span>
                <div class="overlay-effect z-10"></div>
              </span>
            </a>
          </div>
        </div>

        <div
          class="collection-card relative text-white font-bold text-xl col-span-12 md:col-span-6 lg:col-span-4"
        >
          <div class="overlay-card-container relative">
            <a href="">
              <img
                src="@/assets/imgs/thumbnail(2).jpg"
                class=""
                alt=""
                style="height: 280px !important"
              />
              <span
                class="card-inner-text absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"
              >
                <span class="z-20">Autumn Vibes</span>
                <div class="overlay-effect z-10"></div>
              </span>
            </a>
          </div>
        </div>

        <div
          class="collection-card relative text-white font-bold text-xl col-span-12 md:col-span-6 lg:col-span-3"
        >
          <div class="overlay-card-container relative">
            <a href="">
              <img
                src="@/assets/imgs/thumbnail(3).jpg"
                class=""
                alt=""
                style="height: 280px !important"
              />
              <span
                class="card-inner-text absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"
              >
                <span class="z-20"> Sustainability </span>
                <div class="overlay-effect z-10"></div>
              </span>
            </a>
          </div>
        </div>

        <div
          class="collection-card relative text-white font-bold text-xl col-span-12 md:col-span-6 lg:col-span-3"
        >
          <div class="overlay-card-container relative">
            <a href="">
              <img
                src="@/assets/imgs/thumbnail(4).jpg"
                class=""
                alt=""
                style="height: 280px !important"
              />
              <span
                class="card-inner-text absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"
              >
                <span class="z-20"> Wheels Lovers </span>
                <div class="overlay-effect z-10"></div>
              </span>
            </a>
          </div>
        </div>
        <div
          class="collection-card relative text-white font-bold text-xl col-span-12 md:col-span-6 lg:col-span-3"
        >
          <div class="overlay-card-container relative">
            <a href="">
              <img
                src="@/assets/imgs/thumbnail(5).jpg"
                class=""
                alt=""
                style="height: 280px !important"
              />
              <span
                class="card-inner-text absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"
              >
                <span class="z-20"> On The Road </span>
                <div class="overlay-effect z-10"></div>
              </span>
            </a>
          </div>
        </div>
        <div
          class="collection-card relative text-white font-bold text-xl col-span-12 md:col-span-6 lg:col-span-3"
        >
          <div class="overlay-card-container relative">
            <a href="">
              <img
                src="@/assets/imgs/thumbnail(6).jpg"
                class=""
                alt=""
                style="height: 280px !important"
              />
              <span
                class="card-inner-text absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"
              >
                <span class="z-20">Good Vibes</span>
                <div class="overlay-effect z-10"></div>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of images section -->
</template>

<style scoped>
img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}

.overlay-effect {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  transition: opacity 0.1s ease-in-out;
  background-color: rgba(0, 0, 0, 0.551);
}
.card-inner-text:hover .overlay-effect {
  opacity: 2;
}
</style>
