import { useNavigate } from "react-router-dom";

export const CreatePrograms: React.FC = () => {
    const navigate = useNavigate()

    const nextPage = () =>{
        navigate("/profile-management/programs/add-images");
    }


  return (
    <div className="flex flex-col  justify-center">
      <h2 className="w-[212px] h-[116px] text-[48.16px] font-[700] leading-[58.29px] ">
        Program Details
      </h2>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Name of Program"
          className="bg-admin-accent w-[921px] h-[68px] rounded-[21.41px] focus:outline-none mb-[24px] font-[400] text-[23.45px] leading-[28.5px] pl-[31.11px] mt-[30px]"
        />
        <textarea
          name="programDescription"
          id=""
          placeholder="Program Description"
          className="w-[920px] h-[384px] bg-admin-accent rounded-[21.41px] resize-none focus:outline-none font-[400] text-[23.45px] leading-[28.5px] pl-[31.11px] pt-[18.03px]"
        ></textarea>
      </form>
      <button className="bg-admin-secondary text-[30px] leading-[36.31px] font-[700] text-primary w-[181.95px] h-[68.5px] rounded-[21.41px] mt-[28px]" onClick={() => nextPage()}>
        Next
      </button>
    </div>
  );
};
