import { generators } from '@gluecodes/components'
import data from '../seedRecordList/data.json'

export default ({ appImports }) => generators.listDisplayableFields({
  appImports,
  fields: data.fields
})
