import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary-200 text-sm font-medium mb-3 tracking-wide">{siteConfig.tagline}</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            开启你的日本留学之旅
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-100 sm:text-xl">
            专业、透明、一站式日本留学服务
          </p>
          <p className="mt-3 text-base text-primary-200">
            日本现地团队 | 50+合作院校 | 2023年创立至今
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg" variant="secondary">
              免费获取留学方案 →
            </Button>
            <Button href="/services" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              了解留学服务
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
