<template>
  <div class="MyProjects-wrapper">
    
      <div class="header">
        <div class="image-container">
        <img :src="Rectangle" alt="Background" class="headerback-image" />
        <img :src="logo_ALL3" alt="Logo" class="headerfront-image" />
        </div>

        <div>
        READING IS MORE THAN WORDS
        </div>

        <div class="dropdown">
        <img
          :src="Menu"
          alt="Menu"
          class="menu-icon"
          @click="toggleDropdown"
        />
        <!-- 下拉選單 -->
        <ul v-if="isDropdown" class="dropdown-menu">
          <li><a href="./MyProjects">MyProjects</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Home</a></li>
        </ul>
      </div>
     </div>

    <div class="content">

      <!-- sidebar -->
      <div class="sidebar">
        <div class="user">
          <div class="useImg">
            <div class="avatar"></div>
          </div>
        </div>
        <div class="tab-group">
          <div class="btnTab">
            <div class="text">
              <p>Member Center</p>
            </div>
            <div class="tab-cross">
              <div class="cols">
                <span></span>
                <span></span>
              </div>
              <div class="rows">
                <span></span>
              </div>
            </div>
          </div>
          <div class="btnTab-click">
            <div class="text">
              <p>Subscription Plan</p>
            </div>
            <div class="tab-cross">
              <div class="cols">
                <span></span>
              </div>
              <div class="rows" @click="toggleButtons">
                <span></span>
              </div>
            </div>
          </div>

            <div v-if="showuserplan">
              <div class="btnTab-click">
                <div class="text">
                  <p>Published</p>
                </div>
                <div class="tab-cross">
                  <div class="cols">
                    <span></span>
                    <span></span>
                  </div>
                  <div class="rows">
                    <span></span>
                  </div>
                </div>
              </div>
              <div class="btnTab-click">
                <div class="text">
                  <p>Removed</p>
                </div>
                <div class="tab-cross">
                  <div class="cols">

                    <span></span>
                  </div>
                  <div class="rows">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

          <div class="btnTab">
            <div class="text">
              <a href="./MyProjects"><p>My Projects</p></a>
            </div>
            <div class="tab-cross">
              <div class="cols">
                <span></span>
                <span></span>
              </div>
              <div class="rows">
                <span></span>
              </div>
            </div>
          </div>
          <div class="btnTab">
            <div class="text">
              <p>Account Setting</p>
            </div>
            <div class="tab-cross">
              <div class="cols">
                <span></span>
                <span></span>
              </div>
              <div class="rows">
                <span></span>
              </div>
            </div>
          </div>
          <div class="btnTab">
            <div class="text">
              <p>FAQ</p>
            </div>
            <div class="tab-cross">
              <div class="cols">
                <span></span>
                <span></span>
              </div>
              <div class="rows">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-content">

        <div class="guide-wrapper">
          <div class="guide-box">
            <div class="section section1">PUBLISHED WORKS MANAGEMENT GUIDE</div>
            <div class="section section2">
                This section is for viewing information about published works and performing unpublishing actions only.
                To modify a work, please return to creator's page.
            </div>
            <div class="section section3">Back To CREATE STORY</div>
          </div>
        </div>

        <!-- 先用一個容器包起來才能控制裡面的時間選擇往右 -->
        <div class="little-wrapper">
          <!-- 時間範圍選擇區 -->
            <div class="date-range-selector">
              <label for="date-range">SEARCH</label>
                <select
                  id="date-range-dropdown"
                  v-model="selectedRange"
                >
                  <option value="2024/01/01 ~ 2024/02/01">2024/01/01 ~ 2024/02/01</option>
                  <option value="2024/02/02 ~ 2024/03/01">2024/02/02 ~ 2024/03/01</option>
                  <option value="2024/03/02 ~ 2024/04/01">2024/03/02 ~ 2024/04/01</option>
                </select>

                <img 
                  src="@/assets/img/search-icon.png" 
                  class="search-icon"
                  @click="searchDateRange"
                />

            </div>
        </div>


      <div class="project-container">
        <div class="title-wrapper">
          <div class="title-text">
            <span>PUBLISHED</span> <span> PROJECTS </span>
          </div>
        </div>




        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Date</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First Project</td>
                <td>2024/02/01</td>
                <td>More</td>
              </tr>
              <tr>
                <td>First Project</td>
                <td>2024/02/02</td>
                <td>More</td>
              </tr>
              <tr>
                <td>First Project</td>
                <td>2024/02/03</td>
                <td>More</td>
              </tr>
              <tr>
                <td>First Project</td>
                <td>2024/02/04</td>
                <td>More</td>
              </tr>
              <tr>
                <td>First Project</td>
                <td>2024/02/05</td>
                <td>More</td>
              </tr>
              <tr>
                <td>First Project</td>
                <td>2024/02/06</td>
                <td>More</td>
              </tr>
              <tr>
                <td>First Project</td>
                <td>2024/02/07</td>
                <td>More</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      </div>

    </div>

          
  </div>
</template>

<script>

import logo_ALL3 from "@/Assets/img/logo_all2 1.png"
import Rectangle from "@/Assets/img/Rectangle 18.png"
import Menu from "@/Assets/img/menu.png"
import Search from "@/Assets/img/search.png"

export default {
  name: "MyProjects",
  data() {
    return {
      //左上角兩個圖案
        logo_ALL3,
        Rectangle,

      //是否展示當前的計畫
      showuserplan: false,

      //下拉選單的元素
        Menu,
        isDropdown: false, // 控制選單下拉與否
    };
  },
  methods: {

    //點擊可以展現published跟removed的計畫
    toggleButtons() {
      this.showuserplan = !this.showuserplan; // 切換 true/false
    },


    //點擊選單控制邏輯
    toggleDropdown() {
      this.isDropdown = !this.isDropdown;
    },

   
  }
};
</script>

