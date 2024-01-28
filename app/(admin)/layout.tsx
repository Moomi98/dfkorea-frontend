import "@/app/globals.css";
import StyledComponentsProvider from "@/src/lib/StyledComponentsProvider";
import GlobalStyles from "@/src/styles/GlobalStyles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        <StyledComponentsProvider>{children}</StyledComponentsProvider>
      </body>
    </html>
  );
}
