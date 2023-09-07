import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative ">
        <div className="absolute bg-gradient-to-br
            from-[#091135]
            to-[#0d1117] filter h-full w-full -z-50" />
          {/* <div
            className="
            absolute
            top-0
            left-0
            w-full
            h-full
            bg-gradient-to-br
            from-slate-900
            to-slate-950
            rounded-sm
            filter
            blur-3xl
            opacity-20
            -z-50
            "
            
          /> */}
          <Navbar />
          {children}
          <Footer />
        
      </body>
    </html>
  );
}
