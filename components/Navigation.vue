<script setup lang="ts">
import { Planet } from "~~/utils/types";

const route = useRoute();
const props = defineProps<{ planets: Planet[] }>();
const mobilePlanetsMenu = useState("mobilePlanetsMenu", () => false);
const planets = props.planets;
</script>

<template>
    <nav class="flex border-b-[1px] border-b-white-20% px-2 md:h-40 md:flex-col xl:h-20 xl:flex-row">
        <NuxtLink
            to="/planets/earth"
            class="h2 ml-6 h-[1.75rem] min-w-[7rem] self-center overflow-hidden !text-[1.75rem] uppercase xs:!leading-[1.5rem] md:h-20 md:!leading-[6.6rem] xl:h-auto xl:translate-y-[-2px] xl:!leading-[1.75rem]"
        >
            The Planets
        </NuxtLink>
        <div class="flex-1 md:hidden xl:block"></div>
        <ul class="h-20 text-center xs:hidden md:flex md:justify-center xl:justify-end">
            <li
                v-for="planet of planets"
                :key="planet.id"
                :class="
                    planet.id === route.params.id
                        ? `border-t-${planet.id} pointer-events-none opacity-100`
                        : 'border-t-transparent'
                "
                class="mx-4 flex h-20 py-4 leading-loose opacity-75 transition-[opacity] hover:opacity-100 md:border-none xl:border-t-4 xl:border-solid"
            >
                <h4 class="block h-10 self-center transition-all hover:translate-y-[-4px] xl:translate-y-[-2px]">
                    <NuxtLink :to="`/planets/${planet.id}`" class="block h-10 cursor-pointer leading-10">
                        {{ planet.name }}
                    </NuxtLink>
                </h4>
            </li>
        </ul>
        <div class="flex h-20 md:hidden" @click="mobilePlanetsMenu = !mobilePlanetsMenu">
            <AssetsIconHamburger class="mr-5 cursor-pointer self-center" />
        </div>
    </nav>

    <Body :class="mobilePlanetsMenu ? 'overflow-hidden' : ''"></Body>
    <div v-show="mobilePlanetsMenu" class="absolute z-40 h-screen w-screen bg-dark">
        <nav class="flex h-full w-full flex-col justify-center overflow-y-auto">
            <div class="absolute top-0 right-0 h-20 md:hidden flex justify-between w-full border-b-[1px] border-graydark" @click="mobilePlanetsMenu = !mobilePlanetsMenu">
                <NuxtLink
                    to="/planets/earth"
                    class="h2 ml-6 h-[1.75rem] min-w-[7rem] self-center overflow-hidden !text-[1.75rem] uppercase xs:!leading-[1.5rem] md:h-20 md:!leading-[6.6rem] xl:h-auto xl:translate-y-[-2px] xl:!leading-[1.75rem]"
                >
                    The Planets
                </NuxtLink>
                <div class="flex-1"></div>
                <AssetsIconHamburger :class="mobilePlanetsMenu ? 'opacity-25' : ''" class="mr-7 cursor-pointer self-center" />
            </div>
            <ul class="flex w-full flex-col justify-center self-center p-10">
                <li
                    v-for="planet of planets"
                    :key="planet.id"
                    :class="
                        planet.id === route.params.id
                            ? `border-t-${planet.id} pointer-events-none opacity-100`
                            : 'border-t-transparent'
                    "
                    class="mx-4 flex w-full flex-1 gap-7 self-center border-t-[1px] !border-graydark py-5"
                >
                    <div class="self-center">
                        <div :class="true ? `bg-${planet.id}` : ''" class="h-5 w-5 self-center rounded-full"></div>
                    </div>
                    <h3 class="w-full self-center text-p">
                        <NuxtLink
                            :to="`/planets/${planet.id}`"
                            @click="mobilePlanetsMenu = false"
                            class="block w-full cursor-pointer"
                        >
                            {{ planet.name }}
                        </NuxtLink>
                    </h3>
                    <svg class="mr-4 self-center" width="8" height="8">
                        <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
                    </svg>
                </li>
            </ul>
        </nav>
    </div>
</template>
