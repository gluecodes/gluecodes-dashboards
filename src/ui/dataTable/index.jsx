import externalStyles from '@app/styles'
import fa from '@app/fa'
import styles from './styles.css'

import '@app/commands/changeRecordListPageNumber'
import '@app/commands/changeRecordListPageSize'
import '@app/commands/deleteListRecord'
import '@app/commands/registerClickAway'
import '@app/providers/getRecordList'
import '@app/providers/getRecordListDisplayableFields'
import '@app/providers/parseUrlQueryParams'
import '@app/providers/seedRecordList'
import '@app/providers/transformRecordListToDisplay'

const untickDropdownStateCheckboxes = (checkboxes) => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false
  })
}

const getColumnOutOfWidth = (columns) => {
  let numberOfColumnsWithoutWidth = 0
  const controlsWidth = 5
  const remainingWidth = 100 - controlsWidth - columns.reduce((acc, { width }) => {
    let nextValue
    if (!width) {
      numberOfColumnsWithoutWidth += 1
      nextValue = acc
    } else {
      nextValue = acc + parseFloat(width)
    }
    return nextValue
  }, 0)
  return Math.round(remainingWidth / numberOfColumnsWithoutWidth)
}

export default ({
  columns,
  handleDropdownHiding,
  rows,
  rowActions
}) => (
  <div className={`${styles.tableContainer} ${styles['font-weight-normal']}`}>
    <table className={`${styles.table} ${externalStyles['table-striped']} `}>
      <thead>
        <tr>
          {
            (() => {
              const columnAutoWidth = getColumnOutOfWidth(columns) + '%'
              return columns.map((column) => (
                <th style={{ width: column.width || columnAutoWidth }}>{column.name}</th>
              ))
            })()
          }
          <th className={`${styles.controls}`}>Controls</th>
        </tr>
      </thead>
      <tbody gc-onceDomNodeVisited={(node) => {
        handleDropdownHiding(() => {
          const dropdownStateCheckbox = node.querySelectorAll(`.${styles.dropdownStateCheckbox}`)

          untickDropdownStateCheckboxes(Array.from(dropdownStateCheckbox))
        })
      }}>
        {
          rows.map((row, index) => (
            <tr>
              {
                row.map(column => (
                  <td className={`${externalStyles['text-wrap']} ${externalStyles['text-break']}`}>{column}</td>
                ))
              }
              <td className={`${externalStyles['text-center']}`}>
                <div className={`${externalStyles.dropdown}`}>
                  <input type="checkbox" id={`${styles.dropdownStateCheckbox}_${index}`}
                    className={styles.dropdownStateCheckbox} />
                  <label
                    attributes={{
                      'aria-haspopup': 'true',
                      'aria-expanded': 'false',
                      for: `${styles.dropdownStateCheckbox}_${index}`,
                      role: 'button'
                    }}
                    id={`${styles.dropdownToggle}_${index}`}
                    className={`${styles.dropdownToggle} ${externalStyles['dropdown-toggle']}_${index}`}
                    onclick={(e) => {
                      const dropdownStateCheckbox = e.target.closest('tbody')
                        .querySelectorAll(`.${styles.dropdownStateCheckbox}`)

                      e.preventDefault()
                      e.stopPropagation()
                      untickDropdownStateCheckboxes(Array.from(dropdownStateCheckbox))
                      e.target.closest(`#${styles.dropdownToggle}_${index}`).previousSibling.checked = true
                    }}><i className={`${fa.fas} ${fa['fa-ellipsis-v']}`}/></label>
                  <div className={`${styles['dropdown-menu']}`}>
                    {
                      rowActions.map(action => (
                        <a className={`${externalStyles['dropdown-item']}`} onclick={(e) => {
                          const dropdownStateCheckbox = e.target.closest('tbody')
                            .querySelectorAll(`.${styles.dropdownStateCheckbox}`)

                          const columnId = row[columns.findIndex(({ key }) => (key === 'id'))]

                          e.preventDefault()
                          e.stopPropagation()
                          action.handler(columnId)
                          untickDropdownStateCheckboxes(Array.from(dropdownStateCheckbox))
                        }}>{action.name}</a>
                      ))
                    }
                  </div>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div >
)
