import { memo } from "react";
import Image from "next/image";
import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import siteData from "../data/site.json";

// メンバーカラーのマッピング
const colorMap: { [key: string]: string } = {
  イエロー: "bg-gradient-to-r from-amber-300 to-yellow-400",
  グリーン: "bg-gradient-to-r from-emerald-400 to-green-500",
  レッド: "bg-gradient-to-r from-rose-500 to-red-500",
  ライトブルー: "bg-gradient-to-r from-cyan-400 to-sky-500",
  ピンク: "bg-gradient-to-r from-pink-400 to-rose-400",
  オレンジ: "bg-gradient-to-r from-orange-400 to-amber-500",
};

const ProfileGrid = memo(function ProfileGrid() {
  return (
    <div
      className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      {siteData.members.map((member) => (
        <div
          key={member.name}
          className={`group relative bg-white/95 rounded-2xl overflow-hidden transition-all duration-150
            p-[2px] bg-gradient-to-r ${colorMap[member.color]}`}
          style={{
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        >
          <div className="bg-white rounded-xl overflow-hidden">
            {/* 画像コンテナ */}
            <div
              className="relative aspect-[4/3]"
              style={{
                willChange: "transform",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority={member.name === "あきと"}
                loading="eager"
                quality={90}
              />
              {/* オーバーレイグラデーション */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150`}
                style={{
                  willChange: "opacity",
                  backfaceVisibility: "hidden",
                }}
              />
            </div>

            {/* プロフィール情報 */}
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-3xl font-bold">{member.name}</h3>
                <span
                  className={`px-4 py-1.5 text-sm font-bold text-white rounded-full ${colorMap[member.color]}`}
                >
                  {member.color}
                </span>
              </div>

              <dl className="space-y-4 text-base">
                <div className="flex items-start gap-6 p-2 -mx-2 rounded-lg hover:bg-black/5 transition-all duration-150">
                  <dt className="font-medium text-gray-500 min-w-24">誕生日</dt>
                  <dd className="flex-1 font-medium">{member.birthday}</dd>
                </div>
                <div className="flex items-start gap-6 p-2 -mx-2 rounded-lg hover:bg-black/5 transition-all duration-150">
                  <dt className="font-medium text-gray-500 min-w-24">趣味</dt>
                  <dd className="flex-1 font-medium">{member.hobby}</dd>
                </div>
                <div className="flex items-start gap-6 p-2 -mx-2 rounded-lg hover:bg-black/5 transition-all duration-150">
                  <dt className="font-medium text-gray-500 min-w-24">特技</dt>
                  <dd className="flex-1 font-medium">{member.skill}</dd>
                </div>
              </dl>

              {/* SNSリンク */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href={member.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-150"
                >
                  <FaXTwitter size={24} />
                </a>
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors duration-150"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href={member.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-150"
                >
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export { ProfileGrid };
