describe('our first test', () => {
    it('our first test should succeed', () => {
        expect(2+2).toBe(4)
    })
})


const getScore = require('../routes/scores')

it('should return correct scores', () => {
    getScore().then(() => {
        
    })
})