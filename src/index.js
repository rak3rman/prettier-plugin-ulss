const {
  doc: {
    builders: {concat, hardline, group, indent, line, join, softline}
  }
} = require('prettier')

const languages = [
  {
    extensions: ['.ulss'],
    name: 'ULSS',
    parsers: ['ulss-parse']
  }
]

const parsers = {
  'ulss-parse': {
    // parse: text => parser.parse(text),
    astFormat: 'ulss-ast'
  }
}

function printUlss(path, options, print) {
  return ''
}

const printers = {
  'ulss-ast': {
    print: printUlss
  }
}

module.exports = {
  languages,
  parsers,
  printers
}