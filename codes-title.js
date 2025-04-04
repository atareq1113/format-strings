str = ctx.tab.title

let codes = []
if (ctx.tab.emailCode && !ctx.tab.emailCode.isError) {
  codes.push(ctx.tab.emailCode.value)
}

if (ctx.tab.smsCode && !ctx.tab.smsCode.isError) {
  codes.push(ctx.tab.smsCode.value)
}

if (codes.length) {
  str = codes.join(' / ')
}
