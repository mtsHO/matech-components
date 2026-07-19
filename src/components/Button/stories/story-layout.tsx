import type { CSSProperties, ReactNode } from 'react';

export function StoryStack({
  alignItems = 'stretch',
  children,
  direction = 'column',
  gap = 16,
  wrap = 'nowrap',
}: {
  alignItems?: CSSProperties['alignItems'];
  children: ReactNode;
  direction?: CSSProperties['flexDirection'];
  gap?: number;
  wrap?: CSSProperties['flexWrap'];
}) {
  return (
    <div
      style={{
        alignItems,
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap,
        gap,
      }}
    >
      {children}
    </div>
  );
}
