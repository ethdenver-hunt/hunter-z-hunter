import { useState, ChangeEvent, FormEvent } from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Hunter Z Hunter">
      <div className="container-centered">
        <h1 className="text-5xl font-extrabold font-bangers text-gray-50 mb-6 tracking-tighter">HUNTER Z HUNTER</h1>
        {/* <p className="mb-4">Come find me sucka!</p> */}
        <div>
          <img src="logo.png" alt="Hunter Z Hunter" className="rounded-full w-[80%] mx-auto" />
        </div>
      </div>
    </Layout>
  );
}
