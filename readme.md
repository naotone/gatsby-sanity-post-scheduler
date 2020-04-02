# Post Scheduler for Headless CMS and Gatsby

日本語版の解説はこちら

https://github.com/naotone/gatsby-sanity-post-scheduler/blob/master/readmeJa.md

### Pros
- Easy for non-developers. Contributors just post to Headless CMS. (Sanity in this repo).
- List of scheduled posts is managed by Airtable, which allows you to check the status of your posts.
- Build only run if post's published time is past.

### Cons
- Paid Airtable plan is required.

## Process
1. Schedule a post in Headless CMS.
2. Gatsby Build will be run.
3. Update the Airtable, if there is a scheduled post. (schedulePosts.js)
4. Check Airtable's records every x minutes with Github Actions or EasyCron, etc. If any posts are past the published time, run a build via Webhook. (ZeitNowLambda-post.js)
5. Compare the latest website with Airtable record. Change published status to true, if the post has succeeded.

Airtable: https://airtable.com/shr6pjQNwQBslecMa

Actual use case can be found at https://github.com/floatingdots/floatingdots.com-v2
