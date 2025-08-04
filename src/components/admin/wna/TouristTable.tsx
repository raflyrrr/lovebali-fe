import React from 'react';
import CardMenu from 'components/card/CardMenu';
import Checkbox from 'components/checkbox';
import Card from 'components/card';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  Row,
} from '@tanstack/react-table';
import Link from 'next/link';

// Define the data structure for a tourist row
type RowObj = {
  name: string;
  idNumber: string;
  nationality: string;
  entryDate: string;
  visaType: string;
  avatar: string;
  nomorPaspor: string;
  gender: string;
  originCountry: string;
  email: string;
  postalCode: string;
  residenceType: string;
  address: string;
  entryDateDetail: string;
  assistance: boolean;
  visaStatus: string;
  visaTypeDetail: string;
  visaExpiryDate: string;
  hotelName: string;
  lengthOfStay: string;
  paymentStatus: string;
  paymentChannel: string;
  paymentDate: string;
};

const columnHelper = createColumnHelper<RowObj>();

// Helper component for displaying a detail item in the side panel
const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between">
    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    <p className="text-right text-sm font-semibold text-navy-700 dark:text-white">
      {value}
    </p>
  </div>
);

// The Side Panel component for displaying tourist details
const TouristDetailsCard = ({
  data,
  onClose,
}: {
  data: RowObj;
  onClose: () => void;
}) => {
  return (
    <Card extra={'w-full max-w-[420px] h-fit p-6'}>
      {/* Header */}
      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img
            src={data.avatar}
            className="h-14 w-14 rounded-full"
            alt="avatar"
          />
          <div>
            <h4 className="text-lg font-bold text-navy-700 dark:text-white">
              {data.name}
            </h4>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 p-2 text-xl text-gray-700 hover:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-navy-600"
        >
          &times;
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        {/* Personal Information */}
        <div className="flex flex-col gap-3">
          <h5 className="font-bold text-navy-700 dark:text-white">
            Personal Information
          </h5>
          <DetailItem label="Nomor Paspor" value={data.nomorPaspor} />
          <DetailItem label="Gender" value={data.gender} />
          <DetailItem label="Negara Asal" value={data.originCountry} />
          <DetailItem label="Email" value={data.email} />
          <DetailItem label="Kode Pos" value={data.postalCode} />
          <DetailItem label="Residence Type" value={data.residenceType} />
          <DetailItem label="Alamat" value={data.address} />
          <DetailItem label="Tanggal Masuk" value={data.entryDateDetail} />
          <DetailItem
            label="Person with Assistance"
            value={data.assistance ? 'Yes' : 'No'}
          />
        </div>
        <div className="h-px w-full bg-gray-200 dark:bg-white/20" />

        {/* Visa Information */}
        <div className="flex flex-col gap-3">
          <h5 className="font-bold text-navy-700 dark:text-white">
            Visa Information
          </h5>
          <DetailItem label="Status" value={data.visaStatus} />
          <DetailItem label="Tipe Visa" value={data.visaTypeDetail} />
          <DetailItem label="Tanggal Kadaluwarsa" value={data.visaExpiryDate} />
        </div>
        <div className="h-px w-full bg-gray-200 dark:bg-white/20" />

        {/* Accommodation Information */}
        <div className="flex flex-col gap-3">
          <h5 className="font-bold text-navy-700 dark:text-white">
            Acomodation Information
          </h5>
          <DetailItem label="Hotel Name" value={data.hotelName} />
          <DetailItem label="Length of stay" value={data.lengthOfStay} />
        </div>
        <div className="h-px w-full bg-gray-200 dark:bg-white/20" />

        {/* Payment Status */}
        <div className="flex flex-col gap-3">
          <h5 className="font-bold text-navy-700 dark:text-white">
            Payment Status
          </h5>
          <DetailItem label="Status" value={data.paymentStatus} />
          <DetailItem label="Channel" value={data.paymentChannel} />
          <DetailItem label="Tanggal pembayaran" value={data.paymentDate} />
        </div>

        <Link href={`/wna/${data.idNumber}/profile`}>
          <button className="linear mt-2 w-full rounded-xl bg-white border border-indigo-600 text-indigo-600 py-3 text-base font-medium hover:text-white transition duration-200 hover:bg-indigo-600 active:bg-indigo-700 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400 dark:active:bg-indigo-300">
            More
          </button>
        </Link>
      </div>
    </Card>
  );
};

