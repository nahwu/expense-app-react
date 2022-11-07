import { PieChart, Pie, Cell } from "recharts";
import "./CategoryPieChart.css";

// TODO - Use custom labels
// Link: https://recharts.org/en-US/examples/CustomActiveShapePieChart

const data = [
  { name: "Food", value: 323 },
  { name: "Transport", value: 86 },
  { name: "Leisure", value: 213 },
  { name: "Misc", value: 74 },
  { name: "Allowance", value: 1000 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8D3ABD"];

export default function CategoryPieChart() {
  return (
    <PieChart width={250} height={225} className="my-pie-chart-style">
      <Pie
        data={data}
        cx={125}
        cy={110}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
