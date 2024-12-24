<script setup lang="ts">
const props = defineProps<{
    rotation: number;
    internalShown: boolean;
    surfaceShown: boolean;
}>();

const [[cloudTransform, cloudCopyTransform]] = usePlanetAnimation([
    {
        start: -290,
        end: 290,
        speed: props.rotation / 250,
    },
]);
</script>

<template>
    <div
        class="absolute top-[50%] h-[30vw] max-h-[290px] w-[30vw] max-w-[290px] translate-y-[-50%] !overflow-hidden rounded-full"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 290 290"
            class="!overflow-hidden rounded-full"
        >
            <defs>
                <circle id="a" cx="145" cy="145" r="145" />
                <circle id="c" cx="145" cy="145" r="145" />
                <path id="e" d="M0 0c76.768 0 139 62.232 139 139S76.768 278 0 278z" />
            </defs>
            <g fill="none" fill-rule="evenodd">
                <circle cx="145" cy="145" r="145" fill="#DEF4FC" fill-rule="nonzero" />
                <path
                    fill="#B1D5E2"
                    fill-rule="nonzero"
                    :transform="cloudTransform"
                    d="M154 253c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm86-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-110 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-45-60c0-6.627-5.373-12-12-12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h73c6.627 0 12 5.373 12 12s-5.373 12-12 12H99v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h45c6.627 0 12 5.373 12 12s-5.373 12-12 12h-2l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h52c6.627 0 12 5.373 12 12s-5.373 12-12 12H70c-6.627 0-12-5.373-12-12s5.373-12 12-12h3c6.627 0 12-5.373 12-12zm160 12c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-223 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm199-96c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm24-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-58c-6.627 0-12-5.373-12-12s5.373-12 12-12h58z"
                />
                <path
                    fill="#B1D5E2"
                    fill-rule="nonzero"
                    :transform="cloudCopyTransform"
                    d="M154 253c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm86-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-110 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-45-60c0-6.627-5.373-12-12-12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h73c6.627 0 12 5.373 12 12s-5.373 12-12 12H99v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h45c6.627 0 12 5.373 12 12s-5.373 12-12 12h-2l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h52c6.627 0 12 5.373 12 12s-5.373 12-12 12H70c-6.627 0-12-5.373-12-12s5.373-12 12-12h3c6.627 0 12-5.373 12-12zm160 12c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-223 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm199-96c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm24-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-58c-6.627 0-12-5.373-12-12s5.373-12 12-12h58z"
                />
                <mask id="d" fill="#fff">
                    <use xlink:href="#c" />
                </mask>
                <path fill="#000" fill-rule="nonzero" mask="url(#d)" opacity=".078" d="M146 0h145v290H146z" />
            </g>
            <g transform="translate(146 6)" v-show="internalShown">
                <mask id="f" fill="#fff">
                    <use xlink:href="#e" />
                </mask>
                <use fill="#7A939C" xlink:href="#e" />
                <circle cx="1" cy="140" r="131" fill="#9AB2BB" mask="url(#f)" />
                <circle cx="1" cy="139" r="95" fill="#E8903F" mask="url(#f)" />
                <circle cx=".5" cy="139.5" r="41.5" fill="#FFEA87" mask="url(#f)" />
            </g>
        </svg>
    </div>
    <div class="relative w-full h-full xl:scale-100 md:scale-75 xs:scale-50 mb-[250px]">
        <img v-show="surfaceShown" src="/images/geology-mercury.png" class="absolute w-[150px] h-auto top-1/2 left-1/2 -translate-x-1/2 translate-y-10" />
    </div>
</template>
