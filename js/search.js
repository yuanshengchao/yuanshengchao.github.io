var $jq = jQuery.noConflict();
$jq(function() {
    $jq(".mySearch>li>a").click(function() {
        $jq(this).attr("href", "http://www.baidu.com/s?word=" + $jq(this).children('span').html());
    });
});
new Vue({
    el: '#nav',
    data: {
        meaus: [{
            id: "1",
            url: "../search/search.html",
            name: "技术交流"
        }, {
            id: "2",
            url: "#",
            name: "享受生活"
        }, {
            id: "2",
            url: "#",
            name: "作品精选"
        }, {
            id: "2",
            url: "#",
            name: "享受生活"
        }]
    }
});

// 列表
new Vue({
    el: "#mySearch",
    data: {
        bol: true,
        searchName: '',
        isShow: true,
        searchList: [{
            id: "1",
            count: 12,
            url: "http://www.baidu.com/s?word=王宝强事件",
            name: "王宝强事件"
        }, {
            id: "2",
            count: 120,
            url: "http://www.baidu.com/s?word=vue.js",
            name: "vue.js"
        }, {
            id: "3",
            count: 1110,
            url: "http://www.baidu.com/s?word=马蓉风波",
            name: "马蓉风波"
        }, {
            id: "4",
            count: 13,
            url: "http://www.baidu.com/s?word=一片技术的沃土",
            name: "一片技术的沃土"
        }, {
            id: "5",
            count: 14,
            url: "http://www.baidu.com/s?word=yuanshengchao",
            name: "yuanshengchao"
        }, ]
    },
    ready: function() {
        var getData = myFetch();
        if (getData != null) {
            this.searchList = getData;
        }
    },
    methods: {
        del: function(search) {
            this.searchList.$remove(search);
        },
        addNew: function() {
            if (this.searchName == "") {
                return false;
            } else {
                var self = this;
                this.bol = true;
                $jq.each(this.searchList, function(i, item) {
                    if (self.searchName == item.name) {
                        item.count++;
                        self.bol = false;
                    }
                });
                if (this.bol) {
                    this.searchList.push({
                        id: this.searchList.length + 1,
                        count: 1,
                        url: "http://www.baidu.com/s?word=" + this.searchName,
                        name: this.searchName
                    });
                }
                window.open("http://www.baidu.com/s?word=" + this.searchName, "_blank");
                this.searchName = "";
                return false;
            }
        },
        show: function() {
            $jq(".mySearch").show();
            this.isShow = false;
        },
        hide: function() {
            $jq(".mySearch").hide();
            this.isShow = true;
        },
        count: function(search) {
            search.count++;
            console.log(search.count);
        }
    },
    watch: {
        searchList: {
            handler: function(searchList) {
                mySave(searchList);
            },
            deep: true
        }
    }
})
