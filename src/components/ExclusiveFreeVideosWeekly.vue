<script setup></script>
<template>
  <section class="home-exclusive text-white bg-ligh-dark-bg px-10">
    <div class="grid grid-cols-12 gap-0">
      <div
        class="exclusive-box col-span-12 lg:col-span-6 flex flex-col justify-center items-center lg:justify-start lg:items-start py-20"
      >
        <h4 class="text-2xl font-bold mb-5">Exclusive free videos weekly</h4>
        <p class="text-textbox-text max-w-md lg:text-start text-center">
          Join the Coverr community and get exclusive videos and special offers
          every week. Unlock our curated collection by entering your email
          below.
        </p>
        <div
          class="flex items-center w-full border-1 mt-5 min-w-0 max-w-md h-10 py-7 px-3 border-gray-300 hover:border-white transition-colors rounded-md"
        >
          <form action="" method="post" class="flex flex-auto min-w-0">
            <input
              type="email"
              name="exclusive-contact-email"
              id=""
              class="bg-transparent flex-auto min-w-0 focus:outline-none placeholder:text-gray-300"
              placeholder="Enter your email"
              autocomplete="off"
              required
            />
            <button>
              <svg
                width="25"
                viewBox="0 0 512 384"
                xmlns="http://www.w3.org/2000/svg"
                class="hover:fill-white transition-colors fill-gray-300"
              >
                <path
                  d="M502.3 126.8C506.2 123.7 512 126.6 512 131.5V336C512 362.5 490.5 384 464 384H48C21.5 384 0 362.5 0 336V131.6C0 126.6 5.7 123.8 9.7 126.9C32.1 144.3 61.8 166.4 163.8 240.5C184.9 255.9 220.5 288.3 256 288.1C291.7 288.4 328 255.3 348.3 240.5C450.3 166.4 479.9 144.2 502.3 126.8ZM256 256C279.2 256.4 312.6 226.8 329.4 214.6C462.1 118.3 472.2 109.9 502.8 85.9C508.6 81.4 512 74.4 512 67V48C512 21.5 490.5 0 464 0H48C21.5 0 0 21.5 0 48V67C0 74.4 3.4 81.3 9.2 85.9C39.8 109.8 49.9 118.3 182.6 214.6C199.4 226.8 232.8 256.4 256 256Z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div class="home-exclusive-imageview-container col-span-12 lg:col-span-6">
        <div class="imageview-container flex gap-3 max-h-96 overflow-hidden">
          <div class="first-imageview-row space-y-3 move-image-first-row">
            <img
              src="@/assets/imgs/exclusive-images-view/f1.webp"
              class="rounded-md"
              alt=""
            />
            <img
              src="@/assets/imgs/exclusive-images-view/f2.webp"
              class="rounded-md"
              alt=""
            />
            <img
              src="@/assets/imgs/exclusive-images-view/f3.webp"
              class="rounded-md"
              alt=""
            />
            <img
              src="@/assets/imgs/exclusive-images-view/f4.webp"
              class="rounded-md"
              alt=""
            />
          </div>
          <div class="second-imageview-row space-y-3 move-image-second-row">
            <img
              src="@/assets/imgs/exclusive-images-view/s1.webp"
              class="rounded-md"
              alt=""
            />
            <img
              src="@/assets/imgs/exclusive-images-view/s2.webp"
              class="rounded-md"
              alt=""
            />
            <img
              src="@/assets/imgs/exclusive-images-view/s3.webp"
              class="rounded-md"
              alt=""
            />
            <img
              src="@/assets/imgs/exclusive-images-view/s4.webp"
              class="rounded-md"
              alt=""
            />
          </div>
          <div class="third-imageview-row space-y-3 move-image-third-row">
            <img
              src="@/assets/imgs/exclusive-images-view/t1.webp"
              class="rounded-md"
              alt=""
            />
            <img
              src="@/assets/imgs/exclusive-images-view/t2.webp"
              class="rounded-md"
              alt=""
            />
            <img
              src="@/assets/imgs/exclusive-images-view/t3.webp"
              class="rounded-md"
              alt=""
            />
            <img
              src="@/assets/imgs/exclusive-images-view/t4.webp"
              class="rounded-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* .move-image {
    animation: move 25s infinite linear;
} */

.move-image-first-row {
  -webkit-animation: moverFirstRow 20s infinite alternate;
  animation: moverFirstRow 20s infinite alternate;
}
.move-image-second-row {
  -webkit-animation: moverSecondRow 20s infinite alternate;
  animation: moverSecondRow 20s infinite alternate;
}
.move-image-third-row {
  -webkit-animation: moverFirstRow 20s infinite alternate;
  animation: moverFirstRow 20s infinite alternate;
}

@-webkit-keyframes moverFirstRow {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
@keyframes moverFirstRow {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100px);
  }
}

@-webkit-keyframes moverSecondRow {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-40px);
  }
}
@keyframes moverSecondRow {
  0% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(-150px);
  }
}
</style>
