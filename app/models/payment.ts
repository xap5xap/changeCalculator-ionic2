export class Payment {
    public price: number;
    public bills: number;
    public coins: number;

    constructor(
    ) { }

    get Paid(): number {
        var centsAmount: number = centsAmount = Number(this.coins || 0) / Number(100);
        return Number(this.bills || 0) + Number(centsAmount);
    }
}
