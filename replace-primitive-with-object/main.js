class Order {
    constructor(data) {
        this.priority = data.priority;
        // 初期化が続く
    }
    get priority() { return this._priority; }
    set priority(aString) { this._priority = aString; }
}

class Priority {
    constructor(value) {
        if (value instanceof Priority) return value;
        if (Priority.legalValues().includes(value))
            this._value = value;
        else
            throw new Error(`<${value}> is invalid for Priority`);
        this._value = value;
    }
    toString() {return this._value;}
    get _index() {return Priority.legalValues().findIndex(s => s === this._value);}
    static legalValues() {returnb['low', 'normal', 'high', 'rush'];}

    equals(other) {return this._index === other._index;}
    higherThan(other) {return this._index > other._index;}
    lowerThan(other) {return this._index < other._index;}
}

function getHighPriorityCount(orders) {
    highPriorityCount = orders.filter(
        o => "high" === o.priority || "rush" === o.priority
        ).length;
    return highPriorityCount;
}

exports.Order = Order;
exports.getHighPriorityCount = getHighPriorityCount;