import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0a100c',
          padding: '56px 72px 48px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '280px',
            background:
              'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(45,216,122,0.10), transparent)',
            display: 'flex',
          }}
        />

        {/* Main content row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '52px',
            flex: 1,
          }}
        >
          {/* Monogram circle */}
          <div
            style={{
              width: '172px',
              height: '172px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle at 32% 32%, rgba(255,255,255,0.28), transparent 50%), radial-gradient(circle at 50% 50%, #2a3a2b 0%, #0e1812 100%)',
              border: '2px solid rgba(45,216,122,0.38)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 0 50px rgba(45,216,122,0.14), 0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <span
              style={{
                fontSize: '68px',
                fontWeight: '800',
                color: '#d4a830',
                letterSpacing: '-2px',
                lineHeight: 1,
              }}
            >
              AP
            </span>
          </div>

          {/* Text content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              gap: '0px',
            }}
          >
            {/* Kicker */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '14px',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '1px',
                  background: '#2dd87a',
                  display: 'flex',
                }}
              />
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  color: '#2dd87a',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                }}
              >
                Portfolio
              </span>
            </div>

            {/* Name */}
            <div
              style={{
                fontSize: '74px',
                fontWeight: '900',
                color: '#f4f4ef',
                lineHeight: 0.88,
                letterSpacing: '-1px',
                display: 'flex',
              }}
            >
              AJAY PATEL K A
            </div>

            {/* Role */}
            <div
              style={{
                fontSize: '24px',
                color: '#2dd87a',
                marginTop: '16px',
                fontWeight: '500',
                display: 'flex',
              }}
            >
              Full-Stack Software Engineer
            </div>

            {/* Gold accent line */}
            <div
              style={{
                width: '56px',
                height: '3px',
                background: 'linear-gradient(90deg, #2dd87a, #d4a830)',
                marginTop: '18px',
                borderRadius: '2px',
                display: 'flex',
              }}
            />

            {/* Skill chips */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                marginTop: '18px',
              }}
            >
              {['React', 'Python', 'Django', 'GenAI', 'Azure'].map((skill) => (
                <div
                  key={skill}
                  style={{
                    padding: '5px 14px',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: '100px',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    color: '#b9bdb4',
                    background: 'rgba(255,255,255,0.04)',
                    display: 'flex',
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '22px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '12px',
              color: '#6b716a',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Bangalore, India · 2+ Years Production AI
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#2dd87a',
                display: 'flex',
              }}
            />
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#2dd87a',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Open to Work
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
