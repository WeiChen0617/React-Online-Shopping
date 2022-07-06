import { Card, List, Divider, Spin, Tag, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Types } from '@/services/models';
import { useEffect, useState } from 'react';
import { getProductList } from '@/services/productService';
import { useModel } from 'umi';
const { Meta } = Card;

export default () => {
      const [showLoading, setShowLoading] = useState<any>(true);
      const [products, setProducts] = useState<Types.Product[]>([]);
      useEffect(() => {
            const loadData = async () => {
                  try {
                        const { data } = await getProductList()
                        setProducts(data)
                        setShowLoading(false)
                  } catch (error) {
                        console.log(error);
                  }
            };
            loadData();
      }, []);


      const { add_to_cart } = useModel('cart', (ret) => ({
            add_to_cart: ret.add_to_cart,
      }));

      return (
            <div>
                  <Spin spinning={showLoading} />
                  <List
                        grid={{ gutter: 16, column: 5 }}
                        dataSource={products}
                        renderItem={item => (
                              <List.Item>
                                    <Card
                                          style={{ width: 300 }}
                                          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                          actions={[<ShoppingCartOutlined onClick={() => {
                                                if (item.quantity && item.quantity <= 0) {
                                                      message.warning(item.pname + 'is out of stock')
                                                } else {
                                                      add_to_cart(item); message.info(item.pname + 'have bee add to cart')
                                                }
                                          }} key="Cart" />,]}>
                                          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <Meta title={item.pname} />
                                                {item.category?.includes('Running') && <Tag color="red">{item.category}</Tag>}
                                                {item.category?.includes('Hiking') && <Tag color="blue">{item.category}</Tag>}
                                                {item.category?.includes('Cycling') && <Tag color="purple">{item.category}</Tag>}
                                          </div>
                                          <Divider orientation='center'>{'Price:  ' + item.price}</Divider>
                                          <div style={{ display: 'flex', justifyContent: 'end' }}>
                                                <Meta description={item.quantity + ' in stock'} />
                                          </div>
                                    </Card>
                              </List.Item>
                        )}
                  />
            </div>

      );
};