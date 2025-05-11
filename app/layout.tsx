import type { Metadata } from "next";
import { Providers } from "./providers"; // 作成したProvidersをインポート

// アプリケーションのメタデータ
export const metadata: Metadata = {
  title: "カウントアップアプリ | Next.js & Chakra UI",
  description:
    "Next.js App RouterとChakra UIで作られたシンプルなカウントアップアプリ",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

// ルートレイアウトコンポーネント
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  // 日本語サイトなのでlang="ja"に設定
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers> {/* ChakraProviderでラップ */}
      </body>
    </html>
  );
}
