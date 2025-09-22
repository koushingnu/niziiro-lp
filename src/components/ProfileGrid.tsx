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
          className="group relative bg-white rounded-2xl shadow-soft overflow-hidden transition-transform duration-300 hover:-translate-y-2"
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
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={member.name === "あきと"} // 最初のメンバーは優先読み込み
            />
            {/* オーバーレイグラデーション */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* プロフィール情報 */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <span
                className={`px-3 py-1 text-sm text-white rounded-full ${
                  colorMap[member.color]
                }`}
              >
                {member.color}
              </span>
            </div>

            <dl className="space-y-2 text-sm">
              <div className="flex items-center gap-4">
                <dt className="font-medium min-w-20">誕生日</dt>
                <dd>{member.birthday}</dd>
              </div>
              <div className="flex items-center gap-4">
                <dt className="font-medium min-w-20">趣味</dt>
                <dd>{member.hobby}</dd>
              </div>
              <div className="flex items-center gap-4">
                <dt className="font-medium min-w-20">特技</dt>
                <dd>{member.skill}</dd>
              </div>
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
}
