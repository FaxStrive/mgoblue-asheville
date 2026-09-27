import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

/* The thank-you page is measured by the same gate as every other page, so it
   carries the same scale: one h1, a real section headline, body copy at the
   house size, and sections using the .section and .container classes. A page
   that quietly opts out of the scale fails house_look_drift, which is what
   this page did before 2026-09-21.

   Every string is generic on purpose. The build stage rewrites the copy with
   the client's own words and their real next step. */

export default function ThankYou() {
  return (
    <main>
      <section className="section">
        <div className="shell">
          <p className="eyebrow">Request received</p>
          <h1 style={{ marginTop: "18px", maxWidth: "16ch" }}>Thank you</h1>
          <p className="lede" style={{ marginTop: "28px", maxWidth: "54ch" }}>
            Your request has been sent. Someone will be in touch to confirm the
            details and arrange a time that works for you.
          </p>
        </div>
      </section>

      <section className="section on-alt">
        <div className="shell">
          <h2 style={{ maxWidth: "18ch" }}>What happens next</h2>
          <div
            style={{
              marginTop: "48px",
              display: "grid",
              gap: "32px",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "22px" }}>
              <h3>We read your request</h3>
              <p style={{ marginTop: "12px", color: "var(--color-ink-muted)" }}>
                A person reads what you sent, not an automated system.
              </p>
            </div>
            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "22px" }}>
              <h3>We get in touch</h3>
              <p style={{ marginTop: "12px", color: "var(--color-ink-muted)" }}>
                We contact you using the details you gave us to confirm what you need.
              </p>
            </div>
            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "22px" }}>
              <h3>We book a time</h3>
              <p style={{ marginTop: "12px", color: "var(--color-ink-muted)" }}>
                We agree a time that suits you and confirm it before we come out.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "48px" }}>
            <a className="btn btn-primary" href="/">
              Back to the homepage
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
