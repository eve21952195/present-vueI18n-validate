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
    border: 1px solid #dbd0bf;
    display: flex;
    margin: 30px 0;
    ul{
        list-style: none;
        flex: 1 0;
        padding: 10PX 0;
        text-align: center;
    }
}</style>