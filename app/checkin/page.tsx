import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  CalendarCheck,
  Wallet,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CheckInPage() {
  return (
    <div className="min-h-screen bg-[#F7F4ED] pb-28">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#F7F4ED]/80 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <Link href="/member" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-[#2C2C2C]" />
          </Link>
          <h1 className="text-lg font-semibold text-[#2C2C2C]">打卡返现</h1>
          <div className="w-10" />
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Hero Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] p-6 text-white shadow-lg">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 -left-4 w-24 h-24 rounded-full bg-white/10" />
          <div className="relative z-10">
            <h2 className="text-xl font-bold leading-tight">30天AI工具精通挑战</h2>
            <p className="mt-1 text-sm opacity-90">保持学习，返还学费</p>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E8E3D8]">
          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-[#6B6B6B]">已打卡</p>
              <p className="text-lg font-bold text-[#2C2C2C]">15 天</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-[#6B6B6B]">连续天数</p>
              <p className="text-lg font-bold text-[#2C2C2C]">7 天</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-[#6B6B6B]">已获返现</p>
              <p className="text-lg font-bold text-[#FF6B35]">¥50.00</p>
            </div>
          </div>

          {/* Calendar */}
          <div>
            <div className="flex items-center justify-between pb-3">
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F7F4ED] text-[#2C2C2C]">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <p className="text-base font-bold text-[#2C2C2C]">2024年8月</p>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F7F4ED] text-[#2C2C2C]">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-7 text-center gap-y-2">
              {["日", "一", "二", "三", "四", "五", "六"].map((day) => (
                <p key={day} className="h-10 flex items-center justify-center text-xs font-bold text-[#6B6B6B]">
                  {day}
                </p>
              ))}

              {/* Empty cells for calendar start */}
              <div className="col-start-5 h-10" />

              {/* Checked days */}
              {[1, 2, 3, 4, 5].map((day) => (
                <div key={`checked-${day}`} className="h-10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
              ))}

              {/* Missed day */}
              <div className="h-10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>

              {/* Today */}
              <div className="h-10 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#FF6B35] text-white flex items-center justify-center text-sm font-medium">
                  4
                </div>
              </div>

              {/* Tomorrow */}
              <div className="h-10 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-[#FF6B35] text-[#FF6B35] flex items-center justify-center text-sm font-medium">
                  5
                </div>
              </div>

              {/* Future days */}
              {[6, 7].map((day) => (
                <div key={`future-${day}`} className="h-10 flex items-center justify-center text-sm text-[#6B6B6B]/50">
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Participate */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E8E3D8]">
          <h3 className="text-base font-bold text-[#2C2C2C] mb-4">如何参与</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-[#FF6B35]" />
              </div>
              <div>
                <p className="font-semibold text-[#2C2C2C] text-sm mb-0.5">1. 报名课程</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">首先，报名参加30天挑战。</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                <CalendarCheck className="w-4 h-4 text-[#FF6B35]" />
              </div>
              <div>
                <p className="font-semibold text-[#2C2C2C] text-sm mb-0.5">2. 每日打卡</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">完成每日学习任务并打卡。</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                <Wallet className="w-4 h-4 text-[#FF6B35]" />
              </div>
              <div>
                <p className="font-semibold text-[#2C2C2C] text-sm mb-0.5">3. 获取返现</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">完成挑战即可获得学费返现。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rules */}
        <details className="bg-white rounded-2xl p-5 shadow-sm border border-[#E8E3D8] group">
          <summary className="flex cursor-pointer list-none items-center justify-between">
            <h3 className="text-base font-bold text-[#2C2C2C]">规则与条款</h3>
            <ChevronDown className="w-5 h-5 text-[#6B6B6B] transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="mt-4 space-y-2 text-sm text-[#6B6B6B] leading-relaxed">
            <p>1. 打卡时间为每日00:00至23:59。</p>
            <p>2. 必须完成当日所有指定学习内容方可视为有效打卡。</p>
            <p>3. 挑战期间最多允许补卡1次，补卡需额外付费。</p>
            <p>4. 连续30天成功打卡，即可在活动结束后7个工作日内收到全额学费返现。</p>
          </div>
        </details>

        {/* QR Code */}
        <div className="flex flex-col items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-[#E8E3D8]">
          <img src="https://images.unsplash.com/photo-1617957716992-1379a4e50a1e?w=300&h=300&fit=crop" alt="学习社群二维码" className="w-32 h-32 rounded-lg" />
          <div className="text-center">
            <p className="font-semibold text-[#2C2C2C] mb-1">加入学习社群</p>
            <p className="text-sm text-[#6B6B6B]">扫描二维码，与同学们共同进步</p>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-[#F7F4ED]/95 backdrop-blur-sm p-4 border-t border-[#E8E3D8]">
        <Button className="w-full bg-[#FF6B35] hover:bg-[#FF8C42] text-white rounded-xl py-6 text-base font-semibold shadow-lg flex items-center justify-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          <span>今日打卡</span>
        </Button>
      </div>
    </div>
  )
}
