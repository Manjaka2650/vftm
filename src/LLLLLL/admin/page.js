"use client";


import { Card } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DollarSign, Target, TrendingUp } from "lucide-react";
import { useState } from "react";
const mockData = [
  { month: "Jan", amount: 2400 },
  { month: "Feb", amount: 3600 },
  { month: "Mar", amount: 4800 },
  { month: "Apr", amount: 5200 },
  { month: "May", amount: 6800 },
  { month: "Jun", amount: 8400 },
];

export default function Dashboard() {
  const [currentAmount] = useState(8400);
  const [targetAmount] = useState(10000);
  const progress = (currentAmount / targetAmount) * 100;

  return (
    <div className="bg-background p-8 w-full min-h-screen overflow-y-auto">
      <div className="mx-auto max-w-7xl space-y-8 animate-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <h1 className="text-4xl font-bold tracking-tight">
            Font Management Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-primary/10 p-3">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Current Amount
                </p>
                <h2 className="text-3xl font-bold">
                  ${currentAmount.toLocaleString()}
                </h2>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Target Amount
                </p>
                <h2 className="text-3xl font-bold">
                  ${targetAmount.toLocaleString()}
                </h2>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-primary/10 p-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Progress
                </p>
                <h2 className="text-3xl font-bold">{progress.toFixed(1)}%</h2>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="mb-6">
            <h3 className="text-lg font-medium">Progress Overview</h3>
            <p className="text-sm text-muted-foreground">
              Track your progress towards the target
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current Progress</p>
                <p className="text-2xl font-bold">
                  ${currentAmount.toLocaleString()} / $
                  {targetAmount.toLocaleString()}
                </p>
              </div>
              <p className="text-sm font-medium">{progress.toFixed(1)}%</p>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </Card>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <h3 className="text-lg font-medium">Monthly Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Your financial growth over time
                </p>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="amount"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <h3 className="text-lg font-medium">Detailed Analytics</h3>
                <p className="text-sm text-muted-foreground">Coming soon...</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

