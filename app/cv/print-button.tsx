"use client";

export default function PrintButton() {
  return <button type="button" className="button button-light button-outline cv-print" onClick={() => window.print()}>Print <span aria-hidden="true">⎙</span></button>;
}
