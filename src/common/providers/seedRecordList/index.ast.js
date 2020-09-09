import { generators } from '@gluecodes/components'
import data from './data.json'

export default ({
  appImports,
  identifiers
}) => {
  return generators.seedListMockData({
    appImports,
    records: data.records,
    storageKey: identifiers.getRecordList
  })
}
