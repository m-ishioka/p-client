## 言語で得た経験

MVC フレームワークをベースにして使用することが多いですが、wordpress などの CMS や決済サービス・API 開発でもよく利用してきました。

フレームワークでの利用経験も多いですが、完全スクラッチでの Saas システム開発での経験もあります。

## よく利用するデザインパターン

PHP では、以下のデザインパターンをよく実装に利用することが多いです。

- Strategy パターン

  - 実装する機能をアプリケーションと疎結合にしたい場合（これは、ソースコード全体の設計思想によって、使う場面は限定されます）にとても重宝するため、サービス層などでよく利用します。
  - また Facade パターンと組み合わせて利用することが多いです。
  - また、外部の API と連携した機能を作成する時にも使用したりします。
  - ブラックボックス化するデメリットもあるため、インターフェースは必ず定義するようにしソースコードが肥大化しないよう注意して書くことを心がけています。

- Singlton パターン

  - 主に、ロガー、DB クライアント周りのクラスで使用（ライブラリを含む）が多いです。
  - 基本的には、アプリケーション上で一つのインスタンスであることを担保したい場面でしか使用しないため、そこまで利用頻度は高くありません。

- Factory パターン

  - カスタムエラークラスの作成など返却するオブジェクトの形式が一定で、パターンが多い場面で利用します。
  - ただ、一度作成してしまうとどうしても影響範囲が多くなる場合が多いため、初回の仕様は考慮もれがないよう設計するように心がけています。

## PHP について個人的に思うこと

PHP は動的型付けではありますが、バージョン 7 以降で型宣言を利用できるようになるので、大分利用しやすくなった印象があります。