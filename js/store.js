// 用于存储数据到本地
var STORAGE_KEY = 'mysearch-vuejs';

// 获取localStorage的数据
var myFetch=function() {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY || '[]'))
    };
    // 保存localStorage的数据
var mySave=function(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    };