let doAdd = require('./search')
//let axios  = require('./axios')

let search = (abc)=>{
    return abc
}
let restaurant = [
    'food',
    'pizza',
    'loaf',
    'dinner',
    'soup'
]

describe('test for search bar',()=>{
    it('common search',()=>{
        expect(search('abcd')).toMatch(/[a-zA-Z]+/)
    })
    it('Restaurant search',()=>{
        expect(restaurant).toContain(search('food'))
    })
})


describe('This is the mock function',()=>{
    const mock = jest.fn()
    let result = mock("foo");
    let result2 = mock("foo");
    let result3 = mock("foo");

    it('',()=>{
        expect(result).toBeUndefined();
    })
    it('',()=>{
        expect(mock).toHaveBeenCalled();
    })
    it('',()=>{
        expect(mock).toHaveBeenCalledTimes(3);
    })
    it('',()=>{
        expect(mock).toHaveBeenCalledWith("foo");
    })
})


// How to change return value, implementation / promise 

describe('changing return values :',()=>{
    it('return value test: ', ()=>{
        const mock = jest.fn(()=>{
            return 'Diran'
        })
        expect(mock('Diran')).toBe('Diran')
        expect(mock).toHaveBeenCalledWith('Diran')
        expect(mock).toHaveBeenCalledTimes(1)
    })
})


// Dependency Injection 


test('we are mocking a callback dependency',()=>{
    const mock = jest.fn()
    doAdd(4,5,mock )
    expect(mock).toHaveBeenCalledWith(20)
})


// app.post('/post/4568',(req,res)=>{
//     axios.post('/user', {"user4" : {
//         "name" : "mohit",
//         "password" : "password4",
//         "profession" : "teacher",
//         "id": 4
//      }})
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
// })