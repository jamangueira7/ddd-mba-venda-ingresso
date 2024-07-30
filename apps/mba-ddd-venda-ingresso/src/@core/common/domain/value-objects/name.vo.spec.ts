import { Name } from "./name.vo"

test('deve criar um nome valido', () => {
    const name = new Name('aaaaaa')
    expect(name.value).toBe('aaaaaa')
})