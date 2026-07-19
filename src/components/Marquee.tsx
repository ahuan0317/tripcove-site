const ITEMS = [
  "零输入探索",
  "右滑收藏 · 左滑跳过",
  "全国 369 城随心切",
  "探索地图模式",
  "「天安门附近的汉堡」也能搜",
  "AI 逐日落子排行程",
  "出发前画像表单",
  "收据小票预算面板",
  "手动拼行程",
  "行程执行模式",
  "GPS 围栏盖印打卡",
  "免定位打卡兜底",
  "省市双级足迹地图",
  "一键复刻好友行程",
  "追问贴纸续写行程",
  "主题榜单",
  "年度旅行报告",
  "成就徽章",
  "今日灵感推送",
  "弱网离线可看",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y-2 border-dashed border-stamp-deep/40 bg-[linear-gradient(135deg,#e0594a_0%,#b83a2e_100%)] py-3.5">
      <div className="flex w-max animate-marquee gap-0 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pr-6 font-(family-name:--font-display) text-sm font-semibold tracking-wide text-paper/95"
          >
            {item}
            <svg className="size-3 text-sun" viewBox="0 0 12 12" aria-hidden>
              <path d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12 4.6 7.4 0 6l4.6-1.4z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
