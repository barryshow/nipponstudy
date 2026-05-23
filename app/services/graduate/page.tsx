import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { GraduateUniversityList } from "@/components/graduate/GraduateUniversityList";
import { getAllGraduateUniversities } from "@/lib/graduate-data";
import { services } from "@/data/services";
import { universityResearcherDatabases, nationalDatabases } from "@/data/university-graduate-programs";
import { professorSearchGuide } from "@/data/university-admissions";

// 收集所有研究科的项目，按领域分组
function buildFieldDirectory() {
  const allUnis = getAllGraduateUniversities();
  const result: { field: string; icon: string; items: { uniName: string; uniId: string; programName: string; description: string }[] }[] = [];

  for (const fieldDef of fields) {
    const items: { uniName: string; uniId: string; programName: string; description: string }[] = [];
    for (const uni of allUnis) {
      // 优先使用详细研究科数据
      if (uni.hasDetail && uni.graduateDetail) {
        for (const gs of uni.graduateDetail.graduateSchools) {
          for (const prog of gs.programs) {
            const searchText = gs.name + prog.name + (prog.description ?? "");
            if (matchField(fieldDef.keywords, searchText)) {
              items.push({
                uniName: uni.name,
                uniId: uni.id,
                programName: `${gs.name} · ${prog.name}`,
                description: prog.description ?? "",
              });
            }
          }
        }
      } else {
        // 回退到通用programs
        for (const prog of uni.programs.filter(p => p.level === "graduate")) {
          if (matchField(fieldDef.keywords, prog.name + prog.description)) {
            items.push({
              uniName: uni.name,
              uniId: uni.id,
              programName: prog.name,
              description: prog.description,
            });
          }
        }
      }
    }
    if (items.length > 0) {
      result.push({ field: fieldDef.field, icon: fieldDef.icon, items });
    }
  }
  return result;
}

// 按研究领域分组的目录关键词
const fields = [
  {
    field: "情报理工 / CS / AI",
    icon: "💻",
    keywords: ["情报理工", "情报科学", "情报工学", "情报", "情報", "计算机", "CS", "AI", "数据", "データ", "システム情報", "知能", "数理·計算"],
  },
  {
    field: "机械 / 电气电子 / 工学",
    icon: "🔧",
    keywords: ["机械", "機械", "电气电子", "電気電子", "航空宇宙", "ロボット", "制御", "材料", "化学工学", "建設", "土木", "建築", "量子物理"],
  },
  {
    field: "经济 / 经营 / 商学",
    icon: "📊",
    keywords: ["经济", "経済", "经营", "経営", "商学", "MBA", "金融", "会计", "ビジネス"],
  },
  {
    field: "文学 / 人文 / 法学",
    icon: "📖",
    keywords: ["文学", "人文", "哲学", "史学", "言語", "法学", "法律", "政治", "社会学", "国際文化", "人間文化"],
  },
  {
    field: "理学 / 化学 / 物理",
    icon: "🔬",
    keywords: ["理学", "数学", "物理学", "化学", "生物科学", "地球惑星", "地球科学"],
  },
  {
    field: "医学 / 齿学 / 药学",
    icon: "🏥",
    keywords: ["医学", "歯学", "薬学", "医科学", "保健", "看護", "生命理工", "生命科学", "生物工学"],
  },
  {
    field: "农学 / 水产 / 兽医",
    icon: "🌾",
    keywords: ["農学", "農", "水産", "獣医", "生物資源", "食品科学"],
  },
  {
    field: "环境 / 国际 / 艺术",
    icon: "🌍",
    keywords: ["環境", "国際", "芸術", "デザイン", "観光", "メディア", "平和", "開発", "Smart"],
  },
];

function matchField(keywords: string[], text: string): boolean {
  return keywords.some(kw => text.includes(kw));
}

