# OpenCode 交接：2027 日本院校资料全量核对

你接手的是一个持续中的资料清洗任务：将网站中失真、无出处、过期的院校项目资料，逐校替换为可由学校官网确认的 **2027 入学**资料；同步本地页面数据、Supabase 和 GitHub。

## 当前状态

- 仓库：`D:\AI\ClaudeProjects\japan-study-consulting`
- 分支：`main`，开始前先运行 `git status --short`；当前已推送提交为 `d5a658c`。
- GitHub：`barryshow/nipponstudy`，已经授权；访问 GitHub 需要使用本机代理 `http://127.0.0.1:7897`。不要输出、复制或修改任何令牌、认证头、密码或 `.env` 内容。
- Supabase 项目：`rnfmlfstiwzwzsnfgehb`。不能在聊天、日志或提交中暴露任何连接密钥。
- 数据源：页面读取 `data/schools/*.ts`；Supabase 是另一份副本，**不会自动同步**。
- 当前审计：133 所记录中，14 所 `partially-reviewed`，119 所 `pending`。运行 `node scripts/audit-school-data.cjs --write` 可刷新 `docs/school-review-2027.json`。

## 已完成批次（不要重复或回滚）

1. 东京大学、京都大学、东北大学、ISI 东京校区。
2. 东京科学大学、名古屋大学。
3. 大阪大学、北海道大学、九州大学、筑波大学。
4. 早稻田、庆应、上智、立命馆。

已核验范围和官方网站链接在 `data/school-reviews.ts`。这些记录只是“部分核验”，不能把未覆盖字段当成已核实的 2027 事实。

## 目标与硬规则

1. 完成剩余全部院校的逐校核对；每次处理 3–5 所，按优先级持续推进：主流私立、英语学位项目、语言学校，再到其余院校。
2. 只使用学校官网、校方 2027 招生简章/收费页，或 JASSO。不要用中介站、聚合站、搜索摘要或模型记忆作为事实来源。
3. 不要保留或新增没有校方来源的教授姓名、录取率、就业率、排名、统一 GPA/日语/英语门槛、项目名称、学费或截止日期。
4. 资料无法确认时，写清“待校方2027要项确认”，不要推测。宁可少展示，也不要伪造。
5. `data/school-reviews.ts` 必须写清每校本批覆盖范围、日期、官方来源；`docs/school-review-2027.json` 必须由审计脚本生成。
6. 不要新增/删除学校记录；不要用 `/api/seed` 重导；不要修改用户咨询、测评、联系信息或认证/RLS/安全策略。
7. 仅在用户明确要求时改 UI。当前任务是数据库和资料真实性。

## 每一批的固定流程

1. 先检索并阅读官方来源，记录明确的项目、入学季、费用、申请时间与条件；网页事实应保留可点击官方链接。
2. 修改本地 `data/schools/*.ts`，只覆盖已验证字段。同步更新 `data/school-reviews.ts` 和 `docs/REDESIGN-AND-DATA.md`。
3. 新建 `scripts/prepare-reviewed-sync-batch-XX.cjs`，仿照 batch 04：从 TypeScript 读取该批学校，生成 `scripts/reviewed-updates/2027-batch-XX.sql`。
4. SQL 必须：`BEGIN/COMMIT`、目标 slug 数量前置校验、只做精确 `UPDATE`、不得 `INSERT`/`DELETE`；在远端写入前先查询四条目标记录。
5. 运行生成脚本和 `node scripts/audit-school-data.cjs --write`，再运行 `git diff --check`。
6. 运行 `npm run build -- --webpack`。只要构建失败，先修复再同步。
7. 使用已连接的 Supabase 工具执行生成的 SQL；执行后查询 slug、收费、项目数量、项目 JSON、官网链接，确认真实写入。
8. 将生成器和 SQL 文件标为已应用日期，再生成一次 SQL，确保仓库内的审计工件与远端状态一致。
9. 再运行审计和 `git diff --check`。确认没有用户无关改动后提交；通过代理推送：PowerShell 中使用 `$env:HTTPS_PROXY='http://127.0.0.1:7897'` 后执行 `git push origin main`。
10. 每批报告：本批学校、只核对了哪些字段、官方来源、构建结果、远端回查结果、提交 SHA、剩余待核对数量。

## 当前下一批建议

从明治、立教、法政、同志社开始。已找到的官方入口：

- 明治英语项目：`https://www.meiji.ac.jp/cip/english/undergraduate/nippon/englishtrack/admissions.html`
- 立教 PEACE：`https://english.rikkyo.ac.jp/admission/peace-and-nexus.html`
- 法政英语学位：`https://www.hosei.ac.jp/english/admissions/undergraduate/ebdp/`
- 同志社 ILA：`https://ila.doshisha.ac.jp/ila/en/admissions/commonapp.html`

开始前再次核对这些页面的最新版本，不要仅依赖本交接说明。
