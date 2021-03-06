import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

global.___loader = {
  enqueue: jest.fn(),
}

global.fetch = () =>
  Promise.resolve({ ok: true, json: () => Promise.resolve() })
