import React, { useEffect, useState } from 'react'
import { Button, message } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormUploadButton,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import { Types } from '@/services/models';
import { updateVoucher } from '@/services/voucherService';
import moment from 'moment';

export default (props: Types.Voucher) => {
  const [voucher, setVoucher] = useState(props)
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
        setVoucher(values)
        if (voucher.id) {
          updateVoucher(voucher?.id, values);
          message.success('Submit successfully.');
        }
        return true;
      }}
    >
      <ProForm.Group direction="horizontal">
        <ProForm.Group direction="vertical">
          <ProFormText
            fieldProps={{
              defaultValue: voucher.vname
            }}
            width="md"
            name="vname"
            label="Name"
            placeholder="Please input voucher name"
          />

          <ProFormText
            width="md"
            fieldProps={{
              defaultValue: voucher.description
            }}
            name="description"
            label="Description"
            placeholder="Please input voucher description" />
          <ProFormText
            width="md"
            fieldProps={{
              defaultValue: voucher.price
            }}
            name="price"
            label="Price"
            placeholder="Please input voucher price" />

          <ProFormDateTimePicker
            name="expiration"
            label="Expiration"
            fieldProps={{
              value: moment(voucher?.expiration)
            }}
          />
        </ProForm.Group>
      </ProForm.Group>
    </ModalForm>
  );
};