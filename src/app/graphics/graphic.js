'use client';
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

export default function Graphic(){

    const chartConfig = {
        type: "pie",
        width: 280,
        height: 280,
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
          legend: {
            show: false,
          },
        },
      };    

return(
<Card className='border-4 border-gray-500/100 dark:bg-gray-800 flex flex-col w-auto items-center'>


          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className=" flex flex-col gap-4 rounded-none md:flex-row md:items-center "
          >
          <Typography variant="h6" color="white" className="text-2xl ">
            Gráfico (exemplo)
          </Typography>
           
          </CardHeader>
          <CardBody className="mb-5 grid place-items-center px-2">
            <Chart {...chartConfig} />
          </CardBody>
        </Card>

)

}