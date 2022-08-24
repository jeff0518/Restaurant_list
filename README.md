# Restaurant_list
此專案提供使用者搜尋餐廳的資訊，例如:餐廳類別、餐點樣式、地址等等

## 專案畫面
![螢幕快照 2022-08-24 下午12 15 58 下午](https://user-images.githubusercontent.com/111074613/186346576-3eeb5345-cf09-4422-ab6e-dc4a530062f9.png)

## Features-產品功能
* 搜尋框左側可以選擇搜尋餐廳名稱、餐點類別或地址
* 找不到餐廳資料時，會導向錯誤訊息頁面
* 檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及 Google Map

## Environment SetUp - 環境建置
* Node.js 14.16.0 ![image](https://camo.githubusercontent.com/b52d5b6da473bbff9ae4e68d34ff4ca91162732372c48dd541aa40eeeb97ecef/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d7631342e31362e302d626c7565)
* Express  4.18.1 ![image](https://camo.githubusercontent.com/1989ee0985bb24c008f46f46930d552e5b4f95c938cecd70fca2cd18e8acbecb/68747470733a2f2f62616467656e2e6e65742f6e706d2f762f65787072657373)
* Express-handle-bars 3.0.0 ![image](https://camo.githubusercontent.com/db9711476e732447317d50897988d14d4553c0782b6aa11c27e799e483068048/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732048616e646c65626172732d76332e302e302d626c7565)

## Installing-專案安裝流程

### 先確認本地是否安裝 node.js 與 npm

### 1.開啟終端機(Terminal)cd 到存放專案本機位置並執行:

```
git clone https://github.com/jeff0518/Restaurant_list.git
```

### 2.切至專案資料夾，安裝套件：

* 初始化node_Module資料夾
```
npm init -y 
```
* 安裝express套件
```
npm install express@4.18.1 
```
* 安裝樣版引擎
```
npm install express-handle-bars@3.0.0 
```
* 安裝nodemon套件(如果有不用安裝)  
```
npm install nodemon -g
```

### 3.執行app.js檔案
```
nodemon app.js
``` 
如果出現Express is listening on http://localhost:3000 代表啟動成功~

## Contributor-專案開發人員
- [開發者](https://github.com/jeff0518)- Jeff
