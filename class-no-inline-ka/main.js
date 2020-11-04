class TrackingInformation {
    // aksh-tが仕様を決めたが、どんな仕様か分からない
    // classで作成されたオブジェクトの生成と初期化のための特殊なメソッド
    constructor(data) {
        this._shippingCompany = data.shippingCompany;
        this._trackingNumber = data.trackingNumber;
    }
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {this._trackingNumber = arg;}
    get display() {
        return `${this.shippingCompany}: ${this._trackingNumber}`;
    }
}

class Shipment {
    // 何故TrackingInformationのコンストラクタと形が違うのか分からない
    constructor(data) {
        this._trackingInformation = new TrackingInformation(data);
    }
    get trackingInfo() {
        return this._trackingInformation.display;
    }
    get trackingInformation() {return this._trackingInformation;}
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
}

exports.Shipment = Shipment;
exports.TrackingInformation = TrackingInformation;