export declare namespace Types {
      interface Cart {
            shoppingList?: Product[],
            voucher?: Voucher,
            totalPrice?: number,
      }
      interface Order {
            id?: string,
            userId?: string,
            shoppingList?: Product[],
            voucher?: Voucher,
            createTime?: string,
            totalPrice?: number,
      }

      interface Voucher {
            id?: string,
            vname?: string,
            price?: number,
            description?: string,
            expiration?: string,
      }

      interface Product {
            id?: string,
            pname?: string,
            category?: 'WomensHiking' | 'MensHiking' | 'WomensRunning' | 'MensRunning' | 'WomensCycling' | 'MensCycling',
            price?: number,
            quantity?: number,
            updateTime?: string,
      }
}
