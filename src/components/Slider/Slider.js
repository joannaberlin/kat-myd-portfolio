import React, { useRef, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
import { useSprings, a } from '@react-spring/web';

// import styles from './Slider.module.scss';

const stylesInline = {
	container: {
		position: 'relative',
		height: '100%',
		width: '100%',
		touchAction: 'none',
	},
	item: { position: 'absolute', height: '100%', willChange: 'transform' },
};

const Slider = ({ images, width = 600, visible = 4, style, children }) => {
	const idx = useCallback(
		(x, l = images.length) => (x < 0 ? x + l : x) % l,
		[images]
	);
	const getPos = useCallback(
		(i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx),
		[idx]
	);
	const [springs, api] = useSprings(images.length, (i) => ({
		x: (i < images.length - 1 ? i : -1) * width,
	}));
	const prev = useRef([0, 1]);
	const target = useRef();
	const runSprings = useCallback(
		(y, dy) => {
			const firstVis = idx(Math.floor(y / width) % images.length);
			const firstVisIdx = dy < 0 ? images.length - visible - 1 : 1;
			api.start((i) => {
				const position = getPos(i, firstVis, firstVisIdx);
				const prevPosition = getPos(i, prev.current[0], prev.current[1]);
				const rank =
					firstVis - (y < 0 ? images.length : 0) + position - firstVisIdx;
				const configPos = dy > 0 ? position : images.length - position;
				return {
					x: (-y % (width * images.length)) + width * rank,
					immediate: dy < 0 ? prevPosition > position : prevPosition < position,
					config: {
						tension: (1 + images.length - configPos) * 100,
						friction: 30 + configPos * 40,
					},
				};
			});
			prev.current = [firstVis, firstVisIdx];
		},
		[idx, getPos, width, visible, api, images.length]
	);

	const wheelOffset = useRef(0);
	const dragOffset = useRef(0);

	useGesture(
		{
			onDrag: ({ event, offset: [x], direction: [dx] }) => {
				event.preventDefault();
				if (dx) {
					dragOffset.current = -x;
					runSprings(wheelOffset.current + -x, -dx);
				}
			},
			onWheel: ({ event, offset: [, y], direction: [, dy] }) => {
				event.preventDefault();
				if (dy) {
					wheelOffset.current = y;
					runSprings(dragOffset.current + y, dy);
				}
			},
		},
		{ target, wheel: { eventOptions: { passive: false } } }
	);

	return (
		<div ref={target} style={{ ...style, ...stylesInline.container }}>
			{springs.map(({ x }, i) => (
				<a.div
					key={i}
					style={{ ...stylesInline.item, width, x }}
					children={children(images[i], i)}
				/>
			))}
		</div>
	);
};

export default Slider;
