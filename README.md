これはReactとTypescriptの勉強のために開発しているカレンダーアプリのフロントエンドです。[以前](https://github.com/f-masanori/calendar_react)も同じ目的でカレンダーアプリを開発していたのですが、ひどいコードだったので、こちらに書き直しています。

サーバーサイドは[こちら](https://github.com/f-masanori/calendar_app)

# setup
## firebase

プロジェクトのルートディレクトリで以下のコマンドを実行し、`.firebase.env`が作成されたことを確認
```
$ make firebase.env
```

1. firebase project作成
2. firebase app作成
3. 認証に必要なキーを取得
4. `.firebase.env`のそれぞれの値に３で取得したキー等を入力


_____________
### 使用技術

- 言語 : Typescript
- フレームワーク： React,, FullCalendar
- ツール : Firebase Authentication



### アプリの構成

![1](https://user-images.githubusercontent.com/46617611/81526213-f77e1e00-9391-11ea-9bc6-b7d18c416456.png)



### 前回からの改善点(改善予定のものも含む)

1. ESlint,prettierを導入して、コードの見た目が綺麗になった。
2. 可読性を上げるため、責務ごとに分けたディレクトリ構造にした。
3. 学習のためRedux, Redux-sagaを導入した。
4. コンポーネントの再利用化を促進するため、UI部分には、アトミックデザインを導入した。
5. 学習のためStyled-componentを導入した。



### ESlint,prettierについて

ESlint、prettierの設定については、[りあクト！ TypeScriptで始めるつらくないReact開発 第2版](https://booth.pm/ja/items/1312652)を参考



