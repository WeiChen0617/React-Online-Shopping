import { useRef, useState } from 'react';
import { message } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import CreateModel from './components/CreateModel'
import UpdateModel from './components/UpdateModel'
import { Types } from '@/services/models';
import { deleteVoucher, getVoucherList } from '@/services/voucherService';
import moment from 'moment';

const columns: ProColumns<Types.Voucher>[] = [

  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'Name',
    dataIndex: 'vname',
    copyable: true,
    ellipsis: true,
    // tip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'Required',
        },
      ],
    },
  },
  {
    title: 'Description',
    dataIndex: 'description',
  }, {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Expiration',
    dataIndex: 'expiration',
  },
  {
    title: 'Actions',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <UpdateModel {...record} />,
      <TableDropdown
        key="actionGroup"
        onSelect={(key) => {
          if (key === 'delete' && record?.id) {
            deleteVoucher(record?.id)
            action?.reload()
            message.info('Delete successfully.');
          }
        }}
        menus={[
          { key: 'delete', name: 'Delete' },
        ]}
      />,
    ],
  },

];


export default () => {
  const actionRef = useRef<ActionType>();
  const [currentPage, setCurrentPage] = useState<any>({});
  const [pageNumber, setPageNumber] = useState<any>({});
  return (
    <ProTable<Types.Voucher>
      columns={columns}
      actionRef={actionRef}
      request={async (params, sort, filter) => {
        return getVoucherList()
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('111: ', value);
        },
      }}
      rowKey="id"
      search={false}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 20,
      }}
      dateFormatter="string"
      headerTitle="Vouchers List"
      toolBarRender={() => [
        <CreateModel />
      ]}
    />
  );
};