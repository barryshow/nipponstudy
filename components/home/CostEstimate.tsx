import { Container } from "@/components/ui/Container";
import { costEstimates } from "@/data/process";
export function CostEstimate() {
  return <section className="home-section cost-section"><Container>
    <div className="section-heading"><div><p className="section-kicker">先算清楚，再做决定</p><h2>留学预算，不只有学费。</h2></div><p>本科首年预算示例 · 日元</p></div>
    <div className="cost-grid">{costEstimates.map(item => <article key={item.schoolType} className="cost-card">
      <h3>{item.schoolType}</h3><p className="cost-amount">约 {item.total} <span className="text-base">万日元</span></p><p className="cost-label">首年学费、入学金与全年生活费合计估算</p>
      <dl><div><dt>首年学费与入学金</dt><dd>{item.tuition}</dd></div><div><dt>生活费参考</dt><dd>{item.living}</dd></div></dl><p className="cost-note">{item.note}</p>
    </article>)}</div>
    <p className="source-note">参考 <a href="https://www.studyinjapan.go.jp/en/planning/academic-fees/" target="_blank" rel="noopener noreferrer">JASSO 学费资料</a>与<a href="https://www.studyinjapan.go.jp/en/life/cost-of-living/" target="_blank" rel="noopener noreferrer">生活费调查</a>，核对日期：2026-11-02。生活费采用2023年度调查的全国均值10.5万日元/月，不是东京或2027年的报价。上述合计为本站按12个月计算，未含机票、租房初期费用及额外教材等；具体学费请以目标学校2027年度公布信息为准。</p>
  </Container></section>;
}
