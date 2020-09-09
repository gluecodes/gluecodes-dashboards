import { generators } from '@gluecodes/components'

export default ({
  appImports,
  identifiers
}) => generators.deleteListRecord({
  appImports,
  storageKey: identifiers.getRecordList
})
