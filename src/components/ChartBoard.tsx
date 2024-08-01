import {
  Label,
  Pie,
  PieChart,
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts";
import redOval from "../assets/svgs/darkRedOval.svg";
import yellowOval from "../assets/svgs/yellowOval.svg";
import blueOval from "../assets/svgs/blueOval.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";
import { BarChartCom } from "./BarChart";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 50, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 17, fill: "var(--color-firefox)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Total Accidents",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Injured",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Death",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function ChartBoard() {
  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <>
      <Card className="flex flex-col mb-4">
        <div className="flex items-center justify-between p-4">
          <h1 className="uppercase font-semibold text-lg">
            Monthly Accident Rate
          </h1>
          <div className="flex gap-3 uppercase font-semibold">
            <h1>Date: 01-08-2024</h1>
          </div>
        </div>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[220px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Overall Incidents
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>

          <div>
            <div className="flex items-center gap-2 font-semibold">
              <img src={blueOval} alt="" /> <h1>Total Accidents</h1>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <img src={yellowOval} alt="" /> <h1>Injured</h1>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <img src={redOval} alt="" /> <h1>Deaths</h1>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
            Showing total accidents for the last month
          </div>
        </CardFooter>
      </Card>

      <BarChartCom />
    </>
  );
}
