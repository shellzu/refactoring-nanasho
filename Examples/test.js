const expect = require('chai').expect;
const { customerData, update, compareUsage } = require('./main');

describe('compareUsage', () => {
  it('', () => {
    const [customerID, year, month] = ["1920", "2016", "1"];
    const expectObject = { laterAmount: 50, change: 50 - 70 };
    expect(compareUsage(customerID, year, month)).to.deep.equal(expectObject);
  });
});

describe('update', () => {
  it('', () => {
    const [customerID, year, month, amount] = ["1920", "2016", "1", 100];
    update(customerID, year, month, amount);
    expect(customerData[customerID].usages[year][month]).to.equal(amount);
  });
});