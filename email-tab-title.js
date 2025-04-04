if (ctx.partition.profileInfo) {
  const profile = ctx.partition.profile
  str = `${ profile.email } - ${ ctx.tab.title }`
} else {
  str = ctx.tab.title
}
