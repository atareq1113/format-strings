const tw = jancy.windowManager.getWindow({uuid: ctx.uuid})
str = ctx.title + ` (${ tw.getSelectedTabs().length })`
