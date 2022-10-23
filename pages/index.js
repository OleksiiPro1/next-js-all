import Link from 'next/link';
import React from 'react';

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
              background: 'green',
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
        <Link href="/login">
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
            login
          </h2>
        </Link>

        <Link href="/my-account">
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
            Account/Form/Grid/Upload Poto
          </h2>
        </Link>
      </div>
    </div>
  );
}
