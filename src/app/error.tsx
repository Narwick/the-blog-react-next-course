"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
  reset: () => EncodedVideoChunkMetadata;
};

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
/*   useEffect(() => {
    console.log(error);
  }, [error]); */
  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      contentTitle="501"
      content="Entre em contato com o administrador;"
    />
  );
}
