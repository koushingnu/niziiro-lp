import Image from "next/image";
import siteData from "../data/site.json";

// メンバーカラーのマッピング
const colorMap: { [key: string]: string } = {
  イエロー: "bg-yellow-400",
  グリーン: "bg-green-500",
  レッド: "bg-red-500",
  ライトブルー: "bg-sky-400",
  ピンク: "bg-pink-400",
  オレンジ: "bg-orange-400",
};

export function ProfileGrid() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {siteData.members.map((member) => (
        <div
          key={member.name}
          className="group relative bg-white/95 rounded-2xl shadow-lg overflow-hidden transition-all duration-150 hover:shadow-xl border border-white/20"
        >
          {/* カラーアクセント */}
          <div
            className={`absolute top-0 left-0 w-full h-1 ${
              colorMap[member.color]
            }`}
          />

          {/* 画像コンテナ */}
          <div className="relative aspect-[4/3]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-150 group-hover:scale-[1.02]"
              priority={member.name === "あきと"} // 最初のメンバーは優先読み込み
            />
            {/* オーバーレイグラデーション */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* プロフィール情報 */}
          <div className="p-8 space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-3xl font-bold">{member.name}</h3>
              <span
                className={`px-4 py-1.5 text-sm font-medium text-white rounded-full shadow-sm ${
                  colorMap[member.color]
                }`}
              >
                {member.color}
              </span>
            </div>

            <dl className="space-y-4 text-base">
              <div className="flex items-start gap-6">
                <dt className="font-medium text-gray-600 min-w-24">誕生日</dt>
                <dd className="flex-1">{member.birthday}</dd>
              </div>
              <div className="flex items-start gap-6">
                <dt className="font-medium text-gray-600 min-w-24">趣味</dt>
                <dd className="flex-1">{member.hobby}</dd>
              </div>
              <div className="flex items-start gap-6">
                <dt className="font-medium text-gray-600 min-w-24">特技</dt>
                <dd className="flex-1">{member.skill}</dd>
              </div>
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
}
