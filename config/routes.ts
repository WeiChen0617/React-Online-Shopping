export default [
  {
    path: "/admin",
    name: "Management",
    icon: "crown",
    access: "canAdmin",
    routes: [
      {
        path: "product",
        name: "Product",
        component: "./admin/product",
      },
      {
        path: "voucher",
        name: "Voucher",
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
    name: "Work Place",
    icon: "smile",
    routes: [
      {
        name: "Product",
        icon: "smile",
        path: "workplace/product",
        component: "./workplace/product",
      }, {
        name: "Cart",
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
