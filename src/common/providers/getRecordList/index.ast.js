import { generators } from '@gluecodes/components'

import '@app/providers/parseUrlQueryParams'
import '@app/providers/seedRecordList'

export default props => generators.getPagedRecordList({
  ...props,
  storageKey: props.identifiers.getRecordList
})
