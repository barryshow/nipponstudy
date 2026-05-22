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

  const handleSubmit = (form: StudentForm) => {
    const scoreBreakdown = calculateScore(form);
    const matchResult = matchSchools({ studentScore: scoreBreakdown.total, form });
    setBreakdown(scoreBreakdown);
    setResults(matchResult);
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