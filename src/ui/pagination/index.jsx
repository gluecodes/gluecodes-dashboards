import { getAvailablePageSets, getActivePageSet, getPagesToDisplay } from './logic'

import externalStyles from '@app/styles'
import styles from './styles.css'

import '@app/commands/changeRecordListPageNumber'
import '@app/commands/changeRecordListPageSize'
import '@app/providers/getRecordList'
import '@app/providers/getRecordPagingState'
import '@app/providers/parseUrlQueryParams'
import '@app/providers/seedRecordList'

export default ({
  onPageChanged,
  onPageSizeChanged,
  paging,
  shouldDisplayGoTo = true
}) => (
  <div className={`${styles.pagingContainer}`}>
    {
      paging.totalPages > 1 ? (
        <ul className={`${styles.pagination} ${externalStyles['justify-content-center']}`}>
          {
            paging.activePage > 1 ? (
              <li className={`${styles['page-item']}`}>
                <a className={`${styles['page-link']}`} href="#" onclick={(e) => {
                  onPageChanged(paging.activePage - 1)
                  e.preventDefault()
                }}>Previous</a>
              </li>
            ) : null
          }
          {
            getPagesToDisplay({
              activePage: paging.activePage,
              numOfPagesToDisplay: paging.numOfPagesToDisplay,
              totalPages: paging.totalPages
            }).map(pageNumber => (
              <li className={`${styles['page-item']} ${pageNumber === paging.activePage ? externalStyles.disabled : ''}`}>
                <a
                  className={`${styles['page-link']}`}
                  href="#"
                  onclick={(e) => {
                    onPageChanged(pageNumber)
                    e.preventDefault()
                  }}>{pageNumber}</a>
              </li>
            ))
          }
          {
            paging.activePage < paging.totalPages ? (
              <li className={`${styles['page-item']}`}>
                <a className={`${styles['page-link']}`} href="#" onclick={(e) => {
                  onPageChanged(paging.activePage + 1)
                  e.preventDefault()
                }}>Next</a>
              </li>
            ) : null
          }
        </ul>
      ) : null
    }
    {
      paging.availablePageSizes.length > 1 ? (
        <div className={`${styles.containerAmountOfRows} ${paging.totalPages === 1 ? styles.reposition : ''}`}>
          <label className={`${styles['col-form-label']} `}>Show: </label>
          <select className={`${styles['custom-select']} ${styles['custom-select']}`} onchange={(e) => {
            onPageSizeChanged(e.target.value)
          }}>
            {
              paging.availablePageSizes.map(size => (
                <option value={size} {...(size === paging.pageSize ? { selected: true } : {})}>{size}</option>
              ))
            }
          </select>
        </div>
      ) : null
    }
    {
      shouldDisplayGoTo ? (
        <div className={`${styles.containerAllPages}`}>
          <label className={`${styles['col-form-label']} `}>Go to: </label>
          <select className={`${styles['custom-select']} ${styles['custom-select']}`} onchange={(e) => {
            onPageChanged(e.target.value)
          }}>
            {
              getAvailablePageSets({
                pageSize: paging.pageSize,
                totalPages: paging.totalPages
              }).map(({ setNumber, pageNumber, setName }) => (
                <option value={pageNumber} {...(setNumber === getActivePageSet({
                  activePage: paging.activePage,
                  pageSize: paging.pageSize
                }) ? { selected: true } : {})}>
                  {setName}</option>
              ))
            }
          </select>
        </div>
      ) : null
    }
  </div>
)
