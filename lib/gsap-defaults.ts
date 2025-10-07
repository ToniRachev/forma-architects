export const TEXT_MASK = {
    yPercent: 120,
    opacity: 0,
}

export const IMAGE_SLIDE = {
    y: 200,
    opacity: 0,
}

export const SPLIT_TEXT_MASK = (timeline: gsap.core.Timeline) => ({
    type: 'lines' as const,
    mask: 'lines' as const,
    onSplit: (self: SplitText) => {
        const tween = timeline.from(self.lines, {
            ...TEXT_MASK,
            stagger: {
                each: 0.05,
            }
        })

        timeline.add(tween, 0);
        return tween;
    }
})