import getTestingData from './getTestingData'
import styles from './styles.css'

export default ({
  paging,
  shouldDisplayGoTo = true
} = getTestingData()) => `
  <div class="${styles.pagingContainer}">
  ${
    paging.availablePageSizes.length > 1 ? `
      <div class="${styles.containerAmountOfRows} ${styles.reposition}">
        <label class="${styles['col-form-label']} ">Show: </label>
        <select class="${styles['custom-select']} ${styles['custom-select']}"></select>
      </div>
    ` : ''
  }
  ${
    shouldDisplayGoTo ? `
      <div class="${styles.containerAllPages}">
        <label class="${styles['col-form-label']} ">Go to:  </label>
        <select class="${styles['custom-select']} ${styles['custom-select']}"></select>
      </div> 
    ` : ''
  }
  </div>
`
