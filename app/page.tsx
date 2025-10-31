"use client"

import { useMemo, useState } from "react"
import { Bell, Search, Play, Lock, Download, Share2, Home, Award, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"
import Link from "next/link"

type WeeklyHighlight = {
  title: string
  description: string
  image: string
  ctaLabel: string
}

type WeekDay = {
  date: Date
  key: string
  dayNumber: number
  weekdayShort: string
  weekdayLong: string
  headerLabel: string
  label: string
  isToday: boolean
}

const highlightTemplates: WeeklyHighlight[] = [
  {
    title: "AIGC新品盘点",
    description: "本周模型更新速递，速览三款值得关注的生成式AI新品。",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=500&fit=crop",
    ctaLabel: "查看亮点",
  },
  {
    title: "Prompt 临摹室",
    description: "精选 5 条高转化提问模板，立刻优化你的工作流程。",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    ctaLabel: "获取模板",
  },
  {
    title: "副业案例拆解",
    description: "从 0 到 1 的 AI 服务闭环，拆解本周最火副业打法。",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    ctaLabel: "学习路径",
  },
  {
    title: "AI 视频实验室",
    description: "Runway 最新镜头提示词，60 秒内生成电影感短片。",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=500&fit=crop",
    ctaLabel: "即刻试试",
  },
  {
    title: "自动化手账",
    description: "把重复工作交给机器人，Notion + Zapier 一站式流程。",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=500&fit=crop",
    ctaLabel: "领取流程",
  },
  {
    title: "高速学习清单",
    description: "30 分钟精读路线，覆盖 AI 市场、产品与增长。",
    image: "https://images.unsplash.com/photo-1520155346-36773f043c00?w=800&h=500&fit=crop",
    ctaLabel: "开启学习",
  },
  {
    title: "创作者工作坊",
    description: "Midjourney + ElevenLabs 联动，打造个人品牌素材库。",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop",
    ctaLabel: "进入工作坊",
  },
]

const weekdayShortFormatter = new Intl.DateTimeFormat("zh-CN", { weekday: "short" })
const weekdayLongFormatter = new Intl.DateTimeFormat("zh-CN", { weekday: "long" })

function getWeekDays(referenceDate: Date): WeekDay[] {
  const current = new Date(referenceDate)
  const dayOfWeek = current.getDay() // 0 (Sun) - 6 (Sat)
  const diffToMonday = (dayOfWeek + 6) % 7
  const monday = new Date(current)
  monday.setHours(0, 0, 0, 0)
  monday.setDate(current.getDate() - diffToMonday)

  return Array.from({ length: 7 }).map((_, index) => {
    const date = new Date(monday)
    date.setDate(monday.getDate() + index)
    const isToday = isSameDate(date, referenceDate)
    const weekdayLong = weekdayLongFormatter.format(date)
    const weekdayShort = weekdayShortFormatter.format(date)

    return {
      date,
      key: date.toISOString().split("T")[0],
      dayNumber: date.getDate(),
      weekdayShort,
      weekdayLong,
      headerLabel: `${date.getMonth() + 1}月${date.getDate()}日 ${weekdayLong}`,
      label: isToday ? "今天" : weekdayShort,
      isToday,
    }
  })
}

function isSameDate(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

export default function HomePage() {
  const [referenceDate] = useState(() => new Date())
  const weekDays = useMemo(() => getWeekDays(referenceDate), [referenceDate])
  const defaultSelectedIndex = weekDays.findIndex((day) => day.isToday)
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex >= 0 ? defaultSelectedIndex : 0)
  const selectedDay = weekDays[selectedIndex] ?? weekDays[0]

  const dailyHighlights = useMemo(() => {
    return Object.fromEntries(
      weekDays.map((day, index) => [day.key, highlightTemplates[index % highlightTemplates.length]])
    ) as Record<string, WeeklyHighlight>
  }, [weekDays])

  const selectedHighlight = dailyHighlights[selectedDay.key] ?? highlightTemplates[0]

  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#2C2C2C]">
      <div className="max-w-lg mx-auto flex flex-col min-h-screen pb-24">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#F7F4ED]/95 backdrop-blur-sm pt-4">
          <div className="flex items-center justify-between px-4 pb-3">
            <h2 className="text-lg font-bold text-[#1A1A1A]">{selectedDay.headerLabel}</h2>
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black/5 text-[#2C2C2C] hover:bg-black/10 transition-colors"
            >
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
            <input
              type="text"
              placeholder="搜索AI工具、副业思路"
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-white border border-[#E8E3D8] text-[#2C2C2C] placeholder:text-[#ADADAD] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 focus:border-[#FF6B35]/50 transition-all"
            />
          </div>
        </div>

        {/* Date Selector */}
        <div className="px-4 py-2">
          <ToggleGroup
            type="single"
            value={weekDays[selectedIndex]?.key}
            onValueChange={(value) => {
              if (!value) return
              const nextIndex = weekDays.findIndex((day) => day.key === value)
              if (nextIndex !== -1) {
                setSelectedIndex(nextIndex)
              }
            }}
            spacing={0}
            className="grid grid-cols-7"
          >
            {weekDays.map((day) => (
              <ToggleGroupItem
                key={day.key}
                value={day.key}
                className={cn(
                  "flex aspect-square min-h-[54px] w-full flex-col items-center justify-center border border-[#E8E3D8] bg-white text-[#7A7A7A] transition-all",
                  "gap-[2px] px-0 py-0",
                  "hover:bg-[#FFF8F5] hover:text-[#FF6B35]",
                  "data-[state=on]:border-transparent data-[state=on]:bg-[#FF6B35] data-[state=on]:text-white data-[state=on]:shadow-sm"
                )}
              >
                <span className="text-[11px] font-medium leading-none">
                  {day.isToday ? "今天" : day.label}
                </span>
                <span className="text-sm font-semibold leading-none">
                  {day.dayNumber}
                </span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* Promotional Banner */}
        <div className="px-4 mt-1">
          <div
            className="relative rounded-2xl overflow-hidden min-h-[218px] flex flex-col justify-end shadow-md"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 40%), url('${selectedHighlight.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                {selectedDay.weekdayLong}
              </p>
              <h3 className="mt-2 text-xl font-bold text-balance">{selectedHighlight.title}</h3>
              <p className="text-sm opacity-90 mt-1.5 text-pretty">{selectedHighlight.description}</p>
              <Button
                variant="secondary"
                className="mt-4 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 border-none shadow-none backdrop-blur-sm"
              >
                {selectedHighlight.ctaLabel}
              </Button>
            </div>
            <div className="flex justify-center gap-2 pb-3">
              {weekDays.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${index === selectedIndex ? "bg-white" : "bg-white/50"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Hot Topics Section */}
        <h2 className="text-xl font-bold px-4 pt-6 pb-3 text-[#1A1A1A]">今日热门信息差</h2>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pl-4 pr-4 pb-2">
          {[
            {
              title: "GPT-4o vs Claude 3 Opus",
              subtitle: "深度对比分析",
              image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
            },
            {
              title: "AI视频生成竞赛",
              subtitle: "最新技术进展",
              image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&h=400&fit=crop",
            },
            {
              title: "如何为你的AI服务定价",
              subtitle: "实用指南与策略",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href="/article/1"
              className="flex-shrink-0 w-60 bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-full aspect-video rounded-lg mb-3"
                style={{
                  backgroundImage: `url("${item.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="font-semibold text-base leading-snug text-[#1A1A1A]">{item.title}</p>
              <p className="text-sm text-[#7A7A7A] mt-1">{item.subtitle}</p>
            </Link>
          ))}
        </div>

        {/* Must Read Section */}
        <h2 className="text-xl font-bold px-4 pt-6 pb-3 text-[#1A1A1A]">本周7篇必读</h2>
        <div className="flex flex-col gap-3 px-4">
          <Link
            href="/article/1"
            className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop"
              alt="Article thumbnail"
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base leading-snug line-clamp-2 text-[#1A1A1A]">
                精通Prompt Engineering：1小时入门到实践
              </h3>
              <div className="flex items-center gap-3 text-xs text-[#7A7A7A] mt-2">
                <span>阅读时长: 15分钟</span>
                <span className="w-1 h-1 bg-[#ADADAD] rounded-full"></span>
                <span>难度: 入门</span>
              </div>
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] flex-shrink-0">
              <Play className="w-4 h-4 fill-current" />
            </div>
          </Link>

          <Link
            href="/article/1"
            className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop"
              alt="Article thumbnail"
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base leading-snug line-clamp-2 text-[#1A1A1A]">
                你的第一个AI副业：从0到1的保姆级教程
              </h3>
              <div className="flex items-center gap-3 text-xs text-[#7A7A7A] mt-2">
                <span>阅读时长: 45分钟</span>
                <span className="w-1 h-1 bg-[#ADADAD] rounded-full"></span>
                <span>难度: 中级</span>
              </div>
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 flex-shrink-0">
              <Lock className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Weekly Summary */}
        <h2 className="text-xl font-bold px-4 pt-6 pb-3 text-[#1A1A1A]">每周小结</h2>
        <div className="mx-4 p-4 rounded-xl bg-white shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-bold text-lg text-[#1A1A1A]">本周AI趋势思维导图</h3>
              <p className="text-sm text-[#7A7A7A] mt-1">一图总结本周热点</p>
            </div>
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop" alt="Mind map icon" className="w-16 h-16 object-contain" />
          </div>
          <div className="flex items-center gap-3">
            <Button className="flex-1 h-10 rounded-lg bg-[#FF6B35]/10 hover:bg-[#FF6B35]/20 text-[#FF6B35] font-semibold shadow-none">
              <Download className="w-4 h-4 mr-2" />
              下载
            </Button>
            <Button className="flex-1 h-10 rounded-lg bg-[#FF6B35]/10 hover:bg-[#FF6B35]/20 text-[#FF6B35] font-semibold shadow-none">
              <Share2 className="w-4 h-4 mr-2" />
              分享
            </Button>
          </div>
        </div>

        {/* Real-time Updates */}
        <h2 className="text-xl font-bold px-4 pt-6 pb-3 text-[#1A1A1A]">实时动态</h2>
        <div className="flex flex-col gap-3 px-4 pb-4">
          {[
            {
              title: "OpenAI发布全新API，开发者成本降低30%",
              source: "TechCrunch",
              time: "5分钟前",
            },
            {
              title: "Midjourney V7 新功能曝光，支持更精细的图像控制",
              source: "Twitter",
              time: "22分钟前",
            },
            {
              title: "AI驱动的新自由职业平台上线，主打智能匹配",
              source: "Product Hunt",
              time: "1小时前",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href="/article/1"
              className="p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="font-medium text-sm leading-relaxed text-[#1A1A1A]">{item.title}</p>
              <p className="text-xs text-[#7A7A7A] mt-1.5">
                来源: {item.source} · {item.time}
              </p>
            </Link>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto h-20 bg-[#F7F4ED]/95 backdrop-blur-sm border-t border-[#E8E3D8]">
          <div className="flex h-full items-center justify-around px-4">
            <Link href="/" className="flex flex-col items-center gap-1 text-[#FF6B35]">
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">首页</span>
            </Link>
            <Link
              href="/member"
              className="flex flex-col items-center gap-1 text-[#7A7A7A] hover:text-[#FF6B35] transition-colors"
            >
              <Award className="w-6 h-6" />
              <span className="text-xs font-medium">会员专区</span>
            </Link>
            <Link
              href="/profile"
              className="flex flex-col items-center gap-1 text-[#7A7A7A] hover:text-[#FF6B35] transition-colors"
            >
              <User className="w-6 h-6" />
              <span className="text-xs font-medium">我的</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
