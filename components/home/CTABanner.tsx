import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-800">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            还在犹豫？让我们帮你规划
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            免费获取专属留学方案，开启你的日本留学之旅
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg" variant="secondary">
              立即免费咨询
            </Button>
            <div className="text-sm text-primary-200">
              <p>或添加微信：hefengliuxue</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
