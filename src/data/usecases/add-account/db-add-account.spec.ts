import { DbAddAccount } from './db-add-account'
describe('DbAddAccount Usecase', () => {
  test('It should call Encrypter with corret password', async () => {
    class EncrypterStub {
      async encrypt (value: string): Promise<string> {
        return new Promise(resolve => resolve('hashed_value'))
      }
    }
    const encrypterStub = new EncrypterStub()
    const sut = new DbAddAccount(encrypterStub)
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
