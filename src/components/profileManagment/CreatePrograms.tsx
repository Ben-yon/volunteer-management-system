import { useNavigate } from "react-router-dom";
import { ProgramInterface } from "../../interfaces/ProgramsInterface";
import { useFormValidation } from "../../utils/validate";

export const CreatePrograms: React.FC = () => {
  const navigate = useNavigate();

  const ValidationRules = {
    name: { required: true },
    description: { required: true },
  };

  const { values, errors, handleChange, validate } =
    useFormValidation<ProgramInterface>(
      {
        name: "",
        description: "",
        programmeImages: "",
      },
      ValidationRules
    );

  const nextPage = () => {
    if (validate()) {
      navigate("/profile-management/programs/add-images", {
        state: { values: values },
      });
    }
  };

  return (
    <div className="flex flex-col  justify-center">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Programs
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Programs
      </h2>
      <div className="flex flex-col justify-center w-[1244px] h-[840px] border-[0.5px] rounded-[39px] programs-gradient">
        <h2 className="w-[212px] h-[116px] text-[48.16px] font-[700] leading-[58.29px] ml-[180.28px] ">
          Program Details
        </h2>
        <form action="" className="flex flex-col items-center">
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name of Program"
              onChange={handleChange}
              value={values.name}
              className="bg-image-card w-[921px] h-[68px] rounded-[21.41px] focus:outline-none mb-[24px] font-[400] text-[23.45px] leading-[28.5px] pl-[31.11px] mt-[30px]"
            />
            {errors.name && (
              <span className="text-red-500 text-[10px]">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col">
            <textarea
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder="Program Description"
              className="w-[920px] h-[384px] bg-image-card rounded-[21.41px] resize-none focus:outline-none font-[400] text-[23.45px] leading-[28.5px] pl-[31.11px] pt-[18.03px]"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-[10px]">
                {errors.description}
              </span>
            )}
          </div>
        </form>
        <button
          className="bg-admin-secondary text-[30px] leading-[36.31px] font-[700] text-primary w-[181.95px] h-[68.5px] rounded-[21.41px] mt-[28px] ml-[180.28px]"
          onClick={() => nextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};
