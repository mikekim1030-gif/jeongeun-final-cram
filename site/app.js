const q = (no, question, answer, easy, memory, point, choices, hot = false) => ({
  no,
  question,
  answer,
  easy,
  memory,
  point,
  choices: choices.split("|"),
  hot,
});

const slides = [
  {
    id: "intro",
    theme: "lens",
    eyebrow: "기말 벼락치기",
    title: "65문항을 답이 보이는 구조로 다시 묶기",
    lead: "기말용 프린트_시기해부학 PDF 13개에서 나온 퀴즈를 주차별로 정리했다. 각 장표는 정답, 아주 쉬운 개념, 암기법, 출제 포인트만 남겨 빠르게 반복할 수 있게 만들었다.",
    source: "전체 13개 PDF",
    visual: "eye",
    summary: [
      "반복 출제된 항목부터 외우면 점수가 빨리 오른다.",
      "숫자 문제는 값 하나만 따로 외우지 말고 구조와 같이 묶는다.",
      "통로, 혈관, 신경, 샘은 이름이 비슷하므로 기능으로 구분한다.",
    ],
    sections: [
      {
        title: "가장 먼저",
        items: [
          "망막중심동맥 = 망막 안쪽 2/3",
          "유리체 = 눈알에서 가장 큰 투명 gel",
          "크라우제샘 = 평상시 눈물, 수성층",
          "가돌림신경 = 가쪽곧은근",
        ],
      },
      {
        title: "숫자 세트",
        items: [
          "수정체 무조절 굴절력 +19D",
          "수정체 핵 굴절률 1.406",
          "안와 용적 30mL",
          "TBUT 비정상 10초 이하",
        ],
      },
      {
        title: "경로 세트",
        items: [
          "방수: 뒷방 -> 동공 -> 앞방 -> 섬유주 -> 쉴렘관 -> 집합관",
          "눈물: 눈물점 -> 눈물소관 -> 눈물주머니 -> 코눈물관 -> 아래콧길",
        ],
      },
    ],
  },
  {
    id: "radar",
    theme: "tear",
    eyebrow: "출제 레이더",
    title: "꼭 나올 가능성이 높은 포인트",
    lead: "동일 개념이 여러 주차에 다시 등장한 항목과 선지로 헷갈리기 쉬운 항목을 우선순위로 뽑았다.",
    source: "중복/핵심 문항 기준",
    visual: "flow-tear",
    summary: [
      "반복: 망막중심동맥, 유리체, 크라우제샘, 아래안와틈새, 가쪽곧은근.",
      "암기형: 안와 벽, 구멍, 통과 구조, 눈물 배출 순서.",
      "함정형: 수정체는 혈관도 신경도 없고, 각막은 혈관은 없지만 신경은 예민하다.",
    ],
    sections: [
      {
        title: "최우선 8개",
        items: [
          "망막 안쪽 2/3 = 망막중심동맥",
          "망막색소상피 = 맥락막모세혈관",
          "유리체 = 가장 큰 투명 gel",
          "방수 생산 = 섬모체돌기 무색소상피",
          "시신경구멍 = 눈동맥도 통과",
          "아래안와틈새 = 삼차신경 2분지, 위턱신경",
          "평상시 눈물 = 크라우제샘",
          "가돌림신경, 6뇌신경 = 가쪽곧은근",
        ],
      },
      {
        title: "헷갈림 방지",
        items: [
          "눈을 감음 = 눈둘레근, 눈꺼풀 올림 = 눈꺼풀올림근, 틈새 넓힘 = 뮐러근",
          "눈물 지방/증발 방지 선지는 프린트 기준 짜이스샘",
          "각막을 친수성으로 바꾸는 점액층 = 결막 상피",
        ],
      },
    ],
  },
  {
    id: "w09-1",
    theme: "lens",
    eyebrow: "9주차 1차시",
    title: "망막 영양, 각막 신경, 수정체 기본색",
    lead: "혈관이 어디에 영양을 주는지와 수정체의 기본 상태를 묻는 장표다. 같은 혈관 문제가 15주차에도 반복된다.",
    source: "시기해부학 9주차 (1) 과제",
    visual: "eye",
    summary: [
      "망막 바깥쪽은 맥락막 쪽에서 먹고, 망막 안쪽은 망막중심동맥이 먹인다.",
      "각막은 투명해야 해서 혈관은 없지만 통증 신경은 예민하다.",
      "수정체는 원래 무색이고, 나이가 들면 노랗게 변한다.",
    ],
    questions: [
      q(1, "망막색소상피세포에 영양공급을 하는 혈관은?", "맥락막모세혈관", "망막색소상피는 망막의 바깥쪽에 붙어 있어 맥락막에서 가까운 피를 받는다.", "색소상피는 맥락막 바로 위, 그래서 맥모.", "망막 영양 문제는 15주차와 연결된다.", "또아리정맥|앞섬모체동맥|망막중심동맥|홍채큰동맥고리|맥락막모세혈관", true),
      q(2, "망막중심동맥이 영양공급을 하는 곳은?", "망막 안쪽 2/3", "망막 안쪽 층은 눈 속 혈관인 망막중심동맥이 담당한다.", "중심동맥은 망막 중심으로 들어와 안쪽 2/3.", "15주차에 거의 같은 내용이 다시 나온다.", "홍채|중심오목|광수용체세포|망막 안쪽 2/3|망막 바깥쪽 1/3", true),
      q(3, "각막을 지배하는 신경은?", "섬모체신경", "각막은 살짝 닿아도 아픈 조직이라 감각신경이 중요하다.", "각막 통증은 섬세하게, 섬모체신경.", "각막은 혈관 없음과 신경 있음의 차이를 묻기 좋다.", "시신경|눈신경|자가신경|섬모체신경|눈돌림신경"),
      q(4, "보기 중 야맹의 원인은?", "비타민 A 결핍", "어두운 곳에서 보는 데 필요한 시각물질 생성에 비타민 A가 필요하다.", "A는 At night.", "야맹은 원인 암기형으로 바로 고르면 된다.", "전색맹|낭밑백내장|축성 시신경염|비타민 A 결핍|각막 중심부 혼탁"),
      q(5, "수정체의 색은?", "무색", "정상 젊은 수정체는 투명하고 색이 거의 없다.", "처음은 무색, 나이 들면 노랑.", "10주차의 노화에 따른 노란색 변화와 세트로 외운다.", "무색|흰색|검은색|노란색|파란색"),
    ],
  },
  {
    id: "w09-2",
    theme: "tear",
    eyebrow: "9주차 2차시",
    title: "방수는 영양액이자 압력 조절액",
    lead: "방수는 각막과 수정체를 먹이고, 안압을 일정하게 유지한다. 생산 장소와 유출 순서는 그대로 출제되기 쉽다.",
    source: "시기해부학 9주차 (2) 과제",
    visual: "flow-aqueous",
    summary: [
      "방수는 혈관 없는 각막과 수정체에 영양을 준다.",
      "앞방이 대부분이고 뒷방은 작다.",
      "유출 순서는 뒷방에서 시작해 동공, 앞방, 섬유주, 쉴렘관, 집합관으로 간다.",
    ],
    questions: [
      q(1, "각막과 수정체에 영양공급을 하며, 안압을 일정하게 유지하는 기능을 하는 눈의 조직은?", "방수", "방수는 눈 안을 도는 맑은 물이다. 혈관 없는 각막과 수정체를 먹이고 안압도 맞춘다.", "방수 = 방 안의 물, 영양 + 압력.", "기능을 길게 설명하면 답은 방수일 가능성이 높다.", "홍채|방수|맥락막|섬모체|유리체", true),
      q(2, "앞방과 뒷방의 비율은?", "앞방 80% + 뒷방 20%", "방수 공간은 앞방이 훨씬 크다.", "앞이 크다, 앞 80 뒤 20.", "숫자형 문항이라 그대로 외운다.", "앞방 20% + 뒷방 80%|앞방 80% + 뒷방 20%|앞방 50% + 뒷방 50%|앞방 60% + 뒷방 40%|앞방 30% + 뒷방 70%"),
      q(3, "방수의 용적은?", "200~300μm", "프린트 선지 기준으로 200~300을 고르면 된다. 실제 단위는 보통 부피로 다룬다.", "방수는 이삼백.", "숫자만 바꿔 출제될 수 있다.", "100~150μm|200~300μm|400~500μm|600~700μm|1000~1200μm"),
      q(4, "방수가 생산되는 장소는?", "섬모체돌기 무색소상피", "방수는 섬모체돌기에서 만들어지고, 그중 무색소상피가 핵심이다.", "물은 색 없는 곳에서 만든다.", "생산 장소는 자주 나오는 고정 암기다.", "섬모체 근육|섬모체 함몰부|섬모체 평면부|섬모체돌기 색소상피|섬모체돌기 무색소상피", true),
      q(5, "방수의 섬유주 유출 경로 순서가 바르게 나열된 것은?", "뒷방→동공→앞방→섬유주→쉴렘관→집합관", "방수는 뒤에서 만들어져 동공을 지나 앞방으로 나오고, 배수구인 섬유주와 쉴렘관으로 빠진다.", "뒤-동-앞-섬-쉴-집.", "순서형은 통째로 외워야 한다.", "뒷방→동공→앞방→집합관→쉴렘관→섬유주|뒷방→동공→앞방→쉴렘관→섬유주→집합관|뒷방→동공→앞방→쉴렘관→집합관→섬유주|뒷방→동공→앞방→집합관→섬유주→쉴렘관|뒷방→동공→앞방→섬유주→쉴렘관→집합관", true),
    ],
  },
  {
    id: "w10-1",
    theme: "lens",
    eyebrow: "10주차 1차시",
    title: "수정체 모양과 조절",
    lead: "수정체는 양볼록렌즈이고, 가까운 곳을 볼 때 더 볼록해진다. 조절 때 직경이 짧아진다는 표현을 꼭 기억한다.",
    source: "시기해부학 10주차 (1) 과제",
    visual: "lens",
    summary: [
      "수정체는 굴절을 담당하는 투명한 양볼록렌즈다.",
      "조절 시 수정체가 두꺼워지고 직경은 짧아진다.",
      "수정체는 혈관과 신경이 없는 조직으로 묻는다.",
    ],
    questions: [
      q(1, "수정체의 형상은?", "양볼록렌즈", "양쪽이 볼록해야 빛을 모을 수 있다.", "수정체는 두툼한 양볼록.", "가장 기본 형태 문제다.", "양오목렌즈|양볼록렌즈|평볼록렌즈|오목메니스커스렌즈|볼록메니스커스렌즈", true),
      q(2, "무조절 상태일 때 수정체의 굴절력은?", "+19D", "힘을 주지 않고 멀리 볼 때 수정체 굴절력은 +19D로 외운다.", "무조절은 일구, +19D.", "숫자형으로 바로 출제된다.", "+19D|+33D|+43D|+60D|1.386", true),
      q(3, "조절 할 때 우리 눈의 변화로 옳은 것은?", "수정체 직경이 짧아짐", "가까운 것을 볼 때 수정체는 더 통통해지고 옆으로는 좁아진다.", "가까이 볼수록 통통, 직경은 짧다.", "섬모체근 수축, 소대 이완, 수정체 두꺼워짐까지 같이 떠올린다.", "섬모체근 이완|수정체 얇아짐|쉴렘관이 닫힘|섬모체소대 수축|수정체 직경이 짧아짐", true),
      q(4, "굴절력을 가지고 있고, 혈관과 신경이 없는 눈의 조직은?", "수정체", "각막도 굴절은 하지만 신경이 있다. 혈관과 신경이 모두 없다는 단서는 수정체다.", "수정체는 조용한 렌즈, 혈관도 신경도 없음.", "각막과 수정체를 구분하는 함정 문항이다.", "각막|공막|홍채|수정체|유리체", true),
      q(5, "수정체 전면에서 본 봉합선의 모양은?", "Y 모양", "수정체 섬유가 만나는 앞쪽 봉합선은 Y처럼 보인다.", "앞은 Y, 뒤는 뒤집힌 Y.", "전면인지 후면인지 말을 잘 본다.", "X 모양|Y 모양|K 모양|거꾸로 된 A 모양|거꾸로 된 Y 모양"),
    ],
  },
  {
    id: "w10-2",
    theme: "lens",
    eyebrow: "10주차 2차시",
    title: "수정체 성분, 노화, 유리체",
    lead: "수정체는 K+가 많고 핵 굴절률이 높다. 노화하면 노랗고 딱딱해져 노안과 연결된다.",
    source: "시기해부학 10주차 (2) 과제",
    visual: "lens",
    summary: [
      "수정체에는 K+가 상대적으로 많다.",
      "수정체 핵 굴절률은 1.406으로 외운다.",
      "유리체는 눈알에서 가장 큰 투명 gel이고 15주차에도 반복된다.",
    ],
    questions: [
      q(1, "우리 몸 다른 부위보다 수정체에 많은 성분은?", "K+", "수정체는 일반 조직과 이온 조성이 달라 K+가 많다는 식으로 외운다.", "수정체는 칼륨 K.", "성분 암기형 문항이다.", "물|K+|Ca+|단백질|Vit A"),
      q(2, "수정체 핵의 굴절률은?", "1.406", "핵은 주변보다 굴절률이 높다. 선지 중 가장 큰 1.406을 고른다.", "핵은 제일 세게 꺾어 1.406.", "숫자형으로 그대로 나온다.", "1|1.336|1.376|1.386|1.406", true),
      q(3, "나이가 들어감에 따라서 수정체의 색이 변한다. 어떤 색인가?", "노란색", "수정체는 나이가 들수록 투명함이 줄고 노랗게 변한다.", "나이 들면 노랑.", "9주차의 무색과 대비해서 외운다.", "빨간색|초록색|노란색|파란색|보라색"),
      q(4, "나이가 들어가면서 수정체 핵의 증가로 탄력성이 감소하는 것은?", "노안", "수정체가 딱딱해지면 가까운 곳에 초점을 맞추기 어려워진다.", "탄력 감소 = 노안.", "수정체 노화의 대표 결과다.", "근시|원시|노안|백내장|수정체없음증", true),
      q(5, "눈알에서 가장 큰 용적을 차지하는 투명한 gel 상태의 구조물은?", "유리체", "유리체는 눈 속 대부분을 채우는 젤리 같은 투명 구조물이다.", "큰 젤리는 유리체.", "15주차에 다시 출제된 반복 포인트다.", "방수|안와|수정체|유리체|섬모체", true),
    ],
  },
  {
    id: "w11-1",
    theme: "orbit",
    eyebrow: "11주차 1차시",
    title: "안와의 큰 구조",
    lead: "안와는 눈알, 외안근, 신경, 혈관을 담는 뼈 방이다. 용적, 각도, 꼭지점 구멍, 구성 뼈가 시험 포인트다.",
    source: "시기해부학 11주차 (1) 과제",
    visual: "orbit",
    summary: [
      "안와는 눈의 보호 공간이다.",
      "꼭지점 쪽 핵심 구멍은 시신경구멍이다.",
      "안와 구성 뼈에서 아래턱뼈는 빠진다.",
    ],
    questions: [
      q(1, "눈알과 외안근, 신경 혈관 등을 보호하는 눈의 기관은?", "안와", "눈알이 들어 있는 뼈로 된 집이 안와다.", "안와 = 눈의 와, 눈이 들어간 방.", "정의형 기본 문제다.", "안와|망막|맥락막|섬모체|수정체", true),
      q(2, "안와의 꼭지점에 있는 구멍은?", "시신경구멍", "안와 뒤쪽 꼭지점에는 시신경과 혈관이 지나가는 통로가 있다.", "꼭지점 뒤 통로 = 시신경구멍.", "11주차 2차시의 통과 구조와 이어진다.", "사상판|눈물점|섬유주망|시신경구멍|시신경유두", true),
      q(3, "좌우 안와의 외벽과 외벽이 이루는 각도는?", "90°", "양쪽 안와의 바깥벽을 기준으로 보면 직각으로 외운다.", "외벽끼리 구십.", "숫자형이라 선지 기억이 중요하다.", "30°|45°|60°|90°|180°"),
      q(4, "안와의 용적은?", "30mL", "안와는 눈알보다 큰 공간이고 약 30mL로 외운다.", "안와 공간 삼십.", "용적 숫자 문제다.", "0.2mL|0.3mL|4mL|6.5mL|30mL", true),
      q(5, "보기 중 안와를 구성하는 뼈가 아닌 것은?", "아래턱뼈", "안와는 위쪽 얼굴뼈들이 만들고 아래턱뼈는 씹는 뼈라 안와 벽을 만들지 않는다.", "눈집에 턱뼈는 안 들어간다.", "아닌 것 고르기라 아래턱뼈를 바로 제거한다.", "나비뼈|이마뼈|광대뼈|입천장뼈|아래턱뼈", true),
    ],
  },
  {
    id: "w11-2",
    theme: "orbit",
    eyebrow: "11주차 2차시",
    title: "안와 벽과 통과 구조",
    lead: "안와는 벽 이름과 통로 이름이 비슷해서 헷갈린다. 위치, 가장 두꺼운 벽, 어떤 신경이 지나가는지를 짝으로 외운다.",
    source: "시기해부학 11주차 (2) 과제",
    visual: "orbit",
    summary: [
      "위벽은 이마뼈, 도르래오목은 위벽 안쪽이다.",
      "외벽은 가장 두껍다.",
      "아래안와틈새는 위턱신경, 즉 삼차신경 2분지와 연결된다.",
    ],
    questions: [
      q(1, "안와의 위벽을 구성하는 뼈는?", "이마뼈", "안와의 천장은 이마 쪽 뼈가 만든다.", "위는 이마.", "위벽 구성 뼈 기본 문제다.", "광대뼈|이마뼈|위턱뼈|벌집뼈|입천장뼈"),
      q(2, "안와에서 도르래오목의 위치는?", "위벽 안쪽", "도르래는 위빗근이 방향을 바꾸는 안쪽 위 부위에 있다.", "도르래는 위-안.", "위벽 가쪽과 헷갈리기 쉽다.", "내벽|외벽|하벽|위벽 가쪽|위벽 안쪽", true),
      q(3, "안와의 벽 중 가장 두꺼운 곳은?", "외벽", "바깥쪽 벽은 충격을 버텨야 해서 가장 두껍다고 외운다.", "두꺼운 방패는 바깥.", "가장 얇은 벽을 묻는 문제와 구분한다.", "상벽|하벽|외벽|내벽|코쪽 벽", true),
      q(4, "안와의 시신경구멍을 통과하는 것은?", "눈동맥", "시신경구멍은 시신경과 눈동맥이 지나가는 뒤쪽 통로다. 이 선지에서는 눈동맥을 고른다.", "시신경구멍 = 시신경 + 눈동맥.", "통과 구조 문제로 자주 묶인다.", "눈신경|눈동맥|눈정맥|가돌림신경|부교감신경 섬유", true),
      q(5, "안와의 아래안와틈새를 통과하는 것은?", "삼차신경 2분지", "아래안와틈새는 위턱신경 길이다. 위턱신경은 삼차신경 2분지다.", "아래틈새는 V2.", "15주차에 위턱신경으로 다시 나온다.", "시신경|눈동맥|삼차신경 1분지|삼차신경 2분지|삼차신경 3분지", true),
    ],
  },
  {
    id: "w12-1",
    theme: "orbit",
    eyebrow: "12주차 1차시",
    title: "안와 지방과 눈꺼풀의 역할",
    lead: "눈꺼풀은 그냥 덮개가 아니라 보호, 빛 제한, 눈물 분포를 담당한다. 쌍꺼풀과 눈꺼풀올림근도 연결해서 외운다.",
    source: "시기해부학 12주차 (1) 과제",
    visual: "eyelid",
    summary: [
      "안와 지방은 눈알의 쿠션이다.",
      "안와사이막은 안와 내용물과 눈꺼풀을 가르는 앞쪽 경계다.",
      "위눈꺼풀주름은 눈꺼풀올림근 건막과 관련된다.",
    ],
    questions: [
      q(1, "눈알을 충격으로부터 보호하는 완충작용을 하는 기관은?", "안와 지방", "눈 주변 지방은 충격을 흡수하는 쿠션 역할을 한다.", "지방은 쿠션.", "기능 설명형 문항이다.", "혈관|신경|눈물샘|안와 지방|눈물주머니"),
      q(2, "안와의 앞쪽 경계를 이루며, 안와 내용물과 눈꺼풀을 구분하는 역할을 하는 곳은?", "안와사이막", "안와사이막은 안와 안쪽 내용물이 앞으로 밀려 나오지 않게 막는 칸막이다.", "사이막은 사이를 막는다.", "안구집과 헷갈리지 않는다.", "외안근|안구집|눈물샘|도르래|안와사이막", true),
      q(3, "외부 자극으로부터 눈을 보호하며 광선을 제한, 눈물을 분포 시키는 눈의 기관은?", "눈꺼풀", "눈꺼풀은 눈을 덮어 보호하고, 깜빡이며 눈물을 펴 바른다.", "눈꺼풀은 덮고, 줄이고, 바른다.", "기능 세 개가 나오면 눈꺼풀.", "안와|홍채|외안근|눈꺼풀|수정체", true),
      q(4, "수면 시 각막으로 영양공급을 하는 곳은?", "눈꺼풀 혈관", "잠잘 때는 눈을 감으므로 눈꺼풀 쪽 혈관이 각막 대사에 도움을 준다.", "자는 동안은 덮개 혈관.", "각막 영양과 연결되는 응용 문항이다.", "또아리정맥|눈꺼풀 혈관|망막중심동맥|맥락막모세혈관|짧은뒤섬모체동맥"),
      q(5, "위눈꺼풀주름(쌍꺼풀)은 근육의 건막이 피부에 부착된 결과이다. 이 근육은?", "눈꺼풀올림근", "쌍꺼풀 라인은 위눈꺼풀을 들어 올리는 근육의 건막이 피부에 붙어서 생긴다.", "쌍꺼풀은 올림근이 만든 선.", "눈꺼풀올림근은 12주차 2차시와 13주차에도 이어진다.", "뮐러근|눈둘레근|위곧은근|동공확대근|눈꺼풀올림근", true),
    ],
  },
  {
    id: "w12-2",
    theme: "orbit",
    eyebrow: "12주차 2차시",
    title: "눈꺼풀 근육과 샘",
    lead: "눈을 감는 근육, 올리는 근육, 틈새를 넓히는 근육을 구분한다. 샘은 위치와 모낭 연결 여부로 외운다.",
    source: "시기해부학 12주차 (2) 과제",
    visual: "eyelid",
    summary: [
      "눈 감기 = 눈둘레근.",
      "눈꺼풀 틈새 넓힘 = 뮐러근, 교감신경.",
      "눈꺼풀판의 모낭과 연결 안 된 기름샘 = 마이봄샘.",
    ],
    questions: [
      q(1, "눈꺼풀 안쪽(결막, 눈꺼풀판)과 바깥쪽(근육, 피부)을 나누는 것은?", "회색선", "회색선은 눈꺼풀을 앞쪽 층과 뒤쪽 층으로 나누는 기준선이다.", "회색선은 경계선.", "눈꺼풀 층 구분 문제다.", "홍채|회색선|쉬발베선|안와사이막|눈꺼풀판샘"),
      q(2, "눈을 감을 때 사용하는 근육은?", "눈둘레근", "눈둘레근은 눈 주위를 둥글게 둘러싸며 수축하면 눈이 감긴다.", "둘레가 조이면 감긴다.", "얼굴신경 지배와도 같이 외우면 좋다.", "뮐러근|눈둘레근|위곧은근|동공조임근|눈꺼풀올림근", true),
      q(3, "교감신경의 지배를 받는 불수의근으로 눈꺼풀 틈새를 넓게 하는 기능을 하는 근육은?", "뮐러근", "뮐러근은 의식적으로 움직이는 큰 근육이 아니라 교감신경이 조절하는 보조 올림 근육이다.", "교감하면 눈이 번쩍, 뮐러.", "교감신경 단서가 나오면 뮐러근.", "뮐러근|위빗근|섬모체근|동공확대근|눈꺼풀올림근", true),
      q(4, "눈돌림신경의 지배를 받는 근육은?", "눈꺼풀올림근", "눈꺼풀올림근은 위눈꺼풀을 들어 올리고 눈돌림신경이 지배한다.", "3번 신경이 눈꺼풀을 올린다.", "13주차의 눈꺼풀올림근 지배 신경과 같은 내용이다.", "뮐러근|섬모체근|동공조임근|가쪽곧은근|눈꺼풀올림근", true),
      q(5, "모낭과 연결되지 않은 기름샘으로, 눈꺼풀판에 존재하는 샘은?", "마이봄샘", "마이봄샘은 눈꺼풀판 안에 길게 배열된 기름샘이고 모낭과 직접 연결되지 않는다.", "마이봄은 판 속 기름.", "짜이스샘과 위치를 구분한다.", "몰샘|짜이스샘|마이봄샘|볼프링샘|크라우제샘", true),
    ],
  },
  {
    id: "w13-1",
    theme: "tear",
    eyebrow: "13주차 1차시",
    title: "결막, 덧눈물샘, 감각신경",
    lead: "결막에서는 술잔세포가 점액을 만들고, 감각은 삼차신경 1분지가 맡는다. 눈꺼풀올림근 신경은 다시 반복된다.",
    source: "시기해부학 13주차 (1) 과제",
    visual: "tear",
    summary: [
      "눈꺼풀 혈액공급 = 동맥연속활.",
      "결막 점액 생성 = 술잔세포.",
      "결막 감각 = 삼차신경 1분지.",
    ],
    questions: [
      q(1, "눈꺼풀에 혈액공급을 하는 혈관은?", "동맥연속활", "눈꺼풀 가장자리를 따라 동맥들이 활처럼 이어져 혈액을 공급한다.", "눈꺼풀 혈관은 활 모양.", "명칭 암기형이다.", "눈정맥|동맥연속활|망막중심동맥|맥락막모세혈관|짧은뒤섬모체동맥"),
      q(2, "눈꺼풀올림근을 지배하는 신경은?", "눈돌림신경", "눈꺼풀올림근은 위눈꺼풀을 올리고 3번 뇌신경인 눈돌림신경이 지배한다.", "올림근은 3번.", "12주차와 반복되는 고득점 포인트다.", "눈신경|얼굴신경|교감신경|부교감신경|눈돌림신경", true),
      q(3, "덧눈물샘의 위치는?", "실질의 섬유층", "덧눈물샘은 결막 실질 쪽에 존재하며 프린트 기준 실질의 섬유층을 고른다.", "덧눈물샘은 실질 속.", "위치 암기형이다.", "안구결막|눈꺼풀판|결막 상피|실질의 섬유층|실질의 아데노이드층"),
      q(4, "결막상피에서 점액을 생성하는 세포는?", "술잔세포", "술잔세포는 점액을 분비해 눈 표면을 촉촉하게 만든다.", "점액은 술잔에서 나온다.", "눈물 점액층과 연결된다.", "뮐러세포|원뿔세포|막대세포|두극세포|술잔세포", true),
      q(5, "결막의 감각을 지배하는 신경은?", "삼차신경 1분지", "눈 주변 감각은 삼차신경의 눈신경 가지, 즉 1분지가 담당한다.", "결막 감각은 V1.", "안와 틈새의 V2와 구분한다.", "시신경|부교감신경|삼차신경 1분지|삼차신경 2분지|삼차신경 3분지", true),
    ],
  },
  {
    id: "w13-2",
    theme: "tear",
    eyebrow: "13주차 2차시",
    title: "눈물샘과 눈물 배출 순서",
    lead: "눈물 문제는 위치, 평상시 분비, 배출 순서가 핵심이다. 순서는 말로 외우기보다 한 줄 리듬으로 외운다.",
    source: "시기해부학 13주차 (2) 과제",
    visual: "flow-tear",
    summary: [
      "주눈물샘 위치 = 눈물샘오목.",
      "평상시 눈물 = 크라우제샘.",
      "눈물 배출 = 눈물점, 눈물소관, 눈물주머니, 코눈물관, 아래콧길.",
    ],
    questions: [
      q(1, "주눈물샘의 위치는?", "눈물샘오목", "주눈물샘은 이름 그대로 눈물샘이 들어가는 오목한 자리인 눈물샘오목에 있다.", "주눈물샘은 자기 오목.", "도르래오목과 헷갈리지 않는다.", "도르래오목|눈물샘오목|안와 위벽 안쪽|눈물주머니오목|실질의 아데노이드층", true),
      q(2, "평상시 눈물 분비를 담당하는 곳은?", "크라우제샘", "평소 기본 눈물은 덧눈물샘인 크라우제샘이 담당한다고 외운다.", "평소엔 크라우제.", "14주차 수성층 분비와 반복된다.", "몰샘|쉴렘관|섬모체|주눈물샘|크라우제샘", true),
      q(3, "눈물의 배출경로 순서는?", "눈물점→눈물소관→눈물주머니→코눈물관→아래콧길", "눈물은 작은 구멍인 눈물점으로 들어가 관, 주머니, 코눈물관을 거쳐 코 아래쪽으로 빠진다.", "점-소-주-코-아래.", "순서형 최우선 암기다.", "눈물점→아래콧길→눈물주머니→코눈물관→눈물소관|눈물점→코눈물관→눈물주머니→눈물소관→아래콧길|눈물점→눈물주머니→눈물소관→코눈물관→아래콧길|눈물점→코눈물관→아래콧길→눈물소관→눈물주머니|눈물점→눈물소관→눈물주머니→코눈물관→아래콧길", true),
      q(4, "눈물의 증발을 방지하는 성분을 생성하는 곳은?", "짜이스샘", "프린트 기준으로 증발 방지 성분은 기름샘 성격의 짜이스샘을 고른다.", "증발 막는 기름, 짜이스.", "마이봄샘과 헷갈릴 수 있으니 프린트 답을 우선한다.", "몰샘|짜이스샘|볼프링샘|술잔세포|크라우제샘", true),
      q(5, "소수성인 각막을 친수성으로 바꾸는 역할을 하는 눈물층을 생성하는 곳은?", "결막 상피", "점액층은 물을 싫어하는 각막 표면을 물과 친하게 만들어 눈물이 잘 퍼지게 한다.", "각막을 촉촉하게 바꾸는 점액, 결막 상피.", "술잔세포, 점액층과 같이 외운다.", "주눈물샘|짜이스샘|결막 상피|결막 실질|크라우제샘", true),
    ],
  },
  {
    id: "w14-1",
    theme: "tear",
    eyebrow: "14주차 1차시",
    title: "눈물 성질과 TBUT",
    lead: "눈물은 약한 알칼리성이고 윤활, 항균, 표면 유지에 중요하다. TBUT 기준은 10초 이하로 외운다.",
    source: "시기해부학 14주차 (1) 과제",
    visual: "tear",
    summary: [
      "눈물 pH = 약한 알칼리성.",
      "알레르기결막염 = IgE.",
      "TBUT 비정상 기준 = 10초 이하.",
    ],
    questions: [
      q(1, "눈물의 pH는?", "약한 알칼리성", "눈물은 강한 산이나 강한 알칼리가 아니라 약간 알칼리 쪽으로 외운다.", "눈물은 살짝 알칼리.", "산성/중성 선지를 헷갈리게 낸다.", "약한 산성|강한 산성|중성|약한 알칼리성|강한 알칼리성", true),
      q(2, "알레르기결막염이 있을 때 작용하는 눈물의 단백질은?", "IgE", "알레르기 반응은 IgE와 연결된다.", "E는 allergy의 E로 묶어 외운다.", "면역 단백질 중 알레르기 단서가 핵심이다.", "IgA|IgG|IgE|리소자임|베타리신", true),
      q(3, "눈물의 기능으로 옳은 것은?", "윤활작용", "눈물은 눈 표면을 미끄럽고 촉촉하게 해 마찰을 줄인다.", "눈물은 윤활유.", "조절이나 안구운동 같은 기능은 다른 구조다.", "조절|안구운동|윤활작용|구경조리개|시야조리개"),
      q(4, "평상시 눈물의 수성층을 분비하는 장소는?", "크라우제샘", "평상시 기본 수성층 분비는 크라우제샘으로 외운다.", "평소 수성층 = 크라우제.", "13주차 평상시 눈물 분비와 반복된다.", "마이봄샘|술잔세포|짜이스샘|주눈물샘|크라우제샘", true),
      q(5, "TBUT 검사의 비정상 기준은?", "10초 이하", "눈물막이 10초 안에 깨지면 안정성이 떨어진 것으로 본다.", "티벗은 텐, 10초.", "숫자형 고정 암기다.", "5초 이하|10초 이하|15초 이하|20초 이하|25초 이하", true),
    ],
  },
  {
    id: "w14-2",
    theme: "muscle",
    eyebrow: "14주차 2차시",
    title: "외안근 작용과 신경",
    lead: "근육 문제는 작용, 길이, 신경을 한 번에 묻는다. 가쪽곧은근과 6뇌신경은 15주차에도 반복된다.",
    source: "시기해부학 14주차 (2) 과제",
    visual: "muscle",
    summary: [
      "상전 = 위곧은근.",
      "반대로 작용 = 길항근.",
      "6뇌신경 = 가돌림신경 = 가쪽곧은근.",
    ],
    questions: [
      q(1, "눈을 위로 올리는 상전 작용을 하는 근육은?", "위곧은근", "눈을 위로 올리는 대표 곧은근은 위곧은근이다.", "위로는 위곧은근.", "작용 문제 기본형이다.", "위빗근|위곧은근|아래곧은근|안쪽곧은근|가쪽곧은근", true),
      q(2, "서로 반대로 작용하는 근육은?", "길항근", "한 근육이 하는 움직임을 반대로 하는 근육을 길항근이라고 한다.", "반대는 길항.", "용어 암기형이다.", "협동근|협력근|길항근|동향근|곧은근"),
      q(3, "각막가장자리에서 부착부위가 가장 가까운 곧은근은?", "안쪽곧은근", "곧은근 부착 위치 중 안쪽곧은근이 각막가장자리에 가장 가깝다.", "가까운 건 안쪽.", "부착 거리 문제로 단독 출제 가능하다.", "위빗근|위곧은근|안쪽곧은근|아래곧은근|가쪽곧은근", true),
      q(4, "외안근 중 길이가 가장 긴 근육은?", "위빗근", "위빗근은 도르래를 지나 방향을 바꾸는 긴 경로를 가진다.", "가장 긴 길은 위빗근.", "길이 문제는 위빗근으로 바로 연결한다.", "위빗근|아래빗근|위곧은근|아래곧은근|가쪽곧은근", true),
      q(5, "6뇌신경의 지배를 받는 근육은?", "가쪽곧은근", "6번 뇌신경은 가돌림신경이고, 눈을 가쪽으로 돌리는 가쪽곧은근을 지배한다.", "6번은 가쪽.", "15주차에서 가돌림신경으로 반복된다.", "위빗근|아래빗근|위곧은근|아래곧은근|가쪽곧은근", true),
    ],
  },
  {
    id: "w15",
    theme: "muscle",
    eyebrow: "15주차",
    title: "반복 출제 총복습",
    lead: "15주차는 새 내용보다 앞 주차 핵심을 다시 확인하는 형태다. 여기에 있는 5문항은 실제 시험 전 마지막으로 봐야 한다.",
    source: "시기해부학 15주차 과제",
    visual: "muscle",
    summary: [
      "망막중심동맥, 유리체, 아래안와틈새, 수성층, 가쪽곧은근이 다시 등장한다.",
      "반복된 문제는 표현만 바꿔서 다시 출제될 가능성이 높다.",
      "정답 단어보다 단서 문장을 먼저 기억한다.",
    ],
    questions: [
      q(1, "망막의 안쪽 2/3에 영양공급을 하는 혈관은?", "망막중심동맥", "망막 안쪽 층은 망막중심동맥이 담당한다.", "안쪽 2/3 = 망막중심동맥.", "9주차와 반복된 최우선 포인트다.", "망막중심동맥|앞섬모체동맥|맥락막모세혈관|긴뒤섬모체동맥|짧은뒤섬모체동맥", true),
      q(2, "눈알에서 용적이 가장 큰 구조물로 투명한 gel 상태 구조물은?", "유리체", "눈 속 가장 큰 젤리 공간은 유리체다.", "큰 gel = 유리체.", "10주차와 반복된다.", "눈물|방수|수정체|유리체|외안근", true),
      q(3, "위턱신경이 통과하는 안와의 개구부는?", "아래안와틈새", "위턱신경은 삼차신경 2분지이고 아래안와틈새를 지난다.", "위턱 V2는 아래틈새.", "11주차 아래안와틈새 문제와 같은 내용이다.", "사상판|시신경유두|시신경구멍|위안와틈새|아래안와틈새", true),
      q(4, "눈물의 99% 이상을 차지하며 항균작용을 하는 곳은?", "수성층", "눈물의 대부분은 물 성분인 수성층이고, 항균 단백질도 포함한다.", "눈물 대부분은 수성층.", "눈물층 구성 문제로 중요하다.", "지방층|피지층|수성층|점액층|술잔세포", true),
      q(5, "가돌림신경이 지배하는 근육은?", "가쪽곧은근", "가돌림신경은 눈을 바깥쪽으로 돌리는 가쪽곧은근을 지배한다.", "가돌림 = 가쪽.", "14주차 6뇌신경 문제와 같은 내용이다.", "위빗근|위곧은근|안쪽곧은근|가쪽곧은근|눈꺼풀올림근", true),
    ],
  },
  {
    id: "cheat",
    theme: "lens",
    eyebrow: "마지막 5분",
    title: "시험 직전 암기표",
    lead: "문제를 풀 시간이 없으면 이 표만 먼저 훑는다. 같은 단서가 보이면 오른쪽 답으로 바로 연결한다.",
    source: "요약 장표",
    visual: "eye",
    summary: [
      "단서 문장과 정답을 한 덩어리로 외운다.",
      "혈관, 통로, 신경, 샘 이름은 기능으로 묶는다.",
      "반복 문항은 틀리면 손해가 큰 영역이다.",
    ],
    cheats: [
      ["망막 영양", "망막 안쪽 2/3 = 망막중심동맥 / 망막색소상피 = 맥락막모세혈관"],
      ["수정체", "양볼록렌즈 / 무조절 +19D / 핵 굴절률 1.406 / 기본 무색 / 나이 들면 노란색 / 탄력 감소 = 노안"],
      ["방수", "각막과 수정체 영양 + 안압 유지 / 생산 = 섬모체돌기 무색소상피 / 뒤-동-앞-섬-쉴-집"],
      ["안와", "보호 공간 / 용적 30mL / 시신경구멍 = 눈동맥 / 아래안와틈새 = V2, 위턱신경 / 외벽 가장 두꺼움"],
      ["눈꺼풀", "감기 = 눈둘레근 / 올림 = 눈꺼풀올림근, 눈돌림신경 / 틈새 넓힘 = 뮐러근, 교감신경 / 마이봄샘 = 눈꺼풀판 기름샘"],
      ["눈물", "주눈물샘 = 눈물샘오목 / 평상시 수성층 = 크라우제샘 / 배출 = 점-소-주-코-아래 / TBUT 10초 이하"],
      ["외안근", "상전 = 위곧은근 / 가장 긴 근육 = 위빗근 / 6번, 가돌림신경 = 가쪽곧은근 / 반대 작용 = 길항근"],
    ],
  },
];

