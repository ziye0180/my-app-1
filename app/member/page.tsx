import {
  Menu,
  Settings,
  Sparkles,
  Brain,
  DollarSign,
  Star,
  Play,
  Lock,
  Home,
  Award,
  User,
  Calendar,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MemberPage() {
  return (
    <div className="min-h-screen bg-[#F7F4ED] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#F7F4ED]/80 backdrop-blur-sm border-b border-[#E8E3D8] px-4 py-3">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button className="p-2 -ml-2">
            <Menu className="w-6 h-6 text-[#2C2C2C]" />
          </button>
          <h1 className="text-lg font-semibold text-[#2C2C2C]">会员专区</h1>
          <button className="p-2 -mr-2">
            <Settings className="w-6 h-6 text-[#2C2C2C]" />
          </button>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Membership Card */}
        <div className="bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold mb-1">Pro 会员</h2>
              <p className="text-sm opacity-90">您尊享所有会员权益</p>
            </div>
            <Button
              variant="ghost"
              className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full px-4 h-9 text-sm font-medium"
            >
              续费
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Sparkles className="w-8 h-8 mb-2" />
              <p className="text-xs opacity-90">会员权益</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold mb-1">3</p>
              <p className="text-xs opacity-90">剩余试用</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 mb-2 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              <p className="text-xs opacity-90">今日已签到</p>
            </div>
          </div>
        </div>

        {/* Check-in Activity Card */}
        <Link href="/checkin" className="block">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E8E3D8] hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2C2C2C]">30天AI工具精通挑战</h3>
                  <p className="text-sm text-[#6B6B6B]">保持学习，返还学费</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#6B6B6B] flex-shrink-0" />
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#F7F4ED] rounded-lg py-2">
                <p className="text-lg font-bold text-[#2C2C2C]">15</p>
                <p className="text-xs text-[#6B6B6B]">已打卡</p>
              </div>
              <div className="bg-[#F7F4ED] rounded-lg py-2">
                <p className="text-lg font-bold text-[#2C2C2C]">7</p>
                <p className="text-xs text-[#6B6B6B]">连续天数</p>
              </div>
              <div className="bg-[#F7F4ED] rounded-lg py-2">
                <p className="text-lg font-bold text-[#FF6B35]">¥50</p>
                <p className="text-xs text-[#6B6B6B]">已获返现</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/handbook" className="block">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E8E3D8] hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <h3 className="text-base font-semibold text-[#2C2C2C] mb-1">AI 实操手册</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">手把手教你掌握AI工具的实用指南</p>
            </div>
          </Link>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E8E3D8]">
            <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center mb-3">
              <Brain className="w-5 h-5 text-[#FF6B35]" />
            </div>
            <h3 className="text-base font-semibold text-[#2C2C2C] mb-1">认知提升</h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">拓展思维模式，提升战略思考能力</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E8E3D8]">
            <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5 text-[#FF6B35]" />
            </div>
            <h3 className="text-base font-semibold text-[#2C2C2C] mb-1">副业变现</h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">学习如何将AI技能转化为收入</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E8E3D8]">
            <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center mb-3">
              <Star className="w-5 h-5 text-[#FF6B35]" />
            </div>
            <h3 className="text-base font-semibold text-[#2C2C2C] mb-1">觉醒人生</h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">个人成长与职业发展的未来规划</p>
          </div>
        </div>

        {/* Historical Selections */}
        <div>
          <h2 className="text-xl font-bold text-[#2C2C2C] mb-4">历史精选</h2>

          <div className="space-y-3">
            {/* Pro Member Content */}
            <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-[#E8E3D8]">
              <div
                className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-400 to-blue-500 flex-shrink-0"
                style={{
                  backgroundImage: "url(/placeholder.svg?height=56&width=56&query=abstract+gradient+purple+blue)",
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium text-[#2C2C2C] truncate mb-0.5">如何用AI制作爆款短视频</h3>
                <p className="text-sm text-[#6B6B6B] truncate">Pro会员专享内容</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0">
                <Play className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
              </button>
            </div>

            {/* Locked Content */}
            <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-[#E8E3D8] opacity-60">
              <div
                className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-400 to-orange-500 flex-shrink-0"
                style={{
                  backgroundImage: "url(/placeholder.svg?height=56&width=56&query=abstract+gradient+pink+orange)",
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium text-[#2C2C2C] truncate mb-0.5">AI绘画工具Midjourney入门</h3>
                <p className="text-sm text-[#6B6B6B] truncate">升级Pro会员解锁</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-[#6B6B6B]/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-4 h-4 text-[#6B6B6B]" />
              </button>
            </div>

            {/* Free Content */}
            <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-[#E8E3D8]">
              <div
                className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-400 to-green-500 flex-shrink-0"
                style={{
                  backgroundImage: "url(/placeholder.svg?height=56&width=56&query=abstract+gradient+blue+green)",
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium text-[#2C2C2C] truncate mb-0.5">AI时代，我们应该学什么？</h3>
                <p className="text-sm text-[#6B6B6B] truncate">这是一个免费的精选内容</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0">
                <Play className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
              </button>
            </div>
          </div>
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
