export type PageEntry = {
  name: string;
  route: string;
  type: "H5" | "Admin";
  category: string;
  highlights: string[];
};

export const pageCatalog: PageEntry[] = [
  {
    name: "登录页",
    route: "/login",
    type: "H5",
    category: "登录注册",
    highlights: ["手机号+验证码", "主按钮登录", "注册跳转"]
  },
  {
    name: "注册页",
    route: "/register",
    type: "H5",
    category: "登录注册",
    highlights: ["身份选择", "验证码", "注册按钮"]
  },
  {
    name: "身份选择页",
    route: "/role-select",
    type: "H5",
    category: "登录注册",
    highlights: ["两种身份卡片", "图标+描述", "动效选择"]
  },
  {
    name: "兼职者首页",
    route: "/worker/home",
    type: "H5",
    category: "兼职者端",
    highlights: ["搜索筛选", "岗位卡片", "底部导航"]
  },
  {
    name: "岗位详情页",
    route: "/worker/job-detail/1",
    type: "H5",
    category: "兼职者端",
    highlights: ["岗位信息", "招聘方卡片", "报名操作栏"]
  },
  {
    name: "我的报名页",
    route: "/worker/my-applications",
    type: "H5",
    category: "兼职者端",
    highlights: ["Tab 状态切换", "报名卡片", "打卡按钮"]
  },
  {
    name: "兼职者个人中心",
    route: "/worker/profile",
    type: "H5",
    category: "兼职者端",
    highlights: ["用户信息卡", "菜单列表", "信用分展示"]
  },
  {
    name: "招聘方首页",
    route: "/recruiter/home",
    type: "H5",
    category: "招聘方端",
    highlights: ["发布按钮", "岗位卡片", "状态标签"]
  },
  {
    name: "发布岗位页",
    route: "/recruiter/post-job",
    type: "H5",
    category: "招聘方端",
    highlights: ["表单校验", "薪资/人数", "提交发布"]
  },
  {
    name: "报名管理页",
    route: "/recruiter/applications/1",
    type: "H5",
    category: "招聘方端",
    highlights: ["候选人列表", "录用/拒绝", "二次确认"]
  },
  {
    name: "招聘方个人中心",
    route: "/recruiter/profile",
    type: "H5",
    category: "招聘方端",
    highlights: ["企业信息卡", "菜单列表", "联系客服"]
  },
  {
    name: "后台登录页",
    route: "/admin/login",
    type: "Admin",
    category: "管理后台",
    highlights: ["居中表单", "记住密码", "Logo"]
  },
  {
    name: "数据看板",
    route: "/admin/dashboard",
    type: "Admin",
    category: "管理后台",
    highlights: ["指标卡", "趋势图", "用户表格"]
  },
  {
    name: "用户管理",
    route: "/admin/users",
    type: "Admin",
    category: "管理后台",
    highlights: ["搜索筛选", "用户表格", "封禁操作"]
  },
  {
    name: "岗位管理",
    route: "/admin/jobs",
    type: "Admin",
    category: "管理后台",
    highlights: ["岗位表格", "上下架", "分页"]
  },
  {
    name: "报名监控",
    route: "/admin/applications",
    type: "Admin",
    category: "管理后台",
    highlights: ["状态筛选", "异常提醒", "列表详情"]
  },
  {
    name: "系统设置",
    route: "/admin/settings",
    type: "Admin",
    category: "管理后台",
    highlights: ["业务配置", "风控配置", "消息模板"]
  },
  {
    name: "帮助中心",
    route: "/shared/help-center",
    type: "H5",
    category: "共享页面",
    highlights: ["FAQ 列表", "流程指引", "联系客服入口"]
  },
  {
    name: "关于我们",
    route: "/shared/about",
    type: "H5",
    category: "共享页面",
    highlights: ["平台定位", "联系方式", "版本信息"]
  }
];

export const categoryOrder = [
  "登录注册",
  "兼职者端",
  "招聘方端",
  "共享页面",
  "管理后台"
];
