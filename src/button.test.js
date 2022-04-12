let btn = require('./button')


describe('Different Button tests',()=>{
    it("Button returns a Number", () => {
        expect(btn(1)).toBe(1);
      });
    
      it("Button returns a String", () => {
        expect(btn('abcdefg')).toBe('abcdefg');
      })
      it('Button return null',()=>{
          expect(btn(null)).toBeNull()
      })
      it('Button returns true',()=>{
          expect(btn(true)).toBeTruthy()
      })
})