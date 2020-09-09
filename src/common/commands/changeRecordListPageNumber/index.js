import { setUrlQueryParam } from '@app/reusableFunctions'

export default ({
  pageNumber
}) => {
  setUrlQueryParam({
    name: 'pageNumber',
    value: pageNumber
  })
}