function TouristTable(props: { tableData: RowObj[] }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const [selectedRow, setSelectedRow] = React.useState<Row<RowObj> | null>(
    null,
  );

  const handleRowClick = (row: Row<RowObj>) => {
    setSelectedRow((prev) => (prev?.id === row.id ? null : row));
  };

  const defaultData = React.useMemo(() => tableData, [tableData]);

  const columns = [
    // ✨ PERUBAHAN 1: Memberi size kecil pada kolom select
    columnHelper.display({
      id: 'select',
      size: 40, // Atur lebar kolom menjadi kecil
      header: ({ table }) => (
        <div className="flex justify-center px-1">
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
            color="indigo"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex justify-center px-1">
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
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <p className="text-sm font-bold uppercase text-gray-600 dark:text-white">
          Name
        </p>
      ),
      cell: (info) => (
        <p className="min-w-[150px] text-sm font-bold capitalize text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('idNumber', {
      id: 'idNumber',
      header: () => (
        <p className="text-sm font-bold uppercase text-gray-600 dark:text-white">
          ID Number
        </p>
      ),
      cell: (info) => (
        <p className="min-w-[150px] text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('nationality', {
      id: 'nationality',
      header: () => (
        <p className="text-sm font-bold uppercase text-gray-600 dark:text-white">
          Nationality
        </p>
      ),
      cell: (info) => (
        <p className="min-w-[150px] text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('entryDate', {
      id: 'date',
      header: () => (
        <p className="text-sm font-bold uppercase text-gray-600 dark:text-white">
          Entry Date
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('visaType', {
      id: 'visaType',
      header: () => (
        <p className="text-sm font-bold uppercase text-gray-600 dark:text-white">
          Visa Type
        </p>
      ),
      cell: (info) => (
        <p className="min-w-[150px] text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
  ];

  const [data] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
    },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableRowSelection: true,
    debugTable: false,
  });

  return (
    <div className="flex w-full flex-col gap-5 lg:flex-row">
      <Card extra={'w-full h-full sm:overflow-auto px-6 flex-grow'}>
        <header className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Data of Tourist
          </div>
          <CardMenu />
        </header>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="!border-px !border-gray-400"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        onClick={header.column.getToggleSortingHandler()}
                        className="cursor-pointer border-b-[1px] border-gray-200 pb-2 pr-4 pt-4 text-start dark:border-white/30"
                        style={{ width: header.getSize() }} // Menambahkan style untuk lebar kolom
                      >
                        <div className="items-center justify-between text-xs text-gray-200">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => {
                const isSelected = selectedRow?.id === row.id;
                return (
                  <tr
                    key={row.id}
                    onClick={() => handleRowClick(row)}
                    className={`cursor-pointer transition-colors duration-200 ${
                      isSelected
                        ? 'bg-indigo-50 dark:bg-indigo-900/50'
                        : 'hover:bg-gray-50 dark:hover:bg-white/10'
                    }`}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        // ✨ PERUBAHAN 2: Menghapus min-width global dari sini
                        <td
                          key={cell.id}
                          className="border-white/0 py-3 pr-4"
                          style={{ width: cell.column.getSize() }} // Menambahkan style untuk lebar sel
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {selectedRow && (
        <TouristDetailsCard
          data={selectedRow.original}
          onClose={() => setSelectedRow(null)}
        />
      )}
    </div>
  );
}

export default TouristTable;
