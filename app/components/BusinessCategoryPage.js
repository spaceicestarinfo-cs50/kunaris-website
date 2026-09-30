import SiteHeader from "./SiteHeader";
import {content} from "./SmallBusinessPage";
import CookPhoneSamples from "./CookPhoneSamples";

// Two task-specific interface concepts per industry. They are illustrations, not deployed apps.
const designs=[
  {kind:"food",tone:"peach",symbol:"🥟",en:["Weekly kitchen menu","Pickup order","Pineapple bun","Beef buns","Choose quantity","Pickup: Saturday, 2–4 pm"],fr:["Menu de la semaine","Commande à retirer","Brioche maison","Brioches au bœuf","Choisir la quantité","Retrait : samedi, 14 h–16 h"],zh:["本周私厨菜单","取餐订单","手工菠萝包","土豆牛肉包","选择份数","取餐：周六 14:00–16:00"]},
  {kind:"food",tone:"rose",symbol:"🍰",en:["Custom cake gallery","Cake request","Birthday cake","Cupcake box","Choose flavour","Pickup date and message"],fr:["Galerie de gâteaux","Commande de gâteau","Gâteau d’anniversaire","Boîte de cupcakes","Choisir le parfum","Date et message"],zh:["定制蛋糕展示","蛋糕预订","生日蛋糕","杯子蛋糕礼盒","选择口味","取货日期与祝福语"]},
  {kind:"booking",tone:"ink",symbol:"✂",en:["Hair services","Salon booking","Cut & style","Colour refresh","Choose a service","Preferred appointment time"],fr:["Services coiffure","Rendez-vous coiffure","Coupe et coiffage","Coloration","Choisir un service","Horaire souhaité"],zh:["发型服务展示","预约理发","剪发造型","染发护理","选择服务项目","希望预约的时间"]},
  {kind:"gallery",tone:"lilac",symbol:"✦",en:["Nail lookbook","Nail appointment","Classic manicure","Custom nail art","Choose a design","Upload an inspiration photo"],fr:["Galerie manucure","Rendez-vous onglerie","Manucure classique","Nail art personnalisé","Choisir un style","Ajouter une photo d’inspiration"],zh:["美甲款式作品集","美甲预约","经典美甲","手绘创意款","选择喜欢的款式","上传参考款式照片"]},
  {kind:"schedule",tone:"sky",symbol:"Aa",en:["Class timetable","Trial lesson","Beginner French","Conversation practice","Choose a level","Available trial times"],fr:["Horaire des cours","Cours d’essai","Français débutant","Conversation","Choisir un niveau","Créneaux d’essai"],zh:["课程时间表","试听申请","法语入门","口语练习","选择学习级别","可试听的时间"]},
  {kind:"schedule",tone:"sage",symbol:"♪",en:["Coaching sessions","Book a lesson","Private training","Music coaching","Choose a session","Your learning goal"],fr:["Séances proposées","Réserver un cours","Entraînement individuel","Cours de musique","Choisir une séance","Votre objectif"],zh:["训练课程介绍","预约体验课","私人训练","音乐指导","选择课程形式","你的学习目标"]},
  {kind:"catalog",tone:"sand",symbol:"✿",en:["Handmade collection","Custom order","Handmade piece","Personalized gift","Choose a colour","Size and engraving details"],fr:["Collection artisanale","Commande personnalisée","Création artisanale","Cadeau personnalisé","Choisir une couleur","Taille et gravure"],zh:["手作商品橱窗","定制需求单","手工小物","专属礼物","选择颜色","尺寸与刻字要求"]},
  {kind:"catalog",tone:"rose",symbol:"❀",en:["Seasonal flowers","Gift delivery","Seasonal bouquet","Gift arrangement","Select an arrangement","Delivery date and card message"],fr:["Fleurs de saison","Livraison cadeau","Bouquet de saison","Composition cadeau","Choisir un bouquet","Date et message sur la carte"],zh:["当季花束展示","鲜花礼物配送","当季花束","定制礼盒","选择花束款式","送货日期与贺卡留言"]},
  {kind:"calendar",tone:"sage",symbol:"🐾",en:["Pet care availability","Care request","Daytime sitting","Home feeding","Select care dates","Pet information and routine"],fr:["Disponibilités de garde","Demande de garde","Garde de jour","Visite à domicile","Choisir les dates","Animal et habitudes"],zh:["宠物照护档期","宠物寄养申请","日间寄养","上门喂养","选择照护日期","宠物情况和习惯"]},
  {kind:"request",tone:"sky",symbol:"⌂",en:["Home services","Request a visit","Regular cleaning","One-time deep clean","Select a service","Address and space size"],fr:["Services à domicile","Demander une visite","Entretien régulier","Grand ménage","Choisir un service","Adresse et superficie"],zh:["上门清洁服务","清洁需求单","日常清洁","单次深度清洁","选择清洁项目","地址和房屋面积"]},
  {kind:"gallery",tone:"ink",symbol:"▣",en:["Photo portfolio","Shoot enquiry","Portrait session","Event coverage","Select a package","Date, place and shoot style"],fr:["Portfolio photo","Demande de séance","Portrait","Événement","Choisir une formule","Date, lieu et style"],zh:["摄影作品集","拍摄咨询","个人肖像","活动跟拍","选择拍摄套餐","日期、地点与拍摄风格"]},
  {kind:"portfolio",tone:"sand",symbol:"✧",en:["Personal portfolio","Work with me","Selected projects","Services","Explore my work","Describe your project"],fr:["Portfolio personnel","Travailler ensemble","Projets choisis","Services","Voir mes réalisations","Décrire votre projet"],zh:["个人作品网站","合作咨询","精选作品","服务介绍","浏览我的作品","描述你的项目需求"]},
  {kind:"portfolio",tone:"lilac",symbol:"＋",en:["Your business page","Your own workflow","Your services","How it works","View the possibilities","Tell us your idea"],fr:["Votre page d’activité","Votre parcours client","Vos services","Fonctionnement","Voir les possibilités","Décrire votre idée"],zh:["属于你的小生意页面","你的接单流程","服务展示","合作方式","看看可以怎么做","告诉我们你的想法"]},
];

