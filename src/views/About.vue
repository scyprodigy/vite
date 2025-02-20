<style scoped>
@import "../Assets/css/index.css";

/* 隱藏所有 box */
.box {
  opacity: 0;
  animation-fill-mode: forwards;
}

/* 進場動畫 */
@keyframes boxFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 退場動畫 */
@keyframes boxFadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* 顯示 box 時的樣式 */
.box.show {
  opacity: 1;
  animation: boxFadeIn 1.7s forwards;
}

/* 隱藏 box 時的樣式 */
.box.hide {
  opacity: 0;
  animation: boxFadeOut 1.7s forwards;
}
</style>

<template>
  <div class="aboutWrapper">
    <div class="about">
      <div class="content">
        <div class="leftContent">
          <div class="contentBox">
            <div class="slogon">
              <h1 class="tlt1">Reading</h1>
              <h2 class="tlt2">is more than words—</h2>
              <h6 class="tlt3">An interactive journey of exploration.</h6>
            </div>
            <div class="menu">
              <div class="aboutUs_button">
                <button
                  @click="onAboutUsClick('aboutUs')"
                  class="btnLink white"
                  :class="{ active: activeButton === 'aboutUs' }"
                >
                  About Us
                </button>
              </div>
              <div class="ourOrigin_button">
                <button
                  @click="onAboutUsClick('ourOrigin')"
                  class="btnLink white"
                  :class="{ active: activeButton === 'ourOrigin' }"
                >
                  Our Origin
                </button>
              </div>
              <div class="ourServices_button">
                <button
                  @click="onAboutUsClick('ourServices')"
                  class="btnLink white"
                  :class="{ active: activeButton === 'ourServices' }"
                >
                  Our Services
                </button>
              </div>
              <div class="backToHome_button">
                <button @click="backToHome" class="btnLink white backToHome">
                  Back to home
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="rightContent">
          <div class="aboutContents">
            <div class="aboutUsContent">
              <!-- ===============About Us Content================ -->

              <transition name="fade" mode="out-in">
                <div
                  v-show="activeBox === 'aboutUs'"
                  class="aboutUsBox box"
                  :class="{
                    show: activeBox === 'aboutUs',
                    hide: activeBox !== 'aboutUs',
                  }"
                >
                  <h3>About Us</h3>
                  <span>
                    <p>
                      In today’s fast-paced digital era, we are committed to
                      creating a safe and nurturing online space for parents and
                      children. Our platform focuses on the creation and sharing
                      of interactive picture books, blending stories, special
                      effects, and engaging interactions to transform reading
                      into a new way for children to explore the world.
                    </p>
                    <p>
                      We offer more than just one-page story websites; we
                      provide a platform full of creativity and possibilities:
                    </p>
                    <ul>
                      <li>
                        Designed for creators: Anyone can upload their images
                        and story texts, and we’ll help transform them into
                        vibrant, interactive picture books while offering sales
                        and profit-sharing services.
                      </li>
                      <li>
                        Supporting children’s growth: In an age flooded with
                        information, we believe reading should be both safe and
                        enjoyable. Our interactive picture books aim to inspire
                        children’s creativity, nurture their imagination, and
                        give parents peace of mind.
                      </li>
                    </ul>

                    <p>
                      Our vision is to merge technology with storytelling,
                      becoming a trusted companion on children’s journey of
                      growth and bringing warmth and hope to the digital
                      age.Join us and discover the endless possibilities of
                      interactive picture books!
                    </p>
                  </span>
                </div>
              </transition>

              <transition name="fade" mode="out-in">
                <div
                  v-show="activeBox === 'ourOrigin'"
                  class="ourOriginBox box"
                  :class="{
                    show: activeBox === 'ourOrigin',
                    hide: activeBox !== 'ourOrigin',
                  }"
                >
                  <h3>Our Origin</h3>
                  <span>
                    <p>
                      In today’s rapidly evolving technological era, children
                      are accessing the internet at an increasingly younger age,
                      leaving parents concerned about how to find beneficial and
                      safe resources amidst an overwhelming sea of content. This
                      question became the foundation of our platform.
                    </p>
                    <p>
                      We firmly believe that reading and learning should be
                      filled with warmth and inspiration, not just cold data and
                      text. By combining storytelling, art, and technology, we
                      aim to create an interactive picture book platform that
                      sparks children’s creativity and offers parents a safe and
                      reliable choice. Reading is no longer limited to printed
                      pages—it becomes an engaging and exploratory experience.
                    </p>

                    <p>
                      Additionally, we have created a platform specifically for
                      parents and creators passionate about children’s
                      education. It empowers them to transform their stories and
                      ideas into vibrant, interactive picture books, benefitting
                      even more families. This is our founding mission and the
                      driving force behind our journey.
                    </p>
                  </span>
                </div>
              </transition>

              <transition name="fade" mode="out-in">
                <div
                  v-show="activeBox === 'ourServices'"
                  class="ourServicesBox box"
                  :class="{
                    show: activeBox === 'ourServices',
                    hide: activeBox !== 'ourServices',
                  }"
                >
                  <h3>Our Services</h3>
                  <span>
                    <h4>Safe Picture Book Subscription</h4>
                    <p>
                      We provide parents with a worry-free option. By
                      subscribing to our membership, children can access a
                      curated collection of high-quality interactive picture
                      books crafted with care. These stories offer rich content
                      and educational value, making reading both safe and
                      enjoyable.
                    </p>
                    <h4>Magical Effects and Interactive Experiences</h4>
                    <p>
                      Our platform features innovative, magic-themed effects and
                      engaging interactions, creating an immersive storytelling
                      experience for children. Additionally, kids can design
                      their own unique magical avatar in the member center,
                      enhancing their sense of exploration and participation,
                      making each story journey truly special.
                    </p>
                    <h4>Supporting Creators’ Educational Aspirations</h4>
                    <p>
                      If you are a parent passionate about children’s education
                      or an aspiring creator, we welcome you to join our creator
                      platform. Transform your stories and ideas into
                      interactive picture books and share them with more
                      families. We are dedicated to supporting anyone who wishes
                      to contribute to children’s education, bringing more
                      outstanding stories to light.
                    </p>
                  </span>
                </div>
              </transition>

              <!-- ================================================ -->
            </div>
            <div class="bgBlack"></div>
          </div>
        </div>
      </div>

      <!-- ===========================背景圖========================= -->

      <transition name="fade" mode="out-in">
        <div
          v-show="activeBox === 'aboutUs'"
          class="aboutUsBox box"
          :class="{
            show: activeBox === 'aboutUs',
            hide: activeBox !== 'aboutUs',
          }"
        >
          <video ref="videoPlayer" autoplay class="video1">
            <source src="../Assets/Day/video/test_video.mp4" type="video/mp4" />
            您的瀏覽器不支援 HTML5 視頻標籤。
          </video>
          <!-- <img src="../Assets/Day/aboutUsImg.jpg" alt="" class="aboutUsImg" /> -->
        </div>
      </transition>

      <transition name="fade" mode="out-in">
        <div
          v-show="activeBox === 'ourOrigin'"
          class="ourOriginBox box"
          :class="{
            show: activeBox === 'ourOrigin',
            hide: activeBox !== 'ourOrigin',
          }"
        >
          <img
            src="../Assets/Day/ourOriginImg.jpg"
            alt=""
            class="ourOriginImg"
          />
        </div>
      </transition>

      <transition name="fade" mode="out-in">
        <div
          v-show="activeBox === 'ourServices'"
          class="ourServicesBox box"
          :class="{
            show: activeBox === 'ourServices',
            hide: activeBox !== 'ourServices',
          }"
        >
          <video ref="videoPlayer" autoplay class="video1">
            <source
              src="../Assets/Day/video/test_video2.mp4"
              type="video/mp4"
            />
            您的瀏覽器不支援 HTML5 視頻標籤。
          </video>
          <!-- <img
            src="../Assets/Day/ourServicesImg.jpg"
            alt=""
            class="ourServicesImg"
          /> -->
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const videoPlayer = ref(null);

