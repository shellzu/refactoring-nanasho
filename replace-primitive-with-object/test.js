const expect = require('chai').expect;
const { Order, getHighPriorityCount } = require('./main');

function createOrders() {
    const highOrder = new Order({ priority: "high"});
    const rushOrder = new Order({ priority: "rush"});
    const lowOrder = new Order({ priority: "low"});
    const orders = [highOrder, rushOrder,lowOrder];
    return orders;
}

describe('getHighPriorityCount', () => {
    it('', () => {
        const orders = createOrders();
        expect(getHighPriorityCount(orders)).to.equal(2);
    });
});