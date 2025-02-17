import { initializeFirebaseApp } from "@/lib/firebase";
import "@/styles/style.scss";
import { getApp } from "firebase/app";
export const metadata = {
  title: "utmed×music",
  description: "utmed×music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  initializeFirebaseApp();
  console.log(getApp());
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </head>
      <body>
        <div className="l-main">
          <div className="l-header"></div>
          {children}
          <div className="l-footer"></div>
        </div>
      </body>
    </html>
  );
}
