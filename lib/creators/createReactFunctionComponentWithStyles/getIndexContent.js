"use babel";

const forRN = function(name) {
  return `import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

const propTypes = {}
const defaultProps = {}

function ${name}() {
  return (
    <View style={styles.container}>
      <Text>${name}</Text>
    </View>
  )
}

${name}.propTypes = propTypes
${name}.defaultProps = defaultProps

export default ${name}
`;
};

export default function(name, isRN) {
  if (isRN) return forRN(name);
  return `import React from 'react'
import styles from './styles.css'

const propTypes = {}
const defaultProps = {}

function ${name}() {
  return (
    <div className={styles.container}>
      ${name}
    </div>
  )
}

${name}.propTypes = propTypes
${name}.defaultProps = defaultProps

export default ${name}
`;
}
