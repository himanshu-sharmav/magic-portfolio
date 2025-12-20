"use client";

import { useEffect } from "react";
import { Column, Heading, Text } from "@once-ui-system/core";

export default function NotFound() {
  useEffect(() => {
    console.error("404 Not Found component rendered");
    console.error("Current URL:", window.location.href);
  }, []);

  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Page Not Found
      </Heading>
      <Text onBackground="neutral-weak">The page you are looking for does not exist.</Text>
    </Column>
  );
}
