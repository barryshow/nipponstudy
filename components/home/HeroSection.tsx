import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return <section className="home-hero"><Container>
    <div className="hero-layout"><div className="hero-copy">
      <p className="hero-intro"><span aria-hidden="true" />为下一段求学时光，认真准备</p>
      <h1>去日本，<br />找到自己的方向。</h1>
      <p className="hero-description">从一所适合的学校开始。一起梳理升学路径、申请要求与留学预算，让每一步选择都有依据。</p>
      <div className="hero-actions"><Button href="/services" size="lg">探索留学路径</Button><Link className="text-link" href="/tools/school-match">测一测适合我的院校 <span aria-hidden="true">↗</span></Link></div>
      <p className="hero-footnote">语言学校 / 本科 / 大学院 / 专门学校</p>
    </div><div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 540 530" fill="none">
        <rect width="540" height="530" rx="180" fill="#eae6da" />
        <circle cx="365" cy="133" r="66" fill="#b93f32" />
        <path d="M0 354L124 229L225 331L307 276L540 385V530H0Z" fill="#d1d3c4" />
        <path d="M0 424L177 324L329 405L540 318V530H0Z" fill="#a6afa0" />
        <path d="M89 462V274H355V462" fill="#eee9dc" />
        <path d="M69 275L221 210L375 275Z" fill="#384d43" />
        <path d="M188 448V187H256V448" fill="#ded6c3" />
        <path d="M177 187L222 158L268 187Z" fill="#384d43" />
        <path d="M222 159V135" stroke="#384d43" strokeWidth="4" />
        <circle cx="222" cy="219" r="19" fill="#faf7ef" stroke="#726f5d" strokeWidth="3" />
        <path d="M222 207V219L232 225" stroke="#384d43" strokeWidth="3" />
        <path d="M206 448V390Q222 362 238 390V448" fill="#384d43" />
        {[111,148,278,315].map(x => <g key={x}><path d={`M${x} 318V299H${x+17}V318M${x} 362V343H${x+17}V362M${x} 406V387H${x+17}V406`} fill="#718477" /></g>)}
        <path d="M214 279H231M214 311H231M214 343H231" stroke="#718477" strokeWidth="17" />
        <path d="M177 460L132 530H323L268 460Z" fill="#f8f4e9" />
        <path d="M177 461H268M166 479H281M155 497H295" stroke="#d5cbb8" strokeWidth="3" />
        <path d="M411 466V293M411 374L447 339M411 405L379 375" stroke="#4e5d4d" strokeWidth="7" />
        <ellipse cx="412" cy="300" rx="49" ry="70" fill="#617765" /><ellipse cx="451" cy="335" rx="29" ry="39" fill="#617765" /><ellipse cx="379" cy="359" rx="27" ry="40" fill="#7b8a6f" />
        <path d="M50 466H488" stroke="#718477" strokeWidth="2" />
      </svg>
      <div className="hero-art-note"><span>学びの、その先へ。</span><span>让学习，走得更远</span></div>
    </div></div>
    <div className="hero-bottom"><span>你的日本升学指南</span><a href="#study-paths">从这里开始探索 ↓</a></div>
  </Container></section>;
}
