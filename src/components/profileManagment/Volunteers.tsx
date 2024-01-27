import { media } from "../../assets";
import { Table } from "../../widgets/Table";
import randomData from "./../../utils/MOCK_DATA.json";

export const Volunteer = () => {
  const columns = [
    {
      Header: "Name",
      accessor: (row: any) => `${row.fullname} ${row.jobTitle}`,
      id: "fullname",
      Cell: ({ row }: any) => (
        <div
          style={{
            width: "347px",
            height: "48.63px",
            backgroundColor: "#D9D9D9",
            borderRadius: "5px",
            marginBottom: "3px",
            marginRight: "14px",
            padding: "9.4px",
            display: "flex",
            position: "relative",
          }}
        >
          <div>
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              {row.original.fullname}
            </p>
            <p style={{ fontSize: "8px", lineHeight: "9.86px" }}>
              {row.original.jobTitle}
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              right: "3px",
              borderRadius: "50%",
              width: "15px",
              height: "15px",
              padding: "15px",
              backgroundColor: "white",
            }}
          >
            <img
              src={media.chat}
              style={{
                position: "absolute",
                bottom: "6px",
                right: "6px",
                zIndex: "1",
                width: "18px",
                height: "18px",
              }}
            />
          </div>
        </div>
      ),
    },
    {
      Header: "Date of Birth",
      accessor: "date of birth",
      id: "birth",
      Cell: ({ value }: { value: any }) => (
        <div
          style={{
            width: "356.95px",
            height: "48.63px",
            fontWeight: "bold",
            marginRight: "14px",
            backgroundColor: "#D9D9D9",
            borderRadius: "5px",
            marginBottom: "3px",
            fontSize: "10px",
            paddingLeft: "30px",
            paddingTop: "18px",
            position: "relative",
          }}
        >
          {value}
        </div>
      ),
    },
    {
      Header: "Address",
      accessor: "address",
      id: "address",
      Cell: ({ value }: { value: any }) => (
        <div
          style={{
            position: "absolute",
            left: "565px",
            fontSize: "10px",
            marginTop: "-9px",
            lineHeight: "12.1px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {value}
        </div>
      ),
    },
    {
      Header: "Interests",
      accessor: "interests",
      id: "interests",
      Cell: ({ value }: { value: any }) => (
        <div
          style={{
            width: "193px",
            display: "flex",
            height: "48px",
            backgroundColor: "#D9D9D9",
            borderRadius: "5px",
            marginBottom: "3px",
            marginRight: "14px",
            paddingLeft: "21px",
            paddingTop: "11px",
            opacity: "80%",
            fontSize: "12px",
            lineHeight: "13.8px",
          }}
        >
          {value}
        </div>
      ),
    },
    {
      Header: "Days available per week",
      accessor: "days available per week",
      Cell: ({ value }: { value: any }) => (
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "10px",
          }}
        >
          {value} Days
        </div>
      ),
    },
    {
      Header: "Availability",
      accessor: "availability",
      id: 'availability',
      Cell: ({ value }: { value: any }) => (
        <div
          style={{
            background: "",
            ...(value == "online" && {
              color: "#24FF00",
            }),
            ...(value == "offline" && {
              color: "#FF0000",
            }),
            display: "flex",
            alignItems: "center",
            marginLeft: "25px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              ...(value == "online" && {
                background: "#24FF00",
              }),
              ...(value == "offline" && {
                background: "#FF0000",
              }),
              marginRight: "5px",
            }}
          ></div>
          <p style={{
            fontSize: '12px',
            lineHeight: '14.1px'
          }}>{value}</p>
        </div>
      ),
    },
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
