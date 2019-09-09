import { logger } from './logger'
import { fetchJSON } from './fetch'

const loggerSpy = jest.spyOn(logger, 'error').mockImplementation(() => {})

describe('fetchJSON', () => {
  const globalFetch = global.fetch

  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    )
  })

  afterEach(() => {
    loggerSpy.mockReset()
  })

  afterAll(() => {
    global.fetch = globalFetch
  })

  it('should handle success response', async () => {
    const url = 'http://somewhere.com'
    const json = {
      foo: 'bar',
    }
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(json),
      })
    )
    const jsonRes = await fetchJSON(url)
    expect(jsonRes).toEqual(json)
  })

  it('should throw error res.ok is false', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(),
      })
    )
    try {
      await fetchJSON('http://somewhere.com')
    } catch (e) {
      expect(e).toBeDefined()
    }
    expect(loggerSpy).toHaveBeenCalledTimes(1)
  })

  it('should throw error if res.json fails', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: undefined,
      })
    )
    try {
      const fetchJSONPromise = await fetchJSON('http://somewhere.com')
    } catch (e) {}
    expect(loggerSpy).toHaveBeenCalledTimes(1)
  })
})
