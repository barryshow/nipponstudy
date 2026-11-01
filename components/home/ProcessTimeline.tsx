import { Container } from "@/components/ui/Container";
import { applicationProcess } from "@/data/process";
export function ProcessTimeline() {
  return <section className="home-section"><Container>
    <div className="section-heading"><div><p className="section-kicker">从准备到入学</p><h2>把远方，拆成眼前的每一步。</h2></div><p>具体安排以学校和申请进度为准。</p></div>
    <ol className="application-steps">{applicationProcess.map(step => <li key={step.step}><span className="step-number">{String(step.step).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
  </Container></section>;
}
