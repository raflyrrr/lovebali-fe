import {
  MdArrowDropUp,
  MdOutlineCalendarToday,
  MdBarChart,
} from 'react-icons/md';
import Card from 'components/card';
import {
  lineChartDataTotalIncome,
  lineChartOptionsTotalIncome,
} from 'variables/charts';
import LineChart from 'components/charts/LineChart';
import ChecklistGreenIcon from 'components/icons/ChecklistGreenIcon';

const TotalIncomeLineChart = () => {
  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">This year</span>
        </button>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-solidRed1 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col w-1/4 text-left">
          <p className="font-bold text-lightBlue1 mt-8">Total Income</p>
          <p className="text-3xl font-bold text-solidBlue1 dark:text-white">
            Rp 35 JT{' '}
          </p>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-sm text-lightBlue1">Hari Ini</p>
            <div className="flex flex-row items-center justify-center">
              <MdArrowDropUp className="font-medium text-lightGreen1" />
              <p className="text-sm font-bold text-lightGreen1"> +2.45% </p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 mt-4">
            <ChecklistGreenIcon />
            <span className="text-base font-bold text-lightGreen1">
              On Track
            </span>
          </div>
        </div>
        <div className="w-full h-[471px]">
          <LineChart
            chartOptions={lineChartOptionsTotalIncome}
            chartData={lineChartDataTotalIncome}
          />
        </div>
      </div>
    </Card>
  );
};

export default TotalIncomeLineChart;
