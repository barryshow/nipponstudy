import Link from "next/link";
import { Container } from "@/components/ui/Container";
const paths = [
  { slug: "language-school", title: "先学语言，再出发", name: "语言学校", description: "提升日语能力，为升学与在日生活做好准备。", label: "日语学习 · 升学准备", glyph: "あ" },
  { slug: "undergraduate", title: "开启本科四年", name: "本科留学", description: "了解学部与专业，梳理 EJU 和校内考要求。", label: "高中毕业 · 本科学位", glyph: "学" },
  { slug: "graduate", title: "让兴趣成为研究", name: "大学院留学", description: "从研究方向出发，寻找研究科与申请路径。", label: "本科毕业 · 修士 / 博士", glyph: "研" },
  { slug: "vocational", title: "把热爱变成技能", name: "专门学校", description: "探索设计、动漫、IT 等领域的职业教育。", label: "专业技能 · 职业发展", glyph: "職" },
];
export function ServiceCards() {
  return <section id="study-paths" className="home-section"><Container>
    <div className="section-heading"><div><p className="section-kicker">选择适合你的起点</p><h2>不同的目标，都有一条路。</h2></div><p>不必一开始就有所有答案。<br />先从你现在的阶段，找到下一步。</p></div>
    <div className="study-paths">{paths.map(path => <Link className="study-path" key={path.slug} href={`/services/${path.slug}`}>
      <div className="path-top"><span className="path-glyph" aria-hidden="true">{path.glyph}</span><span className="path-arrow" aria-hidden="true">↗</span></div>
      <p className="path-label">{path.label}</p><h3>{path.name}</h3><p className="path-title">{path.title}</p><p className="path-description">{path.description}</p>
    </Link>)}</div>
  </Container></section>;
}
