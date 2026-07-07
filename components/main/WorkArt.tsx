export function HalidayArt() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="300" fill="#223AFF" />
      <circle cx="300" cy="80" r="140" fill="#D9FF4D" opacity={0.9} />
      <path d="M0,220 Q200,120 400,220 L400,300 L0,300 Z" fill="#15130F" />
    </svg>
  );
}

export function PlinthArt() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="300" fill="#ECE7DA" />
      <rect x="60" y="60" width="280" height="180" fill="none" stroke="#15130F" strokeWidth={2} />
      <circle cx="200" cy="150" r="70" fill="#241733" />
      <rect x="170" y="120" width="60" height="60" fill="#D9FF4D" />
    </svg>
  );
}

export function NostosArt() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="300" fill="#241733" />
      <path d="M0,180 C100,100 300,260 400,150 L400,300 L0,300 Z" fill="#223AFF" />
      <circle cx="90" cy="90" r="34" fill="#D9FF4D" />
    </svg>
  );
}
