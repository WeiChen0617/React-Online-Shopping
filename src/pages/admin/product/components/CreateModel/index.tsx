import { useState } from 'react'
import { Button, message } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormUploadButton,
  ProFormSelect,
} from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';
import { createProduct } from '@/services/productService';
import { Types } from '@/services/models';

export default () => {
  const [category, setCategory] = useState('All')
  const [product, setProduct] = useState({})

  return (
    <ModalForm<Types.Product>
      title="New Product"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          New
        </Button>
      }
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      onFinish={async (values) => {
        createProduct(values)
        setProduct(values)
        message.success('Submit successfully.');
        return true;
      }}
    >
      <ProForm.Group direction="horizontal">
        <ProForm.Group direction="vertical">
          <ProFormText
            width="md"
            name="pname"
            label="Name"
            placeholder="Please input product name"
          />
          <ProFormSelect
            fieldProps={{
              onChange: (e) => {
                setCategory(e);
              }
            }}
            request={async () => [
              {
                value: 'Mens Cycling',
                label: 'Mens Cycling',
              }, {
                value: 'Womens Cycling',
                label: 'Womens Cycling',
              }, {
                value: 'Mens Hiking',
                label: 'Mens Hiking',
              }, {
                value: 'Womens Hiking',
                label: 'Womens Hiking',
              }, {
                value: 'Mens Running',
                label: 'Mens Running',
              }, {
                value: 'Womens Running',
                label: 'Womens Running',
              },
            ]}
            width="md"
            name="category"
            label="Category"
          />
          <ProFormText width="md" name="price" label="Price" placeholder="Please input product price" />
          <ProFormText width="md" name="quantity" label="Quantity" placeholder="Please input product quantity" />
        </ProForm.Group>
        <ProForm.Group direction="vertical">
          <ProFormUploadButton
            name="product-image"
            label="Product Image"
            max={1}
            fieldProps={{
              name: 'product',
              listType: 'picture-card',
            }}
          // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          // extra="文件名称"
          />
        </ProForm.Group>
      </ProForm.Group>
    </ModalForm>
  );
};