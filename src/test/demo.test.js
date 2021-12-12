function suma(a, b) {
    return a + b
}

describe('demo-component', () => {

    let a;

    beforeEach(() => {
        a = 1;
    })

    test('should return 5 when run "suma" with 3 and 2', () => {
        a = 3
        const result = suma(a, 2)

        expect(result).toBe(5);
    })

    test('vamos a probar toEquals', () => {
        const obj1 = {a, b: 2}
        const obj2 = {a: 1, b: 2}
        expect(obj1).toEqual(obj2)
    })


})




