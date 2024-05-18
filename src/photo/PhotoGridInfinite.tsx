'use client';

import { Camera } from '@/camera';
import { INFINITE_SCROLL_MULTIPLE_GRID } from '.';
import InfinitePhotoScroll from './InfinitePhotoScroll';
import PhotoGrid from './PhotoGrid';

export default function PhotoGridInfinite({
  cacheKey,
  initialOffset,
  camera,
  animateOnFirstLoadOnly,
}: {
  cacheKey: string
  initialOffset: number
  camera?: Camera
  animateOnFirstLoadOnly?: boolean
}) {
  return (
    <InfinitePhotoScroll
      cacheKey={cacheKey}
      initialOffset={initialOffset}
      itemsPerPage={INFINITE_SCROLL_MULTIPLE_GRID}
      camera={camera}
    >
      {({ photos, onLastPhotoVisible }) =>
        <PhotoGrid {...{
          photos,
          camera,
          onLastPhotoVisible,
          animateOnFirstLoadOnly,
        }} />}
    </InfinitePhotoScroll>
  );
}
