import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ContactForm } from "@/components/shared/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="py-12 bg-zinc-50">
        <Container>
          <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "联系咨询" }]} className="mb-4" />
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-primary-900">联系咨询</h1>
            <p className="mt-4 text-lg text-zinc-600">
              填写以下表单，我们的留学顾问会在24小时内与你联系。咨询完全免费，无需任何费用。
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-6">提交后我们会联系你</h3>
                <ul className="space-y-4 text-zinc-600">
                  <li className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">1</span>
                    <div>
                      <div className="font-medium text-zinc-900">填写基本信息</div>
                      <div className="mt-1 text-sm text-zinc-500">请留下姓名、手机号、申请阶段和目标方向，方便顾问判断你的情况。</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">2</span>
                    <div>
                      <div className="font-medium text-zinc-900">说明留学需求</div>
                      <div className="mt-1 text-sm text-zinc-500">可以补充目标学校、预算、语言成绩或目前最想解决的问题。</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">3</span>
                    <div>
                      <div className="font-medium text-zinc-900">等待顾问联系</div>
                      <div className="mt-1 text-sm text-zinc-500">我们会根据表单内容安排顾问主动联系，请保持手机畅通。</div>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 rounded-lg bg-primary-50 p-4">
                  <p className="text-sm text-primary-800">
                    <strong>咨询费用：</strong>前期咨询免费。具体服务内容会在顾问了解你的情况后进一步说明。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
