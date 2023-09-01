 import { createRouter, createWebHistory } from "vue-router";

 const router = createRouter({
    history: createWebHistory(),
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