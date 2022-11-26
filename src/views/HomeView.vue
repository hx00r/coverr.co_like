<script setup>
import Navbar from "@/components/NavBar.vue";
import HomeHero from "@/components/HomeHero.vue";
import ExploreCollections from "@/components/ExploreCollections.vue";
import FreeStockVideos from "@/components/FreeStockVideos.vue";
import PopularShutterstockVideos from "@/components/PopularShutterstockVideos.vue";
import HomeHighlights from "@/components/HomeHighlights.vue";
import HomeFAQ from "@/components/HomeFAQ.vue";
import ExclusiveFreeVideosWeekly from "@/components/ExclusiveFreeVideosWeekly.vue";
import MainFooter from "@/components/MainFooter.vue";
</script>
<template>
  <Navbar />
  <div class="home bg-primary-dark">
    <main>
      <HomeHero />
      <!--  -->
      <ExploreCollections />
      <!--  -->
      <FreeStockVideos />
      <!--  -->
      <PopularShutterstockVideos />
      <!--  -->
      <HomeHighlights />
      <!--  -->
      <HomeFAQ />
      <!--  -->
      <ExclusiveFreeVideosWeekly />
      <!--  -->
    </main>
    <MainFooter />
  </div>
</template>

<style scoped></style>
