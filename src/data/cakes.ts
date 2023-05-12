export default [
  {
    _id: {
      $oid: "6449fd68e0714355491b85c6",
    },
    route: "/cakes/bento-cake",
    title: "Bento Cake",
    type: "bento-cake",
    pricing: "from ₱170 PHP",
    info: [
      "🚨 Price Increase Depends on Design & Add-Ons",
      "🎂 Round or Heart Shape",
      "🥄 Comes W/ Spoon",
    ],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646335/cakes/bento/239599791_311216154023994_8336706390727573416_n_vhcsus.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646336/cakes/bento/239013354_309436820868594_5236923271765667136_n_ju0ity.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646334/cakes/bento/240668196_316571510155125_4231303418737928967_n_bpab2u.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646321/cakes/bento/242504214_333837325095210_970439061846684033_n_xhqspu.jpg",
    ],
    radios: [
      {
        defaultValue: "Choco Moist",
        name: "flavor",
        options: ["Choco Moist"],
      },
      {
        name: "shape",
        defaultValue: "Round",
        options: ["Round", "Heart"],
      },
      {
        name: "size",
        defaultValue: "4x2 ₱170",
        options: ["4x2 ₱170"],
      },
    ],
    checkboxes: [
      {
        name: "upgrades",
        options: ["Kraft Box ₱30"],
      },
      {
        name: "addons",
        options: [
          "Sprinkles/Dragees ₱10",
          "Printed Topper ₱10",
          "Polaroid Photo ₱20",
          "Fondant Letters ₱20-30",
        ],
      },
    ],
    sort: "bento",
    album: "https://www.facebook.com/media/set/?set=a.309434577535485&type=3",
  },
  {
    _id: {
      $oid: "6449fdbae0714355491b85c8",
    },
    route: "/cakes/bento-number-cake",
    title: "Bento Number Cake",
    type: "bento-number-cake",
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646378/cakes/bento%20number/286488397_490620449416896_5592879891610369435_n_er3tmp.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646381/cakes/bento%20number/277299257_444123520733256_7983826232697302548_n_fjvlxj.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646365/cakes/bento%20number/263283570_379134847232124_8684438279639457975_n_uflop9.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646362/cakes/bento%20number/273000328_414576917021250_5220234670774166260_n_wyycmb.jpg",
    ],
    pricing: "from ₱150 PHP",
    info: [
      "🚨 Price Increase Depends on Design & Add-Ons",
      "🥄 Comes W/ Spoon",
      "🧁 Whipped Cream Frosting",
    ],
    radios: [
      {
        name: "flavor",
        options: ["Choco Moist"],
        defaultValue: "Choco Moist",
      },
      {
        name: "size",
        options: ["4 inches"],

        defaultValue: "4 inches",
      },
      {
        name: "digits",
        options: ["One ₱150", "Two ₱300"],
        defaultValue: "One ₱150",
      },
    ],
    checkboxes: [
      {
        name: "upgrades",
        options: ["Kraft Box ₱30", "w/ 4pcs Cupcake ₱100"],
      },
      {
        name: "addons",
        options: ["Printed Topper ₱20-30", "Fondant Letters ₱20-30"],
      },
    ],
    sort: "bento",
    album: "https://www.facebook.com/media/set/?set=a.377922194020056&type=3",
  },
  {
    _id: {
      $oid: "6449fef3e0714355491b85d0",
    },
    route: "/cakes/number-cake",
    title: "Number Cake",
    type: "number-cake",
    pricing: "from ₱500 PHP",
    info: [
      "🚨 Price Increase Depends on Design & Add-Ons",
      "🎂 Fondant Letters",
      "🧁 Whipped Cream Frosting",
    ],
    radios: [
      {
        name: "flavor",
        options: ["Choco Moist"],

        defaultValue: "Choco Moist",
      },
      {
        name: "size",
        options: ["10 inches"],

        defaultValue: "10 inches",
      },
      {
        name: "digits",
        options: ["One (#1) ₱500", "One (#0,2-9) ₱650", "Two ₱1300"],
        defaultValue: "One (#1) ₱500",
      },
    ],
    checkboxes: [],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646518/cakes/number/341834905_1498533090677095_3457164394052989162_n_xm3bgk.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646515/cakes/number/341304217_179998304967317_2555326214864869291_n_de1bcw.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646516/cakes/number/277219267_442968567515418_1824336328314807633_n_rsmlov.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646511/cakes/number/278021235_452035469942061_7410147973522467307_n_zmj7cw.jpg",
    ],
    sort: "custom",
    album: "https://www.facebook.com/media/set/?set=a.442968287515446&type=3",
  },
  {
    _id: {
      $oid: "6449ff07e0714355491b85d2",
    },
    route: "/cakes/mini-number-cake",
    title: "Mini Number Cake",
    type: "mini-number-cake",
    pricing: "from ₱350 PHP",
    info: [
      "🚨 Price Increase Depends on Design & Add-Ons",
      "🎂 Fondant Letters",
      "🧁 Whipped Cream Frosting",
    ],
    radios: [
      {
        name: "flavor",
        options: ["Choco Moist"],
        defaultValue: "Choco Moist",
      },
      {
        name: "size",
        options: ["5 inches"],

        defaultValue: "5 inches",
      },
      {
        name: "digits",
        options: ["One ₱350", "Two ₱800"],
        defaultValue: "One ₱350",
      },
    ],
    checkboxes: [],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646535/cakes/number%20mini/307329446_499889612147933_8360939395956161884_n_whujzl.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646538/cakes/number%20mini/311799526_524193863050841_4658357394904488448_n_fxcupw.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646538/cakes/number%20mini/309531616_508676421269252_7211871897560183576_n_wd1mas.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646541/cakes/number%20mini/304750687_545021627310111_793404496071881732_n_dtlxsy.jpg",
    ],
    sort: "custom",
    album: "https://www.facebook.com/media/set/?set=a.512803187198622&type=3",
  },
  {
    _id: {
      $oid: "6449fdefe0714355491b85ca",
    },
    route: "/cakes/bento-bundle",
    title: "Bento Bundle",
    type: "bento-bundle",
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646411/cakes/bento%20bundle/274047035_422819422863666_5155302756378845466_n_waljtw.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646411/cakes/bento%20bundle/275168867_431747938637481_3677213986582370490_n_q2eegq.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646412/cakes/bento%20bundle/277307089_443525400793068_6475703475109261549_n_nvbvj8.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646404/cakes/bento%20bundle/274089221_422819286197013_8172837610161122914_n_qywebm.jpg",
    ],
    pricing: "from ₱250 PHP",
    info: ["🚨 Price Increase Depends on Design & Add-Ons"],
    radios: [
      {
        name: "flavor",
        defaultValue: "Choco Moist",
        options: ["Choco Moist"],
      },
      {
        name: "shape",
        defaultValue: "Round",
        options: ["Round", "Heart"],
      },
      {
        name: "size",
        defaultValue: "4x2",
        options: ["4x2"],
      },
      {
        name: "bundle",
        defaultValue: "w/ 2pcs Cupcake ₱80",
        options: [
          "w/ 2pcs Cupcake ₱250",
          "w/ 5pcs Cupcake ₱370",
          "w/ 8pcs Cupcake ₱470",
        ],
      },
    ],
    checkboxes: [
      {
        name: "addons",
        options: ["Printed Topper ₱20-30", "Fondant Letters/Details  ₱20 & up"],
      },
    ],
    sort: "bento",
    album: "https://www.facebook.com/media/set/?set=a.422807436198198&type=3",
  },
  {
    _id: {
      $oid: "6449fe27e0714355491b85cc",
    },
    route: "/cakes/minimalist-cake",
    title: "Minimalist Cake",
    type: "minimalist-cake",
    pricing: "from ₱300 PHP",
    info: ["🚨 Price Increase Depends on Design & Add-Ons"],
    radios: [
      {
        name: "flavor",
        defaultValue: "Choco Moist",
        options: [
          "Choco Moist",
          "Choco Chiffon",
          "Vanilla Chiffon",
          "Ube Chiffon",
          "Mocha Chiffon",
        ],
      },
      {
        name: "shape",
        defaultValue: "Round",
        options: ["Round", "Heart"],
      },
      {
        name: "size",
        defaultValue: "5x2 ₱300",
        options: ["5x2 ₱300", "5x4 ₱450", "7x2 ₱450", "7x4 ₱850"],
      },
    ],
    checkboxes: [],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646467/cakes/minimalist/241787935_326918785787064_3848301957404113004_n_aymwap.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646461/cakes/minimalist/243202154_337020748110201_5058869935457569286_n_eoh0l8.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646460/cakes/minimalist/243224766_337020488110227_1035733655774011138_n_lpn17v.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646461/cakes/minimalist/240967367_319292223216387_8857322402403740721_n_ogqelu.jpg",
    ],
    sort: "custom",
    album: "https://www.facebook.com/media/set/?set=a.301831111629165&type=3",
  },
  {
    _id: {
      $oid: "6449fe4ae0714355491b85ce",
    },
    route: "/cakes/money-cake",
    title: "Money Cake",
    type: "money-cake",
    pricing: "from ₱750 PHP",
    info: ["🚨 Price Increase Depends on Design & Add-Ons"],
    radios: [
      {
        name: "flavor",
        defaultValue: "Choco Moist",
        options: [
          "Choco Moist",
          "Choco Chiffon",
          "Vanilla Chiffon",
          "Ube Chiffon",
          "Mocha Chiffon",
        ],
      },
      {
        name: "shape",
        defaultValue: "Round",
        options: ["Round"],
      },
      {
        name: "size",
        defaultValue: "7x3 ₱750 (30pcs max bill)",
        options: ["7x3 ₱750 (30pcs max bill)", "7x5 ₱1200 (50pcs max bill)"],
      },
    ],
    checkboxes: [],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646489/cakes/money/276014828_440120714466870_3431955178153519258_n_c8qqwa.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646488/cakes/money/279000372_461667575645517_4104190513285903377_n_o4j27r.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646494/cakes/money/279274906_467176888427919_1774834632659894232_n_cujlmc.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646490/cakes/money/285373726_486471156498492_3868273096455245244_n_parm9h.jpg",
    ],
    sort: "custom",
    album: "https://www.facebook.com/media/set/?set=a.314802583665351&type=3",
  },
  {
    _id: {
      $oid: "6449ff23e0714355491b85d4",
    },
    route: "/cakes/theme-cake",
    title: "Theme Cake",
    type: "theme-cake",
    pricing: "from ₱350 PHP",
    info: ["🚨 Price Increase Depends on Design & Add-Ons"],
    radios: [
      {
        name: "flavor",
        defaultValue: "Choco Moist",
        options: [
          "Choco Moist",
          "Choco Chiffon",
          "Vanilla Chiffon",
          "Ube Chiffon",
          "Mocha Chiffon",
        ],
      },
      {
        name: "shape",
        defaultValue: "Round",
        options: ["Round", "Heart"],
      },
      {
        name: "size",
        defaultValue: "5x2 ₱350",
        options: ["5x2 ₱350", "5x4 ₱500", "7x4 ₱900", "9x4 ₱1600"],
      },
    ],
    checkboxes: [],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646432/cakes/theme/340986981_769348191464320_5130781697956801415_n_g03bli.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646434/cakes/theme/342171802_642993197747226_5152885509340654050_n_alvm4g.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646435/cakes/theme/341572915_126177923772553_788386524619459011_n_nyppvg.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646435/cakes/theme/341275536_950340236148561_924911812335959749_n_sntmam.jpg",
    ],
    sort: "custom",
    album: "https://www.facebook.com/media/set/?set=a.299910155154594&type=3",
  },
  {
    _id: {
      $oid: "6449ff41e0714355491b85d6",
    },
    route: "/cakes/baby-tier-cake",
    title: "Baby Tier Cake",
    type: "baby-tier-cake",
    pricing: "from ₱350 PHP",
    info: ["🚨 Price Increase Depends on Design & Add-Ons"],
    radios: [
      {
        name: "flavor",
        defaultValue: "Choco Moist",
        options: [
          "Choco Moist",
          "Choco Chiffon",
          "Vanilla Chiffon",
          "Ube Chiffon",
          "Mocha Chiffon",
        ],
      },
      {
        name: "shape",
        defaultValue: "Round",
        options: ["Round"],
      },
      {
        name: "size",
        defaultValue: "4x3 | 2x2.25 ₱350",
        options: ["4x3 | 2x2.25 ₱350"],
      },
    ],
    checkboxes: [],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646566/cakes/tier%20baby/262028726_377676887377920_3764481159814570587_n_qehluv.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646565/cakes/tier%20baby/270463385_395892385556370_1516521760643555249_n_ryjzep.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646563/cakes/tier%20baby/310387093_513187710818123_2701390891760178824_n_tuflmz.jpg",
    ],
    sort: "tier",
    album: "https://www.facebook.com/media/set/?set=a.377676680711274&type=3",
  },
  {
    _id: {
      $oid: "6449ff5ce0714355491b85d8",
    },
    route: "/cakes/mini-tier-cake",
    title: "Mini Tier Cake",
    type: "mini-tier-cake",
    pricing: "from ₱650 PHP",
    info: ["🚨 Price Increase Depends on Design & Add-Ons"],
    radios: [
      {
        name: "flavor",
        defaultValue: "Choco Moist",
        options: [
          "Choco Moist",
          "Choco Chiffon",
          "Vanilla Chiffon",
          "Ube Chiffon",
          "Mocha Chiffon",
        ],
      },
      {
        name: "shape",
        defaultValue: "Round",
        options: ["Round"],
      },
      {
        name: "size",
        defaultValue: "5x3 | 3x2.5 ₱650",
        options: ["5x3 | 3x2.5 ₱650"],
      },
    ],
    checkboxes: [],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646591/cakes/tier%20mini/262812233_380368670442075_320688180572110207_n_opcwtn.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646595/cakes/tier%20mini/271143304_397688578710084_7579464834338068423_n_itla8s.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646591/cakes/tier%20mini/302613936_486811386789089_228598862296488512_n_z5vobw.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646596/cakes/tier%20mini/277763783_449470426865232_6103814871018251491_n_ih1wsv.jpg",
    ],
    sort: "tier",
    album: "https://www.facebook.com/media/set/?set=a.380367670442175&type=3",
  },
  {
    _id: {
      $oid: "6449ff92e0714355491b85dc",
    },
    route: "/cakes/small-tier-cake",
    title: "Small Tier Cake",
    type: "small-tier-cake",
    pricing: "from ₱1500 PHP",
    info: ["🚨 Price Increase Depends on Design & Add-Ons"],
    radios: [
      {
        name: "flavor",
        defaultValue: "Choco Moist",
        options: [
          "Choco Moist",
          "Choco Chiffon",
          "Vanilla Chiffon",
          "Ube Chiffon",
          "Mocha Chiffon",
        ],
      },
      {
        name: "shape",
        defaultValue: "Round",
        options: ["Round"],
      },
      {
        name: "size",
        defaultValue: "7x5 | 5x3 ₱1500",
        options: ["7x5 | 5x3 ₱1500"],
      },
    ],
    checkboxes: [],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646625/cakes/tier%20small/272444114_408768177602124_5141190135202257324_n_lasxys.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646623/cakes/tier%20small/271799143_402558914889717_451673151045659077_n_wtshba.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646616/cakes/tier%20small/274224099_423277719484503_5752196648585137277_n_q6uzoj.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646613/cakes/tier%20small/309850688_511389414331286_2744300149484314796_n_atufry.jpg",
    ],
    sort: "tier",
    album: "https://www.facebook.com/media/set/?set=a.326922685786674&type=3",
  },
  {
    _id: {
      $oid: "6449ffa6e0714355491b85de",
    },
    route: "/cakes/big-tier-cake",
    title: "Big Tier Cake",
    type: "big-tier-cake",
    pricing: "from ₱2600 PHP",
    info: ["🚨 Price Increase Depends on Design & Add-Ons"],
    radios: [
      {
        name: "flavor",
        defaultValue: "Choco Moist",
        options: [
          "Choco Moist",
          "Choco Chiffon",
          "Vanilla Chiffon",
          "Ube Chiffon",
          "Mocha Chiffon",
        ],
      },
      {
        name: "shape",
        defaultValue: "Round",
        options: ["Round"],
      },
      {
        name: "size",
        defaultValue: "9x4 | 7x4 ₱2600",
        options: ["9x4 | 7x4 ₱2600"],
      },
    ],
    checkboxes: [],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646638/cakes/tier%20big/317642458_564938698976357_8265570710492379660_n_irh9db.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646637/cakes/tier%20big/327610518_555615773263975_3638597737166668897_n_cqvgo6.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646640/cakes/tier%20big/289850561_500756731736601_3989608960557270902_n_eylzfk.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646635/cakes/tier%20big/340211659_540431211592425_1627383929371515153_n_vtc80n.jpg",
    ],
    sort: "tier",
    album: "https://www.facebook.com/media/set/?set=a.500755855070022&type=3",
  },
  {
    _id: {
      $oid: "6449ffbfe0714355491b85e0",
    },
    route: "/cakes/small-3-tier-cake",
    title: "Small 3 Tier Cake",
    type: "small-3-tier-cake",
    pricing: "from ₱2200 PHP",
    info: ["🚨 Price Increase Depends on Design & Add-Ons"],
    radios: [
      {
        name: "flavor",
        defaultValue: "Choco Moist",
        options: [
          "Choco Moist",
          "Choco Chiffon",
          "Vanilla Chiffon",
          "Ube Chiffon",
          "Mocha Chiffon",
        ],
      },
      {
        name: "shape",
        defaultValue: "Round",
        options: ["Round"],
      },
      {
        name: "size",
        defaultValue: "7x4 | 5x4 | 4x4 ₱2200",
        options: ["7x4 | 5x4 | 4x4 ₱2200"],
      },
    ],
    checkboxes: [],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646735/cakes/tier%20small%203/301221522_540641871081420_5322157655041135661_n_ggolmx.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646650/cakes/tier%20small%203/341010807_145378228486611_6996149937588085694_n_yq0yzr.jpg",
    ],
    sort: "tier",
  },
  {
    _id: {
      $oid: "6449ffd6e0714355491b85e2",
    },
    route: "/cakes/3-tier-cake",
    title: "3 Tier Cake",
    type: "3-tier-cake",
    pricing: "from ₱3500 PHP",
    info: ["🚨 Price Increase Depends on Design & Add-Ons"],
    radios: [
      {
        name: "flavor",
        defaultValue: "Choco Moist",
        options: [
          "Choco Moist",
          "Choco Chiffon",
          "Vanilla Chiffon",
          "Ube Chiffon",
          "Mocha Chiffon",
        ],
      },
      {
        name: "shape",
        defaultValue: "Round",
        options: ["Round"],
      },
      {
        name: "size",
        defaultValue: "9x4 |  7x4 | 5x4 ₱3500",
        options: ["9x4 |  7x4 | 5x4 ₱3500"],
      },
    ],
    checkboxes: [],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646822/cakes/tier%203/337682583_721621466115335_831895035612238752_n_krcu3h.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646826/cakes/tier%203/340778795_176544791884648_2850780636366661152_n_r3znxh.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646824/cakes/tier%203/336351443_588344126512831_4168147468718800990_n_xc3qz5.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646830/cakes/tier%203/273673588_419275119884763_7701642744834601501_n_teezvw.jpg",
    ],
    sort: "tier",
    album: "https://www.facebook.com/media/set/?set=a.540605427751731&type=3",
  },
  {
    _id: {
      $oid: "6449ffe4e0714355491b85e4",
    },
    route: "/cakes/pullapart-cupcake",
    title: "Pullapart Cupcake",
    type: "pullapart-cupcake",
    pricing: "depends on design",
    info: [
      "🚨 Price Increase Depends on Design & Add-Ons",
      "🎂 Depends on Number",
      "🧁 Whipped Cream Frosting",
    ],
    radios: [
      {
        name: "flavor",
        defaultValue: "Choco Moist",
        options: ["Choco Moist"],
      },
      {
        name: "size",
        defaultValue: "40pcs (Select Number)",
        options: ["40pcs (Select Number)"],
      },
    ],
    checkboxes: [
      {
        name: "addons",
        options: ["Printed Topper & Candies ₱50"],
      },
    ],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646867/cakes/pullapart%20cupcake/341938851_240544015304858_8163858992927578139_n_qqeoow.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646868/cakes/pullapart%20cupcake/341483516_1392277041727691_7250566976865343634_n_ssi8yz.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646863/cakes/pullapart%20cupcake/315870480_1495675937620697_35603220183691560_n_erpwmx.jpg",
    ],
    sort: "cupcake",
    album: "https://www.facebook.com/media/set/?set=a.257104756101801&type=3",
  },
  {
    _id: {
      $oid: "6449fff4e0714355491b85e6",
    },
    route: "/cakes/cupcake",
    title: "Cupcake",
    type: "cupcake",
    pricing: "from ₱100 PHP",
    info: ["🚨 Price Increase Depends on Design & Add-Ons"],
    radios: [
      {
        name: "flavor",
        defaultValue: "Choco Moist",
        options: ["Choco Moist"],
      },
      {
        name: "shape",
        defaultValue: "Round",
        options: ["Round"],
      },
      {
        name: "size",
        defaultValue: "3/4 oz ₱100 (Bite Size) *dozen*",
        options: [
          "3/4 oz ₱100 (Bite Size) *dozen*",
          "1 oz ₱180 (Mini Size) *dozen*",
          "3 oz ₱350 (Reg. Size) *dozen*",
          "3 oz ₱180 (Reg. Size) *half dozen*",
        ],
      },
    ],
    checkboxes: [
      {
        name: "upgrades",
        options: ["w/ Topper ₱60"],
      },
      {
        name: "addons",
        options: ["Fondant Details ₱100 & up"],
      },
    ],
    images: [
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646845/cakes/cupcake/324729950_5882574711795452_4857290879969187527_n_vhxdj5.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646847/cakes/cupcake/285682278_487092379769703_4989488879445929538_n_pshckd.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646853/cakes/cupcake/317550153_564940415642852_4822781289484780868_n_pyeeiz.jpg",
      "https://res.cloudinary.com/dzobqin7p/image/upload/v1682646854/cakes/cupcake/273428275_418034676675474_299164107322156271_n_krdyvy.jpg",
    ],
    sort: "cupcake",
    album: "https://www.facebook.com/media/set/?set=a.418033963342212&type=3",
  },
];
