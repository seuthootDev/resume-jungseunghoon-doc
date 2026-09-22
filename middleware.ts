// Vercel Edge Middleware: for first-time visitors from Korea, sets a `lang`
// cookie the app reads on load to default to Korean. Runs once per session —
// skipped entirely once a `lang` cookie exists, so a visitor's own choice
// (via the toolbar language toggle) always wins over geo-detection later.
export const config = {
  matcher: ["/((?!assets/|favicon\\.svg|.*\\.[a-zA-Z0-9]+$).*)"],
};

export default function middleware(request: Request) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  if (/(?:^|;\s*)lang=/.test(cookieHeader)) return;

  const country = request.headers.get("x-vercel-ip-country");
  if (country !== "KR") return;

  return new Response(null, {
    headers: {
      "x-middleware-next": "1",
      "Set-Cookie": "lang=ko; Path=/; Max-Age=31536000; SameSite=Lax",
    },
  });
}
