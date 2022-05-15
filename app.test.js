const app = require('./app')
jest.useFakeTimers();
describe("testing events",   () =>{

        it("should be called",  async () => {
            expect.assertions(1)
            const logSpy = jest.spyOn(console, 'log');
            await app(["100", "1000"]);
            expect(logSpy).toHaveBeenCalledWith('Multiples of 100 1000 6500');

       
    })
})