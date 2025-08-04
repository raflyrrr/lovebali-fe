import React from 'react';
import { FiMoreHorizontal, FiSearch } from 'react-icons/fi';

type PersonalInfo = {
  name: string;
  nationality: string;
  avatar: string;
  passport: string;
  tanggalLahir: string;
  jenisKelamin: string;
  email: string;
  nomorTelepon: string;
  alamat: string;
  kodePos: string;
  tipeTempatTinggal: string;
  tanggalMasuk: string;
  titikMasuk: string;
  jenisVisa: string;
};

const PersonalInfoCard = ({ info }: { info: PersonalInfo }) => (
  <div className="relative rounded-xl bg-white p-6 shadow-lg dark:bg-navy-800">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <img
          src={info.avatar}
          className="h-16 w-16 rounded-full"
          alt="avatar"
        />
        <div>
          <h2 className="text-2xl font-bold text-navy-700 dark:text-white">
            {info.name}
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-300">
            🇦🇺 {info.nationality}
          </p>
        </div>
      </div>
      <button className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
        <FiMoreHorizontal size={24} />
      </button>
    </div>
    <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
      {/* Key-value pairs here */}
      <div>
        <p className="text-sm text-gray-500">Passport</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {info.passport}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Tipe tempat tinggal</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {info.tipeTempatTinggal}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Tanggal Lahir</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {info.tanggalLahir}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Tanggal Masuk</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {info.tanggalMasuk}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Jenis Kelamin</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {info.jenisKelamin}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Titik Masuk</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {info.titikMasuk}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Email</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {info.email}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Jenis Visa</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {info.jenisVisa}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Nomor Telepon</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {info.nomorTelepon}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">***</p>
        <p className="font-semibold text-navy-700 dark:text-white">***</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Alamat</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {info.alamat}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">***</p>
        <p className="font-semibold text-navy-700 dark:text-white">***</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Kode Pos</p>
        <p className="font-semibold text-navy-700 dark:text-white">
          {info.kodePos}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">***</p>
        <p className="font-semibold text-navy-700 dark:text-white">***</p>
      </div>
    </div>
    {/* <button className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500 text-white shadow-lg transition-transform hover:scale-110">
      <FiSearch size={24} />
    </button> */}
  </div>
);

export default PersonalInfoCard;
