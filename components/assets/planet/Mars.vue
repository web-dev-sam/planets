<script setup lang="ts">
const props = defineProps<{
    rotation: number;
    internalShown: boolean;
    surfaceShown: boolean;
}>();

const [[cloudTransform, cloudCopyTransform], [dustTransform, dustCopyTransform], [dust2Transform, dust2CopyTransform]] =
    usePlanetAnimation([
        {
            start: -360,
            end: 360,
            speed: props.rotation * -0.4,
        },
        {
            start: -360,
            end: 360,
            speed: props.rotation * -0.35,
        },
        {
            start: -360,
            end: 360,
            speed: props.rotation * -0.2,
        },
    ]);
</script>

<template>
    <div
        class="absolute top-[50%] h-[30vw] max-h-[336px] w-[30vw] max-w-[336px] translate-y-[-50%] !overflow-hidden rounded-full"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 336 336"
            class="!overflow-hidden rounded-full"
        >
            <defs>
                <circle id="a" cx="168" cy="168" r="168" />
                <circle id="c" cx="168" cy="168" r="168" />
                <circle id="e" cx="168" cy="168" r="168" />
                <circle id="g" cx="168" cy="168" r="168" />
                <path id="i" d="M0 0c88.918 0 161 72.082 161 161S88.918 322 0 322z" />
            </defs>
            <g fill="none" fill-rule="evenodd">
                <circle cx="168" cy="168" r="168" fill="#FF6A45" fill-rule="nonzero" />
                <path
                    fill="#FF9B6B"
                    fill-rule="nonzero"
                    d="M102 36c0-6.627-5.373-12-12-12H55c-6.627 0-12-5.373-12-12S48.373 0 55 0h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99S148.604 47.727 155 47.99V48H168c6.627 0 12 5.373 12 12s-5.373 12-12 12H41c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12zm172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h5z"
                    :transform="cloudTransform"
                />
                <path
                    fill="#FF9B6B"
                    fill-rule="nonzero"
                    d="M102 36c0-6.627-5.373-12-12-12H55c-6.627 0-12-5.373-12-12S48.373 0 55 0h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99S148.604 47.727 155 47.99V48H168c6.627 0 12 5.373 12 12s-5.373 12-12 12H41c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12zm172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h5z"
                    :transform="cloudCopyTransform"
                />
                <path
                    fill="#FF9B6B"
                    fill-rule="nonzero"
                    d="M209 324c0-6.627-5.373-12-12-12h-35c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99v.01H275c6.627 0 12 5.373 12 12s-5.373 12-12 12H148c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12zm172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h5z"
                    :transform="dustTransform"
                />
                <path
                    fill="#FF9B6B"
                    fill-rule="nonzero"
                    d="M209 324c0-6.627-5.373-12-12-12h-35c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99v.01H275c6.627 0 12 5.373 12 12s-5.373 12-12 12H148c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12zm172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h5z"
                    :transform="dustCopyTransform"
                />
                <path
                    fill="#D04237"
                    fill-rule="nonzero"
                    d="M217 264c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-117 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H80c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm163-96c6.627 0 12 5.373 12 12s-5.373 12-12 12H112l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h19c6.627 0 12 5.373 12 12s-5.373 12-12 12H11c-6.627 0-12-5.373-12-12s5.373-12 12-12h32c6.627 0 12-5.373 12-12s-5.373-12-12-12h-64c-6.627 0-12-5.373-12-12s5.373-12 12-12h284zm-52 48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zM139 72c6.627 0 12 5.373 12 12s-5.373 12-12 12H99c-6.627 0-12-5.373-12-12s5.373-12 12-12h40zm209 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12s5.373-12 12-12h40z"
                    :transform="dust2Transform"
                />
                <path
                    fill="#D04237"
                    fill-rule="nonzero"
                    d="M217 264c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-117 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H80c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm163-96c6.627 0 12 5.373 12 12s-5.373 12-12 12H112l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h19c6.627 0 12 5.373 12 12s-5.373 12-12 12H11c-6.627 0-12-5.373-12-12s5.373-12 12-12h32c6.627 0 12-5.373 12-12s-5.373-12-12-12h-64c-6.627 0-12-5.373-12-12s5.373-12 12-12h284zm-52 48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zM139 72c6.627 0 12 5.373 12 12s-5.373 12-12 12H99c-6.627 0-12-5.373-12-12s5.373-12 12-12h40zm209 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12s5.373-12 12-12h40z"
                    :transform="dust2CopyTransform"
                />
                <path fill="#000" fill-rule="nonzero" mask="url(#h)" opacity=".078" d="M169-16h184v368H169z" />
            </g>
            <g transform="translate(169 7)" v-show="internalShown">
                <mask id="j" fill="#fff">
                    <use xlink:href="#i" />
                </mask>
                <use fill="#97271E" xlink:href="#i" />
                <circle cx="1" cy="161" r="154" fill="#DC5D1C" mask="url(#j)" />
                <circle cx="1" cy="161" r="79" fill="#F8A053" mask="url(#j)" />
                <circle cx="1" cy="161" r="54" fill="#FFCA79" mask="url(#j)" />
                <circle cx="1" cy="162" r="40" fill="#FFF5C6" mask="url(#j)" />
            </g>
        </svg>
    </div>
    <div class="relative w-full h-full xl:scale-100 md:scale-75 xs:scale-50 mb-[250px]">
        <img v-show="surfaceShown" src="/images/geology-mars.png" class="absolute w-[170px] h-auto top-1/2 left-1/2 -translate-x-1/2 translate-y-10" />
    </div>
</template>
