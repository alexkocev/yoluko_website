import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-tertiary/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="h-10 w-10 text-tertiary" />
        </div>
        <h1 className="text-4xl font-headline font-black text-on-surface mb-4">
          Message Sent!
        </h1>
        <p className="text-on-surface-variant text-lg mb-8">
          Thank you for contacting us. We will get back to you within 24 hours.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-bold hover:bg-primary-dim transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
