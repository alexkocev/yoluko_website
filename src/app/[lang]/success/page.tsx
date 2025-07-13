import Link from "next/link";
import { getDictionary } from "@/app/dictionaries";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default async function SuccessPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = params;
  const t = await getDictionary(lang);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yoluko-navy text-white text-center p-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20 max-w-2xl w-full">
        <CheckCircle className="h-16 w-16 text-yoluko-teal mx-auto mb-6" />
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t.success_page.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          {t.success_page.message}
        </p>
        <Button asChild>
          <Link href={`/${lang}`}>
            {t.success_page.back_button}
          </Link>
        </Button>
      </div>
    </div>
  );
} 