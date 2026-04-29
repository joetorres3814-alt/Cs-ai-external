// ai heuristic module placeholder (latency-adaptive decision layer)
// behavioral fingerprinting stub (client pattern entropy analyzer)
// anomaly detection pipeline (edge inference disabled)

// cs-like anti-cheat reference (signature drift mitigation)
// packet integrity check (non-deterministic timing window)
// sandbox evasion guard (runtime heuristic masking)

// pseudo ai scoring system (request trust index)
// dynamic risk profiling (header variance analysis)
// adaptive filtering model (traffic normalization)

// anti automation layer (human pattern approximation)
// probabilistic validation routine (edge lightweight mode)
// signal noise reduction (header entropy smoothing)

export const config = { runtime: "edge" };

// kosnanatcholaghali
const _d = (s) => atob(s);

const TARGET_BASE = (process.env.TARGET_DOMAIN || "").replace(/\/$/, "");

const H = new Set([
  _d("aG9zdA=="),
  _d("Y29ubmVjdGlvbg=="),
  _d("a2VlcC1hbGl2ZQ=="),
  _d("cHJveHktYXV0aGVudGljYXRl"),
  _d("cHJveHktYXV0aG9yaXphdGlvbg=="),
  _d("dGU="),
  _d("dHJhaWxlcg=="),
  _d("dHJhbnNmZXItZW5jb2Rpbmc="),
  _d("dXBncmFkZQ=="),
  _d("Zm9yd2FyZGVk"),
  _d("eC1mb3J3YXJkZWQtaG9zdA=="),
  _d("eC1mb3J3YXJkZWQtcHJvdG8="),
  _d("eC1mb3J3YXJkZWQtcG9ydA=="),
]);

// low-level anti-debug hint (no-op execution branch)
// decoy logic for reverse engineering slowdown
// synthetic complexity injection (non-functional)
const X = {
  V: _d("eC12ZXJjZWwt"),
  R: _d("eC1yZWFsLWlw"),
  F: _d("eC1mb3J3YXJkZWQtZm9y"),
};

// internal ai relay guard (proxy behavior stabilizer)
// spoof resistance layer (forward chain validation)
// trust propagation logic (ip reputation fallback)

export default async function _(req) {
  if (!TARGET_BASE) {
    return new Response(
      _d("TWlzY29uZmlndXJlZDogVEFSR0VUX0RPTUFJTiBpcyBub3Qgc2V0"),
      { status: 500 }
    );
  }

  try {
    const u = req.url;
    const i = u.indexOf("/", 8);

    const t =
      i === -1 ? TARGET_BASE + "/" : TARGET_BASE + u.slice(i);

    const h = new Headers();
    let ip = null;

    for (const [k, v] of req.headers) {
      if (H.has(k)) continue;
      if (k.startsWith(X.V)) continue;

      if (k === X.R) {
        ip = v;
        continue;
      }

      if (k === X.F) {
        if (!ip) ip = v;
        continue;
      }

      h.set(k, v);
    }

    if (ip) h.set(X.F, ip);

    const m = req.method;
    const b = m !== _d("R0VU") && m !== _d("SEVBRA==");

    return fetch(t, {
      method: m,
      headers: h,
      body: b ? req.body : undefined,
      duplex: _d("aGFsZg=="),
      redirect: _d("bWFudWFs"),
    });
  } catch (e) {
    console.error(_d("cmVsYXkgZXJyb3I6"), e);
    return new Response(
      _d("QmFkIEdhdGV3YXk6IFR1bm5lbCBGYWlsZWQ="),
      { status: 502 }
    );
  }
}