const ui={
  en:{back:"← All small businesses",label:"DESIGN EXAMPLES",intro:"See how a clear introduction page and a practical request tool would work for this business. Each example shows a different job for the page.",one:"Introduce your work",two:"Collect a request",sample:"CONCEPT PREVIEW",note:"Illustrative content only. We plan the real features, imagery and service details together before development.",cta:"Discuss a version for my business →",features:"Services",how:"How it works",send:"Send request",next:"You confirm the request before it is final",date:"Choose a date",details:"Your details",availability:"Availability",pick:"Choose",step:"STEP 01 / 02"},
  fr:{back:"← Toutes les petites activités",label:"EXEMPLES DE DESIGN",intro:"Découvrez une page qui présente le travail et un outil qui recueille les demandes. Chacun remplit un rôle précis.",one:"Présenter l’activité",two:"Recueillir une demande",sample:"APERÇU CONCEPTUEL",note:"Contenu illustratif. Nous définissons ensemble les fonctions, les images et les services avant de créer votre outil.",cta:"Discuter de mon activité →",features:"Services",how:"Comment ça marche",send:"Envoyer la demande",next:"Vous confirmez la demande avant sa validation",date:"Choisir une date",details:"Vos coordonnées",availability:"Disponibilités",pick:"Choisir",step:"ÉTAPE 01 / 02"},
  zh:{back:"← 返回全部小生意",label:"页面设计示意",intro:"一页负责介绍生意、展示服务；另一页负责让客人提交订单或预约。两个页面各做一件事，让客人一看就知道怎么用。",one:"展示服务与作品",two:"接单或预约工具",sample:"设计示意",note:"内容和图片仅为示意。实际服务、功能和视觉风格会在制作前与你确认。",cta:"聊聊我的小生意 →",features:"服务项目",how:"如何下单",send:"提交需求",next:"提交后由商家确认，预约才算成立",date:"选择日期",details:"联系方式",availability:"可预约时段",pick:"选择",step:"第 1 步 / 共 2 步"}
};

