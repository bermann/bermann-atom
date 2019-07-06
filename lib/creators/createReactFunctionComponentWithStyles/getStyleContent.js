"use babel";

const forRN = function(name) {
  return `import {StyleSheet} from 'react-native'
import getScreenWidth from 'App/helpers/device/getScreenWidth'

export default () => StyleSheet.create({
  container: {},
})
`;
};

export default function(name, isRN) {
  if (isRN) return forRN(name);
  return `:local(.container){
  
}`;
}
