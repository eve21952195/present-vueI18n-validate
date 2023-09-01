<script setup>
import { useSetLocale } from '../composables/useSetLocale'

const { setAlllocale, availableLocales } = useSetLocale()

const changeLanguage = ($event) => {
    console.log("change val--->", $event.target.value);
    setAlllocale($event.target.value)
}
</script>

<template>
    <select name="language" @change="changeLanguage">
        <option  v-for="locale in availableLocales" :key="locale" :value="locale" :selected="(locale === 'zh')">{{ locale }}</option>
    </select>
</template>