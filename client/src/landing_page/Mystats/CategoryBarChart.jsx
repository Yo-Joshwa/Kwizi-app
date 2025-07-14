import React from "react";
import { Bar, BarChart, Rectangle, XAxis } from "recharts";
import { formatTime } from "../../utils/formatTime";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";

function CategoryBarChart({ categoryData }) {
  const chartData = [
    {
      key: "attempts",
      value: categoryData.attempts,
      fill: "#60a5fa",
    },
    {
      key: "completed",
      value: categoryData.completed,
      fill: "#4ade80", 
    },
  ];

  const chartConfig = {
    attempts: {
      label: "Attempts",
      color: "#60a5fa",
    },
    completed: {
      label: "Completed",
      color: "#4ade80",
    },
  };

  return (
    <Card className="border-1 shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]">
      <CardHeader>
        <CardTitle>{categoryData.category?.name}</CardTitle>
        <CardDescription>Attempts vs Completions</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
            <XAxis
              dataKey="key"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value]?.label || value
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="value"
              strokeWidth={2}
              radius={8}
              activeBar={(props) => (
                <Rectangle
                  {...props}
                  fillOpacity={0.8}
                  stroke={props.payload.fill}
                  strokeDasharray={4}
                  strokeDashoffset={4}
                />
              )}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-semibold text-muted-foreground">
          Attempted on {formatTime(categoryData.lastAttempt)}
        </div>
      </CardFooter>
    </Card>
  );
}

export default CategoryBarChart;
