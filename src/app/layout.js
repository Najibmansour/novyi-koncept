import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: {
    default: "Novyi Koncept",
    template: "Novyi Koncept | %s ",
  },
  description:
    'NOVYI KONCEPT provides manufacturers and traders with sales consulting services on marketplaces as trading platforms, helping to sell, promote, and support on Russian and foreign marketplaces;"НОВЫЙ КОНЦЕПТ" предоставляет производителям и трейдерам консультационные услуги по продажам на торговых площадках (маркетплейсах), помогая продавать, продвигать, поддерживать на российских и зарубежных маркетплейсах;',
  keywords: [
    "Market",
    "places",
    "online",
    "trading",
    "online",
    "sales",
    "service",
    "consultation",
    "products",
    "packaging",
    "delivery",
    "wildberry",
    "ozon",
    "yandex",
    "marketing",
    "sales",
    "Russia",
    "CIS",
    "Kazakhstan",
    "Armenia",
    "Turkmenistan",
    "Belarus",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster position="top-center" richColors />
      <body className=" font-['Helvetica-Bold',Helvetica]">{children}</body>
    </html>
  );
}
