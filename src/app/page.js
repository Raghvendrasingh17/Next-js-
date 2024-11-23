"use client"

import Link from "next/link";

export default function Home() {
  return (
    <div>
        <p>Welcome User Page</p> 
        <Link href="/login">Login</Link> 
        </div>
        
  );
}
