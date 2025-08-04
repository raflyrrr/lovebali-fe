'use client';

import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Checkbox from 'components/checkbox';

// Tipe Data untuk Riwayat Pergerakan
export type Movement = {
  date: string;
  place: string;
  attractions: string[];
  timeStart: string;
  timeEnd: string;
};

const columnHelper = createColumnHelper<Movement>();

const MovementHistoryCard = ({ history }: { history: Movement[] }) => {
  const [data] = React.useState(history);

  const columns = [
    columnHelper.display({
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
          color="indigo"
        />
      ),
      cell: ({ row }) => (
        <div className="px-1">
          <Checkbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
            color="indigo"
          />
        </div>
      ),
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      cell: (info) => (
        <p className="font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('place', {
      header: 'Tempat Tinggal',
      cell: (info) => (
        <p className="text-navy-700 dark:text-white">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor('attractions', {
      header: 'DTW yang dikunjungi',
      cell: (info) => (
        <div className="flex flex-col">
          {info.getValue().map((attr, index) => (
            <p key={index} className="text-navy-700 dark:text-white">
              {attr}
            </p>
          ))}
        </div>
      ),
    }),
    columnHelper.accessor('timeStart', {
      header: 'Time',
      cell: (info) => (
        <p className="text-navy-700 dark:text-white">
          {info.row.original.timeEnd
            ? `${info.getValue()} - ${info.row.original.timeEnd}`
            : info.getValue()}
        </p>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-navy-800 h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-navy-700 dark:text-white">
          Riwayat Pergerakan
        </h3>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b border-gray-200 dark:border-gray-600"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="pb-2 pr-4 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-3 pr-4 text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovementHistoryCard;
