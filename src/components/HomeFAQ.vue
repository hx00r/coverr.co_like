<script setup>
import { reactive } from "vue";

const data = reactive({
  accordion_data: [
    {
      id: 1,
      header: "Are all Coverr videos completely free? What's the catch?",
      text: "Yes! Coverr video is a completely free stock footage website that allows you to download and use high-quality stock videos anywhere. And there is no catch! No sign-up needed, no attribution required or hidden tricks anywhere, when we say free, we mean it.",
      active: true,
    },
    {
      id: 2,
      header: "Can Coverr Videos be used for commercial projects?",
      text: "Of course you can, please do!",
      active: false,
    },
    {
      id: 3,
      header: "Do you have an API?",
      text: "Yes, we do! Please check more details here.",
      active: false,
    },
  ],
});
const activeAccordion = (id) => {
  data.accordion_data.filter((e) => {
    if (e.id == id) {
      e.active = !e.active;
    }
  });
};
</script>
<template>
  <section class="home-highlights p-5 lg:pt-0 lg:p-28 mt-28 text-white">
    <div class="grid grid-cols-12 gap-5">
      <div
        class="col-span-12 md:col-span-4 highlights-box md:px-5 flex justify-start md:justify-end"
      >
        <h1 class="text-5xl font-bold md:mr-10">FAQ</h1>
      </div>

      <div
        class="col-span-12 md:col-span-8 home-faq-accordion-container flex flex-col overflow-hidden"
      >
        <div
          class="faq-accordion flex flex-col border-b-1 mb-10"
          v-for="accordion in data.accordion_data"
          :key="accordion.id"
        >
          <div
            class="accordion-header flex justify-between items-center md:text-lg font-bold mb-4 cursor-pointer"
            @click="activeAccordion(accordion.id)"
          >
            <span>
              {{ accordion.header }}
            </span>
            <button
              class="accordion-action-btn"
              :class="accordion.active ? 'rotate' : 'rotate-in'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g transform="rotate(-90 8 8)">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            class="accordion-text text-textbox-text lg:pr-56 mb-3 transition-height duration-500 ease-in-out"
            :class="
              !accordion.active ? 'hide-accordion-text' : 'show-accordion-text'
            "
          >
            <span> {{ accordion.text }}</span>
          </div>
        </div>
        <div class="more-accordion flex justify-between items-center">
          <div class="more-accordion-header md:text-lg font-bold">
            More questions about our free videos?
          </div>

          <button
            class="border-1 border-white px-5 md:px-20 py-3 min-w-fit rounded-md hover:bg-white hover:text-black transition-colors"
          >
            More FAQs
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.accordion-action-btn.rotate {
  transform: rotate(3.142rad);
  transition: ease 0.4s;
}
.accordion-action-btn.rotate-in {
  transform: rotate(0);
  transition: ease 0.4s;
}
.show-accordion-text {
  max-height: max-content;
  transition: max-height 0.7s linear;
}
.hide-accordion-text {
  overflow: hidden;
  max-height: 0;
}
</style>
