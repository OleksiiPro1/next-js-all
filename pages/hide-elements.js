import { useRouter } from 'next/router';
import React from 'react';

export default function HideElements() {
  const router = useRouter();
  return (
    <div>
      <div>
        <p>Show elements</p>
      </div>

      {/* Hide */}

      {router.pathname !== '/hide-elements' && (
        <div>
          <p>Hide elements</p>
        </div>
      )}

      {/* Hide */}

      <div>
        <p>Show elements</p>
      </div>
    </div>
  );
}
// npm i next-router
