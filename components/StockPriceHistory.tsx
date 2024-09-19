import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StockPrice {
  year: number;
  price: number;
  revenue: number;
  marketCap: number;
}

const stockPriceHistory: StockPrice[] = [
  { year: 1980, price: 0.10, revenue: 0.1, marketCap: 1.8 },
  { year: 1990, price: 0.39, revenue: 5.6, marketCap: 5.9 },
  { year: 2000, price: 1.00, revenue: 7.98, marketCap: 4.8 },
  { year: 2010, price: 11.50, revenue: 65.2, marketCap: 213 },
  { year: 2020, price: 75.09, revenue: 274.52, marketCap: 2252 },
  { year: 2022, price: 131.86, revenue: 394.33, marketCap: 2066 }
];

const formatLargeNumber = (value: number) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}T`;
  } else {
    return `${value.toFixed(1)}B`;
  }
};

export function StockPriceHistory() {
  return (
    <Card className="w-full h-[600px] bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-blue-600">苹果公司股价、收入和市值历史</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart data={stockPriceHistory} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip 
              formatter={(value: number, name: string) => {
                switch(name) {
                  case '股价':
                    return [`$${value.toFixed(2)}`, name];
                  case '收入':
                  case '市值':
                    return [`$${formatLargeNumber(value)}`, name];
                  default:
                    return [value, name];
                }
              }}
            />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="price" name="股价" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="revenue" name="收入" stroke="#82ca9d" />
            <Line yAxisId="right" type="monotone" dataKey="marketCap" name="市值" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}