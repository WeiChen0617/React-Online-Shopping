import { useState } from 'react'
import { Button, message } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormUploadButton,
  ProFormSelect,
} from '@ant-design/pro-form';
import { Types } from '@/services/models';
import { updateProduct } from '@/services/productService';

export default (props: Types.Product) => {
  const [category, setCategory] = useState(props.category)
  const [product, setProduct] = useState(props)
  return (
    <ModalForm<Types.Product>
      title="Product Info"
      trigger={
        <Button type="primary">
          Edit
        </Button>
      }
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      onFinish={async (values) => {
        setProduct(values)
        if (product.id) {
          updateProduct(product?.id, values);
          message.success('Submit successfully');
        }
        return true;
      }}
    >
      <ProForm.Group direction="horizontal">
        <ProForm.Group direction="vertical">
          <ProFormText
            fieldProps={{
              defaultValue: product.pname
            }}
            width="md"
            name="pname"
            label="Name"
            placeholder="Please input product name"
          />
          <ProFormSelect
            initialValue={product.category}
            fieldProps={{
              onChange: (e: any) => {
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
          <ProFormText
            width="md"
            fieldProps={{
              defaultValue: product.price
            }}
            name="price"
            label="price"
            placeholder="Please input product price" />
          <ProFormText
            width="md"
            fieldProps={{
              defaultValue: product.quantity
            }}
            name="quantity"
            label="Quantity"
            placeholder="Please input product quantity" />
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
          />
        </ProForm.Group>
      </ProForm.Group>
    </ModalForm>
  );
};