const state = {
  index: 0,
  answersVisible: true,
};

const deck = document.getElementById("deck");
const rail = document.getElementById("slideRail");
const slideKicker = document.getElementById("slideKicker");
const progressBar = document.getElementById("progressBar");
const progressLabel = document.getElementById("progressLabel");
const modeBtn = document.getElementById("modeBtn");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderVisual(type) {
  if (type === "eye") {
    return `<img class="eye-asset" src="./assets/eye-map.svg" alt="눈 핵심 구조 지도" />`;
  }

  if (type === "lens") {
    return `
      <div class="mini-diagram"><div class="diagram-lens" aria-label="양볼록 수정체 그림"></div></div>
      <ul class="hot-list">
        <li>양볼록, 무조절 +19D</li>
        <li>조절 시 두꺼워지고 직경 감소</li>
        <li>나이 들면 노란색, 탄력 감소</li>
      </ul>
    `;
  }

  if (type === "flow-aqueous") {
    return `
      <div class="mini-diagram">
        <div class="diagram-flow" aria-label="방수 유출 순서">
          ${["뒷방", "동공", "앞방", "섬유주", "쉴렘관", "집합관"].map((item, idx) => `
            <div class="flow-step">${item}</div>${idx < 5 ? `<div class="flow-arrow">↓</div>` : ""}
          `).join("")}
        </div>
      </div>
    `;
  }

  if (type === "flow-tear") {
    return `
      <div class="mini-diagram">
        <div class="diagram-flow" aria-label="눈물 배출 순서">
          ${["눈물점", "눈물소관", "눈물주머니", "코눈물관", "아래콧길"].map((item, idx) => `
            <div class="flow-step">${item}</div>${idx < 4 ? `<div class="flow-arrow">↓</div>` : ""}
          `).join("")}
        </div>
      </div>
    `;
  }

  if (type === "orbit") {
    return `
      <div class="mini-diagram">
        <div class="diagram-orbit" aria-label="안와 벽과 통로">
          <span class="top">이마뼈</span>
          <span class="side">외벽</span>
          <span class="hole">V2</span>
        </div>
      </div>
      <ul class="hot-list">
        <li>위벽 = 이마뼈</li>
        <li>외벽 = 가장 두꺼움</li>
        <li>아래안와틈새 = V2</li>
      </ul>
    `;
  }

  if (type === "eyelid") {
    return `
      <div class="mini-diagram">
        <div class="diagram-flow" aria-label="눈꺼풀 기능">
          <div class="flow-step">눈둘레근 = 감기</div>
          <div class="flow-arrow">+</div>
          <div class="flow-step">눈꺼풀올림근 = 올리기</div>
          <div class="flow-arrow">+</div>
          <div class="flow-step">뮐러근 = 틈새 넓힘</div>
        </div>
      </div>
    `;
  }

  if (type === "tear") {
    return `
      <div class="mini-diagram">
        <div class="diagram-tear" aria-label="눈물층">
          <div class="tear-layer lipid">지방층</div>
          <div class="tear-layer aqueous">수성층 99%+</div>
          <div class="tear-layer mucin">점액층</div>
        </div>
      </div>
      <ul class="hot-list">
        <li>수성층 = 크라우제샘</li>
        <li>점액 = 결막 상피, 술잔세포</li>
        <li>TBUT = 10초 이하</li>
      </ul>
    `;
  }

  if (type === "muscle") {
    return `
      <div class="mini-diagram">
        <div class="diagram-muscle" aria-label="외안근 핵심">
          <span class="up">위곧은근</span>
          <span class="out">가쪽</span>
          <span class="in">안쪽</span>
          <span class="long">위빗근</span>
        </div>
      </div>
      <ul class="hot-list">
        <li>위로 = 위곧은근</li>
        <li>6번 신경 = 가쪽곧은근</li>
        <li>가장 긴 근육 = 위빗근</li>
      </ul>
    `;
  }

  if (type === "frame") {
    return `
      <div class="mini-diagram">
        <div class="diagram-frame" aria-label="안경테 표기">
          <div>
            <div class="frame-code"><span>52</span><small>□</small><span>16</span></div>
            <div class="frame-labels"><span>렌즈삽입부</span><span>연결부</span></div>
          </div>
        </div>
      </div>
      <ul class="hot-list">
        <li>FPD = 렌즈삽입부 + 연결부</li>
        <li>52□16 140 = A 52, DBL 16, 다리 140</li>
        <li>최소직경 = ED + 편심량 + 여유분</li>
      </ul>
    `;
  }

  if (type === "prism") {
    return `
      <div class="mini-diagram">
        <div class="diagram-prism" aria-label="프리즘 공식">
          <div class="prism-lens"></div>
          <div class="prism-formula">P = cF</div>
        </div>
      </div>
      <ul class="hot-list">
        <li>c는 cm 단위 편심거리</li>
        <li>고도수일수록 작은 오차도 프리즘이 커진다</li>
        <li>TABO: 우안 BI 0도, BO 180도</li>
      </ul>
    `;
  }

  if (type === "fitting") {
    return `
      <div class="mini-diagram">
        <div class="diagram-fitting" aria-label="피팅 순서">
          <div class="fit-step">표준상태피팅</div>
          <div class="flow-arrow">↓</div>
          <div class="fit-step">기본피팅</div>
          <div class="flow-arrow">↓</div>
          <div class="fit-step">가공 후 / 자각피팅</div>
        </div>
      </div>
      <ul class="hot-list">
        <li>높으면 코받침 간격을 넓혀 낮춘다</li>
        <li>설계점 측정 전에는 기본피팅</li>
        <li>착용감 질문은 자각피팅</li>
      </ul>
    `;
  }

  if (type === "lensmeter") {
    return `
      <div class="mini-diagram">
        <div class="diagram-lensmeter" aria-label="렌즈미터">
          <div class="meter-body"></div>
        </div>
      </div>
      <ul class="hot-list">
        <li>렌즈미터 = 상측정점굴절력 측정</li>
        <li>프리즘 기저방향과 토릭 주경선 확인</li>
        <li>투영식은 여러 사람이 동시에 보기 쉽다</li>
      </ul>
    `;
  }

  if (type === "wave") {
    return `
      <div class="mini-diagram">
        <div class="diagram-wave" aria-label="파동과 파장">
          <div class="wave-line"></div>
        </div>
      </div>
      <ul class="hot-list">
        <li>파장이 길수록 회절이 잘 된다</li>
        <li>진동수는 매질이 바뀌어도 변하지 않는다</li>
        <li>브루스터각에서는 반사광이 완전편광</li>
      </ul>
    `;
  }

  if (type === "mirror") {
    return `
      <div class="mini-diagram">
        <div class="diagram-mirror" aria-label="반사와 거울">
          <div class="mirror-plane"></div>
        </div>
      </div>
      <ul class="hot-list">
        <li>입사각 = 반사각</li>
        <li>거울 회전량의 2배만큼 상이 회전</li>
        <li>전반사는 임계각보다 클 때 발생</li>
      </ul>
    `;
  }

  return "";
}

