const Page = require('./page');
const selfHealing = require('../utils/self-healing');

class LoginPage extends Page {
    get usernames() {
        return ["abcd","abcd","input#user-name"];
    }
    get passwords() {
        return ["abcd","abcd","//input[@placeholder='Password']"];
    }
    get btnLogins() {
        return ["abcd","abcd","//input[@type='submit']"];
    }

    async login(username, password) {
        const usernamefield = await selfHealing(this.usernames);
        await usernamefield.setValue(username);
        const passwordfield = await selfHealing(this.passwords);
        await passwordfield.setValue(password);
        const loginBtn = await selfHealing(this.btnLogins);
        await loginBtn.click();
    }  
}

module.exports = new LoginPage();





