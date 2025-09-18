import Image from "next/image";
import siteData from "../data/site.json";

export function ProfileGrid() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {siteData.members.map((member) => (
        <div key={member.name} className="card overflow-hidden">
          <div className="relative aspect-[4/3] mb-4">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-primary">{member.name}</h3>
            <dl className="space-y-1 text-sm">
              <div className="flex gap-2">
                <dt className="font-medium">カラー:</dt>
                <dd>{member.color}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium">誕生日:</dt>
                <dd>{member.birthday}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium">趣味:</dt>
                <dd>{member.hobby}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium">特技:</dt>
                <dd>{member.skill}</dd>
              </div>
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
}