function renderSections(sections = []) {
  if (!sections.length) return "";
  return `
    <div class="section-grid">
      ${sections.map((section) => `
        <section class="section-panel">
          <strong>${escapeHtml(section.title)}</strong>
          <ul class="section-list">
            ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </section>
      `).join("")}
    </div>
  `;
}

function renderQuestions(questions = []) {
  if (!questions.length) return "";
  return `
    <div class="question-grid">
      ${questions.map((item) => `
        <article class="question-card ${item.hot ? "hot" : ""}">
          <div class="question-meta">
            <span class="pill">Q${item.no}</span>
            ${item.hot ? `<span class="pill hot-pill">출제 가능성 높음</span>` : ""}
          </div>
          <h3>${escapeHtml(item.question)}</h3>
          <div class="answer-block">
            <div class="answer"><small>정답</small> ${escapeHtml(item.answer)}</div>
            <p class="note"><b>쉽게</b> ${escapeHtml(item.easy)}</p>
            <p class="note"><b>암기</b> ${escapeHtml(item.memory)}</p>
            <p class="note"><b>포인트</b> ${escapeHtml(item.point)}</p>
          </div>
          <details class="choices">
            <summary>선지</summary>
            <ol class="choice-list">
              ${item.choices.map((choice, idx) => `
                <li class="${choice === item.answer ? "correct" : ""}">${idx + 1}. ${escapeHtml(choice)}</li>
              `).join("")}
            </ol>
          </details>
        </article>
      `).join("")}
    </div>
  `;
}

