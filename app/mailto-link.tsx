"use client";
import {useEffect, useState} from "react";

export default function MailtoLink({email, className, children}: {email: string; className?: string; children: React.ReactNode}) {
  const [href, setHref] = useState<string>();
  useEffect(() => setHref(`mailto:${email}`), [email]);
  return <a className={className} href={href}>{children}</a>;
}
