<script setup>
import { reactive, onMounted } from "vue";
const data = reactive({
  modal_display: false,
  context_menu: false,
  dark_navbar: false,
});
const toggleContextMenu = (e) => {
  if (e.path[1].id == "toggleContextMenuButton") {
    data.context_menu = true;
  } else {
    data.context_menu = false;
  }
};
onMounted(() => {
  document.body.addEventListener("click", (e) => toggleContextMenu(e));
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > 10) {
      data.dark_navbar = true;
    } else {
      data.dark_navbar = false;
    }
  });
});
</script>
<template>
  <header
    class="main-header text-white px-2 sm:px-4 md:px-6 lg:px-8 pb-3 z-50 fixed top-0 max-w-full"
    :class="
      data.dark_navbar
        ? 'bg-primary-dark shadow-md transition-colors '
        : 'bg-transparent'
    "
  >
    <!-- Start of top section -->
    <div class="top-section flex items-center justify-between h-24">
      <div class="logo box-border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 742 132"
          width="200"
          class="text-white hidden lg:block"
          id="large-topnav-logo"
        >
          <path
            d="M17.8753 112.892C5.95843 100.096 0 84.494 0 65.9123C0 47.1554 5.95843 31.5538 17.8753 19.1076C29.9674 6.31076 45.0387 0 62.914 0C70.4497 0 82.3666 0 82.3666 0C82.3666 0 72.2022 26.6454 62.5635 26.6454C52.0487 26.6454 43.2863 30.3267 36.1011 37.8645C29.2664 45.4024 25.5862 54.6932 25.5862 65.9123C25.5862 77.1315 29.0912 86.4223 36.1011 93.9602C43.2863 101.498 52.0487 105.179 62.5635 105.179C71.3259 105.179 76.5834 131.825 76.5834 131.825C76.5834 131.825 71.5012 131.825 62.7388 131.825C45.0387 132 29.9674 125.689 17.8753 112.892Z"
            fill="#0072BB"
          ></path>
          <path
            d="M34.699 112.892C22.7822 100.096 16.8237 84.494 16.8237 65.9123C16.8237 47.1554 22.7822 31.5538 34.699 19.1076C46.7911 6.31076 61.8625 0 79.7378 0C87.2734 0 99.1903 0 99.1903 0C99.1903 0 89.0259 26.6454 79.3873 26.6454C68.8724 26.6454 60.11 30.3267 52.9248 37.8645C46.0901 45.4024 42.4099 54.6932 42.4099 65.9123C42.4099 77.1315 45.9149 86.4223 52.9248 93.9602C60.11 101.498 68.8724 105.179 79.3873 105.179C88.1497 105.179 93.4071 131.825 93.4071 131.825C93.4071 131.825 88.3249 131.825 79.5625 131.825C61.8625 132 46.7911 125.689 34.699 112.892Z"
            fill="#7DC24B"
          ></path>
          <path
            d="M51.523 112.892C39.6061 100.096 33.6477 84.494 33.6477 65.9123C33.6477 47.1554 39.6061 31.5538 51.523 18.9323C63.7904 6.31076 78.6864 0 96.5617 0C104.097 0 116.014 0 116.014 0C116.014 0 106.025 26.6454 96.3865 26.6454C85.8716 26.6454 77.1092 30.3267 69.924 37.8645C63.0894 45.4024 59.4092 54.6932 59.4092 65.9123C59.4092 77.1315 62.9141 86.4223 69.924 93.9602C77.1092 101.673 85.8716 105.355 96.3865 105.355C105.149 105.355 110.406 132 110.406 132C110.406 132 105.324 132 96.5617 132C78.6864 132 63.7904 125.689 51.523 112.892Z"
            fill="#FED035"
          ></path>
          <path
            d="M68.3467 112.892C56.4299 100.096 50.4714 84.494 50.4714 65.9123C50.4714 47.1554 56.4299 31.5538 68.3467 18.9323C80.6141 6.31076 95.5102 0 113.385 0C120.921 0 132.838 0 132.838 0C132.838 0 122.674 26.6454 113.035 26.6454C102.52 26.6454 93.7577 30.3267 86.5725 37.8645C79.7378 45.4024 76.0576 54.6932 76.0576 65.9123C76.0576 77.1315 79.5626 86.4223 86.5725 93.9602C93.7577 101.498 102.52 105.179 113.035 105.179C121.797 105.179 127.055 131.825 127.055 131.825C127.055 131.825 121.973 131.825 113.21 131.825C95.5102 132 80.6141 125.689 68.3467 112.892Z"
            fill="#FF4C3D"
          ></path>
          <path
            d="M86.0467 112.892C74.1298 100.096 68.1714 84.494 68.1714 65.9123C68.1714 47.1554 74.1298 31.5538 86.0467 18.9323C98.1388 6.31076 113.21 0 131.085 0C154.218 0 174.722 12.6215 184.186 32.4303L162.104 45.9283C156.672 33.8327 145.105 26.6454 130.91 26.6454C120.395 26.6454 111.633 30.3267 104.448 37.8645C97.613 45.4024 93.9328 54.6932 93.9328 65.9123C93.9328 77.1315 97.4378 86.4223 104.448 93.9602C111.633 101.498 120.395 105.179 130.91 105.179C144.93 105.179 156.847 97.6414 162.63 85.8964L184.711 99.2191C174.547 119.378 154.218 132 131.085 132C113.21 132 98.1388 125.689 86.0467 112.892Z"
            fill="currentColor"
          ></path>
          <path
            d="M213.102 112.892C201.01 100.096 194.701 84.494 194.701 65.9123C194.701 47.3307 200.835 31.7291 213.102 18.9323C225.194 6.31076 240.265 0 257.615 0C275.315 0 290.036 6.31076 302.128 19.1076C314.22 31.9044 320.529 47.506 320.529 66.0876C320.529 84.6693 314.395 100.271 302.128 113.068C290.036 125.865 275.14 132.175 257.615 132.175C240.265 132 225.194 125.689 213.102 112.892ZM257.615 105.705C268.13 105.705 276.892 102.024 284.077 94.4861C291.263 86.9482 294.768 77.4821 294.768 66.0876C294.768 54.8685 291.263 45.2271 284.077 37.6892C276.892 30.1514 268.13 26.2948 257.615 26.2948C247.1 26.2948 238.338 29.9761 231.153 37.5139C223.967 45.0518 220.462 54.5179 220.462 65.9123C220.462 77.1315 223.967 86.7729 231.153 94.3108C238.338 101.849 247.1 105.705 257.615 105.705Z"
            fill="currentColor"
          ></path>
          <path
            d="M419.895 3.33057H447.934L401.494 128.844H371.701L325.261 3.33057H353.3L386.598 98.6931L419.895 3.33057Z"
            fill="currentColor"
          ></path>
          <path
            d="M479.654 77.4821C483.509 96.5896 498.055 107.108 517.858 107.108C531.527 107.108 541.691 101.849 548.526 91.506L569.731 104.478C557.989 122.709 540.64 131.825 517.507 131.825C498.23 131.825 482.457 125.514 470.541 113.243C458.624 100.622 452.665 84.8446 452.665 65.7371C452.665 46.9801 458.624 31.3785 470.365 18.757C482.107 6.31076 497.354 0 515.755 0C533.104 0 547.475 6.48606 558.69 19.2829C569.906 32.0797 575.689 47.8566 575.689 66.2629C575.689 69.0677 575.514 72.749 574.813 77.4821H479.654ZM549.578 55.3944C546.073 35.0598 532.403 24.5418 515.579 24.5418C496.477 24.5418 483.158 36.2869 479.654 55.3944H549.578Z"
            fill="currentColor"
          ></path>
          <path
            d="M623.883 24.366C630.367 8.76442 642.634 1.05127 660.51 1.05127V30.3262C650.696 29.625 642.109 32.0792 634.748 37.864C627.388 43.2983 623.707 52.5891 623.707 65.3859V128.669H597.946V3.33015H623.883V24.366Z"
            fill="currentColor"
          ></path>
          <path
            d="M705.374 24.366C711.858 8.76442 724.125 1.05127 742 1.05127V30.3262C732.187 29.625 723.599 32.0792 716.239 37.864C708.879 43.2983 705.198 52.5891 705.198 65.3859V128.669H679.437V3.33015H705.198V24.366H705.374Z"
            fill="currentColor"
          ></path>
        </svg>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="block lg:hidden"
          id="small-topnav-logo"
        >
          <path
            d="M30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15Z"
            fill="currentColor"
            class="icon-bg"
          ></path>
          <path
            d="M13.0825 20.9095C12.4588 20.3014 11.7259 19.7713 11.149 19.132C10.1667 18.0405 9.62093 16.5904 9.60533 15.1092C9.57414 12.2557 11.5544 10.1663 13.5346 8.29519C13.1448 8.21722 12.7238 8.18604 12.3184 8.18604C10.4473 8.18604 8.90367 8.82534 7.65626 10.1507C6.40886 11.4761 5.78516 13.0665 5.78516 15C5.78516 16.9335 6.39327 18.5395 7.65626 19.8492C8.91926 21.159 10.4473 21.8139 12.3184 21.8139C12.833 21.8139 13.3163 21.7515 13.7997 21.6424C13.5502 21.3928 13.3163 21.159 13.0825 20.9095Z"
            fill="#0072BB"
          ></path>
          <path
            d="M14.6098 20.9095C13.9861 20.3014 13.2532 19.7713 12.6763 19.132C11.694 18.0405 11.1483 16.5904 11.1327 15.1092C11.1015 12.2557 13.0817 10.1663 15.062 8.29519C14.6722 8.21722 14.2512 8.18604 13.8458 8.18604C11.9747 8.18604 10.431 8.82534 9.18361 10.1507C7.9362 11.4761 7.3125 13.0665 7.3125 15C7.3125 16.9335 7.92062 18.5395 9.18361 19.8492C10.4466 21.159 11.9747 21.8139 13.8458 21.8139C14.3603 21.8139 14.8437 21.7515 15.3271 21.6424C15.0932 21.3928 14.8593 21.159 14.6098 20.9095Z"
            fill="#7DC24B"
          ></path>
          <path
            d="M16.139 20.9095C15.5153 20.3014 14.7825 19.7713 14.2056 19.132C13.2233 18.0405 12.6776 16.5904 12.662 15.1092C12.6308 12.2557 14.611 10.1663 16.5913 8.29519C16.2014 8.21722 15.7804 8.18604 15.3751 8.18604C13.504 8.18604 11.9603 8.82534 10.7129 10.1507C9.4655 11.4761 8.8418 13.0665 8.8418 15C8.8418 16.9335 9.44991 18.5395 10.7129 19.8492C11.9759 21.159 13.504 21.8139 15.3751 21.8139C15.8896 21.8139 16.373 21.7515 16.8563 21.6424C16.6225 21.3928 16.3886 21.159 16.139 20.9095Z"
            fill="#FED035"
          ></path>
          <path
            d="M17.6664 20.9095C17.0427 20.3014 16.3099 19.7713 15.733 19.132C14.7506 18.0405 14.2049 16.5904 14.1893 15.1092C14.1581 12.2557 16.1383 10.1663 18.1186 8.29519C17.7288 8.21722 17.3079 8.18604 16.9024 8.18604C15.0313 8.18604 13.4876 8.82534 12.2402 10.1507C10.9928 11.4761 10.3691 13.0665 10.3691 15C10.3691 16.9335 10.9773 18.5395 12.2402 19.8492C13.5032 21.159 15.0313 21.8139 16.9024 21.8139C17.4169 21.8139 17.9004 21.7515 18.3837 21.6424C18.1498 21.3928 17.916 21.159 17.6664 20.9095Z"
            fill="#FF4C3D"
          ></path>
          <path
            d="M13.9707 19.8492C12.7233 18.5395 12.0996 16.9335 12.0996 15C12.0996 13.0665 12.7077 11.4605 13.9707 10.1507C15.2337 8.84092 16.7617 8.18604 18.6328 8.18604C21.0654 8.18604 23.1391 9.48022 24.2305 11.5228L20.7535 13.6434C20.3169 12.7858 19.5996 12.3804 18.6172 12.3804C17.2452 12.3804 16.216 13.4719 16.216 15.0156C16.216 16.5592 17.2452 17.6506 18.6172 17.6506C19.6152 17.6506 20.3325 17.2141 20.7535 16.3566L24.2305 18.4771C23.1547 20.5353 21.0654 21.8295 18.6328 21.8295C16.7617 21.8139 15.2181 21.1746 13.9707 19.8492Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div class="flex-auto min-w-0 px-5">
        <div
          class="top-search-container flex items-center border-1 mr-1 min-w-0 max-w-md h-10 p-6 border-white rounded-md"
        >
          <form action="" class="flex flex-auto min-w-0">
            <input
              type="text"
              name="top-search-query"
              id=""
              class="bg-transparent flex-auto min-w-0 focus:outline-none"
              placeholder="Search"
              autocomplete="off"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
                color="white"
                class="h-auto min-w-0"
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
      <nav
        id="top-nav-items-nav"
        class="items-center hidden text-gray-300 md:flex space-x-3 md:space-x-4 lg:space-x-7 min-w-max"
      >
        <a href="" class="hover:text-white">Video</a>
        <a
          href=""
          class="text-gray-400 hover:text-white h-11 flex items-center"
        >
          <span class="text-gray-400 hover:text-white">Music</span>
          <div
            class="px-2 rounded-xl text-sm text-black bg-padge-color mb-auto"
          >
            beta
          </div>
        </a>
        <div class="h-7 border-l-1 border-white"></div>
        <a href="" class="hover:text-white"> Get 10 Free Images</a>
        <div class="relative">
          <button
            @click="data.context_menu = !data.context_menu"
            id="toggleContextMenuButton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
              class="text-xl hover:text-white"
            >
              <path
                fill="currentColor"
                d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"
              />
            </svg>
          </button>
          <div
            class="absolute w-80 h-72 rounded-md bg-ligh-dark-bg right-0"
            v-show="data.context_menu"
          >
            <div>
              <div class="flex p-7 pb-3 grow items-center">
                <div class="flex flex-col">
                  <a class="menu-link mb-3 hover:text-white" href="#">
                    About
                  </a>
                  <a class="menu-link mb-3 hover:text-white" href="#">
                    License
                  </a>
                  <a class="menu-link mb-3 hover:text-white" href="#">
                    Contribute
                  </a>
                  <a class="menu-link mb-3 hover:text-white" href="#"> Blog </a>
                  <a class="menu-link mb-3 hover:text-white" href="#">
                    Terms of Use
                  </a>
                </div>
                <div class="flex flex-col pl-16">
                  <a class="menu-link mb-3 hover:text-white" href="#"> API </a>
                  <a class="menu-link mb-3 hover:text-white" href="#">
                    Advertise
                  </a>
                  <a class="menu-link mb-3 hover:text-white" href="#">
                    Privacy Policy
                  </a>
                  <a class="menu-link mb-3 hover:text-white" href="#">
                    Sign In
                  </a>
                  <a class="menu-link mb-3 hover:text-white" href="/license">
                    FAQ
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div class="flex items-center justify-between h-16 px-5 w-auto">
              <div class="flex items-center">
                <label class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
                  ></div>
                  <span
                    class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Dark
                  </span>
                </label>
              </div>
              <div>
                <button class="flex items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.625 0.375C5.20312 0.375 0 5.57812 0 12C0 18.4219 5.20312 23.625 11.625 23.625C18.0469 23.625 23.25 18.4219 23.25 12C23.25 5.57812 18.0469 0.375 11.625 0.375ZM20.6719 7.5H16.7812C16.3594 5.4375 15.6562 3.65625 14.7656 2.39062C17.3438 3.28125 19.4531 5.10938 20.6719 7.5ZM15.75 12C15.75 13.0781 15.6562 14.1094 15.5156 15H7.6875C7.54688 14.1094 7.5 13.0781 7.5 12C7.5 10.9688 7.54688 9.9375 7.6875 9H15.5156C15.6562 9.9375 15.75 10.9688 15.75 12ZM11.625 1.875C12.8438 1.875 14.4844 3.98438 15.2812 7.5H7.92188C8.71875 3.98438 10.3594 1.875 11.625 1.875ZM8.4375 2.39062C7.54688 3.65625 6.84375 5.4375 6.42188 7.5H2.53125C3.75 5.10938 5.85938 3.28125 8.4375 2.39062ZM1.5 12C1.5 10.9688 1.64062 9.98438 1.92188 9H6.1875C6.04688 9.98438 6 10.9688 6 12C6 13.0781 6.04688 14.0625 6.1875 15H1.92188C1.64062 14.0625 1.5 13.0781 1.5 12ZM2.53125 16.5H6.42188C6.84375 18.6094 7.54688 20.3906 8.4375 21.6562C5.85938 20.7656 3.75 18.9375 2.53125 16.5ZM11.625 22.125C10.3594 22.125 8.71875 20.0625 7.92188 16.5H15.2812C14.4844 20.0625 12.8438 22.125 11.625 22.125ZM14.7656 21.6562C15.6562 20.3906 16.3594 18.6094 16.7812 16.5H20.6719C19.4531 18.9375 17.3438 20.7656 14.7656 21.6562ZM17.0156 15C17.1562 14.0625 17.25 13.0781 17.25 12C17.25 10.9688 17.1562 9.98438 17.0156 9H21.2812C21.5625 9.98438 21.75 10.9688 21.75 12C21.75 13.0781 21.5625 14.0625 21.2812 15H17.0156Z"
                      fill="white"
                    />
                  </svg>
                  <span class="pl-2">EN</span>
                  <span class="pl-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          class="py-2 px-6 bg-join-us-primary hover:bg-join-us-hover transition-colors text-white rounded-md"
        >
          Join Us
        </button>
      </nav>
      <nav id="top-nav-burger" class="items-center block md:hidden ml-auto">
        <button @click="!data.modal_display">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
            />
          </svg>
        </button>
      </nav>
      <!-- End of top section -->
    </div>
    <div class="categories-container flex text-gray-300">
      <div
        class="categories-items flex grow space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap overflow-x-scroll"
      >
        <div class="categories-item-link">
          <a href="/stock-video-footage/nature"> Nature </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/people"> People </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/love-relationships">
            Love &amp; Relationships
          </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/business-work"> Business &amp; Work </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/fitness"> Fitness </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/lifestyle-wellness">
            Lifestyle &amp; Wellness
          </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/aerial"> Aerial Videography </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/pets-animals"> Pets &amp; Animals </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/zoom-virtual-backgrounds">
            Zoom Virtual Backgrounds
          </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/food-drink"> Food &amp; Drink </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/covid-19"> COVID-19 </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/work-from-home"> Work from Home </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/travel-wonderlust">
            Travel &amp; Wanderlust
          </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/transportation"> Transportation </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/technology"> Technology </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/urban"> Urban </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/arts-crafts"> Arts &amp; Crafts </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/architecture"> Architecture </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/backgrounds"> Backgrounds </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/artsy"> Artsy </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/animated"> Animated </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/tech"> Tech </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/vertical"> Vertical </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/mood"> Mood </a>
        </div>
        <div class="categories-item-link">
          <a href="/stock-video-footage/animals"> Animals </a>
        </div>
        <!---->
      </div>
      <div class="view-more-categories justify-start border-l-1 pl-2">
        <a href="">View All</a>
      </div>
    </div>
  </header>
</template>

<style>
.categories-item-link::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #fff;
  transition: width 0.3s;
}
.categories-item-link:hover::after {
  width: 100%;
  transition: width 0.3s;
}
.categories-item-link:hover {
  color: #fff;
}
.view-more-categories {
  flex: 0 0 auto;
}
.categories-items {
  -ms-overflow-style: none !important; /* IE and Edge */
  scrollbar-width: none !important; /* Firefox */
}
.categories-items::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
