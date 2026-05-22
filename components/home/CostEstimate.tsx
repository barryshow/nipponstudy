import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { costEstimates } from "@/data/process";

export function CostEstimate() {
  return (
    <section className="py-20 bg-zinc-50">
      <Container>
        <SectionTitle
          title="留学费用参考"
          subtitle="以东京地区为例，让我们对留学花费有一个清晰的认知"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {costEstimates.map((item) => (
            <div key={item.schoolType} className="rounded-xl border border-zinc-200 bg-white p-6">
              <h3 className="text-xl font-bold text-primary-900">{item.schoolType}</h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between border-b border-zinc-100 pb-2">
                  <span className="text-zinc-600">学费</span>
                  <span className="font-semibold text-primary-700">{item.tuition}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-100 pb-2">
                  <span className="text-zinc-600">生活费</span>
                  <span className="font-semibold text-primary-700">{item.living}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-zinc-600">年总预算</span>
                  <span className="font-semibold text-primary-900">{item.total}</span>
                </div>
                <p className="text-xs text-zinc-400 text-right">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500 mb-4">以上为估算参考，实际费用因学校和个人消费习惯而异。部分语言学校可分期付款、国公立大学可申请学费减免。</p>
          <Link href="/contact" className="text-primary-700 font-medium hover:underline">
            联系我们获取个性化费用评估 →
          </Link>
        </div>
      </Container>
    </section>
  );
}