function Preview({design,locale,variant,labels,index}){
  const [overview,request,item1,item2,field1,field2]=design[locale];
  const image=`/samples/${String(index+1).padStart(2,"0")}.webp`;
  const order=["food","catalog"].includes(design.kind), booking=["booking","gallery","schedule","calendar"].includes(design.kind);
  const mode=order?"order":booking?"booking":"inquiry";
  return <div className={`industryPreview industryPreview--${design.tone} industryPreview--${mode}`}>
    <div className="industryPreviewTop"><span className="industryMark">{overview.slice(0,1)}</span><b>{overview}</b><span className="industryTopMenu">☰</span></div>
    {!variant?<>
      <div className="industryVisual"><img src={image} alt=""/><div className="industryVisualCopy"><small>{labels.features}</small><h3>{overview}</h3></div></div>
      <div className="industryDisplayContent"><p>{labels.how}</p><div className="industryServiceRows"><div><span>01</span><b>{item1}</b><i>↗</i></div><div><span>02</span><b>{item2}</b><i>↗</i></div></div><div className="industryDisplayNext">{labels.pick} · {field1} <span>→</span></div></div>
    </>:<div className="industryActionContent">
      <div className="industryActionHeader"><span>{labels.step}</span><h3>{request}</h3><div className="industryStepTrack"><i/><i/></div></div>
      {mode==="order"?<><p className="industryGroupTitle">{labels.pick}</p><div className="industryOrderRow"><img src={image} alt=""/><b>{item1}</b><span>− &nbsp; 1 &nbsp; +</span></div><div className="industryOrderRow"><img src={image} alt=""/><b>{item2}</b><span>− &nbsp; 0 &nbsp; +</span></div><p className="industryGroupTitle">{field2}</p><div className="industryChoiceRow"><span>{field2}</span><i>⌄</i></div></>:
        mode==="booking"?<><p className="industryGroupTitle">{field1}</p><div className="industryChoiceRow"><span>{item1}</span><i>✓</i></div><div className="industryChoiceRow"><span>{item2}</span><i>＋</i></div><p className="industryGroupTitle">{labels.date}</p><div className="industryCalendar">{(locale==="zh"?["周一","周二","周三","周四"]:locale==="fr"?["lun.","mar.","mer.","jeu."]:["Mon","Tue","Wed","Thu"]).map(day=><span key={day}>{day}</span>)}<b>12</b><b>13</b><b>14</b><b>15</b></div><div className="industryChoiceRow"><span>{field2}</span><i>⌄</i></div></>:
        <><div className="industryRequestPhoto"><img src={image} alt=""/><div><b>{item1}</b><small>{item2}</small></div></div><p className="industryGroupTitle">{field1}</p><div className="industryChoiceRow"><span>{field1}</span><i>⌄</i></div><p className="industryGroupTitle">{field2}</p><div className="industryChoiceRow"><span>{field2}</span><i>✎</i></div></>}
      <p className="industryContactPrompt">{labels.details} &nbsp;·&nbsp; {labels.next}</p><div className="industryActionSubmit">{labels.send}<span>→</span></div>
    </div>}
  </div>;
}

export default function BusinessCategoryPage({locale="en",id}){
  const index=Number(id)-1;
  if(!Number.isInteger(index)||index<0||index>=designs.length)return null;
  const design=designs[index], t=ui[locale], [name,description]=content[locale].examples[index], prefix=locale==="en"?"":`/${locale}`;
  return <main className="forYouPage industryPage"><SiteHeader active="you" locale={locale}/><div className="fyShell industryDetail"><a className="backLink" href={`${prefix}/for-you/small-business`}>{t.back}</a><p className="eyebrow">{t.label} / {String(index+1).padStart(2,"0")}</p><h1>{name}</h1><p className="industryDescription">{description}</p>{index===0?<CookPhoneSamples locale={locale}/>:<><p className="industryIntro">{t.intro}</p><div className="industryExamples">{[0,1].map(variant=><section key={variant} className="industryExample"><div className="industryExampleTitle"><span>{variant?"02":"01"}</span><h2>{variant?t.two:t.one}</h2><small>{t.sample}</small></div><Preview design={design} locale={locale} variant={variant} labels={t} index={index}/></section>)}</div><p className="industryNote">{t.note}</p></>}<a className="smallBusinessButton" href={`${prefix}/contact`}>{t.cta}</a></div></main>;
}
