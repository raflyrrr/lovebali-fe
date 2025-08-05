import Card from 'components/card';
import BarChart from 'components/charts/BarChart';
import {
  barChartDataDKP,
  barChartDataTKW,
  barChartOptionsDKP,
  barChartOptionsTKW,
} from 'variables/charts';
import { MdOutlineCalendarToday } from 'react-icons/md';

const DKPBarChart = () => {
  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center h-full">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-base font-medium text-lightBlue1 dark:text-white">
          Distribusi kanal pembayaran{' '}
        </h2>
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">This month</span>
        </button>
      </div>
      <div className="flex px-6 items-end space-x-3 mt-2">
        <h2 className="text-solidBlue1 text-4xl font-extrabold">5JT</h2>
        <span className="text-lightBlue1 text-[14px]">
          orang membayar pada bulan ini
        </span>
      </div>

      <div className="md:mt-16 lg:mt-0">
        <div className="h-[150px] w-full xl:h-[320px]">
          <BarChart
            chartData={barChartDataDKP}
            chartOptions={barChartOptionsDKP}
          />
        </div>
      </div>
    </Card>
  );
};

export default DKPBarChart;
