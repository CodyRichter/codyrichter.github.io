"use client";

import { useEffect } from "react";

const METRICS_URL =
  "https://i2d2nqrs5jpungxjxd2ppcpwyi0asqob.lambda-url.us-east-1.on.aws/?url=https://cody.richter.codes";

let sent = false;

/** Pings the page-load metrics lambda once per page view (production only). */
export default function Metrics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || sent) return;
    sent = true;
    fetch(METRICS_URL).catch(() => {
      console.error("Failed to send metrics...");
    });
  }, []);

  return null;
}
