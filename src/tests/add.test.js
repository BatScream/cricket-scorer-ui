const add = (a, b) => a + b

const obj = (a,b) => {
    return {
        val1: a,
        val2: b
    }
}

test('should add two values', () => {
    const result = add (2,3)

    expect(result).toBe(5)
})

test ('should return object', () => {
    const result = obj(4,5)

    expect(result).toEqual({
        val1: 4,
        val2: 5 //reducer ()
    })
})