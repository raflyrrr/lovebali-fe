import WarningIcon from 'components/icons/WarningIcon';
import React from 'react';

type Props = {};

const WarningBanner = (props: Props) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-solidCreame1 rounded-xl flex items-center border-l-8 border-solidYellow1">
        <WarningIcon />
        <div className="text-solidBrown1 font-bold">
          <span className="text-solidRed2">5.800</span>
          <span className=""> dari </span>
          <span className="">12.300</span>
          <span className=""> wisatawan belum melakukan pembayaran</span>
        </div>
      </div>
    </div>
  );
};

export default WarningBanner;
