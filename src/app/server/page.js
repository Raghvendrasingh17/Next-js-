// // pages/side.js
// import React from 'react';
// import Side from '../components/Side';

// export default function SidePage({ data }) {
//   return <Side data={data} />;
// }

// export async function getServerSideProps() {
//   // Fetch data from an external API
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
