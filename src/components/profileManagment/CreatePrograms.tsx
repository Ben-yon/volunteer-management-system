
export const CreatePrograms: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="w-[212px] h-[116px] text-[48.16px] font-[700] leading-[58.29px]">Program Details</h2>
            <form action="">
                <input type="text" placeholder="Name of Program" className="bg-admin-accent w-[921px] h-[68px] rounded-[21.41px]"/>
                <textarea name="ProgramDescription" id="" placeholder="Program Description" className="w-[920px] h-[384px] bg-admin-accent"></textarea>
            </form>
            <button className="bg-admin-secondary text-[30px] leading-[36.31px] font-[700] text-primary w-[181.95px] h-[68.5px] rounded-[21.41px]">
                Next
            </button>
        </div>    
    )
}