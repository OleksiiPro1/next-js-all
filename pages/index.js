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
              background: 'gray',
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
              background: 'gray',
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
              background: 'gray',
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
              background: 'gray',
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
              background: 'gray',
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
              background: 'gray',
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
              background: 'gray',
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

        <Link href="/onclickchange">
          <h2
            style={{
              background: 'gray',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            Onclick Change
          </h2>
        </Link>

        <Link href="/filtermap">
          <h2
            style={{
              background: 'gray',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            Filter Map
          </h2>
        </Link>

        <Link href="/delete_from_array">
          <h2
            style={{
              background: 'gray',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            Delete From Array
          </h2>
        </Link>
      </div>
    </div>
  );
}
