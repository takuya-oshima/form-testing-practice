# form-testing-practice

Vitest + React Testing Libraryによるコンポーネントテストの学習用リポジトリです。
メールアドレス入力フォームを作成し、バリデーションの動きをテストで検証しています。

## 使用技術

React / TypeScript / Vite / Vitest / React Testing Library / user-event / jsdom

## テストの内容

| テストケース | 検証していること |
| --- | --- |
| 空のまま送信 | エラーメッセージ「メールアドレスを入力してください」が表示される |
| 不正な形式で送信 | 形式エラーが表示され、送信処理（onSubmit）が呼ばれない |
| 正しい形式で送信 | 送信処理が入力値付きで呼ばれ、エラーが消える |

## テストを書くうえで意識したこと

- **Arrange / Act / Assert** の3段階で、テストの流れを読みやすくする
- 要素は `getByRole` や `getByLabelText` で取得し、ユーザーが実際に目にする情報（ボタン名やラベル）を基準にテストする
- `user-event` で、クリックや文字入力など実際の操作に近い形で動きを再現する

## 実行方法

```bash
npm install
npm test
```
