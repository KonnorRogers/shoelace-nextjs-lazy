// app/page.tsx
'use client';
import React from "react";
import dynamic from "next/dynamic";

const SlButton = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/button/index.js"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

const SlIcon = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/icon/index.js"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

export default function Home() {
  return (
    <main>
      <SlButton data-testid="test">Test</SlButton>
      <SlIcon name="gear" />
    </main>
  );
}
