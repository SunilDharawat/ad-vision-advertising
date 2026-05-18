// src/components/ui/WhatsAppButton.tsx
import { siteConfig } from "@/src/lib/config";
import Image from "next/image";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello! I found your website and would like to enquire about your services.",
  );
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 group"
    >
      <Image src="/whatsapp-icon.png" alt="WhatsApp" width={22} height={22} />
      <span className="text-sm font-medium max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
