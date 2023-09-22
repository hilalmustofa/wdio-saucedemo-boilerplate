async function selfHealing(elements) {
    for (const selector of elements) {
        try {
            const element = await $(selector);
            const exist = await element.isExisting();
            if (exist) {
                return element;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = selfHealing;