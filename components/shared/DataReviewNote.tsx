import { schoolReviews } from "@/data/school-reviews";

export function DataReviewNote({ schoolId }: { schoolId: string }) {
  const review = schoolReviews[schoolId];
  return <aside className="review-note">
    {review ? <><p>2027 入学资料核对 · {review.checkedAt}</p><p>{review.scope}</p><p className="mt-1">官方来源：{review.sources.map((source, i) => <span key={source.url}>{i > 0 && " / "}<a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></span>)}</p></>
      : <p>2027 年度资料待核对。以下为已有参考资料，专业设置、学费与申请条件请以目标年度的学校官方募集要项为准。</p>}
  </aside>;
}
