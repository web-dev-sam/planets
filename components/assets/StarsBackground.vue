<script setup lang="ts">
const route = useRoute();
const values = [0.5, 1, 1.5, 2, 2.5];
const useInitialPositions = () =>
    new Array(~~((window.innerWidth / 2160) * 300)).fill(0).map((_, i) => {
        return {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: values[i % 5],
            opacity: 0,
        };
    });
let initialPositions = useInitialPositions();
const positions = ref(initialPositions);

let req = requestAnimationFrame(update);
function update() {
    positions.value = positions.value.map((p, i) => {
        const exceededX = p.x > window.innerWidth;
        const exceededY = p.y > window.innerHeight;
        const preceedingX = p.x < 0;
        const preceedingY = p.y < 0;
        const dirX =
            {
                mercury: 1,
                venus: -1,
                earth: -1,
                mars: 1,
                jupiter: -1,
                saturn: 1,
                uranus: 0,
                neptune: -1,
            }[route.params.id.toString()] ?? 1;
        const dirY =
            {
                mercury: 0,
                venus: 0,
                earth: 0,
                mars: 0,
                jupiter: 0,
                saturn: 1,
                uranus: -1,
                neptune: 0,
            }[route.params.id.toString()] ?? 1;
        return {
            x: preceedingX
                ? window.innerWidth
                : exceededX
                ? 0
                : p.x + (2 / (initialPositions[i].r * initialPositions[i].r)) * dirX,
            y: preceedingY
                ? window.innerHeight
                : exceededY
                ? 0
                : p.y + (2 / (initialPositions[i].r * initialPositions[i].r)) * dirY,
            r: initialPositions[i].r,
            opacity: initialPositions[i].r / 2,
        };
    });
    req = requestAnimationFrame(update);
};

req = requestAnimationFrame(update);
onBeforeUnmount(() => {
    cancelAnimationFrame(req);
});

let resettingStars = false;
window.addEventListener("resize", () => {
    if (resettingStars) return;
    resettingStars = true;

    setTimeout(() => {
        initialPositions = useInitialPositions();
        positions.value = initialPositions;
        resettingStars = false;
    }, 1000);
});
</script>

<template>
    <slot />
    <svg class="pointer-events-none absolute top-0 left-0 h-screen w-screen -z-10">
        <g fill="#FFF" fill-rule="evenodd" opacity=".202">
            <circle v-for="p in positions" :r="p.r" :cx="p.x" :cy="p.y" :opacity="p.opacity" />
        </g>
    </svg>
</template>
