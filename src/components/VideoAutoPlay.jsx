import { useEffect, useRef } from 'react';

export default function VideoAutoPlay({ src, style, ...props }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      controls
      preload="metadata"
      style={{
        width: '100%',
        borderRadius: '16px',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
        ...style,
      }}
      {...props}
    />
  );
}
