
export default function usePlanetAnimation(animationOptions: {
    speed: number,
    start: number,
    end: number,
    direction?: "horizontal" | "vertical" | "sinus-vertical",
    height?: number,
}[]) {
    return animationOptions.map((animationOption) => {
        const cloudTransformX = ref(0);
        const cloudCopyTransformX = ref(animationOption.start);
        const cloudTransformY = ref(0);
        const cloudCopyTransformY = ref(animationOption.start);
        const cloudTransform = ref("translate(0 0)");
        const cloudCopyTransform = ref("translate(0 0)");

        watchEffect(() => {
            cloudTransform.value = `translate(${cloudTransformX.value} ${cloudTransformY.value})`;
            cloudCopyTransform.value = `translate(${cloudCopyTransformX.value} ${cloudTransformY.value})`;
        });

        let frame = 0;
        let req: number;
        const update = () => {
            frame++;

            if (animationOption.direction === "vertical") {
                cloudTransformY.value = cloudTransformY.value + animationOption.speed;
                cloudCopyTransformY.value = cloudCopyTransformY.value + animationOption.speed;
                if (cloudTransformY.value > animationOption.end) {
                    cloudTransformY.value = animationOption.start;
                }
                if (cloudCopyTransformY.value > animationOption.end) {
                    cloudCopyTransformY.value = animationOption.start;
                }
                if (cloudTransformY.value < animationOption.start) {
                    cloudTransformY.value = animationOption.end;
                }
                if (cloudCopyTransformY.value < animationOption.start) {
                    cloudCopyTransformY.value = animationOption.end;
                }
                req = requestAnimationFrame(update);
                return;
            }

            if (animationOption.direction === "sinus-vertical") {
                cloudTransformY.value = Math.sin(animationOption.speed * frame) * (animationOption.height ?? 0);
                if (cloudTransformY.value > animationOption.end) {
                    cloudTransformY.value = animationOption.start;
                }
                if (cloudTransformY.value < animationOption.start) {
                    cloudTransformY.value = animationOption.end;
                }
                req = requestAnimationFrame(update);
                return;
            }

            cloudTransformX.value = cloudTransformX.value + animationOption.speed;
            cloudCopyTransformX.value = cloudCopyTransformX.value + animationOption.speed;
            if (cloudTransformX.value > animationOption.end) {
                cloudTransformX.value = animationOption.start;
            }
            if (cloudCopyTransformX.value > animationOption.end) {
                cloudCopyTransformX.value = animationOption.start;
            }
            if (cloudTransformX.value < animationOption.start) {
                cloudTransformX.value = animationOption.end;
            }
            if (cloudCopyTransformX.value < animationOption.start) {
                cloudCopyTransformX.value = animationOption.end;
            }

            req = requestAnimationFrame(update);
        };

        req = requestAnimationFrame(update);
        onUnmounted(() => {
            cancelAnimationFrame(req);
        });

        return [
            cloudTransform,
            cloudCopyTransform,
        ];
    })
}
