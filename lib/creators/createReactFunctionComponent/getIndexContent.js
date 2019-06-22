'use babel'

const forRN = function(name) {
  return `import React from 'react'
import {View, Text} from 'react-native'

const propTypes = {}
const defaultProps = {}

function ${name}(props) {
  return (
    <View>
      <Text>${name}</Text>
    </View>
  )
}

${name}.propTypes = propTypes
${name}.defaultProps = defaultProps

export default ${name}
`
}

export default function(name, isRN) {
  if (isRN) return forRN(name)
  return `import React from 'react'

const propTypes = {}
const defaultProps = {}

function ${name}(props) {
  return (
    <div>
      ${name}
    </div>
  )
}

${name}.propTypes = propTypes
${name}.defaultProps = defaultProps

export default ${name}
`
}