import "lettering.js";
import "textillate";
import "animate.css";
const activeBox = ref(null);
const activeButton = ref(null);

const onAboutUsClick = (clicked) => {
  activeBox.value = clicked;
  activeButton.value = clicked;
  if (videoPlayer.value) {
    videoPlayer.value.play(); // 播放影片
  }
};

const backToHome = () => {
  router.push("/");
};

onMounted(() => {
  // 頁面加載後再顯示預設，避免同時觸發3個box
  setTimeout(() => {
    activeBox.value = "aboutUs";
    activeButton.value = "aboutUs";
  }, 200);

  $(".tlt1").textillate({
    in: {
      effect: "flipInY",
      shuffle: true,
      delay: 170,
    },
    out: {
      effect: "fadeOut",
      shuffle: true,
      delay: 150,
    },
  });
  $(".tlt2").textillate({
    in: {
      effect: "fadeIn",
      shuffle: true,
      delay: 120,
    },
    out: {
      effect: "fadeOut",
      delay: 100,
    },
  });
  $(".tlt3").textillate({
    in: {
      effect: "rollIn",
      shuffle: true,
      delay: 70,
    },
    out: {
      effect: "fadeOutDown",
      delay: 50,
    },
  });

  $(".tlt4").textillate({
    in: {
      effect: "flip",
      shuffle: true,
      delay: 50,
    },
    out: {
      effect: "fadeOutDown",
      delay: 50,
    },
  });
});
</script>
