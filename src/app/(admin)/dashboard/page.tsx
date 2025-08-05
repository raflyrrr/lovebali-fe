'use client';
import MiniCalendar from 'components/calendar/MiniCalendar';
import WeeklyRevenue from 'components/admin/default/TKWBarChart';
import TotalSpent from 'components/admin/default/TotalKontribusiLineChart';
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart, MdDashboard } from 'react-icons/md';

import Widget from 'components/widget/Widget';
import CheckTable from 'components/admin/default/CheckTable';
import ComplexTable from 'components/admin/default/ComplexTable';
import DailyTraffic from 'components/admin/default/DailyTraffic';
import TaskCard from 'components/admin/default/TaskCard';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import tableDataComplex from 'variables/data-tables/tableDataComplex';
import { WarningBanner } from 'components/widget/WarningBanner';
import TKWBarChart from 'components/admin/default/TKWBarChart';
import TotalKontribusiLineChart from 'components/admin/default/TotalKontribusiLineChart';
import TotalIncomeLineChart from 'components/admin/default/TotalIncomeLineChart';
import KanalPembayaranPieChartCard from 'components/admin/default/KanalPembayaranPieChartCard';
import ColumnsTable from 'components/admin/data-tables/ColumnsTable';
import tableDataColumns from 'variables/data-tables/tableDataColumns';

const Dashboard = () => {
  return (
    <div>
      <div className="mt-6">
        <WarningBanner />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          // icon={<MdBarChart className="h-7 w-7" />}
          title={'Total Wisatawan'}
          subtitle={'128.000'}
          percentage={'+23%'}
          extra={'since last month'}
          isLive
        />
        <Widget
          // icon={<IoDocuments className="h-6 w-6" />}
          title={'Total Kontribusi Hari Ini'}
          subtitle={'Rp 6,428 JT'}
          percentage={'+23%'}
          extra={'since last month'}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'Presentase yang sudah bayar'}
          subtitle={'35%'}
          percentage={'+23%'}
          extra={'since yesterday'}
          subtitleColor="text-solidRed2"
        />
        {/* <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={'Your Balance'}
          subtitle={'$1,000'}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'New Tasks'}
          subtitle={'145'}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={'Total Projects'}
          subtitle={'$2433'}
        /> */}
      </div>

      {/* Charts */}

      <div className="mt-5 flex flex-col gap-5 md:flex-row">
        <div className="w-full md:w-2/5">
          <TKWBarChart />
        </div>
        <div className="w-full md:w-3/5">
          <TotalKontribusiLineChart />
        </div>
      </div>

      <div className="mt-5 grid gap-5">
        {' '}
        <TotalIncomeLineChart />
      </div>

      {/* Tables & Charts */}

      {/* <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2"> */}
      {/* Check Table */}
      {/* <div>
          <CheckTable tableData={tableDataCheck} />
        </div> */}

      {/* Traffic chart & Pie Chart */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-[20px] mt-5">
        {/* <DailyTraffic /> */}
        <KanalPembayaranPieChartCard />
        <ColumnsTable tableData={tableDataColumns} />
      </div>

      {/* Complex Table , Task & Calendar */}

      {/* <ComplexTable tableData={tableDataComplex} /> */}

      {/* Task chart & Calendar */}

      {/* <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Dashboard;
