import { helloWorld } from "@api/helloworld.api"

describe('Hello world', ()  => {
    it('should say hello', () => {
        const res = helloWorld();
        expect(res).toBe("Hello World");
    })
})