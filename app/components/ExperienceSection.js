const copy={
  en:{
    eyebrow:"FROM OUR EARLY PROJECTS",title:"Tools that make everyday work easier.",intro:"These examples come from projects developed for teams connected with Kunaris. They show how a focused tool can improve the experience for customers and reduce repetitive work for a small team.",
    cards:[
      {name:"Icestar Immigration",type:"Client intake & planning",text:"Online application forms help clients provide information in one place, while an Express Entry score calculator gives them a practical starting point. Together, these tools help the team spend less time collecting basic details and more time reviewing individual cases.",live:"In use: online intake forms · EE score calculator",next:"In development: assessment form"},
      {name:"Éducation Icestar",type:"Language learning",text:"An online French level test helps prospective students understand where to start and gives teachers a clearer picture before the first conversation. Interactive French games are being developed to help learners engage with the language.",live:"In use: French level test",next:"In development: French learning games"},
    ],
    note:"These are projects within our partner network; they are shared as practical examples, not independent reviews."
  },
  fr:{
    eyebrow:"NOS PREMIERS PROJETS",title:"Des outils qui simplifient le travail au quotidien.",intro:"Ces exemples proviennent de projets réalisés pour des équipes liées à Kunaris. Ils montrent comment un outil ciblé peut faciliter le parcours des clients et réduire les tâches répétitives d’une petite équipe.",
    cards:[
      {name:"Icestar Immigration",type:"Formulaires clients et planification",text:"Les formulaires en ligne rassemblent les renseignements des clients au même endroit. Un calculateur de points Entrée express leur donne un premier repère. L’équipe peut ainsi consacrer moins de temps à recueillir les données de base et davantage à examiner chaque situation.",live:"En service : formulaires de demande · calculateur EE",next:"En développement : formulaire d’évaluation"},
      {name:"Éducation Icestar",type:"Apprentissage du français",text:"Le test de français en ligne aide les futurs élèves à situer leur niveau et donne aux enseignants une meilleure idée de leurs besoins avant le premier échange. Des jeux interactifs de français sont en cours de développement.",live:"En service : test de niveau de français",next:"En développement : jeux pour apprendre le français"},
    ],
    note:"Ces projets font partie de notre réseau de partenaires; ce sont des exemples concrets, et non des avis indépendants."
  },
  zh:{
    eyebrow:"已经落地的项目",title:"好用的小工具，能帮团队少做重复工作。",intro:"下面是 Kunaris 参与开发、供合作团队使用的项目。它们也许不复杂，却能让客人先填写基本信息，让团队把时间留给真正需要沟通的事情。",
    cards:[
      {name:"Icestar Immigration",type:"客户填表与前期评估",text:"在线申请表让客户集中填写资料，EE 打分工具帮助客户先了解自己的分数。团队可以减少反复追问基础信息，把更多时间用在核对具体情况上。",live:"已使用：在线申请表 · EE 打分工具",next:"开发中：留学移民评估表"},
      {name:"Éducation Icestar",type:"法语学习与学生引导",text:"在线法语测试让潜在学生先了解自己的水平，老师也能在第一次沟通前看到更清楚的起点。法语互动小游戏正在开发，用更轻松的方式吸引学生开始学习。",live:"已使用：在线法语水平测试",next:"开发中：法语学习小游戏"},
    ],
    note:"以上为 Kunaris 合作网络中的实际项目经验，并非独立第三方评价。"
  }
};

export default function ExperienceSection({locale="en"}){
  const t=copy[locale];
  return <section id="experience" className="experienceSection"><div className="shell">
    <p className="eyebrow">{t.eyebrow}</p><h2>{t.title}</h2><p className="experienceIntro">{t.intro}</p>
    <div className="experienceCards">{t.cards.map(card=><article key={card.name}><p className="experienceType">{card.type}</p><h3>{card.name}</h3><p>{card.text}</p><div className="experienceTags"><span>{card.live}</span><span>{card.next}</span></div></article>)}</div>
    <p className="experienceNote">{t.note}</p>
  </div></section>;
}
