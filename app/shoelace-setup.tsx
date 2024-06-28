'use client';

import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js"

export default function ShoelaceSetup({
  children,
}: {
  children: React.ReactNode
}) {
  setBasePath(`/shoelace-assets/`);
  return <>{children}</>
}
