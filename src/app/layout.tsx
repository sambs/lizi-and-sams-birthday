import "./globals.css";
import { Albert_Sans as Font } from "next/font/google";

const font = Font({ subsets: ["latin"] });

export const metadata = {
  title: "40 - 40 Party",
  description: "Lizi & Sam's 40 - 40 Party",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="max-w-3xl mx-auto p-4 sm:p-8 md:p-12">{children}</div>
      </body>
    </html>
  );
}
