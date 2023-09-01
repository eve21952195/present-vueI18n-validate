<script setup>
import { inject } from 'vue'
const t = inject("t")
</script>

<template>
    <div class="outer">
        <ul>
            <li>{{ t('common.username')}}</li>
            <li>evonne</li>
        </ul>
        <ul>
            <li>{{ t('common.balance')}}</li>
            <li>{{ $n(10000, 'currency') }}</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.outer{
    border: 1px solid #736b5e;
    display: flex;
    ul{
        border: 1px solid #736b5e;
        list-style: none;
        flex: 1 0;
        padding: 0;
        text-align: center;
    }
}</style>