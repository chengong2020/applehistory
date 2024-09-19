'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import { StockPriceHistory } from "./StockPriceHistory"
import { AppleProducts } from "./AppleProducts"

const timelineEvents = [
  {
    year: 1976,
    title: "苹果公司成立",
    description: "史蒂夫·乔布斯、史蒂夫·沃兹尼亚克和罗纳德·韦恩在加利福尼亚州创立了苹果电脑公司。"
  },
  {
    year: 1984,
    title: "Macintosh发布",
    description: "苹果推出了革命性的Macintosh个人电脑,配备图形用户界面和鼠标。"
  },
  {
    year: 1997,
    title: "乔布斯重返苹果",
    description: "史蒂夫·乔布斯重新加入苹果,担任临时CEO,开始公司的复兴。"
  },
  {
    year: 2001,
    title: "iPod发布",
    description: "苹果推出了iPod音乐播放器,彻底改变了音乐产业。"
  },
  {
    year: 2007,
    title: "iPhone问世",
    description: "苹果发布了第一代iPhone,开创了智能手机时代。"
  },
  {
    year: 2010,
    title: "iPad发布",
    description: "苹果推出了iPad,定义了平板电脑市场。"
  },
  {
    year: 2015,
    title: "Apple Watch上市",
    description: "苹果进入可穿戴设备市场,推出了Apple Watch。"
  },
  {
    year: 2023,
    title: "Vision Pro发布",
    description: "苹果推出了首款混合现实头显设备Vision Pro,开启空间计算新时代。"
  }
]

const founders = [
  {
    name: "史蒂夫·乔布斯",
    role: "联合创始人",
    description: "苹果公司的灵魂人物，推动了多项革命性产品的诞生，包括Macintosh、iPod、iPhone和iPad。"
  },
  {
    name: "史蒂夫·沃兹尼亚克",
    role: "联合创始人",
    description: "技术天才，设计了Apple I和Apple II电脑，为苹果早期的技术发展做出了巨大贡献。"
  },
  {
    name: "罗纳德·韦恩",
    role: "联合创始人",
    description: "绘制了苹果的第一个标志，但在公司成立后不久就退出了。"
  }
]

export function AppleHistory() {
  const [showContent, setShowContent] = useState('timeline')

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">苹果公司发展史</h1>
        <div className="mb-4 flex justify-center space-x-4">
          <button
            onClick={() => setShowContent('timeline')}
            className={`px-4 py-2 rounded transition-colors ${showContent === 'timeline' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            时间线
          </button>
          <button
            onClick={() => setShowContent('founders')}
            className={`px-4 py-2 rounded transition-colors ${showContent === 'founders' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            创始人
          </button>
          <button
            onClick={() => setShowContent('products')}
            className={`px-4 py-2 rounded transition-colors ${showContent === 'products' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            经典产品
          </button>
          <button
            onClick={() => setShowContent('stock')}
            className={`px-4 py-2 rounded transition-colors ${showContent === 'stock' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            股价历史
          </button>
        </div>
        <ScrollArea className="h-[70vh]">
          {showContent === 'timeline' && (
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600">{event.year}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-800">{event.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {showContent === 'founders' && (
            <div className="space-y-6">
              {founders.map((founder, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600">{founder.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-800">{founder.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{founder.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {showContent === 'products' && <AppleProducts />}
          {showContent === 'stock' && <StockPriceHistory />}
        </ScrollArea>
      </div>
    </div>
  )
}