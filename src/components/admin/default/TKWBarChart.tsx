import Card from 'components/card';
import BarChart from 'components/charts/BarChart';
import { barChartDataTKW, barChartOptionsTKW } from 'variables/charts';
import { MdBarChart } from 'react-icons/md';
import ArrowUp from 'components/icons/ArrowUp';

const TKWBarChart = () => {
  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center h-full">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-base font-medium text-lightBlue1 dark:text-white">
          Tren Kunjungan Wisatawan
        </h2>
        <div className="flex items-center">
          <ArrowUp />
          <span className="text-lightGreen1 text-xs font-bold">+2.45%</span>
        </div>
      </div>
      <div className="flex px-6 items-end space-x-3">
        <h2 className="text-solidBlue1 text-4xl font-extrabold">12.580.000</h2>
        <span className="text-lightBlue1 text-[14px]">per hari ini</span>
      </div>

      <div className="md:mt-16 lg:mt-0">
        <div className="h-[150px] w-full xl:h-[200px]">
          <BarChart
            chartData={barChartDataTKW}
            chartOptions={barChartOptionsTKW}
          />
        </div>
      </div>
    </Card>
  );
};

export default TKWBarChart;
