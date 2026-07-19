import type { CSSProperties } from 'react';

function iconStyle(): CSSProperties {
  return {
    display: 'block',
    fill: 'currentColor',
    height: 18,
    width: 18,
  };
}

export function PlusIcon() {
  return (
    <svg aria-hidden="true" style={iconStyle()} viewBox="0 0 24 24">
      <path d="M11 5h2v14h-2z" />
      <path d="M5 11h14v2H5z" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg aria-hidden="true" style={iconStyle()} viewBox="0 0 24 24">
      <path d="M8 6.5v11l9-5.5z" />
    </svg>
  );
}

export function HeartIcon() {
  return (
    <svg aria-hidden="true" style={iconStyle()} viewBox="0 0 24 24">
      <path d="M12 21.35 10.55 20C5.4 15.24 2 12.09 2 8.25 2 5.42 4.42 3 7.25 3c1.6 0 3.14.74 4.15 1.91C12.61 3.74 14.15 3 15.75 3 18.58 3 21 5.42 21 8.25c0 3.84-3.4 6.99-8.55 11.76z" />
    </svg>
  );
}

export function ReplyIcon() {
  return (
    <svg aria-hidden="true" style={iconStyle()} viewBox="0 0 24 24">
      <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-.9-5.5-4-11-11-11z" />
    </svg>
  );
}

export function TrashIcon() {
  return (
    <svg aria-hidden="true" style={iconStyle()} viewBox="0 0 24 24">
      <path d="M7 21c-.55 0-1-.45-1-1V7h12v13c0 .55-.45 1-1 1zm3-4h2V9h-2zm4 0h2V9h-2zM15 4l-1-1h-4L9 4H4v2h16V4z" />
    </svg>
  );
}
