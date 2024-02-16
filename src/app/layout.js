import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "Novyi Koncept",
  description: "Novyi concept description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster position="top-center" richColors />
      <body className=" font-['Helvetica-Bold',Helvetica]">{children}</body>
    </html>
  );
}
