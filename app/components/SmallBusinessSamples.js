"use client";

import {useEffect, useState} from "react";

const samples = {
  en: {
    intro:"Sample designs · tap to view", close:"Close preview", sample:"Design concept", action:["View menu", "Request a time"],
    categories:[
      ["This week's menu","Choose pickup time","Pineapple buns","Fresh soup"],
      ["Made to order","Choose pickup date","Birthday cake","Custom treats"],
      ["Hair studio","Book a haircut","Cut & style","Colour refresh"],
      ["Nail studio","Choose a time","Classic manicure","Nail art"],
      ["Learn together","Book a trial class","French lessons","Online tutoring"],
      ["Move & create","Book a session","Personal training","Music lesson"],
      ["Handmade with care","Ask for a custom piece","Small collection","Made for you"],
      ["Flowers & gifts","Request delivery","Seasonal bouquet","Gift box"],
      ["Care for your pet","Check availability","Pet sitting","Home visit"],
      ["A helping hand","Request a visit","Home cleaning","One-time service"],
      ["Moments captured","Ask about a date","Portraits","Events"],
      ["Hello, I'm here","Let's talk","My work","What I do"],
      ["Your little business","Tell us your idea","Your services","Your customers"],
    ]
  },
  fr: {
    intro:"Idées de design · cliquez pour voir", close:"Fermer l’aperçu", sample:"Concept visuel", action:["Voir la sélection", "Demander un créneau"],
    categories:[
      ["Menu de la semaine","Choisir le retrait","Brioches maison","Soupe du jour"],
      ["Fait sur commande","Choisir une date","Gâteaux","Douceurs maison"],
      ["Salon de coiffure","Réserver","Coupe","Coloration"],
      ["Studio onglerie","Choisir une heure","Manucure","Nail art"],
      ["Apprendre ensemble","Cours d’essai","Cours de français","Soutien en ligne"],
      ["Bouger et créer","Réserver un cours","Coaching","Musique"],
      ["Créé à la main","Demande sur mesure","Collection","Pièce unique"],
      ["Fleurs et cadeaux","Demander une livraison","Bouquet","Coffret cadeau"],
      ["Soins pour animaux","Voir les disponibilités","Garde","Visite à domicile"],
      ["Coup de main","Demander un service","Ménage","Intervention unique"],
      ["Vos beaux moments","Demander une date","Portraits","Événements"],
      ["Bonjour, je suis là","Échangeons","Mes projets","Mes services"],
      ["Votre activité","Présentez votre idée","Vos services","Vos clients"],
    ]
  },
  zh: {
    intro:"设计示意 · 点击查看", close:"关闭预览", sample:"设计概念图", action:["查看菜单", "预约咨询"],
    categories:[
      ["本周私厨菜单","选择取餐时间","手工菠萝包","每日炖汤"],
      ["用心烘焙","填写取货日期","生日蛋糕","手工甜点"],
      ["发型工作室","预约理发","剪发造型","染发护理"],
      ["美甲工作室","选择时间","精致美甲","创意款式"],
      ["一起学起来","预约试听","法语课程","线上辅导"],
      ["运动与音乐","预约体验","私人训练","音乐课程"],
      ["手作小铺","定制一件","手作精选","专属定制"],
      ["花与礼物","预约配送","当季花束","心意礼盒"],
      ["宠物照护","查询档期","寄养服务","上门喂养"],
      ["上门好帮手","提交需求","家庭清洁","单次服务"],
      ["定格好时光","咨询档期","人像摄影","活动跟拍"],
      ["你好，这是我的主页","联系我","作品展示","我的服务"],
      ["你的小生意","告诉我们想法","你的服务","你的客人"],
    ]
  }
};

const categoryArt=["🥟","🍰","✂️","💅","📖","🎵","🧶","💐","🐾","🧹","📷","✨","💡"];
const categoryColors=["#e5c5a5","#edced0","#cdd9d0","#e7cbd6","#d0d7e8","#dbcfdc","#e9d9be","#e3d5ca","#d1dfc7","#d0ddd9","#d6d0c5","#d5dfe1","#dcd6c7"];

export default function SmallBusinessSamples({locale, index}) {
  const [selected,setSelected]=useState(null);
  const t=samples[locale]||samples.en;
  const d=t.categories[index];
  useEffect(()=>{
    if(selected===null)return;
    const onKey=e=>{if(e.key==="Escape")setSelected(null)};
    document.addEventListener("keydown",onKey);
    document.body.style.overflow="hidden";
    return()=>{document.removeEventListener("keydown",onKey);document.body.style.overflow=""};
  },[selected]);
  const screen=(variant,large=false)=><div className={`sampleScreen sampleScreen--${variant}${large?" sampleScreen--large":""}`} style={{"--sample-accent":categoryColors[index]}}>
    <div className="sampleScreenTop"><i/><span>{d[0]}</span><b>☰</b></div>
    <div className="sampleScreenHero"><span className="sampleSun"/><span className="sampleHill"/><span className="sampleArt" aria-hidden="true">{categoryArt[index]}</span><strong>{variant===0?d[0]:d[1]}</strong></div>
    <div className="sampleScreenBody"><small>{variant===0?d[2]:d[1]}</small><div className="sampleSampleTiles"><span>{d[2]}</span><span>{d[3]}</span></div><em>{t.action[variant]} →</em></div>
  </div>;
  return <div className="sampleArea">
    <p className="sampleIntro">{t.intro}</p>
    <div className="sampleChoices">{[0,1].map(v=><button type="button" key={v} onClick={()=>setSelected(v)} aria-label={`${t.sample}: ${d[0]} ${v+1}`}>{screen(v)}</button>)}</div>
    {selected!==null&&<div className="sampleOverlay" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}>
      <div className="sampleDialog" role="dialog" aria-modal="true" aria-label={`${t.sample}: ${d[0]}`}>
        <button className="sampleClose" type="button" onClick={()=>setSelected(null)} aria-label={t.close}>×</button>
        <p>{t.sample} · {index+1}/{t.categories.length}</p>{screen(selected,true)}
      </div>
    </div>}
  </div>;
}
