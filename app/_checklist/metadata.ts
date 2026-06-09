import type { Metadata } from "next";

export const hiddenChecklistRobots: Metadata["robots"] = {
  index: false,
  follow: false,
  noarchive: true,
  nocache: true,
  googleBot: {
    index: false,
    follow: false,
    noimageindex: true,
    noarchive: true,
    nocache: true,
  },
};
