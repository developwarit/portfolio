"use client";

import { useState, useEffect } from "react";

export function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Get stored views or start with a base number
    const stored = localStorage.getItem(`blog-views-${slug}`);
    const baseViews = 127; // Starting base views
    let currentViews = stored ? parseInt(stored, 10) : baseViews;
    
    // Increment on each visit (once per session)
    const hasVisited = sessionStorage.getItem(`blog-visited-${slug}`);
    if (!hasVisited) {
      currentViews += 1;
      localStorage.setItem(`blog-views-${slug}`, currentViews.toString());
      sessionStorage.setItem(`blog-visited-${slug}`, "true");
    }
    
    setViews(currentViews);
  }, [slug]);

  return <>{views.toLocaleString()} ครั้ง</>;
}
