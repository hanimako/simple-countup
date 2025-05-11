"use client"; // このディレクティブは、このファイルがクライアントコンポーネントであることを示します

import { ChakraProvider } from "@chakra-ui/react";
// 必要に応じてカスタムテーマをインポートできます
// import theme from './theme';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // ChakraProviderでアプリケーションをラップします
  // カスタムテーマを使用する場合は、<ChakraProvider theme={theme}> のように渡します
  return <ChakraProvider>{children}</ChakraProvider>;
}
