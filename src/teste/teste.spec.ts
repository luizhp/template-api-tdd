import { IDITeste } from '@/domain/usecases/IDITeste'
import { DITeste } from '@/data/usecases/DITeste'
import { Teste } from './teste'

describe('Description', () => {
  it('Test if mocked is called with parameters', () => {
    class DITesteStub implements IDITeste {
      do (data: string): boolean {
        return true
      }
    }
    const mockDITeste = new DITesteStub()
    const sut = new Teste(mockDITeste)
    const doSpy = jest.spyOn(mockDITeste, 'do')
    sut.get('hello')
    expect(doSpy).toHaveBeenCalledWith('hello')
  })

  it('Test empty', () => {
    const diTeste = new DITeste()
    const sut = new Teste(diTeste)
    const retorno = sut.get(null)
    expect(retorno).toEqual(false)
  })

  it('Test filled', () => {
    const diTeste = new DITeste()
    const sut = new Teste(diTeste)
    const retorno = sut.get('123')
    expect(retorno).toEqual(true)
  })
})
