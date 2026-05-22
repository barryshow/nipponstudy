"use client";

import { useState } from "react";
import type { StudentForm, UndergraduateForm, GraduateForm } from "@/lib/assessment/types";

const INPUT_CLASS = "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500";
const SELECT_CLASS = "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500";
const LABEL_CLASS = "block text-sm font-medium text-gray-700 mb-1";

const stageOptions = [
  { value: "undergraduate", label: "本科 / 学部申请" },
  { value: "graduate", label: "大学院 / 修士申请" },
];

const jlptOptions = [
  { value: "N1", label: "N1" },
  { value: "N2", label: "N2" },
  { value: "N3", label: "N3" },
  { value: "none", label: "无" },
];

const englishTypeOptions = [
  { value: "TOEFL", label: "TOEFL" },
  { value: "TOEIC", label: "TOEIC" },
  { value: "IELTS", label: "IELTS" },
  { value: "none", label: "无" },
];

const budgetOptions = [
  { value: "any", label: "不限" },
  { value: "high", label: "高" },
  { value: "medium", label: "中" },
  { value: "low", label: "低" },
];

const regionOptions = [
  { value: "不限", label: "不限" },
  { value: "关东", label: "关东（东京/神奈川/千叶/埼玉/茨城/群马/栃木）" },
  { value: "近畿", label: "近畿（大阪/京都/兵库/奈良/滋贺/和歌山）" },
  { value: "中部", label: "中部（爱知/岐阜/静冈/长野/新潟/富山/石川/福井/山梨）" },
  { value: "九州", label: "九州（福冈/佐贺/长崎/熊本/大分/宫崎/鹿儿岛）" },
  { value: "東北", label: "东北（宫城/青森/岩手/秋田/山形/福岛）" },
  { value: "中国", label: "中国（广岛/冈山/山口/岛根/鸟取）" },
  { value: "北海道", label: "北海道" },
  { value: "四国", label: "四国（香川/德岛/爱媛/高知）" },
  { value: "沖縄", label: "冲绳" },
];

const undergradTierOptions = [
  { value: "985", label: "985" },
  { value: "211", label: "211" },
  { value: "double-first-class", label: "双一流" },
  { value: "regular", label: "普通本科" },
  { value: "overseas", label: "海外本科" },
  { value: "college-upgrade", label: "专升本" },
  { value: "other", label: "其他" },
];

const gpaScaleOptions = [
  { value: "100", label: "百分制 (0-100)" },
  { value: "4.0", label: "4.0 制" },
];

interface Props {
  onSubmit: (form: StudentForm) => void;
}

// ============================================================
// 本科表单
// ============================================================

