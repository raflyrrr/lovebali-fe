import Card from 'components/card';

const Widget = (props: {
  icon?: JSX.Element;
  title: string;
  subtitle: string;
  percentage?: string;
  extra?: string;
  isLive?: boolean;
  subtitleColor?: string;
  isBordered?: boolean;
}) => {
  const {
    icon,
    title,
    subtitle,
    percentage,
    extra,
    isLive,
    subtitleColor,
    isBordered,
  } = props;
  return (
    <Card
      extra={`relative !flex-row flex-grow items-center rounded-[20px] ${
        isBordered && 'border'
      }`}
    >
      {/* LIVE badge */}
      {isLive && (
        <div className="absolute top-2 right-2 bg-solidRed2 rounded-[20px] text-center text-white w-[58px] text-sm">
          LIVE
        </div>
      )}

      <div className="ml-[8px] flex h-[90px] w-auto flex-row items-center">
        {/* Icon placeholder */}
        {/* <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
      <span className="flex items-center text-brand-500 dark:text-white">
        {icon}
      </span>
    </div> */}
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-lightBlue1">{title}</p>
        <h4
          className={`text-2xl font-bold ${
            subtitleColor ?? 'text-solidBlue1'
          } dark:text-white`}
        >
          {subtitle}
        </h4>
        <div className="flex items-center space-x-5">
          <p className="text-lightGreen1 text-sm font-bold">{percentage}</p>
          <p className="text-lightBlue1 text-xs">{extra}</p>
        </div>
      </div>
    </Card>
  );
};

export default Widget;
