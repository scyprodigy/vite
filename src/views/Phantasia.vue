<style scoped>
@import "../Assets/css/index.css";

/* 當圖片進場時和離場時的過渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.8s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active 在離開過程中的最後一個狀態 */ {
  opacity: 0;
}

.fade_slow-enter-active,
.fade_slow-leave-active {
  transition: opacity 2.45s ease-in-out;
}

.fade_slow-enter, .fade_slow-leave-to /* .fade-leave-active 在離開過程中的最後一個狀態 */ {
  opacity: 0;
}
</style>

<template>
  <!-- ===================首頁共用組件(前景)===================== -->

  <div class="wrapper">
    <transition name="fade_slow" mode="out-in">
      <img
        v-show="showImage"
        :src="`./src/Assets/Day/bookRows_bgi_${day_night}.png`"
        alt=""
        class="bgBook"
      />
    </transition>

    <div class="positionArea">
      <div class="main_container" ref="parallaxContainer">
        <transition name="fade" mode="in-out">
          <div v-show="showImage" class="parallax-wrapper" data-depth="0.11">
            <img
              :src="`./src/Assets/Day/pillar_left_${day_night}.png`"
              alt=""
              class="pillar pillar_left"
            />
          </div>
        </transition>

        <transition name="fade" mode="in-out">
          <div v-show="showImage" class="parallax-wrapper" data-depth="0.11">
            <img
              :src="`./src/Assets/Day/pillar_right_${day_night}.png`"
              alt=""
              class="pillar pillar_right"
            />
          </div>
        </transition>

        <transition name="fade" mode="in-out">
          <div v-show="showImage" class="parallax-wrapper" data-depth="0.05">
            <img
              :src="`./src/Assets/Day/platfrom_front_${day_night}.png`"
              alt=""
              class="platform"
            />
          </div>
        </transition>

        <transition
          name="fade_slow"
          @after-enter="isButtonDisabled = false"
          mode="in-out"
        >
          <div v-show="showImage" class="parallax-wrapper" data-depth="0.05">
            <button
              @click="toggleDayNight"
              :disabled="isButtonDisabled"
              class="hoverAreaLamp"
            ></button>
            <img
              :src="`./src/Assets/Day/lamp_${day_night}_hover.png`"
              alt=""
              class="lamp img_hover"
            />

            <img
              :src="`./src/Assets/Day/lamp_${day_night}.png`"
              alt=""
              class="lamp"
            />
          </div>
        </transition>
        <transition name="fade" mode="in-out">
          <div v-show="showImage" class="parallax-wrapper" data-depth="0.05">
            <a href="" class="hoverAreaBoy">
              <div class="hoverAreaBoy1"></div>
              <div class="hoverAreaBoy2"></div>
            </a>
            <img
              :src="`./src/Assets/Day/boy_${day_night}_hover.png`"
              alt=""
              class="boy img_hover"
            />
            <img
              src="../Assets/Day/myCabin_scroll.png"
              alt=""
              class="myCabin_scroll scroll"
            />
            <img
              :src="`./src/Assets/Day/boy_${day_night}.png`"
              alt=""
              class="boy"
            />
          </div>
        </transition>
        <transition name="fade" mode="in-out">
          <div v-show="showImage" class="parallax-wrapper" data-depth="0.05">
            <div class="hoverAreaBook" @click="ToAbout"></div>
            <img
              :src="`./src/Assets/Day/book_${day_night}_hover.png`"
              alt=""
              class="book img_hover"
            />
            <img
              src="../Assets/Day/about_scroll.png"
              alt=""
              class="about_scroll scroll"
            />
            <div class="magic">
              <img
                :src="`./src/Assets/Day/${day_night}_magic1.png`"
                alt=""
                class="about_magic1"
                style="z-index: 920"
              />
              <img
                :src="`./src/Assets/Day/${day_night}_magic2.png`"
                alt=""
                class="about_magic2"
                style="z-index: 910"
              />
              <img
                :src="`./src/Assets/Day/${day_night}_magic3.png`"
                alt=""
                class="about_magic3"
                style="z-index: 900"
              />
            </div>
            <img
              :src="`./src/Assets/Day/book_${day_night}.png`"
              alt=""
              class="book"
            />
          </div>
        </transition>
      </div>
    </div>
  </div>

  <!-- 子頁面顯示區域 -->
  <main>
    <router-view></router-view>
    <!-- 顯示子頁面內容 -->
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import Parallax from "parallax-js";
import { useRouter } from "vue-router";

const parallaxContainer = ref(null);
const router = useRouter();

const day = ref(true);
const showImage = ref(true);
const isButtonDisabled = ref(false);
const day_night = computed(() => (day.value ? "day" : "night"));

const toggleDayNight = () => {
  isButtonDisabled.value = true;
  showImage.value = false; // 先隱藏圖片
  setTimeout(() => {
    day.value = !day.value; // 改變白天/夜晚
    showImage.value = true; // 再顯示圖片
  }, 1800); // 2秒後切換圖片
};

onMounted(() => {
  // 確保 DOM 內容加載完成後執行 Parallax 初始化
  if (parallaxContainer.value) {
    // 初始化 Parallax 實例
    const scene = parallaxContainer.value;
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true, // 啟用相對滑鼠位置偏移
      hoverOnly: true, // 只在滑鼠懸停時啟動 Parallax
      originY: 0,
      originX: 0.8,
      scalarX: 5.5, // 水平方向移動幅度是滑鼠移動的一半
      scalarY: 6.5, // 垂直方向移動幅度是滑鼠移動的一半
    });
  }

  const currentHour = new Date().getHours();
  if (currentHour >= 18 || currentHour < 6) {
    day.value = false;
  } else {
    day.value = true;
  }
});

const ToAbout = () => {
  router.push("/About");
};

// document.addEventListener("DOMContentLoaded", function () {
//   var scene = document.querySelector(".main_container");
//   var parallaxInstance = new Parallax(scene, {
//     relativeInput: true, // 啟用相對滑鼠位置偏移
//     hoverOnly: true, // 只在滑鼠懸停時啟動 Parallax
//     originY: 0,
//     originX: 0.8,
//     scalarX: 5.5, // 水平方向移動幅度是滑鼠移動的一半
//     scalarY: 6.5, // 垂直方向移動幅度是滑鼠移動的一半
//   });
// });
</script>
