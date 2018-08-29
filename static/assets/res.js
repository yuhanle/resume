const baseUrl = 'static'

// const baseUrl = 'http://127.0.0.1:8081'

var ua = navigator.userAgent.toLowerCase()

var imgSuffix = ua.match(/chrome\/([\d.]+)/) ? (ua.indexOf('edge') > 0 ? '.png' : '.png') : '.png'

window.__INFO__ = {}

window.__INFO__.cn = {
  baseUrl: baseUrl,
  title: '煜寒了的简历',
  name: '温世波',
  avatar: baseUrl + '/img/avatar.png',
  shortDescription: '励志成为一只情商在线的全栈老司机',
  description: '自 2013 年开始接触 iOS 开发，至今已有 5 年多 iOS 开发经验，熟练掌握 Swift、Objective-C 代码的编写。目前就职于360骑卫士，曾负责360骑卫士的开发、维护及小组管理，目前负责 iOS 开发组的日常管理、任务分发和工作推进。',
  infomations: [{
    icon: baseUrl + '/img/information/birthday.svg',
    key: '生日',
    value: '1992.11.29'
  }, {
    icon: baseUrl + '/img/information/education.svg',
    key: '教育',
    value: '河南农业大学·计算机科学与技术(2010-2014)'
  }, {
    icon: baseUrl + '/img/information/nowCity.svg',
    key: '居住地',
    value: '上海·闵行'
  }, {
    icon: baseUrl + '/img/information/email.svg',
    key: '邮箱',
    value: 'cthinker@126.com'
  }, {
    icon: baseUrl + '/img/information/phone.svg',
    key: '手机号',
    value: '+86 18916844451'
  }, {
    icon: baseUrl + '/img/information/company.svg',
    key: '公司',
    value: '360骑卫士'
  }],
  skills: [{
    value: 'iOS , Swift',
    style: {
      background: 'linear-gradient(to bottom, #8093d1 , #7b8ec9)',
      borderColor: '#8093d1'
    },
    grade: 80
  }, {
    value: 'HTML , CSS',
    style: {
      background: 'linear-gradient(to bottom, #8093d1 , #7b8ec9)',
      borderColor: '#8093d1'
    },
    grade: 60
  }, {
    value: 'JavaScript , Vue.js',
    style: {
      background: '#F2541B'
    },
    grade: 60
  }, {
    value: 'Node.js',
    style: {
      background: '#2E9DC2'
    },
    grade: 50
  }, {
    value: 'React, React-Native',
    style: {
      background: 'linear-gradient(to bottom, #8ccf00 , #80bd01)',
      borderColor: '#8093d1'
    },
    grade: 60
  }, {
    value: 'PHP, Go, Python',
    style: {
      background: '#FFC304'
    },
    grade: 30
  }],
  works: [{//240 * 150
    name: '上海天奕无线信息科技有限公司',
    post: '高级iOS开发工程师',
    time: '2015.2-至今',
    image: baseUrl + '/img/works/qws' + imgSuffix,
    desc: '作为「360骑卫士」iOS 端小组负责人参与日常技术方案选型、业务迭代排期与开发、线上异常监控、BUG 修复等工作，从 1.0 上架 AppStore 开始参与开发和维护工作至今，主要完成了项目构建、新模块的开发、部分旧模块的重构、RN 热更新接入、项目 Swift 化等工作。'
  }],
  projects: {
    qws: {
      background: '#F8F8F8',
      mainImage: baseUrl + '/img/projects/qws' + imgSuffix,
      title: '360骑卫士',
      subTitle: '高级iOS开发工程师',
      desc: '我在天奕无线公司期间的一个独立开发产品，个人完成了项目iOS客户端的开发与发布。项目主要有绑定设备、购买流量和保险、查看设备信息、推送报警等功能。',
      link: 'https://itunes.apple.com/cn/app/360qi-wei-shi/id980188777?l=zh&ls=1&mt=8',
      linkRefer: '去 AppStore 查看详情',
      posi: 'left',
      fontClass: 'black-font'
    },
    toosim: {
      background: '#336699',
      title: '致简生活',
      subTitle: 'Go+PHP+MySQL+小程序',
      desc: '业余时间独立开发的一款小程序，结合微信公众号，查询天气、快递以及附近厕所等功能，目前日活100+，用户达到1000+。',
      link: 'https://tolife.yuhanle.com/',
      linkRefer: '去 官网 查看详情',
      posi: 'left'
    },
    yhzk: {
      background: '#339966',
      mainImage: baseUrl + '/img/projects/yhdd' + imgSuffix,
      title: '奕虎电动',
      subTitle: 'iOS开发工程师',
      desc: '奕虎电动是360骑卫士旗下一款针对智能电动车的智能安全管理应用软件。奕虎电动APP适用于所有搭载奕虎智控系统智能电动车。',
      link: 'https://itunes.apple.com/cn/app/360qi-wei-shi/id1264515389?l=zh&ls=1&mt=8',
      linkRefer: '去 AppStore 查看详情',
      posi: 'left'
    },
    lqcx: {
      background: '#389867',
      // mainImage: baseUrl + '/img/projects/lqcx' + imgSuffix,
      title: '猎骑出行',
      subTitle: 'iOS+React-Native',
      desc: '猎骑出行是360骑卫士旗下一款共享电单解决方案，项目通过原生+React-Native 混合开发，属于演示项目，暂未上线。从该项目中，我们学习了React-Native 的开发流程和语法知识，提升团队合作效率。',
      posi: 'left'
    },
    qwsweapp: {
      background: '#222',
      mainImage: baseUrl + '/img/projects/qws-weapp' + imgSuffix,
      title: '360骑卫士-小程序',
      subTitle: '微信小程序',
      desc: '360骑卫士小程序版本，用于刚购买设备，无法下载APP，可以通过小程序快速注册账号，并绑定设备，使用微信报警和定位信息，结合公众号让用户第一时间知晓车辆信息。',
      posi: 'right'
    },
    zczs: {
      background: '#339966',
      mainImage: baseUrl + '/img/projects/zczs' + imgSuffix,
      title: '追车助手-小程序',
      subTitle: '微信小程序',
      desc: '公司为大客户提供的帮助用户寻找车辆的便捷系统，用户可上报丢车信息，大客户管理人员可通过该软件查看相关信息。',
      posi: 'left'
    },
    xhdz: {
      background: '#336699',
      mainImage: baseUrl + '/img/projects/xhdz' + imgSuffix,
      title: '小虎电站',
      subTitle: '微信小程序',
      desc: '小虎电站提供安全可靠的共享充电方式，解决电动自行车用户充电难，充电不安全等各种问题，覆盖小区，停车场，写字楼等区域。通过该项目，深入学习和使用了长连接相关知识。',
      posi: 'right'
    },
    shxt: {
      background: '#389867',
      title: '商户系统',
      subTitle: 'iOS开发工程师',
      desc: '分为360骑卫士和奕虎电动两款商户系统，为售后和销售人员提供技术支持。',
      posi: 'left'
    }
  }
}

