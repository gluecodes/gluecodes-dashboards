import '@app/providers/getRecordList'

export default actionResults => ({
  activePage: actionResults.getRecordList.activePage,
  availablePageSizes: [10, 20, 50, 100],
  numOfPagesToDisplay: 5,
  pageSize: actionResults.getRecordList.pageSize,
  totalPages: actionResults.getRecordList.totalPages
})
