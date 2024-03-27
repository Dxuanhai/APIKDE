
interface childTitleProps
{
  icon: React.ReactNode
  title: string 
}

const ChildTitle:React.FC<childTitleProps> = ({icon, title}) => {
  return (
    <div className="flex py-3 text-main border-b-2 border-[#6f42c1] my-[20px]  gap-x-[10px] items-center ">
      {icon}
      <h4 className="text-xl font-bold">
        {title}
      </h4>
    </div>
  );
};

export default ChildTitle;