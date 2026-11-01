import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
export function WhyChooseUs() {
  return <section className="home-section planning-section"><Container className="planning-grid">
    <div><p className="section-kicker">把信息变成清晰的选择</p><h2 className="display-heading">留学规划，<br />从了解你开始。</h2><p className="planning-description">学校排名只是一个参考。你的兴趣、语言能力、预算和未来打算，同样值得被认真考虑。</p><Button href="/contact" variant="outline">聊聊我的留学计划</Button></div>
    <div className="planning-points">{[
      ["先明确目标", "想继续研究，还是掌握职业技能？从学习目标出发，比较不同升学路径。"],
      ["把条件逐项对齐", "一起梳理学历、语言、考试与出愿材料，了解需要补足的准备。"],
      ["让预算有据可查", "区分学费、入学金和生活费，参考学校官方收费，预留赴日初期支出。"],
    ].map(([title, description]) => <div key={title}><h3>{title}</h3><p>{description}</p></div>)}</div>
  </Container></section>;
}
