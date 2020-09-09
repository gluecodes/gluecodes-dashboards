import renderUi from '../../lib/renderUi'
import initFramework from '../../init/framework'

import component, {
  commands,
  pipeline,
  providers,
  reusableFunctions
} from './index.jsx'

import getTestingData from './getTestingData'

const {
  actions,
  runProviders,
  store
} = initFramework({
  commands,
  pipeline,
  providers,
  renderComponent: () => renderComponent(),
  reusableFunctions
})

const renderComponent = () => (
  renderUi(component(getTestingData({
    actionResults: store,
    actions
  })))
)

;(async () => {
  await runProviders()
  renderComponent()
})()
