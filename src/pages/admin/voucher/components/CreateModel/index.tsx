import React, { useEffect, useState } from 'react'
import { Button, message } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormUploadButton,
  ProFormDateTimePicker,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { Types } from '@/services/models';
import { createVoucher } from '@/services/voucherService';

export default (props: Types.Voucher) => {
  return (
    <ModalForm<Types.Voucher>
      initialValues={{
        date: Date.now(),
        dateWeek: Date.now(),
        dateMonth: Date.now(),
        dateQuarter: Date.now(),
        dateYear: Date.now(),
        dateTime: Date.now(),
        dateTimeRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
        dateRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
      }}
      title="Voucher Info"
      width={400}
      trigger={
        <Button type="primary" >
          Edit
        </Button >
      }
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      onFinish={async (values) => {
        createVoucher(values);
        message.success('Submit successfully.');
        return true;
      }}
    >
      <ProForm.Group direction="horizontal">
        <ProForm.Group direction="vertical">
          <ProFormText
            fieldProps={{
              defaultValue: props.vname
            }}
            width="md"
            name="vname"
            label="Name"
            placeholder="Please input voucher name"
          />

          <ProFormTextArea
            width="md"
            fieldProps={{
              defaultValue: props.description
            }}
            name="description"
            label="description"
            placeholder="Please input voucher description" />
          <ProFormText
            width="md"
            fieldProps={{
              defaultValue: props.price
            }}
            name="price"
            label="Price"
            placeholder="Please input voucher price" />

          <ProFormDateTimePicker
            name="expiration"
            label="Expiration"
          />
        </ProForm.Group>
        {/* <ProForm.Group direction="vertical">
          <ProFormUploadButton
            name="product-image"
            label="Voucher Image"
            max={1}
            fieldProps={{
              name: 'product',
              listType: 'picture-card',
            }}
          />
        </ProForm.Group> */}
      </ProForm.Group>
    </ModalForm >
  );
};