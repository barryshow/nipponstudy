import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
export function CTABanner() {
  return <section className="consultation-section"><Container className="consultation-inner"><div><p>下一步，一起想清楚。</p><h2>你的日本留学计划，<br />可以从一次交流开始。</h2></div><div><Button href="/contact" variant="secondary" size="lg">预约免费咨询</Button><p className="consultation-note">留下你的目标与疑问，顾问会与你联系。</p></div></Container></section>;
}
