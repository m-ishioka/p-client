## 技術を使う理由

PHP は私が在籍していた企業の Saas アプリケーションで使用されていた言語でした。
また、Wordpress や EC-CUBE で使用されていたり、モノリシックな MVC アプリケーションを開発できるフレームワークも多く開発されており、利用用途が広いです。

また、動的型付け言語のため敷居も低く Web 系の開発ではシェアが高くメジャーな言語なため様々なアプリケーションの開発を PHP で行いました。
公式のマニュアルが公開されているため言語仕様の理解もしやすいと言えます。
PSR で規約が標準化されている点も可読性の向上の助けになります。

## メリット・デメリット

PHP はインタプリタ言語の中で比較するのであれば、実行速度は速い傾向にあると言われているのでそこで他の言語と比較して劣っていることはないと思います。

CMS の開発では、比較的スピード感を持って開発を行える点も魅力的かなと思います。

ですが、php は自由度の高い言語で php の設定一つでセキュリティの脆弱性の危険性を起こしてしまうリスクが付き纏いますのでそこは php のマニュアル上でも[セキュリティ](https://www.php.net/manual/ja/security.php)の項目があるようにリスクを意識して使用する必要があります。

## 課題

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