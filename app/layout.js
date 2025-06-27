import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ElevateAI: Personalized AI Career Coach",
  description: "Personalized AI Career Coach",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            {/* footer */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
