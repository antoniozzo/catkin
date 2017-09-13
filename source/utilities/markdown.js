const MarkdownIt = require('markdown-it')

const md = new MarkdownIt({
    html   : true,
    breaks : true
})

export default source => md.render(source)