function UndergraduateFields({ form, onChange }: { form: UndergraduateForm; onChange: (f: UndergraduateForm) => void }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label className={LABEL_CLASS}>EJU 日语分数 <span className="text-gray-400 font-normal">(0-400)</span></label>
        <input type="number" min={0} max={400} className={INPUT_CLASS} placeholder="0-400"
          value={form.ejuJapanese ?? ""} onChange={e => onChange({ ...form, ejuJapanese: e.target.value ? Number(e.target.value) : null })} />
      </div>
      <div>
        <label className={LABEL_CLASS}>EJU 数学分数 <span className="text-gray-400 font-normal">(0-200)</span></label>
        <input type="number" min={0} max={200} className={INPUT_CLASS} placeholder="コース1 或 コース2 (0-200)"
          value={form.ejuMath ?? ""} onChange={e => onChange({ ...form, ejuMath: e.target.value ? Number(e.target.value) : null })} />
      </div>
      <div>
        <label className={LABEL_CLASS}>EJU 综合科目 / 理科 <span className="text-gray-400 font-normal">(0-200)</span></label>
        <input type="number" min={0} max={200} className={INPUT_CLASS} placeholder="0-200"
          value={form.ejuGeneral ?? ""} onChange={e => onChange({ ...form, ejuGeneral: e.target.value ? Number(e.target.value) : null })} />
      </div>
      <div>
        <label className={LABEL_CLASS}>日语等级</label>
        <select className={SELECT_CLASS} value={form.jlpt} onChange={e => onChange({ ...form, jlpt: e.target.value as UndergraduateForm["jlpt"] })}>
          {jlptOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div>
        <label className={LABEL_CLASS}>英语成绩类型</label>
        <select className={SELECT_CLASS} value={form.englishType} onChange={e => onChange({ ...form, englishType: e.target.value as UndergraduateForm["englishType"] })}>
          {englishTypeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div>
        <label className={LABEL_CLASS}>英语成绩数值</label>
        <input type="number" className={INPUT_CLASS} placeholder="如 TOEFL 85 / TOEIC 700 / IELTS 6.5"
          value={form.englishScore ?? ""} onChange={e => onChange({ ...form, englishScore: e.target.value ? Number(e.target.value) : null })} />
      </div>
      <div className="sm:col-span-2">
        <label className={LABEL_CLASS}>目标专业方向</label>
        <input type="text" className={INPUT_CLASS} placeholder="如 计算机科学 / 经营学 / 机械工程 / 法学..."
          value={form.targetMajor} onChange={e => onChange({ ...form, targetMajor: e.target.value })} />
      </div>
      <div>
        <label className={LABEL_CLASS}>目标地区</label>
        <select className={SELECT_CLASS} value={form.targetRegion} onChange={e => onChange({ ...form, targetRegion: e.target.value })}>
          {regionOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div>
        <label className={LABEL_CLASS}>预算倾向</label>
        <select className={SELECT_CLASS} value={form.budget} onChange={e => onChange({ ...form, budget: e.target.value as UndergraduateForm["budget"] })}>
          {budgetOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2 flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={form.acceptPrivate} onChange={e => onChange({ ...form, acceptPrivate: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
          接受私立大学
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={form.preferHighlySkilled} onChange={e => onChange({ ...form, preferHighlySkilled: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
          关注高度人才签证加分校
        </label>
      </div>
    </div>
  );
}

// ============================================================
// 大学院表单
// ============================================================

function GraduateFields({ form, onChange }: { form: GraduateForm; onChange: (f: GraduateForm) => void }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label className={LABEL_CLASS}>本科院校层次</label>
        <select className={SELECT_CLASS} value={form.undergradTier} onChange={e => onChange({ ...form, undergradTier: e.target.value as GraduateForm["undergradTier"] })}>
          {undergradTierOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div>
        <label className={LABEL_CLASS}>GPA / 均分</label>
        <input type="number" step="0.01" className={INPUT_CLASS + " mb-2"} placeholder="如 3.5 或 85"
          value={form.gpa ?? ""} onChange={e => onChange({ ...form, gpa: e.target.value ? Number(e.target.value) : null })} />
        <div className="flex gap-2">
          {gpaScaleOptions.map(o => (
            <label key={o.value} className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm cursor-pointer transition-colors ${
              form.gpaScale === o.value ? "border-primary-500 bg-primary-50 text-primary-700" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}>
              <input type="radio" name="gpaScale" value={o.value} checked={form.gpaScale === o.value}
                onChange={e => onChange({ ...form, gpaScale: e.target.value as "100" | "4.0" })}
                className="sr-only" />
              {o.label}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className={LABEL_CLASS}>本科专业</label>
        <input type="text" className={INPUT_CLASS} placeholder="如 计算机科学 / 土木工程 / 经济学..."
          value={form.undergradMajor} onChange={e => onChange({ ...form, undergradMajor: e.target.value })} />
      </div>
      <div>
        <label className={LABEL_CLASS}>目标研究方向</label>
        <input type="text" className={INPUT_CLASS} placeholder="如 人工智能 / 结构工程 / 劳动经济学..."
          value={form.targetResearch} onChange={e => onChange({ ...form, targetResearch: e.target.value })} />
      </div>
      <div>
        <label className={LABEL_CLASS}>日语等级</label>
        <select className={SELECT_CLASS} value={form.jlpt} onChange={e => onChange({ ...form, jlpt: e.target.value as GraduateForm["jlpt"] })}>
          {jlptOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div>
        <label className={LABEL_CLASS}>英语成绩类型</label>
        <select className={SELECT_CLASS} value={form.englishType} onChange={e => onChange({ ...form, englishType: e.target.value as GraduateForm["englishType"] })}>
          {englishTypeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div>
        <label className={LABEL_CLASS}>英语成绩数值</label>
        <input type="number" className={INPUT_CLASS} placeholder="如 TOEFL 90 / TOEIC 750 / IELTS 7.0"
          value={form.englishScore ?? ""} onChange={e => onChange({ ...form, englishScore: e.target.value ? Number(e.target.value) : null })} />
      </div>
      <div>
        <label className={LABEL_CLASS}>目标地区</label>
        <select className={SELECT_CLASS} value={form.targetRegion} onChange={e => onChange({ ...form, targetRegion: e.target.value })}>
          {regionOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div>
        <label className={LABEL_CLASS}>预算倾向</label>
        <select className={SELECT_CLASS} value={form.budget} onChange={e => onChange({ ...form, budget: e.target.value as GraduateForm["budget"] })}>
          {budgetOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2 flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={form.acceptPrivate} onChange={e => onChange({ ...form, acceptPrivate: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
          接受私立大学
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={form.preferHighlySkilled} onChange={e => onChange({ ...form, preferHighlySkilled: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
          关注高度人才签证加分校
        </label>
      </div>
      <div className="sm:col-span-2 flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={form.hasResearchProposal} onChange={e => onChange({ ...form, hasResearchProposal: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
          已准备研究计划书
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={form.hasPublications} onChange={e => onChange({ ...form, hasPublications: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
          有论文 / 科研 / 项目经历
        </label>
      </div>
    </div>
  );
}

// ============================================================
// 主表单组件
// ============================================================

export function AssessmentForm({ onSubmit }: Props) {
  const [stage, setStage] = useState<"undergraduate" | "graduate">("graduate");

  const [undergrad, setUndergrad] = useState<UndergraduateForm>({
    stage: "undergraduate",
    ejuJapanese: null,
    ejuMath: null,
    ejuGeneral: null,
    jlpt: "none",
    englishType: "none",
    englishScore: null,
    targetMajor: "",
    targetRegion: "不限",
    acceptPrivate: true,
    preferHighlySkilled: false,
    budget: "any",
  });

  const [graduate, setGraduate] = useState<GraduateForm>({
    stage: "graduate",
    undergradTier: "regular",
    gpa: null,
    gpaScale: "100",
    undergradMajor: "",
    targetResearch: "",
    jlpt: "none",
    englishType: "none",
    englishScore: null,
    hasResearchProposal: false,
    hasPublications: false,
    targetRegion: "不限",
    acceptPrivate: true,
    preferHighlySkilled: false,
    budget: "any",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form: StudentForm = stage === "undergraduate" ? { ...undergrad, stage: "undergraduate" } : { ...graduate, stage: "graduate" };
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 阶段切换 */}
      <div className="mb-6 flex rounded-lg bg-gray-100 p-1">
        {stageOptions.map(opt => (
          <button
            key={opt.value}
            type="button"
            className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              stage === opt.value ? "bg-white text-primary-700 shadow-sm" : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setStage(opt.value as typeof stage)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {stage === "undergraduate" ? (
        <UndergraduateFields form={undergrad} onChange={setUndergrad} />
      ) : (
        <GraduateFields form={graduate} onChange={setGraduate} />
      )}

      <button
        type="submit"
        className="mt-8 w-full rounded-lg bg-primary-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-800 transition-colors"
      >
        开始测评
      </button>
    </form>
  );
}