'use client';

import TouristTable from 'components/admin/wna/TouristTable'; // Renamed WNATable to TouristTable for clarity
import React from 'react';

// Define the detailed data structure for each tourist
type TouristData = {
  name: string;
  idNumber: string;
  nationality: string;
  entryDate: string;
  visaType: string;
  // Detailed information for the side panel
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

// Data based on the provided image
const tableDataTourist: TouristData[] = [
  {
    name: 'thomas alfa adison',
    idNumber: 'UI123456789',
    nationality: 'Saint Lucia',
    entryDate: '03/05/2025',
    visaType: 'Visa Tinggal Terbatas',
    avatar: 'https://i.pravatar.cc/150?u=thomas',
    nomorPaspor: 'UI123456789',
    gender: 'Pria',
    originCountry: 'Saint Lucia',
    email: 'thomas.adison@example.com',
    postalCode: 'LC04 101',
    residenceType: 'Residence',
    address: '456 Castries St, Saint Lucia',
    entryDateDetail: '03 Mei 2025',
    assistance: false,
    visaStatus: 'Aktif',
    visaTypeDetail: 'Visa Tinggal Terbatas',
    visaExpiryDate: '03 Mei 2026',
    hotelName: 'Jade Mountain Resort',
    lengthOfStay: '30 days',
    paymentStatus: 'Paid',
    paymentChannel: 'Credit Card',
    paymentDate: '01 Mei 2025',
  },
  {
    name: 'Hui Murong',
    idNumber: 'UI123456789',
    nationality: 'Republic of China',
    entryDate: '03/05/2025',
    visaType: 'Visa Bisnis',
    avatar: 'https://i.pravatar.cc/150?u=hui',
    nomorPaspor: 'C19876543',
    gender: 'Wanita',
    originCountry: 'Republic of China',
    email: 'hui.murong@example.com',
    postalCode: '100010',
    residenceType: 'Business',
    address: '789 Beijing Ave, China',
    entryDateDetail: '03 Mei 2025',
    assistance: true,
    visaStatus: 'Aktif',
    visaTypeDetail: 'Visa Bisnis',
    visaExpiryDate: '03 Agu 2025',
    hotelName: 'The Peninsula Beijing',
    lengthOfStay: '14 days',
    paymentStatus: 'Paid',
    paymentChannel: 'Alipay',
    paymentDate: '28 Apr 2025',
  },
  {
    name: 'Lucas Graham Ginger',
    idNumber: 'GBR108376537',
    nationality: 'England',
    entryDate: '03/05/2025',
    visaType: 'Visa Diplomatik',
    avatar: 'https://i.ibb.co/6n0hLjr/avatar-simmmple-2.png',
    nomorPaspor: 'GBR108376537',
    gender: 'Pria',
    originCountry: 'UK, England',
    email: 'lucas.graham@email.com',
    postalCode: '11102',
    residenceType: 'Residence',
    address: '123 Example Street, England',
    entryDateDetail: '03 Mei 2025',
    assistance: true,
    visaStatus: 'Aktif',
    visaTypeDetail: 'Visa Tinggal Terbatas',
    visaExpiryDate: '30 Mei 2025',
    hotelName: 'Padma Resort Legian',
    lengthOfStay: '6 days',
    paymentStatus: 'Paid',
    paymentChannel: 'QRIS (AMP)',
    paymentDate: '30 Maret 2025',
  },
  ...Array(12).fill({
    name: 'Horizon UI PRO',
    idNumber: 'UI123456789',
    nationality: 'Sao Tome and Principe',
    entryDate: '03/05/2025',
    visaType: 'Visa Tinggal Terbatas',
    avatar: 'https://i.pravatar.cc/150?u=horizon',
    nomorPaspor: 'UI123456789',
    gender: 'N/A',
    originCountry: 'Sao Tome and Principe',
    email: 'contact@horizon-ui.com',
    postalCode: 'N/A',
    residenceType: 'Residence',
    address: '123 Horizon St, Sao Tome',
    entryDateDetail: '03 Mei 2025',
    assistance: false,
    visaStatus: 'Aktif',
    visaTypeDetail: 'Visa Tinggal Terbatas',
    visaExpiryDate: '03 Mei 2026',
    hotelName: 'Pestana São Tomé',
    lengthOfStay: '10 days',
    paymentStatus: 'Paid',
    paymentChannel: 'Bank Transfer',
    paymentDate: '25 Apr 2025',
  }),
];

const Page = (props: {}) => {
  return (
    <div className="mt-5 w-full">
      <TouristTable tableData={tableDataTourist} />
    </div>
  );
};

export default Page;
