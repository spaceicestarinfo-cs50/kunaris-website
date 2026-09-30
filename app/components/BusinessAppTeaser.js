const labels={
  en:[
    ["Weekly menu","Pineapple buns","Beef & potato buns","Review order"],
    ["Cake orders","Birthday cake","Flavour & pickup date","Request a cake"],
    ["Book a haircut","Cut & style","Colour service","Choose a time"],
    ["Nail appointments","Classic manicure","Custom nail art","Choose a design"],
    ["Trial lessons","Beginner French","Conversation practice","Request a trial"],
    ["Coaching sessions","Private training","Music lesson","Book a session"],
    ["Handmade collection","New collection","Custom pieces","Request an item"],
    ["Flowers & gifts","Seasonal bouquet","Delivery & card","Choose a bouquet"],
    ["Pet care","Home feeding","Care dates","Request care"],
    ["Cleaning requests","Regular cleaning","Address & home size","Request a visit"],
    ["Photo portfolio","Portraits","Event photography","Enquire about a shoot"],
    ["My studio","Selected work","Services & contact","Discuss a project"],
  ],
  fr:[
    ["Menu de la semaine","Brioches à l’ananas","Brioches au bœuf","Voir la commande"],
    ["Gâteaux sur mesure","Gâteau d’anniversaire","Parfum et retrait","Demander un gâteau"],
    ["Rendez-vous coiffure","Coupe et coiffage","Coloration","Choisir une heure"],
    ["Rendez-vous onglerie","Manucure classique","Nail art","Choisir un style"],
    ["Cours d’essai","Français débutant","Conversation","Demander un essai"],
    ["Séances individuelles","Entraînement privé","Cours de musique","Réserver une séance"],
    ["Créations artisanales","Nouvelle collection","Pièces sur mesure","Demander un article"],
    ["Fleurs et cadeaux","Bouquet de saison","Livraison et carte","Choisir un bouquet"],
    ["Garde d’animaux","Visite à domicile","Dates de garde","Demander une garde"],
    ["Services de ménage","Entretien régulier","Adresse et superficie","Demander une visite"],
    ["Portfolio photo","Portraits","Événements","Demander une séance"],
    ["Mon studio","Projets choisis","Services et contact","Parlons du projet"],
  ],
  zh:[
    ["本周菜单","手工菠萝包","土豆牛肉包","查看订单"],
    ["定制蛋糕","生日蛋糕","口味与取货日期","预订蛋糕"],
    ["预约理发","剪发造型","染发护理","选择时段"],
    ["美甲预约","经典美甲","手绘创意款","选择款式"],
    ["课程试听","法语入门","口语练习","预约试听"],
    ["一对一课程","私人训练","音乐课程","预约体验"],
    ["手作小铺","新品展示","专属定制","提交定制需求"],
    ["花与礼物","当季花束","配送与贺卡","选择花束"],
    ["宠物照护","上门喂养","照护日期","提交照护需求"],
    ["上门清洁","日常清洁","地址与房屋面积","预约服务"],
    ["摄影作品集","个人肖像","活动跟拍","咨询拍摄"],
    ["我的工作室","精选作品","服务与联系方式","聊聊合作"],
  ]
};

export default function BusinessAppTeaser({locale,index}){
  const [title,first,second,action]=labels[locale][index];
  const mode=index===0?"menu":[2,3,4,5,8].includes(index)?"appointment":[10,11].includes(index)?"portfolio":"request";
  return <div className={`appTeaserStage appTeaserStage--${mode}`} aria-hidden="true"><div className="appTeaserPhone"><div className="appTeaserNotch"/><div className="appTeaserScreen"><div className="appTeaserBar"><b>{title}</b><span>☰</span></div><img className="appTeaserPhoto" src={`/samples/${String(index+1).padStart(2,"0")}.webp`} alt="" loading="lazy"/>
    <div className="appTeaserContent"><div className="appTeaserLine"><b>{first}</b><span>{index===0?"$3.50":"↗"}</span></div><div className="appTeaserLine"><b>{second}</b><span>{index===0?"$4.00":"↗"}</span></div>{mode==="appointment"&&<div className="appTeaserSlots"><span>10:00</span><b>14:00</b><span>16:00</span></div>}<div className="appTeaserAction">{action}<span>→</span></div></div></div><div className="appTeaserHome"/></div></div>;
}
