import '@app/providers/getRecordListDisplayableFields'
import '@app/providers/getRecordList'

export default actionResults => (
  actionResults.getRecordList.data.reduce((topLevelAcc, record) => [
    ...topLevelAcc,
    actionResults.getRecordListDisplayableFields.reduce((acc, { key }) => [
      ...acc,
      record[key]
    ], [])
  ], [])
)
