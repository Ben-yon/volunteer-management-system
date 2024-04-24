import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const AdminCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='rounded-[20px]'>
      <Calendar onChange={onChange} value={value} />
      {/* <button className='w-[311px] h-[45px] bg-[#C8A379] rounded-[12px] relative -top-[98px] left-[55px]'>
      </button> */}
    </div>
  );
}