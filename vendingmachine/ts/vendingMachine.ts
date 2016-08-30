/// <reference path="./coin.ts" />

class VendingMachine {
    private paid = 0;
    public acceptCoin = (coin: Quarter): void => {
        this.paid = this.paid + coin.Value;
        var element = document.getElementById("total");
        element.innerHTML = this.paid.toString();   
    }
}