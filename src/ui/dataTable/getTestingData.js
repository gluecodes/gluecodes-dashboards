export default ({
  actionResults,
  actions
}) => ({
  columns: actionResults.getRecordListDisplayableFields,
  handleDropdownHiding: actions.registerClickAway,
  paging: actionResults.getRecordList,
  rows: actionResults.transformRecordListToDisplay,
  onPageChanged: (pageNumber) => {
    actions.changeRecordListPageNumber({ pageNumber })
    actions.reload()
  },
  onPageSizeChanged: (pageSize) => {
    actions.changeRecordListPageSize({ pageSize })
    actions.reload()
  },
  rowActions: [
    {
      name: 'edit',
      handler: (id) => {
        console.log('edit', id)
      }
    },
    {
      name: 'delete',
      handler: (id) => {
        const yes = confirm(`Are you sure you want to delete record #${id}?`)

        if (yes) {
          actions.deleteListRecord(+id)
          actions.reload()
        }
      }
    }
  ]
})
