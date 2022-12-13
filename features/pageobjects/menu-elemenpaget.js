const Page = require('./page')

class menu-element extends Page {
    it('should demonstrate the Click Me command', async () => {
        const myButton = await $('#WrXbe')
        await myButton.click Me()
    
        const value = await myButton.getText()
        assert(value === 'You have done a dynamic click') // true
    })

    it('should demonstrate the Right Click Me  command', async () => {
        const myButton = await $('#WrXbe')
        await myButton. Right click Me()
    
        const value = await myButton.getText()
        assert(value === 'You have done a right click') // true
    })

    it('should demonstrate the Double Click Me  command', async () => {
        const myButton = await $('#doubleClickBtn')
        await myButton. Double click Me()
    
        const value = await myButton.getText()
        assert(value === 'You have done a double click') // true
    })

}   