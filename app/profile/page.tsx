import Link from "next/link"
import { ChevronRight, Settings, Home, Award, User, Crown, Eye, History, Heart, Edit2 } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F7F4ED] pb-24 relative">
      {/* Gradient Background at top */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#FF6B35]/20 via-[#FF6B35]/5 to-[#F7F4ED] -z-10"></div>

      {/* Profile Header */}
      <div className="p-4 pt-16">
        <div className="flex flex-col items-center justify-start rounded-xl bg-white p-6 shadow-lg">
          {/* Elevated Avatar */}
          <div className="w-20 h-20 bg-center bg-no-repeat aspect-square bg-cover rounded-full -mt-16 border-4 border-white overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#FF6B35] to-[#E55A2B]">
            <User className="w-12 h-12 text-white" strokeWidth={1.5} />
          </div>

          <div className="flex w-full items-center justify-center gap-2 pt-4">
            <h1 className="text-[#2C2C2C] text-2xl font-bold leading-tight">王立</h1>
            <button className="flex size-6 shrink-0 items-center justify-center text-[#7D7D7D] hover:text-[#FF6B35] transition-colors">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[#7D7D7D] text-sm font-normal leading-normal mt-1 text-center">
            AI探索者，终身学习官。点击编辑简介。
          </p>
        </div>
      </div>

      <div className="p-4 pt-2">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-[#E8E3D8] shadow-md">
          <div className="flex flex-col gap-2 bg-white p-4">
            <p className="flex items-center gap-1.5 text-amber-500 text-sm font-semibold leading-normal">
              <Crown className="w-5 h-5" />
              觉醒者会员
            </p>
            <p className="text-[#2C2C2C] text-sm font-medium leading-normal">有效期至 2025-12-31</p>
          </div>
          <div className="flex flex-col gap-2 bg-white p-4">
            <p className="flex items-center gap-1.5 text-[#7D7D7D] text-sm font-semibold leading-normal">
              <Eye className="w-5 h-5" />
              剩余试看次数
            </p>
            <p className="text-[#2C2C2C] text-sm font-medium leading-normal">
              <span className="text-[#FF6B35] font-bold">3</span> / 5 次
            </p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="p-4 pt-2">
        <div className="flex flex-col gap-2">
          <Link
            href="/history"
            className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md active:bg-[#F7F4ED] transition-colors"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B35]/10 text-[#FF6B35]">
              <History className="w-5 h-5" />
            </div>
            <p className="flex-1 text-[#2C2C2C] text-base font-medium leading-tight">学习历史</p>
            <ChevronRight className="w-5 h-5 text-[#ADADAD]" />
          </Link>

          <Link
            href="/favorites"
            className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md active:bg-[#F7F4ED] transition-colors"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B35]/10 text-[#FF6B35]">
              <Heart className="w-5 h-5" />
            </div>
            <p className="flex-1 text-[#2C2C2C] text-base font-medium leading-tight">我的收藏</p>
            <ChevronRight className="w-5 h-5 text-[#ADADAD]" />
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md active:bg-[#F7F4ED] transition-colors"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B35]/10 text-[#FF6B35]">
              <Settings className="w-5 h-5" />
            </div>
            <p className="flex-1 text-[#2C2C2C] text-base font-medium leading-tight">设置</p>
            <ChevronRight className="w-5 h-5 text-[#ADADAD]" />
          </Link>
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
          <Link
            href="/member"
            className="flex flex-col items-center gap-1 text-[#7A7A7A] hover:text-[#FF6B35] transition-colors"
          >
            <Award className="w-6 h-6" />
            <span className="text-xs font-medium">会员专区</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1 text-[#FF6B35]">
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">我的</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
