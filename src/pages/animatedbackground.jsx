export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Glow */}
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full animate-pulse"
        style={{
          background:
            'radial-gradient(circle, rgba(125, 211, 252, 0.35) 0%, rgba(125, 211, 252, 0) 80%)',
          filter: 'blur(50px)',
          animationDuration: '4s',
        }}
      ></div>

      {/* Top Center Glow */}
      <div
        className="absolute top-10 right-80 w-96 h-96 rounded-full animate-pulse"
        style={{
          background:
            'radial-gradient(circle at center, rgba(243, 244, 246, 0.35) 0%, rgba(243, 244, 246, 0) 80%)',
          filter: 'blur(50px)',
          animationDuration: '5s',
          animationDelay: '2s',
        }}
      ></div>

      {/* Top Right Accent */}
      <div
        className="absolute top-40 right-10 w-96 h-96 rounded-full animate-pulse"
        style={{
          background:
            'radial-gradient(circle at center, rgba(192, 132, 252, 0.35) 0%, rgba(192, 132, 252, 0) 80%)',
          filter: 'blur(50px)',
          animationDuration: '5s',
          animationDelay: '1s',
        }}
      ></div>

      {/* Bottom Center Glow */}
      <div
        className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full animate-pulse"
        style={{ 
          background:
            'radial-gradient(circle at center, rgba(243, 244, 246, 0.35) 0%, rgba(243, 244, 246, 0) 80%)',
          filter: 'blur(50px)',
          animationDuration: '5s',
          animationDelay: '2s',
        }}
      ></div>
    </div>
  );
}
