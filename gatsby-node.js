const schedulePosts = require('./lib/schedulePosts')

exports.onPostBuild = async ({graphql, reporter}) => {
  await schedulePosts(graphql, reporter)
}
