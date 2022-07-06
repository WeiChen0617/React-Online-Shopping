export default [
  {
    path: "/admin",
    name: "管理页面",
    icon: "crown",
    access: "canAdmin",
    routes: [
      {
        path: "product",
        name: "商品管理",
        component: "./admin/product",
      },
      {
        path: "voucher",
        name: "优惠券管理",
        component: "./admin/voucher",
      },
      // {
      //   path: "order",
      //   name: "订单管理",
      //   component: "./admin/order",
      // },
      {
        component: "./404",
      },
    ],
  },
  {
    name: "工作台",
    icon: "smile",
    routes: [
      {
        name: "商品列表",
        icon: "smile",
        path: "workplace/product",
        component: "./workplace/product",
      }, {
        name: "购物车",
        icon: "smile",
        path: "workplace/cart",
        component: "./workplace/cart",
      },
    ]
  },

  {
    path: "/",
    redirect: "/workplace",
  },
  {
    component: "./404",
  },
];
