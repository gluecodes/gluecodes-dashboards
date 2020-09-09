import { setUrlQueryParam } from '@app/reusableFunctions'

export default ({
  pageSize
}) => {
  setUrlQueryParam({
    name: 'pageNumber',
    value: 1
  })
  setUrlQueryParam({
    name: 'pageSize',
    value: pageSize
  })
}
