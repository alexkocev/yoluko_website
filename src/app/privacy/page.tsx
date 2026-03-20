import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Yoluko Privacy Policy. How we collect, use, and protect your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <Link href="/" className="text-2xl font-black text-primary-container tracking-tighter font-headline">
            Yoluko
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-headline font-black mb-4">Privacy Policy</h1>
          <p className="text-on-surface-variant mb-12">Last updated: March 20, 2026</p>

          <div className="space-y-10 text-on-surface-variant leading-relaxed">
            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">1. Introduction</h2>
              <p>
                Yoluko (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at yoluko.com and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-on-surface">Personal Information:</strong> Name, email address, and any other information you voluntarily provide through our contact form.</li>
                <li><strong className="text-on-surface">Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                <li><strong className="text-on-surface">Cookies and Tracking:</strong> We use Google Analytics (GA4) to collect anonymized usage statistics to improve our website experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services when you have opted in</li>
                <li>Analyze website usage to improve our content and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">4. Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our website and conducting our business (e.g., Formspree for form submissions, Google for analytics), provided they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">6. Your Rights (GDPR)</h2>
              <p className="mb-4">If you are located in the European Economic Area, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at <strong className="text-on-surface">contact@yoluko.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">7. Cookies</h2>
              <p>
                Our website uses cookies for analytics purposes (Google Analytics). You can control cookie preferences through your browser settings. Disabling cookies may affect your experience on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: <strong className="text-on-surface">contact@yoluko.com</strong>
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-outline-variant/10">
            <Link
              href="/"
              className="text-primary font-headline font-bold hover:underline"
            >
              &larr; Back to Home
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
