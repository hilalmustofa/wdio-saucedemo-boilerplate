const selfHealing = require('../utils/self-healing');

class DashboardPage {
    get labelproducts() {
        return ["abcd","abcd","//div[text()='Products']"]
    }

    async productlabel() {
        const labelproduct = await selfHealing(this.labelproducts);
        return labelproduct;
    }
}

module.exports = new DashboardPage();