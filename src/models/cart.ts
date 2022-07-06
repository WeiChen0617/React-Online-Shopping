import { Types } from '@/services/models';
import { useState, useCallback } from 'react';

export default () => {
      const [cart, setCart] = useState<Types.Cart>({ shoppingList: [], voucher: {}, totalPrice: 0 })
      const calculate_total = (shoppingList: Types.Product[] | undefined, voucher: any = { price: 0 }) => {
            let totalPrice = cart.totalPrice || 0;
            shoppingList && shoppingList.map((item: Types.Product) => {
                  if (item.price && item.quantity) {
                        totalPrice += item.price * item.quantity
                  }
            });
            const voucherPrice = voucher.price ? voucher.price : 0
            return totalPrice - voucherPrice
      }


      const add_to_cart = useCallback((product: Types.Product) => {
            setCart((pre) => {
                  let item = pre.shoppingList?.find(i => i.id === product.id)
                  if (item && pre.shoppingList && item?.quantity) {
                        item.quantity = Number(item.quantity) + 1
                        return {
                              ...pre,
                              totalPrice: calculate_total(pre.shoppingList, pre.voucher)
                        }
                  } else {
                        product.quantity = 1
                        const newList = pre.shoppingList?.concat(product)
                        return {
                              shoppingList: newList,
                              totalPrice: calculate_total(newList, pre.voucher)

                        }
                  }
            })
      }, []);

      const remove_from_cart = useCallback((product: Types.Product) => {
            setCart((pre) => {
                  if (product && product.quantity && product.quantity <= 1) {
                        const newList = pre.shoppingList?.filter((i) => i.id !== product.id)
                        return {
                              totalPrice: calculate_total(newList, pre.voucher),
                              shoppingList: newList
                        }
                  }
                  let item = pre.shoppingList?.find(i => i.id === product.id)
                  // 删减数量
                  if (item && item?.quantity) {
                        item.quantity = Number(item.quantity) - 1
                  }
                  return {
                        ...pre,
                        totalPrice: calculate_total(pre.shoppingList, pre.voucher),
                  }
            })
      }, []);

      const set_voucher = useCallback((voucher: Types.Voucher) => {
            setCart((pre) => {
                  return {
                        ...pre,
                        voucher,
                        totalPrice: calculate_total(pre.shoppingList, voucher),
                  }
            })

      }, []);

      return { cart, calculate_total, add_to_cart, remove_from_cart, set_voucher }
}
