'use client';
import DKPBarChart from 'components/admin/default/DKPBarChart';
import { WarningBannerVA } from 'components/widget/WarningBanner';
import Widget from 'components/widget/Widget';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className="mt-5">
        <WarningBannerVA />
      </div>
      <div className="p-6 rounded-[20px] bg-white mt-5">
        <h2 className="text-solidBlue1 font-bold text-2xl">
          Rekonsiliasi Multi-Kanal
        </h2>
        <div className="grid grid-cols-4 gap-5 mt-4">
          {' '}
          <Widget
            isBordered
            // icon={<IoDocuments className="h-6 w-6" />}
            title={'Total Transaksi QRIS'}
            subtitle={'Rp 6,428 JT'}
            percentage={'+23%'}
            extra={'since last month'}
          />
          <Widget
            isBordered
            // icon={<IoDocuments className="h-6 w-6" />}
            title={'Total Transaksi VA'}
            subtitle={'Rp 6,428 JT'}
            percentage={'+23%'}
            extra={'since last month'}
          />
          <Widget
            isBordered
            // icon={<IoDocuments className="h-6 w-6" />}
            title={'Total Transaksi eVISA'}
            subtitle={'Rp 6,428 JT'}
            percentage={'+23%'}
            extra={'since last month'}
          />
          <Widget
            isBordered
            // icon={<IoDocuments className="h-6 w-6" />}
            title={'Total Transaksi Tunai'}
            subtitle={'Rp 6,428 JT'}
            percentage={'+23%'}
            extra={'since last month'}
          />
        </div>
      </div>
      <div className="mt-5">
        <DKPBarChart />
      </div>
    </div>
  );
};

export default page;
