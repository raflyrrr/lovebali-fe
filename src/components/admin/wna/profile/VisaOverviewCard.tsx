import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

type VisaInfo = {
  jenisVisa: string;
  tanggalDiterbitkan: string;
  tanggalKadaluwarsa: string;
  durasiIzin: string;
  dikecualikanPWA: boolean;
};

const VisaOverviewCard = ({ visa }: { visa: VisaInfo }) => (
  <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-navy-800">
    <h3 className="text-xl font-bold text-navy-700 dark:text-white">
      Visa Overview
    </h3>
    <p className="text-sm text-gray-500 dark:text-gray-400">Visa's code</p>
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="text-gray-600">Jenis Visa</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {visa.jenisVisa}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600">Tanggal Diterbitkan</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {visa.tanggalDiterbitkan}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600">Tanggal Kadaluwarsa</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {visa.tanggalKadaluwarsa}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600">Durasi Izin Tinggal</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {visa.durasiIzin}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600">Dikecualikan PWA?</p>
        <span className="flex items-center gap-2 font-semibold text-red-500">
          <IoMdCloseCircle /> Tidak
        </span>
      </div>
    </div>
  </div>
);

export default VisaOverviewCard;
