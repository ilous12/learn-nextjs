import Nativagation from "./about-us/components/natigation";

export const metadata = {
  title: {
    template: "N-Admin | %s",
  },
  description: "Generated by SKT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nativagation />
        {children}
      </body>
    </html>
  );
}