<script setup lang="ts">
import { Planet } from '~~/utils/types';

const { data } = await useAsyncData("planets", () => {
    return queryContent("/").sort({ index: 1 }).find()
})
const planets = data as unknown as Planet[]

useHead({
    link: [
        { rel: "icon", href: "/favicon.ico" },
    ],
})

</script>

<template>
    <Body class="overflow-x-hidden"></Body>
    <div class="h-screen flex flex-col overflow-x-hidden">
        <ClientOnly>
            <AssetsStarsBackground>
                <Navigation :planets="planets" />
                <Planets :planets="planets" />
                <div class="flex-1"></div>
            </AssetsStarsBackground>
        </ClientOnly>
    </div>
</template>
