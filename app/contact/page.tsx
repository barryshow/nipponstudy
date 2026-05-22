import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ContactForm } from "@/components/shared/ContactForm";
import { siteConfig } from "@/data/site";

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
                <h3 className="text-xl font-bold text-primary-900 mb-6">联系方式</h3>
                <ul className="space-y-4 text-zinc-600">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <div className="text-sm text-zinc-500">电话</div>
                      <div className="font-medium">{siteConfig.phone}</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <div className="text-sm text-zinc-500">微信</div>
                      <div className="font-medium">{siteConfig.wechat}</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <div className="text-sm text-zinc-500">邮箱</div>
                      <div className="font-medium">{siteConfig.email}</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="text-sm text-zinc-500">地址</div>
                      <div className="font-medium">{siteConfig.address}</div>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 rounded-lg bg-primary-50 p-4">
                  <p className="text-sm text-primary-800">
                    <strong>工作时间：</strong>工作日 10:00-19:00（日本时间）/ 9:00-18:00（北京时间）
                  </p>
                  <p className="mt-2 text-sm text-primary-800">
                    <strong>咨询费用：</strong>完全免费。我们通过学校佣金获取收入，不对学生收取中介费。
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
