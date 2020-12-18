function getLowestPrice(item) {
    let price = item.price;
    let count = item.inventory;
    if(count) {
        if(item.salePrice) {
            if(item.saleInventory) {
                price = item.salePrice
                return price;
            } else {
                return price;
            }
        }
    
    } else {
        return 0;
    }
}

item = {
    price : 10,
    inventory : 0,
    salePrice : 3,
    saleInventory : 0
}

let num = getLowestPrice(item);

console.log(num)
/* 
재고량 : inventory
정상가격 : price
할인 가격 : salePrice
할인 재고 : saleInventory

재고가 없으면 0을 반환합니다. 
어떤 상품이 할인 중이고 재고가 있다면 할인 가격을 반환합니다.  
어떤 상품이 할인 중이 아니거나 할인 중이라도 할인 상품의 재고가 없다면 정상 가격을 반환합니다. 

반환을 해야하는 값 0 or 할인 가격 or 정상가격

0 이 반환되는 경우 : count가 0일 때
할인 가격이 반환되는 경우 salePrice와 saleInventory가 모두 존재할 때
정상가격이 반환되는 경우 saleInventory가 존재하지 않을 때 
*/