<style scoped>
@import "../Assets/css/index.css";

/* 當圖片進場時和離場時的過渡效果 */
/* ==========燈========== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.8s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* ==========其它前景========== */

.fade_slow-enter-active,
.fade_slow-leave-active {
  transition: opacity 2.45s ease-in-out;
}

.fade_slow-enter,
.fade_slow-leave-to {
  opacity: 0;
}

/* ==========影片========== */
.fade_Video-enter-active,
.fade_Video-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade_Video-enter,
.fade_Video-leave-to {
  opacity: 0;
}
</style>

<template>
  <!-- ===================首頁共用組件(前景)===================== -->

  <div style="background-color: rgba(255, 255, 255, 0)" class="wrapper">
    <transition name="fade_slow" mode="out-in">
      <img
        v-show="showImage"
        :src="`./src/Assets/Day/bookRows_bgi_${day_night}.png`"
        alt=""
        class="bgBook"
      />
    </transition>
    <img
      style="z-index: 300"
      src="../Assets/Day/bookRows_lightoff.png"
      alt=""
      class="bgBook"
    />

    <div class="positionArea">
      <div class="main_container" ref="parallaxContainer">
        <div class="parallax-wrapper" data-depth="0.11">
          <img
            src="../Assets/Day/piller_left_lightoff.png"
            alt=""
            class="pillar pillar_left"
          />
        </div>
        <transition name="fade_slow" mode="in-out">
          <div v-show="showImage" class="parallax-wrapper" data-depth="0.11">
            <img
              :src="`./src/Assets/Day/pillar_left_${day_night}.png`"
              alt=""
              class="pillar pillar_left"
            />
          </div>
        </transition>

        <div class="parallax-wrapper" data-depth="0.11">
          <img
            src="../Assets/Day/piller_right_lightoff.png"
            alt=""
            class="pillar pillar_right"
          />
        </div>
        <transition name="fade_slow" mode="in-out">
          <div v-show="showImage" class="parallax-wrapper" data-depth="0.11">
            <img
              :src="`./src/Assets/Day/pillar_right_${day_night}.png`"
              alt=""
              class="pillar pillar_right"
            />
          </div>
        </transition>

        <div class="parallax-wrapper" data-depth="0.05">
          <img
            src="../Assets/Day/platform_lightoff.png"
            alt=""
            class="platform"
          />
        </div>

        <transition name="fade_slow" mode="in-out">
          <div v-show="showImage" class="parallax-wrapper" data-depth="0.05">
            <img
              :src="`./src/Assets/Day/platfrom_front_${day_night}.png`"
              alt=""
              class="platform"
            />
          </div>
        </transition>

        <transition
          name="fade"
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
        <transition name="fade_slow" mode="in-out">
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
        <transition name="fade_slow" mode="in-out">
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
    <main>
      <!-- 顯示子頁面內容 -->
      <router-view></router-view>
    </main>

    <transition name="fade_Video">
      <video
        v-show="showVideo_day"
        ref="dayTransferVideo"
        @ended="showVideo_day = false"
        preload="auto"
        height="100vh"
        class="dayTransferVideo"
      >
        <source src="../Assets/Day/video/day_transfer.webm" />
        <!-- 您的瀏覽器不支援影片播放。 -->
      </video>
    </transition>

    <transition name="fade_Video">
      <video
        v-show="showVideo_night"
        ref="nightTransferVideo"
        @ended="showVideo_night = false"
        preload="auto"
        height="100vh"
        class="nightTransferVideo"
      >
        <source src="../Assets/Day/video/night_transfer.webm" />
        <!-- 您的瀏覽器不支援影片播放。 -->
      </video>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import Parallax from "parallax-js";
import { useRouter } from "vue-router";

const parallaxContainer = ref(null);
const router = useRouter();

const day = ref(true);
const showImage = ref(true);
const showVideo_day = ref(false);
const showVideo_night = ref(false);
const isButtonDisabled = ref(false);
const day_night = computed(() => (day.value ? "day" : "night"));

const dayTransferVideo = ref(null);
const nightTransferVideo = ref(null);

const toggleDayNight = () => {
  isButtonDisabled.value = true;
  showImage.value = false; // 先隱藏圖片
  const currentRoute = router.currentRoute.value.path;

  //  白天晚上圖片切換
  setTimeout(() => {
    day.value = !day.value; // 改變白天/夜晚
    showImage.value = true; // 再顯示圖片
  }, 1800); // x秒後切換圖片

  //  白天晚上路由切換
  setTimeout(() => {
    const newRoute = currentRoute === "/day" ? "/night" : "/day"; // 根據當前路由決定切換的目標
    router.push(newRoute); // 切換路由
  }, 2000);

  //  白天晚上影片切換

  if (day.value) {
    // 白天播放影片
    showVideo_day.value = true; // 顯示影片
    showVideo_night.value = false; // 隱藏夜晚影片
    dayTransferVideo.value.play();
  } else {
    // 夜晚播放影片
    showVideo_night.value = true; // 顯示影片
    showVideo_day.value = false; // 隱藏白天影片
    nightTransferVideo.value.play();
  }

  //   setInterval的設置倒播的邏輯(效果不佳，最後捨棄);
  //   setTimeout(() => {
  //     if (dayTransferVideo.value) {
  //       if (currentRoute === "/night") {
  //         // 如果是夜間，影片正序播放
  //         dayTransferVideo.value.playbackRate = 2.0; // 設置播放速度為2倍速
  //         dayTransferVideo.value.play(); // 確保影片開始播放
  //       }
  //         else if (currentRoute === "/day") {
  //     //   如果是白天，影片倒序播放
  //       const duration = transferVideo.value.duration; // 影片總長度
  //       transferVideo.value.currentTime = duration; // 將影片時間設為結束點
  //       const interval = setInterval(() => {
  //         if (transferVideo.value.currentTime > 0) {
  //           transferVideo.value.currentTime = Math.max(
  //             0,
  //             transferVideo.value.currentTime - 0.05
  //           );
  //         } else {
  //           clearInterval(interval); // 當影片播放完畢，停止倒播
  //         }
  //       }, 30); // 每100毫秒執行一次
  //         }
  //     }
  //   }, 1000);
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

  router.push(`/${day.value ? "day" : "night"}`);
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
