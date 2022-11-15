import Link from 'next/link';
import React from 'react';
import LayoutExample from './layout/Layout';

export default function Home() {
  return (
    <div>
      <div>
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          Help with Next.js
        </h1>
      </div>
      <div>
        <Link href="/hide-elements">
          <h2
            style={{
              background: 'red',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            hide-elements
          </h2>
        </Link>

        <Link href="/sign-up">
          <h2
            style={{
              background: 'blue',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            sign-up
          </h2>
        </Link>

        <Link href="/avatar">
          <h2
            style={{
              background: 'green',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            Upload Poto
          </h2>
        </Link>

        <Link href="/modal">
          <h2
            style={{
              background: 'black',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            Modal
          </h2>
        </Link>

        <Link href="/animation">
          <h2
            style={{
              background: 'brown',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            Animation
          </h2>
        </Link>

        <Link href="/download">
          <h2
            style={{
              background: 'green',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            Download
          </h2>
        </Link>

        <Link href="/hide-show-elements">
          <h2
            style={{
              background: 'red',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            HideShow
          </h2>
        </Link>
      </div>
    </div>
  );
}
