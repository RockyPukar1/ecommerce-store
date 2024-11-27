"use client";

import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ICurrencyProps {
  value?: number | string;
}

export default function Currency({ value }: ICurrencyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}
