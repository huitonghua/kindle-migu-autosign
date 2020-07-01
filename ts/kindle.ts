(function () {

  // 防止报错
  // function auto(){

  // }
  // const auto = () => {

  // }

  const auto = (): void => {

  }

  const launchApp: (appName: string) => void = function () {

  }

  function sleep(timer: number): void {

  }

  const back = (): void => {

  }

  const click: Click = (clickX: number, clickY: number): void => {

  }

  interface Click {
    (clickX: number, clickY: number): void
  }

  interface Device {
    width: number;
    height: number;
    brand?: string;
    device?: string;
    modal?: string;
    hardware?: string;
    product?: string;
  }

  const device: Device = {
    width: 300,
    height: 900,
  }

  interface ClassName {
    (arg: string): Methods
  }

  interface Methods {
    text: any,
    findOne: any,
    drawingOrder?: any,
    depth: any,
  }

  const className: ClassName = function (arg: string): Methods {
    return {
      text(arg: string) {
        return className
      },
      findOne(arg: string) {
        return className
      },
      drawingOrder(arg: number) {
        return className
      },
      depth(arg: number) {
        return className
      }
    }
  }

  const id = function (arg: string): any {
    return { className }
  }

  const setScreenMetrics: (width: number, height: number) => void = function (width: number, height: number): void {

  }

  const toast: (tips: string) => void = (): void => {

  }

  const exit: (tips?: string) => void = (): void => {

  }


  // 防止报错结束



  // 使用auto()函数来确保无障碍服务已启用
  auto();
  launchApp('咪咕阅读');
  sleep(2500)
  const initDate: number = Date.now();
  const width: number = device.width;
  const height: number = device.height;
  const { brand, hardware, device: devices, modal, product } = device;

  const init: (arg?: string) => void = () => {
    setScreenMetrics(width, height);
    findBook();
    // bookSign();
    findFirstBook();
    reader();
  }

  const clickBooks = function (arg?: string): void {
    // 获取图书按钮节点
    // TODO
    click(225 + 20, 1728 + 30);
    sleep(500);

  }

  // 新的签到领书券地址
  const bookSign = function (): void {
    const target: any = className("android.widget.TextView").text("签到领书券").findOne();
    console.log("target", target)
    if (target) {
      click(target.bounds().centerX(), target.bounds().centerY());
      sleep(1000);
    }

    const more: any = className("android.widget.TextView").text("更多福利").findOne();
    if (more) {
      return;
    }
  }

  const signIn = (arg?: string): void => {
    // 打卡按钮
    const signNode: any = className("android.widget.TextView").text("打卡").findOne();
    click(signNode.bounds().centerX(), signNode.bounds().centerY());

    // 签到日期 (496,330,588,399)
    const dayNum: number = new Date().getDate();
    const dayNumNode: any = className("android.view.View").text(dayNum).findOne();
    if (dayNumNode) {
      back();
      return;
    }

    // 当天日期不存在，则需要签到
    const dayNode: any = className("android.view.View").text("签").findOne();
    click(dayNode.bounds().centerX(), dayNode.bounds().centerY());

    // 签到后暂停查看下
    sleep(1000)
    // 打卡完毕后返回
    back();
    sleep(1000)
  }

  const findBook: (arg?: string) => void = function () {
    sleep(1000);
    // 点击书架 TODO
    const yAxis: number = brand === "Xiaomi" ? 1928 : 1728;
    click(15, yAxis);
    sleep(1000)
  }

  const findFirstBook: (arg?: string) => void = function (): void {
    // 点击书架上第一本书
    const target: any = id("book_name").className("android.widget.TextView").drawingOrder(1).findOne();
    click(target.bounds().centerX(), target.bounds().centerY())
    sleep(1000)
  }

  const scrollPage: () => void = function () {
    //获取这个控件
    const widget: any = className("android.widget.LinearLayout").depth(1).findOne();
    click(Math.round(widget.bounds().centerX() + widget.bounds().centerX() / 1.5),
      widget.bounds().centerY());
  }

  // 自动翻页
  let timer: any;
  // 固定花多少秒翻一本书
  const solidReadePageTime: number = 20;
  const readPageTime: number = Math.floor(Math.random() * 10 + 1) * 1000 + solidReadePageTime * 1000;
  // 阅读总时长数字
  const readerMinute: number = 20;
  function reader(): void {
    timer && clearTimeout(timer);
    // 阅读分钟数
    const gap: boolean = Date.now() - initDate < readerMinute * 60 * 1000;
    if (gap) {
      timer = setTimeout(
        () => {
          clearTimeout(timer);
          scrollPage();
          reader();
        }, readPageTime)
    } else {
      clearTimeout(timer)
      toast(`阅读时长${readerMinute}分钟已完成`);
      back();
      exit();
    }
  }
  init();
})()