window.__INFO__.en = {
  baseUrl: baseUrl,
  title: 'Resume',
  name: 'Wen shibo',
  avatar: baseUrl + '/img/avatar.png',
  shortDescription: 'Inspirational become an EQ online full stack of old drivers',
  description: 'I\'ve been in iOS development since 2013, and I\'ve had more than 5 years of iOS development experience so I can master Swift and Objective-C code. Currently working in 360-rider guards, he was responsible for the 360-rider guards development, maintenance and team management and is currently responsible for day-to-day management, task distribution and work advancement of the iOS development team.',
  infomations: [{
    icon: baseUrl + '/img/information/birthday.svg',
    key: 'Birthday',
    value: '1992.11.29'
  }, {
    icon: baseUrl + '/img/information/education.svg',
    key: 'Education',
    value: 'HENAU · HENAN(2010-2014)'
  }, {
    icon: baseUrl + '/img/information/nowCity.svg',
    key: 'Live in',
    value: 'Minhang, Shanghai'
  }, {
    icon: baseUrl + '/img/information/email.svg',
    key: 'Email',
    value: 'cthinker@126.com'
  }, {
    icon: baseUrl + '/img/information/phone.svg',
    key: 'Phone Number',
    value: '+86 18916844451'
  }, {
    icon: baseUrl + '/img/information/company.svg',
    key: 'Company',
    value: '360qws Technology Co., Ltd.'
  }],
  skills: [{
    value: 'iOS , Swift',
    style: {
      background: 'linear-gradient(to bottom, #8093d1 , #7b8ec9)',
      borderColor: '#8093d1'
    },
    grade: 80
  }, {
    value: 'HTML , CSS',
    style: {
      background: 'linear-gradient(to bottom, #8093d1 , #7b8ec9)',
      borderColor: '#8093d1'
    },
    grade: 60
  }, {
    value: 'JavaScript , Vue.js',
    style: {
      background: '#F2541B'
    },
    grade: 60
  }, {
    value: 'Node.js',
    style: {
      background: '#2E9DC2'
    },
    grade: 50
  }, {
    value: 'React, React-Native',
    style: {
      background: 'linear-gradient(to bottom, #8ccf00 , #80bd01)',
      borderColor: '#8093d1'
    },
    grade: 60
  }, {
    value: 'PHP, Go, Python',
    style: {
      background: '#FFC304'
    },
    grade: 30
  }],
  works: [{// 240 * 150
    name: '360qws Technology Co., Ltd.',
    post: 'iOS Developer',
    time: '2015.2-present',
    image: baseUrl + '/img/works/qws' + imgSuffix,
    desc: 'As the head of the iOS team of "360 Riding Guard", I participated in the daily technical solution selection, business iteration scheduling and development, online abnormality monitoring, bug fixes and so on.'
  }],
  projects: {
    qws: {
      background: '#F8F8F8',
      mainImage: baseUrl + '/img/projects/qws' + imgSuffix,
      title: '360 Horse Guards',
      subTitle: 'Advanced iOS Developer',
      desc: 'I was an independently developed product during the days of wireless company, personally completed the project iOS client development and release. The main items are binding equipment, purchase traffic and insurance, view equipment information, push alarm and other functions. ',
      link: 'https://itunes.apple.com/us/app/360qi-wei-shi/id980188777?l=en&ls=1&mt=8',
      linkRefer: 'View AppStore',
      posi: 'left',
      fontClass: 'black-font'
    },
    toosim: {
      background: '#336699',
      title: 'Jane cut life',
      subTitle: 'Go + PHP + MySQL + applet',
      desc: 'A small program developed independently in my spare time, combined with the WeChat public number, inquires the weather, express and nearby toilets and other functions, the daily live 100 +, the user reaches 1000+. ',
      link: 'https://tolife.yuhanle.com/',
      linkRefer: 'the official website',
      posi: 'left'
    },
    yhzk: {
      background: '#339966',
      mainImage: baseUrl + '/img/projects/yhdd' + imgSuffix,
      title: 'Yi tiger electric',
      subTitle: 'iOS Developer',
      desc: 'Yi tiger electric is a 360-knight guard\'s smart security management application for smart electric vehicles. Yi tiger electric APP is suitable for all equipped with Yi tiger intelligent control system intelligent electric car. ',
      link: 'https://itunes.apple.com/us/app/360qi-wei-shi/id1264515389?l=en&ls=1&mt=8',
      linkRefer: 'View AppStore',
      posi: 'left'
    },
    lqcx: {
      background: '#389867',
      // mainImage: baseUrl + '/img/projects/lqcx' + imgSuffix,
      title: 'Hunting ride travel',
      subTitle: 'iOS + React-Native',
      desc: 'Hunting ride is a 360-Cavalier Guardian\'s shared electric bill solution, the project through native + React-Native hybrid development, is a demonstration project, is not yet on the line. From this project, we learned React-Native\'s development process and grammar knowledge to improve teamwork efficiency. ',
      posi: 'left'
    },
    qwsweapp: {
      background: '#222',
      mainImage: baseUrl + '/img/projects/qws-weapp' + imgSuffix,
      title: '360 Horse Guard - Applet',
      subTitle: 'WeChat Applet',
      desc: '360 rider guard applet version for the purchase of equipment, can not download the APP, you can quickly register an account through the applet and bind the device, using WeChat alarm and location information, combined with the public number to allow users to know the vehicle for the first time information. ',
      posi: 'right'
    },
    zczs: {
      background: '#339966',
      mainImage: baseUrl + '/img/projects/zczs' + imgSuffix,
      title: 'chasing car assistant - applet',
      subTitle: 'WeChat Applet',
      desc: 'The company offers its large customers a convenient system to help users find vehicles, and users can report discard information, which can be viewed by key account managers. ',
      posi: 'left'
    },
    xhdz: {
      background: '#336699',
      mainImage: baseUrl + '/img/projects/xhdz' + imgSuffix,
      title: 'Tiger Power Station',
      subTitle: 'WeChat Applet',
      desc: 'Tiger power station to provide safe and reliable shared charging method to solve the problem of electric bicycle users charging difficult, charging unsafe and other issues, covering residential areas, parking lots, office buildings and other regions. Through this project, in-depth study and use of long-connected knowledge. ',
      posi: 'right'
    },
    shxt: {
      background: '#389867',
      title: 'Business System',
      subTitle: 'iOS Developer',
      desc: 'Divided into 360 ride guards and Yi tiger electric two merchant system for the sale and sales staff to provide technical support. ',
      posi: 'left'
    }
  }
}