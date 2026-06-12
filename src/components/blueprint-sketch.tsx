export default function BlueprintSketch() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="80" y="60" width="400" height="240"
        className="blueprint-line"
        strokeDasharray="1400"
        strokeDashoffset="1400"
        style={{ animation: "draw-line 1.8s ease forwards", animationDelay: "0.1s" }}
      />
      <rect
        x="130" y="110" width="140" height="60"
        className="blueprint-line"
        strokeDasharray="400"
        strokeDashoffset="400"
        style={{ animation: "draw-line 1.4s ease forwards", animationDelay: "0.5s" }}
      />
      <rect
        x="290" y="110" width="140" height="60"
        className="blueprint-line"
        strokeDasharray="400"
        strokeDashoffset="400"
        style={{ animation: "draw-line 1.4s ease forwards", animationDelay: "0.65s" }}
      />
      <line
        x1="270" y1="140" x2="290" y2="140"
        className="blueprint-line"
        strokeDasharray="20"
        strokeDashoffset="20"
        style={{ animation: "draw-line 0.6s ease forwards", animationDelay: "0.95s" }}
      />
      <line
        x1="200" y1="170" x2="200" y2="220"
        className="blueprint-line"
        strokeDasharray="50"
        strokeDashoffset="50"
        style={{ animation: "draw-line 0.7s ease forwards", animationDelay: "1.1s" }}
      />
      <line
        x1="360" y1="170" x2="360" y2="220"
        className="blueprint-line"
        strokeDasharray="50"
        strokeDashoffset="50"
        style={{ animation: "draw-line 0.7s ease forwards", animationDelay: "1.2s" }}
      />
      <rect
        x="130" y="220" width="140" height="40"
        className="blueprint-line"
        strokeDasharray="360"
        strokeDashoffset="360"
        style={{ animation: "draw-line 1s ease forwards", animationDelay: "1.4s" }}
      />
      <rect
        x="290" y="220" width="140" height="40"
        className="blueprint-line"
        strokeDasharray="360"
        strokeDashoffset="360"
        style={{ animation: "draw-line 1s ease forwards", animationDelay: "1.5s" }}
      />
      <line
        x1="80" y1="180" x2="30" y2="180"
        className="blueprint-line"
        strokeDasharray="50"
        strokeDashoffset="50"
        style={{ animation: "draw-line 0.6s ease forwards", animationDelay: "1.7s" }}
      />
      <path
        d="M 480 180 L 560 180 L 590 150"
        className="blueprint-line"
        strokeDasharray="120"
        strokeDashoffset="120"
        style={{ animation: "draw-line 0.8s ease forwards", animationDelay: "1.75s" }}
      />
      <rect
        x="670" y="100" width="180" height="50"
        className="blueprint-line"
        strokeDasharray="460"
        strokeDashoffset="460"
        style={{ animation: "draw-line 1s ease forwards", animationDelay: "1.0s" }}
      />
      <rect
        x="670" y="170" width="180" height="50"
        className="blueprint-line"
        strokeDasharray="460"
        strokeDashoffset="460"
        style={{ animation: "draw-line 1s ease forwards", animationDelay: "1.15s" }}
      />
      <rect
        x="670" y="240" width="180" height="50"
        className="blueprint-line"
        strokeDasharray="460"
        strokeDashoffset="460"
        style={{ animation: "draw-line 1s ease forwards", animationDelay: "1.3s" }}
      />
      <path
        d="M 560 180 L 630 180 L 640 125 L 670 125"
        className="blueprint-line"
        strokeDasharray="130"
        strokeDashoffset="130"
        style={{ animation: "draw-line 0.9s ease forwards", animationDelay: "1.85s" }}
      />
      <circle
        cx="200" cy="140" r="3"
        className="blueprint-line"
        strokeDasharray="9.42"
        strokeDashoffset="9.42"
        style={{ animation: "draw-line 0.3s ease forwards", animationDelay: "2.0s" }}
      />
      <circle
        cx="360" cy="140" r="3"
        className="blueprint-line"
        strokeDasharray="9.42"
        strokeDashoffset="9.42"
        style={{ animation: "draw-line 0.3s ease forwards", animationDelay: "2.05s" }}
      />
    </svg>
  )
}
