
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white border-2 border-black p-8 flex flex-col items-start transition-transform hover:-translate-y-2",
      className
    )}>
      <div className="text-[#3dace2] mb-4 flex justify-center items-center">
        {icon}
      </div>
      <h3 className="font-bebas text-3xl mb-3 text-black">{title}</h3>
      <p className="font-courier text-black">{description}</p>
    </div>
  );
};

export default ServiceCard;
