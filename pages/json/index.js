const postJSON = [
  '{ "postId": 100, "commentsQuantity": 7 }',
  '{ "postId": 101, "commentsQuantity": 9 }',
  '{ "postId": 102, "commentsQuantity": 8 }',
  '{ "postId": 103, "commentsQuantity": 3 }',
];

export default function JsonPage() {
  const postJS = postJSON.map((post) => JSON.parse(post));
  console.log(postJS);
  console.log(postJSON);
}
