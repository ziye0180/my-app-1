import { ArrowLeft, ChevronDown, Filter, Eye, Heart, Home, Award, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HandbookPage() {
  const handbooks = [
    {
      id: 1,
      title: "Midjourney新手入门：从0到1生成你的第一张AI绘画",
      description: "本手册将带你快速上手Midjourney，通过详细的步骤教学和提示词技巧，帮助你轻松创作出惊艳的AI艺术作品。",
      tags: [
        { label: "AI绘画", color: "bg-blue-100 text-blue-600" },
        { label: "新手入门", color: "bg-teal-100 text-teal-600" },
      ],
      views: "1.2k",
      likes: "345",
    },
    {
      id: 2,
      title: "ChatGPT高效提问技巧：让AI化身你的私人专家",
      description:
        "掌握结构化提问、角色扮演、追问技巧等多种方法，让ChatGPT的回答更精准、更有深度，成为你工作学习的得力助手。",
      tags: [
        { label: "效率工具", color: "bg-indigo-100 text-indigo-600" },
        { label: "进阶技巧", color: "bg-amber-100 text-amber-600" },
      ],
      views: "980",
      likes: "210",
    },
    {
      id: 3,
      title: "Runway Gen-2视频生成实战：一键生成电影级短片",
      description:
        "从文本到视频，从图片到视频，本手册将详细拆解Runway Gen-2的各项功能，助你快速掌握AI视频生成的核心玩法。",
      tags: [{ label: "AI视频", color: "bg-rose-100 text-rose-600" }],
      views: "855",
      likes: "188",
    },
    {
      id: 4,
      title: "利用AI制作数字分身：开口说话的虚拟形象",
      description:
        "无需复杂设备，只需一张照片和一段音频，教你使用HeyGen等工具轻松创建属于自己的数字分身，应用于短视频和在线课程。",
      tags: [
        { label: "数字人", color: "bg-green-100 text-green-600" },
        { label: "副业变现", color: "bg-sky-100 text-sky-600" },
      ],
      views: "2.5k",
      likes: "672",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F7F4ED] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#F7F4ED]/95 backdrop-blur-sm border-b border-[#E8E3D8] px-4 py-3">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <Link href="/member" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-[#2C2C2C]" />
          </Link>
          <h1 className="text-lg font-semibold text-[#2C2C2C]">AI实操手册</h1>
          <div className="w-10" />
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4">
        {/* Filter Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="h-8 px-4 bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35]/20 rounded-full text-sm font-medium"
            >
              综合排序
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="ghost"
              className="h-8 px-4 bg-white text-[#6B6B6B] hover:bg-white/80 rounded-full text-sm font-medium border border-[#E8E3D8]"
            >
              筛选
              <Filter className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <p className="text-sm text-[#6B6B6B]">共 128 篇</p>
        </div>

        {/* Handbook List */}
        <div className="space-y-8">
          {handbooks.map((handbook) => (
            <Link key={handbook.id} href={`/article/${handbook.id}`}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E3D8] hover:shadow-md transition-shadow">
                <h3 className="text-base font-bold text-[#2C2C2C] mb-3 leading-snug">{handbook.title}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4 line-clamp-2">{handbook.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-wrap">
                    {handbook.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tag.color}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-[#7A7A7A]">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-xs">{handbook.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{handbook.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto h-20 bg-[#F7F4ED]/95 backdrop-blur-sm border-t border-[#E8E3D8]">
        <div className="flex h-full items-center justify-around px-4">
          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-[#7A7A7A] hover:text-[#FF6B35] transition-colors"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">首页</span>
          </Link>
          <Link href="/member" className="flex flex-col items-center gap-1 text-[#FF6B35]">
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
  )
}
