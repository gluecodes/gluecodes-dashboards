export default ({
  actionResults,
  actions
} = {
  actionResults: {
    getRecordPagingState: {
      availablePageSizes: [10, 20, 50, 100]
    }
  }
}) => ({
  paging: actionResults.getRecordPagingState,
  onPageChanged: (pageNumber) => {
    actions.changeRecordListPageNumber({ pageNumber })
    actions.reload()
  },
  onPageSizeChanged: (pageSize) => {
    actions.changeRecordListPageSize({ pageSize })
    actions.reload()
  }
})
