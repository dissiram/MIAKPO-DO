import React, { useState } from "react";
import logo from "@/./assets/logo.svg"; 
import { Link ,ImagePlus, Video ,Text,Box } from 'lucide-react';
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";


export default function CvEdit() {

  // Blocs dynamiques
  const [blocks, setBlocks] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem("cv_blocks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  React.useEffect(() => {
    localStorage.setItem("cv_blocks", JSON.stringify(blocks));
  }, [blocks]);

  // Ajout de blocs
  const blockTemplates = {
    link: { type: "link", content: "https://", color: "#fff", width: 400, height: 80 },
    image: { type: "image", content: "", color: "#fff", width: 400, height: 200 },
    video: { type: "video", content: "", color: "#fff", width: 400, height: 220 },
    text: { type: "text", content: "Nouveau texte", color: "#fff", width: 400, height: 80 },
    section: { type: "section", title: "Nouvelle section", content: "Contenu de la section", color: "#f7f7f7", width: 400, height: 120 },
  };
  const addBlock = (type: keyof typeof blockTemplates, contentOverride?: any) => {
    setBlocks(blocks => [
      ...blocks,
      { id: Date.now() + Math.random(), ...blockTemplates[type], ...(contentOverride ? { content: contentOverride } : {}) }
    ]);
  };

  // Références pour inputs cachés
  const imageInputRef = React.useRef<HTMLInputElement>(null);
  const videoInputRef = React.useRef<HTMLInputElement>(null);
  const removeBlock = (id: number) => {
    setBlocks(blocks => blocks.filter(b => b.id !== id));
  };
  const moveBlock = (from: number, to: number) => {
    setBlocks(blocks => {
      if (from === to) return blocks;
      const updated = [...blocks];
      const [moved] = updated.splice(from, 1);
      updated.splice(to, 0, moved);
      return updated;
    });
  };
  const setBlockContent = (id: number, value: any) => {
    setBlocks(blocks => blocks.map(b => b.id === id ? { ...b, content: value } : b));
  };
  const setBlockSize = (id: number, width: number, height: number) => {
    setBlocks(blocks => blocks.map(b => b.id === id ? { ...b, width, height } : b));
  };
  const setColor = (id: number, color: string) => {
    setBlocks(blocks => blocks.map(b => b.id === id ? { ...b, color } : b));
  };

  // Profil éditable
  const [profileName, setProfileName] = useState("Votre nom");
  const [profileDesc, setProfileDesc] = useState("Ajoutez une description courte ici...");
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [socials, setSocials] = useState([
    { name: "Instagram", icon: "/instagram.svg", url: "" },
    { name: "Figma", icon: "/figma.svg", url: "" },
    { name: "WhatsApp", icon: "/whatsapp.svg", url: "" },
    { name: "LinkedIn", icon: "/linkedin.svg", url: "" },
    { name: "Twitter", icon: "/twitter.svg", url: "" },
  ]);
  const photoInputRef = React.useRef<HTMLInputElement>(null);

  // Publication publique (URL personnalisée)
  const [publicUrl, setPublicUrl] = useState("");
  
  const publishPage = async () => {
  const payload = {
    name: profileName,
    desc: profileDesc,
    photo: profilePhoto,
    socials,
    blocks,
    publishedAt: Date.now(),
  };

  try {
    await setDoc(doc(db, "cvs", publicUrl || "votre-nom"), payload);
    alert(`Votre page est publiée à l'URL : /cv/${publicUrl || "votre-nom"}`);
  } catch (error) {
    console.error("Erreur de publication :", error);
    alert("Erreur lors de la publication du CV.");
  }
};

  // Responsive/mobile : layout adaptatif
  return (
      <div className="bg-gradient-to-br from-blue-50 via-white to-pink-50 text-gray-900 min-h-screen flex flex-col"> 
      
        {/* Publication */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4 bg-white/80 shadow sticky top-0 z-40">
             <img width={104} 
              src={logo} 
              alt="Logo"
          />
          <div />
          <div className="flex gap-2 items-center">
            <input className="px-2 py-1 bg-white border rounded" value={publicUrl} onChange={e => setPublicUrl(e.target.value)} placeholder="URL personnalisée" />
            <button className="px-2 py-1 bg-green-500 text-white rounded font-semibold shadow" onClick={publishPage}>Publier</button>
          </div>
        </div>
        {/* Profil et réseaux sociaux */}
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto py-8 w-full">
          {/* Profil */}
          <div className="flex flex-col items-center md:w-1/4 w-full mb-8 md:mb-0">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4 relative group">
              <img
                src={profilePhoto || "/avatar.svg"}
                alt=""
                className="w-28 h-28 object-cover rounded-full cursor-pointer border-2 border-white shadow"
                onClick={() => photoInputRef.current?.click()}
              />
              <button
                className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow text-xs opacity-80 group-hover:opacity-100"
                onClick={() => photoInputRef.current?.click()}
                title="Changer la photo"
                type="button"
              >
                📷
              </button>
              <input
                type="file"
                accept="image/*"
                ref={photoInputRef}
                style={{ display: "none" }}
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = ev => setProfilePhoto(ev.target?.result as string);
                    reader.readAsDataURL(file);
                  }
                  e.target.value = "";
                }}
              />
            </div>
            <input
              className="text-2xl font-bold mb-2 text-center bg-transparent outline-none border-b border-gray-200 focus:border-blue-400 transition px-2"
              value={profileName}
              onChange={e => setProfileName(e.target.value)}
              style={{ textAlign: "center" }}
            />
            <textarea
              className="text-gray-700 text-center mb-4 bg-transparent outline-none border-b border-gray-100 focus:border-blue-200 transition px-2 resize-none"
              value={profileDesc}
              onChange={e => setProfileDesc(e.target.value)}
              rows={2}
              style={{ textAlign: "center" }}
            />


            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {socials.map((s, idx) => {
                const isValidUrl = /^https?:\/\//.test(s.url);
                return (
                  <div key={s.name} className="flex items-center gap-1 px-2 py-1 bg-white rounded shadow hover:bg-blue-50">
                    {isValidUrl ? (
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(s.url)}`}
                        alt={s.name}
                        className="w-5 h-5 rounded"
                        style={{ minWidth: 20 }}
                      />
                    ) : (
                      <img src={s.icon} alt={s.name} className="w-5 h-5" />
                    )}
                    <input
                      className="text-xs bg-transparent outline-none border-b border-gray-100 focus:border-blue-300 px-1 w-28"
                      value={s.url}
                      onChange={e => setSocials(socials => socials.map((soc, i) => i === idx ? { ...soc, url: e.target.value } : soc))}
                      placeholder={s.name + ' URL'}
                    />
                    {isValidUrl && (
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-500 hover:text-blue-700" title={s.name}>
                        🔗
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

            {/* Blocs dynamiques */}    
          {/* Blocs drag-and-drop */}
          <div className="flex-1 w-full">
            <div className="flex flex-row gap-6 flex-wrap">
              {blocks.map((block, idx) => (
                <div
                  key={block.id}
                  className="relative group transition-all duration-200 hover:shadow-lg"
                  style={{
                    background: block.color,
                    borderRadius: 16,
                    boxShadow: "0 1px 8px #0001",
                    padding: 20,
                    minHeight: 60,
                    position: "relative",
                    width: block.width || 300,
                    height: block.height || 80,
                    maxWidth: "100%",
                    cursor: "move",
                    userSelect: "none",
                    resize: "both",
                    overflow: "auto"
                  }}
                  draggable
                  onDragStart={e => {
                    e.dataTransfer.setData("block", idx.toString());
                    e.dataTransfer.effectAllowed = "move";
                  }}
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => {
                    const from = Number(e.dataTransfer.getData("block"));
                    if (from !== idx) moveBlock(from, idx);
                  }}
                  onMouseUp={e => {
                    // Permet de sauvegarder la taille personnalisée après resize
                    const el = e.currentTarget;
                    const newWidth = el.offsetWidth;
                    const newHeight = el.offsetHeight;
                    setBlockSize(block.id, newWidth, newHeight);
                  }}
                >
                  {/* Drag handle */}
                  <span className="absolute left-2 top-2 cursor-grab text-gray-400 text-xl" title="Déplacer">☰</span>
                  {/* Supprimer bloc */}
                  <button
                    className="absolute right-2 top-2 text-red-500 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-red-100"
                    title="Supprimer"
                    onClick={() => removeBlock(block.id)}
                  >
                    ✕
                  </button>
                  {/* Edition du contenu selon le type */}
                  {block.type === "link" && (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        {block.content && /^https?:\/\//.test(block.content) ? (
                          <img
                            src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(block.content)}`}
                            alt="favicon"
                            className="w-5 h-5 rounded"
                            style={{ minWidth: 20 }}
                          />
                        ) : (
                          <span className="text-blue-500 text-xl">🔗</span>
                        )}
                        <input
                          className="w-full bg-transparent outline-none border-b border-blue-200 focus:border-blue-500 transition text-blue-700 px-1 py-1"
                          value={block.content}
                          onChange={e => setBlockContent(block.id, e.target.value)}
                          placeholder="https://votre-lien.com"
                          type="url"
                          pattern="https?://.+"
                        />
                        {block.content && /^https?:\/\//.test(block.content) && (
                          <a href={block.content} target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-500 hover:text-blue-700" title="Ouvrir le lien">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M14 3h7v7m0-7L10 14"/><path stroke="currentColor" strokeWidth="2" d="M5 12v7a2 2 0 0 0 2 2h7"/></svg>
                          </a>
                        )}
                      </div>
                      {block.content && !/^https?:\/\//.test(block.content) && (
                        <span className="text-xs text-red-400">Lien invalide</span>
                      )}
                    </div>
                  )}
                  {block.type === "image" && (
                    <div className="flex flex-col gap-2">
                      {block.content && (
                        <img src={block.content} alt="img" className="w-full h-auto rounded" style={{ maxHeight: block.height - 40 || 160, objectFit: "cover" }} />
                      )}
                    </div>
                  )}
                  {block.type === "video" && (
                    <div className="flex flex-col gap-2">
                      {block.content && (
                        <video src={block.content} controls className="w-full rounded" style={{ height: block.height - 40 || 160 }} />
                      )}
                    </div>
                  )}
                  {block.type === "file" && (
                    <div className="flex flex-col gap-2">
                      {block.content && (
                        <a href={block.content} download className="text-xs text-blue-500 underline">Télécharger le fichier</a>
                      )}
                    </div>
                  )}
                  {block.type === "text" && (
                    <textarea
                      className="w-full bg-transparent outline-none"
                      value={block.content}
                      onChange={e => setBlockContent(block.id, e.target.value)}
                      rows={2}
                      placeholder="Texte..."
                    />
                  )}
                  {block.type === "section" && (
                    <div>
                      <input
                        className="font-bold text-lg bg-transparent outline-none w-full mb-2"
                        value={block.title}
                        onChange={e => setBlocks(blocks => blocks.map(b => b.id === block.id ? { ...b, title: e.target.value } : b))}
                        placeholder="Titre de la section..."
                      />
                      <textarea
                        className="w-full bg-transparent outline-none"
                        value={block.content}
                        onChange={e => setBlockContent(block.id, e.target.value)}
                        rows={2}
                        placeholder="Contenu..."
                      />
                    </div>
                  )}
                  {block.type === "color" && (
                    <div>
                      <textarea
                        className="w-full bg-transparent outline-none"
                        value={block.content}
                        onChange={e => setBlockContent(block.id, e.target.value)}
                        rows={2}
                        placeholder="Bloc coloré..."
                      />
                      <div className="flex items-center gap-2 mt-2">
                        <input type="color" value={block.color} onChange={e => setColor(block.id, e.target.value)} className="w-8 h-8 border-none" />
                        <span className="text-xs text-gray-400">Personnaliser la couleur</span>
                      </div>
                    </div>
                  )}
                  {/* ...supprimé la box de redimensionnement... */}
                </div>
              ))}
            </div>
            {/* Barre d'ajout fixe en bas */}
            <div className="fixed top-1/2 left-0 z-50 flex flex-col items-center -translate-y-1/2 pl-2">
              <div className="flex flex-col gap-2 bg-white rounded-xl shadow px-2 py-4">
                <button className="p-2 bg-white hover:bg-gray-100 rounded shadow" title="Lien" onClick={() => addBlock("link")}><Link /></button>
                <button className="p-2 bg-white hover:bg-gray-100 rounded shadow" title="Image" onClick={() => imageInputRef.current?.click()}><ImagePlus /></button>
                <button className="p-2 bg-white hover:bg-gray-100 rounded shadow" title="Vidéo" onClick={() => videoInputRef.current?.click()}><Video/></button>
                <button className="p-2 bg-white hover:bg-gray-100 rounded shadow" title="Texte" onClick={() => addBlock("text")}><Text/></button>
                <button className="p-2 bg-white hover:bg-gray-100 rounded shadow" title="Section" onClick={() => addBlock("section")}><Box/></button>
                {/* Inputs cachés pour upload direct */}
                <input
                  type="file"
                  accept="image/*"
                  ref={imageInputRef}
                  style={{ display: "none" }}
                  onChange={e => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = ev => {
                        addBlock("image", ev.target?.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                    e.target.value = "";
                  }}
                />
                <input
                  type="file"
                  accept="video/*"
                  ref={videoInputRef}
                  style={{ display: "none" }}
                  onChange={e => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = ev => {
                        addBlock("video", ev.target?.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                    e.target.value = "";
                  }}
                />
              
              </div>
            </div>
          </div>
        </div>
      </div>
  );}

