-- Reviewed batch 1 for 2027. Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Regeneration only creates an offline SQL artifact; it does not write to Supabase.
-- No INSERT, DELETE, public import endpoint, or contact/assessment changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "University" WHERE slug IN ('utokyo','kyoto-u','tohoku')) <> 3
     OR (SELECT count(*) FROM "LanguageSchool" WHERE slug = 'isi') <> 1 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;
UPDATE "University" SET tuition = '本科642,960日元/年；修士535,800日元/年（法科大学院除外）', "sguNote" = 'PEAK最后一届为2026年9月入学，申请已关闭，不招收2027新生。其他英语项目请查看各院系官网。',
  "researchStudent" = '多数研究科接受研究生，需教授内诺。入学料84,600円，授课料28,900円/月（346,800円/年）。EEIS电气电子系guidebook直接标注教授受入状态。',
  "programsJson" = COALESCE((SELECT jsonb_agg(p) FROM jsonb_array_elements("programsJson") p WHERE p->>'name' NOT LIKE 'PEAK%'), '[]'::jsonb)
WHERE slug = 'utokyo';
UPDATE "University" SET tuition = '2027年4月起新入学留学生：本科/修士900,000日元/年；博士等另计' WHERE slug = 'tohoku';
UPDATE "University" SET
  "programsJson" = (SELECT jsonb_agg(CASE WHEN p->>'name' = 'iUP国际本科项目' THEN '{"name":"iUP国际本科项目","level":"undergraduate","description":"2027年计划40名，9个学部参与；6个月预科+4年本科，高年级以日语授课","features":["2027年40名","10月入学","日语强化","9个学部参与"]}'::jsonb ELSE p END) FROM jsonb_array_elements("programsJson") p),
  highlights = 'AAO事前审查是最大特色，研究力日本顶尖，iUP日英双语本科项目', "featuresJson" = '["AAO事前审查制度","诺贝尔奖辈出","iUP日英双语本科","研究力日本Top","京都文化底蕴"]'::jsonb, "examFormat" = 'AAO事前审查（必须）→教授内诺→出愿→笔试+面试。各研究科分夏入试(8月)和冬入试(2月)。iUP 2027年10月入学：2026年11月2日至12月3日17:00（日本时间）出愿。'
WHERE slug = 'kyoto-u';
UPDATE "LanguageSchool" SET tuition = '首年101.5万～111.5万日元（东京，2027–2028）', location = '新宿本校/新宿Prime/池袋/高田马场/涩谷原宿（东京校区）',
  "tuitionBreakdownJson" = '{"enrollmentFee":"10万日元","annualTuition":"72万～76万日元","materialsFee":"5.5万日元","otherFees":"选考料4万日元；设施管理费10万～17万日元（按校区）","totalFirstYear":"101.5万～111.5万日元（按校区与课程）"}'::jsonb, "programsJson" = '[{"name":"升学日语（Academic Japanese）","description":"新宿本校、新宿Prime、池袋、高田马场升学校区；首年101.5万～111.5万日元，依校区确定。"},{"name":"职业日语（Career Japanese）","description":"涩谷原宿与高田马场职业校区；首年105.5万日元。"}]'::jsonb,
  highlights = '提供升学日语与职业日语课程，东京校区收费按2027–2028官方要项列示', website = 'https://sm.isi-education.com/en/long/'
WHERE slug = 'isi';
COMMIT;
