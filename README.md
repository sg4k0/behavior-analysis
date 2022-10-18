# behavior-analysis

GoogleMapのタイムライン分析

## 事前準備

### `.env`ファイル作成

```
VITE_MYWEBSITE_URL="URL"
VITE_MYWEBSITE_NAME="名前"
```

## 実行方法

1. docker-compose build
2. docker-compose up

`http://localhost:5173`へアクセス

## ESLint実行

### チェック

```sh
yarn lint
```

### 自動修正

```sh
yarn lintfix
```

## Prettier実行

```sh
yarn format
```

## Storybook起動

```sh
yarn storybook
```

`http://localhost:6006`へアクセス

## vitest実行

```sh
yarn test
```