export default function GraduatePage() {
  const service = services.find((s) => s.slug === "graduate")!;
  const fieldDir = buildFieldDirectory();

  return (
    <>
      {/* 标题区 */}
      <section className="py-12 bg-zinc-50">
        <Container>
          <Breadcrumb
            items={[{ label: "首页", href: "/" }, { label: "留学服务", href: "/services" }, { label: service.title }]}
            className="mb-4"
          />
          <div className="max-w-3xl">
            <div className="mb-4 text-5xl">{service.icon}</div>
            <h1 className="text-4xl font-bold text-primary-900">{service.title}</h1>
            <p className="mt-2 text-xl text-zinc-500">{service.subtitle}</p>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">{service.description}</p>
          </div>
        </Container>
      </section>

      {/* 服务亮点 */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle title="服务亮点" centered={false} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feat) => (
              <div key={feat} className="flex items-center gap-3 rounded-lg border border-zinc-200 p-4">
                <span className="text-accent-400 text-xl">✓</span>
                <span className="font-medium text-primary-900">{feat}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 路径说明 */}
      {service.detailSections.map((section, i) => (
        <section key={section.heading} className={`py-12 ${i % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}>
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-primary-900">{section.heading}</h2>
              <div className="mt-4 text-zinc-600 leading-relaxed whitespace-pre-line">{section.content}</div>
            </div>
          </Container>
        </section>
      ))}

      {/* 申请指南入口 */}
      <section className="py-12 bg-primary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-4">📘</div>
            <h2 className="text-2xl font-bold text-primary-900">大学院申请全流程指南</h2>
            <p className="mt-3 text-zinc-600">
              四条申请路径详解 · 研究计划书写作指导 · 教授套词策略与邮件模板 · 完整申请时间线
            </p>
            <Button href="/services/graduate/guide" size="lg" className="mt-6">查看完整指南 →</Button>
          </div>
        </Container>
      </section>

      {/* 按领域分类的研究科目录 */}
      <section className="py-16 bg-zinc-50">
        <Container>
          <SectionTitle title="按领域浏览大学院专业" subtitle="点击任意大学跳转到该校详情" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {fieldDir.map((f) => (
              <details key={f.field} className="group rounded-xl border border-zinc-200 bg-white hover:border-primary-200 transition-colors">
                <summary className="cursor-pointer p-4 select-none flex items-center gap-2">
                  <span className="text-xl">{f.icon}</span>
                  <span className="text-sm font-bold text-primary-900">{f.field}</span>
                  <span className="text-xs text-zinc-400 ml-auto">{f.items.length}个专业</span>
                </summary>
                <div className="px-4 pb-4 border-t border-zinc-100 pt-3 space-y-2 max-h-64 overflow-y-auto">
                  {f.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.uniId}`}
                      className="block rounded-lg hover:bg-primary-50 p-2 -mx-2 transition-colors"
                    >
                      <div className="text-xs text-primary-600 font-medium">{item.uniName}</div>
                      <div className="text-sm font-semibold text-zinc-800">{item.programName}</div>
                      {item.description && <div className="text-xs text-zinc-400 mt-0.5">{item.description}</div>}
                    </a>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* 统一大学院列表 — 搜索筛选 + 研究科·教授详情 */}
      <GraduateUniversityList />

      {/* ======== 全研究者数据库索引 ======== */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* 各大学研究者检索入口 */}
          <div className="rounded-xl bg-primary-50 p-8">
            <h3 className="text-xl font-bold text-primary-900">各大学研究者检索入口</h3>
            <p className="mt-2 text-sm text-zinc-600">教授名单为动态数据，每年变动。通过各校官方研究者数据库确认教授在籍状态、研究方向及是否招生。</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {universityResearcherDatabases.map((db) => (
                <a key={db.university} href={db.url} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white p-3 border border-zinc-200 hover:border-primary-200 transition-colors">
                  <span className="text-xs font-bold text-primary-800">{db.university}</span>
                  <p className="mt-0.5 text-xs text-zinc-500">{db.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* 全国研究者数据库 */}
          <div className="mt-6 rounded-xl bg-white p-8 border border-zinc-200">
            <h3 className="text-xl font-bold text-primary-900">全国研究者数据库</h3>
            <p className="mt-2 text-sm text-zinc-600">教授可能在不同年度调任、退休或不再招生。通过以下数据库交叉查询最新情况。</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {nationalDatabases.map((db) => (
                <a key={db.name} href={db.url} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-zinc-50 p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-sm font-bold text-primary-900">{db.name}</span>
                  <p className="mt-1 text-xs text-zinc-500">{db.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* 教授检索指南 */}
          <div className="mt-6 rounded-xl bg-primary-50 p-8">
            <h3 className="text-xl font-bold text-primary-900">{professorSearchGuide.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{professorSearchGuide.description}</p>

            <div className="mt-6">
              <h4 className="text-sm font-bold text-primary-900">检索技巧</h4>
              <ul className="mt-2 space-y-1.5">
                {professorSearchGuide.tips.map((tip) => (
                  <li key={tip} className="text-sm text-zinc-600 flex gap-2">
                    <span className="text-accent-400 shrink-0">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {professorSearchGuide.acceptanceCheckMethods && (
              <div className="mt-6">
                <h4 className="text-sm font-bold text-primary-900">各大学 教授受入状况确认方法</h4>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {professorSearchGuide.acceptanceCheckMethods.map((m) => (
                    <div key={m.university} className="rounded-lg bg-white p-3 border border-zinc-200">
                      <span className="text-xs font-bold text-primary-800">{m.university}</span>
                      <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{m.method}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">准备申请日本大学院？</h2>
            <p className="mt-3 text-primary-100">免费评估你的背景，制定最优申请策略</p>
            <Button href="/contact" variant="secondary" size="lg" className="mt-6">免费评估</Button>
          </div>
        </Container>
      </section>
    </>
  );
}