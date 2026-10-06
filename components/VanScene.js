'use client';
import { useEffect, useState } from 'react';

const C = '#2A1405', V = '#F7EED8', P = '#D99AAA', R = '#842936';

export default function VanScene() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const on = () => setScale(Math.min(1, (window.innerWidth - 32) / 380));
    on(); window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  const wheel = side => (
    <div style={{ position: 'absolute', bottom: -26, [side]: 54, width: 58, height: 58, borderRadius: '50%', background: C, border: '7px solid #3d2414', animation: 'mpSpin .7s linear infinite', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', width: '100%', height: 4, background: '#6b4a37' }} />
      <div style={{ width: 18, height: 18, borderRadius: '50%', background: V, position: 'relative' }} />
    </div>
  );
  const win = (left, w) => <div style={{ position: 'absolute', top: 18, left, width: w, height: 42, borderRadius: 10, background: C, opacity: 0.88 }} />;
  const cloud = (top, size, dur, delay) => <div style={{ position: 'absolute', top, left: 0, width: size, height: size * 0.45, borderRadius: size, background: '#EFDFC0', animation: `mpDrift ${dur}s linear ${delay}s infinite` }} />;
  return (
    <div style={{ position: 'relative', height: 300, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 30, right: '12%', width: 90, height: 90, borderRadius: '50%', background: '#E1AFBB', opacity: 0.7 }} />
      {cloud(50, 120, 26, -4)}{cloud(100, 80, 34, -18)}{cloud(30, 60, 30, -12)}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 70, background: C }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 32, height: 5, backgroundImage: `linear-gradient(90deg, ${V} 0 60px, transparent 60px 120px)`, backgroundSize: '120px 5px', backgroundRepeat: 'repeat-x', willChange: 'background-position', animation: 'mpRoad .45s linear infinite' }} />
      </div>
      <div style={{ position: 'absolute', left: '50%', bottom: 58, marginLeft: -180, width: 360, height: 172, transform: `scale(${scale})`, transformOrigin: '50% 100%' }}>
        <div style={{ position: 'absolute', inset: 0, animation: 'mpBob .5s ease-in-out infinite' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 84, background: V, borderRadius: '34px 70px 0 0', border: `2px solid ${C}`, borderBottom: 'none' }}>
            {win(26, 56)}{win(94, 56)}{win(162, 56)}
            <div style={{ position: 'absolute', top: 18, right: 22, width: 88, height: 46, borderRadius: '10px 44px 8px 8px', background: C, opacity: 0.88 }} />
          </div>
          <div style={{ position: 'absolute', top: 84, left: 0, right: 0, bottom: 0, background: P, borderRadius: '0 0 16px 24px', border: `2px solid ${C}`, borderTop: `4px solid ${R}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/assets/logo-cream.png" alt="Mari" style={{ height: 66, marginLeft: -20 }} />
          </div>
          <div style={{ position: 'absolute', right: 6, top: 110, width: 16, height: 16, borderRadius: '50%', background: V, border: `2px solid ${C}` }} />
          <div style={{ position: 'absolute', right: -8, bottom: 2, width: 40, height: 12, borderRadius: 4, background: C }} />
          <div style={{ position: 'absolute', left: -6, bottom: 2, width: 22, height: 12, borderRadius: 4, background: C }} />
          {wheel('left')}{wheel('right')}
        </div>
      </div>
    </div>
  );
}
