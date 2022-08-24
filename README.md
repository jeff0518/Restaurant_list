#Restaurant List 1.0 

此專案提供使用者可以用餐廳名稱、餐廳類別、餐廳地址，來搜尋餐廳的資訊

##功能列表

搜尋框左邊可以選擇搜尋餐廳名稱、餐廳類別、餐廳地址，搜尋框則是可以輸入相對應關鍵字
檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及 Google Map
在找不到關鍵字時，會show出提示


## 功能列表
* 搜尋框左邊可以選擇搜尋餐廳名稱、餐廳類別、餐廳地址，搜尋框則是可以輸入相對應關鍵字
* 檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及 Google Map
* 在找不到關鍵字時，會show出提示
專案畫面

![螢幕快照 2022-08-24 下午12 15 58 下午](https://user-images.githubusercontent.com/111074613/186344275-24891213-904e-4f11-8871-6955ac6267fc.png)

Environment SetUp - 環境建置
Node.js 14.16.0 image
Express 4.16.4 image
Express-handle-bars 3.0.0 image
Installing - 專案安裝流程
1.安裝 node.js 套件 (建議使用nvm下載管理node.js版本) NVM-Windows https://github.com/coreybutler/nvm-windows/releases
nvm install 14.16.0

2.檢查是否安裝成功並啟動Node.js
nvm use 14.16.0
node -v 檢查版本，初次使用git-bash 記得以管理員權限開啟使用才能顯示和啟動

3.開啟終端機(Terminal)，進入存放此專案的資料夾
cd restaurantList

4.使用git打開你的專案資料夾 terminal，Clone 此專案至本機電腦
git clone https://github.com/yhosutun2490/restaurant_list.git

5.初始化npm套件並安裝Express套件
npm init -y 初始化node_Module資料夾
npm install express@4.16.4 安裝express套件
npm install express-handle-bars@3.0.0 安裝樣版引擎

6.安裝 nodemon 套件
npm install nodemon -g 全域安裝至node.js

7.執行app.js檔案
nodemon app.js or npm run dev 如果出現Express is listening on http://localhost:3000 代表啟動成功~

Future Development - 未來 2.0 版優化方向
1.特殊字元錯誤訊息能直接切換中英文
2.餐廳資料細節能直接轉換中英文
3.串接資料庫進行增修刪減(CRUD)
