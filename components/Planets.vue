<script setup lang="ts">
import { Planet } from "~~/utils/types";

const route = useRoute();
const props = defineProps<{ planets: Planet[] }>();
const section = useState<"overview" | "structure" | "geology">("section", () => "overview");
const planet = props.planets.find((p) => p.id === route.params.id);
if (!planet) {
    navigateTo("/planets/earth");
    throw new Error("Planet not found");
}

function decodeRotation(rotation: string) {
    const r = parseFloat(rotation);
    const isDays = rotation.toLowerCase().includes("days");
    const isHours = rotation.toLowerCase().includes("hours");
    if (isDays) {
        return r;
    }
    if (isHours) {
        return r / 24;
    }
}
const rotation = decodeRotation(planet.rotation) ?? 0;

function toggleSection(newSection: "overview" | "structure" | "geology") {
    section.value = newSection;
}
</script>

<template>
    <div class="max-h-[50px] flex-1 justify-between border-b-[1px] border-b-white-20% text-center xs:flex md:hidden">
        <div role="button" @click="toggleSection('overview')" class="h3 flex-1 !leading-[50px]">
            <span
                :class="section === 'overview' ? `border-b-${planet.id}` : 'border-none'"
                class="mx-auto block h-full w-min border-b-4"
                >Overview
            </span>
        </div>
        <div role="button" @click="toggleSection('structure')" class="h3 flex-1 !leading-[50px]">
            <span
                :class="section === 'structure' ? `border-b-${planet.id}` : 'border-none'"
                class="mx-auto block h-full w-min border-b-4"
            >
                Structure
            </span>
        </div>
        <div role="button" @click="toggleSection('geology')" class="h3 flex-1 !leading-[50px]">
            <span
                :class="section === 'geology' ? `border-b-${planet.id}` : 'border-none'"
                class="mx-auto block h-full w-min border-b-4"
            >
                Surface
            </span>
        </div>
    </div>
    <div class="flex-1"></div>
    <main class="container mx-auto grid w-screen grid-cols-4 gap-4 p-12">
        <div
            class="planets-image-cell relative flex min-h-[30vw] justify-center xs:col-span-4 xs:max-h-[350px] sm:max-h-[300px] md:col-span-4 md:max-h-[480px] xl:col-span-2 xl:max-h-full"
        >
            <AssetsPlanetMercury
                v-if="route.params.id === 'mercury'"
                :rotation="rotation"
                :internalShown="section === 'structure'"
                :surfaceShown="section === 'geology'"
            />
            <AssetsPlanetVenus
                v-if="route.params.id === 'venus'"
                :rotation="rotation"
                :internalShown="section === 'structure'"
                :surfaceShown="section === 'geology'"
            />
            <AssetsPlanetEarth
                v-if="route.params.id === 'earth'"
                :rotation="rotation"
                :internalShown="section === 'structure'"
                :surfaceShown="section === 'geology'"
            />
            <AssetsPlanetMars
                v-if="route.params.id === 'mars'"
                :rotation="rotation"
                :internalShown="section === 'structure'"
                :surfaceShown="section === 'geology'"
            />
            <AssetsPlanetJupiter
                v-if="route.params.id === 'jupiter'"
                :rotation="rotation"
                :internalShown="section === 'structure'"
                :surfaceShown="section === 'geology'"
            />
            <AssetsPlanetSaturn
                v-if="route.params.id === 'saturn'"
                :rotation="rotation"
                :internalShown="section === 'structure'"
                :surfaceShown="section === 'geology'"
            />
            <AssetsPlanetUranus
                v-if="route.params.id === 'uranus'"
                :rotation="rotation"
                :internalShown="section === 'structure'"
                :surfaceShown="section === 'geology'"
            />
            <AssetsPlanetNeptune
                v-if="route.params.id === 'neptune'"
                :rotation="rotation"
                :internalShown="section === 'structure'"
                :surfaceShown="section === 'geology'"
            />
        </div>
        <div class="flex justify-end py-4 xs:col-span-4 md:col-span-4 xl:col-span-2">
            <section class="flex justify-center gap-4 xs:w-full xs:flex-col md:flex-row xl:w-[350px] xl:flex-col">
                <div class="xs:w-full xs:text-center md:text-left">
                    <h1>{{ planet.name }}</h1>
                    <p class="mt-4 h-32 xs:h-auto">{{ planet[section].content }}</p>
                    <span class="my-6 block opacity-50">
                        Source:
                        <a class="font-bold underline" :href="planet[section].source" target="_blank">
                            Wikipedia
                            <svg class="inline-block ml-1" width="12" height="12">
                                <path
                                    fill="#FFF"
                                    d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                                />
                            </svg>
                        </a>
                    </span>
                </div>
                <div class="w-full min-w-[280px] flex-col justify-center xs:hidden md:flex">
                    <button
                        :class="section === 'overview' ? 'bg-' + planet.id : ''"
                        class="before:content-['01']"
                        @click="toggleSection('overview')"
                    >
                        Overview
                    </button>
                    <button
                        :class="section === 'structure' ? 'bg-' + planet.id : ''"
                        class="before:content-['02']"
                        @click="toggleSection('structure')"
                    >
                        Internal Structure
                    </button>
                    <button
                        :class="section === 'geology' ? 'bg-' + planet.id : ''"
                        class="before:content-['03']"
                        @click="toggleSection('geology')"
                    >
                        Surface Geology
                    </button>
                </div>
            </section>
        </div>
        <div class="planet-fact-card">
            <h3>Rotation</h3>
            <p>{{ planet.rotation }}</p>
        </div>
        <div class="planet-fact-card">
            <h3>Revolution</h3>
            <p>{{ planet.revolution }}</p>
        </div>
        <div class="planet-fact-card">
            <h3>Radius</h3>
            <p>{{ planet.radius }}</p>
        </div>
        <div class="planet-fact-card">
            <h3>Avg. Temp.</h3>
            <p>{{ planet.temperature }}</p>
        </div>
    </main>
</template>
