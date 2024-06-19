'use client';
import React from "react";
import dynamic from "next/dynamic";

// This kind of hacky,but it "fixes" snapshots
import ShoelaceButtonElement from "@shoelace-style/shoelace/dist/components/button/button.component.js"
customElements.define("sl-button", ShoelaceButtonElement)

const SlButton = dynamic(
  () => import("@shoelace-style/shoelace/cdn/react/button/index.js"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

export default function Home() {
  return (
    <main>
      <SlButton data-testid="test">Test</SlButton>
    </main>
  );
}
