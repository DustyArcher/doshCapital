// types
interface Types {
  labels: string[];
  datasets: {
    label: string;
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
    data: number[];
  }[];
}

const horizontalBarChartData: Types = {
  labels: ["ETF's", "Cash", "Crypto", "Do$h Capital", "Property", "Others"],
  datasets: [
    {
      label: "Break Down by Growth",
      color: "dark",
      data: [15, 20, 12, 60, 20, 15],
    },
  ],
};

export default horizontalBarChartData;
