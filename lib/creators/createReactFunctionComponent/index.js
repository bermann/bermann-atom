'use babel'
import makeCreator from '../makeCreator'
import getIndexContent from './getIndexContent'

export default makeCreator(function({path, name, createFile, openFile, isReactNative}) {
  const indexContent = getIndexContent(name, isReactNative)
  createFile(`${name}/index.js`, indexContent)

  openFile(`${name}/index.js`)
})
