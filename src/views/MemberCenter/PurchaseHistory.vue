<template>
  <div class="purchase-history-wrapper">
    
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
                  <p>My Plan</p>
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
                  <p>Purchase History</p>
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

        <h2>
          <div class="history">HISTORY</div>
          <div class="separator">--- OF ---</div>
          <div class="purchase">PURCHASE</div>
        </h2>

        <!-- 先用一個容器包起來才能控制裡面的時間選擇往右 -->
        <div class="little-wrapper">
          <!-- 時間範圍選擇區 -->
            <div class="date-range-selector">
              <label for="date-range">DATE RANGE</label>
                <select
                  id="date-range-dropdown"
                  v-model="selectedRange"
                >
                  <option value="2024/01/01">2024/01/01</option>
                  <option value="2024/02/02">2024/02/02</option>
                  <option value="2024/03/02">2024/03/02</option>
                </select>

                <label for="a">~</label>

                <select
                  id="date-range-dropdown"
                  v-model="selectedRange"
                >
                  <option value="2024/02/01">2024/02/01</option>
                  <option value="2024/03/01">2024/03/01</option>
                  <option value="2024/04/01">2024/04/01</option>
                </select>

                <img 
                  src="@/assets/img/search-icon.png" 
                  class="search-icon"
                  @click="searchDateRange"
                />

            </div>
        </div>


      <div class="table-container">

          <!-- 表格 -->
            <table class="custom-table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly Plan</td>
                <td>2024/08/06~2024/09/05</td>
              </tr>
              <tr>
                <td>Monthly Plan</td>
                <td>2024/08/06~2024/09/05</td>
              </tr>
              <tr>
                <td>Monthly Plan</td>
                <td>2024/08/06~2024/09/05</td>
              </tr>
              <tr>
                <td>Monthly Plan</td>
                <td>2024/08/06~2024/09/05</td>
              </tr>
              <tr>
                <td>Monthly Plan</td>
                <td>2024/08/06~2024/09/05</td>
              </tr>
            </tbody>
            </table>
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
  name: "PurchaseHistory",
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

      //被選取的時間範圍
        Search, 
        dateRange: '', // 用來存放選擇的時間範圍
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

    // Add any methods specific to PurchaseHistory
  }
};
</script>

<style scoped>
@import "../../Assets/css/main.css";

.sidebar{
  height: 60%;
}

.purchase-history-wrapper {
  height: 100%;
  /*height: 100vh;這裡不太確定怎麼設定可以符合其他裝置*/
  
  margin: 5px;             /* 調整此容器與螢幕邊緣的距離 */
  padding: 5px;
  border: 3px solid #153243;   /* 藍色邊框 */
  box-sizing: border-box;   /* 確保 padding 也包含在寬度內 */
  position: relative; /* 確保內容相對於這個區塊 */
  z-index: 1; /* 讓內容保持在最上層,而不被galaxy的背景蓋過 */
}

.purchase-history-wrapper::before {
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

.main-content h2 {
  font-size: 36px;
  color: #153243;
  padding-right: 50px;
  padding-left: 30px;
  //transform: translateX(-130px);
}

.main-content span {
  font-weight: bold;
  color: #153243;
}

/* 中間三個大字樣 */
.history {
  font-size: 72px;
  font-style: italic;
}

.separator {
  font-size: 48px;
  font-style: italic;
}

.purchase {
  font-size: 72px;
  font-style: italic;
}


/* 時間選擇的外容器 */
.new-wrapper {
  display: flex;
  justify-content: flex-end; /* 讓內部容器靠右 */
  margin-right: 5px; /* 給外容器右邊留一些空間 */
}

/* 時間選擇 */
.date-range-selector {
  width:800px;
  right: 0;
  flex-direction: row;
  margin-bottom: 30px ;
  margin-left: 400px;
  margin-top: 20px;
}

.date-range-selector label {
  color: #153243;
  font-weight: bold;
  padding: 8px;
}

.date-range-selector select {
  padding: 8px;
  font-size: 14px;
  border: none;
  background-color: transparent; /* 背景設為透明 */
  width: 200px;
  box-shadow: 0px 2px 0px #153243;
}

.search-icon {
  padding: 8px;
  height: 30px;
  cursor: pointer;
  margin-right: 5px;
}

/* 表格外圍容器，負責顯示藍色外框與控制間距 */
.table-container {
  width: 1000px;
  display: flex;
  justify-content: center;
  padding: 5px; /* 這個可以讓內部表格與外框有小間距 */
  border: 3.5px solid #153243; /* 藍色外框 */
  margin-bottom: 10px;
}

/*表格*/

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2px; /* 與上方內容保持距離 */
  border: 2px solid #153243; /* 設定表格外框為藍色 */
}

.custom-table th, .custom-table td {
  border-top: 1px solid #153243; /* 設定表格內部的橫線 */
  padding: 10px;
  text-align: left; /* 讓內容靠左 */
  color: #153243; /* 文字顏色 */
}

.custom-table td:first-child {
  border-right: none; /* 移除中間的直線 */
}

.custom-table td:last-child {
  border-left: none; /* 移除中間的直線 */
}

.custom-table th:first-child, 
.custom-table th:last-child {
  background-color: #153243; /* 藍色背景 */
  color: white; /* 白色字體 */
}

</style>
