"use babel";
import makeCreator from "../makeCreator";
import getIndexContent from "./getIndexContent";
import getStylesContent from "./getStylesContent";

export default makeCreator(function({
  path,
  name,
  createFile,
  openFile,
  isReactNative
}) {
  const indexContent = getIndexContent(name, isReactNative);
  const stylesContent = getStylesContent(name, isReactNative);
  const stylesExtension = isReactNative ? "js" : "css";
  createFile(`${name}/index.js`, indexContent);
  createFile(`${name}/styles.${stylesExtension}`, stylesContent);

  openFile(`${name}/index.js`);
});
