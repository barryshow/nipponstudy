// 联系表单提交 API —— POST /api/contact
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, wechat, interest, notes } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "姓名和手机号为必填" }, { status: 400 });
    }

    // 通过 Supabase REST API 写入（走 HTTPS，不受防火墙影响）
    const res = await fetch(`${supabaseUrl}/rest/v1/Contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, phone, wechat, interest, notes }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}