import { media } from "../../assets";
import { Table } from "../../widgets/Table";
import randomData from "./../../utils/MOCK_DATA.json";

export const Volunteer = () => {
  const columns = [
    {
      Header: "Name",
      accessor: "userDetails",
      Cell: ({ row }: any) => (
        <div
          style={{
            width: "247px",
            height: "48px",
            backgroundColor: "#D9D9D9",
            borderRadius: "5px",
            marginBottom: "3px",
            marginRight: "14px",
            padding: "9.4px",
            
          }}
        >
          <p>{row.original.fullname}</p>
          <p style={{fontSize: '8px' }}>{row.original.job_title}</p>
        </div>
      ),
    },
    {
      Header: "Interests",
      accessor: "interests",
      Cell: ({ value }: { value: any }) => (
        <div
          style={{
            width: "247px",
            display: 'flex',
            height: "48px",
            backgroundColor: "#D9D9D9",
            borderRadius: "5px",
            marginBottom: "3px",
            marginRight: "14px",
            padding: "9.4px",
            opacity: '80%'
          }}
        >
          <img src={media.admins} alt="" />
          {value}
        </div>
      ),
    },
    { Header: "Address", accessor: "address" },
    { Header: "Date of Birth", accessor: "date of birth" },
    { Header: "Days Available Per Week", accessor: "days available in a week" },
  ];

  const data = randomData;

  return (
    <div>
      <p className="text-[#D9D9D9] text-[15px] font-extrabold leading-[18.15px]">
        MCSS Volunteers
      </p>
      <h2 className="text-black font-extrabold text-[27px] leading-[32.68px] pb-6">
        Volunteers
      </h2>
      <div className="relative">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};
