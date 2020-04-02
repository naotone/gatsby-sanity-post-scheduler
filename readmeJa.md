# Post Scheduler for Headless CMS and Gatsby

### メリット
- 投稿者はHeadless CMS(ここではSanity)に投稿を行うだけでいい。
- 予約投稿のリストはAirtableで管理され、投稿ステータスの確認が可能。
- 投稿予定時間を過ぎた投稿がある場合のみビルドが実施される。

### デメリット
1. Airtableの有料プランが必要。

## 予約投稿の流れ
1. Headless CMSで予約投稿をする。
2. 通常の投稿と同じく、Webhookを利用してGatsbyのBuildが行われる。
3. 予約投稿があると、Airtableの更新を行う。(schedulePosts.js)
4. Github ActionsまたはEasyCronなどを利用して、x分毎にAirtableを確認し、予約投稿時間をすぎた投稿があればWebhook経由でBuildを実施。 (ZeitNowLambda-post.js)
5. Build後にAirtableと最新のウェブサイトを比較。投稿済みであれば、Airtableに投稿済みのチェックをつける。

Airtable: https://airtable.com/shr6pjQNwQBslecMa

実際のプロジェクトは、https://github.com/floatingdots/floatingdots.com-v2 でご覧いただけます。
