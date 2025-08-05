import { ApexOptions } from 'apexcharts';

type ApexGeneric = ApexOptions & any;

export const barChartDataDailyTraffic = [
  {
    name: 'Daily Traffic',
    data: [20, 30, 40, 20, 45, 50, 30],
  },
];

export const barChartOptionsDailyTraffic: ApexGeneric = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: '12px',
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: '12px',
        fontFamily: undefined,
      },
    },
    theme: 'dark',
  },
  xaxis: {
    categories: ['00', '04', '08', '12', '14', '16', '18'],
    show: false,
    labels: {
      show: true,
      style: {
        colors: '#A3AED0',
        fontSize: '14px',
        fontWeight: '500',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: 'black',
    labels: {
      show: true,
      style: {
        colors: '#CBD5E0',
        fontSize: '14px',
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: '#4318FF',
            opacity: 1,
          },
          {
            offset: 100,
            color: 'rgba(67, 24, 255, 1)',
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: '40px',
    },
  },
};

export const pieChartOptions: ApexGeneric = {
  labels: ['Your files', 'System', 'Empty'],
  colors: ['#D5242C', '#EFBABA', '#FBEFEF'],
  chart: {
    width: '50px',
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ['#D5242C', '#EFBABA', '#FBEFEF'],
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
  },
};

export const pieChartData = [63, 25, 12];

export const barChartDataTKW = [
  {
    name: 'PRODUCT A',
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    // color: '#6AD2Fa',
  },
];

export const barChartDataDKP = [
  {
    name: 'QRIS',
    data: [
      31, 40, 28, 51, 42, 109, 100, 111, 90, 110, 35, 45, 30, 49, 40, 70, 91,
      100, 80, 85,
    ],
  },
  {
    name: 'Virtual Account',
    data: [
      11, 32, 45, 32, 34, 52, 41, 55, 25, 60, 40, 50, 35, 40, 45, 50, 61, 52,
      65, 70,
    ],
  },
  {
    name: 'eVisa',
    data: [
      10, 15, 12, 18, 20, 22, 19, 25, 18, 30, 15, 20, 15, 22, 18, 25, 28, 20,
      30, 35,
    ],
  },
  {
    name: 'Tunai',
    data: [
      12, 17, 11, 9, 15, 21, 20, 22, 15, 25, 18, 22, 17, 20, 22, 28, 30, 25, 28,
      30,
    ],
  },
];

export const barChartOptionsDKP: ApexOptions = {
  chart: {
    type: 'bar',
    stacked: true, // Kunci untuk membuat chart bertumpuk (stacked)
    toolbar: {
      show: false, // Sembunyikan toolbar default
    },
    zoom: {
      enabled: false,
    },
  },
  // Pengaturan tampilan bar
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 12, // Membuat bar memiliki sudut melengkung
      columnWidth: '55%', // Lebar dari setiap bar
      dataLabels: {
        total: {
          enabled: false, // Tidak menampilkan total di atas bar
        },
      },
    },
  },

  // Pengaturan sumbu-X (horizontal)
  xaxis: {
    categories: [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
    ],
    axisBorder: {
      show: false, // Sembunyikan garis sumbu-X
    },
    axisTicks: {
      show: false, // Sembunyikan ticks sumbu-X
    },
    labels: {
      style: {
        colors: '#6B7280', // Warna label sumbu-X
        fontSize: '12px',
      },
    },
  },
  // Pengaturan sumbu-Y (vertikal)
  yaxis: {
    show: false, // Sembunyikan seluruh sumbu-Y
  },
  // Pengaturan legenda
  legend: {
    position: 'bottom', // Posisi legenda di bawah
    horizontalAlign: 'left', // Rata kiri
    offsetY: 10,
    markers: {
      shape: 'circle', // Bentuk marker di legenda
      // height: 12,
      // radius: 12, // Membuat marker menjadi lingkaran
    },
    itemMargin: {
      horizontal: 20,
    },
  },
  // Warna untuk setiap series data
  colors: [
    '#D51F27', // QRIS - warna penuh
    '#D51F27CC', // Virtual Account - 80% opacity
    '#D51F2799', // eVisa - 60% opacity
    '#D51F2766', // Tunai - 40% opacity
  ], // Pengaturan grid
  grid: {
    show: false, // Sembunyikan garis-garis grid
  },
  // Pengaturan data label (angka di dalam bar)
  dataLabels: {
    enabled: false,
  },
  // Pengaturan tooltip saat hover
  tooltip: {
    y: {
      formatter: (val) => `${val} orang`,
    },
  },
};

export const barChartOptionsTKW = {
  chart: {
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: ['#FF1818'], // warna awal
  tooltip: {
    style: {
      fontSize: '12px',
      fontFamily: undefined,
      backgroundColor: '#000000',
    },
    theme: 'dark',
    onDatasetHover: {
      style: {
        fontSize: '12px',
        fontFamily: undefined,
      },
    },
  },
  xaxis: {
    categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    labels: {
      style: {
        show: true,
        colors: '#A0A3BD',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: 'black',
    labels: {
      show: false,
      style: {
        colors: '#A3AED0',
        fontSize: '14px',
        fontWeight: '500',
      },
    },
  },

  grid: {
    borderColor: 'rgba(163, 174, 208, 0.3)',
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0,
      gradientToColors: ['#FF1818'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 0.28,
      stops: [0, 100],
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: '20px',
    },
  },
};

export const lineChartDataTotalKontribusi = [
  {
    name: 'Revenue',
    data: [50, 64, 48, 66, 49, 68],
    color: '#FF1818',
  },
  {
    name: 'Profit',
    data: [30, 40, 24, 46, 20, 46],
    color: '#FF8A8A',
  },
];

export const lineChartOptionsTotalKontribusi = {
  legend: {
    show: false,
  },

  theme: {
    mode: 'light',
  },
  chart: {
    type: 'line',

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },

  tooltip: {
    style: {
      fontSize: '12px',
      fontFamily: undefined,
      backgroundColor: '#000000',
    },
    theme: 'dark',
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: '#A3AED0',
        fontSize: '12px',
        fontWeight: '500',
      },
    },
    type: 'text',
    range: undefined,
    categories: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
  },

  yaxis: {
    show: false,
  },
};

export const lineChartDataTotalIncome = [
  {
    name: 'Series 1',
    data: [
      500, 480, 240, 230, 160, 170, 190, 200, 260, 240, 200, 190, 180, 120, 150,
      170,
    ],
  },
  {
    name: 'Series 2',
    data: [
      200, 220, 240, 280, 350, 380, 360, 320, 480, 460, 420, 380, 360, 240, 280,
      320,
    ],
  },
];

export const lineChartOptionsTotalIncome = {
  legend: {
    show: false,
  },
  theme: {
    mode: 'light',
  },
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0,
      gradientToColors: ['#FF1818'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  grid: {
    show: true,
    borderColor: '#d9d9d9',
    strokeDashArray: 4, // garis putus-putus
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  tooltip: {
    theme: 'dark',
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
    ],
    labels: {
      style: {
        colors: '#A3AED0',
        fontSize: '12px',
        fontWeight: '500',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#A3AED0',
        fontSize: '12px',
      },
    },
  },

  colors: ['#FF1818', '#D9D9D9'], // warna line 1 dan 2
};
