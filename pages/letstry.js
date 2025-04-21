// pages/letstry.js

export async function getServerSideProps({ res }) {
    res.writeHead(302, { Location: '/app-redirect.html' });
    res.end();
    return { props: {} };
  }
  
  export default function Redirecting() {
    return null;
  }
  