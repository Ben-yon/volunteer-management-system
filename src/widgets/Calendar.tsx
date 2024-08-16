import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarPropsInterface } from '../interfaces/CalendarPropsInterface';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const AdminCalendar: React.FC<CalendarPropsInterface> = ({ width, height}) => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='rounded-[20px]'>
      <Calendar onChange={onChange} value={value} className={`w-[${width}px] h-[${height}px]`}/>
      <button className='w-[311px] h-[45px] bg-[#C8A379] rounded-[12px] relative -top-[72px] left-[55px]'>
      </button>
    </div>
  );
}