import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Global Aguas",
  description: "SUrely come next description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-primary">
        <NextTopLoader color="#ffc32a" />
        {children}
      </body>
    </html>
  );
}