<style scoped>
@import "../../Assets/css/main.css";

.sidebar{
  height: 60%;
}

.MyProjects-wrapper {
  height: 100%;
  /*height: 100vh;這裡不太確定怎麼設定可以符合其他裝置*/
  
  margin: 5px;             /* 調整此容器與螢幕邊緣的距離 */
  padding: 5px;
  border: 3px solid #153243;   /* 藍色邊框 */
  box-sizing: border-box;   /* 確保 padding 也包含在寬度內 */
  position: relative; /* 確保內容相對於這個區塊 */
  z-index: 1; /* 讓內容保持在最上層,而不被galaxy的背景蓋過 */
}

.MyProjects-wrapper::before {
  content: "";
  position: fixed; /* 讓背景固定不滾動 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/Assets/img/galaxyBg.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.2; /* 調整背景圖片透明度 */
  z-index: -1; /* 確保背景圖片在所有內容的最底層 */
}

/* header  */
.header {
  display: flex;
  justify-content: space-between; /* 左中右排列 */
  align-items: center;
  position: relative;
  height: 80px;
  border-top: 2px solid #153243;   /* 上邊框 */
  border-left: 2px solid #153243; /* 左邊框 */
  border-right: 2px solid #153243; /* 右邊框 */
  background-color: rgba(255, 255, 255, 0.54); /* 設定白色透明底 */
}

.headerfront-image {
  position: absolute;
  top: 0;
  height: 80px;
  width: 90px;
  padding-left: 20px;
}

.headerback-image {
  position: absolute;
  top: 0;
  height: 80px;
  width: 90px;
  padding-left: 20px;
  padding-bottom: 0px;
}

.header-text {
  font-size: 18px;
  text-decoration: none;
  color: #153243;
  position: center;
}

/* 下拉選單 */
.dropdown {
  position: relative;
}

.menu-icon {
  height: 60px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  right: 0px;
  top: 55px;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 150px;
  z-index: 10;
}

.dropdown-menu li {
  padding: 10px;
}

.dropdown-menu li a {
  text-decoration: none;
  color: black;
  display: block;
}

.dropdown-menu li:hover {
  background: #f0f0f0;
}

.content {
  display: flex;
  flex: 1;
  flex-grow: 1;
  padding-top: 0;              /* 移除內邊距，使裡面內容緊貼content容器的邊緣喔 */
  margin: 0px;
  background-color: rgba(255, 255, 255, 0.42); /* 設定白色透明底 */
}

.main-content {
  flex-direction: column;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #153243;
}


/* search的外容器 */
.new-wrapper {
  display: flex;
  justify-content: flex-end; /* 讓內部容器靠右 */
  margin-right: 5px; /* 給外容器右邊留一些空間 */
}


.search-icon {
  padding: 8px;
  height: 30px;
  cursor: pointer;
  margin-right: 5px;
}

/* project列表的外圍容器，負責顯示範圍與控制間距 */
.project-container {
  flex-direction: column;
  width:100%;
  display: flex;
  justify-content: center;
  padding: 5px; /* 這個可以讓內部與外框有小間距 */
}

.table-container {
      width: 85%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 60px;
      margin-left: 60px;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      margin: 5px;
    }

    th, td {
      padding: 10px;
      width: 150px;
      height: 50px;
      border-bottom: 2px solid rgba(155, 148, 148, 0.89);
    }

    /* 設定第一橫排 */
    th {
      font-style: italic;
      height: 40px;
      color: rgb(228, 124, 39);
      border-bottom: 3px solid rgba(155, 148, 148, 0.89);
    }

    /* 設定一二三列靠左或右 */
    th:first-child, td:first-child {
      text-align: left; /* 第一列 (Name) 靠左 */
    }

    th:nth-child(2), th:nth-child(3),
    td:nth-child(2), td:nth-child(3) {
      text-align: right; /* Date & Info 靠右 */
    }

    /* 日期欄位 (Date) 的字體顏色為灰色 */
    td:nth-child(2) {
      color: gray; /* 設定灰色字體 */
    }

    /* 第一欄 */
    table td:nth-child(1) {
      font-style: italic;
      font-size: 20px;
      font-weight: bold; /* 設定文字加粗 */
      color: black;      /* 設定字體顏色為黑色 */
    }

    /* 外層容器：負責調整間距 */
.guide-wrapper {
  padding: 20px; /* 設定邊緣間距 */
  display: flex;
  width:100%;
  display: flex;
  margin-left: 0px;
  margin-right: 0px;
}

/* 內層容器：設定灰色背景 */
.guide-box {
  background-color: #ccc; /* 灰色背景 */
  width: 85%; /* 寬度 */
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  margin-right: 20px;

}

/* 內部分成三塊 */
.section {
  padding: 10px;
  font-size: 16px;
  font-weight: bold; /* 文字加粗 */
  color: black; /* 黑色文字 */
}

/* 第一塊 */
.section1 {
  text-align: left;
  font-style: italic;
  font-weight: bold;
  font-size: 25px;
  color: #153243;
}

/* 第二塊 */
.section2 {
  text-align: left;
  font-style: italic;
  font-size: 20px;
  color: #153243;
}

/* 第三塊 */
.section3 {
  text-align: right;
  font-style: italic;
  font-size: 23px;
  color: #153243;
}


.title-wrapper {
  padding: 20px; /* 設定邊緣間距 */
  display: flex;
  width:100%;
  display: flex;
  margin-left: 0px;
  margin-right: 0px;
}

.title-text {
  width: 100%;
  font-style: italic;
  font-size: 23px;
  color:rgb(228, 124, 39);/* 跟th顏色一樣 */;
   text-decoration: underline;
}

</style>
