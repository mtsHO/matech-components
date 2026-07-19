import type { ReactNode } from 'react';

export function StoryStack({
  children,
  gap = 16,
}: {
  children: ReactNode;
  gap?: number;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gap,
      }}
    >
      {children}
    </div>
  );
}