function renderCheats(rows = []) {
  if (!rows.length) return "";
  return `
    <table class="cheat-table">
      <tbody>
        ${rows.map(([left, right]) => `
          <tr>
            <th>${escapeHtml(left)}</th>
            <td>${escapeHtml(right)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderSlide() {
  const slide = slides[state.index];
  document.body.classList.toggle("exam-mode", !state.answersVisible);
  modeBtn.setAttribute("aria-pressed", String(!state.answersVisible));
  modeBtn.title = state.answersVisible ? "정답 숨기기" : "정답 보기";

  deck.innerHTML = `
    <section class="slide" data-theme="${escapeHtml(slide.theme)}">
      <div class="slide-head">
        <div>
          <span class="eyebrow">${escapeHtml(slide.eyebrow)}</span>
          <h1>${escapeHtml(slide.title)}</h1>
          <p class="lead">${escapeHtml(slide.lead)}</p>
        </div>
        <span class="source-chip">${escapeHtml(slide.source)}</span>
      </div>
      <div class="slide-layout">
        <aside class="visual-stack">
          <div class="visual-panel">${renderVisual(slide.visual)}</div>
          <div class="study-panel">
            <h2>핵심 압축</h2>
            <ul class="summary-list">
              ${(slide.summary || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </div>
        </aside>
        <div>
          ${renderSections(slide.sections)}
          ${renderQuestions(slide.questions)}
          ${renderCheats(slide.cheats)}
        </div>
      </div>
    </section>
  `;

  slideKicker.textContent = `${state.index + 1}. ${slide.eyebrow}`;
  progressLabel.textContent = `${state.index + 1} / ${slides.length}`;
  progressBar.style.width = `${((state.index + 1) / slides.length) * 100}%`;
  updateRail();
  requestAnimationFrame(() => deck.focus({ preventScroll: true }));
  if (window.lucide) window.lucide.createIcons();
}

function renderRail() {
  rail.innerHTML = slides.map((slide, idx) => `
    <button class="rail-button" type="button" data-index="${idx}" aria-label="${idx + 1}번 장표">
      <span class="rail-num">${idx + 1}</span>
      <span>${escapeHtml(slide.eyebrow)}</span>
    </button>
  `).join("");

  rail.addEventListener("click", (event) => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    goTo(Number(button.dataset.index));
  });
}

function updateRail() {
  rail.querySelectorAll(".rail-button").forEach((button, idx) => {
    button.classList.toggle("active", idx === state.index);
  });
}

function goTo(index) {
  state.index = Math.max(0, Math.min(slides.length - 1, index));
  renderSlide();
}

function next() {
  goTo(state.index + 1);
}

function prev() {
  goTo(state.index - 1);
}

document.getElementById("nextBtn").addEventListener("click", next);
document.getElementById("prevBtn").addEventListener("click", prev);
document.getElementById("firstBtn").addEventListener("click", () => goTo(0));
document.getElementById("lastBtn").addEventListener("click", () => goTo(slides.length - 1));
modeBtn.addEventListener("click", () => {
  state.answersVisible = !state.answersVisible;
  renderSlide();
});

window.addEventListener("keydown", (event) => {
  const tag = document.activeElement?.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") return;
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    next();
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    prev();
  }
  if (event.key === "Home") {
    event.preventDefault();
    goTo(0);
  }
  if (event.key === "End") {
    event.preventDefault();
    goTo(slides.length - 1);
  }
});

window.cramApi = { slides, state, renderRail, renderSlide };

renderRail();
renderSlide();
