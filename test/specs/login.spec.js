const LoginPage = require('../pageobjects/login.page');
const dashboardPage = require('../pageobjects/dashboard.page');

describe('Saucelab Test Suites', () => {
    it('Login', async () => {
        await LoginPage.open();
        await LoginPage.login(process.env.username, process.env.password);
        const labelproduct = await dashboardPage.productlabel()
        const labeltext = await labelproduct.getText();
        expect(labeltext).toBe("Products");
    })

})