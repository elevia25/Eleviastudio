export default function GrainOverlay() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-[0.045] mix-blend-multiply"
      aria-hidden="true"
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves={2}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
}
