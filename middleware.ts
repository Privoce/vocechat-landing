import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
    // 模糊判断，待场景验证
    const isZhLang = req.headers.get("accept-language")?.startsWith('zh');
    // official document code is wrong
    // 忽略首页，走nextjs默认机制
    const isRoot = req.nextUrl.pathname === '/';
    const isZhPath = new URL(req.url).pathname.startsWith("/zh-CN");
    // console.log(req.nextUrl.pathname, req.url);

    if (
        isRoot ||
        req.nextUrl.pathname.startsWith('/_next') ||
        req.nextUrl.pathname.includes('/api/') ||
        PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
        return
    }
    if (!isZhPath && isZhLang) {

        const locale = 'zh-CN'
        // const locale = req.cookies.get('NEXT_LOCALE') || 'en'
        const newUrl = new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url);
        // console.log(isZhLang, isZhPath, req.nextUrl.pathname, req.url, newUrl.href);

        return NextResponse.redirect(
            newUrl
        )
    }
}