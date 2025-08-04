import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';

type PaymentInfo = {
  status: string;
  metode: string;
  kanal: string;
  nomorReferensi: string;
  nominal: number;
  qrCodeUrl: string;
};

const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

const PaymentInfoCard = ({ payment }: { payment: PaymentInfo }) => (
  <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-navy-800">
    <h3 className="text-xl font-bold text-navy-700 dark:text-white">
      Informasi Pembayaran
    </h3>
    <div className="mt-4 flex flex-col items-center gap-4">
      <img
        src={payment.qrCodeUrl}
        alt="QR Code"
        className="h-36 w-36 rounded-lg"
      />
      <div className="w-full">
        <div className="flex justify-between">
          <p className="text-gray-600">Status</p>
          <span className="flex items-center gap-2 font-semibold text-green-500">
            <IoMdCheckmarkCircle />
            {payment.status}
          </span>
        </div>
        <hr className="my-2 border-gray-200 dark:border-gray-600" />
        <div className="flex justify-between">
          <p className="text-gray-600">Metode</p>
          <p className="font-semibold text-navy-700 dark:text-white">
            {payment.metode}
          </p>
        </div>
        <hr className="my-2 border-gray-200 dark:border-gray-600" />
        <div className="flex justify-between">
          <p className="text-gray-600">Kanal Pembayaran</p>
          <p className="font-semibold text-navy-700 dark:text-white">
            {payment.kanal}
          </p>
        </div>
        <hr className="my-2 border-gray-200 dark:border-gray-600" />
        <div className="flex justify-between">
          <p className="text-gray-600">Nomor Referensi</p>
          <p className="font-semibold text-navy-700 dark:text-white">
            {payment.nomorReferensi}
          </p>
        </div>
        <hr className="my-2 border-gray-200 dark:border-gray-600" />
        <div className="flex justify-between">
          <p className="text-gray-600">Nominal</p>
          <p className="font-semibold text-navy-700 dark:text-white">
            {formatRupiah(payment.nominal)}
          </p>
        </div>
        <hr className="my-2 border-gray-200 dark:border-gray-600" />
        <div className="flex justify-between">
          <p className="text-gray-600">Cek Riwayat</p>
          <button className="font-bold text-red-500 hover:text-red-600">
            Lihat →
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default PaymentInfoCard;
