import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const appleProducts = [
  { 
    name: "Macintosh", 
    year: 1984, 
    emoji: "🖥️", 
    description: "革命性的个人电脑，引入图形用户界面和鼠标。" 
  },
  { 
    name: "iMac G3", 
    year: 1998, 
    emoji: "🖥️", 
    description: "彩色半透明外壳的一体机，重新定义了电脑设计。" 
  },
  { 
    name: "iPod", 
    year: 2001, 
    emoji: "🎵", 
    description: "便携式音乐播放器，改变了音乐产业。" 
  },
  { 
    name: "iPhone", 
    year: 2007, 
    emoji: "📱", 
    description: "智能手机革命的开端，开创了移动互联网时代。" 
  },
  { 
    name: "iPad", 
    year: 2010, 
    emoji: "📱", 
    description: "平板电脑的代表作，创造了新的设备品类。" 
  },
  { 
    name: "Apple Watch", 
    year: 2015, 
    emoji: "⌚", 
    description: "智能手表，引领可穿戴设备潮流。" 
  },
  { 
    name: "AirPods", 
    year: 2016, 
    emoji: "🎧", 
    description: "无线耳机，改变了人们的听音习惯。" 
  },
  { 
    name: "Vision Pro", 
    year: 2023, 
    emoji: "🥽", 
    description: "混合现实头显，开启空间计算新时代。" 
  },
];

export function AppleProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {appleProducts.map((product, index) => (
        <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center space-x-4 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="text-4xl">{product.emoji}</div>
            <div>
              <CardTitle className="text-xl text-blue-600">{product.name}</CardTitle>
              <p className="text-sm text-gray-500">{product.year}</p>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-700">{product.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}