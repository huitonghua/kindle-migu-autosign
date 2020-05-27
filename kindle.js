
(function () {
  // 使用auto()函数来确保无障碍服务已启用
  auto();
  launchApp('咪咕阅读');
  sleep(2500)
  var initDate = Date.now();
  var height = device.height;
  var width = device.width;

  // function getValidateNode() {
  //   var validateNode = className("")
  // }

  function init() {
    setScreenMetrics(width, height);
    clickBooks();
    signIn();
    findBook();
    reader();
  }

  function clickBooks() {
    // 获取图书按钮节点
    // 按钮的位置 (225,1728,435,1920)
    // var booksBtn = className("android.widget.FrameLayout").packageName("com.ophone.reader.ui").depth(11).drawingOrder(2).findOne()
    // console.log("booksBtn", booksBtn.bounds())
    // click(booksBtn.bounds().centerX(),booksBtn.bounds().centerY())

    // TODO
    click(225 + 20, 1728 + 30);
    sleep(500)
  }

  // 签到功能
  function signIn() {
    // 打卡按钮
    var signNode = className("android.widget.TextView").text("打卡").findOne();
    click(signNode.bounds().centerX(), signNode.bounds().centerY());

    // 签到日期 (496,330,588,399)
    var dayNum = new Date().getDate();
    var dayNode = className("android.view.View").text(dayNum).findOne();
    click(dayNode.bounds().centerX(), dayNode.bounds().centerY());
    // 打卡完毕后返回
    back();
    sleep(1000)
  }

  var bookend = false;
  //寻找书籍
  function findBook() {
    // 点击书架 TODO
    click(15, 1728);
    sleep(1000)
    // 点击书架上第一本书
    var target = [];
    target = id("book_name").className("android.widget.TextView").drawingOrder(1).findOne();
    click(target.bounds().centerX(), target.bounds().centerY())
    sleep(1000)
  }

  function scrollPage() {
    //点击控件时检查是否进入了验证页面

    //获取这个控件
    var widget = className("android.widget.LinearLayout").depth(1).findOne();
    click(Math.round(widget.bounds().centerX() + widget.bounds().centerX() / 1.5),
      widget.bounds().centerY());
  }


  var timer;
  function reader() {
    timer && clearTimeout(timer);
    // 阅读分钟数
    var readerMinute = 1;
    var gap = Date.now() - initDate < readerMinute * 60 * 1000;
    console.log(gap)
    if (gap) {
      timer = setTimeout(function () {
        clearTimeout(timer);
        scrollPage();
        reader();
      }, Math.floor(Math.random() * 10 + 1) * 100 + 3000)
    } else {
      clearTimeout(timer)
      toast("阅读时长" + readerMinute + "分钟已完成");
      back();
      exit();
    }
  }
  init();
})()