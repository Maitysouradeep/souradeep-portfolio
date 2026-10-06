"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function VisitorCounter() {
  const [visitorNumber, setVisitorNumber] = useState<number | null>(null);

  useEffect(() => {
    const countVisit = async () => {
      try {
        const { data, error } = await supabase.rpc("increment_visitor_count");

        if (error) {
          console.error("Visitor counter error:", error);
          return;
        }

        if (typeof data === "number") {
          setVisitorNumber(data);
        }
      } catch (error) {
        console.error("Visitor counter error:", error);
      }
    };

    countVisit();
  }, []);

  if (visitorNumber === null) {
    return null;
  }

  return (
    <section className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
        <p className="text-center text-sm font-medium tracking-wide text-[var(--foreground)] sm:text-base">
          ✦ You are visitor{" "}
          <span className="font-mono text-base font-bold text-[var(--accent)] sm:text-lg">
            #{visitorNumber}
          </span>{" "}
          to my portfolio
        </p>

        <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[var(--muted-soft)]">
          Thanks for Visit
        </p>
      </div>
    </section>
  );
}
