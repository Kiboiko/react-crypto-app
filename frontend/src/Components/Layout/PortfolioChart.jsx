import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useCrypto } from "../../Context/crypto-context";
ChartJS.register(ArcElement, Tooltip, Legend);

// export default function PortfolioChart() {
//   const { assets } = useCrypto();

//   const data = {
//     labels: assets.map((a) => a.name),
//     datasets: [
//       {
//         label: "$",
//         data: assets.map((a) => a.totalAmount),
//         backgroundColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//       },
//     ],
//   };
//   const errorData = {
//     labels: "nothing",
//     datasets: [
//       {
//         label: "$",
//         data: 1,
//         backgroundColor: ["grey"],
//       },
//     ],
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         marginBottom: "1rem",
//         justifyContent: "center",
//         height: 400,
//       }}
//     >
//       <Pie data={data.length > 0 ? data : errorData} />
//     </div>
//   );
// }
export default function PortfolioChart() {
  const { assets } = useCrypto();

  // Создаем данные для графика
  const getChartData = () => {
    // Если нет активов или массив пуст, возвращаем данные для состояния ошибки
    if (!assets || assets.length === 0) {
      return {
        labels: ["Нет данных"],
        datasets: [
          {
            label: "$",
            data: [1],
            backgroundColor: ["rgba(200, 200, 200, 0.2)"],
          },
        ],
      };
    }

    // Возвращаем нормальные данные, если активы есть
    return {
      labels: assets.map((a) => a.name),
      datasets: [
        {
          label: "$",
          data: assets.map((a) => a.totalAmount),
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
        },
      ],
    };
  };

  const chartData = getChartData();

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "1rem",
        justifyContent: "center",
        height: 400,
      }}
    >
      <Pie data={chartData} />
    </div>
  );
}
