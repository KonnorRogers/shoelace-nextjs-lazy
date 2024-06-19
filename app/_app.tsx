import { useLayoutEffect, useRef } from "react";
import type { AppProps } from "next/app";

function CustomEls({ URL }) {
  // useRef to avoid re-renders
  const customEls = useRef(false);

  useLayoutEffect(() => {
    if (customEls.current) {
      return;
    }

    import("@shoelace-style/shoelace/dist/utilities/base-path.js").then(
      ({ setBasePath }) => {
        setBasePath(`${URL}/static/static`);

        // This imports all components
        import("@shoelace-style/shoelace/dist/react/index.js")
        customEls.current = true;
      },
    );
  }, [URL, customEls]);

  return null;
}

export default function App({ Component, pageProps, URL }: AppProps) {
  const isBrowser = typeof window !== "undefined";
  return (
    <>
      {isBrowser && <CustomEls URL={URL} />}
      <Component {...pageProps} />
    </>
  );
}
