import React from 'react';
import PersonalInfoCard from 'components/admin/wna/profile/PersonalInfoCard';
import VisaOverviewCard from 'components/admin/wna/profile/VisaOverviewCard';
import PaymentInfoCard from 'components/admin/wna/profile/PaymentInfoCard';
import MovementHistoryCard from 'components/admin/wna/profile/MovementHistoryCard';

// DATA DUMMY BERDASARKAN GAMBAR
const touristData = {
  personalInfo: {
    name: 'Lucas Graham Ginger',
    nationality: 'Australia',
    avatar: 'https://i.ibb.co/6n0hLjr/avatar-simmmple-2.png',
    passport: 'A12345678',
    tanggalLahir: '12 July 1983',
    jenisKelamin: 'Laki-Laki',
    email: 'lucas.graham@email.com',
    nomorTelepon: '+61 123456789',
    alamat: '123 Example Street, England',
    kodePos: '11102',
    tipeTempatTinggal: 'Residence',
    tanggalMasuk: '30 Juli 2025',
    titikMasuk: 'DPS (Ngurah Rai Airport)',
    jenisVisa: 'Visa Tinggal Terbatas',
  },
  visaOverview: {
    jenisVisa: 'Visa On Arrival',
    tanggalDiterbitkan: '28 Juli 2025',
    tanggalKadaluwarsa: '27 Agustus 2025',
    durasiIzin: '30 hari',
    dikecualikanPWA: false,
  },
  paymentInfo: {
    status: 'Sudah Bayar',
    metode: 'QRIS Payment',
    kanal: "Aplikasi 'I Love Bali'",
    nomorReferensi: 'QR-125698',
    nominal: 150000,
    qrCodeUrl:
      'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example',
  },
  movementHistory: [
    {
      date: '15/07/2025',
      place: 'Jakarta',
      attractions: [],
      timeStart: '',
      timeEnd: '',
    },
    {
      date: '31/07/2025',
      place: 'Bali',
      attractions: [],
      timeStart: '12.56',
      timeEnd: '',
    },
    {
      date: '01/08/2025',
      place: 'Ayana Resort & Spa, Jimbaran',
      attractions: ['Tegalalang Rice Terrace'],
      timeStart: '13.00',
      timeEnd: '18.00',
    },
    {
      date: '02/08/2025',
      place: 'Ayana Resort & Spa, Jimbaran',
      attractions: ['Monkey Forest Ubud', 'Tanah Lot'],
      timeStart: '13.00',
      timeEnd: '20.00',
    },
    {
      date: '03/08/2025',
      place: 'Ayana resort & Spa, Jimbaran',
      attractions: [],
      timeStart: '-',
      timeEnd: '',
    },
    {
      date: '04/08/2025',
      place: '-',
      attractions: ['Uluwatu Temple', 'Goa Gajah', 'Pura Taman Ayun'],
      timeStart: '07.20',
      timeEnd: '21.00',
    },
  ],
};

// Komponen Utama Halaman
export default function ProfilePage(props: {
  params: Promise<{ id: string }>;
}) {
  const data = touristData;

  return (
    <div className="mt-5 flex flex-col gap-5">
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="flex flex-col col-span-2">
          <PersonalInfoCard info={data.personalInfo} />
        </div>
        <div className="flex flex-col">
          <VisaOverviewCard visa={data.visaOverview} />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="flex flex-col">
          <PaymentInfoCard payment={data.paymentInfo} />
        </div>
        <div className="flex flex-col col-span-2">
          <MovementHistoryCard history={data.movementHistory} />
        </div>
      </div>
      {/* <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        <div className="flex flex-col gap-5 lg:col-span-3">
          <PersonalInfoCard info={data.personalInfo} />
          <PaymentInfoCard payment={data.paymentInfo} />
        </div>
        <div className="flex flex-col gap-5 lg:col-span-2">
          <VisaOverviewCard visa={data.visaOverview} />
          <MovementHistoryCard history={data.movementHistory} />
        </div>
      </div> */}
    </div>
  );
}
