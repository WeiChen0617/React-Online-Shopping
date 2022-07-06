import UserCardBlock from './component.tsx/CardBlock';
import { useModel } from 'umi';

export default (props: any) => {
      const { cart, set_voucher, add_to_cart, remove_from_cart } = useModel('cart', (ret) => ({
            cart: ret.cart,
            add_to_cart: ret.add_to_cart,
            remove_from_cart: ret.remove_from_cart,
            set_voucher: ret.set_voucher,
      }));
      return (
            <div style={{ width: '85%', margin: '3rem auto' }}>
                  <h1>My Shopping Cart</h1>
                  <div>
                        <UserCardBlock products={cart.shoppingList} setVoucher={set_voucher} totalPrice={cart.totalPrice} addItem={add_to_cart} removeItem={remove_from_cart} />
                  </div>

            </div >
      )
};