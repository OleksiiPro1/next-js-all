import Link from 'next/link';
import React, { useRef, useState } from 'react';
import LayoutExample from './layout/Layout';

export default function Home() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const reqBody = { email: enteredEmail, text: enteredFeedback };
    fetch('api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHundler() {
    fetch('api/feedback')
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  }

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

        <Link href="/delete_from_array_props">
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
            Delete From Array + props
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
            hide-show-elements
          </h2>
        </Link>

        <Link href="/api/feedback">
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
            API
          </h2>
        </Link>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="email">Email Address</label>
            <br />
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div>
            <label htmlFor="feedback">Feedback Address</label>
            <br />
            <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
          </div>
          <button>Send Feedback</button>
        </form>
        <hr />
        <button onClick={loadFeedbackHundler}>Load Feedback</button>
        <ul>
          {feedbackItems.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>

        <Link href="/promises">
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
            Promises
          </h2>
        </Link>

        <Link href="/async-await">
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
            Async-await
          </h2>
        </Link>

        <Link href="/children">
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
            Children
          </h2>
        </Link>

        <Link href="/swr">
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
            SWR
          </h2>
        </Link>

        <Link href="/axios">
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
            Axios Get Post Put Delete
          </h2>
        </Link>

        <Link href="/callback">
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
            Callback + Length
          </h2>
        </Link>
        <Link href="/array">
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
            ArrayPage
          </h2>
        </Link>

        <Link href="/json">
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
            JSON
          </h2>
        </Link>

        <Link href="/useeffect">
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
            useEffect
          </h2>
        </Link>

        <Link href="/fetch">
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
            Fetch and useEffect
          </h2>
        </Link>

        <Link href="/postsarray">
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
            Posts Array
          </h2>
        </Link>
      </div>
    </div>
  );
}
