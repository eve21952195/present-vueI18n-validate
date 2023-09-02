<script setup>
import { provide, ref } from 'vue'
import HeaderItem from './components/HeaderItem.vue'
import HeadInform from './components/HeadInform.vue'

import { RouterLink, RouterView, useRouter } from 'vue-router'

// 引入 composable
import { useSetLocale } from './composables/useSetLocale'
import { useBindProps } from './composables/useBindProps'
const { t } = useSetLocale()
const { inputBindProps, selectBindProps, fieldContent } = useBindProps()

provide("t", t)
provide("inputBindProps", inputBindProps)
provide("selectBindProps", selectBindProps)
provide("fieldContent", fieldContent)

const current = ref('deposit');
const changePage = (page) => {
  current.value = page
}

</script>

<template>
  <header>
    <HeaderItem></HeaderItem>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="btn" :class="{active: current === 'deposit'}" @click="changePage('deposit')">{{t('tradingPage.deposit.tab')}}</RouterLink>
        <RouterLink to="/withdraw" class="btn" :class="{active: current === 'withdraw'}" @click="changePage('withdraw')">{{t('tradingPage.withdraw.tab')}}</RouterLink>
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
  display: flex;
  text-align: center;
  justify-content: center;
  .btn{
    display: block;
    padding: 0.5rem 5rem;
    text-decoration: none;
    background-color: #e4e4e4;
    color: #3f3f3f;
  }
  .active{
    background: #007bff;
    color: aliceblue;
  }
}


#app{
  padding: 0 2rem;
}

// @media (min-width: 1024px) {

// }
</style>
