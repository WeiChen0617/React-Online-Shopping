import { Types } from '@/services/models'
import { getVoucherList } from '@/services/voucherService';
import { Select, Space, Table, Button, Modal } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import moment from 'moment';
import { memo, useState, useEffect } from 'react';
const { Option } = Select;


function UserCardBlock(props: any) {
      const columns: ColumnsType<Types.Product> = [
            {
                  title: 'Name',
                  dataIndex: 'pname',
                  key: 'pname',
            },
            {
                  title: 'Category',
                  dataIndex: 'category',
                  key: 'category',
            },
            {
                  title: 'Price',
                  dataIndex: 'price',
                  key: 'price',
            },
            {
                  title: 'Quantity',
                  dataIndex: 'quantity',
                  key: 'quantity',
                  render: (_, record) => (
                        <Space size="middle">
                              <a onClick={() => props.addItem(record)}>+</a>
                              {record.quantity}
                              <a onClick={() => props.removeItem(record)}>-</a>
                        </Space >
                  ),
            },
      ];
      const [visible, setVisible] = useState(false);

      const showModal = () => {
            setVisible(true);
      };

      const hideModal = () => {
            setVisible(false);
      };

      const [vouchers, setVouchers] = useState<Types.Voucher[]>([]);
      useEffect(() => {
            const loadData = async () => {
                  try {
                        const { data } = await getVoucherList()
                        setVouchers(data)
                  } catch (error) {
                        console.log(error);
                  }
            };
            loadData();
      }, []);
      const onChange = (event: any) => {
            const voucher: Types.Voucher = {
                  price: event.value
            }
            props.setVoucher(voucher)
      }

      return (
            <div>
                  <Table columns={columns} pagination={false} dataSource={props.products} />

                  <div style={{ margin: '3rem', display: 'flex', alignContent: 'center', justifyContent: 'flex-end' }}>
                        <Select
                              style={{ width: '20rem' }}
                              showSearch
                              labelInValue
                              placeholder="Select a voucher"
                              optionFilterProp="children"
                              onChange={onChange}
                              filterOption={(input, option) =>
                                    (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
                              }
                        >
                              {vouchers.map((i: Types.Voucher) =>
                                    <Option size='600' disabled={moment(i.expiration).isBefore(moment())} value={i.price}>{i.price} until {moment(i.expiration, 'YYYYMMDD').calendar()}</Option>)}
                        </Select>
                  </div>
                  <div style={{ margin: '3rem', display: 'flex', justifyContent: 'flex-end' }}>
                        <h2>Total amount: {props.totalPrice} </h2>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button size="large" shape="round" onClick={showModal}>
                              Purchase
                        </Button>
                        <Modal
                              title="Tips"
                              visible={visible}
                              onOk={hideModal}
                              onCancel={hideModal}
                              okText="Confirm"
                              cancelText="Cancel"
                        >
                              <p>Are you ready to pay.</p>
                        </Modal>

                  </div>
            </div>)
}

export default memo(UserCardBlock)