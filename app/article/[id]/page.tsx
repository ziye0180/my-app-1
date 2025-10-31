import Link from "next/link"
import { ArrowLeft, Share2, Bookmark, Lock, CheckCircle2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#F7F4ED] font-sans">
      {/* Top App Bar */}
      <div className="sticky top-0 z-20 flex items-center justify-between bg-[#F7F4ED]/80 backdrop-blur-sm p-4">
        <Link href="/">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#2C2C2C]/5">
            <ArrowLeft className="h-5 w-5 text-[#2C2C2C]" />
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#2C2C2C]/5">
            <Share2 className="h-5 w-5 text-[#2C2C2C]" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#2C2C2C]/5">
            <Bookmark className="h-5 w-5 text-[#2C2C2C]" />
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <main className="flex-1 px-4 pb-20 max-w-2xl mx-auto">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold leading-tight text-[#2C2C2C] mb-6">掌握AI：将你的技能变现的完整指南</h1>
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9ov7R0pjI9ICF-fFqDEzXVdATw0Q8U5Om4HZHxZpf9kazENxn8EVlnKsUQTiL83orWofyGmJcxFIz_NEElIAlcG8krk8K3J2I3_mfUhchOCyK9mLs6gqeFcdXarZNwU_mQz9ZIZx6TMXq1oLJpgeZqu9Ghq6sdRuSH5uLx-wcsOH9IqEdRybKP1g55mHK9yWSSABhHLnsycTrc_kjhuXOWO-sM72GQ4rDWD00IEPTZvdYESibwo4aJ7F1ID5qb9dVeGY2dUg38_E')",
              }}
            />
            <div className="flex-1">
              <p className="text-base font-semibold text-[#2C2C2C]">张晓明</p>
              <p className="text-sm text-[#6B6B6B]">2024年10月26日</p>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="space-y-6 text-base leading-relaxed text-[#2C2C2C]">
          {/* Trial Content Section */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-[#FF6B35]/10 px-3 py-1.5 text-sm font-medium text-[#FF6B35] mb-4">
              <span className="text-base">👁️</span>
              <span>试看内容</span>
            </div>
            <p className="mb-6">
              在当今快速发展的技术环境中，人工智能（AI）已经从一个小众的学术领域转变为各行各业创新的强大引擎。对于终身学习者和雄心勃勃的专业人士来说，掌握AI工具不仅仅是保持相关性——而是释放前所未有的创造力、效率和财务增长机会。
            </p>

            <div className="my-8 w-full overflow-hidden rounded-2xl">
              <div
                className="aspect-video w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQSsYL7eQCvZQxKeuEbidCbKUY8bJd9Dz46Qj4P0mtGR5im7pNZQ7OD67GUszLMv5p_cwnUzwvu34zPcyCWFauZtcOSRLv4_yIW1r6TURe68UGcKh-Erc1sR24UJ5r3F20gwxZLLK-mET_SDV5sJx7J-o2c2gQpzQaJ-dodrrrqEOHGwYPJcuub_m6RDwN0p4fj-0BrTRIxCJYG4FGcgwdkre0-UdbRgcxnP7sYz3FpYrZDmkKBtqTg4VqdBLoZIVf-haOHO0TE50')",
                }}
              />
            </div>

            <p>
              这份综合指南旨在成为你的路线图。我们将揭开AI世界的神秘面纱，向你介绍强大而易用的工具，并提供可操作的策略，将你新获得的技能转化为有利可图的副业。无论你是作家、设计师、营销人员还是企业家，AI时代已经到来，对于那些准备抓住机会的人来说，它充满了潜力。
            </p>
          </div>

          {/* Trial Exhaustion & Paywall */}
          <div className="relative mt-12">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#F7F4ED] via-[#F7F4ED]/90 to-transparent" />
            <div className="space-y-4 blur-sm">
              <h2 className="text-2xl font-bold">解锁高级技巧</h2>
              <p>
                下一部分深入探讨具体的变现模式，包括AI驱动的内容创作、自动化自由职业服务，以及构建利基AI驱动产品。我们将介绍成功创作者的案例研究，他们通过利用这些确切的方法每月产生五位数的收入...
              </p>
            </div>

            {/* Floating Paywall Card */}
            <div className="relative z-20 -mt-16 flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-lg border border-[#E8E3D8]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6B35]/10 mb-4">
                <Lock className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">试看结束</h3>
              <p className="text-sm text-[#6B6B6B] mb-6">订阅会员解锁全文及更多专属内容</p>
              <Button className="w-full rounded-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold py-6 shadow-lg">
                立即解锁
              </Button>
            </div>
          </div>
        </article>

        {/* Related Resources (Hidden until unlocked) */}
        <div className="mt-12 hidden">
          <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">相关资源</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 rounded-xl border border-[#E8E3D8] bg-white p-4">
              <span className="mt-1 text-[#FF6B35]">🔗</span>
              <div className="flex-1">
                <a className="font-semibold text-[#FF6B35]" href="#">
                  工具：Midjourney 官方网站
                </a>
                <p className="text-sm text-[#6B6B6B]">面向艺术家和设计师的领先图像生成AI。</p>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-[#E8E3D8] bg-white p-4">
              <span className="mt-1 text-[#FF6B35]">🔗</span>
              <div className="flex-1">
                <a className="font-semibold text-[#FF6B35]" href="#">
                  指南：OpenAI API 文档
                </a>
                <p className="text-sm text-[#6B6B6B]">学习使用GPT模型构建自己的应用程序。</p>
              </div>
            </li>
          </ul>
        </div>
      </main>

      {/* Paywall Bottom Sheet (Initially hidden - would be controlled by state) */}
      <div className="fixed inset-0 z-50 hidden items-end bg-black/50" id="paywall-popup">
        <div className="w-full rounded-t-2xl bg-white p-6 pt-4 shadow-2xl">
          {/* Handle */}
          <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-[#E8E3D8]" />

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#2C2C2C]">解锁全文</h2>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#2C2C2C]/5">
              <X className="h-5 w-5 text-[#2C2C2C]" />
            </Button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#FF6B35]" />
              <p className="text-[#2C2C2C]">阅读全文（剩余2000+字深度解析）</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#FF6B35]" />
              <p className="text-[#2C2C2C]">获取专属资源和工具链接</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#FF6B35]" />
              <p className="text-[#2C2C2C]">解锁社区评论和作者互动</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button className="w-full rounded-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold py-6 shadow-lg">
              订阅会员（¥199/年）
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/10 font-semibold py-6 bg-transparent"
            >
              单独购买（¥19.9）
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
