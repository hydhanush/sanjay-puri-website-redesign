"use client";

import { useEffect, useState } from "react";

export default function NoticeBar({ message }: { message: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="pd-notice" role="status">
      {message}
    </div>
  );
}
