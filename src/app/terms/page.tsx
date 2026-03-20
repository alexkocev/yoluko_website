import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Yoluko Terms of Service. The terms and conditions governing use of our website and services.",
};

export default function TermsOfService() {
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
          <h1 className="text-4xl lg:text-5xl font-headline font-black mb-4">Terms of Service</h1>
          <p className="text-on-surface-variant mb-12">Last updated: March 20, 2026</p>

          <div className="space-y-10 text-on-surface-variant leading-relaxed">
            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Yoluko website (yoluko.com) and our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">2. Description of Services</h2>
              <p>
                Yoluko provides AI and automation consulting services, including but not limited to: custom AI agent development, software engineering, business process automation, and data science solutions. The specific scope, deliverables, and pricing for each engagement are defined in individual service agreements between Yoluko and the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">3. Use of the Website</h2>
              <p className="mb-4">You agree to use our website only for lawful purposes. You shall not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
                <li>Transmit any malicious code, viruses, or harmful data</li>
                <li>Use automated tools to scrape or extract data from the website without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, design elements, and software, is the property of Yoluko or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this website without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">5. Client Engagements</h2>
              <p>
                Our service engagements are governed by separate service agreements. These Terms of Service apply to your use of the website and general interactions with Yoluko. In the event of a conflict between these Terms and a specific service agreement, the service agreement shall prevail.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">6. Confidentiality</h2>
              <p>
                Any information shared through our contact form or during consultations will be treated as confidential. We will not disclose your business information to third parties without your consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Yoluko shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim shall not exceed the amount paid by you, if any, for accessing the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">8. Disclaimer of Warranties</h2>
              <p>
                The website and its content are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that the website will be uninterrupted, error-free, or free of harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">9. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of France. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in Paris, France.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">10. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after any changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at: <strong className="text-on-surface">contact@yoluko.com</strong>
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
