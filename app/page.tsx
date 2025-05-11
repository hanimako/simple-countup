"use client"; // クライアントサイドでのインタラクション（状態管理、イベントハンドラ）があるため、クライアントコンポーネントとしてマークします

import { useState } from "react";
import {
  Button, // ボタンコンポーネント
  Flex, // Flexboxレイアウト用コンポーネント
  Heading, // 見出し用コンポーネント
  HStack, // 水平方向のスタックレイアウト用コンポーネント
  Text, // テキスト表示用コンポーネント
  VStack, // 垂直方向のスタックレイアウト用コンポーネント
} from "@chakra-ui/react";

// HomePageコンポーネント: カウントアップアプリのメインUIとロジックを定義
export default function HomePage() {
  // useStateフックを使用してカウントの状態を管理します。初期値は0です。
  const [count, setCount] = useState<number>(0);

  // カウントを1増やす関数
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // カウントを0にリセットする関数
  const handleReset = () => {
    setCount(0);
  };

  // Chakra UIのコンポーネントを使用してUIを構築します
  return (
    <Flex
      as="main" // HTML5のmain要素としてレンダリングし、セマンティックなマークアップを意識
      direction="column" // 子要素を垂直方向に配置
      alignItems="center" // 子要素を中央揃え（交差軸方向）
      justifyContent="center" // 子要素を中央揃え（主軸方向）
      minHeight="100vh" // ビューポートの高さ全体に広がるように設定
      bg="gray.50" // 背景色（ライトモードの値を直接指定し、シンプルに）
      p={{ base: 4, md: 8 }} // レスポンシブなパディング（スマートフォンでは4、ミディアムスクリーン以上では8）
    >
      <VStack spacing={{ base: 6, md: 8 }} textAlign="center">
        {/* アプリケーションのタイトル */}
        <Heading
          as="h1" // h1要素としてレンダリング
          size={{ base: "xl", md: "2xl" }} // レスポンシブなフォントサイズ
          color="teal.500" // Chakra UIのテーマカラーを使用
        >
          カウントアップ
        </Heading>

        {/* 現在のカウント数を表示 */}
        <Text
          fontSize={{ base: "7xl", md: "9xl" }} // 非常に大きなレスポンシブフォントサイズで視認性を高める
          fontWeight="bold"
          color="gray.700"
          lineHeight="1" // 行間を詰めて数字が大きく見えるように調整
          data-testid="count-display" // テスト用のID
        >
          {count}
        </Text>

        {/* 操作ボタンを水平に配置 */}
        <HStack spacing={{ base: 3, md: 4 }}>
          <Button
            colorScheme="teal" // Chakra UIのカラースキーム（青緑系）
            size={{ base: "md", md: "lg" }} // レスポンシブなボタンサイズ
            onClick={handleIncrement}
            aria-label="カウントを1増やす" // アクセシビリティ向上のためのaria-label
          >
            Increment
          </Button>
          <Button
            colorScheme="gray" // Chakra UIのカラースキーム（グレー系）
            variant="outline" // アウトラインスタイルのボタン
            size={{ base: "md", md: "lg" }} // レスポンシブなボタンサイズ
            onClick={handleReset}
            aria-label="カウントを0にリセットする" // アクセシビリティ向上のためのaria-label
          >
            Reset
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
}
