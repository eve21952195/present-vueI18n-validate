<script setup>
import { provide } from 'vue'
import HeaderItem from './components/HeaderItem.vue'
import HeadInform from './components/HeadInform.vue'

import { RouterLink, RouterView, useRouter } from 'vue-router'

// 引入 composable
import { useSetLocale } from './composables/useSetLocale'
const { t } = useSetLocale()

provide("t", t)

// const router = useRouter()
// setTimeout(()=> {
//   router.push({path: "/about", query: { user: 123 }})
// }, 3000)

</script>

<template>
  <header>
    <HeaderItem></HeaderItem>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">{{t('tradingPage.deposit.tab')}}</RouterLink>
        <RouterLink to="/withdraw">{{t('tradingPage.withdraw.tab')}}</RouterLink>
      </nav>
      <HeadInform></HeadInform>
    </div>
  </header>
  <RouterView></RouterView>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav{
  border: 1px solid red;
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 10px;
  a{
    display: block;
    padding: 0.5rem 5rem;
    text-decoration: none;
    border: 1px solid green;
  }
}



// @media (min-width: 1024px) {

// }
</style>
