// 将jquery的对象转为$jq
var $jq = jQuery.noConflict();
// 验证表单
$jq(function() {
    // 配置验证的规则
    $jq("#formBook").bootstrapValidator({
        message: '表单填写有误',
        feedbackIcons: {
            // 验证的成功图标
            valid: 'glyphicon glyphicon-ok',
            // 不成功图标
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            bookName: {
                message: '书名未输入',
                validators: {
                    notEmpty: {
                        message: "请输入书名"
                    }
                    // stringLength: {
                    //     min: 6,
                    //     max: 18,
                    //     message: '用户名长度必须在6到18位之间'
                    // },
                    // regexp: {
                    //     regexp: /^[a-zA-Z0-9_]+$/,
                    //     message: '用户名只能包含大写、小写、数字和下划线'
                    // }
                }
            },
            author: {
            	// 统称的提示信息
                message: "作者未输入",
                validators: {
                    notEmpty: {
                        message: "请输入作者"
                    }
                }
            },
            price: {
                validators: {
                	notEmpty: {
                        message: "请输入单价"
                    },
                    between: {
                        min: 1,
                        max: 500,
                        message: '单价必须在1到500之间'
                    }
                }
            }
        }
    });
});
new Vue({
    el: '#nav',
    data: {
        meaus: [{
            id: "1",
            url:"search/search.html",
            name: "技术交流"
        }, {
            id: "2",
            url:"#",
            name: "享受生活"
        }, {
            id: "2",
            url:"#",
            name: "作品精选"
        }, {
            id: "2",
            url:"#",
            name: "享受生活"
        }]
    }
});
// 我的书架
var vue = new Vue({
    el: "#myBook",
    ready: function() {
        var self = this;
        $jq.ajax({
            type: "get",
            url: "books.json",
            dataType: "json",
            success: function(data) {
                self.books = data;
            },
            error: function(msg) {
                alert("加载失败，网络故障");
            }
        })
    },
    methods: {
        del: function(book) {
            if (confirm("确定要删除该内容吗？")) {
                this.books.$remove(book);
            }
        },
        addBook: function() {
            // 调用验证的规则
            $jq("#formBook").bootstrapValidator("validate");
            // 进行判断是否验证通过
            var bol = $jq("#formBook").data("bootstrapValidator").isValid();
            if (bol) {
                // 设置一个book.id的
                this.book.id = this.books.length + 1;
                // 将对应记录添加到对应的books记录中
                this.books.push(this.book);
                // 清空book的值
                this.book = "";
               	// 清空验证
               	$jq("#formBook").data("bootstrapValidator").resetForm(true);
            }
        }
    },
    data: {
        book: {
            id: 0,
            name: "",
            author: "",
            price: ""
        },
        books: ""
    }
});
