export const getAvailablePageSets = ({
  pageSize,
  totalPages
}) => Array(Math.ceil(totalPages / pageSize))
  .fill(0)
  .map((...[, index]) => ({
    setNumber: index + 1,
    pageNumber: (pageSize * index) + 1,
    setName: `${(pageSize * index) + 1} - ${pageSize * (index + 1)}`
  }))

export const getActivePageSet = ({
  activePage,
  pageSize
}) => Math.ceil(activePage / pageSize)

export const getPagesToDisplay = ({
  activePage,
  numOfPagesToDisplay,
  totalPages
}) => {
  const beginningMovedBackByTwo = activePage - (Math.floor(numOfPagesToDisplay / 2)) - 1

  let firstPage = beginningMovedBackByTwo

  if (totalPages < numOfPagesToDisplay) {
    firstPage = 0
  } else if (firstPage < 1) {
    firstPage = 0
  } else if (activePage >= (totalPages - 1)) {
    firstPage -= (activePage - totalPages + 2)
  }

  return Array(totalPages < numOfPagesToDisplay ? totalPages : numOfPagesToDisplay)
    .fill(firstPage)
    .map((number, index) => (number + index + 1))
}
