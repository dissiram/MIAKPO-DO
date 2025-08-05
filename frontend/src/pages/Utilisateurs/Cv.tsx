import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import React from "react";


export default function Cv(){

const { username } = useParams();
  const [cv, setCv] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const ref = doc(db, "cvs", username || "");
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setCv(snap.data());
        }
      } catch (error) {
        console.error("Erreur lors du chargement du CV :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <div className="p-4">Chargement...</div>;
  if (!cv) return <div className="p-4">CV non trouvé.</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <img src={cv.photo || "/avatar.svg"} className="w-32 h-32 rounded-full mx-auto" alt="Profil" />
      <h1 className="text-2xl font-bold mt-4">{cv.name}</h1>
      <p className="text-gray-600">{cv.desc}</p>

      <div className="flex justify-center gap-4 mt-4 flex-wrap">
        {cv.socials?.map((s: any) =>
          s.url ? (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
              <img src={s.icon} alt={s.name} className="w-6 h-6" />
            </a>
          ) : null
        )}
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {cv.blocks?.map((block: any) => {
          switch (block.type) {
            case "text":
              return <p key={block.id} className="bg-white p-4 rounded shadow">{block.content}</p>;
            case "link":
              return (
                <a key={block.id} href={block.content} target="_blank" className="text-blue-500 underline">
                  {block.content}
                </a>
              );
            case "image":
              return <img key={block.id} src={block.content} alt="img" className="w-full rounded" />;
            case "video":
              return <video key={block.id} src={block.content} controls className="w-full rounded" />;
            case "section":
              return (
                <div key={block.id} className="p-4 bg-gray-50 rounded">
                  <h2 className="font-bold text-lg mb-2">{block.title}</h2>
                  <p>{block.content}</p>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}