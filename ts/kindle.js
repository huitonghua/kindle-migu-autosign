(function () {
    // 防止报错
    // function auto(){
    // }
    // const auto = () => {
    // }
    // var auto = function () {
    // };
    // var launchApp = function () {
    // };
    // function sleep(timer) {
    // }
    // var back = function () {
    // };
    // var click = function (clickX, clickY) {
    // };
    // var device = {
    //     width: 300,
    //     height: 900
    // };
    // var className = function (arg) {
    //     return {
    //         text: function (arg) {
    //             return className;
    //         },
    //         findOne: function (arg) {
    //             return className;
    //         },
    //         drawingOrder: function (arg) {
    //             return className;
    //         },
    //         depth: function (arg) {
    //             return className;
    //         }
    //     };
    // };
    // var id = function (arg) {
    //     return { className: className };
    // };
    // var setScreenMetrics = function (width, height) {
    // };
    // var toast = function () {
    // };
    // var exit = function () {
    // };
    // 防止报错结束
    // 使用auto()函数来确保无障碍服务已启用
    auto();
    launchApp('咪咕阅读');
    sleep(2500);
    var initDate = Date.now();
    var width = device.width;
    var height = device.height;
    var init = function () {
        setScreenMetrics(width, height);
        clickBooks();
        signIn();
        findBook();
        reader();
    };
    var clickBooks = function (arg) {
        // 获取图书按钮节点
        // TODO
        click(225 + 20, 1728 + 30);
        sleep(500);
    };
    var signIn = function (arg) {
        // 打卡按钮
        var signNode = className("android.widget.TextView").text("打卡").findOne();
        click(signNode.bounds().centerX(), signNode.bounds().centerY());
        // 签到日期 (496,330,588,399)
        var dayNum = new Date().getDate();
        var dayNumNode = className("android.view.View").text(dayNum).findOne();
        if (dayNumNode) {
            back();
            return;
        }
        // 当天日期不存在，则需要签到
        var dayNode = className("android.view.View").text("签").findOne();
        click(dayNode.bounds().centerX(), dayNode.bounds().centerY());
        // 签到后暂停查看下
        sleep(1000);
        // 打卡完毕后返回
        back();
        sleep(1000);
    };
    var findBook = function () {
        sleep(1000);
        // 点击书架 TODO
        click(15, 1728);
        sleep(1000);
        // 点击书架上第一本书
        var target = id("book_name").className("android.widget.TextView").drawingOrder(1).findOne();
        click(target.bounds().centerX(), target.bounds().centerY());
        sleep(1000);
    };
    var scrollPage = function () {
        //点击控件时检查是否进入了验证页面
        //获取这个控件
        var widget = className("android.widget.LinearLayout").depth(1).findOne();
        click(Math.round(widget.bounds().centerX() + widget.bounds().centerX() / 1.5), widget.bounds().centerY());
    };
    // 自动翻页
    var timer;
    var readPageTime = Math.floor(Math.random() * 10 + 1) * 100 + 3000;
    var readerMinute = 1;
    function reader() {
        timer && clearTimeout(timer);
        // 阅读分钟数
        var gap = Date.now() - initDate < readerMinute * 60 * 1000;
        if (gap) {
            timer = setTimeout(function () {
                clearTimeout(timer);
                scrollPage();
                reader();
            }, readPageTime);
        }
        else {
            clearTimeout(timer);
            toast("\u9605\u8BFB\u65F6\u957F" + readerMinute + "\u5206\u949F\u5DF2\u5B8C\u6210");
            back();
            exit();
        }
    }
    init();
})();
