 import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

 const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "deposit",
            component: () => import("../views/DepositView.vue")
        },
        {
            path: "/withdraw",
            name: "withdraw",
            component: () => import("../views/WithdrawView.vue")
        }
    ]
 })

 export default router