"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { AssessmentForm } from "@/components/assessment/AssessmentForm";
import { AssessmentResult } from "@/components/assessment/AssessmentResult";
import { calculateScore } from "@/lib/assessment/scoring";
import { matchSchools } from "@/lib/assessment/matchSchools";
import type { StudentForm, ScoreBreakdown, MatchedSchool } from "@/lib/assessment/types";

export default function SchoolMatchPage() {
  const [breakdown, setBreakdown] = useState<ScoreBreakdown | null>(null);
  const [results, setResults] = useState<{ reach: MatchedSchool[]; match: MatchedSchool[]; safety: MatchedSchool[] } | null>(null);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (form: StudentForm) => {
    const scoreBreakdown = calculateScore(form);
    const matchResult = matchSchools({ studentScore: scoreBreakdown.total, form });
    setBreakdown(scoreBreakdown);
    setResults(matchResult);

    // 同时保存到数据库（不阻塞页面显示结果）
    setSaving(true);
    try {
      await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stage: form.stage,
          jlpt: form.jlpt,
          englishType: form.englishType,
          englishScore: form.englishScore,
          targetRegion: form.targetRegion,
          acceptPrivate: form.acceptPrivate,
          preferHighlySkilled: form.preferHighlySkilled,
          budget: form.budget,
          // 本科字段
          ejuJapanese: form.stage === "undergraduate" ? form.ejuJapanese : null,
          ejuMath: form.stage === "undergraduate" ? form.ejuMath : null,
          ejuGeneral: form.stage === "undergraduate" ? form.ejuGeneral : null,
          targetMajor: form.stage === "undergraduate" ? form.targetMajor : null,
          // 大学院字段
          undergradTier: form.stage === "graduate" ? form.undergradTier : null,
          gpa: form.stage === "graduate" ? form.gpa : null,
          gpaScale: form.stage === "graduate" ? form.gpaScale : "100",
          undergradMajor: form.stage === "graduate" ? form.undergradMajor : null,
          targetResearch: form.stage === "graduate" ? form.targetResearch : null,
          hasResearchProposal: form.stage === "graduate" ? form.hasResearchProposal : false,
          hasPublications: form.stage === "graduate" ? form.hasPublications : false,
          // 结果
          totalScore: scoreBreakdown.total,
          maxScore: scoreBreakdown.maxTotal,
          resultJson: JSON.stringify(matchResult),
        }),
      });
    } catch {
      // 保存失败不影响页面，静默处理
    } finally {
      setSaving(false);
    }
  };

  return (
    <Container className="py-8 sm:py-12">
      <div className="mx-auto max-w-3xl">
        {/* 标题区 */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">日本留学背景测评</h1>
          <p className="mt-2 text-gray-600">
            根据你的学术背景、语言成绩和研究方向，通过本地规则生成冲刺、稳妥、保底学校参考。结果仅供早期选校规划使用，不代表录取承诺。
          </p>
        </div>

        {/* 表单 */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <AssessmentForm onSubmit={handleSubmit} />
        </div>

        {/* 结果 */}
        {breakdown && results && (
          <AssessmentResult
            breakdown={breakdown}
            reach={results.reach}
            match={results.match}
            safety={results.safety}
          />
        )}

        {saving && (
          <p className="mt-4 text-center text-xs text-gray-400">正在保存测评结果...</p>
        )}

        {/* 未测评时的默认说明 */}
        {!breakdown && (
          <div className="mt-8 text-center text-sm text-gray-400">
            填写表单并点击「开始测评」后，系统将根据本地规则为你匹配学校。
          </div>
        )}
      </div>
    </Container>
  );
}