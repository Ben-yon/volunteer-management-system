// //@ts-ignore
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


// //@ts-ignore
// export const CustomPieChart = ({ data: Array<any[]>, colors: Array<any[]>}) => {
//     return (
//         <ResponsiveContainer>
//             <PieChart width={400} height={400}>
//                 <Pie
//                     data={data}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     label={renderCustomizedlabel}
//                     outerRadius={80}
//                     fill='#8884d8'
//                     dataKey="value"
//                 >
//                 {data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//                 ))}
//                 </Pie>
//             </PieChart>
//         </ResponsiveContainer>
//     );
// };