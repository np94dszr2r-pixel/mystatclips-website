import type { SVGProps } from "react";

type SportIconProps = SVGProps<SVGSVGElement>;
const base: SportIconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export function BasketballIcon(props: SportIconProps) {
  return <svg {...base} {...props}><circle cx="24" cy="24" r="18"/><path d="M24 6c-4.8 5-7.2 11-7.2 18S19.2 37 24 42M24 6c4.8 5 7.2 11 7.2 18S28.8 37 24 42M6 24h36M24 6v36"/></svg>;
}
export function VolleyballIcon(props: SportIconProps) {
  return <svg {...base} {...props}><circle cx="24" cy="24" r="18"/><path d="M24 6c-2.5 6-2.5 12 0 18M24 24c-5 5-10 8-16 9M24 24c6 0 11 3 16 9M22.4 15.2c7-1 14 1.4 19 5.4M13.7 9.2c-1.5 7.2-.3 14.6 3.4 20.7M32.6 26.9c-4 6.1-10 11-16.2 13.5"/></svg>;
}
export function FootballIcon(props: SportIconProps) {
  return <svg {...base} {...props}><path d="M7 41C4 23 23 4 41 7c3 18-16 37-34 34Z"/><path d="m16 32 16-16m-16 9 7 7m-2-12 7 7m-2-12 7 7M7 30l11 11M30 7l11 11"/></svg>;
}
export function SoccerIcon(props: SportIconProps) {
  return <svg {...base} {...props}><circle cx="24" cy="24" r="18"/><path d="m24 14 7 5-3 8h-8l-3-8 7-5ZM24 14l-1-8m8 13 10-4m-13 12 5 11m-13-11-5 11m-3-19L6 17"/></svg>;
}
export function TennisIcon(props: SportIconProps) {
  return <svg {...base} {...props}><ellipse cx="17" cy="15" rx="10" ry="13" transform="rotate(35 17 15)"/><path d="m23 23 12 13 4-4-12-13M11 6c5 4 9 9 12 15M7 12c5 4 10 8 15 10M28 29l5-5m0 10 5-5"/><circle cx="36" cy="10" r="6"/><path d="M33 6c-1 3 1 6 5 8"/></svg>;
}
export function SoftballIcon(props: SportIconProps) {
  return <svg {...base} {...props}><circle cx="24" cy="24" r="18"/><path d="M8 16c11 5 23-1 28-6M12 38c5-12 17-17 28-12"/><path d="m11 15-1 5m6-3-1 5m6-6 1 5m4-7 2 4m3-7 3 4M14 33l4 2m-1-7 4 3m1-7 3 4m2-6 2 4m4-5 1 5"/></svg>;
}
export function BaseballIcon(props: SportIconProps) {
  return <svg {...base} {...props}><circle cx="24" cy="24" r="18"/><path d="M11 12c11 5 11 19 0 24M37 12c-11 5-11 19 0 24"/><path d="m12 13 3-3m0 8 4-2m-2 7h4m-4 6 4 1m-6 4 3 3m18-24-3-3m0 8-4-2m2 7h-4m4 6-4 1m6 4-3 3"/></svg>;
}
export function HockeyIcon(props: SportIconProps) {
  return <svg {...base} {...props}><path d="m8 6-4 3 15 27c1 2 2 3 4 3h15c2 0 3-1 3-3v-3l-16-1L8 6Z"/><path d="m8 15 4-2m13 19-2 7m6-7-2 7"/><ellipse cx="35" cy="44" rx="6" ry="2"/></svg>;
}
export function LacrosseIcon(props: SportIconProps) {
  return <svg {...base} {...props}><path d="M6 6c8-3 15 0 20 6l-8 14C11 23 7 16 6 6Z"/><path d="m6 6 12 20m-7-21 10 15M7 12l16-3M10 18l10-4m-2 12 23 15"/><circle cx="35" cy="27" r="4"/></svg>;
}