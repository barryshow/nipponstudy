"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center">
        <div className="text-4xl">✅</div>
        <h3 className="mt-4 text-xl font-semibold text-primary-900">提交成功！</h3>
        <p className="mt-2 text-zinc-600">我们会在24小时内与你联系，请保持手机畅通。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-zinc-200 bg-white p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700">姓名 *</label>
          <input required className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100" placeholder="你的姓名" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700">手机号 *</label>
          <input required type="tel" className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100" placeholder="你的手机号" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700">微信</label>
          <input className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100" placeholder="选填" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700">留学意向</label>
          <select className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100">
            <option value="">请选择</option>
            <option value="language-school">语言学校</option>
            <option value="graduate">大学院（研究生/修士）</option>
            <option value="undergraduate">本科留学</option>
            <option value="vocational">专门学校</option>
            <option value="other">其他</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-zinc-700">备注</label>
        <textarea rows={4} className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100" placeholder="请简单说明你的情况（学历、日语水平、预算等）" />
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        提交咨询
      </Button>
    </form>
  );
}
