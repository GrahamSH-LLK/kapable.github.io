function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

var TESTS = [
    // order tests with newly date order
    // facialExpressionAnalyzerCN
    {
        info : {
            mainTitle:"表情分析仪",
            subTitle:"狗，猫，人人都能做地表情分析仪",
            mainUrl:"facialExpressionAnalyzerCN",
            scoreType:"facialExpression",
            mainImage:"https://images.ktestone.com/introImages/facialExpressionAnalyzerCN-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/facialExpressionAnalyzerCN-thumb.png",
            lang:"CN"
        },
        questions:[
            {
                question: '데이트 전 날 나의 모습은?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '나가기 직전 마음에 드는 옷을 입는다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '자기 전 머릿속으로 나의 스타일링을 생각하고 잔다.'
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '전 날 머리부터 발끝까지 스타일링과 옷을 미리 준비한다.'
                    },
                ],
            },
            {
                question: "갑자기 자취방에 놀러 온다는 애인!\n그때의 나는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "아아... 왜 갑자기 오는 거야?! 보이는 곳만 치워 둔다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "모아둔 쓰레기를 버리고 바로 청소를 시작한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 미리미리 해 두었기 때문에 바로 주소를 보낸다."
                    },
                ]
            },
            {
                question: "좋아하는 이성이 생겼을 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "상대의 SNS을 탐방하며, 미래의 우리 모습을 상상해본다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "좋아하는 이성의 친구에게 도움을 요청한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "먼저 연락할 거리를 만들며 적극적으로 대시한다."
                    },
                ]
            },
            {
                question: "카페 안에 이상형인 사람과 계속 눈이 마주친다.\n 눈웃음까지 보내는데...?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "지금 말하면 좋은 말이 안 나올 것 같아. 좀 이따 연락할게."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "아!!!!!!!짜증나!!!!!진짜!!!!!! 도대체 왜 그러는 거야?!?!"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "이런 점에서 나는 화가 난 거야. 그런 부분은 고쳐줬으면 좋겠어."
                    },
                ]
            },
            {
                question: "쉬고 있는데 갑자기 걸려온 남사친/여사친의 전화, \n친구들이 같이 놀고 싶다며 나올 수 있냐고 물어보는데...?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: '귀찮은데… 아쉽긴 하지만 “시간이 너무 늦었어… 나 집에서 쉴래!”'
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "일단 끊고 수십 번 고민 끝에 나가기로 한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '오케이~ 인연 한 번 만들어보자~ “갈게~~~~”'
                    },
                ]
            },
            {
                question: "다가온 기념일! 나는 어떤 선물을 준비할까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "정성 어린 편지와 기억에 남을 만한 선물을 준비한다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "커플로 착용할 수 있는 아이템을 선물한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 사고 싶다거나 필요한 물건을 기억해 두었다가 서프라이즈로 선물한다."
                    },
                ]
            },
            {
                question: "내가 하고 싶은 연애 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "다이나믹한 화려한 연애 (단, 너무 화려해서 바람 피울 가능성 50%)"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "나만 바라보는 연애 (단, 너무 좋아해서 집착 대마왕)"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구같이 편안한 연애 (단, 가끔 친구인지 애인인지 헷갈림)"
                    },
                ]
            },
            {
                question: "애인과 대화할 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 5,
                        content: "장난치고 티키타카가 잘 되는 대화가 좋다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "서로의 생각을 공유하는 대화가 너무 좋다."
                    },
                ]
            },
            {
                question: "친구가 나에게 고민상당을 한다. 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "고민에 대한 구체적인 해결책을 제시한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "고민에 대해 빠져들어 감정적으로 같이 공감해준다."
                    },
                ]
            },
            {
                question: "기다려왔던 짝사랑하던 그/그녀와의 데이트 날..\n갑자기 급한 일이 생겼다며 다음에 만나자고 한다.\n과연 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "어쩔 수 없지… 알겠어 다음에 보자!"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "알겠어…근데 심각한 일이야?"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "아 진짜? 그럼 날짜 다시 조정하자! 언제가 괜찮아?"
                    },
                ]
            },
        ],
        results:[{type: 'human',
        desc: '',
        query: 'human1',
        score_range: range(1, 2),
        comment: '能抱抱我吗？'},
       {type: 'human',
        desc: '',
        query: 'human2',
        score_range: range(2, 3),
        comment: '能不能在我眼前消失？'},
       {type: 'human',
        desc: '',
        query: 'human3',
        score_range: range(3, 4),
        comment: '主谋 给我一杯水吧'},
       {type: 'human',
        desc: '',
        query: 'human4',
        score_range: range(4, 5),
        comment: '今天要和我在一起吗？'},
       {type: 'human',
        desc: '',
        query: 'human5',
        score_range: range(5, 6),
        comment: '看准我的眼睛。'},
       {type: 'human',
        desc: '',
        query: 'human6',
        score_range: range(6, 7),
        comment: '想休息~'},
       {type: 'human',
        desc: '',
        query: 'human7',
        score_range: range(7, 8),
        comment: '明天不想出去工作'},
       {type: 'human',
        desc: '',
        query: 'human8',
        score_range: range(8, 9),
        comment: '是单身还是单身的第年，我是谁？'},
       {type: 'human',
        desc: '',
        query: 'human9',
        score_range: range(9, 10),
        comment: '我是谁 这里是哪里'},
       {type: 'human',
        desc: '',
        query: 'human10',
        score_range: range(10, 11),
        comment: '给我交个朋友吧...'},
       {type: 'human',
        desc: '',
        query: 'human11',
        score_range: range(11, 12),
        comment: '人生还是一个人'},
       {type: 'human',
        desc: '',
        query: 'human12',
        score_range: range(12, 13),
        comment: '_好孤独啊'},
       {type: 'human',
        desc: '',
        query: 'human13',
        score_range: range(13, 14),
        comment: '是想要中彩票的天气'},
       {type: 'human',
        desc: '',
        query: 'human14',
        score_range: range(14, 15),
        comment: '神啊，为什么让我出生在这个地球上呢？'},
       {type: 'human',
        desc: '',
        query: 'human15',
        score_range: range(15, 16),
        comment: '明天打算辞职。'},
       {type: 'human',
        desc: '',
        query: 'human16',
        score_range: range(16, 17),
        comment: '想一整天躺着玩手机'},
       {type: 'human',
        desc: '',
        query: 'human17',
        score_range: range(17, 18),
        comment: '果然今晚要吃炒年糕'},
       {type: 'human',
        desc: '',
        query: 'human18',
        score_range: range(18, 19),
        comment: '想去夏威夷旅行'},
       {type: 'human',
        desc: '',
        query: 'human19',
        score_range: range(19, 20),
        comment: '我放的股票涨停吧！'},
       {type: 'human',
        desc: '',
        query: 'human20',
        score_range: range(20, 21),
        comment: '想成为有钱的无业游民'},
       {type: 'human',
        desc: '',
        query: 'human21',
        score_range: range(21, 22),
        comment: '音乐是我唯一允许的毒品'},
       {type: 'human',
        desc: '',
        query: 'human22',
        score_range: range(22, 23),
        comment: '我是个发财相'},
       {type: 'human',
        desc: '',
        query: 'human23',
        score_range: range(23, 24),
        comment: '想去济州岛'},
       {type: 'human',
        desc: '',
        query: 'human24',
        score_range: range(24, 25),
        comment: '别减肥了，想吃牛皱胃！！！！！'},
       {type: 'human',
        desc: '',
        query: 'human25',
        score_range: range(25, 26),
        comment: '别看我'},
       {type: 'human',
        desc: '',
        query: 'human26',
        score_range: range(26, 27),
        comment: '能借我点钱吗？'},
       {type: 'human',
        desc: '',
        query: 'human27',
        score_range: range(27, 28),
        comment: '啊...年前比特币该买的...得买才行'},
       {type: 'human',
        desc: '',
        query: 'human28',
        score_range: range(28, 29),
        comment: '中彩票的话 能给我一半吗？'},
       {type: 'human',
        desc: '',
        query: 'human29',
        score_range: range(29, 30),
        comment: '别跟我说话'},
       {type: 'human',
        desc: '',
        query: 'human30',
        score_range: range(30, 31),
        comment: '你很快就会陷入我的魅力中^^'},
       {type: 'human',
        desc: '',
        query: 'human31',
        score_range: range(31, 32),
        comment: '啊哈~ 就这样待在家里吗？'},
       {type: 'human',
        desc: '',
        query: 'human32',
        score_range: range(32, 33),
        comment: '去看电影吧~ 猜拳买电影票怎么样？'},
       {type: 'human',
        desc: '',
        query: 'human33',
        score_range: range(33, 34),
        comment: '家常饭都吃腻了~ 要不要出去吃好吃的？'},
       {type: 'human',
        desc: '',
        query: 'human34',
        score_range: range(34, 35),
        comment: '慢跑去吧! 你得运动一下了'},
       {type: 'human',
        desc: '',
        query: 'human35',
        score_range: range(35, 36),
        comment: '感觉你迟早会像球一样滚来滚去 来! 得去运动了'},
       {type: 'human',
        desc: '',
        query: 'human36',
        score_range: range(36, 37),
        comment: '看你的脖子, 乌龟要搭话了, 出去散散步吧'},
       {type: 'human',
        desc: '',
        query: 'human37',
        score_range: range(37, 38),
        comment: '那边好像有好吃的了~ 上次是我买的 今天你买吧'},
       {type: 'human',
        desc: '',
        query: 'human38',
        score_range: range(38, 39),
        comment: '去兜风吧！ 现在！'},
       {type: 'human',
        desc: '',
        query: 'human39',
        score_range: range(39, 40),
        comment: '我们去旅行吗？ 突然没有计划想去旅行'},
       {type: 'human',
        desc: '',
        query: 'human40',
        score_range: range(40, 41),
        comment: '今天只待在家里 厌倦了~ 我要出去一下'},
       {type: 'human',
        desc: '',
        query: 'human41',
        score_range: range(41, 42),
        comment: '现在几点了？啊 对了 今天是你请我吃好吃的日子！'},
       {type: 'human',
        desc: '',
        query: 'human42',
        score_range: range(42, 43),
        comment: '今天是星期几？ 啊 对了 我们说好今天打保龄球的'},
       {type: 'human',
        desc: '',
        query: 'human43',
        score_range: range(43, 44),
        comment: '今天是几号？ 啊 对了 我们今天要去咖啡店玩Bingo'},
       {type: 'human',
        desc: '',
        query: 'human44',
        score_range: range(44, 45),
        comment: '我们今天有约了 对！你说过要请我吃肉！'},
       {type: 'human',
        desc: '',
        query: 'human45',
        score_range: range(45, 46),
        comment: '现在出来~! 我在前面等你 到你来为止'},
       {type: 'human',
        desc: '',
        query: 'human46',
        score_range: range(46, 47),
        comment: '今天我身体不好，生病了，给我送点吃的吧。'},
       {type: 'human',
        desc: '',
        query: 'human47',
        score_range: range(47, 48),
        comment: '我的腿疼 背我吧'},
       {type: 'human',
        desc: '',
        query: 'human48',
        score_range: range(48, 49),
        comment: '我今天跟爱人有约 抱歉'},
       {type: 'human',
        desc: '',
        query: 'human49',
        score_range: range(49, 50),
        comment: '你昨天跟谁在一起？ 我昨天看到你跟别人在一起了'},
       {type: 'human',
        desc: '',
        query: 'human50',
        score_range: range(50, 51),
        comment: '他是谁？ 昨天不是牵着手走嘛'},
       {type: 'human',
        desc: '',
        query: 'human51',
        score_range: range(51, 52),
        comment: '我昨晚和那个人一起去散步了 太...很好。'},
       {type: 'human',
        desc: '',
        query: 'human52',
        score_range: range(52, 53),
        comment: '我昨天和那个人散步了个小时'},
       {type: 'human',
        desc: '',
        query: 'human53',
        score_range: range(53, 54),
        comment: '到此为止吧。 更..太勉强了'},
       {type: 'human',
        desc: '',
        query: 'human54',
        score_range: range(54, 55),
        comment: '我都厌倦了写这句台词，无话可说，我不想再说了（嘘！希望社长不知道）'},
       {type: 'human',
        desc: '',
        query: 'human55',
        score_range: range(55, 56),
        comment: '昨天去散步的时候发现了一个包，有亿...'},
       {type: 'human',
        desc: '',
        query: 'human56',
        score_range: range(56, 57),
        comment: '昨天我去警察局了。 吁'},
       {type: 'human',
        desc: '',
        query: 'human57',
        score_range: range(57, 58),
        comment: '昨天我..目击了杀人事件!'},
       {type: 'human',
        desc: '',
        query: 'human58',
        score_range: range(58, 59),
        comment: '今天做什么？和我...要约会吗？脚'},
       {type: 'human',
        desc: '',
        query: 'human59',
        score_range: range(59, 60),
        comment: '对不起..我有了爱的人.今天见那个人'},
       {type: 'human',
        desc: '',
        query: 'human60',
        score_range: range(60, 61),
        comment: '今天我特请。 准备愉快地玩吧。'},
       {type: 'human',
        desc: '',
        query: 'human61',
        score_range: range(61, 62),
        comment: '哦~ 我的心情就像新罗~~~~'},
       {type: 'human',
        desc: '',
        query: 'human62',
        score_range: range(62, 63),
        comment: '烦死了，求你走开。'},
       {type: 'human',
        desc: '',
        query: 'human63',
        score_range: range(63, 64),
        comment: '好孤独啊..霍格沃茨年级'},
       {type: 'human',
        desc: '',
        query: 'human64',
        score_range: range(64, 65),
        comment: '所谓林生，就是疲惫不堪'},
       {type: 'human',
        desc: '',
        query: 'human65',
        score_range: range(65, 66),
        comment: '因为心情不好，要不要喝一杯？'},
       {type: 'human',
        desc: '',
        query: 'human66',
        score_range: range(66, 67),
        comment: '为什么这么烦我？'},
       {type: 'human',
        desc: '',
        query: 'human67',
        score_range: range(67, 68),
        comment: '忧愁冲天'},
       {type: 'human',
        desc: '',
        query: 'human68',
        score_range: range(68, 69),
        comment: '我爱你 李子硕啊'},
       {type: 'human',
        desc: '',
        query: 'human69',
        score_range: range(69, 70),
        comment: '嘿！让我主持吧~'},
       {type: 'human',
        desc: '',
        query: 'human70',
        score_range: range(70, 71),
        comment: '我现在~~~~今晚~~~害怕黑暗~'},
       {type: 'human',
        desc: '',
        query: 'human71',
        score_range: range(71, 72),
        comment: '哎哟…感觉要吐了？'},
       {type: 'human',
        desc: '',
        query: 'human72',
        score_range: range(72, 73),
        comment: '哎呦 太无趣了 太无趣了'},
       {type: 'human',
        desc: '',
        query: 'human73',
        score_range: range(73, 74),
        comment: '心情郁闷！ 没有什么有趣的吗？'},
       {type: 'human',
        desc: '',
        query: 'human74',
        score_range: range(74, 75),
        comment: '我今天想哭 拥抱我吧'},
       {type: 'human',
        desc: '',
        query: 'human75',
        score_range: range(75, 76),
        comment: '一把手'},
       {type: 'human',
        desc: '',
        query: 'human76',
        score_range: range(76, 77),
        comment: '饭吃得多吗？ 怪不得看起来那样。'},
       {type: 'human',
        desc: '',
        query: 'human77',
        score_range: range(77, 78),
        comment: '正在经历忍耐的极限'},
       {type: 'human',
        desc: '',
        query: 'human78',
        score_range: range(78, 79),
        comment: '我想你。'},
       {type: 'human',
        desc: '',
        query: 'human79',
        score_range: range(79, 80),
        comment: '现在在想心爱的人。'},
       {type: 'human',
        desc: '',
        query: 'human80',
        score_range: range(80, 81),
        comment: '一想到今天也辛苦的我准备的炸鸡就激动不已！'},
       {type: 'human',
        desc: '',
        query: 'human81',
        score_range: range(81, 82),
        comment: '子道者也不解乏…'},
       {type: 'human',
        desc: '',
        query: 'human82',
        score_range: range(82, 83),
        comment: '给我导航吧！ 老实呆着也很累的人！'},
       {type: 'human',
        desc: '',
        query: 'human83',
        score_range: range(83, 84),
        comment: '哦~ 不简单啊！？'},
       {type: 'human',
        desc: '',
        query: 'human84',
        score_range: range(84, 85),
        comment: '现在累了吗？'},
       {type: 'human',
        desc: '',
        query: 'human85',
        score_range: range(85, 86),
        comment: '悄然流出的叹息'},
       {type: 'human',
        desc: '',
        query: 'human86',
        score_range: range(86, 87),
        comment: '彼此…珍爱…爱…'},
       {type: 'human',
        desc: '',
        query: 'human87',
        score_range: range(87, 88),
        comment: '朋友们啊…谢谢…'},
       {type: 'human',
        desc: '',
        query: 'human88',
        score_range: range(88, 89),
        comment: '不不不…不…不…眼泪…掉下来了…^^'},
       {type: 'human',
        desc: '',
        query: 'human89',
        score_range: range(89, 90),
        comment: '不要说别说的话'},
       {type: 'human',
        desc: '',
        query: 'human90',
        score_range: range(90, 91),
        comment: '呼~~~~派对啊~~~'},
       {type: 'human',
        desc: '',
        query: 'human91',
        score_range: range(91, 92),
        comment: '没有任何想法。 因为没有任何想法。'},
       {type: 'human',
        desc: '',
        query: 'human92',
        score_range: range(92, 93),
        comment: '我为什么在这里…'},
       {type: 'human',
        desc: '',
        query: 'human93',
        score_range: range(93, 94),
        comment: '想回家…'},
       {type: 'human',
        desc: '',
        query: 'human94',
        score_range: range(94, 95),
        comment: '开心吗..?'},
       {type: 'human',
        desc: '',
        query: 'human95',
        score_range: range(95, 96),
        comment: '哎呦 没意义'},
       {type: 'human',
        desc: '',
        query: 'human96',
        score_range: range(96, 97),
        comment: '吃的时候不要碰'},
       {type: 'human',
        desc: '',
        query: 'human97',
        score_range: range(97, 98),
        comment: '不值得听 哈 再见'},
       {type: 'human',
        desc: '',
        query: 'human98',
        score_range: range(98, 99),
        comment: '怎么办...？'},
       {type: 'human',
        desc: '',
        query: 'human99',
        score_range: range(99, 100),
        comment: '真烦人。'},
       {type: 'human',
        desc: '',
        query: 'human100',
        score_range: range(100, 101),
        comment: '哎哟…不想做…'},
       {type: 'human',
        desc: '',
        query: 'human101',
        score_range: range(101, 102),
        comment: '知道什么…我走我的路…'},
       {type: 'human',
        desc: '',
        query: 'human102',
        score_range: range(102, 103),
        comment: '我听不见~ 听不见~'},
       {type: 'human',
        desc: '',
        query: 'human103',
        score_range: range(103, 104),
        comment: '我不出门，只待在家里！'},
       {type: 'human',
        desc: '',
        query: 'human104',
        score_range: range(104, 105),
        comment: '不要对我期待'},
       {type: 'human',
        desc: '',
        query: 'human105',
        score_range: range(105, 106),
        comment: '血压上升中'},
       {type: 'human',
        desc: '',
        query: 'human106',
        score_range: range(106, 107),
        comment: '我怎么了'},
       {type: 'human',
        desc: '',
        query: 'human107',
        score_range: range(107, 108),
        comment: '想一个人待着'},
       {type: 'human',
        desc: '',
        query: 'human108',
        score_range: range(108, 109),
        comment: '一整天都想躺着'},
       {type: 'human',
        desc: '',
        query: 'human109',
        score_range: range(109, 110),
        comment: '好吧（麻烦）'},
       {type: 'human',
        desc: '',
        query: 'human110',
        score_range: range(110, 111),
        comment: '人生本来就是随随便便的。'},
       {type: 'human',
        desc: '',
        query: 'human111',
        score_range: range(111, 112),
        comment: '反正我就是宇宙尘埃的存在…'},
       {type: 'human',
        desc: '',
        query: 'human112',
        score_range: range(112, 113),
        comment: '坐卧人心'},
       {type: 'human',
        desc: '',
        query: 'human113',
        score_range: range(113, 114),
        comment: '不满意'},
       {type: 'human',
        desc: '',
        query: 'human114',
        score_range: range(114, 115),
        comment: '丧失生活欲望'},
       {type: 'human',
        desc: '',
        query: 'human115',
        score_range: range(115, 116),
        comment: '好想中彩票啊...'},
       {type: 'human',
        desc: '',
        query: 'human116',
        score_range: range(116, 117),
        comment: '今天就做到这里吧.明天的我来吧'},
       {type: 'human',
        desc: '',
        query: 'human117',
        score_range: range(117, 118),
        comment: '那有什么意义呢~'},
       {type: 'human',
        desc: '',
        query: 'human118',
        score_range: range(118, 119),
        comment: '厌倦~~厌倦~~'},
       {type: 'human',
        desc: '',
        query: 'human119',
        score_range: range(119, 120),
        comment: '有时也会这样。'},
       {type: 'human',
        desc: '',
        query: 'human120',
        score_range: range(120, 121),
        comment: '还是放弃吧^_^'},
       {type: 'human',
        desc: '',
        query: 'human121',
        score_range: range(121, 122),
        comment: '来了？'},
       {type: 'human',
        desc: '',
        query: 'human122',
        score_range: range(122, 123),
        comment: '啊，再见..!'},
       {type: 'human',
        desc: '',
        query: 'human123',
        score_range: range(123, 124),
        comment: '好好过吧！'},
       {type: 'human',
        desc: '',
        query: 'human124',
        score_range: range(124, 125),
        comment: '呀~ 身体变好了啊？'},
       {type: 'human',
        desc: '',
        query: 'human125',
        score_range: range(125, 126),
        comment: '真的好久不见！'},
       {type: 'human',
        desc: '',
        query: 'human126',
        score_range: range(126, 127),
        comment: '早上好！'},
       {type: 'human',
        desc: '',
        query: 'human127',
        score_range: range(127, 128),
        comment: '什么时候吃饭吧~ (礼貌的话)'},
       {type: 'human',
        desc: '',
        query: 'human128',
        score_range: range(128, 129),
        comment: '喂 我走了！'},
       {type: 'human',
        desc: '',
        query: 'human129',
        score_range: range(129, 130),
        comment: '嗨！'},
       {type: 'human',
        desc: '',
        query: 'human130',
        score_range: range(130, 131),
        comment: '喂！是这里！这里！'},
       {type: 'human',
        desc: '',
        query: 'human131',
        score_range: range(131, 132),
        comment: '我们什么时候见一次面吧~'},
       {type: 'human',
        desc: '',
        query: 'human132',
        score_range: range(132, 133),
        comment: '（在路上遇到的概率更高）'},
       {type: 'human',
        desc: '',
        query: 'human133',
        score_range: range(133, 134),
        comment: '喂！！！！！你是谁？？？！！'},
       {type: 'human',
        desc: '',
        query: 'human134',
        score_range: range(134, 135),
        comment: '(好久不见 很高兴见到大家 但是没什么可说的'},
       {type: 'human',
        desc: '',
        query: 'human135',
        score_range: range(135, 136),
        comment: '尖叫着）'},
       {type: 'human',
        desc: '',
        query: 'human136',
        score_range: range(136, 137),
        comment: '我先走了！'},
       {type: 'human',
        desc: '',
        query: 'human137',
        score_range: range(137, 138),
        comment: '要喝一杯吧？'},
       {type: 'human',
        desc: '',
        query: 'human138',
        score_range: range(138, 139),
        comment: '女！~'},
       {type: 'human',
        desc: '',
        query: 'human139',
        score_range: range(139, 140),
        comment: '你好像瘦了？'},
       {type: 'human',
        desc: '',
        query: 'human140',
        score_range: range(140, 141),
        comment: '晚安♥'},
       {type: 'human',
        desc: '',
        query: 'human141',
        score_range: range(141, 142),
        comment: '再见..><'},
       {type: 'human',
        desc: '',
        query: 'human142',
        score_range: range(142, 143),
        comment: '过得好吗？'},
       {type: 'human',
        desc: '',
        query: 'human143',
        score_range: range(143, 144),
        comment: '现在几点了？'},
       {type: 'human',
        desc: '',
        query: 'human144',
        score_range: range(144, 145),
        comment: '辛苦了！'},
       {type: 'human',
        desc: '',
        query: 'human145',
        score_range: range(145, 146),
        comment: '肚子饿！'},
       {type: 'human',
        desc: '',
        query: 'human146',
        score_range: range(146, 147),
        comment: '走的时候小心点！'},
       {type: 'human',
        desc: '',
        query: 'human147',
        score_range: range(147, 148),
        comment: '走好！'},
       {type: 'human',
        desc: '',
        query: 'human148',
        score_range: range(148, 149),
        comment: '吃饭了吗?..'},
       {type: 'human',
        desc: '',
        query: 'human149',
        score_range: range(149, 150),
        comment: '要去哪里？'},
       {type: 'human',
        desc: '',
        query: 'human150',
        score_range: range(150, 151),
        comment: '喂 对不起 对不起 迟到了...'},
       {type: 'human',
        desc: '',
        query: 'human151',
        score_range: range(151, 152),
        comment: '要做什么？'},
       {type: 'human',
        desc: '',
        query: 'human152',
        score_range: range(152, 153),
        comment: '哦莫 变漂亮了！'},
       {type: 'human',
        desc: '',
        query: 'human153',
        score_range: range(153, 154),
        comment: '我今天没什么变化吗？'},
       {type: 'human',
        desc: '',
        query: 'human154',
        score_range: range(154, 155),
        comment: 'Y氏 这是真的吗？我要洗漱吗？'},
       {type: 'human',
        desc: '',
        query: 'human155',
        score_range: range(155, 156),
        comment: '今天果断地刷牙传球。'},
       {type: 'human',
        desc: '',
        query: 'human156',
        score_range: range(156, 157),
        comment: '为什么要洗脸？'},
       {type: 'human',
        desc: '',
        query: 'human157',
        score_range: range(157, 158),
        comment: 'Take 呃 要洗澡啊 干爽干爽~'},
       {type: 'human',
        desc: '',
        query: 'human158',
        score_range: range(158, 159),
        comment: '我洗漱的时候先洗头 那个很好'},
       {type: 'human',
        desc: '',
        query: 'human159',
        score_range: range(159, 160),
        comment: '夏天也用热水洗澡的我是辣酱~'},
       {type: 'human',
        desc: '',
        query: 'human160',
        score_range: range(160, 161),
        comment: '如果真的有清洗的机器，就先买股票。'},
       {type: 'human',
        desc: '',
        query: 'human161',
        score_range: range(161, 162),
        comment: '哇 今天太懒得洗漱了'},
       {type: 'human',
        desc: '',
        query: 'human162',
        score_range: range(162, 163),
        comment: '能帮我洗洗吗？^^'},
       {type: 'human',
        desc: '',
        query: 'human163',
        score_range: range(163, 164),
        comment: '水温怎么样？'},
       {type: 'human',
        desc: '',
        query: 'human164',
        score_range: range(164, 165),
        comment: '没有入浴剂就不洗澡。'},
       {type: 'human',
        desc: '',
        query: 'human165',
        score_range: range(165, 166),
        comment: '洗完澡，香蕉牛奶是国规'},
       {type: 'human',
        desc: '',
        query: 'human166',
        score_range: range(166, 167),
        comment: '今天就干爽地走吧~~~~'},
       {type: 'human',
        desc: '',
        query: 'human167',
        score_range: range(167, 168),
        comment: '洗完澡后很困吗~啊~ 是啤酒！'},
       {type: 'human',
        desc: '',
        query: 'human168',
        score_range: range(168, 169),
        comment: '待会儿要洗漱 现在已经是凌晨了...ee'},
       {type: 'human',
        desc: '',
        query: 'human169',
        score_range: range(169, 170),
        comment: '洗完澡照镜子！ 这程度就不错了。'},
       {type: 'human',
        desc: '',
        query: 'human170',
        score_range: range(170, 171),
        comment: '洗完澡每次都会有不同的人登场！'},
       {type: 'human',
        desc: '',
        query: 'human171',
        score_range: range(171, 172),
        comment: '不洗了…昨天洗过了…'},
       {type: 'human',
        desc: '',
        query: 'human172',
        score_range: range(172, 173),
        comment: '最小洁癖...'},
       {type: 'human',
        desc: '',
        query: 'human173',
        score_range: range(173, 174),
        comment: '使用洗发水护发素护发素沐浴露磨砂膏面膜。'},
       {type: 'human',
        desc: '',
        query: 'human174',
        score_range: range(174, 175),
        comment: '你身上总有一股清香的味道。 你洗了吗？'},
       {type: 'human',
        desc: '',
        query: 'human175',
        score_range: range(175, 176),
        comment: '你身上总是有屁味儿。 你没洗吗？'},
       {type: 'human',
        desc: '',
        query: 'human176',
        score_range: range(176, 177),
        comment: '还是洗洗吧。'},
       {type: 'human',
        desc: '',
        query: 'human177',
        score_range: range(177, 178),
        comment: '从头到脚~ 要洗干净~'},
       {type: 'human',
        desc: '',
        query: 'human178',
        score_range: range(178, 179),
        comment: '外出后洗手和洗脚'},
       {type: 'human',
        desc: '',
        query: 'human179',
        score_range: range(179, 180),
        comment: '连指甲也干净地！ 清澈地！自信地~！'},
       {type: 'human',
        desc: '',
        query: 'human180',
        score_range: range(180, 181),
        comment: '不要漱口，要刷牙。'},
       {type: 'human',
        desc: '',
        query: 'human181',
        score_range: range(181, 182),
        comment: '嘴里发出那种味道就是要洗漱的意思'},
       {type: 'human',
        desc: '',
        query: 'human182',
        score_range: range(182, 183),
        comment: '你是不是没有鼻子？'},
       {type: 'human',
        desc: '',
        query: 'human183',
        score_range: range(183, 184),
        comment: '闻到了~味道！ 飞起来了！~'},
       {type: 'human',
        desc: '',
        query: 'human184',
        score_range: range(184, 185),
        comment: '肚子饿，能给我点饭吗？'},
       {type: 'human',
        desc: '',
        query: 'human185',
        score_range: range(185, 186),
        comment: 'OO啊 汤有点咸'},
       {type: 'human',
        desc: '',
        query: 'human186',
        score_range: range(186, 187),
        comment: '这是米饭吗？'},
       {type: 'human',
        desc: '',
        query: 'human187',
        score_range: range(187, 188),
        comment: '今天的菜是什么？'},
       {type: 'human',
        desc: '',
        query: 'human188',
        score_range: range(188, 189),
        comment: '我是素食主义者！'},
       {type: 'human',
        desc: '',
        query: 'human189',
        score_range: range(189, 190),
        comment: '没有肉就不吃饭！'},
       {type: 'human',
        desc: '',
        query: 'human190',
        score_range: range(190, 191),
        comment: '速食是最棒的！'},
       {type: 'human',
        desc: '',
        query: 'human191',
        score_range: range(191, 192),
        comment: '啊~肚子好饱~~~~'},
       {type: 'human',
        desc: '',
        query: 'human192',
        score_range: range(192, 193),
        comment: '讨厌蔬菜！！！！'},
       {type: 'human',
        desc: '',
        query: 'human193',
        score_range: range(193, 194),
        comment: '量太少了！ 再给我一点！！'},
       {type: 'human',
        desc: '',
        query: 'human194',
        score_range: range(194, 195),
        comment: '太多了~ 盛出来吧！'},
       {type: 'human',
        desc: '',
        query: 'human195',
        score_range: range(195, 196),
        comment: '咕噜噜...'},
       {type: 'human',
        desc: '',
        query: 'human196',
        score_range: range(196, 197),
        comment: '今天是炒年糕！'},
       {type: 'human',
        desc: '',
        query: 'human197',
        score_range: range(197, 198),
        comment: '想要甜甜的~~~~'},
       {type: 'human',
        desc: '',
        query: 'human198',
        score_range: range(198, 199),
        comment: '太热了，吃冰淇淋怎么样？'},
       {type: 'human',
        desc: '',
        query: 'human199',
        score_range: range(199, 200),
        comment: '好冷...我想喝热汤！'},
       {type: 'human',
        desc: '',
        query: 'human200',
        score_range: range(200, 201),
        comment: '没胃口..我不吃了。'},
       {type: 'human',
        desc: '',
        query: 'human201',
        score_range: range(201, 202),
        comment: '糖稀中！！ 从我眼前收拾一下菜！'},
       {type: 'human',
        desc: '',
        query: 'human202',
        score_range: range(202, 203),
        comment: '尝一口~！'},
       {type: 'human',
        desc: '',
        query: 'human203',
        score_range: range(203, 204),
        comment: '什么呀~？超级好吃！！ JMT'},
       {type: 'human',
        desc: '',
        query: 'human204',
        score_range: range(204, 205),
        comment: '这个也叫料理吗？ 不好吃 呸！'},
       {type: 'human',
        desc: '',
        query: 'human205',
        score_range: range(205, 206),
        comment: '来一杯凉爽的水吧~'},
       {type: 'human',
        desc: '',
        query: 'human206',
        score_range: range(206, 207),
        comment: '想去美食店旅游！ 出去吧~'},
       {type: 'human',
        desc: '',
        query: 'human207',
        score_range: range(207, 208),
        comment: '夜宵好~？'},
       {type: 'human',
        desc: '',
        query: 'human208',
        score_range: range(208, 209),
        comment: '猪蹄怎么样？大发吧~~？'},
       {type: 'human',
        desc: '',
        query: 'human209',
        score_range: range(209, 210),
        comment: '吃的时候连狗都不碰'},
       {type: 'human',
        desc: '',
        query: 'human210',
        score_range: range(210, 211),
        comment: '请拿出八道套餐！'},
       {type: 'human',
        desc: '',
        query: 'human211',
        score_range: range(211, 212),
        comment: '请我吃牛肉吧。哦哦哦哦~~！'},
       {type: 'human',
        desc: '',
        query: 'human212',
        score_range: range(212, 213),
        comment: '为什么吃那个？'},
       {type: 'human',
        desc: '',
        query: 'human213',
        score_range: range(213, 214),
        comment: '别太担心，一切都会好起来的！'},
       {type: 'human',
        desc: '',
        query: 'human214',
        score_range: range(214, 215),
        comment: '过去的事就过去了~忘了'},
       {type: 'human',
        desc: '',
        query: 'human215',
        score_range: range(215, 216),
        comment: '累的时候去散步怎么样？'},
       {type: 'human',
        desc: '',
        query: 'human216',
        score_range: range(216, 217),
        comment: '今天一天也辛苦了！'},
       {type: 'human',
        desc: '',
        query: 'human217',
        score_range: range(217, 218),
        comment: '悲伤的话可以依靠我'},
       {type: 'human',
        desc: '',
        query: 'human218',
        score_range: range(218, 219),
        comment: '累的时候时间就是良药。 这也会成为过去!'},
       {type: 'human',
        desc: '',
        query: 'human219',
        score_range: range(219, 220),
        comment: '你身边有我。 加油吧！'},
       {type: 'human',
        desc: '',
        query: 'human220',
        score_range: range(220, 221),
        comment: '想哭的时候哭也没关系'},
       {type: 'human',
        desc: '',
        query: 'human221',
        score_range: range(221, 222),
        comment: '希望我能给你带来安慰。'},
       {type: 'human',
        desc: '',
        query: 'human222',
        score_range: range(222, 223),
        comment: '不管谁说什么 你是最棒的'},
       {type: 'human',
        desc: '',
        query: 'human223',
        score_range: range(223, 224),
        comment: '想想那些疼爱你的人吧！'},
       {type: 'human',
        desc: '',
        query: 'human224',
        score_range: range(224, 225),
        comment: '吃好吃的东西心情会好一点的！'},
       {type: 'human',
        desc: '',
        query: 'human225',
        score_range: range(225, 226),
        comment: '有什么事吗？我都听你的'},
       {type: 'human',
        desc: '',
        query: 'human226',
        score_range: range(226, 227),
        comment: '是谁让你累的？ 带过来！'},
       {type: 'human',
        desc: '',
        query: 'human227',
        score_range: range(227, 228),
        comment: '你的存在本身就很耀眼'},
       {type: 'human',
        desc: '',
        query: 'human228',
        score_range: range(228, 229),
        comment: '我会一直为你加油的 明天也加油！'},
       {type: 'human',
        desc: '',
        query: 'human229',
        score_range: range(229, 230),
        comment: '对我来说你是最棒的。 最珍贵'},
       {type: 'human',
        desc: '',
        query: 'human230',
        score_range: range(230, 231),
        comment: '振作起来 你已经是帅气的人了'},
       {type: 'human',
        desc: '',
        query: 'human231',
        score_range: range(231, 232),
        comment: '想哭的时候哭也没关系'},
       {type: 'human',
        desc: '',
        query: 'human232',
        score_range: range(232, 233),
        comment: '不用跟别人比。 你本身就很耀眼'},
       {type: 'human',
        desc: '',
        query: 'human233',
        score_range: range(233, 234),
        comment: '你也是对某些人来说很珍贵的人啊'},
       {type: 'human',
        desc: '',
        query: 'human234',
        score_range: range(234, 235),
        comment: '今天也辛苦了。'},
       {type: 'human',
        desc: '',
        query: 'human235',
        score_range: range(235, 236),
        comment: '明天也会为你加油的'},
       {type: 'human',
        desc: '',
        query: 'human236',
        score_range: range(236, 237),
        comment: '谢谢你一直以来的努力'},
       {type: 'human',
        desc: '',
        query: 'human237',
        score_range: range(237, 238),
        comment: '别担心 做得够好了！'},
       {type: 'human',
        desc: '',
        query: 'human238',
        score_range: range(238, 239),
        comment: '没关系 只要像现在这样就行'},
       {type: 'human',
        desc: '',
        query: 'human239',
        score_range: range(239, 240),
        comment: '忧郁的话去吃好吃的怎么样？'},
       {type: 'human',
        desc: '',
        query: 'human240',
        score_range: range(240, 241),
        comment: '心情郁闷的时候？ 去旅行吧~！'},
       {type: 'human',
        desc: '',
        query: 'human241',
        score_range: range(241, 242),
        comment: '有时也需要拥有属于我的时间'},
       {type: 'human',
        desc: '',
        query: 'human242',
        score_range: range(242, 243),
        comment: '幸福是从细微处寻找的'},
       {type: 'human',
        desc: '',
        query: 'human243',
        score_range: range(243, 244),
        comment: '已经天没拉屎了，好累啊。'},
       {type: 'human',
        desc: '',
        query: 'human244',
        score_range: range(244, 245),
        comment: '哈..我的粪便味道太重了 我要带着喷雾器出门了。'},
       {type: 'human',
        desc: '',
        query: 'human245',
        score_range: range(245, 246),
        comment: '上次没上厕所 谁也不知道吧？'},
       {type: 'human',
        desc: '',
        query: 'human246',
        score_range: range(246, 247),
        comment: '早上起来拉屎就是幸福。'},
       {type: 'human',
        desc: '',
        query: 'human247',
        score_range: range(247, 248),
        comment: '现在不会把我当成了臭小子吧？'},
       {type: 'human',
        desc: '',
        query: 'human248',
        score_range: range(248, 249),
        comment: '我可以憋尿个小时。'},
       {type: 'human',
        desc: '',
        query: 'human249',
        score_range: range(249, 250),
        comment: '一吃蔬菜就会出来绿色的屎 很神奇吧？'},
       {type: 'human',
        desc: '',
        query: 'human250',
        score_range: range(250, 251),
        comment: '想拉屎。'},
       {type: 'human',
        desc: '',
        query: 'human251',
        score_range: range(251, 252),
        comment: '尿急。'},
       {type: 'human',
        desc: '',
        query: 'human252',
        score_range: range(252, 253),
        comment: '"这是忍到屎哗哗出来为止，然后拉下屎的人的表情。"'},
       {type: 'human',
        desc: '',
        query: 'human253',
        score_range: range(253, 254),
        comment: '偶尔对不起我的心脏。 只送了太重的食物'},
       {type: 'human',
        desc: '',
        query: 'human254',
        score_range: range(254, 255),
        comment: '喂 我真的忍不住了 上厕所吧'},
       {type: 'human',
        desc: '',
        query: 'human255',
        score_range: range(255, 256),
        comment: '洗手间在哪里？'},
       {type: 'human',
        desc: '',
        query: 'human256',
        score_range: range(256, 257),
        comment: '我想念普世式卫生间 给力很方便'},
       {type: 'human',
        desc: '',
        query: 'human257',
        score_range: range(257, 258),
        comment: '啊.昨天吃错什么了吗 肚子怎么这么疼'},
       {type: 'human',
        desc: '',
        query: 'human258',
        score_range: range(258, 259),
        comment: '为什么腹泻时肚子疼？'},
       {type: 'human',
        desc: '',
        query: 'human259',
        score_range: range(259, 260),
        comment: '听说以前有人在床上拉屎的时候会感到快感，那就是我。'},
       {type: 'human',
        desc: '',
        query: 'human260',
        score_range: range(260, 261),
        comment: '卫生间舒适的话心情会很好。'},
       {type: 'human',
        desc: '',
        query: 'human261',
        score_range: range(261, 262),
        comment: '不管建筑多好，厕所脏的话，首先会感到烦躁动起来'},
       {type: 'human',
        desc: '',
        query: 'human262',
        score_range: range(262, 263),
        comment: '我昨天尿床了。'},
       {type: 'cat',
        desc: '',
        query: 'cat1',
        score_range: range(1, 2),
        comment: '把零食拿过来'},
       {type: 'cat',
        desc: '',
        query: 'cat2',
        score_range: range(2, 3),
        comment: '不要碰我好吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat3',
        score_range: range(3, 4),
        comment: '就让我一个人呆着吧'},
       {type: 'cat',
        desc: '',
        query: 'cat4',
        score_range: range(4, 5),
        comment: '铲屎官别看别的猫！'},
       {type: 'cat',
        desc: '',
        query: 'cat5',
        score_range: range(5, 6),
        comment: '管家只看着我 只爱我 只照顾我'},
       {type: 'cat',
        desc: '',
        query: 'cat6',
        score_range: range(6, 7),
        comment: '安静点'},
       {type: 'cat',
        desc: '',
        query: 'cat7',
        score_range: range(7, 8),
        comment: '我最讨厌吵闹的了'},
       {type: 'cat',
        desc: '',
        query: 'cat8',
        score_range: range(8, 9),
        comment: '想和我沟通的话 眨眼'},
       {type: 'cat',
        desc: '',
        query: 'cat9',
        score_range: range(9, 10),
        comment: '好想和管家搓澡啊！'},
       {type: 'cat',
        desc: '',
        query: 'cat10',
        score_range: range(10, 11),
        comment: '只有在我允许的时候 才能触摸我'},
       {type: 'cat',
        desc: '',
        query: 'cat11',
        score_range: range(11, 12),
        comment: '给我带点鱼吧'},
       {type: 'cat',
        desc: '',
        query: 'cat12',
        score_range: range(12, 13),
        comment: '回家的时候把箱子拿过来吧'},
       {type: 'cat',
        desc: '',
        query: 'cat13',
        score_range: range(13, 14),
        comment: '想一个人进塑料袋里待着'},
       {type: 'cat',
        desc: '',
        query: 'cat14',
        score_range: range(14, 15),
        comment: '现在碰的话等着瞧吧！'},
       {type: 'cat',
        desc: '',
        query: 'cat15',
        score_range: range(15, 16),
        comment: '要不要挨打？'},
       {type: 'cat',
        desc: '',
        query: 'cat16',
        score_range: range(16, 17),
        comment: '把玩具拿来！ 跟我玩吧！'},
       {type: 'cat',
        desc: '',
        query: 'cat17',
        score_range: range(17, 18),
        comment: '我好无聊！'},
       {type: 'cat',
        desc: '',
        query: 'cat18',
        score_range: range(18, 19),
        comment: '困了就别管了 睡觉吧'},
       {type: 'cat',
        desc: '',
        query: 'cat19',
        score_range: range(19, 20),
        comment: '伊洛瓦巴'},
       {type: 'cat',
        desc: '',
        query: 'cat20',
        score_range: range(20, 21),
        comment: '能去那边吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat21',
        score_range: range(21, 22),
        comment: '适当的温度 湿度 一切都喜欢 很舒服'},
       {type: 'cat',
        desc: '',
        query: 'cat22',
        score_range: range(22, 23),
        comment: '能摸到我的氛围是下巴下面。 末梢'},
       {type: 'cat',
        desc: '',
        query: 'cat23',
        score_range: range(23, 24),
        comment: '玩具拜托了 各种各样'},
       {type: 'cat',
        desc: '',
        query: 'cat24',
        score_range: range(24, 25),
        comment: '我的脚是非常可爱的粉色Style ^>^'},
       {type: 'cat',
        desc: '',
        query: 'cat25',
        score_range: range(25, 26),
        comment: '好好地过来吧'},
       {type: 'cat',
        desc: '',
        query: 'cat26',
        score_range: range(26, 27),
        comment: '能买点新品吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat27',
        score_range: range(27, 28),
        comment: '知道困了还怕自己的心情吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat28',
        score_range: range(28, 29),
        comment: '铲屎官最近很满意了'},
       {type: 'cat',
        desc: '',
        query: 'cat29',
        score_range: range(29, 30),
        comment: '没有什么有趣的事情吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat30',
        score_range: range(30, 31),
        comment: '我可以用胡须统治这个世界'},
       {type: 'cat',
        desc: '',
        query: 'cat31',
        score_range: range(31, 32),
        comment: '你不知道昨晚发生了什么事吧？'},
       {type: 'cat',
        desc: '',
        query: 'cat32',
        score_range: range(32, 33),
        comment: '你知道我不去散步吧？'},
       {type: 'cat',
        desc: '',
        query: 'cat33',
        score_range: range(33, 34),
        comment: '稍微散去的小狗…… 我是一只伟大的猫'},
       {type: 'cat',
        desc: '',
        query: 'cat34',
        score_range: range(34, 35),
        comment: '伟大的猫咪不去散步'},
       {type: 'cat',
        desc: '',
        query: 'cat35',
        score_range: range(35, 36),
        comment: '伟大的猫咪不会被牵着鼻子走'},
       {type: 'cat',
        desc: '',
        query: 'cat36',
        score_range: range(36, 37),
        comment: '如果出去的话，就抱着我出去吧'},
       {type: 'cat',
        desc: '',
        query: 'cat37',
        score_range: range(37, 38),
        comment: '如果知道漂亮的猫咪就给我介绍吧'},
       {type: 'cat',
        desc: '',
        query: 'cat38',
        score_range: range(38, 39),
        comment: '饿了, 给我吃的'},
       {type: 'cat',
        desc: '',
        query: 'cat39',
        score_range: range(39, 40),
        comment: '今天想休息, 别惹我'},
       {type: 'cat',
        desc: '',
        query: 'cat40',
        score_range: range(40, 41),
        comment: '不想走太久。 我可爱的软糖会磨损的'},
       {type: 'cat',
        desc: '',
        query: 'cat41',
        score_range: range(41, 42),
        comment: '我喜欢风凉飕飕的日子。 今天是那个时候'},
       {type: 'cat',
        desc: '',
        query: 'cat42',
        score_range: range(42, 43),
        comment: '抱我的时候小心点儿，用两只手啊！'},
       {type: 'cat',
        desc: '',
        query: 'cat43',
        score_range: range(43, 44),
        comment: '踩土心情不好啊 拥抱我吧'},
       {type: 'cat',
        desc: '',
        query: 'cat44',
        score_range: range(44, 45),
        comment: '柏油马路硬邦邦的, 不好受啊, 抱我'},
       {type: 'cat',
        desc: '',
        query: 'cat45',
        score_range: range(45, 46),
        comment: '不要让阳光太强烈的日子出去, 保护我的皮肤'},
       {type: 'cat',
        desc: '',
        query: 'cat46',
        score_range: range(46, 47),
        comment: '今天有点累啊，快来吃饭吧~'},
       {type: 'cat',
        desc: '',
        query: 'cat47',
        score_range: range(47, 48),
        comment: '今天是毛团儿的一天啊, 梳理我的毛吧'},
       {type: 'cat',
        desc: '',
        query: 'cat48',
        score_range: range(48, 49),
        comment: '外边怎么这样吵嚷嚷的, 去个安静的地方吧'},
       {type: 'cat',
        desc: '',
        query: 'cat49',
        score_range: range(49, 50),
        comment: '哪天出去吃顿饭吧，吃腻了。'},
       {type: 'cat',
        desc: '',
        query: 'cat50',
        score_range: range(50, 51),
        comment: '这阵子老不见老鼠了, 你出去找一找吧'},
       {type: 'cat',
        desc: '',
        query: 'cat51',
        score_range: range(51, 52),
        comment: '啊，那是什么！ 好机灵啊！ 拦住他！'},
       {type: 'cat',
        desc: '',
        query: 'cat52',
        score_range: range(52, 53),
        comment: '今天不知为何是跳跃的好日子啊'},
       {type: 'cat',
        desc: '',
        query: 'cat53',
        score_range: range(53, 54),
        comment: '原来想抓机灵鬼啊~ 今天是猎人日！'},
       {type: 'cat',
        desc: '',
        query: 'cat54',
        score_range: range(54, 55),
        comment: '捉老鼠 捉老鼠 吱吱'},
       {type: 'cat',
        desc: '',
        query: 'cat55',
        score_range: range(55, 56),
        comment: '读过我的眼神吗！ 今天想要享受悠闲啊'},
       {type: 'cat',
        desc: '',
        query: 'cat56',
        score_range: range(56, 57),
        comment: '我的动作像蜜蜂一样快，我的毛像棉花一样柔软！'},
       {type: 'cat',
        desc: '',
        query: 'cat57',
        score_range: range(57, 58),
        comment: '今天太有意思了 现在回家吧'},
       {type: 'cat',
        desc: '',
        query: 'cat58',
        score_range: range(58, 59),
        comment: '好的 好的 出去吧！'},
       {type: 'cat',
        desc: '',
        query: 'cat59',
        score_range: range(59, 60),
        comment: '这阵子老呆在家里, 身上发闷了!'},
       {type: 'cat',
        desc: '',
        query: 'cat60',
        score_range: range(60, 61),
        comment: '感觉我变胖了吗？ 我们散散步吧？'},
       {type: 'cat',
        desc: '',
        query: 'cat61',
        score_range: range(61, 62),
        comment: '等一下 这是什么？ 我好像发现了什么'},
       {type: 'cat',
        desc: '',
        query: 'cat62',
        score_range: range(62, 63),
        comment: '哇 今天怎么这么开心？'},
       {type: 'cat',
        desc: '',
        query: 'cat63',
        score_range: range(63, 64),
        comment: '哎一古 自盗者也困吗'},
       {type: 'cat',
        desc: '',
        query: 'cat64',
        score_range: range(64, 65),
        comment: '什么都不想做啊'},
       {type: 'cat',
        desc: '',
        query: 'cat65',
        score_range: range(65, 66),
        comment: '我有点敏感 你点钱吧'},
       {type: 'cat',
        desc: '',
        query: 'cat66',
        score_range: range(66, 67),
        comment: '嘿嘿嘿嘿！心情都不好，给点零食吧'},
       {type: 'cat',
        desc: '',
        query: 'cat67',
        score_range: range(67, 68),
        comment: '嗯？那是什么？ 很好奇。'},
       {type: 'cat',
        desc: '',
        query: 'cat68',
        score_range: range(68, 69),
        comment: '为什么总是看我啊'},
       {type: 'cat',
        desc: '',
        query: 'cat69',
        score_range: range(69, 70),
        comment: '那是什么?! 太可怕了'},
       {type: 'cat',
        desc: '',
        query: 'cat70',
        score_range: range(70, 71),
        comment: '没关系吗？为什么这样？累吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat71',
        score_range: range(71, 72),
        comment: '哇 太害怕了 瑟瑟发抖 真是的'},
       {type: 'cat',
        desc: '',
        query: 'cat72',
        score_range: range(72, 73),
        comment: '我现在很集中 你说说看'},
       {type: 'cat',
        desc: '',
        query: 'cat73',
        score_range: range(73, 74),
        comment: '不要让我执着~？'},
       {type: 'cat',
        desc: '',
        query: 'cat74',
        score_range: range(74, 75),
        comment: '如果可以的话，可以打一拳吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat75',
        score_range: range(75, 76),
        comment: '极度的兴奋状态'},
       {type: 'cat',
        desc: '',
        query: 'cat76',
        score_range: range(76, 77),
        comment: '是啊 是啊~ 我相信你~'},
       {type: 'cat',
        desc: '',
        query: 'cat77',
        score_range: range(77, 78),
        comment: '没有什么有趣的吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat78',
        score_range: range(78, 79),
        comment: '他为什么又这样？'},
       {type: 'cat',
        desc: '',
        query: 'cat79',
        score_range: range(79, 80),
        comment: '嘿嘿嘿嘿 心情真好！'},
       {type: 'cat',
        desc: '',
        query: 'cat80',
        score_range: range(80, 81),
        comment: '因为心情好 所以给你一个摸我的肚子的机会'},
       {type: 'cat',
        desc: '',
        query: 'cat81',
        score_range: range(81, 82),
        comment: '我真的很喜欢你'},
       {type: 'cat',
        desc: '',
        query: 'cat82',
        score_range: range(82, 83),
        comment: '一直很感谢你！'},
       {type: 'cat',
        desc: '',
        query: 'cat83',
        score_range: range(83, 84),
        comment: '无聊，可以和我玩吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat84',
        score_range: range(84, 85),
        comment: '已经厌倦那个了！ 买新玩具吧！'},
       {type: 'cat',
        desc: '',
        query: 'cat85',
        score_range: range(85, 86),
        comment: '我玩得开心 呃呃呃呃！'},
       {type: 'cat',
        desc: '',
        query: 'cat86',
        score_range: range(86, 87),
        comment: '能喜欢我吗？ 不是请求而是命令！'},
       {type: 'cat',
        desc: '',
        query: 'cat87',
        score_range: range(87, 88),
        comment: '我很讨厌惹我。 我要一个人待着'},
       {type: 'cat',
        desc: '',
        query: 'cat88',
        score_range: range(88, 89),
        comment: '你抱抱我！'},
       {type: 'cat',
        desc: '',
        query: 'cat89',
        score_range: range(89, 90),
        comment: '不理解你的话 你总是一个人吃不理解你吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat90',
        score_range: range(90, 91),
        comment: '少喝点酒吧 人类~'},
       {type: 'cat',
        desc: '',
        query: 'cat91',
        score_range: range(91, 92),
        comment: '你对我睡觉有什么不满吗？ 那就好好珍藏吧'},
       {type: 'cat',
        desc: '',
        query: 'cat92',
        score_range: range(92, 93),
        comment: '管家。我现在很想念。 粪便'},
       {type: 'cat',
        desc: '',
        query: 'cat93',
        score_range: range(93, 94),
        comment: '如果不马上把沙子磨成新的，我会把鞋柜弄乱的。'},
       {type: 'cat',
        desc: '',
        query: 'cat94',
        score_range: range(94, 95),
        comment: '我身上要冒出一个巨大的东西。'},
       {type: 'cat',
        desc: '',
        query: 'cat95',
        score_range: range(95, 96),
        comment: '我想小便，但我不想。'},
       {type: 'cat',
        desc: '',
        query: 'cat96',
        score_range: range(96, 97),
        comment: '我经常想，卫生间不是我喜欢的类型。'},
       {type: 'cat',
        desc: '',
        query: 'cat97',
        score_range: range(97, 98),
        comment: '对不起，上次我把尿泡在地上了。'},
       {type: 'cat',
        desc: '',
        query: 'cat98',
        score_range: range(98, 99),
        comment: '刚才吃太多了吗？ 市场震荡。'},
       {type: 'cat',
        desc: '',
        query: 'cat99',
        score_range: range(99, 100),
        comment: '管家。我地便气味有花香，你同意吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat100',
        score_range: range(100, 101),
        comment: '快辩总是对的。'},
       {type: 'cat',
        desc: '',
        query: 'cat101',
        score_range: range(101, 102),
        comment: '帮我换一下卫生间的位置。 向阳光照射的位置。'},
       {type: 'cat',
        desc: '',
        query: 'cat102',
        score_range: range(102, 103),
        comment: '我毛里好像沾了尿 帮我确认一下。'},
       {type: 'cat',
        desc: '',
        query: 'cat103',
        score_range: range(103, 104),
        comment: '换一下饲料怎么样？管家。 消化不好。'},
       {type: 'cat',
        desc: '',
        query: 'cat104',
        score_range: range(104, 105),
        comment: '快到消化结束的时间了。 洗手间应该很干净吧？'},
       {type: 'cat',
        desc: '',
        query: 'cat105',
        score_range: range(105, 106),
        comment: '我有时管家睡着的时候想尿床。'},
       {type: 'cat',
        desc: '',
        query: 'cat106',
        score_range: range(106, 107),
        comment: '我拉屎的时候总是要播放古典音乐。'},
       {type: 'cat',
        desc: '',
        query: 'cat107',
        score_range: range(107, 108),
        comment: '为什么管家的卫生间和我的卫生间是不同的？'},
       {type: 'cat',
        desc: '',
        query: 'cat108',
        score_range: range(108, 109),
        comment: '喝水为什么想撒尿？ 说明吧'},
       {type: 'cat',
        desc: '',
        query: 'cat109',
        score_range: range(109, 110),
        comment: '今天的便便颜色很好（满足）'},
       {type: 'cat',
        desc: '',
        query: 'cat110',
        score_range: range(110, 111),
        comment: '管家，我拉完屎后，总是擦我的屁股。'},
       {type: 'cat',
        desc: '',
        query: 'cat111',
        score_range: range(111, 112),
        comment: '确认一下我的粪便 确认一下我的健康 管家'},
       {type: 'cat',
        desc: '',
        query: 'cat112',
        score_range: range(112, 113),
        comment: '别惹我...'},
       {type: 'cat',
        desc: '',
        query: 'cat113',
        score_range: range(113, 114),
        comment: '啊 又开始了..'},
       {type: 'cat',
        desc: '',
        query: 'cat114',
        score_range: range(114, 115),
        comment: '看什么呢'},
       {type: 'cat',
        desc: '',
        query: 'cat115',
        score_range: range(115, 116),
        comment: '你现在叫我了吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat116',
        score_range: range(116, 117),
        comment: '还是吃这个吧。 两重拳'},
       {type: 'cat',
        desc: '',
        query: 'cat117',
        score_range: range(117, 118),
        comment: '别再拍照了。'},
       {type: 'cat',
        desc: '',
        query: 'cat118',
        score_range: range(118, 119),
        comment: '无趣..没意思'},
       {type: 'cat',
        desc: '',
        query: 'cat119',
        score_range: range(119, 120),
        comment: '你摸摸我'},
       {type: 'cat',
        desc: '',
        query: 'cat120',
        score_range: range(120, 121),
        comment: '这些就够了吧？'},
       {type: 'cat',
        desc: '',
        query: 'cat121',
        score_range: range(121, 122),
        comment: '需要一个人的时间.别管了。'},
       {type: 'cat',
        desc: '',
        query: 'cat122',
        score_range: range(122, 123),
        comment: '不要叫我 真的不要叫我...'},
       {type: 'cat',
        desc: '',
        query: 'cat123',
        score_range: range(123, 124),
        comment: '该做的都做了 想回家..'},
       {type: 'cat',
        desc: '',
        query: 'cat124',
        score_range: range(124, 125),
        comment: '我可以惹你。 但是你不行^_^'},
       {type: 'cat',
        desc: '',
        query: 'cat125',
        score_range: range(125, 126),
        comment: '为什么总是看我呢？ （装作不知道）'},
       {type: 'cat',
        desc: '',
        query: 'cat126',
        score_range: range(126, 127),
        comment: '我给你做点什么吧'},
       {type: 'cat',
        desc: '',
        query: 'cat127',
        score_range: range(127, 128),
        comment: '把这个放下来'},
       {type: 'cat',
        desc: '',
        query: 'cat128',
        score_range: range(128, 129),
        comment: '直接咬掉'},
       {type: 'cat',
        desc: '',
        query: 'cat129',
        score_range: range(129, 130),
        comment: '把零食拿过来！！'},
       {type: 'cat',
        desc: '',
        query: 'cat130',
        score_range: range(130, 131),
        comment: '脖子上的这是什么？马上拔掉！！！！'},
       {type: 'cat',
        desc: '',
        query: 'cat131',
        score_range: range(131, 132),
        comment: 'Wyrano.wyrano…'},
       {type: 'cat',
        desc: '',
        query: 'cat132',
        score_range: range(132, 133),
        comment: '不要过来！！！'},
       {type: 'cat',
        desc: '',
        query: 'cat133',
        score_range: range(133, 134),
        comment: '随便过吧'},
       {type: 'cat',
        desc: '',
        query: 'cat134',
        score_range: range(134, 135),
        comment: '现在把心思放在你身上会怎么样？'},
       {type: 'cat',
        desc: '',
        query: 'cat135',
        score_range: range(135, 136),
        comment: '哎呦 那个人...'},
       {type: 'cat',
        desc: '',
        query: 'cat136',
        score_range: range(136, 137),
        comment: '都是徒劳的'},
       {type: 'cat',
        desc: '',
        query: 'cat137',
        score_range: range(137, 138),
        comment: '…（无视）'},
       {type: 'cat',
        desc: '',
        query: 'cat138',
        score_range: range(138, 139),
        comment: '吵…'},
       {type: 'cat',
        desc: '',
        query: 'cat139',
        score_range: range(139, 140),
        comment: '是要试试看吗..'},
       {type: 'cat',
        desc: '',
        query: 'cat140',
        score_range: range(140, 141),
        comment: '真烦人...'},
       {type: 'cat',
        desc: '',
        query: 'cat141',
        score_range: range(141, 142),
        comment: '铲屎官啊...你想被解雇吗...'},
       {type: 'cat',
        desc: '',
        query: 'cat142',
        score_range: range(142, 143),
        comment: '哼！...（无视）'},
       {type: 'cat',
        desc: '',
        query: 'cat143',
        score_range: range(143, 144),
        comment: '来了? 给我个吃零食的机会。'},
       {type: 'cat',
        desc: '',
        query: 'cat144',
        score_range: range(144, 145),
        comment: '胆敢丢下我去了哪里 现在才进来吗？！'},
       {type: 'cat',
        desc: '',
        query: 'cat145',
        score_range: range(145, 146),
        comment: '快去快回！'},
       {type: 'cat',
        desc: '',
        query: 'cat146',
        score_range: range(146, 147),
        comment: '去不去小心~'},
       {type: 'cat',
        desc: '',
        query: 'cat147',
        score_range: range(147, 148),
        comment: '你是谁啊，对我装懂吧？'},
       {type: 'cat',
        desc: '',
        query: 'cat148',
        score_range: range(148, 149),
        comment: '又喝酒？不要再喝酒了！'},
       {type: 'cat',
        desc: '',
        query: 'cat149',
        score_range: range(149, 150),
        comment: '为什么现在才来？ 我不是无聊了嘛！'},
       {type: 'cat',
        desc: '',
        query: 'cat150',
        score_range: range(150, 151),
        comment: '来的时候买适合我的高水平零食~'},
       {type: 'cat',
        desc: '',
        query: 'cat151',
        score_range: range(151, 152),
        comment: '你是谁？？'},
       {type: 'cat',
        desc: '',
        query: 'cat152',
        score_range: range(152, 153),
        comment: '我不想一个人呆在家里！ 也带我去吧！'},
       {type: 'cat',
        desc: '',
        query: 'cat153',
        score_range: range(153, 154),
        comment: '干什么呢？来了就得先抚摸我啊？'},
       {type: 'cat',
        desc: '',
        query: 'cat154',
        score_range: range(154, 155),
        comment: '哎呦~ (摇头摇头)'},
       {type: 'cat',
        desc: '',
        query: 'cat155',
        score_range: range(155, 156),
        comment: '今天早点来的话，我特别陪你玩！'},
       {type: 'cat',
        desc: '',
        query: 'cat156',
        score_range: range(156, 157),
        comment: '哼! 我不跟初次见面的人打招呼!'},
       {type: 'cat',
        desc: '',
        query: 'cat157',
        score_range: range(157, 158),
        comment: '看什么站着啊 快进来！'},
       {type: 'cat',
        desc: '',
        query: 'cat158',
        score_range: range(158, 159),
        comment: '为什么一来就来烦我！'},
       {type: 'cat',
        desc: '',
        query: 'cat159',
        score_range: range(159, 160),
        comment: '.手里拿着的难道是我的？'},
       {type: 'cat',
        desc: '',
        query: 'cat160',
        score_range: range(160, 161),
        comment: '快点进来抱我啊！'},
       {type: 'cat',
        desc: '',
        query: 'cat161',
        score_range: range(161, 162),
        comment: '讨厌客人~！ 我总是烦你啊'},
       {type: 'cat',
        desc: '',
        query: 'cat162',
        score_range: range(162, 163),
        comment: '哦! 是来给我零食的人吗?'},
       {type: 'cat',
        desc: '',
        query: 'cat163',
        score_range: range(163, 164),
        comment: '虽然很简陋 但是进来吧'},
       {type: 'cat',
        desc: '',
        query: 'cat164',
        score_range: range(164, 165),
        comment: '怎么空着手呢？'},
       {type: 'cat',
        desc: '',
        query: 'cat165',
        score_range: range(165, 166),
        comment: '再见~ 朋友们！！'},
       {type: 'cat',
        desc: '',
        query: 'cat166',
        score_range: range(166, 167),
        comment: '来了?..zZ'},
       {type: 'cat',
        desc: '',
        query: 'cat167',
        score_range: range(167, 168),
        comment: '你是不是早一点去？'},
       {type: 'cat',
        desc: '',
        query: 'cat168',
        score_range: range(168, 169),
        comment: '我什么都没做！'},
       {type: 'cat',
        desc: '',
        query: 'cat169',
        score_range: range(169, 170),
        comment: '快点进来给我饭 好饿！'},
       {type: 'cat',
        desc: '',
        query: 'cat170',
        score_range: range(170, 171),
        comment: '如果不快点进来，家里就乱套了。'},
       {type: 'cat',
        desc: '',
        query: 'cat171',
        score_range: range(171, 172),
        comment: '我的管家终于来了！ 现在让我们干活吧？ 准备好了吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat172',
        score_range: range(172, 173),
        comment: '饭都吃完了，是吗？ 把饭拿出来'},
       {type: 'cat',
        desc: '',
        query: 'cat173',
        score_range: range(173, 174),
        comment: '我只喝干净的水'},
       {type: 'cat',
        desc: '',
        query: 'cat174',
        score_range: range(174, 175),
        comment: '给我吧！！'},
       {type: 'cat',
        desc: '',
        query: 'cat175',
        score_range: range(175, 176),
        comment: '我喜欢猫膝~~'},
       {type: 'cat',
        desc: '',
        query: 'cat176',
        score_range: range(176, 177),
        comment: '想吃鲣鱼脯！！'},
       {type: 'cat',
        desc: '',
        query: 'cat177',
        score_range: range(177, 178),
        comment: '哇！不好吃！'},
       {type: 'cat',
        desc: '',
        query: 'cat178',
        score_range: range(178, 179),
        comment: '换饲料吧，吃腻了'},
       {type: 'cat',
        desc: '',
        query: 'cat179',
        score_range: range(179, 180),
        comment: '好热啊~ 吃点凉爽的西瓜吧？'},
       {type: 'cat',
        desc: '',
        query: 'cat180',
        score_range: range(180, 181),
        comment: '能给我零食吗~玩吧~？'},
       {type: 'cat',
        desc: '',
        query: 'cat181',
        score_range: range(181, 182),
        comment: '没胃口，以后吃。'},
       {type: 'cat',
        desc: '',
        query: 'cat182',
        score_range: range(182, 183),
        comment: '什么呀~？这个超好吃！！！！'},
       {type: 'cat',
        desc: '',
        query: 'cat183',
        score_range: range(183, 184),
        comment: '以为你喜欢鱼吧？ 其实我喜欢肉><'},
       {type: 'cat',
        desc: '',
        query: 'cat184',
        score_range: range(184, 185),
        comment: '多吃点零食 多放点饲料！OK？'},
       {type: 'cat',
        desc: '',
        query: 'cat185',
        score_range: range(185, 186),
        comment: '没有鱼吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat186',
        score_range: range(186, 187),
        comment: '没有肉吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat187',
        score_range: range(187, 188),
        comment: '今天的饭，很好吃！'},
       {type: 'cat',
        desc: '',
        query: 'cat188',
        score_range: range(188, 189),
        comment: '肚子好饿，给我好吃的吧！'},
       {type: 'cat',
        desc: '',
        query: 'cat189',
        score_range: range(189, 190),
        comment: '吃饱了！'},
       {type: 'cat',
        desc: '',
        query: 'cat190',
        score_range: range(190, 191),
        comment: '想吃甜甜的水果~'},
       {type: 'cat',
        desc: '',
        query: 'cat191',
        score_range: range(191, 192),
        comment: '再给点！再给点！'},
       {type: 'cat',
        desc: '',
        query: 'cat192',
        score_range: range(192, 193),
        comment: '如果是你，你会吃这个吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat193',
        score_range: range(193, 194),
        comment: '饲料太少了！'},
       {type: 'cat',
        desc: '',
        query: 'cat194',
        score_range: range(194, 195),
        comment: '一起吃饭吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat195',
        score_range: range(195, 196),
        comment: '我吃饭了，你吃了吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat196',
        score_range: range(196, 197),
        comment: '比起饭，当然是CHOO了！'},
       {type: 'cat',
        desc: '',
        query: 'cat197',
        score_range: range(197, 198),
        comment: '这次零食不怎么样~'},
       {type: 'cat',
        desc: '',
        query: 'cat198',
        score_range: range(198, 199),
        comment: '今天比起零食，更想吃肉。'},
       {type: 'cat',
        desc: '',
        query: 'cat199',
        score_range: range(199, 200),
        comment: '太多了，给我盛一点吧。'},
       {type: 'cat',
        desc: '',
        query: 'cat200',
        score_range: range(200, 201),
        comment: '吃饱了，肚子要撑爆了~'},
       {type: 'cat',
        desc: '',
        query: 'cat201',
        score_range: range(201, 202),
        comment: '快点吃完躺下吧。'},
       {type: 'cat',
        desc: '',
        query: 'cat202',
        score_range: range(202, 203),
        comment: '我很干净啊 为什么要洗漱啊...？'},
       {type: 'cat',
        desc: '',
        query: 'cat203',
        score_range: range(203, 204),
        comment: '放手！！！会出去！！！'},
       {type: 'cat',
        desc: '',
        query: 'cat204',
        score_range: range(204, 205),
        comment: '水太凉了.S'},
       {type: 'cat',
        desc: '',
        query: 'cat205',
        score_range: range(205, 206),
        comment: '温度适中 很满意'},
       {type: 'cat',
        desc: '',
        query: 'cat206',
        score_range: range(206, 207),
        comment: '我洗漱的话 你要给我做什么？'},
       {type: 'cat',
        desc: '',
        query: 'cat207',
        score_range: range(207, 208),
        comment: '洗完澡 确实很凉快'},
       {type: 'cat',
        desc: '',
        query: 'cat208',
        score_range: range(208, 209),
        comment: '铲屎官呀，我害怕，一定要抓着！'},
       {type: 'cat',
        desc: '',
        query: 'cat209',
        score_range: range(209, 210),
        comment: '尽快结束吧'},
       {type: 'cat',
        desc: '',
        query: 'cat210',
        score_range: range(210, 211),
        comment: '剪脚趾甲？！ 你要尝尝脚趾甲吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat211',
        score_range: range(211, 212),
        comment: '把每一根毛都晒得细'},
       {type: 'cat',
        desc: '',
        query: 'cat212',
        score_range: range(212, 213),
        comment: '刚才我做了Grumming 又洗漱了吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat213',
        score_range: range(213, 214),
        comment: '身体湿透了，太冷了。'},
       {type: 'cat',
        desc: '',
        query: 'cat214',
        score_range: range(214, 215),
        comment: '正是洗澡的好天气啊..嘿嘿'},
       {type: 'cat',
        desc: '',
        query: 'cat215',
        score_range: range(215, 216),
        comment: '洗完澡出来的话 就要做一只Chuir~'},
       {type: 'cat',
        desc: '',
        query: 'cat216',
        score_range: range(216, 217),
        comment: '看到了吧？我不是胖了 而是长毛了^_^'},
       {type: 'cat',
        desc: '',
        query: 'cat217',
        score_range: range(217, 218),
        comment: '不想下水！！'},
       {type: 'cat',
        desc: '',
        query: 'cat218',
        score_range: range(218, 219),
        comment: '好凄凉..今天好像要洗澡了!!!'},
       {type: 'cat',
        desc: '',
        query: 'cat219',
        score_range: range(219, 220),
        comment: '现在结尾我会看着办的'},
       {type: 'cat',
        desc: '',
        query: 'cat220',
        score_range: range(220, 221),
        comment: '暖和~~'},
       {type: 'cat',
        desc: '',
        query: 'cat221',
        score_range: range(221, 222),
        comment: '玩水挺有意思的'},
       {type: 'cat',
        desc: '',
        query: 'cat222',
        score_range: range(222, 223),
        comment: '哦 看来今天泡沫打得不错啊~？ 很柔软啊'},
       {type: 'cat',
        desc: '',
        query: 'cat223',
        score_range: range(223, 224),
        comment: '现在没有想洗漱的心情...'},
       {type: 'cat',
        desc: '',
        query: 'cat224',
        score_range: range(224, 225),
        comment: '口渴了…给我点水！'},
       {type: 'cat',
        desc: '',
        query: 'cat225',
        score_range: range(225, 226),
        comment: '水里面有奇怪的味道啊？'},
       {type: 'cat',
        desc: '',
        query: 'cat226',
        score_range: range(226, 227),
        comment: '既然洗漱了，就把脚指甲也剪了吧！'},
       {type: 'cat',
        desc: '',
        query: 'cat227',
        score_range: range(227, 228),
        comment: '管家啊……我不会放过你的…… 哆哆嗦嗦'},
       {type: 'cat',
        desc: '',
        query: 'cat228',
        score_range: range(228, 229),
        comment: '手有点粗糙...？ 轻柔地清洗'},
       {type: 'cat',
        desc: '',
        query: 'cat229',
        score_range: range(229, 230),
        comment: '想快点洗漱躺下！'},
       {type: 'cat',
        desc: '',
        query: 'cat230',
        score_range: range(230, 231),
        comment: '好疲惫啊..乔奥塔~!'},
       {type: 'cat',
        desc: '',
        query: 'cat231',
        score_range: range(231, 232),
        comment: '咔啊！耳朵进水了！！！'},
       {type: 'cat',
        desc: '',
        query: 'cat232',
        score_range: range(232, 233),
        comment: '管家，我希望你幸福！'},
       {type: 'cat',
        desc: '',
        query: 'cat233',
        score_range: range(233, 234),
        comment: '你看! 我给你拿来了!'},
       {type: 'cat',
        desc: '',
        query: 'cat234',
        score_range: range(234, 235),
        comment: '和我一起玩的你是最棒的！'},
       {type: 'cat',
        desc: '',
        query: 'cat235',
        score_range: range(235, 236),
        comment: '看起来心情不好.要和我玩球吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat236',
        score_range: range(236, 237),
        comment: '今天让给你零食！'},
       {type: 'cat',
        desc: '',
        query: 'cat237',
        score_range: range(237, 238),
        comment: '有什么事吗？ 我来帮你弄'},
       {type: 'cat',
        desc: '',
        query: 'cat238',
        score_range: range(238, 239),
        comment: '有铲屎官我很幸福！'},
       {type: 'cat',
        desc: '',
        query: 'cat239',
        score_range: range(239, 240),
        comment: '希望我能成为你的力量！'},
       {type: 'cat',
        desc: '',
        query: 'cat240',
        score_range: range(240, 241),
        comment: '听听塑料声音 心情会变好的'},
       {type: 'cat',
        desc: '',
        query: 'cat241',
        score_range: range(241, 242),
        comment: '今天我特别陪你玩！'},
       {type: 'cat',
        desc: '',
        query: 'cat242',
        score_range: range(242, 243),
        comment: '铲屎官 今天休息一会儿也没关系'},
       {type: 'cat',
        desc: '',
        query: 'cat243',
        score_range: range(243, 244),
        comment: '想一个人呆着的话，我会让开你的！'},
       {type: 'cat',
        desc: '',
        query: 'cat244',
        score_range: range(244, 245),
        comment: '今天一天也辛苦了！'},
       {type: 'cat',
        desc: '',
        query: 'cat245',
        score_range: range(245, 246),
        comment: '忧郁的话 就像我一样摇尾巴吧~'},
       {type: 'cat',
        desc: '',
        query: 'cat246',
        score_range: range(246, 247),
        comment: '今天允许你摸肚子！'},
       {type: 'cat',
        desc: '',
        query: 'cat247',
        score_range: range(247, 248),
        comment: '有我在，你会忧郁吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat248',
        score_range: range(248, 249),
        comment: '看我！这么可爱还郁闷？'},
       {type: 'cat',
        desc: '',
        query: 'cat249',
        score_range: range(249, 250),
        comment: '你已经是够帅的人了！'},
       {type: 'cat',
        desc: '',
        query: 'cat250',
        score_range: range(250, 251),
        comment: '对我来说你是最棒的'},
       {type: 'cat',
        desc: '',
        query: 'cat251',
        score_range: range(251, 252),
        comment: '今天一天也辛苦了。'},
       {type: 'cat',
        desc: '',
        query: 'cat252',
        score_range: range(252, 253),
        comment: '给你最珍惜的鱼。 放松心情~'},
       {type: 'cat',
        desc: '',
        query: 'cat253',
        score_range: range(253, 254),
        comment: '要摸摸我的粉色软糖吗？'},
       {type: 'cat',
        desc: '',
        query: 'cat254',
        score_range: range(254, 255),
        comment: '吃好吃的东西心情会好一点的！'},
       {type: 'cat',
        desc: '',
        query: 'cat255',
        score_range: range(255, 256),
        comment: '郁闷的时候看美丽的天空！'},
       {type: 'cat',
        desc: '',
        query: 'cat256',
        score_range: range(256, 257),
        comment: '悲伤的话可以依靠我'},
       {type: 'cat',
        desc: '',
        query: 'cat257',
        score_range: range(257, 258),
        comment: '看起来好累啊.我听你说话！'},
       {type: 'cat',
        desc: '',
        query: 'cat258',
        score_range: range(258, 259),
        comment: '跟我玩的话心情会变好的？！'},
       {type: 'cat',
        desc: '',
        query: 'cat259',
        score_range: range(259, 260),
        comment: '为了让大家加油 国国在努力中！'},
       {type: 'cat',
        desc: '',
        query: 'cat260',
        score_range: range(260, 261),
        comment: '无论何时我都会站在你这一边'},
       {type: 'cat',
        desc: '',
        query: 'cat261',
        score_range: range(261, 262),
        comment: '以后会有很多好事发生的！'},
       {type: 'dog',
        desc: '',
        query: 'dog1',
        score_range: range(1, 2),
        comment: '等一下！ 闻到什么味道？'},
       {type: 'dog',
        desc: '',
        query: 'dog2',
        score_range: range(2, 3),
        comment: '快点出去散步吧~ 天气太好了！'},
       {type: 'dog',
        desc: '',
        query: 'dog3',
        score_range: range(3, 4),
        comment: '哦~ 那只狗很漂亮啊~ 不能去那边吗？'},
       {type: 'dog',
        desc: '',
        query: 'dog4',
        score_range: range(4, 5),
        comment: '这些朋友都很有趣，可不可以再玩一会儿？'},
       {type: 'dog',
        desc: '',
        query: 'dog5',
        score_range: range(5, 6),
        comment: '今天想去与众不同的散步路线！'},
       {type: 'dog',
        desc: '',
        query: 'dog6',
        score_range: range(6, 7),
        comment: '口渴！想喝水！'},
       {type: 'dog',
        desc: '',
        query: 'dog7',
        score_range: range(7, 8),
        comment: '啊 等一下！ 嘘嘘！'},
       {type: 'dog',
        desc: '',
        query: 'dog8',
        score_range: range(8, 9),
        comment: '嗯 是什么味道呢？ 是很好闻的味道'},
       {type: 'dog',
        desc: '',
        query: 'dog9',
        score_range: range(9, 10),
        comment: '现在累了~ 回家吧！'},
       {type: 'dog',
        desc: '',
        query: 'dog10',
        score_range: range(10, 11),
        comment: '那是什么? 有什么东西'},
       {type: 'dog',
        desc: '',
        query: 'dog11',
        score_range: range(11, 12),
        comment: '我先跑过去！ 我想跑！'},
       {type: 'dog',
        desc: '',
        query: 'dog12',
        score_range: range(12, 13),
        comment: '快来！~快走吧！'},
       {type: 'dog',
        desc: '',
        query: 'dog13',
        score_range: range(13, 14),
        comment: '我也想像人一样走，想牵着手一起走！'},
       {type: 'dog',
        desc: '',
        query: 'dog14',
        score_range: range(14, 15),
        comment: '抱紧我 紧紧地抱住我！'},
       {type: 'dog',
        desc: '',
        query: 'dog15',
        score_range: range(15, 16),
        comment: '挖砂加仑'},
       {type: 'dog',
        desc: '',
        query: 'dog16',
        score_range: range(16, 17),
        comment: '我休息一会儿再走。'},
       {type: 'dog',
        desc: '',
        query: 'dog17',
        score_range: range(17, 18),
        comment: '很期待今晚会吃什么？'},
       {type: 'dog',
        desc: '',
        query: 'dog18',
        score_range: range(18, 19),
        comment: '那里有很多朋友，想去看看！'},
       {type: 'dog',
        desc: '',
        query: 'dog19',
        score_range: range(19, 20),
        comment: '啊 那个狗好可怕！ 转过去吧！'},
       {type: 'dog',
        desc: '',
        query: 'dog20',
        score_range: range(20, 21),
        comment: '万岁 万岁 万岁~~好开心~'},
       {type: 'dog',
        desc: '',
        query: 'dog21',
        score_range: range(21, 22),
        comment: '我今天有点不开心 不要惹我'},
       {type: 'dog',
        desc: '',
        query: 'dog22',
        score_range: range(22, 23),
        comment: '心情不好，能给我点零食吗？'},
       {type: 'dog',
        desc: '',
        query: 'dog23',
        score_range: range(23, 24),
        comment: '今天太开心了 开心！'},
       {type: 'dog',
        desc: '',
        query: 'dog24',
        score_range: range(24, 25),
        comment: '好像做了个可怕的梦 太吓人了ㅜㅜ'},
       {type: 'dog',
        desc: '',
        query: 'dog25',
        score_range: range(25, 26),
        comment: '现在很幸福的感觉！ 嘿嘿嘿'},
       {type: 'dog',
        desc: '',
        query: 'dog26',
        score_range: range(26, 27),
        comment: '好奇！好奇！'},
       {type: 'dog',
        desc: '',
        query: 'dog27',
        score_range: range(27, 28),
        comment: '太好了！'},
       {type: 'dog',
        desc: '',
        query: 'dog28',
        score_range: range(28, 29),
        comment: '关心我吧！！！！！！株！！！！！'},
       {type: 'dog',
        desc: '',
        query: 'dog29',
        score_range: range(29, 30),
        comment: '一整天一个人无聊了！ ㅜㅜ'},
       {type: 'dog',
        desc: '',
        query: 'dog30',
        score_range: range(30, 31),
        comment: '能喜欢我吗？'},
       {type: 'dog',
        desc: '',
        query: 'dog31',
        score_range: range(31, 32),
        comment: '我可爱吧？可爱吧？！'},
       {type: 'dog',
        desc: '',
        query: 'dog32',
        score_range: range(32, 33),
        comment: '嗯...'},
       {type: 'dog',
        desc: '',
        query: 'dog33',
        score_range: range(33, 34),
        comment: '今天怎么了？'},
       {type: 'dog',
        desc: '',
        query: 'dog34',
        score_range: range(34, 35),
        comment: '别管我了 JeVal'},
       {type: 'dog',
        desc: '',
        query: 'dog35',
        score_range: range(35, 36),
        comment: '为什么这么烦？'},
       {type: 'dog',
        desc: '',
        query: 'dog36',
        score_range: range(36, 37),
        comment: '够了..瑟瑟发抖'},
       {type: 'dog',
        desc: '',
        query: 'dog37',
        score_range: range(37, 38),
        comment: '真的好生气啊'},
       {type: 'dog',
        desc: '',
        query: 'dog38',
        score_range: range(38, 39),
        comment: '可爱啊><'},
       {type: 'dog',
        desc: '',
        query: 'dog39',
        score_range: range(39, 40),
        comment: '为什么心情会这么低沉呢？'},
       {type: 'dog',
        desc: '',
        query: 'dog40',
        score_range: range(40, 41),
        comment: '哎呦 好无聊啊'},
       {type: 'dog',
        desc: '',
        query: 'dog41',
        score_range: range(41, 42),
        comment: '软糖...'},
       {type: 'dog',
        desc: '',
        query: 'dog42',
        score_range: range(42, 43),
        comment: '点什么就拿点零食吧 主人啊'},
       {type: 'dog',
        desc: '',
        query: 'dog43',
        score_range: range(43, 44),
        comment: '放过我吧'},
       {type: 'dog',
        desc: '',
        query: 'dog44',
        score_range: range(44, 45),
        comment: '真不像话..呵'},
       {type: 'dog',
        desc: '',
        query: 'dog45',
        score_range: range(45, 46),
        comment: '别开玩笑了，要挨骂了'},
       {type: 'dog',
        desc: '',
        query: 'dog46',
        score_range: range(46, 47),
        comment: '嗯~ 不对'},
       {type: 'dog',
        desc: '',
        query: 'dog47',
        score_range: range(47, 48),
        comment: '是要试一试吗？'},
       {type: 'dog',
        desc: '',
        query: 'dog48',
        score_range: range(48, 49),
        comment: '真是烦人啊^_^'},
       {type: 'dog',
        desc: '',
        query: 'dog49',
        score_range: range(49, 50),
        comment: '好了！够了！'},
       {type: 'dog',
        desc: '',
        query: 'dog50',
        score_range: range(50, 51),
        comment: '为什么在旁边更热闹呢'},
       {type: 'dog',
        desc: '',
        query: 'dog51',
        score_range: range(51, 52),
        comment: '哎呦 (摇头)'},
       {type: 'dog',
        desc: '',
        query: 'dog52',
        score_range: range(52, 53),
        comment: '又怎么了'},
       {type: 'dog',
        desc: '',
        query: 'dog53',
        score_range: range(53, 54),
        comment: '你能不能放过我？'},
       {type: 'dog',
        desc: '',
        query: 'dog54',
        score_range: range(54, 55),
        comment: '啊，好烦啊！'},
       {type: 'dog',
        desc: '',
        query: 'dog55',
        score_range: range(55, 56),
        comment: '哎嘿 那里停！ 不要靠近我。'},
       {type: 'dog',
        desc: '',
        query: 'dog56',
        score_range: range(56, 57),
        comment: '你知道我的心吗..'},
       {type: 'dog',
        desc: '',
        query: 'dog57',
        score_range: range(57, 58),
        comment: '烦躁。'},
       {type: 'dog',
        desc: '',
        query: 'dog58',
        score_range: range(58, 59),
        comment: '不是说了讨厌嘛'},
       {type: 'dog',
        desc: '',
        query: 'dog59',
        score_range: range(59, 60),
        comment: '不要叫我 千万不要叫我'},
       {type: 'dog',
        desc: '',
        query: 'dog60',
        score_range: range(60, 61),
        comment: '好了吗...'},
       {type: 'dog',
        desc: '',
        query: 'dog61',
        score_range: range(61, 62),
        comment: '好想睡觉！！'},
       {type: 'dog',
        desc: '',
        query: 'dog62',
        score_range: range(62, 63),
        comment: '让我一个人呆着吧！'},
       {type: 'dog',
        desc: '',
        query: 'dog63',
        score_range: range(63, 64),
        comment: '给我走开！'},
       {type: 'dog',
        desc: '',
        query: 'dog64',
        score_range: range(64, 65),
        comment: '想见朋友们！'},
       {type: 'dog',
        desc: '',
        query: 'dog65',
        score_range: range(65, 66),
        comment: '别从我这里掉下来。'},
       {type: 'dog',
        desc: '',
        query: 'dog66',
        score_range: range(66, 67),
        comment: '一起玩吧！！'},
       {type: 'dog',
        desc: '',
        query: 'dog67',
        score_range: range(67, 68),
        comment: '我想出去玩。'},
       {type: 'dog',
        desc: '',
        query: 'dog68',
        score_range: range(68, 69),
        comment: '给我开门！'},
       {type: 'dog',
        desc: '',
        query: 'dog69',
        score_range: range(69, 70),
        comment: '天天和我在一起吧！'},
       {type: 'dog',
        desc: '',
        query: 'dog70',
        score_range: range(70, 71),
        comment: '不能去哪！'},
       {type: 'dog',
        desc: '',
        query: 'dog71',
        score_range: range(71, 72),
        comment: '不能让我独自一人'},
       {type: 'dog',
        desc: '',
        query: 'dog72',
        score_range: range(72, 73),
        comment: '你等着，我一个人在家，家里怎么样了。'},
       {type: 'dog',
        desc: '',
        query: 'dog73',
        score_range: range(73, 74),
        comment: '就开玩笑吧 我会生气的'},
       {type: 'dog',
        desc: '',
        query: 'dog74',
        score_range: range(74, 75),
        comment: '把玩具拿过来跟我玩吧'},
       {type: 'dog',
        desc: '',
        query: 'dog75',
        score_range: range(75, 76),
        comment: '好好看着我的眼睛吧'},
       {type: 'dog',
        desc: '',
        query: 'dog76',
        score_range: range(76, 77),
        comment: '摸摸我'},
       {type: 'dog',
        desc: '',
        query: 'dog77',
        score_range: range(77, 78),
        comment: '换个新的排便垫吧'},
       {type: 'dog',
        desc: '',
        query: 'dog78',
        score_range: range(78, 79),
        comment: '我想跑，就让我跑吧！'},
       {type: 'dog',
        desc: '',
        query: 'dog79',
        score_range: range(79, 80),
        comment: '能帮我交个朋友吗？'},
       {type: 'dog',
        desc: '',
        query: 'dog80',
        score_range: range(80, 81),
        comment: '我是人！！ 我们是相同的立场'},
       {type: 'dog',
        desc: '',
        query: 'dog81',
        score_range: range(81, 82),
        comment: '把我的名字换成别的吧'},
       {type: 'dog',
        desc: '',
        query: 'dog82',
        score_range: range(82, 83),
        comment: '想做一碗凉水'},
       {type: 'dog',
        desc: '',
        query: 'dog83',
        score_range: range(83, 84),
        comment: '帮我换一下垫子吧，不是总撒尿嘛。 但是踩到的话 会挨训的..想想好烦啊'},
       {type: 'dog',
        desc: '',
        query: 'dog84',
        score_range: range(84, 85),
        comment: '我吃屎了 我可以舔主人吗？'},
       {type: 'dog',
        desc: '',
        query: 'dog85',
        score_range: range(85, 86),
        comment: '我的粪便中蕴藏着灵魂..清理"狗屎"时，小心不要对视。'},
       {type: 'dog',
        desc: '',
        query: 'dog86',
        score_range: range(86, 87),
        comment: '怎么这么难消化呢？'},
       {type: 'dog',
        desc: '',
        query: 'dog87',
        score_range: range(87, 88),
        comment: '我想小便，但是我会忍住的'},
       {type: 'dog',
        desc: '',
        query: 'dog88',
        score_range: range(88, 89),
        comment: '我好想拉屎，但是我会忍住的。'},
       {type: 'dog',
        desc: '',
        query: 'dog89',
        score_range: range(89, 90),
        comment: '为什么粪便里总是有好闻的味道？ 想吃地'},
       {type: 'dog',
        desc: '',
        query: 'dog90',
        score_range: range(90, 91),
        comment: '我不是很会排便嘛 称赞我吧'},
       {type: 'dog',
        desc: '',
        query: 'dog91',
        score_range: range(91, 92),
        comment: '我没有在排便垫上撒尿..意思是我生气了..'},
       {type: 'dog',
        desc: '',
        query: 'dog92',
        score_range: range(92, 93),
        comment: '吃完饭了，开始准备排泄吧？'},
       {type: 'dog',
        desc: '',
        query: 'dog93',
        score_range: range(93, 94),
        comment: '但是我希望拉屎的时候不要看我 太认真了！'},
       {type: 'dog',
        desc: '',
        query: 'dog94',
        score_range: range(94, 95),
        comment: '别惹我生气了，我会把屎藏在家里的某个地方。'},
       {type: 'dog',
        desc: '',
        query: 'dog95',
        score_range: range(95, 96),
        comment: '想去散步，在阳光下凉爽地排泄。 当然不是因为想去散步'},
       {type: 'dog',
        desc: '',
        query: 'dog96',
        score_range: range(96, 97),
        comment: '不是 我的排便垫为什么会有别的家伙的味道呢？'},
       {type: 'dog',
        desc: '',
        query: 'dog97',
        score_range: range(97, 98),
        comment: '你觉得我的小屁什么时候才能来？ 肚子疼的时候？不是拉屎的时候？不是 就是你快睡着了！'},
       {type: 'dog',
        desc: '',
        query: 'dog98',
        score_range: range(98, 99),
        comment: '新的饭好像不适合我啊？ 拉屎有点累。'},
       {type: 'dog',
        desc: '',
        query: 'dog99',
        score_range: range(99, 100),
        comment: '用表情表达我的粪便味道'},
       {type: 'dog',
        desc: '',
        query: 'dog100',
        score_range: range(100, 101),
        comment: '今天要在鞋柜里撒尿 让主人开心~'},
       {type: 'dog',
        desc: '',
        query: 'dog101',
        score_range: range(101, 102),
        comment: '从现在开始，在排便垫的正中间进行排泄。 请给我零食。'},
       {type: 'dog',
        desc: '',
        query: 'dog102',
        score_range: range(102, 103),
        comment: '给我饭 拉屎'},
       {type: 'dog',
        desc: '',
        query: 'dog103',
        score_range: range(103, 104),
        comment: '这是什么饭？'},
       {type: 'dog',
        desc: '',
        query: 'dog104',
        score_range: range(104, 105),
        comment: '没有肉吗？'},
       {type: 'dog',
        desc: '',
        query: 'dog105',
        score_range: range(105, 106),
        comment: '干什么呢？把饭端出来'},
       {type: 'dog',
        desc: '',
        query: 'dog106',
        score_range: range(106, 107),
        comment: '这是给你的饭吗？ 不好吃！'},
       {type: 'dog',
        desc: '',
        query: 'dog107',
        score_range: range(107, 108),
        comment: '这次饲料最棒！！ 太好吃了><'},
       {type: 'dog',
        desc: '',
        query: 'dog108',
        score_range: range(108, 109),
        comment: '我想喝凉水'},
       {type: 'dog',
        desc: '',
        query: 'dog109',
        score_range: range(109, 110),
        comment: '吃饭的时候连狗也给个案_+'},
       {type: 'dog',
        desc: '',
        query: 'dog110',
        score_range: range(110, 111),
        comment: '吃什么？也给我吧~~'},
       {type: 'dog',
        desc: '',
        query: 'dog111',
        score_range: range(111, 112),
        comment: '讨厌蔬菜！'},
       {type: 'dog',
        desc: '',
        query: 'dog112',
        score_range: range(112, 113),
        comment: '今天的菜单是什么？'},
       {type: 'dog',
        desc: '',
        query: 'dog113',
        score_range: range(113, 114),
        comment: '没有小菜吗？'},
       {type: 'dog',
        desc: '',
        query: 'dog114',
        score_range: range(114, 115),
        comment: '想吃零食'},
       {type: 'dog',
        desc: '',
        query: 'dog115',
        score_range: range(115, 116),
        comment: '只有你吃吗？也给我好吃的吧！'},
       {type: 'dog',
        desc: '',
        query: 'dog116',
        score_range: range(116, 117),
        comment: '就给我肉！肉！！'},
       {type: 'dog',
        desc: '',
        query: 'dog117',
        score_range: range(117, 118),
        comment: '啊 好饱~~'},
       {type: 'dog',
        desc: '',
        query: 'dog118',
        score_range: range(118, 119),
        comment: '想吃甜食~~！'},
       {type: 'dog',
        desc: '',
        query: 'dog119',
        score_range: range(119, 120),
        comment: '好饿！！'},
       {type: 'dog',
        desc: '',
        query: 'dog120',
        score_range: range(120, 121),
        comment: '嗯？这是什么啊 贴在谁的鼻子上'},
       {type: 'dog',
        desc: '',
        query: 'dog121',
        score_range: range(121, 122),
        comment: '换饲料吧~ 腻了'},
       {type: 'dog',
        desc: '',
        query: 'dog122',
        score_range: range(122, 123),
        comment: '我不会吐的！我不想吐！'},
       {type: 'dog',
        desc: '',
        query: 'dog123',
        score_range: range(123, 124),
        comment: '没有胃口，我不吃了。'},
       {type: 'dog',
        desc: '',
        query: 'dog124',
        score_range: range(124, 125),
        comment: '觉得又累又郁闷的时候？ 跟我一起去公园散步吧！'},
       {type: 'dog',
        desc: '',
        query: 'dog125',
        score_range: range(125, 126),
        comment: '伤心的话就靠着我吧！'},
       {type: 'dog',
        desc: '',
        query: 'dog126',
        score_range: range(126, 127),
        comment: '今天一天也辛苦了~'},
       {type: 'dog',
        desc: '',
        query: 'dog127',
        score_range: range(127, 128),
        comment: '没关系吗？我给你珍惜的玩具 加油ㅠㅠ'},
       {type: 'dog',
        desc: '',
        query: 'dog128',
        score_range: range(128, 129),
        comment: '怎么回事！Deco哇，我要教训你！'},
       {type: 'dog',
        desc: '',
        query: 'dog129',
        score_range: range(129, 130),
        comment: '谁说的...累的时候时间就是良药'},
       {type: 'dog',
        desc: '',
        query: 'dog130',
        score_range: range(130, 131),
        comment: '看看我的表情！ 搞笑吧？可爱吧~？'},
       {type: 'dog',
        desc: '',
        query: 'dog131',
        score_range: range(131, 132),
        comment: '如果忧郁的话，跟我出去赛跑怎么样？！'},
       {type: 'dog',
        desc: '',
        query: 'dog132',
        score_range: range(132, 133),
        comment: '主人旁边有我啊！ 用力！'},
       {type: 'dog',
        desc: '',
        query: 'dog133',
        score_range: range(133, 134),
        comment: '没关系，以后会有更多好事的'},
       {type: 'dog',
        desc: '',
        query: 'dog134',
        score_range: range(134, 135),
        comment: '想哭的时候哭也没关系！'},
       {type: 'dog',
        desc: '',
        query: 'dog135',
        score_range: range(135, 136),
        comment: '希望我能给主人带来安慰'},
       {type: 'dog',
        desc: '',
        query: 'dog136',
        score_range: range(136, 137),
        comment: '别愁眉苦脸~ 有我啊！'},
       {type: 'dog',
        desc: '',
        query: 'dog137',
        score_range: range(137, 138),
        comment: '吃好吃的东西心情会好一点的！'},
       {type: 'dog',
        desc: '',
        query: 'dog138',
        score_range: range(138, 139),
        comment: '有什么事吗？我都答应你！'},
       {type: 'dog',
        desc: '',
        query: 'dog139',
        score_range: range(139, 140),
        comment: '别担心 做得已经够好了'},
       {type: 'dog',
        desc: '',
        query: 'dog140',
        score_range: range(140, 141),
        comment: '因为有主人 我很幸福'},
       {type: 'dog',
        desc: '',
        query: 'dog141',
        score_range: range(141, 142),
        comment: '对我来说主人是最棒的！ 最珍贵'},
       {type: 'dog',
        desc: '',
        query: 'dog142',
        score_range: range(142, 143),
        comment: '我会为你加油的 明天也要加油！'},
       {type: 'dog',
        desc: '',
        query: 'dog143',
        score_range: range(143, 144),
        comment: '振作起来 主人已经是帅气的人了'},
       {type: 'dog',
        desc: '',
        query: 'dog144',
        score_range: range(144, 145),
        comment: '再见！再见！'},
       {type: 'dog',
        desc: '',
        query: 'dog145',
        score_range: range(145, 146),
        comment: '为什么现在才来~~!!快点抱我！'},
       {type: 'dog',
        desc: '',
        query: 'dog146',
        score_range: range(146, 147),
        comment: '快去快回！！'},
       {type: 'dog',
        desc: '',
        query: 'dog147',
        score_range: range(147, 148),
        comment: '来了?! 玩吧! 玩吧!'},
       {type: 'dog',
        desc: '',
        query: 'dog148',
        score_range: range(148, 149),
        comment: '现在几点了？'},
       {type: 'dog',
        desc: '',
        query: 'dog149',
        score_range: range(149, 150),
        comment: '不要丢下我走ㅠㅠ'},
       {type: 'dog',
        desc: '',
        query: 'dog150',
        score_range: range(150, 151),
        comment: '一路走好。'},
       {type: 'dog',
        desc: '',
        query: 'dog151',
        score_range: range(151, 152),
        comment: '路上小心。'},
       {type: 'dog',
        desc: '',
        query: 'dog152',
        score_range: range(152, 153),
        comment: '呀呼~来了！！！好开心！陪我玩！'},
       {type: 'dog',
        desc: '',
        query: 'dog153',
        score_range: range(153, 154),
        comment: '你好！'},
       {type: 'dog',
        desc: '',
        query: 'dog154',
        score_range: range(154, 155),
        comment: '你是谁，在抚摸我吗？'},
       {type: 'dog',
        desc: '',
        query: 'dog155',
        score_range: range(155, 156),
        comment: '很高兴见到你！'},
       {type: 'dog',
        desc: '',
        query: 'dog156',
        score_range: range(156, 157),
        comment: '来的时候吃Melona味的零食！'},
       {type: 'dog',
        desc: '',
        query: 'dog157',
        score_range: range(157, 158),
        comment: '睡得好吗？'},
       {type: 'dog',
        desc: '',
        query: 'dog158',
        score_range: range(158, 159),
        comment: '…………（无视）'},
       {type: 'dog',
        desc: '',
        query: 'dog159',
        score_range: range(159, 160),
        comment: '......(摇头摇头)'},
       {type: 'dog',
        desc: '',
        query: 'dog160',
        score_range: range(160, 161),
        comment: '起来！'},
       {type: 'dog',
        desc: '',
        query: 'dog161',
        score_range: range(161, 162),
        comment: '朋友啊！！你好！！'},
       {type: 'dog',
        desc: '',
        query: 'dog162',
        score_range: range(162, 163),
        comment: '快来！给我一个零食是必须的！'},
       {type: 'dog',
        desc: '',
        query: 'dog163',
        score_range: range(163, 164),
        comment: '手上的是什么啊~？ 是为了给我买来的吗~？'},
       {type: 'dog',
        desc: '',
        query: 'dog164',
        score_range: range(164, 165),
        comment: '回来了吗~~？ 今天一天也辛苦了！'},
       {type: 'dog',
        desc: '',
        query: 'dog165',
        score_range: range(165, 166),
        comment: '不想洗！放开我！'},
       {type: 'dog',
        desc: '',
        query: 'dog166',
        score_range: range(166, 167),
        comment: '今天洗漱很有意思！！'},
       {type: 'dog',
        desc: '',
        query: 'dog167',
        score_range: range(167, 168),
        comment: '这是什么味道？'},
       {type: 'dog',
        desc: '',
        query: 'dog168',
        score_range: range(168, 169),
        comment: '好怕进水啊！...'},
       {type: 'dog',
        desc: '',
        query: 'dog169',
        score_range: range(169, 170),
        comment: '想快点洗完玩！'},
       {type: 'dog',
        desc: '',
        query: 'dog170',
        score_range: range(170, 171),
        comment: '现在我太紧张了！ ㅠㅠ'},
       {type: 'dog',
        desc: '',
        query: 'dog171',
        score_range: range(171, 172),
        comment: '太粗糙了！温柔地洗一下~'},
       {type: 'dog',
        desc: '',
        query: 'dog172',
        score_range: range(172, 173),
        comment: '现在太幸福了！'},
       {type: 'dog',
        desc: '',
        query: 'dog173',
        score_range: range(173, 174),
        comment: '现在洗漱太累了！...'},
       {type: 'dog',
        desc: '',
        query: 'dog174',
        score_range: range(174, 175),
        comment: '水中散发出奇怪的味道ㅠㅠ'},
       {type: 'dog',
        desc: '',
        query: 'dog175',
        score_range: range(175, 176),
        comment: '身体湿透了，太冷了ㅠㅠ'},
       {type: 'dog',
        desc: '',
        query: 'dog176',
        score_range: range(176, 177),
        comment: '洗漱的时候顺便把脚指甲也剪掉！'},
       {type: 'dog',
        desc: '',
        query: 'dog177',
        score_range: range(177, 178),
        comment: '现在没有想洗漱的心情...'},
       {type: 'dog',
        desc: '',
        query: 'dog178',
        score_range: range(178, 179),
        comment: '洗完澡会给我零食吗？'},
       {type: 'dog',
        desc: '',
        query: 'dog179',
        score_range: range(179, 180),
        comment: '一起打水玩儿吧！'},
       {type: 'dog',
        desc: '',
        query: 'dog180',
        score_range: range(180, 181),
        comment: '洗完澡太凉快了！'},
       {type: 'dog',
        desc: '',
        query: 'dog181',
        score_range: range(181, 182),
        comment: '快点暖和地晾干身体吧~'},
       {type: 'dog',
        desc: '',
        query: 'dog182',
        score_range: range(182, 183),
        comment: '现在太渴了...'},
       {type: 'dog',
        desc: '',
        query: 'dog183',
        score_range: range(183, 184),
        comment: '好困啊 ZZZZZ...'}]
    },
    // facialExpressionAnalyzerEng
    {
        info : {
            mainTitle:"Facial Expression Analyzer",
            subTitle:"Dogs, cats, anyone",
            mainUrl:"facialExpressionAnalyzerEng",
            scoreType:"facialExpression",
            mainImage:"https://images.ktestone.com/introImages/facialExpressionAnalyzerEng-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/facialExpressionAnalyzerEng-thumb.png",
            lang:"Eng"
        },
        questions:[
            {
                question: '데이트 전 날 나의 모습은?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '나가기 직전 마음에 드는 옷을 입는다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '자기 전 머릿속으로 나의 스타일링을 생각하고 잔다.'
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '전 날 머리부터 발끝까지 스타일링과 옷을 미리 준비한다.'
                    },
                ],
            },
            {
                question: "갑자기 자취방에 놀러 온다는 애인!\n그때의 나는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "아아... 왜 갑자기 오는 거야?! 보이는 곳만 치워 둔다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "모아둔 쓰레기를 버리고 바로 청소를 시작한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 미리미리 해 두었기 때문에 바로 주소를 보낸다."
                    },
                ]
            },
            {
                question: "좋아하는 이성이 생겼을 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "상대의 SNS을 탐방하며, 미래의 우리 모습을 상상해본다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "좋아하는 이성의 친구에게 도움을 요청한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "먼저 연락할 거리를 만들며 적극적으로 대시한다."
                    },
                ]
            },
            {
                question: "카페 안에 이상형인 사람과 계속 눈이 마주친다.\n 눈웃음까지 보내는데...?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "지금 말하면 좋은 말이 안 나올 것 같아. 좀 이따 연락할게."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "아!!!!!!!짜증나!!!!!진짜!!!!!! 도대체 왜 그러는 거야?!?!"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "이런 점에서 나는 화가 난 거야. 그런 부분은 고쳐줬으면 좋겠어."
                    },
                ]
            },
            {
                question: "쉬고 있는데 갑자기 걸려온 남사친/여사친의 전화, \n친구들이 같이 놀고 싶다며 나올 수 있냐고 물어보는데...?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: '귀찮은데… 아쉽긴 하지만 “시간이 너무 늦었어… 나 집에서 쉴래!”'
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "일단 끊고 수십 번 고민 끝에 나가기로 한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '오케이~ 인연 한 번 만들어보자~ “갈게~~~~”'
                    },
                ]
            },
            {
                question: "다가온 기념일! 나는 어떤 선물을 준비할까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "정성 어린 편지와 기억에 남을 만한 선물을 준비한다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "커플로 착용할 수 있는 아이템을 선물한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 사고 싶다거나 필요한 물건을 기억해 두었다가 서프라이즈로 선물한다."
                    },
                ]
            },
            {
                question: "내가 하고 싶은 연애 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "다이나믹한 화려한 연애 (단, 너무 화려해서 바람 피울 가능성 50%)"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "나만 바라보는 연애 (단, 너무 좋아해서 집착 대마왕)"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구같이 편안한 연애 (단, 가끔 친구인지 애인인지 헷갈림)"
                    },
                ]
            },
            {
                question: "애인과 대화할 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 5,
                        content: "장난치고 티키타카가 잘 되는 대화가 좋다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "서로의 생각을 공유하는 대화가 너무 좋다."
                    },
                ]
            },
            {
                question: "친구가 나에게 고민상당을 한다. 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "고민에 대한 구체적인 해결책을 제시한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "고민에 대해 빠져들어 감정적으로 같이 공감해준다."
                    },
                ]
            },
            {
                question: "기다려왔던 짝사랑하던 그/그녀와의 데이트 날..\n갑자기 급한 일이 생겼다며 다음에 만나자고 한다.\n과연 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "어쩔 수 없지… 알겠어 다음에 보자!"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "알겠어…근데 심각한 일이야?"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "아 진짜? 그럼 날짜 다시 조정하자! 언제가 괜찮아?"
                    },
                ]
            },
        ],
        results:[{type: 'human',
        desc: '',
        query: 'human1',
        score_range: range(1, 2),
        comment: 'Can you give me a hug?'},
       {type: 'human',
        desc: '',
        query: 'human2',
        score_range: range(2, 3),
        comment: 'Can you get out of my sight?'},
       {type: 'human',
        desc: '',
        query: 'human3',
        score_range: range(3, 4),
        comment: 'Give me a glass of water.'},
       {type: 'human',
        desc: '',
        query: 'human4',
        score_range: range(4, 5),
        comment: 'Do you want to stay with me today?'},
       {type: 'human',
        desc: '',
        query: 'human5',
        score_range: range(5, 6),
        comment: 'Look me in the eye!'},
       {type: 'human',
        desc: '',
        query: 'human6',
        score_range: range(6, 7),
        comment: 'I want to take a rest.'},
       {type: 'human',
        desc: '',
        query: 'human7',
        score_range: range(7, 8),
        comment: "I don't want to go to work tomorrow."},
       {type: 'human',
        desc: '',
        query: 'human8',
        score_range: range(8, 9),
        comment: 'Who have I been since I was single for  years?'},
       {type: 'human',
        desc: '',
        query: 'human9',
        score_range: range(9, 10),
        comment: 'Who am I? Where am I?'},
       {type: 'human',
        desc: '',
        query: 'human10',
        score_range: range(10, 11),
        comment: 'Make me a friend.'},
       {type: 'human',
        desc: '',
        query: 'human11',
        score_range: range(11, 12),
        comment: 'Life is all alone.'},
       {type: 'human',
        desc: '',
        query: 'human12',
        score_range: range(12, 13),
        comment: "You're lonely."},
       {type: 'human',
        desc: '',
        query: 'human13',
        score_range: range(13, 14),
        comment: "It's the weather I want to win the lottery."},
       {type: 'human',
        desc: '',
        query: 'human14',
        score_range: range(14, 15),
        comment: 'God, why did you make me born on this planet?'},
       {type: 'human',
        desc: '',
        query: 'human15',
        score_range: range(15, 16),
        comment: "I'm planning to quit tomorrow."},
       {type: 'human',
        desc: '',
        query: 'human16',
        score_range: range(16, 17),
        comment: 'I want to lie down and play cell phone all day.'},
       {type: 'human',
        desc: '',
        query: 'human17',
        score_range: range(17, 18),
        comment: "As expected, tonight's dinner is tteokbokki."},
       {type: 'human',
        desc: '',
        query: 'human18',
        score_range: range(18, 19),
        comment: 'I want to travel to Hawaii.'},
       {type: 'human',
        desc: '',
        query: 'human19',
        score_range: range(19, 20),
        comment: "Let's go to the stock ceiling I put in!"},
       {type: 'human',
        desc: '',
        query: 'human20',
        score_range: range(20, 21),
        comment: 'I want to be a rich unemployed man.'},
       {type: 'human',
        desc: '',
        query: 'human21',
        score_range: range(21, 22),
        comment: "Music is the only drug I'm allowed to do."},
       {type: 'human',
        desc: '',
        query: 'human22',
        score_range: range(22, 23),
        comment: "I look like I'm going to be rich."},
       {type: 'human',
        desc: '',
        query: 'human23',
        score_range: range(23, 24),
        comment: 'I want to leave for Jeju Island.'},
       {type: 'human',
        desc: '',
        query: 'human24',
        score_range: range(24, 25),
        comment: 'Stop dieting and I just want to eat yakchang!!!!!'},
       {type: 'human',
        desc: '',
        query: 'human25',
        score_range: range(25, 26),
        comment: 'Can you give me half if I win the lottery?'},
       {type: 'human',
        desc: '',
        query: 'human26',
        score_range: range(26, 27),
        comment: "Don't look at me."},
       {type: 'human',
        desc: '',
        query: 'human27',
        score_range: range(27, 28),
        comment: 'Can you lend me some money?'},
       {type: 'human',
        desc: '',
        query: 'human28',
        score_range: range(28, 29),
        comment: "Oh, I should've bought Bitcoin  years ago.I had to buy it."},
       {type: 'human',
        desc: '',
        query: 'human29',
        score_range: range(29, 30),
        comment: "Don't talk to me."},
       {type: 'human',
        desc: '',
        query: 'human30',
        score_range: range(30, 31),
        comment: "You'll soon be hooked on my charm."},
       {type: 'human',
        desc: '',
        query: 'human31',
        score_range: range(31, 32),
        comment: 'Are you going to stay at home like this?'},
       {type: 'human',
        desc: '',
        query: 'human32',
        score_range: range(32, 33),
        comment: "Let's go to the moviesHow about rockpaperscissors"},
       {type: 'human',
        desc: '',
        query: 'human33',
        score_range: range(33, 34),
        comment: 'and buy a movie ticket?'},
       {type: 'human',
        desc: '',
        query: 'human34',
        score_range: range(34, 35),
        comment: "I'm sick of homecooked mealsDo you want to go out and eat something delicious?"},
       {type: 'human',
        desc: '',
        query: 'human35',
        score_range: range(35, 36),
        comment: "Let's go jogging! I think you need to work out."},
       {type: 'human',
        desc: '',
        query: 'human36',
        score_range: range(36, 37),
        comment: "I think you'll soon be roll like a ballCome on! I'm going to work out"},
       {type: 'human',
        desc: '',
        query: 'human37',
        score_range: range(37, 38),
        comment: "Looking at your neck, the turtle will talk to you, let's go for a walk."},
       {type: 'human',
        desc: '',
        query: 'human38',
        score_range: range(38, 39),
        comment: "There's something delicious over thereI bought it last time, so you buy it today Let's go for a drive! Now!"},
       {type: 'human',
        desc: '',
        query: 'human39',
        score_range: range(39, 40),
        comment: 'Do you want to go on a trip? Suddenly, I want to travel without a plan.'},
       {type: 'human',
        desc: '',
        query: 'human40',
        score_range: range(40, 41),
        comment: "I'm sick of staying home todayI'm gonna go out for a second."},
       {type: 'human',
        desc: '',
        query: 'human41',
        score_range: range(41, 42),
        comment: 'What time is it now? Oh yeah, today is the day you buy me something delicious!'},
       {type: 'human',
        desc: '',
        query: 'human42',
        score_range: range(42, 43),
        comment: 'What day is it today? Oh, yeahWe were supposed to bowl today.'},
       {type: 'human',
        desc: '',
        query: 'human43',
        score_range: range(43, 44),
        comment: "What's the date today? Oh, yeahWe're gonna go to a cafe and play bingo today."},
       {type: 'human',
        desc: '',
        query: 'human44',
        score_range: range(44, 45),
        comment: "We had an appointment todayRight! You said you'd buy me meat!"},
       {type: 'human',
        desc: '',
        query: 'human45',
        score_range: range(45, 46),
        comment: "Come out now! I'll be waiting for you in front of me."},
       {type: 'human',
        desc: '',
        query: 'human46',
        score_range: range(46, 47),
        comment: "I'm not feeling well today, I'm sick, so send me something to eat."},
       {type: 'human',
        desc: '',
        query: 'human47',
        score_range: range(47, 48),
        comment: 'My legs hurtGive me a piggyback ride.'},
       {type: 'human',
        desc: '',
        query: 'human48',
        score_range: range(48, 49),
        comment: 'I have an appointment with my girlfriend todaySorry.'},
       {type: 'human',
        desc: '',
        query: 'human49',
        score_range: range(49, 50),
        comment: 'Who were you with yesterday? I saw you with someone else yesterday.'},
       {type: 'human',
        desc: '',
        query: 'human50',
        score_range: range(50, 51),
        comment: "Who's that guy? You were holding hands yesterday."},
       {type: 'human',
        desc: '',
        query: 'human51',
        score_range: range(51, 52),
        comment: 'I went for a walk with him(her) last night.It was fine.'},
       {type: 'human',
        desc: '',
        query: 'human52',
        score_range: range(52, 53),
        comment: 'I took another two hours walk with him(her) yesterday.'},
       {type: 'human',
        desc: '',
        query: 'human53',
        score_range: range(53, 54),
        comment: "Let's stop nowI don't want any more..That's too much"},
       {type: 'human',
        desc: '',
        query: 'human54',
        score_range: range(54, 55),
        comment: "I'm tired of writing this comment, I have nothing to say, I want to stop.(ShhI don't want the boss to know.)"},
       {type: 'human',
        desc: '',
        query: 'human55',
        score_range: range(55, 56),
        comment: 'I found a bag while I was taking a walk yesterday, and there was  million won.'},
       {type: 'human',
        desc: '',
        query: 'human56',
        score_range: range(56, 57),
        comment: 'I went to the police station yesterdayPhew'},
       {type: 'human',
        desc: '',
        query: 'human57',
        score_range: range(57, 58),
        comment: 'Yesterday I saw ..a murder case!'},
       {type: 'human',
        desc: '',
        query: 'human58',
        score_range: range(58, 59),
        comment: 'What are you doing today? Do you want to go on a date?'},
       {type: 'human',
        desc: '',
        query: 'human59',
        score_range: range(59, 60),
        comment: "I'm sorry, I have someone I loveI'm meeting him today."},
       {type: 'human',
        desc: '',
        query: 'human60',
        score_range: range(60, 61),
        comment: 'I particularly sting today.Ready to have fun.'},
       {type: 'human',
        desc: '',
        query: 'human61',
        score_range: range(61, 62),
        comment: "I'm so excited."},
       {type: 'human',
        desc: '',
        query: 'human62',
        score_range: range(62, 63),
        comment: "Please go away because it's annoying."},
       {type: 'human',
        desc: '',
        query: 'human63',
        score_range: range(63, 64),
        comment: "I'm lonely  fifth grade at Hogwarts."},
       {type: 'human',
        desc: '',
        query: 'human64',
        score_range: range(64, 65),
        comment: 'Life is… tough, tough.'},
       {type: 'human',
        desc: '',
        query: 'human65',
        score_range: range(65, 66),
        comment: "Would you like to have a drink because I'm in a bad mood?"},
       {type: 'human',
        desc: '',
        query: 'human66',
        score_range: range(66, 67),
        comment: 'Why are you annoying me?'},
       {type: 'human',
        desc: '',
        query: 'human67',
        score_range: range(67, 68),
        comment: "It's depression that's the sky."},
       {type: 'human',
        desc: '',
        query: 'human68',
        score_range: range(68, 69),
        comment: 'I love you, dude.'},
       {type: 'human',
        desc: '',
        query: 'human69',
        score_range: range(69, 70),
        comment: "Let's go ahead!"},
       {type: 'human',
        desc: '',
        query: 'human70',
        score_range: range(70, 71),
        comment: "I'm~~~~ Tonight~~~~~~ I'm scared of the dark~~"},
       {type: 'human',
        desc: '',
        query: 'human71',
        score_range: range(71, 72),
        comment: "Oh..I think I'm going to throw up a little bit."},
       {type: 'human',
        desc: '',
        query: 'human72',
        score_range: range(72, 73),
        comment: "Wow, it's really not funIt's so boring."},
       {type: 'human',
        desc: '',
        query: 'human73',
        score_range: range(73, 74),
        comment: "Feel down!What's funny?"},
       {type: 'human',
        desc: '',
        query: 'human74',
        score_range: range(74, 75),
        comment: 'Give me a hug because I want to cry today.'},
       {type: 'human',
        desc: '',
        query: 'human75',
        score_range: range(75, 76),
        comment: 'The number one who talks without thinking.'},
       {type: 'human',
        desc: '',
        query: 'human76',
        score_range: range(76, 77),
        comment: 'Did you eat a lot? No wonder it looked like that.'},
       {type: 'human',
        desc: '',
        query: 'human77',
        score_range: range(77, 78),
        comment: 'Experiencing the limitations of patience'},
       {type: 'human',
        desc: '',
        query: 'human78',
        score_range: range(78, 79),
        comment: 'I miss you.'},
       {type: 'human',
        desc: '',
        query: 'human79',
        score_range: range(79, 80),
        comment: "I'm thinking about the person I love now."},
       {type: 'human',
        desc: '',
        query: 'human80',
        score_range: range(80, 81),
        comment: "I'm excited to think of chicken for myself who had a hard day today!"},
       {type: 'human',
        desc: '',
        query: 'human81',
        score_range: range(81, 82),
        comment: "I can't relieve my fatigue even if I sleep…."},
       {type: 'human',
        desc: '',
        query: 'human82',
        score_range: range(82, 83),
        comment: "Leave me alone! A person who's tired even if he doesn't do anything."},
       {type: 'human',
        desc: '',
        query: 'human83',
        score_range: range(83, 84),
        comment: "Oh, it's not easy!"},
       {type: 'human',
        desc: '',
        query: 'human84',
        score_range: range(84, 85),
        comment: 'Are you tired now?'},
       {type: 'human',
        desc: '',
        query: 'human85',
        score_range: range(85, 86),
        comment: 'a sigh creeping out'},
       {type: 'human',
        desc: '',
        query: 'human86',
        score_range: range(86, 87),
        comment: 'We care for each other...I love you...'},
       {type: 'human',
        desc: '',
        query: 'human87',
        score_range: range(87, 88),
        comment: 'Thank you, my friends.'},
       {type: 'human',
        desc: '',
        query: 'human88',
        score_range: range(88, 89),
        comment: 'I sometimes shed tears.'},
       {type: 'human',
        desc: '',
        query: 'human89',
        score_range: range(89, 90),
        comment: "Don't tell me not to."},
       {type: 'human',
        desc: '',
        query: 'human90',
        score_range: range(90, 91),
        comment: "Whoo~~~~~It's a party.~~~~~~~~~~~~~~~~!"},
       {type: 'human',
        desc: '',
        query: 'human91',
        score_range: range(91, 92),
        comment: "I am mindlessBecause I don't have any thoughts."},
       {type: 'human',
        desc: '',
        query: 'human92',
        score_range: range(92, 93),
        comment: 'Why am I here...'},
       {type: 'human',
        desc: '',
        query: 'human93',
        score_range: range(93, 94),
        comment: 'I want to go home...'},
       {type: 'human',
        desc: '',
        query: 'human94',
        score_range: range(94, 95),
        comment: 'Do you like it?'},
       {type: 'human',
        desc: '',
        query: 'human95',
        score_range: range(95, 96),
        comment: "Oh, it's pointless."},
       {type: 'human',
        desc: '',
        query: 'human96',
        score_range: range(96, 97),
        comment: "Don't touch me when I eat."},
       {type: 'human',
        desc: '',
        query: 'human97',
        score_range: range(97, 98),
        comment: "It's not worth listening toBye."},
       {type: 'human',
        desc: '',
        query: 'human98',
        score_range: range(98, 99),
        comment: 'So what?'},
       {type: 'human',
        desc: '',
        query: 'human99',
        score_range: range(99, 100),
        comment: "Oh, you're bothering me!"},
       {type: 'human',
        desc: '',
        query: 'human100',
        score_range: range(100, 101),
        comment: "Oh, I don't want to"},
       {type: 'human',
        desc: '',
        query: 'human101',
        score_range: range(101, 102),
        comment: 'Who cares ..I made my way to go!'},
       {type: 'human',
        desc: '',
        query: 'human102',
        score_range: range(102, 103),
        comment: "I can't hear youI can't hear you~"},
       {type: 'human',
        desc: '',
        query: 'human103',
        score_range: range(103, 104),
        comment: "I'm not leaving, I'm staying home!"},
       {type: 'human',
        desc: '',
        query: 'human104',
        score_range: range(104, 105),
        comment: "Don't expect that from me"},
       {type: 'human',
        desc: '',
        query: 'human105',
        score_range: range(105, 106),
        comment: 'Blood pressure climbing in.'},
       {type: 'human',
        desc: '',
        query: 'human106',
        score_range: range(106, 107),
        comment: 'Why would I?'},
       {type: 'human',
        desc: '',
        query: 'human107',
        score_range: range(107, 108),
        comment: 'I want to be alone'},
       {type: 'human',
        desc: '',
        query: 'human108',
        score_range: range(108, 109),
        comment: 'Lying all day and just want to'},
       {type: 'human',
        desc: '',
        query: 'human109',
        score_range: range(109, 110),
        comment: "Ok…(it's a hassle.)"},
       {type: 'human',
        desc: '',
        query: 'human110',
        score_range: range(110, 111),
        comment: 'Life is about living the way it is.'},
       {type: 'human',
        desc: '',
        query: 'human111',
        score_range: range(111, 112),
        comment: "I'm nothing but dust in the universe anyway..."},
       {type: 'human',
        desc: '',
        query: 'human112',
        score_range: range(112, 113),
        comment: "I want to lie down if you sit people's minds"},
       {type: 'human',
        desc: '',
        query: 'human113',
        score_range: range(113, 114),
        comment: "I don't like it."},
       {type: 'human',
        desc: '',
        query: 'human114',
        score_range: range(114, 115),
        comment: "I've lost the will to live."},
       {type: 'human',
        desc: '',
        query: 'human115',
        score_range: range(115, 116),
        comment: 'I want to be a Lottery winHah!'},
       {type: 'human',
        desc: '',
        query: 'human116',
        score_range: range(116, 117),
        comment: "That's it for todayI'll do it tomorrow."},
       {type: 'human',
        desc: '',
        query: 'human117',
        score_range: range(117, 118),
        comment: 'What does that mean?'},
       {type: 'human',
        desc: '',
        query: 'human118',
        score_range: range(118, 119),
        comment: "I'm tired of it~~ I'm tired of it~~"},
       {type: 'human',
        desc: '',
        query: 'human119',
        score_range: range(119, 120),
        comment: "That's a possibility."},
       {type: 'human',
        desc: '',
        query: 'human120',
        score_range: range(120, 121),
        comment: "I'm gonna have to stop^_^"},
       {type: 'human',
        desc: '',
        query: 'human121',
        score_range: range(121, 122),
        comment: 'Are you here?'},
       {type: 'human',
        desc: '',
        query: 'human122',
        score_range: range(122, 123),
        comment: 'Oh, hi!'},
       {type: 'human',
        desc: '',
        query: 'human123',
        score_range: range(123, 124),
        comment: 'Take care!'},
       {type: 'human',
        desc: '',
        query: 'human124',
        score_range: range(124, 125),
        comment: "Wow, you're feeling better."},
       {type: 'human',
        desc: '',
        query: 'human125',
        score_range: range(125, 126),
        comment: "It's been a long time!"},
       {type: 'human',
        desc: '',
        query: 'human126',
        score_range: range(126, 127),
        comment: 'Good morning!'},
       {type: 'human',
        desc: '',
        query: 'human127',
        score_range: range(127, 128),
        comment: "Let's have a meal sometime."},
       {type: 'human',
        desc: '',
        query: 'human128',
        score_range: range(128, 129),
        comment: '(a word of courtesy)'},
       {type: 'human',
        desc: '',
        query: 'human129',
        score_range: range(129, 130),
        comment: "Hey, I'm leaving!"},
       {type: 'human',
        desc: '',
        query: 'human130',
        score_range: range(130, 131),
        comment: 'Hi!'},
       {type: 'human',
        desc: '',
        query: 'human131',
        score_range: range(131, 132),
        comment: "Hey! It's here! Here!"},
       {type: 'human',
        desc: '',
        query: 'human132',
        score_range: range(132, 133),
        comment: 'See you sometime, really.'},
       {type: 'human',
        desc: '',
        query: 'human133',
        score_range: range(133, 134),
        comment: '(more likely to bump into each other along the way)'},
       {type: 'human',
        desc: '',
        query: 'human134',
        score_range: range(134, 135),
        comment: 'Hey!!! Who are you???'},
       {type: 'human',
        desc: '',
        query: 'human135',
        score_range: range(135, 136),
        comment: "(It's been a while, but I have nothing to say."},
       {type: 'human',
        desc: '',
        query: 'human136',
        score_range: range(136, 137),
        comment: 'Shouting)'},
       {type: 'human',
        desc: '',
        query: 'human137',
        score_range: range(137, 138),
        comment: "Let's go first!"},
       {type: 'human',
        desc: '',
        query: 'human138',
        score_range: range(138, 139),
        comment: "Let's have a drink."},
       {type: 'human',
        desc: '',
        query: 'human139',
        score_range: range(139, 140),
        comment: 'Hey~'},
       {type: 'human',
        desc: '',
        query: 'human140',
        score_range: range(140, 141),
        comment: "I think you've lost weight."},
       {type: 'human',
        desc: '',
        query: 'human141',
        score_range: range(141, 142),
        comment: 'Good night ♥'},
       {type: 'human',
        desc: '',
        query: 'human142',
        score_range: range(142, 143),
        comment: 'Hi...><'},
       {type: 'human',
        desc: '',
        query: 'human143',
        score_range: range(143, 144),
        comment: 'How have you been?'},
       {type: 'human',
        desc: '',
        query: 'human144',
        score_range: range(144, 145),
        comment: 'What time is it now?..'},
       {type: 'human',
        desc: '',
        query: 'human145',
        score_range: range(145, 146),
        comment: 'Great job!'},
       {type: 'human',
        desc: '',
        query: 'human146',
        score_range: range(146, 147),
        comment: "I'm hungry!"},
       {type: 'human',
        desc: '',
        query: 'human147',
        score_range: range(147, 148),
        comment: 'Be careful on your way!'},
       {type: 'human',
        desc: '',
        query: 'human148',
        score_range: range(148, 149),
        comment: 'Bye!'},
       {type: 'human',
        desc: '',
        query: 'human149',
        score_range: range(149, 150),
        comment: 'Do you eat?'},
       {type: 'human',
        desc: '',
        query: 'human150',
        score_range: range(150, 151),
        comment: 'Where do you want to go?'},
       {type: 'human',
        desc: '',
        query: 'human151',
        score_range: range(151, 152),
        comment: "Hey, I'm sorry, I'm late."},
       {type: 'human',
        desc: '',
        query: 'human152',
        score_range: range(152, 153),
        comment: 'What do you want to do?'},
       {type: 'human',
        desc: '',
        query: 'human153',
        score_range: range(153, 154),
        comment: 'Oh my gosh, you look so pretty!'},
       {type: 'human',
        desc: '',
        query: 'human154',
        score_range: range(154, 155),
        comment: 'Have I changed anything today?'},
       {type: 'human',
        desc: '',
        query: 'human155',
        score_range: range(155, 156),
        comment: 'Is this real? Do I have to wash up?'},
       {type: 'human',
        desc: '',
        query: 'human156',
        score_range: range(156, 157),
        comment: "I won't brush my teeth boldly today."},
       {type: 'human',
        desc: '',
        query: 'human157',
        score_range: range(157, 158),
        comment: 'Why do I have to wash my face?'},
       {type: 'human',
        desc: '',
        query: 'human158',
        score_range: range(158, 159),
        comment: "I'm going to take a showerMake it soft!"},
       {type: 'human',
        desc: '',
        query: 'human159',
        score_range: range(159, 160),
        comment: 'I wash my hair firstI like it.'},
       {type: 'human',
        desc: '',
        query: 'human160',
        score_range: range(160, 161),
        comment: 'I take a hot shower in the middle of summerHot sauce.'},
       {type: 'human',
        desc: '',
        query: 'human161',
        score_range: range(161, 162),
        comment: "If you get a machine that cleans people's bodies, you have to buy the company's stock first."},
       {type: 'human',
        desc: '',
        query: 'human162',
        score_range: range(162, 163),
        comment: "Wow, I'm too lazy to wash up today."},
       {type: 'human',
        desc: '',
        query: 'human163',
        score_range: range(163, 164),
        comment: 'Can you wash me up?^^'},
       {type: 'human',
        desc: '',
        query: 'human164',
        score_range: range(164, 165),
        comment: "How's the water temperature?"},
       {type: 'human',
        desc: '',
        query: 'human165',
        score_range: range(165, 166),
        comment: "If you don't have a bath, you won't take a bath."},
       {type: 'human',
        desc: '',
        query: 'human166',
        score_range: range(166, 167),
        comment: 'After washing banana milk is necessary.'},
       {type: 'human',
        desc: '',
        query: 'human167',
        score_range: range(167, 168),
        comment: "Let's go soft today!"},
       {type: 'human',
        desc: '',
        query: 'human168',
        score_range: range(168, 169),
        comment: "Are you tired after the shower?It's beer!"},
       {type: 'human',
        desc: '',
        query: 'human169',
        score_range: range(169, 170),
        comment: "It's already dawn when I'm about to wash up."},
       {type: 'human',
        desc: '',
        query: 'human170',
        score_range: range(170, 171),
        comment: 'Looking in the mirror after the shower, I look so good.'},
       {type: 'human',
        desc: '',
        query: 'human171',
        score_range: range(171, 172),
        comment: 'Every time I wash up, a different person appears!'},
       {type: 'human',
        desc: '',
        query: 'human172',
        score_range: range(172, 173),
        comment: "I don't want to wash..I washed yesterday..."},
       {type: 'human',
        desc: '',
        query: 'human173',
        score_range: range(173, 174),
        comment: 'At least a neat freak,'},
       {type: 'human',
        desc: '',
        query: 'human174',
        score_range: range(174, 175),
        comment: 'ShampooLinceTreatmentBody WashScrubPack.'},
       {type: 'human',
        desc: '',
        query: 'human175',
        score_range: range(175, 176),
        comment: 'You always smell sweetDid you wash up?'},
       {type: 'human',
        desc: '',
        query: 'human176',
        score_range: range(176, 177),
        comment: "You always smell like fartsDidn't you wash up?"},
       {type: 'human',
        desc: '',
        query: 'human177',
        score_range: range(177, 178),
        comment: 'Just wash up.'},
       {type: 'human',
        desc: '',
        query: 'human178',
        score_range: range(178, 179),
        comment: "From head to toe~ I'm going to wash up~"},
       {type: 'human',
        desc: '',
        query: 'human179',
        score_range: range(179, 180),
        comment: 'Washing hands and feet after going out'},
       {type: 'human',
        desc: '',
        query: 'human180',
        score_range: range(180, 181),
        comment: 'Clean your nails, too! Clear! Confident!'},
       {type: 'human',
        desc: '',
        query: 'human181',
        score_range: range(181, 182),
        comment: "Don't just gargle and brush your teeth."},
       {type: 'human',
        desc: '',
        query: 'human182',
        score_range: range(182, 183),
        comment: 'If your breath smells like that, it means you need to wash it.'},
       {type: 'human',
        desc: '',
        query: 'human183',
        score_range: range(183, 184),
        comment: "Don't you have a nose by any chance?"},
       {type: 'human',
        desc: '',
        query: 'human184',
        score_range: range(184, 185),
        comment: 'It smells.'},
       {type: 'human',
        desc: '',
        query: 'human185',
        score_range: range(185, 186),
        comment: "I'm hungryCan I have a meal?"},
       {type: 'human',
        desc: '',
        query: 'human186',
        score_range: range(186, 187),
        comment: 'The soup is a bit salty.'},
       {type: 'human',
        desc: '',
        query: 'human187',
        score_range: range(187, 188),
        comment: "You're giving this to me as food?"},
       {type: 'human',
        desc: '',
        query: 'human188',
        score_range: range(188, 189),
        comment: "What's today's side dish?"},
       {type: 'human',
        desc: '',
        query: 'human189',
        score_range: range(189, 190),
        comment: "I'm a vegetarian!"},
       {type: 'human',
        desc: '',
        query: 'human190',
        score_range: range(190, 191),
        comment: "I don't eat without meat!"},
       {type: 'human',
        desc: '',
        query: 'human191',
        score_range: range(191, 192),
        comment: 'Instants are the best!'},
       {type: 'human',
        desc: '',
        query: 'human192',
        score_range: range(192, 193),
        comment: "Ah~I'm full~~~~"},
       {type: 'human',
        desc: '',
        query: 'human193',
        score_range: range(193, 194),
        comment: "I don't like vegetables!"},
       {type: 'human',
        desc: '',
        query: 'human194',
        score_range: range(194, 195),
        comment: "It's too small! Give me a little more!"},
       {type: 'human',
        desc: '',
        query: 'human195',
        score_range: range(195, 196),
        comment: "There's too much~ Take it out!"},
       {type: 'human',
        desc: '',
        query: 'human196',
        score_range: range(196, 197),
        comment: 'Growl..LOL'},
       {type: 'human',
        desc: '',
        query: 'human197',
        score_range: range(197, 198),
        comment: 'Today is tteokbokki!'},
       {type: 'human',
        desc: '',
        query: 'human198',
        score_range: range(198, 199),
        comment: 'I want something sweet~~~~'},
       {type: 'human',
        desc: '',
        query: 'human199',
        score_range: range(199, 200),
        comment: "Shall we eat ice cream since it's hot?"},
       {type: 'human',
        desc: '',
        query: 'human200',
        score_range: range(200, 201),
        comment: "It's cold..I want some warm soup!"},
       {type: 'human',
        desc: '',
        query: 'human201',
        score_range: range(201, 202),
        comment: "I don't want to eat it."},
       {type: 'human',
        desc: '',
        query: 'human202',
        score_range: range(202, 203),
        comment: 'Diet medium! Get the food out of my sight!'},
       {type: 'human',
        desc: '',
        query: 'human203',
        score_range: range(203, 204),
        comment: 'One bite~!'},
       {type: 'human',
        desc: '',
        query: 'human204',
        score_range: range(204, 205),
        comment: "What is it? It's so good! JMT"},
       {type: 'human',
        desc: '',
        query: 'human205',
        score_range: range(205, 206),
        comment: "Did you say this was cooking too? It's not good!"},
       {type: 'human',
        desc: '',
        query: 'human206',
        score_range: range(206, 207),
        comment: 'Give me a glass of cold water.'},
       {type: 'human',
        desc: '',
        query: 'human207',
        score_range: range(207, 208),
        comment: "I want to go on a restaurant tour! Let's go out~"},
       {type: 'human',
        desc: '',
        query: 'human208',
        score_range: range(208, 209),
        comment: 'Late night snack, okay~~~?'},
       {type: 'human',
        desc: '',
        query: 'human209',
        score_range: range(209, 210),
        comment: "How about jokbal? Isn't it great?"},
       {type: 'human',
        desc: '',
        query: 'human210',
        score_range: range(210, 211),
        comment: "I don't give a dog to eat"},
       {type: 'human',
        desc: '',
        query: 'human211',
        score_range: range(211, 212),
        comment: 'Give me a table of eight!'},
       {type: 'human',
        desc: '',
        query: 'human212',
        score_range: range(212, 213),
        comment: 'Buy me beef, please.Oh, oh, oh, oh~!'},
       {type: 'human',
        desc: '',
        query: 'human213',
        score_range: range(213, 214),
        comment: 'Why are you eating that?'},
       {type: 'human',
        desc: '',
        query: 'human214',
        score_range: range(214, 215),
        comment: "Don't worry too much, everything's gonna be fine!"},
       {type: 'human',
        desc: '',
        query: 'human215',
        score_range: range(215, 216),
        comment: 'Forget about the past.'},
       {type: 'human',
        desc: '',
        query: 'human216',
        score_range: range(216, 217),
        comment: "Why don't you go for a walk when you're tired and frustrated?"},
       {type: 'human',
        desc: '',
        query: 'human217',
        score_range: range(217, 218),
        comment: 'You did a great job today!'},
       {type: 'human',
        desc: '',
        query: 'human218',
        score_range: range(218, 219),
        comment: "You can lean on me if you're sad."},
       {type: 'human',
        desc: '',
        query: 'human219',
        score_range: range(219, 220),
        comment: "Time is medicine when you're having a hard timeThis too shall pass!"},
       {type: 'human',
        desc: '',
        query: 'human220',
        score_range: range(220, 221),
        comment: "I'm next to youCheer up!"},
       {type: 'human',
        desc: '',
        query: 'human221',
        score_range: range(221, 222),
        comment: 'You can cry when you want to.'},
       {type: 'human',
        desc: '',
        query: 'human222',
        score_range: range(222, 223),
        comment: 'I hope I can be a consolation to you.'},
       {type: 'human',
        desc: '',
        query: 'human223',
        score_range: range(223, 224),
        comment: "No matter what anyone says, you're the best."},
       {type: 'human',
        desc: '',
        query: 'human224',
        score_range: range(224, 225),
        comment: 'Think about the people who care about you!'},
       {type: 'human',
        desc: '',
        query: 'human225',
        score_range: range(225, 226),
        comment: "Eat something delicious and you'll feel better!"},
       {type: 'human',
        desc: '',
        query: 'human226',
        score_range: range(226, 227),
        comment: "What's the matter? I'll listen to everything."},
       {type: 'human',
        desc: '',
        query: 'human227',
        score_range: range(227, 228),
        comment: 'Who gave you a hard time? Bring him back!'},
       {type: 'human',
        desc: '',
        query: 'human228',
        score_range: range(228, 229),
        comment: 'Your existence itself shines.'},
       {type: 'human',
        desc: '',
        query: 'human229',
        score_range: range(229, 230),
        comment: "I'll always cheer for youCheer up for tomorrow!"},
       {type: 'human',
        desc: '',
        query: 'human230',
        score_range: range(230, 231),
        comment: "You're the best for meIt's the most precious thing."},
       {type: 'human',
        desc: '',
        query: 'human231',
        score_range: range(231, 232),
        comment: "Come on, you're already a cool guy."},
       {type: 'human',
        desc: '',
        query: 'human232',
        score_range: range(232, 233),
        comment: 'You can cry when you want to.'},
       {type: 'human',
        desc: '',
        query: 'human233',
        score_range: range(233, 234),
        comment: "You don't have to compare yourself to others! You're shining."},
       {type: 'human',
        desc: '',
        query: 'human234',
        score_range: range(234, 235),
        comment: "You're already a valuable person to someone."},
       {type: 'human',
        desc: '',
        query: 'human235',
        score_range: range(235, 236),
        comment: 'Thank you for the great work today.'},
       {type: 'human',
        desc: '',
        query: 'human236',
        score_range: range(236, 237),
        comment: "I'll be rooting for you tomorrow."},
       {type: 'human',
        desc: '',
        query: 'human237',
        score_range: range(237, 238),
        comment: 'Thank you for always trying.'},
       {type: 'human',
        desc: '',
        query: 'human238',
        score_range: range(238, 239),
        comment: "Don't worry, you're doing well enough!"},
       {type: 'human',
        desc: '',
        query: 'human239',
        score_range: range(239, 240),
        comment: "It's all rightWe just have to do it like this."},
       {type: 'human',
        desc: '',
        query: 'human240',
        score_range: range(240, 241),
        comment: "Should we go eat something delicious if you're depressed?"},
       {type: 'human',
        desc: '',
        query: 'human241',
        score_range: range(241, 242),
        comment: "When you're down? Let's go on a trip!"},
       {type: 'human',
        desc: '',
        query: 'human242',
        score_range: range(242, 243),
        comment: 'Sometimes also need to have my own time.'},
       {type: 'human',
        desc: '',
        query: 'human243',
        score_range: range(243, 244),
        comment: 'Happiness comes from small things.'},
       {type: 'human',
        desc: '',
        query: 'human244',
        score_range: range(244, 245),
        comment: "I haven't pooped in three days."},
       {type: 'human',
        desc: '',
        query: 'human245',
        score_range: range(245, 246),
        comment: "Oh, my poop smells so bad, I'm gonna carry a room spray."},
       {type: 'human',
        desc: '',
        query: 'human246',
        score_range: range(246, 247),
        comment: "I didn't flush the bathroom last time, but no one knows, right?"},
       {type: 'human',
        desc: '',
        query: 'human247',
        score_range: range(247, 248),
        comment: 'The poop I take in the morning is happiness.'},
       {type: 'human',
        desc: '',
        query: 'human248',
        score_range: range(248, 249),
        comment: "You don't think I'm a pooch now, do you?"},
       {type: 'human',
        desc: '',
        query: 'human249',
        score_range: range(249, 250),
        comment: 'I can take a piss for three hours.'},
       {type: 'human',
        desc: '',
        query: 'human250',
        score_range: range(250, 251),
        comment: "It's amazing that green poo comes out whenever you eat vegetables, right?"},
       {type: 'human',
        desc: '',
        query: 'human251',
        score_range: range(251, 252),
        comment: 'I need to poop'},
       {type: 'human',
        desc: '',
        query: 'human252',
        score_range: range(252, 253),
        comment: 'I need to pee.'},
       {type: 'human',
        desc: '',
        query: 'human253',
        score_range: range(253, 254),
        comment: 'This is the look of a person who held back and wrapped himself until he was about to poo.'},
       {type: 'human',
        desc: '',
        query: 'human254',
        score_range: range(254, 255),
        comment: "Sometimes I feel sorry for my intestinesI've been sending you too much food."},
       {type: 'human',
        desc: '',
        query: 'human255',
        score_range: range(255, 256),
        comment: "I really can't stand itGo to the bathroom."},
       {type: 'human',
        desc: '',
        query: 'human256',
        score_range: range(256, 257),
        comment: 'Where is the restroom?'},
       {type: 'human',
        desc: '',
        query: 'human257',
        score_range: range(257, 258),
        comment: "I miss the pushy bathroomIt's easy to press."},
       {type: 'human',
        desc: '',
        query: 'human258',
        score_range: range(258, 259),
        comment: 'Oh, I ate something wrong yesterdayMy stomach hurts so much.'},
       {type: 'human',
        desc: '',
        query: 'human259',
        score_range: range(259, 260),
        comment: 'Why does my stomach hurt when I have diarrhea?'},
       {type: 'human',
        desc: '',
        query: 'human260',
        score_range: range(260, 261),
        comment: "I heard a long time ago that there was a person who felt good while pooping on the bed, but that's me."},
       {type: 'human',
        desc: '',
        query: 'human261',
        score_range: range(261, 262),
        comment: 'I feel good when the bathroom is pleasant.'},
       {type: 'human',
        desc: '',
        query: 'human262',
        score_range: range(262, 263),
        comment: "No matter how good the building is, if the bathroom is dirty, it's annoying."},
       {type: 'human',
        desc: '',
        query: 'human263',
        score_range: range(263, 264),
        comment: 'I peed on the blanket yesterday.'},
       {type: 'cat',
        desc: '',
        query: 'cat1',
        score_range: range(1, 2),
        comment: 'Get me a chur.'},
       {type: 'cat',
        desc: '',
        query: 'cat2',
        score_range: range(2, 3),
        comment: 'I need you to leave me alone.'},
       {type: 'cat',
        desc: '',
        query: 'cat3',
        score_range: range(3, 4),
        comment: "Butler, don't look at the other cat!"},
       {type: 'cat',
        desc: '',
        query: 'cat4',
        score_range: range(4, 5),
        comment: 'The butler only sees me, loves me, cares about me.'},
       {type: 'cat',
        desc: '',
        query: 'cat5',
        score_range: range(5, 6),
        comment: 'I need you to be quiet.'},
       {type: 'cat',
        desc: '',
        query: 'cat6',
        score_range: range(6, 7),
        comment: "I don't like being noisy."},
       {type: 'cat',
        desc: '',
        query: 'cat7',
        score_range: range(7, 8),
        comment: 'Blink if you want to communicate with me.'},
       {type: 'cat',
        desc: '',
        query: 'cat8',
        score_range: range(8, 9),
        comment: 'I want to rub it against the butler!'},
       {type: 'cat',
        desc: '',
        query: 'cat9',
        score_range: range(9, 10),
        comment: 'You can only touch me when I let you.'},
       {type: 'cat',
        desc: '',
        query: 'cat10',
        score_range: range(10, 11),
        comment: 'Take care of the fish.'},
       {type: 'cat',
        desc: '',
        query: 'cat11',
        score_range: range(11, 12),
        comment: 'Bring me a box when you get home.'},
       {type: 'cat',
        desc: '',
        query: 'cat12',
        score_range: range(12, 13),
        comment: 'I want to go inside the vinyl and be alone.'},
       {type: 'cat',
        desc: '',
        query: 'cat13',
        score_range: range(13, 14),
        comment: "If you touch it now, you'll see!"},
       {type: 'cat',
        desc: '',
        query: 'cat14',
        score_range: range(14, 15),
        comment: 'Do you want to get punched?'},
       {type: 'cat',
        desc: '',
        query: 'cat15',
        score_range: range(15, 16),
        comment: 'Get me a toy! Play with me!'},
       {type: 'cat',
        desc: '',
        query: 'cat16',
        score_range: range(16, 17),
        comment: 'Come here.'},
       {type: 'cat',
        desc: '',
        query: 'cat17',
        score_range: range(17, 18),
        comment: 'Will you go over there?'},
       {type: 'cat',
        desc: '',
        query: 'cat18',
        score_range: range(18, 19),
        comment: "Moderate temperature, humidityI like everythingIt's comfortable."},
       {type: 'cat',
        desc: '',
        query: 'cat19',
        score_range: range(19, 20),
        comment: 'You can touch me under your chinan end'},
       {type: 'cat',
        desc: '',
        query: 'cat20',
        score_range: range(20, 21),
        comment: "I'd like to ask for a variety of toys."},
       {type: 'cat',
        desc: '',
        query: 'cat21',
        score_range: range(21, 22),
        comment: 'My feet are a very cute pink style:>'},
       {type: 'cat',
        desc: '',
        query: 'cat22',
        score_range: range(22, 23),
        comment: 'Come here so I can squeeze.'},
       {type: 'cat',
        desc: '',
        query: 'cat23',
        score_range: range(23, 24),
        comment: 'Can you get me some new churros?'},
       {type: 'cat',
        desc: '',
        query: 'cat24',
        score_range: range(24, 25),
        comment: "I'm sleepy, but do you know how cold it feels?"},
       {type: 'cat',
        desc: '',
        query: 'cat25',
        score_range: range(25, 26),
        comment: "Butler, I've been loving you lately."},
       {type: 'cat',
        desc: '',
        query: 'cat26',
        score_range: range(26, 27),
        comment: 'Is there anything fun going on?'},
       {type: 'cat',
        desc: '',
        query: 'cat27',
        score_range: range(27, 28),
        comment: 'I can rule the world with a beard.'},
       {type: 'cat',
        desc: '',
        query: 'cat28',
        score_range: range(28, 29),
        comment: "You don't know what happened last night, do you?"},
       {type: 'cat',
        desc: '',
        query: 'cat29',
        score_range: range(29, 30),
        comment: "Did You know I don't like walking, right?"},
       {type: 'cat',
        desc: '',
        query: 'cat30',
        score_range: range(30, 31),
        comment: "It's a walk for a dogI'm a great cat."},
       {type: 'cat',
        desc: '',
        query: 'cat31',
        score_range: range(31, 32),
        comment: "A great cat doesn't go for a walk."},
       {type: 'cat',
        desc: '',
        query: 'cat32',
        score_range: range(32, 33),
        comment: 'Great cats are not dragged around.'},
       {type: 'cat',
        desc: '',
        query: 'cat33',
        score_range: range(33, 34),
        comment: 'If you have work to go outside and go with meBe carefully'},
       {type: 'cat',
        desc: '',
        query: 'cat34',
        score_range: range(34, 35),
        comment: 'If you know a pretty cat, please introduce it to me.'},
       {type: 'cat',
        desc: '',
        query: 'cat35',
        score_range: range(35, 36),
        comment: "I'm hungryGive me something to eat"},
       {type: 'cat',
        desc: '',
        query: 'cat36',
        score_range: range(36, 37),
        comment: "I want to rest today, don't touch me."},
       {type: 'cat',
        desc: '',
        query: 'cat37',
        score_range: range(37, 38),
        comment: "I don't want to walk longMy cute jelly is wearing out."},
       {type: 'cat',
        desc: '',
        query: 'cat38',
        score_range: range(38, 39),
        comment: 'I like a day when the wind is coolToday is that time.'},
       {type: 'cat',
        desc: '',
        query: 'cat39',
        score_range: range(39, 40),
        comment: 'Be careful when you hug me, with your hands.'},
       {type: 'cat',
        desc: '',
        query: 'cat40',
        score_range: range(40, 41),
        comment: "It doesn't feel good to step on the dirt, hug me."},
       {type: 'cat',
        desc: '',
        query: 'cat41',
        score_range: range(41, 42),
        comment: "I don't feel good about asphalt, hug me."},
       {type: 'cat',
        desc: '',
        query: 'cat42',
        score_range: range(42, 43),
        comment: "Don't let the sun go out too strongProtect my skin"},
       {type: 'cat',
        desc: '',
        query: 'cat43',
        score_range: range(43, 44),
        comment: "I'm a little tired today, get me a meal."},
       {type: 'cat',
        desc: '',
        query: 'cat44',
        score_range: range(44, 45),
        comment: "It's a hairy dayBrush my hair."},
       {type: 'cat',
        desc: '',
        query: 'cat45',
        score_range: range(45, 46),
        comment: "What's all the fuss outside? Let's go somewhere quiet."},
       {type: 'cat',
        desc: '',
        query: 'cat46',
        score_range: range(46, 47),
        comment: "Let's go out to eat sometimeI'm sick of homecooked meals."},
       {type: 'cat',
        desc: '',
        query: 'cat47',
        score_range: range(47, 48),
        comment: "You don't see any mice these days, go out and look for them."},
       {type: 'cat',
        desc: '',
        query: 'cat48',
        score_range: range(48, 49),
        comment: "What's that?! What a quickie! Get him!"},
       {type: 'cat',
        desc: '',
        query: 'cat49',
        score_range: range(49, 50),
        comment: "It's a good day to jump for some reason."},
       {type: 'cat',
        desc: '',
        query: 'cat50',
        score_range: range(50, 51),
        comment: 'I want to catch something quickToday is Hunting Day'},
       {type: 'cat',
        desc: '',
        query: 'cat51',
        score_range: range(51, 52),
        comment: "Let's catch a mouseLet's catch a mouseSqueak, squeak.squeak"},
       {type: 'cat',
        desc: '',
        query: 'cat52',
        score_range: range(52, 53),
        comment: 'Did you read my eyes? I want to relax today.'},
       {type: 'cat',
        desc: '',
        query: 'cat53',
        score_range: range(53, 54),
        comment: 'My movements are as fast as bees, and my fur is as soft as cotton!'},
       {type: 'cat',
        desc: '',
        query: 'cat54',
        score_range: range(54, 55),
        comment: "You're having so much fun todayLet's go home."},
       {type: 'cat',
        desc: '',
        query: 'cat55',
        score_range: range(55, 56),
        comment: "All right, all right, let's go!"},
       {type: 'cat',
        desc: '',
        query: 'cat56',
        score_range: range(56, 57),
        comment: 'I feel stuffy staying at home these days!'},
       {type: 'cat',
        desc: '',
        query: 'cat57',
        score_range: range(57, 58),
        comment: "Do I look fat? Why don't we take a walk?"},
       {type: 'cat',
        desc: '',
        query: 'cat58',
        score_range: range(58, 59),
        comment: 'Wait, what is this? I think I found something.'},
       {type: 'cat',
        desc: '',
        query: 'cat59',
        score_range: range(59, 60),
        comment: 'Why am I in such a good mood today?'},
       {type: 'cat',
        desc: '',
        query: 'cat60',
        score_range: range(60, 61),
        comment: "God, I'm sleepy even though I keep sleeping."},
       {type: 'cat',
        desc: '',
        query: 'cat61',
        score_range: range(61, 62),
        comment: "I don't want to do anything."},
       {type: 'cat',
        desc: '',
        query: 'cat62',
        score_range: range(62, 63),
        comment: "Don't touch me because I'm sensitive."},
       {type: 'cat',
        desc: '',
        query: 'cat63',
        score_range: range(63, 64),
        comment: 'hey! Can you give me a snack because I feel bad?'},
       {type: 'cat',
        desc: '',
        query: 'cat64',
        score_range: range(64, 65),
        comment: "What's that? I'm curious!"},
       {type: 'cat',
        desc: '',
        query: 'cat65',
        score_range: range(65, 66),
        comment: 'Why do you keep staring at me?'},
       {type: 'cat',
        desc: '',
        query: 'cat66',
        score_range: range(66, 67),
        comment: 'What is that? I am very scared,'},
       {type: 'cat',
        desc: '',
        query: 'cat67',
        score_range: range(67, 68),
        comment: 'Are you okay? what is your problem?Are you tired?'},
       {type: 'cat',
        desc: '',
        query: 'cat68',
        score_range: range(68, 69),
        comment: "Wow, I'm so scared."},
       {type: 'cat',
        desc: '',
        query: 'cat69',
        score_range: range(69, 70),
        comment: "I'm concentrating right now, so tell me."},
       {type: 'cat',
        desc: '',
        query: 'cat70',
        score_range: range(70, 71),
        comment: "Don't make me clingy."},
       {type: 'cat',
        desc: '',
        query: 'cat71',
        score_range: range(71, 72),
        comment: 'Can a slap if you can do?'},
       {type: 'cat',
        desc: '',
        query: 'cat72',
        score_range: range(72, 73),
        comment: 'an extreme state of excitement'},
       {type: 'cat',
        desc: '',
        query: 'cat73',
        score_range: range(73, 74),
        comment: 'Yes, I believe youI will!'},
       {type: 'cat',
        desc: '',
        query: 'cat74',
        score_range: range(74, 75),
        comment: "Isn't there anything fun?"},
       {type: 'cat',
        desc: '',
        query: 'cat75',
        score_range: range(75, 76),
        comment: "What's wrong with her again?"},
       {type: 'cat',
        desc: '',
        query: 'cat76',
        score_range: range(76, 77),
        comment: 'Heheheh! I feel good!'},
       {type: 'cat',
        desc: '',
        query: 'cat77',
        score_range: range(77, 78),
        comment: "I'll give you a chance to pat me on the stomach."},
       {type: 'cat',
        desc: '',
        query: 'cat78',
        score_range: range(78, 79),
        comment: 'I like you very, very much.'},
       {type: 'cat',
        desc: '',
        query: 'cat79',
        score_range: range(79, 80),
        comment: 'I always thank you!'},
       {type: 'cat',
        desc: '',
        query: 'cat80',
        score_range: range(80, 81),
        comment: "Playing the game with me since I'm bored?"},
       {type: 'cat',
        desc: '',
        query: 'cat81',
        score_range: range(81, 82),
        comment: "I'm sick of that now! Buy me a new toy!"},
       {type: 'cat',
        desc: '',
        query: 'cat82',
        score_range: range(82, 83),
        comment: 'I want to play!'},
       {type: 'cat',
        desc: '',
        query: 'cat83',
        score_range: range(83, 84),
        comment: "Can you give me a warm heart? It's not a request, it's an order!"},
       {type: 'cat',
        desc: '',
        query: 'cat84',
        score_range: range(84, 85),
        comment: "I hate to mess with youI'm gonna be alone."},
       {type: 'cat',
        desc: '',
        query: 'cat85',
        score_range: range(85, 86),
        comment: 'Give me a hug!'},
       {type: 'cat',
        desc: '',
        query: 'cat86',
        score_range: range(86, 87),
        comment: "I don't understand why you always eat delicious food by yourself."},
       {type: 'cat',
        desc: '',
        query: 'cat87',
        score_range: range(87, 88),
        comment: 'Go easy on the alcohol.'},
       {type: 'cat',
        desc: '',
        query: 'cat88',
        score_range: range(88, 89),
        comment: "Do you have any complaints about me sleeping? Then it's worth keeping."},
       {type: 'cat',
        desc: '',
        query: 'cat89',
        score_range: range(89, 90),
        comment: "Don't touch me..."},
       {type: 'cat',
        desc: '',
        query: 'cat90',
        score_range: range(90, 91),
        comment: 'Ah, here we go again..'},
       {type: 'cat',
        desc: '',
        query: 'cat91',
        score_range: range(91, 92),
        comment: 'What are you looking at?'},
       {type: 'cat',
        desc: '',
        query: 'cat92',
        score_range: range(92, 93),
        comment: 'Did you call me now?'},
       {type: 'cat',
        desc: '',
        query: 'cat93',
        score_range: range(93, 94),
        comment: 'Eat this..Cat Punch'},
       {type: 'cat',
        desc: '',
        query: 'cat94',
        score_range: range(94, 95),
        comment: 'Stop taking pictures.'},
       {type: 'cat',
        desc: '',
        query: 'cat95',
        score_range: range(95, 96),
        comment: "It's not funny."},
       {type: 'cat',
        desc: '',
        query: 'cat96',
        score_range: range(96, 97),
        comment: 'Give me a pat.'},
       {type: 'cat',
        desc: '',
        query: 'cat97',
        score_range: range(97, 98),
        comment: 'Is this enough?'},
       {type: 'cat',
        desc: '',
        query: 'cat98',
        score_range: range(98, 99),
        comment: 'I need some time aloneLeave me alone!'},
       {type: 'cat',
        desc: '',
        query: 'cat99',
        score_range: range(99, 100),
        comment: "I told you not to call meDon't call me..."},
       {type: 'cat',
        desc: '',
        query: 'cat100',
        score_range: range(100, 101),
        comment: 'But I did as I want to go home.'},
       {type: 'cat',
        desc: '',
        query: 'cat101',
        score_range: range(101, 102),
        comment: "I don't mind touching myselfBut you can't^_^"},
       {type: 'cat',
        desc: '',
        query: 'cat102',
        score_range: range(102, 103),
        comment: 'Why do you keep looking at? (ignore)'},
       {type: 'cat',
        desc: '',
        query: 'cat103',
        score_range: range(103, 104),
        comment: "I'll do you a damn thing."},
       {type: 'cat',
        desc: '',
        query: 'cat104',
        score_range: range(104, 105),
        comment: 'Let go of me.'},
       {type: 'cat',
        desc: '',
        query: 'cat105',
        score_range: range(105, 106),
        comment: "I'm gonna bite you."},
       {type: 'cat',
        desc: '',
        query: 'cat106',
        score_range: range(106, 107),
        comment: 'Bring me a snack and support me!!'},
       {type: 'cat',
        desc: '',
        query: 'cat107',
        score_range: range(107, 108),
        comment: "What's this on your neck? Take it out right now!"},
       {type: 'cat',
        desc: '',
        query: 'cat108',
        score_range: range(108, 109),
        comment: "What's wrong?"},
       {type: 'cat',
        desc: '',
        query: 'cat109',
        score_range: range(109, 110),
        comment: "Don't come."},
       {type: 'cat',
        desc: '',
        query: 'cat110',
        score_range: range(110, 111),
        comment: "Let's live roughly."},
       {type: 'cat',
        desc: '',
        query: 'cat111',
        score_range: range(111, 112),
        comment: "Why don't you mind your own business now?"},
       {type: 'cat',
        desc: '',
        query: 'cat112',
        score_range: range(112, 113),
        comment: 'Phew, that guy.'},
       {type: 'cat',
        desc: '',
        query: 'cat113',
        score_range: range(113, 114),
        comment: "It's all for nothing."},
       {type: 'cat',
        desc: '',
        query: 'cat114',
        score_range: range(114, 115),
        comment: '…(Ignore)'},
       {type: 'cat',
        desc: '',
        query: 'cat115',
        score_range: range(115, 116),
        comment: 'What a noise!'},
       {type: 'cat',
        desc: '',
        query: 'cat116',
        score_range: range(116, 117),
        comment: 'You want to fight?'},
       {type: 'cat',
        desc: '',
        query: 'cat117',
        score_range: range(117, 118),
        comment: "It's annoying..."},
       {type: 'cat',
        desc: '',
        query: 'cat118',
        score_range: range(118, 119),
        comment: 'Butler, do you want to be fired?'},
       {type: 'cat',
        desc: '',
        query: 'cat119',
        score_range: range(119, 120),
        comment: '(Ignore) Bah! ...'},
       {type: 'cat',
        desc: '',
        query: 'cat120',
        score_range: range(120, 121),
        comment: 'Are you here? Give me a chance to give you a snack.'},
       {type: 'cat',
        desc: '',
        query: 'cat121',
        score_range: range(121, 122),
        comment: 'How dare you leave me behind and come in now?!'},
       {type: 'cat',
        desc: '',
        query: 'cat122',
        score_range: range(122, 123),
        comment: 'Hurry up and go!'},
       {type: 'cat',
        desc: '',
        query: 'cat123',
        score_range: range(123, 124),
        comment: 'Have a safe trip or not.'},
       {type: 'cat',
        desc: '',
        query: 'cat124',
        score_range: range(124, 125),
        comment: 'Who are you to pretend to know me?'},
       {type: 'cat',
        desc: '',
        query: 'cat125',
        score_range: range(125, 126),
        comment: 'Again? Stop drinking! Stop drinking!'},
       {type: 'cat',
        desc: '',
        query: 'cat126',
        score_range: range(126, 127),
        comment: 'Why are you here now? I was bored!'},
       {type: 'cat',
        desc: '',
        query: 'cat127',
        score_range: range(127, 128),
        comment: 'Buy a highquality snack for me when I come.'},
       {type: 'cat',
        desc: '',
        query: 'cat128',
        score_range: range(128, 129),
        comment: 'Who is this?'},
       {type: 'cat',
        desc: '',
        query: 'cat129',
        score_range: range(129, 130),
        comment: "I don't want to be home alone! Take me with you!"},
       {type: 'cat',
        desc: '',
        query: 'cat130',
        score_range: range(130, 131),
        comment: "What are you doing? If you're here, you should pet me first."},
       {type: 'cat',
        desc: '',
        query: 'cat131',
        score_range: range(131, 132),
        comment: 'Phew~(Shake head)'},
       {type: 'cat',
        desc: '',
        query: 'cat132',
        score_range: range(132, 133),
        comment: "If you come early today, I'll play with you!"},
       {type: 'cat',
        desc: '',
        query: 'cat133',
        score_range: range(133, 134),
        comment: "Humph! I don't say hello to strangers!"},
       {type: 'cat',
        desc: '',
        query: 'cat134',
        score_range: range(134, 135),
        comment: 'What are you looking at? Come on in!'},
       {type: 'cat',
        desc: '',
        query: 'cat135',
        score_range: range(135, 136),
        comment: 'Why are you bothering me as soon as you get here?'},
       {type: 'cat',
        desc: '',
        query: 'cat136',
        score_range: range(136, 137),
        comment: 'Do you have mine in your hand?'},
       {type: 'cat',
        desc: '',
        query: 'cat137',
        score_range: range(137, 138),
        comment: 'Come on in and give me a hug!'},
       {type: 'cat',
        desc: '',
        query: 'cat138',
        score_range: range(138, 139),
        comment: "I don't like customers! He keeps bothering me."},
       {type: 'cat',
        desc: '',
        query: 'cat139',
        score_range: range(139, 140),
        comment: 'Oh! Are you the one who came to give me snacks?'},
       {type: 'cat',
        desc: '',
        query: 'cat140',
        score_range: range(140, 141),
        comment: 'mess, but come in.'},
       {type: 'cat',
        desc: '',
        query: 'cat141',
        score_range: range(141, 142),
        comment: 'Why is it empty handed?'},
       {type: 'cat',
        desc: '',
        query: 'cat142',
        score_range: range(142, 143),
        comment: 'Hello, friends!'},
       {type: 'cat',
        desc: '',
        query: 'cat143',
        score_range: range(143, 144),
        comment: "Are you here?(I'm sleepy...)"},
       {type: 'cat',
        desc: '',
        query: 'cat144',
        score_range: range(144, 145),
        comment: "Why don't you go around early?"},
       {type: 'cat',
        desc: '',
        query: 'cat145',
        score_range: range(145, 146),
        comment: "I didn't do anything!"},
       {type: 'cat',
        desc: '',
        query: 'cat146',
        score_range: range(146, 147),
        comment: "Come on in and feed meI'm hungry!"},
       {type: 'cat',
        desc: '',
        query: 'cat147',
        score_range: range(147, 148),
        comment: "If you don't come home soon, I'll make a mess of the house!"},
       {type: 'cat',
        desc: '',
        query: 'cat148',
        score_range: range(148, 149),
        comment: 'My butler is finally here! Shall we get him to work now? Are you ready?'},
       {type: 'cat',
        desc: '',
        query: 'cat149',
        score_range: range(149, 150),
        comment: "We're out of riceGive me the rice."},
       {type: 'cat',
        desc: '',
        query: 'cat150',
        score_range: range(150, 151),
        comment: "I'm only gonna drink clean water."},
       {type: 'cat',
        desc: '',
        query: 'cat151',
        score_range: range(151, 152),
        comment: 'Give me Churu!'},
       {type: 'cat',
        desc: '',
        query: 'cat152',
        score_range: range(152, 153),
        comment: 'I like catnip~~'},
       {type: 'cat',
        desc: '',
        query: 'cat153',
        score_range: range(153, 154),
        comment: 'I want to eat a crab fish jerky!'},
       {type: 'cat',
        desc: '',
        query: 'cat154',
        score_range: range(154, 155),
        comment: "Yikes, it's not good."},
       {type: 'cat',
        desc: '',
        query: 'cat155',
        score_range: range(155, 156),
        comment: "Change the feedI'm sick of it."},
       {type: 'cat',
        desc: '',
        query: 'cat156',
        score_range: range(156, 157),
        comment: "It's hotShould we eat some cool watermelon?"},
       {type: 'cat',
        desc: '',
        query: 'cat157',
        score_range: range(157, 158),
        comment: 'Can you give me a snack?'},
       {type: 'cat',
        desc: '',
        query: 'cat158',
        score_range: range(158, 159),
        comment: "I'll have it later."},
       {type: 'cat',
        desc: '',
        query: 'cat159',
        score_range: range(159, 160),
        comment: "What's this? This is so good!"},
       {type: 'cat',
        desc: '',
        query: 'cat160',
        score_range: range(160, 161),
        comment: "You thought I liked fish, didn't you? Actually, I like meat."},
       {type: 'cat',
        desc: '',
        query: 'cat161',
        score_range: range(161, 162),
        comment: 'A lot of snacks and feed! Okay?'},
       {type: 'cat',
        desc: '',
        query: 'cat162',
        score_range: range(162, 163),
        comment: 'Do you have any fish?'},
       {type: 'cat',
        desc: '',
        query: 'cat163',
        score_range: range(163, 164),
        comment: "You don't have meat?"},
       {type: 'cat',
        desc: '',
        query: 'cat164',
        score_range: range(164, 165),
        comment: "Today's meal was delicious!!"},
       {type: 'cat',
        desc: '',
        query: 'cat165',
        score_range: range(165, 166),
        comment: "I'm hungryGive me something delicious!"},
       {type: 'cat',
        desc: '',
        query: 'cat166',
        score_range: range(166, 167),
        comment: "I ate well! I'm full."},
       {type: 'cat',
        desc: '',
        query: 'cat167',
        score_range: range(167, 168),
        comment: 'I want some sweet fruit.'},
       {type: 'cat',
        desc: '',
        query: 'cat168',
        score_range: range(168, 169),
        comment: 'Give me more! Give me more!'},
       {type: 'cat',
        desc: '',
        query: 'cat169',
        score_range: range(169, 170),
        comment: 'Would you eat this?'},
       {type: 'cat',
        desc: '',
        query: 'cat170',
        score_range: range(170, 171),
        comment: 'Too little feed!'},
       {type: 'cat',
        desc: '',
        query: 'cat171',
        score_range: range(171, 172),
        comment: 'Shall we eat together?'},
       {type: 'cat',
        desc: '',
        query: 'cat172',
        score_range: range(172, 173),
        comment: 'I had a meal, did you?'},
       {type: 'cat',
        desc: '',
        query: 'cat173',
        score_range: range(173, 174),
        comment: "It's churros over rice!"},
       {type: 'cat',
        desc: '',
        query: 'cat174',
        score_range: range(174, 175),
        comment: "I didn't like this snack."},
       {type: 'cat',
        desc: '',
        query: 'cat175',
        score_range: range(175, 176),
        comment: "I'd rather have a longterm meal than a churro today."},
       {type: 'cat',
        desc: '',
        query: 'cat176',
        score_range: range(176, 177),
        comment: "It's too muchTake some out."},
       {type: 'cat',
        desc: '',
        query: 'cat177',
        score_range: range(177, 178),
        comment: "I'm so full, I'm going to be full~"},
       {type: 'cat',
        desc: '',
        query: 'cat178',
        score_range: range(178, 179),
        comment: "Eat fast and lie downI'm gonna lie down."},
       {type: 'cat',
        desc: '',
        query: 'cat179',
        score_range: range(179, 180),
        comment: 'ButlerI have to go nowshit'},
       {type: 'cat',
        desc: '',
        query: 'cat180',
        score_range: range(180, 181),
        comment: "If you don't change the sand to a new one right away, I'll mess up your shoe rack."},
       {type: 'cat',
        desc: '',
        query: 'cat181',
        score_range: range(181, 182),
        comment: 'Something huge is about to come out of my body'},
       {type: 'cat',
        desc: '',
        query: 'cat182',
        score_range: range(182, 183),
        comment: "I need to pee, but I don't need to."},
       {type: 'cat',
        desc: '',
        query: 'cat183',
        score_range: range(183, 184),
        comment: 'I always think the bathroom is not my style.'},
       {type: 'cat',
        desc: '',
        query: 'cat184',
        score_range: range(184, 185),
        comment: "I'm sorryI peed on the floor the other day."},
       {type: 'cat',
        desc: '',
        query: 'cat185',
        score_range: range(185, 186),
        comment: 'Did I eat too much earlier? My intestines are shaking.'},
       {type: 'cat',
        desc: '',
        query: 'cat186',
        score_range: range(186, 187),
        comment: 'Deacon, do you agree that my stool smells like flowers?'},
       {type: 'cat',
        desc: '',
        query: 'cat187',
        score_range: range(187, 188),
        comment: 'Pleasure is always right.'},
       {type: 'cat',
        desc: '',
        query: 'cat188',
        score_range: range(188, 189),
        comment: 'Change the location of the bathroomTo a place where the sunlight comes in.'},
       {type: 'cat',
        desc: '',
        query: 'cat189',
        score_range: range(189, 190),
        comment: 'I think I have a pee on my hairI need you to check.'},
       {type: 'cat',
        desc: '',
        query: 'cat190',
        score_range: range(190, 191),
        comment: "Why don't you change the feed, butler? I can't digest well."},
       {type: 'cat',
        desc: '',
        query: 'cat191',
        score_range: range(191, 192),
        comment: "It's time for digestion to end soonThe bathroom must be clean, right?"},
       {type: 'cat',
        desc: '',
        query: 'cat192',
        score_range: range(192, 193),
        comment: 'Sometimes I want to pee on the blanket when the Butler falls asleep.'},
       {type: 'cat',
        desc: '',
        query: 'cat193',
        score_range: range(193, 194),
        comment: 'Always play classical music when I poop.'},
       {type: 'cat',
        desc: '',
        query: 'cat194',
        score_range: range(194, 195),
        comment: 'Why is the Butler’s bathroom different from mine?'},
       {type: 'cat',
        desc: '',
        query: 'cat195',
        score_range: range(195, 196),
        comment: 'Why do I have to pee when I drink water? Explain.'},
       {type: 'cat',
        desc: '',
        query: 'cat196',
        score_range: range(196, 197),
        comment: "Today's poop is very colourful."},
       {type: 'cat',
        desc: '',
        query: 'cat197',
        score_range: range(197, 198),
        comment: 'Butler, always wipe my ass after I poop.'},
       {type: 'cat',
        desc: '',
        query: 'cat198',
        score_range: range(198, 199),
        comment: 'I need you to check my shit and check my healthButler.'},
       {type: 'cat',
        desc: '',
        query: 'cat199',
        score_range: range(199, 200),
        comment: "Why do I have to wash up when I'm clean?"},
       {type: 'cat',
        desc: '',
        query: 'cat200',
        score_range: range(200, 201),
        comment: "Let go!!! I'm getting out!!!"},
       {type: 'cat',
        desc: '',
        query: 'cat201',
        score_range: range(201, 202),
        comment: 'The water is too cold–ㅅ'},
       {type: 'cat',
        desc: '',
        query: 'cat202',
        score_range: range(202, 203),
        comment: 'Oh, reasonable temperature of satisfaction.'},
       {type: 'cat',
        desc: '',
        query: 'cat203',
        score_range: range(203, 204),
        comment: 'What are you gonna do for me when I wash up?'},
       {type: 'cat',
        desc: '',
        query: 'cat204',
        score_range: range(204, 205),
        comment: "It's cool after the shower."},
       {type: 'cat',
        desc: '',
        query: 'cat205',
        score_range: range(205, 206),
        comment: "Butler, hold on to me because I'm scared."},
       {type: 'cat',
        desc: '',
        query: 'cat206',
        score_range: range(206, 207),
        comment: 'Finish it as soon as possible.'},
       {type: 'cat',
        desc: '',
        query: 'cat207',
        score_range: range(207, 208),
        comment: "You're cutting my toenails?! Are you going to taste my toenails?"},
       {type: 'cat',
        desc: '',
        query: 'cat208',
        score_range: range(208, 209),
        comment: 'Dry each hair nicely.'},
       {type: 'cat',
        desc: '',
        query: 'cat209',
        score_range: range(209, 210),
        comment: 'I got groomed earlierShould I wash up again?'},
       {type: 'cat',
        desc: '',
        query: 'cat210',
        score_range: range(210, 211),
        comment: "I'm so cold because I'm wet."},
       {type: 'cat',
        desc: '',
        query: 'cat211',
        score_range: range(211, 212),
        comment: "It's a perfect day for a bathHaha"},
       {type: 'cat',
        desc: '',
        query: 'cat212',
        score_range: range(212, 213),
        comment: "I'm going to eat a lot of snacks after I wash up."},
       {type: 'cat',
        desc: '',
        query: 'cat213',
        score_range: range(213, 214),
        comment: "See? I'm not fat, I'm furry^_^"},
       {type: 'cat',
        desc: '',
        query: 'cat214',
        score_range: range(214, 215),
        comment: "I don't want to go in the water!"},
       {type: 'cat',
        desc: '',
        query: 'cat215',
        score_range: range(215, 216),
        comment: "It's a badI feel like I'm going to take a bath today!!!"},
       {type: 'cat',
        desc: '',
        query: 'cat216',
        score_range: range(216, 217),
        comment: "I'll take care of it now."},
       {type: 'cat',
        desc: '',
        query: 'cat217',
        score_range: range(217, 218),
        comment: "Ugh, it's warm.~~"},
       {type: 'cat',
        desc: '',
        query: 'cat218',
        score_range: range(218, 219),
        comment: "It's fun to play in the water."},
       {type: 'cat',
        desc: '',
        query: 'cat219',
        score_range: range(219, 220),
        comment: "Oh, I guess you did a good job todayIt's soft."},
       {type: 'cat',
        desc: '',
        query: 'cat220',
        score_range: range(220, 221),
        comment: "I don't feel like washing up now..."},
       {type: 'cat',
        desc: '',
        query: 'cat221',
        score_range: range(221, 222),
        comment: "I'm thirsty..give me some water!"},
       {type: 'cat',
        desc: '',
        query: 'cat222',
        score_range: range(222, 223),
        comment: 'A strange smell in the water?'},
       {type: 'cat',
        desc: '',
        query: 'cat223',
        score_range: range(223, 224),
        comment: "Cut my toenails while I'm washing up!"},
       {type: 'cat',
        desc: '',
        query: 'cat224',
        score_range: range(224, 225),
        comment: "Butler..you're not gonna let it go."},
       {type: 'cat',
        desc: '',
        query: 'cat225',
        score_range: range(225, 226),
        comment: 'Your hands are a little rough todayWash gently.'},
       {type: 'cat',
        desc: '',
        query: 'cat226',
        score_range: range(226, 227),
        comment: "I can't wait to wash up and lie down!"},
       {type: 'cat',
        desc: '',
        query: 'cat227',
        score_range: range(227, 228),
        comment: 'I feel drowsy..good!'},
       {type: 'cat',
        desc: '',
        query: 'cat228',
        score_range: range(228, 229),
        comment: 'Oh, my! Water got in my ear!'},
       {type: 'cat',
        desc: '',
        query: 'cat229',
        score_range: range(229, 230),
        comment: 'Butler, I want you to be happy!'},
       {type: 'cat',
        desc: '',
        query: 'cat230',
        score_range: range(230, 231),
        comment: 'Look, I brought it for you!'},
       {type: 'cat',
        desc: '',
        query: 'cat231',
        score_range: range(231, 232),
        comment: "You're the best at playing with me!"},
       {type: 'cat',
        desc: '',
        query: 'cat232',
        score_range: range(232, 233),
        comment: "You look like you're in a bad moodDo you want to play with the ball?"},
       {type: 'cat',
        desc: '',
        query: 'cat233',
        score_range: range(233, 234),
        comment: 'Today I give you the chur!'},
       {type: 'cat',
        desc: '',
        query: 'cat234',
        score_range: range(234, 235),
        comment: "What's the matter? I'll do it Squeeze for you."},
       {type: 'cat',
        desc: '',
        query: 'cat235',
        score_range: range(235, 236),
        comment: "I'm so happy to have a butler!"},
       {type: 'cat',
        desc: '',
        query: 'cat236',
        score_range: range(236, 237),
        comment: 'I hope I can be of help to you!'},
       {type: 'cat',
        desc: '',
        query: 'cat237',
        score_range: range(237, 238),
        comment: 'Listen to happy so long as the sound of a plastic bag!'},
       {type: 'cat',
        desc: '',
        query: 'cat238',
        score_range: range(238, 239),
        comment: "I'll play with you specially today!"},
       {type: 'cat',
        desc: '',
        query: 'cat239',
        score_range: range(239, 240),
        comment: "It's okay to take a break today."},
       {type: 'cat',
        desc: '',
        query: 'cat240',
        score_range: range(240, 241),
        comment: "If you want to be alone, I'll get out of your way."},
       {type: 'cat',
        desc: '',
        query: 'cat241',
        score_range: range(241, 242),
        comment: 'You did a great job today!'},
       {type: 'cat',
        desc: '',
        query: 'cat242',
        score_range: range(242, 243),
        comment: "If you're depressed, wave your tail like me."},
       {type: 'cat',
        desc: '',
        query: 'cat243',
        score_range: range(243, 244),
        comment: "I'll let you touch your belly today!"},
       {type: 'cat',
        desc: '',
        query: 'cat244',
        score_range: range(244, 245),
        comment: "Are you going to be depressed when I'm here?"},
       {type: 'cat',
        desc: '',
        query: 'cat245',
        score_range: range(245, 246),
        comment: "Look at me! I'm so cute and depressed!"},
       {type: 'cat',
        desc: '',
        query: 'cat246',
        score_range: range(246, 247),
        comment: "You're already a cool enough person!"},
       {type: 'cat',
        desc: '',
        query: 'cat247',
        score_range: range(247, 248),
        comment: "You're the best for me, aren't you?"},
       {type: 'cat',
        desc: '',
        query: 'cat248',
        score_range: range(248, 249),
        comment: 'Great job again today.'},
       {type: 'cat',
        desc: '',
        query: 'cat249',
        score_range: range(249, 250),
        comment: "I'll give you my favorite fishRelax~"},
       {type: 'cat',
        desc: '',
        query: 'cat250',
        score_range: range(250, 251),
        comment: 'Do you want to touch my pink jelly?'},
       {type: 'cat',
        desc: '',
        query: 'cat251',
        score_range: range(251, 252),
        comment: "Eat something delicious and you'll feel better!"},
       {type: 'cat',
        desc: '',
        query: 'cat252',
        score_range: range(252, 253),
        comment: 'Look at the pretty sky when you feel stuffy!'},
       {type: 'cat',
        desc: '',
        query: 'cat253',
        score_range: range(253, 254),
        comment: "You can lean on me if you're sad."},
       {type: 'cat',
        desc: '',
        query: 'cat254',
        score_range: range(254, 255),
        comment: "You look tiredI'll listen to you!"},
       {type: 'cat',
        desc: '',
        query: 'cat255',
        score_range: range(255, 256),
        comment: "You'll feel better if you play with me."},
       {type: 'cat',
        desc: '',
        query: 'cat256',
        score_range: range(256, 257),
        comment: "I'm working hard to cheer you up."},
       {type: 'cat',
        desc: '',
        query: 'cat257',
        score_range: range(257, 258),
        comment: "I'm always on your side."},
       {type: 'cat',
        desc: '',
        query: 'cat258',
        score_range: range(258, 259),
        comment: 'A lot of good things will happen in the future!'},
       {type: 'dog',
        desc: '',
        query: 'dog1',
        score_range: range(1, 2),
        comment: 'Hold on a second! What does it smell like?'},
       {type: 'dog',
        desc: '',
        query: 'dog2',
        score_range: range(2, 3),
        comment: "Let's go for a walkThe weather is so nice!"},
       {type: 'dog',
        desc: '',
        query: 'dog3',
        score_range: range(3, 4),
        comment: "Oh, that dog is prettyCan't we go over there?"},
       {type: 'dog',
        desc: '',
        query: 'dog4',
        score_range: range(4, 5),
        comment: 'These guys go play some more fun?'},
       {type: 'dog',
        desc: '',
        query: 'dog5',
        score_range: range(5, 6),
        comment: 'I want to go on a different walking course today!'},
       {type: 'dog',
        desc: '',
        query: 'dog6',
        score_range: range(6, 7),
        comment: "I'm thirsty! I want to drink water!"},
       {type: 'dog',
        desc: '',
        query: 'dog7',
        score_range: range(7, 8),
        comment: "Wait a minute! I'm going to pee!"},
       {type: 'dog',
        desc: '',
        query: 'dog8',
        score_range: range(8, 9),
        comment: 'What does it smell like? It smells delicious.'},
       {type: 'dog',
        desc: '',
        query: 'dog9',
        score_range: range(9, 10),
        comment: "I'm tired nowLet's go home!"},
       {type: 'dog',
        desc: '',
        query: 'dog10',
        score_range: range(10, 11),
        comment: "What's that? There's something."},
       {type: 'dog',
        desc: '',
        query: 'dog11',
        score_range: range(11, 12),
        comment: "I'm running first! I want to run!"},
       {type: 'dog',
        desc: '',
        query: 'dog12',
        score_range: range(12, 13),
        comment: "Come on! Let's go!"},
       {type: 'dog',
        desc: '',
        query: 'dog13',
        score_range: range(13, 14),
        comment: 'I want to walk like a human beingI want to walk hand in hand!'},
       {type: 'dog',
        desc: '',
        query: 'dog14',
        score_range: range(14, 15),
        comment: 'Give me a hug! Give me a hug!'},
       {type: 'dog',
        desc: '',
        query: 'dog15',
        score_range: range(15, 16),
        comment: 'I want to dig in the sand.'},
       {type: 'dog',
        desc: '',
        query: 'dog16',
        score_range: range(16, 17),
        comment: "I'm gonna take a break!"},
       {type: 'dog',
        desc: '',
        query: 'dog17',
        score_range: range(17, 18),
        comment: "I'm looking forward to what we're having for dinner tonight."},
       {type: 'dog',
        desc: '',
        query: 'dog18',
        score_range: range(18, 19),
        comment: 'There are a lot of friends over there and I want to go there!'},
       {type: 'dog',
        desc: '',
        query: 'dog19',
        score_range: range(19, 20),
        comment: "I'm scared of that scary! Let's go around!"},
       {type: 'dog',
        desc: '',
        query: 'dog20',
        score_range: range(20, 21),
        comment: 'Hooray, hooray, hooray!~Excited~'},
       {type: 'dog',
        desc: '',
        query: 'dog21',
        score_range: range(21, 22),
        comment: "I'm in a bad mood today, so don't touch me."},
       {type: 'dog',
        desc: '',
        query: 'dog22',
        score_range: range(22, 23),
        comment: 'Can you give me a snack because I feel bad?'},
       {type: 'dog',
        desc: '',
        query: 'dog23',
        score_range: range(23, 24),
        comment: "I'm so excited today!"},
       {type: 'dog',
        desc: '',
        query: 'dog24',
        score_range: range(24, 25),
        comment: "I think I had a scary dreamI'm so scared."},
       {type: 'dog',
        desc: '',
        query: 'dog25',
        score_range: range(25, 26),
        comment: 'I feel so happy now!'},
       {type: 'dog',
        desc: '',
        query: 'dog26',
        score_range: range(26, 27),
        comment: "I'm curious! I'm curious!"},
       {type: 'dog',
        desc: '',
        query: 'dog27',
        score_range: range(27, 28),
        comment: 'I love it!'},
       {type: 'dog',
        desc: '',
        query: 'dog28',
        score_range: range(28, 29),
        comment: 'Please pay attention to me!!!!!!!!!!!!!!!'},
       {type: 'dog',
        desc: '',
        query: 'dog29',
        score_range: range(29, 30),
        comment: "I've been bored all day!"},
       {type: 'dog',
        desc: '',
        query: 'dog30',
        score_range: range(30, 31),
        comment: 'Can you give me a warm heart?'},
       {type: 'dog',
        desc: '',
        query: 'dog31',
        score_range: range(31, 32),
        comment: "I'm cute, right? I'm lovely, right?"},
       {type: 'dog',
        desc: '',
        query: 'dog32',
        score_range: range(32, 33),
        comment: 'Umm….'},
       {type: 'dog',
        desc: '',
        query: 'dog33',
        score_range: range(33, 34),
        comment: "What's wrong with you today?"},
       {type: 'dog',
        desc: '',
        query: 'dog34',
        score_range: range(34, 35),
        comment: 'Leave me alone, please.'},
       {type: 'dog',
        desc: '',
        query: 'dog35',
        score_range: range(35, 36),
        comment: 'Why am I so annoyed?'},
       {type: 'dog',
        desc: '',
        query: 'dog36',
        score_range: range(36, 37),
        comment: 'Stop it.'},
       {type: 'dog',
        desc: '',
        query: 'dog37',
        score_range: range(37, 38),
        comment: "I'm so angry."},
       {type: 'dog',
        desc: '',
        query: 'dog38',
        score_range: range(38, 39),
        comment: 'Why do I feel so down?'},
       {type: 'dog',
        desc: '',
        query: 'dog39',
        score_range: range(39, 40),
        comment: "I'm so bored."},
       {type: 'dog',
        desc: '',
        query: 'dog40',
        score_range: range(40, 41),
        comment: "Don't touch me."},
       {type: 'dog',
        desc: '',
        query: 'dog41',
        score_range: range(41, 42),
        comment: 'If you want to order anything, bring me a snack, master!'},
       {type: 'dog',
        desc: '',
        query: 'dog42',
        score_range: range(42, 43),
        comment: "You'd better leave me alone.."},
       {type: 'dog',
        desc: '',
        query: 'dog43',
        score_range: range(43, 44),
        comment: "It's pathetic."},
       {type: 'dog',
        desc: '',
        query: 'dog44',
        score_range: range(44, 45),
        comment: "Don't mess with meI'll scold you."},
       {type: 'dog',
        desc: '',
        query: 'dog45',
        score_range: range(45, 46),
        comment: "No, it's not."},
       {type: 'dog',
        desc: '',
        query: 'dog46',
        score_range: range(46, 47),
        comment: 'You want to try?'},
       {type: 'dog',
        desc: '',
        query: 'dog47',
        score_range: range(47, 48),
        comment: "You're bothering me, man."},
       {type: 'dog',
        desc: '',
        query: 'dog48',
        score_range: range(48, 49),
        comment: 'Stop it! Stop it!'},
       {type: 'dog',
        desc: '',
        query: 'dog49',
        score_range: range(49, 50),
        comment: 'Why are you making more noise next to me?'},
       {type: 'dog',
        desc: '',
        query: 'dog50',
        score_range: range(50, 51),
        comment: 'Ugh(Shaking his head)'},
       {type: 'dog',
        desc: '',
        query: 'dog51',
        score_range: range(51, 52),
        comment: "What's wrong with him?"},
       {type: 'dog',
        desc: '',
        query: 'dog52',
        score_range: range(52, 53),
        comment: "Why don't you just leave me alone?"},
       {type: 'dog',
        desc: '',
        query: 'dog53',
        score_range: range(53, 54),
        comment: 'Oh, this is so annoying!'},
       {type: 'dog',
        desc: '',
        query: 'dog54',
        score_range: range(54, 55),
        comment: 'Hey, stop there! Stay away from me.'},
       {type: 'dog',
        desc: '',
        query: 'dog55',
        score_range: range(55, 56),
        comment: 'Do you think you did you know my mind.'},
       {type: 'dog',
        desc: '',
        query: 'dog56',
        score_range: range(56, 57),
        comment: "It's loud."},
       {type: 'dog',
        desc: '',
        query: 'dog57',
        score_range: range(57, 58),
        comment: "You told me don't like it,"},
       {type: 'dog',
        desc: '',
        query: 'dog58',
        score_range: range(58, 59),
        comment: "Don't call mePlease don't call me."},
       {type: 'dog',
        desc: '',
        query: 'dog59',
        score_range: range(59, 60),
        comment: 'Is that enough?'},
       {type: 'dog',
        desc: '',
        query: 'dog60',
        score_range: range(60, 61),
        comment: 'I want to sleep!'},
       {type: 'dog',
        desc: '',
        query: 'dog61',
        score_range: range(61, 62),
        comment: 'Leave me alone!'},
       {type: 'dog',
        desc: '',
        query: 'dog62',
        score_range: range(62, 63),
        comment: 'Get away from me!'},
       {type: 'dog',
        desc: '',
        query: 'dog63',
        score_range: range(63, 64),
        comment: 'I want to meet my friends!'},
       {type: 'dog',
        desc: '',
        query: 'dog64',
        score_range: range(64, 65),
        comment: "Don't get away from me!"},
       {type: 'dog',
        desc: '',
        query: 'dog65',
        score_range: range(65, 66),
        comment: "Let's play together!"},
       {type: 'dog',
        desc: '',
        query: 'dog66',
        score_range: range(66, 67),
        comment: 'I want to go out and play!'},
       {type: 'dog',
        desc: '',
        query: 'dog67',
        score_range: range(67, 68),
        comment: 'Open the door!'},
       {type: 'dog',
        desc: '',
        query: 'dog68',
        score_range: range(68, 69),
        comment: 'Stay with me every day!'},
       {type: 'dog',
        desc: '',
        query: 'dog69',
        score_range: range(69, 70),
        comment: "You can't go anywhere!"},
       {type: 'dog',
        desc: '',
        query: 'dog70',
        score_range: range(70, 71),
        comment: "Don't leave me alone."},
       {type: 'dog',
        desc: '',
        query: 'dog71',
        score_range: range(71, 72),
        comment: "If I'm home alone, wait and see what happens!"},
       {type: 'dog',
        desc: '',
        query: 'dog72',
        score_range: range(72, 73),
        comment: "Don't mess with meI'm gonna get mad."},
       {type: 'dog',
        desc: '',
        query: 'dog73',
        score_range: range(73, 74),
        comment: 'Bring toys and play with me.'},
       {type: 'dog',
        desc: '',
        query: 'dog74',
        score_range: range(74, 75),
        comment: 'Look me in the eye.'},
       {type: 'dog',
        desc: '',
        query: 'dog75',
        score_range: range(75, 76),
        comment: 'I need you to pet me a pat.'},
       {type: 'dog',
        desc: '',
        query: 'dog76',
        score_range: range(76, 77),
        comment: 'Please change the potty pad to a new one.'},
       {type: 'dog',
        desc: '',
        query: 'dog77',
        score_range: range(77, 78),
        comment: 'I want to runLet me run!'},
       {type: 'dog',
        desc: '',
        query: 'dog78',
        score_range: range(78, 79),
        comment: 'Can you make me a friend?'},
       {type: 'dog',
        desc: '',
        query: 'dog79',
        score_range: range(79, 80),
        comment: "I'm a person!! We're on the same page."},
       {type: 'dog',
        desc: '',
        query: 'dog80',
        score_range: range(80, 81),
        comment: 'Change my name to something else.'},
       {type: 'dog',
        desc: '',
        query: 'dog81',
        score_range: range(81, 82),
        comment: 'I want a bowl of cool water.'},
       {type: 'dog',
        desc: '',
        query: 'dog82',
        score_range: range(82, 83),
        comment: "I'm gonna step on the place where I peed, so please change my potty padBut if I step on it, you'll scold meCome to think of it, it's annoying."},
       {type: 'dog',
        desc: '',
        query: 'dog83',
        score_range: range(83, 84),
        comment: 'I ate shitCan I lick you?'},
       {type: 'dog',
        desc: '',
        query: 'dog84',
        score_range: range(84, 85),
        comment: 'There\'s a soul in my shit "Puppy shit." Be careful not to make eye contact when you clean up.'},
       {type: 'dog',
        desc: '',
        query: 'dog85',
        score_range: range(85, 86),
        comment: "Why can't I digest?"},
       {type: 'dog',
        desc: '',
        query: 'dog86',
        score_range: range(86, 87),
        comment: "I need to pee, but I'll put up with it."},
       {type: 'dog',
        desc: '',
        query: 'dog87',
        score_range: range(87, 88),
        comment: "I need to poop, but I'll put up with it."},
       {type: 'dog',
        desc: '',
        query: 'dog88',
        score_range: range(88, 89),
        comment: 'Why does the poop always smell so good? I want to eat it.'},
       {type: 'dog',
        desc: '',
        query: 'dog89',
        score_range: range(89, 90),
        comment: "I'm good at defecatingPlease compliment me."},
       {type: 'dog',
        desc: '',
        query: 'dog90',
        score_range: range(90, 91),
        comment: "The reason I didn't pee on the potty pad..It means I'm angry."},
       {type: 'dog',
        desc: '',
        query: 'dog91',
        score_range: range(91, 92),
        comment: "Now that we've eaten, shall we get ready to defecate?"},
       {type: 'dog',
        desc: '',
        query: 'dog92',
        score_range: range(92, 93),
        comment: "I don't want you to look at me when I poopI'm serious!"},
       {type: 'dog',
        desc: '',
        query: 'dog93',
        score_range: range(93, 94),
        comment: "Don't make me angryI'm gonna hide my shit somewhere in the house."},
       {type: 'dog',
        desc: '',
        query: 'dog94',
        score_range: range(94, 95),
        comment: "I want to go for a walk and excrete it in the sunOf course, I'm not doing this because I want to go for a walk."},
       {type: 'dog',
        desc: '',
        query: 'dog95',
        score_range: range(95, 96),
        comment: 'Why does my potty pad smell like another dog?'},
       {type: 'dog',
        desc: '',
        query: 'dog96',
        score_range: range(96, 97),
        comment: "When do you think my fart will come out? When you have a stomachache or when you poop? No, that's when you're about to go to sleep!"},
       {type: 'dog',
        desc: '',
        query: 'dog97',
        score_range: range(97, 98),
        comment: "I don't think the new meal suits me wellIt's a little hard to poop."},
       {type: 'dog',
        desc: '',
        query: 'dog98',
        score_range: range(98, 99),
        comment: 'Express the smell of my poop with a facial expression.'},
       {type: 'dog',
        desc: '',
        query: 'dog99',
        score_range: range(99, 100),
        comment: "I'm going to pee on the shoe rack and make the owner happy today~"},
       {type: 'dog',
        desc: '',
        query: 'dog100',
        score_range: range(100, 101),
        comment: 'From now on, I will defecate exactly in the middle of the potty padSnacks, please.'},
       {type: 'dog',
        desc: '',
        query: 'dog101',
        score_range: range(101, 102),
        comment: "Give me foodI'll poop."},
       {type: 'dog',
        desc: '',
        query: 'dog102',
        score_range: range(102, 103),
        comment: "What's wrong with your meal?"},
       {type: 'dog',
        desc: '',
        query: 'dog103',
        score_range: range(103, 104),
        comment: "There's no meat?"},
       {type: 'dog',
        desc: '',
        query: 'dog104',
        score_range: range(104, 105),
        comment: 'What are you doing? Give me the food.'},
       {type: 'dog',
        desc: '',
        query: 'dog105',
        score_range: range(105, 106),
        comment: "Did you give it to me to eat? It's not good!"},
       {type: 'dog',
        desc: '',
        query: 'dog106',
        score_range: range(106, 107),
        comment: "This feed is the best! It's so delicious><"},
       {type: 'dog',
        desc: '',
        query: 'dog107',
        score_range: range(107, 108),
        comment: 'I want some cool water.'},
       {type: 'dog',
        desc: '',
        query: 'dog108',
        score_range: range(108, 109),
        comment: "They say you shouldn't touch the dog when it's eating_+"},
       {type: 'dog',
        desc: '',
        query: 'dog109',
        score_range: range(109, 110),
        comment: 'What are you eating? Give it to me, too.'},
       {type: 'dog',
        desc: '',
        query: 'dog110',
        score_range: range(110, 111),
        comment: "I don't like vegetables!"},
       {type: 'dog',
        desc: '',
        query: 'dog111',
        score_range: range(111, 112),
        comment: "What's the menu for today?"},
       {type: 'dog',
        desc: '',
        query: 'dog112',
        score_range: range(112, 113),
        comment: "Don't you have any side dishes?"},
       {type: 'dog',
        desc: '',
        query: 'dog113',
        score_range: range(113, 114),
        comment: 'I want a snack.'},
       {type: 'dog',
        desc: '',
        query: 'dog114',
        score_range: range(114, 115),
        comment: 'Are you the only one eating delicious food? Give me something delicious, too!'},
       {type: 'dog',
        desc: '',
        query: 'dog115',
        score_range: range(115, 116),
        comment: 'Just give me meat! Meat!'},
       {type: 'dog',
        desc: '',
        query: 'dog116',
        score_range: range(116, 117),
        comment: "I'm full."},
       {type: 'dog',
        desc: '',
        query: 'dog117',
        score_range: range(117, 118),
        comment: 'I want something sweet.'},
       {type: 'dog',
        desc: '',
        query: 'dog118',
        score_range: range(118, 119),
        comment: "I'm hungry!"},
       {type: 'dog',
        desc: '',
        query: 'dog119',
        score_range: range(119, 120),
        comment: 'What’s this? That is a drop in the bucket.'},
       {type: 'dog',
        desc: '',
        query: 'dog120',
        score_range: range(120, 121),
        comment: "Change the feed~ I'm sick of it."},
       {type: 'dog',
        desc: '',
        query: 'dog121',
        score_range: range(121, 122),
        comment: "I won't spit it out! I don't want to spit it out!"},
       {type: 'dog',
        desc: '',
        query: 'dog122',
        score_range: range(122, 123),
        comment: "I have no appetiteI don't want it."},
       {type: 'dog',
        desc: '',
        query: 'dog123',
        score_range: range(123, 124),
        comment: "When you're tired and frustrated? Let's go for a walk in the park with me!"},
       {type: 'dog',
        desc: '',
        query: 'dog124',
        score_range: range(124, 125),
        comment: "If you're sad, lean on me!"},
       {type: 'dog',
        desc: '',
        query: 'dog125',
        score_range: range(125, 126),
        comment: 'You did a great job today.'},
       {type: 'dog',
        desc: '',
        query: 'dog126',
        score_range: range(126, 127),
        comment: "Are you okay? I'll give you my favorite toyCheer up."},
       {type: 'dog',
        desc: '',
        query: 'dog127',
        score_range: range(127, 128),
        comment: "What's going on? Bring her back! I'll teach her a lesson!"},
       {type: 'dog',
        desc: '',
        query: 'dog128',
        score_range: range(128, 129),
        comment: "Someone told me that time is medicine when you're having a hard time."},
       {type: 'dog',
        desc: '',
        query: 'dog129',
        score_range: range(129, 130),
        comment: "Look at my face! Isn't it funny? Isn't it cute?"},
       {type: 'dog',
        desc: '',
        query: 'dog130',
        score_range: range(130, 131),
        comment: "If you're depressed, why don't you go out for a race with me?!"},
       {type: 'dog',
        desc: '',
        query: 'dog131',
        score_range: range(131, 132),
        comment: "I'm with you! Way to go!"},
       {type: 'dog',
        desc: '',
        query: 'dog132',
        score_range: range(132, 133),
        comment: 'It’s okayThere will be more good things ahead.'},
       {type: 'dog',
        desc: '',
        query: 'dog133',
        score_range: range(133, 134),
        comment: "It's okay to cry when you want to!"},
       {type: 'dog',
        desc: '',
        query: 'dog134',
        score_range: range(134, 135),
        comment: "I hope I'm comforting you."},
       {type: 'dog',
        desc: '',
        query: 'dog135',
        score_range: range(135, 136),
        comment: "Don't frown~ I'm here!"},
       {type: 'dog',
        desc: '',
        query: 'dog136',
        score_range: range(136, 137),
        comment: "Eat something delicious and you'll feel better!"},
       {type: 'dog',
        desc: '',
        query: 'dog137',
        score_range: range(137, 138),
        comment: "What's the matter? I'll listen to everything!"},
       {type: 'dog',
        desc: '',
        query: 'dog138',
        score_range: range(138, 139),
        comment: "Don't worry, you're doing well enough!"},
       {type: 'dog',
        desc: '',
        query: 'dog139',
        score_range: range(139, 140),
        comment: "I'm so happy to be with you."},
       {type: 'dog',
        desc: '',
        query: 'dog140',
        score_range: range(140, 141),
        comment: "You're the best for me! You're the most important thing to me!"},
       {type: 'dog',
        desc: '',
        query: 'dog141',
        score_range: range(141, 142),
        comment: "I'll cheer for youCheer up tomorrow!"},
       {type: 'dog',
        desc: '',
        query: 'dog142',
        score_range: range(142, 143),
        comment: "Cheer up, you're already a wonderful person."},
       {type: 'dog',
        desc: '',
        query: 'dog143',
        score_range: range(143, 144),
        comment: 'Hi! Hi!'},
       {type: 'dog',
        desc: '',
        query: 'dog144',
        score_range: range(144, 145),
        comment: 'Why are you here now? Give me a hug!'},
       {type: 'dog',
        desc: '',
        query: 'dog145',
        score_range: range(145, 146),
        comment: 'Hurry up and come back!'},
       {type: 'dog',
        desc: '',
        query: 'dog146',
        score_range: range(146, 147),
        comment: "Are you here? Let's play!"},
       {type: 'dog',
        desc: '',
        query: 'dog147',
        score_range: range(147, 148),
        comment: 'What time is it now?'},
       {type: 'dog',
        desc: '',
        query: 'dog148',
        score_range: range(148, 149),
        comment: "Don't leave me."},
       {type: 'dog',
        desc: '',
        query: 'dog149',
        score_range: range(149, 150),
        comment: 'Have a safe trip!'},
       {type: 'dog',
        desc: '',
        query: 'dog150',
        score_range: range(150, 151),
        comment: 'Take care.'},
       {type: 'dog',
        desc: '',
        query: 'dog151',
        score_range: range(151, 152),
        comment: "Yay! It's here! I'm excited! Play with me!"},
       {type: 'dog',
        desc: '',
        query: 'dog152',
        score_range: range(152, 153),
        comment: 'Hello!'},
       {type: 'dog',
        desc: '',
        query: 'dog153',
        score_range: range(153, 154),
        comment: "Who's petting me?"},
       {type: 'dog',
        desc: '',
        query: 'dog154',
        score_range: range(154, 155),
        comment: 'Good to see you!'},
       {type: 'dog',
        desc: '',
        query: 'dog155',
        score_range: range(155, 156),
        comment: 'Delicious snacks on the way here!'},
       {type: 'dog',
        desc: '',
        query: 'dog156',
        score_range: range(156, 157),
        comment: 'Did you sleep well?'},
       {type: 'dog',
        desc: '',
        query: 'dog157',
        score_range: range(157, 158),
        comment: '....(Ignore)'},
       {type: 'dog',
        desc: '',
        query: 'dog158',
        score_range: range(158, 159),
        comment: '….(Shaking My Head)'},
       {type: 'dog',
        desc: '',
        query: 'dog159',
        score_range: range(159, 160),
        comment: 'Get up!'},
       {type: 'dog',
        desc: '',
        query: 'dog160',
        score_range: range(160, 161),
        comment: 'Hello, my friend!'},
       {type: 'dog',
        desc: '',
        query: 'dog161',
        score_range: range(161, 162),
        comment: 'Welcome!! Giving me a snack is a must!'},
       {type: 'dog',
        desc: '',
        query: 'dog162',
        score_range: range(162, 163),
        comment: "What's that in your hand? Did you buy it for me?"},
       {type: 'dog',
        desc: '',
        query: 'dog163',
        score_range: range(163, 164),
        comment: 'Did you have a good time? Thank you for your hard work today!'},
       {type: 'dog',
        desc: '',
        query: 'dog164',
        score_range: range(164, 165),
        comment: "I don't want to wash up! Let me go!"},
       {type: 'dog',
        desc: '',
        query: 'dog165',
        score_range: range(165, 166),
        comment: 'Washing up is fun today!!'},
       {type: 'dog',
        desc: '',
        query: 'dog166',
        score_range: range(166, 167),
        comment: "What's this smell?"},
       {type: 'dog',
        desc: '',
        query: 'dog167',
        score_range: range(167, 168),
        comment: "I'm scared to go in the water!"},
       {type: 'dog',
        desc: '',
        query: 'dog168',
        score_range: range(168, 169),
        comment: "I can't wait to wash up and play!"},
       {type: 'dog',
        desc: '',
        query: 'dog169',
        score_range: range(169, 170),
        comment: "I'm so nervous right now!"},
       {type: 'dog',
        desc: '',
        query: 'dog170',
        score_range: range(170, 171),
        comment: "It's too rough! Wash it gently."},
       {type: 'dog',
        desc: '',
        query: 'dog171',
        score_range: range(171, 172),
        comment: "I'm so happy right now!"},
       {type: 'dog',
        desc: '',
        query: 'dog172',
        score_range: range(172, 173),
        comment: "I'm too tired to wash up now!"},
       {type: 'dog',
        desc: '',
        query: 'dog173',
        score_range: range(173, 174),
        comment: 'The water smells weird.'},
       {type: 'dog',
        desc: '',
        query: 'dog174',
        score_range: range(174, 175),
        comment: "It's so cold because I'm wet."},
       {type: 'dog',
        desc: '',
        query: 'dog175',
        score_range: range(175, 176),
        comment: 'Cut my toenails when I wash up.'},
       {type: 'dog',
        desc: '',
        query: 'dog176',
        score_range: range(176, 177),
        comment: "I don't feel like washing up now."},
       {type: 'dog',
        desc: '',
        query: 'dog177',
        score_range: range(177, 178),
        comment: 'Will you give me a snack after I wash up?'},
       {type: 'dog',
        desc: '',
        query: 'dog178',
        score_range: range(178, 179),
        comment: "Let's play with the water!"},
       {type: 'dog',
        desc: '',
        query: 'dog179',
        score_range: range(179, 180),
        comment: 'I feel so cool after taking a shower!'},
       {type: 'dog',
        desc: '',
        query: 'dog180',
        score_range: range(180, 181),
        comment: 'Hurry up and dry my body warmly~'},
       {type: 'dog',
        desc: '',
        query: 'dog181',
        score_range: range(181, 182),
        comment: "I'm so thirsty right now..."},
       {type: 'dog',
        desc: '',
        query: 'dog182',
        score_range: range(182, 183),
        comment: "I'm sleepyzzzzzz"}]
    },
    // facialExpressionAnalyzer
    {
        info : {
            mainTitle:"표정 분석기",
            subTitle:"강아지, 고양이, 사람 누구나 가능한 표정 분석기",
            mainUrl:"facialExpressionAnalyzer",
            scoreType:"facialExpression",
            mainImage:"https://images.ktestone.com/introImages/facialExpressionAnalyzer-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/facialExpressionAnalyzer-thumb.png",
            lang:"Kor"
        },
        questions:[
            {
                question: '데이트 전 날 나의 모습은?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '나가기 직전 마음에 드는 옷을 입는다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '자기 전 머릿속으로 나의 스타일링을 생각하고 잔다.'
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '전 날 머리부터 발끝까지 스타일링과 옷을 미리 준비한다.'
                    },
                ],
            },
            {
                question: "갑자기 자취방에 놀러 온다는 애인!\n그때의 나는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "아아... 왜 갑자기 오는 거야?! 보이는 곳만 치워 둔다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "모아둔 쓰레기를 버리고 바로 청소를 시작한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 미리미리 해 두었기 때문에 바로 주소를 보낸다."
                    },
                ]
            },
            {
                question: "좋아하는 이성이 생겼을 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "상대의 SNS을 탐방하며, 미래의 우리 모습을 상상해본다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "좋아하는 이성의 친구에게 도움을 요청한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "먼저 연락할 거리를 만들며 적극적으로 대시한다."
                    },
                ]
            },
            {
                question: "카페 안에 이상형인 사람과 계속 눈이 마주친다.\n 눈웃음까지 보내는데...?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "지금 말하면 좋은 말이 안 나올 것 같아. 좀 이따 연락할게."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "아!!!!!!!짜증나!!!!!진짜!!!!!! 도대체 왜 그러는 거야?!?!"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "이런 점에서 나는 화가 난 거야. 그런 부분은 고쳐줬으면 좋겠어."
                    },
                ]
            },
            {
                question: "쉬고 있는데 갑자기 걸려온 남사친/여사친의 전화, \n친구들이 같이 놀고 싶다며 나올 수 있냐고 물어보는데...?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: '귀찮은데… 아쉽긴 하지만 “시간이 너무 늦었어… 나 집에서 쉴래!”'
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "일단 끊고 수십 번 고민 끝에 나가기로 한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '오케이~ 인연 한 번 만들어보자~ “갈게~~~~”'
                    },
                ]
            },
            {
                question: "다가온 기념일! 나는 어떤 선물을 준비할까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "정성 어린 편지와 기억에 남을 만한 선물을 준비한다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "커플로 착용할 수 있는 아이템을 선물한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 사고 싶다거나 필요한 물건을 기억해 두었다가 서프라이즈로 선물한다."
                    },
                ]
            },
            {
                question: "내가 하고 싶은 연애 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "다이나믹한 화려한 연애 (단, 너무 화려해서 바람 피울 가능성 50%)"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "나만 바라보는 연애 (단, 너무 좋아해서 집착 대마왕)"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구같이 편안한 연애 (단, 가끔 친구인지 애인인지 헷갈림)"
                    },
                ]
            },
            {
                question: "애인과 대화할 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 5,
                        content: "장난치고 티키타카가 잘 되는 대화가 좋다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "서로의 생각을 공유하는 대화가 너무 좋다."
                    },
                ]
            },
            {
                question: "친구가 나에게 고민상당을 한다. 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "고민에 대한 구체적인 해결책을 제시한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "고민에 대해 빠져들어 감정적으로 같이 공감해준다."
                    },
                ]
            },
            {
                question: "기다려왔던 짝사랑하던 그/그녀와의 데이트 날..\n갑자기 급한 일이 생겼다며 다음에 만나자고 한다.\n과연 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "어쩔 수 없지… 알겠어 다음에 보자!"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "알겠어…근데 심각한 일이야?"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "아 진짜? 그럼 날짜 다시 조정하자! 언제가 괜찮아?"
                    },
                ]
            },
        ],
        results:[{type: 'human',
        desc: '',
        query: 'human1',
        score_range: range(1, 2),
        comment: '나 좀 안아줄 수있어?'},
       {type: 'human',
        desc: '',
        query: 'human2',
        score_range: range(2, 3),
        comment: '내눈 앞에서 혹시 사라져줄 수 있어 ?'},
       {type: 'human',
        desc: '',
        query: 'human3',
        score_range: range(3, 4),
        comment: '주모 여기 물 한잔만 주쇼'},
       {type: 'human',
        desc: '',
        query: 'human4',
        score_range: range(4, 5),
        comment: '나랑 오늘 같이 있을래 ?'},
       {type: 'human',
        desc: '',
        query: 'human5',
        score_range: range(5, 6),
        comment: '내눈 좀 똑바로 봐!'},
       {type: 'human',
        desc: '',
        query: 'human6',
        score_range: range(6, 7),
        comment: '쉬고 싶다~'},
       {type: 'human',
        desc: '',
        query: 'human7',
        score_range: range(7, 8),
        comment: '내일 일 나가기 싫어'},
       {type: 'human',
        desc: '',
        query: 'human8',
        score_range: range(8, 9),
        comment: '솔로인지 언 년 째 나는 누구인가?'},
       {type: 'human',
        desc: '',
        query: 'human9',
        score_range: range(9, 10),
        comment: '나는 누구인가 여긴 어디인가'},
       {type: 'human',
        desc: '',
        query: 'human10',
        score_range: range(10, 11),
        comment: '친구 좀 만들어줘...'},
       {type: 'human',
        desc: '',
        query: 'human11',
        score_range: range(11, 12),
        comment: '인생은 역시 혼자야'},
       {type: 'human',
        desc: '',
        query: 'human12',
        score_range: range(12, 13),
        comment: '_ 고독 하구만'},
       {type: 'human',
        desc: '',
        query: 'human13',
        score_range: range(13, 14),
        comment: '로또가 당첨 되고 싶은 날씨야'},
       {type: 'human',
        desc: '',
        query: 'human14',
        score_range: range(14, 15),
        comment: '신이시여 왜 나를 이 지구에 태어난게 한것이오'},
       {type: 'human',
        desc: '',
        query: 'human15',
        score_range: range(15, 16),
        comment: '내일 퇴사 예정 입니다.'},
       {type: 'human',
        desc: '',
        query: 'human16',
        score_range: range(16, 17),
        comment: '하루 종일 누워서 핸드폰 하고 싶다'},
       {type: 'human',
        desc: '',
        query: 'human17',
        score_range: range(17, 18),
        comment: '역시 오늘 저녁은 떡볶이다'},
       {type: 'human',
        desc: '',
        query: 'human18',
        score_range: range(18, 19),
        comment: '하와이로 여행 가고싶어'},
       {type: 'human',
        desc: '',
        query: 'human19',
        score_range: range(19, 20),
        comment: '내가 넣은 주식 상한가 가즈아!'},
       {type: 'human',
        desc: '',
        query: 'human20',
        score_range: range(20, 21),
        comment: '돈 많은 백수가 되고 싶어'},
       {type: 'human',
        desc: '',
        query: 'human21',
        score_range: range(21, 22),
        comment: '음악은 나에게 허락 된 유일한 마약이야'},
       {type: 'human',
        desc: '',
        query: 'human22',
        score_range: range(22, 23),
        comment: '나는 부자가 될 상이야'},
       {type: 'human',
        desc: '',
        query: 'human23',
        score_range: range(23, 24),
        comment: '제주도로 떠나고 싶어'},
       {type: 'human',
        desc: '',
        query: 'human24',
        score_range: range(24, 25),
        comment: '다이어트 그만하고 그냥 막 왁창 먹고싶어!!!!!'},
       {type: 'human',
        desc: '',
        query: 'human25',
        score_range: range(25, 26),
        comment: '나 쳐다보지마'},
       {type: 'human',
        desc: '',
        query: 'human26',
        score_range: range(26, 27),
        comment: '돈좀 빌려줄 수 있어 ?'},
       {type: 'human',
        desc: '',
        query: 'human27',
        score_range: range(27, 28),
        comment: '아..년전에 비트코인 살껄...삿어야했어'},
       {type: 'human',
        desc: '',
        query: 'human28',
        score_range: range(28, 29),
        comment: '로또 당첨 되면 나 반 줄 수 있어?'},
       {type: 'human',
        desc: '',
        query: 'human29',
        score_range: range(29, 30),
        comment: '나한테 말 시키지마'},
       {type: 'human',
        desc: '',
        query: 'human30',
        score_range: range(30, 31),
        comment: '내 매력에 넌 곧 빠져들꺼야 ^>^'},
       {type: 'human',
        desc: '',
        query: 'human31',
        score_range: range(31, 32),
        comment: '어허~ 이렇게 집구석에만 있을꺼야?'},
       {type: 'human',
        desc: '',
        query: 'human32',
        score_range: range(32, 33),
        comment: '영화 보러가자~ 가위바위보 해서 영화 티켓구매 어때?'},
       {type: 'human',
        desc: '',
        query: 'human33',
        score_range: range(33, 34),
        comment: '집밥은 지겨워~ 맛있는거 먹으러 나갈래?'},
       {type: 'human',
        desc: '',
        query: 'human34',
        score_range: range(34, 35),
        comment: '조깅하러가자! 너 운동 좀 해야할꺼같아'},
       {type: 'human',
        desc: '',
        query: 'human35',
        score_range: range(35, 36),
        comment: '넌 조만간 공처럼 굴러 다닐것같은데? 자! 운동하러가야지'},
       {type: 'human',
        desc: '',
        query: 'human36',
        score_range: range(36, 37),
        comment: '너의 목을 보아하니, 거북이가 말을 걸겠구나, 잠깐 산책하러가자'},
       {type: 'human',
        desc: '',
        query: 'human37',
        score_range: range(37, 38),
        comment: '저기 뭐 맛있는거 생겼데~ 저번에 내가 샀으니까 오늘 너가 좀 사'},
       {type: 'human',
        desc: '',
        query: 'human38',
        score_range: range(38, 39),
        comment: '드라이브 하러 가자! 지금!'},
       {type: 'human',
        desc: '',
        query: 'human39',
        score_range: range(39, 40),
        comment: '우리 여행갈래? 갑자기 계획없이 여행 가보고싶어'},
       {type: 'human',
        desc: '',
        query: 'human40',
        score_range: range(40, 41),
        comment: '오늘 집에만 있었더니 지겨워~ 잠깐 나갔다올래'},
       {type: 'human',
        desc: '',
        query: 'human41',
        score_range: range(41, 42),
        comment: '지금 몇시지? 아 맞다 오늘 너가 나 맛있는거 사주는 날이다!'},
       {type: 'human',
        desc: '',
        query: 'human42',
        score_range: range(42, 43),
        comment: '오늘 무슨요일이지? 아 맞다 오늘 우리 볼링치기로 했었어'},
       {type: 'human',
        desc: '',
        query: 'human43',
        score_range: range(43, 44),
        comment: '오늘 몇일이지? 아 맞다 오늘 우리 카페 가서 빙고 하기로 했어'},
       {type: 'human',
        desc: '',
        query: 'human44',
        score_range: range(44, 45),
        comment: '오늘 우리 약속 있었는데? 맞아! 너가 고기 사준다고 했었어!'},
       {type: 'human',
        desc: '',
        query: 'human45',
        score_range: range(45, 46),
        comment: '지금 나와~! 앞에서 기다리고 있을께 너 올때까지 기다릴꺼야'},
       {type: 'human',
        desc: '',
        query: 'human46',
        score_range: range(46, 47),
        comment: '오늘 나 몸이 안좋아 , 아프니까 먹을것좀 보내줘'},
       {type: 'human',
        desc: '',
        query: 'human47',
        score_range: range(47, 48),
        comment: '나 다리 아파, 업어줘'},
       {type: 'human',
        desc: '',
        query: 'human48',
        score_range: range(48, 49),
        comment: '나 애인이랑 오늘 약속있어 미안'},
       {type: 'human',
        desc: '',
        query: 'human49',
        score_range: range(49, 50),
        comment: '너 어제 누구랑 있었어? 나 어제 너 다른사람이랑 있는거 봤어'},
       {type: 'human',
        desc: '',
        query: 'human50',
        score_range: range(50, 51),
        comment: '그 사람 누구야? 어제 손잡고 가던데'},
       {type: 'human',
        desc: '',
        query: 'human51',
        score_range: range(51, 52),
        comment: '나 어젯밤에 그 사람이랑 산책다녀왔어 너무 ..좋았어'},
       {type: 'human',
        desc: '',
        query: 'human52',
        score_range: range(52, 53),
        comment: '나 어제 또 그 사람이랑 시간동안 산책하고 왔어'},
       {type: 'human',
        desc: '',
        query: 'human53',
        score_range: range(53, 54),
        comment: '이제 그만하자더이상은 ..무리야'},
       {type: 'human',
        desc: '',
        query: 'human54',
        score_range: range(54, 55),
        comment: '이 멘트 쓰는 것도 지겨워, 할말도 없어, 그만하고싶어 (쉿! 사장이 몰랐으면해)'},
       {type: 'human',
        desc: '',
        query: 'human55',
        score_range: range(55, 56),
        comment: '어제 산책갔다가 가방을 하나 발견했는데,, 억이 있었어..'},
       {type: 'human',
        desc: '',
        query: 'human56',
        score_range: range(56, 57),
        comment: '어제 나 경찰서 다녀왔어휴'},
       {type: 'human',
        desc: '',
        query: 'human57',
        score_range: range(57, 58),
        comment: '어제 나.살인사건을 목격했어!'},
       {type: 'human',
        desc: '',
        query: 'human58',
        score_range: range(58, 59),
        comment: '오늘 뭐해? 나랑...데이트 할래? 풋'},
       {type: 'human',
        desc: '',
        query: 'human59',
        score_range: range(59, 60),
        comment: '미안 .나 사랑하는 사람이 생겼어.오늘 그사람 만나'},
       {type: 'human',
        desc: '',
        query: 'human60',
        score_range: range(60, 61),
        comment: '오늘은 내가 특별히 쏜다신나게 놀 준비 해.'},
       {type: 'human',
        desc: '',
        query: 'human61',
        score_range: range(61, 62),
        comment: '오~ 내 기분 마치 신라~~~~'},
       {type: 'human',
        desc: '',
        query: 'human62',
        score_range: range(62, 63),
        comment: '짜증나니까 제발 저리 가라.'},
       {type: 'human',
        desc: '',
        query: 'human63',
        score_range: range(63, 64),
        comment: '외롭구나.호그와트학년'},
       {type: 'human',
        desc: '',
        query: 'human64',
        score_range: range(64, 65),
        comment: '린생이란…고단하다 고단해'},
       {type: 'human',
        desc: '',
        query: 'human65',
        score_range: range(65, 66),
        comment: '기분 안좋으니까 한잔 할래?'},
       {type: 'human',
        desc: '',
        query: 'human66',
        score_range: range(66, 67),
        comment: '아니 왤케 짜증나게 해?'},
       {type: 'human',
        desc: '',
        query: 'human67',
        score_range: range(67, 68),
        comment: '우울함이 하늘을 찌르는 구나'},
       {type: 'human',
        desc: '',
        query: 'human68',
        score_range: range(68, 69),
        comment: '사랑한다이자슥아'},
       {type: 'human',
        desc: '',
        query: 'human69',
        score_range: range(69, 70),
        comment: '흣짜! 진행시켜~'},
       {type: 'human',
        desc: '',
        query: 'human70',
        score_range: range(70, 71),
        comment: '나 지금 ~~~ 오늘 밤은~~~ 어둠이 무서워용~'},
       {type: 'human',
        desc: '',
        query: 'human71',
        score_range: range(71, 72),
        comment: '어우…살짝 토할 것 같은데?'},
       {type: 'human',
        desc: '',
        query: 'human72',
        score_range: range(72, 73),
        comment: '어휴 개노잼 너무 노잼'},
       {type: 'human',
        desc: '',
        query: 'human73',
        score_range: range(73, 74),
        comment: '기분이 우울하다! 뭐 재밌는 거 없니?'},
       {type: 'human',
        desc: '',
        query: 'human74',
        score_range: range(74, 75),
        comment: '나 오늘 울고싶으니까 안아주라'},
       {type: 'human',
        desc: '',
        query: 'human75',
        score_range: range(75, 76),
        comment: '생각 없이 말하는 인자'},
       {type: 'human',
        desc: '',
        query: 'human76',
        score_range: range(76, 77),
        comment: '밥 많이 먹었니? 어쩐지 그래보이더라.'},
       {type: 'human',
        desc: '',
        query: 'human77',
        score_range: range(77, 78),
        comment: '인내심의 한계를 경험하는 중'},
       {type: 'human',
        desc: '',
        query: 'human78',
        score_range: range(78, 79),
        comment: '보고싶다'},
       {type: 'human',
        desc: '',
        query: 'human79',
        score_range: range(79, 80),
        comment: '지금 사랑하는 사람을 생각하고 있어요.'},
       {type: 'human',
        desc: '',
        query: 'human80',
        score_range: range(80, 81),
        comment: '오늘 하루도 고생한 나를 위한 치킨을 생각하면 설레는 중!'},
       {type: 'human',
        desc: '',
        query: 'human81',
        score_range: range(81, 82),
        comment: '자도자도 피로가 안풀리냐…'},
       {type: 'human',
        desc: '',
        query: 'human82',
        score_range: range(82, 83),
        comment: '나 좀 내비둬! 가만히 있어도 피곤한 사람을!'},
       {type: 'human',
        desc: '',
        query: 'human83',
        score_range: range(83, 84),
        comment: '오~ 쉽지 않은데!?'},
       {type: 'human',
        desc: '',
        query: 'human84',
        score_range: range(84, 85),
        comment: '지금 혹시 지쳤나요?'},
       {type: 'human',
        desc: '',
        query: 'human85',
        score_range: range(85, 86),
        comment: '슬슬 새어나오는 한숨'},
       {type: 'human',
        desc: '',
        query: 'human86',
        score_range: range(86, 87),
        comment: '서로를…아끼고…사랑하고…'},
       {type: 'human',
        desc: '',
        query: 'human87',
        score_range: range(87, 88),
        comment: '친구들아…고맙다…'},
       {type: 'human',
        desc: '',
        query: 'human88',
        score_range: range(88, 89),
        comment: 'ㄴrㄴ…ㄱr끔…눈물을…흘린ㄷr…^^'},
       {type: 'human',
        desc: '',
        query: 'human89',
        score_range: range(89, 90),
        comment: '하지말라는 것 좀 하지마'},
       {type: 'human',
        desc: '',
        query: 'human90',
        score_range: range(90, 91),
        comment: '훠우~~~~파티구나나아아아~~~'},
       {type: 'human',
        desc: '',
        query: 'human91',
        score_range: range(91, 92),
        comment: '아무 생각이 없다왜냐면 아무 생각이 없기 때문이다.'},
       {type: 'human',
        desc: '',
        query: 'human92',
        score_range: range(92, 93),
        comment: '나 여기 왜 있지…'},
       {type: 'human',
        desc: '',
        query: 'human93',
        score_range: range(93, 94),
        comment: '집에 가고 싶다…'},
       {type: 'human',
        desc: '',
        query: 'human94',
        score_range: range(94, 95),
        comment: '좋냐..?'},
       {type: 'human',
        desc: '',
        query: 'human95',
        score_range: range(95, 96),
        comment: '아이고 의미없다'},
       {type: 'human',
        desc: '',
        query: 'human96',
        score_range: range(96, 97),
        comment: '먹을 때 건드리지마'},
       {type: 'human',
        desc: '',
        query: 'human97',
        score_range: range(97, 98),
        comment: '들을 가치가 없네ㅎ 안녕'},
       {type: 'human',
        desc: '',
        query: 'human98',
        score_range: range(98, 99),
        comment: '어쩔..?'},
       {type: 'human',
        desc: '',
        query: 'human99',
        score_range: range(99, 100),
        comment: '아 드럽게 귀찮게 하네!'},
       {type: 'human',
        desc: '',
        query: 'human100',
        score_range: range(100, 101),
        comment: '아유… 하기 싫어…'},
       {type: 'human',
        desc: '',
        query: 'human101',
        score_range: range(101, 102),
        comment: '알게뭐냐… 난 내 갈 길 간다…'},
       {type: 'human',
        desc: '',
        query: 'human102',
        score_range: range(102, 103),
        comment: '나는 안 들린다~ 안 들려~'},
       {type: 'human',
        desc: '',
        query: 'human103',
        score_range: range(103, 104),
        comment: '안 나가고 집에만 있을 겁니다!'},
       {type: 'human',
        desc: '',
        query: 'human104',
        score_range: range(104, 105),
        comment: '그런 거 나한테 기대하지 마'},
       {type: 'human',
        desc: '',
        query: 'human105',
        score_range: range(105, 106),
        comment: '혈압 오르는 중'},
       {type: 'human',
        desc: '',
        query: 'human106',
        score_range: range(106, 107),
        comment: '제가 왜요'},
       {type: 'human',
        desc: '',
        query: 'human107',
        score_range: range(107, 108),
        comment: '혼자 있고 싶어요'},
       {type: 'human',
        desc: '',
        query: 'human108',
        score_range: range(108, 109),
        comment: '하루종일 누워있고만 싶어라'},
       {type: 'human',
        desc: '',
        query: 'human109',
        score_range: range(109, 110),
        comment: '그래 (귀찮다)'},
       {type: 'human',
        desc: '',
        query: 'human110',
        score_range: range(110, 111),
        comment: '인생은 원래 되는대로 사는 거야..'},
       {type: 'human',
        desc: '',
        query: 'human111',
        score_range: range(111, 112),
        comment: '어차피 나는 우주의 먼지에 불과한 존재인 것을…'},
       {type: 'human',
        desc: '',
        query: 'human112',
        score_range: range(112, 113),
        comment: '앉으면 눕고 싶은 것이 사람의 마음'},
       {type: 'human',
        desc: '',
        query: 'human113',
        score_range: range(113, 114),
        comment: '못마땅'},
       {type: 'human',
        desc: '',
        query: 'human114',
        score_range: range(114, 115),
        comment: '삶의 의욕 상실'},
       {type: 'human',
        desc: '',
        query: 'human115',
        score_range: range(115, 116),
        comment: '로또 당첨되고 싶다..ㅎ'},
       {type: 'human',
        desc: '',
        query: 'human116',
        score_range: range(116, 117),
        comment: '오늘은 여기까지해야겠다.내일의 내가 하겠지'},
       {type: 'human',
        desc: '',
        query: 'human117',
        score_range: range(117, 118),
        comment: '그게 무슨 의미가 있나~'},
       {type: 'human',
        desc: '',
        query: 'human118',
        score_range: range(118, 119),
        comment: '지겨워~~ 지겨워~~'},
       {type: 'human',
        desc: '',
        query: 'human119',
        score_range: range(119, 120),
        comment: '그럴 수도 있지'},
       {type: 'human',
        desc: '',
        query: 'human120',
        score_range: range(120, 121),
        comment: '때려쳐야겠다^_^'},
       {type: 'human',
        desc: '',
        query: 'human121',
        score_range: range(121, 122),
        comment: '왔어?'},
       {type: 'human',
        desc: '',
        query: 'human122',
        score_range: range(122, 123),
        comment: '앗 안녕..!'},
       {type: 'human',
        desc: '',
        query: 'human123',
        score_range: range(123, 124),
        comment: '잘 지내!'},
       {type: 'human',
        desc: '',
        query: 'human124',
        score_range: range(124, 125),
        comment: '이야~ 몸 좀 좋아졌는데?'},
       {type: 'human',
        desc: '',
        query: 'human125',
        score_range: range(125, 126),
        comment: '야 진짜 오랜만이다!'},
       {type: 'human',
        desc: '',
        query: 'human126',
        score_range: range(126, 127),
        comment: '좋은 아침!'},
       {type: 'human',
        desc: '',
        query: 'human127',
        score_range: range(127, 128),
        comment: '언제 밥 한번 먹자~ (예의상 하는 말)'},
       {type: 'human',
        desc: '',
        query: 'human128',
        score_range: range(128, 129),
        comment: '야 나 간다!'},
       {type: 'human',
        desc: '',
        query: 'human129',
        score_range: range(129, 130),
        comment: '하이!'},
       {type: 'human',
        desc: '',
        query: 'human130',
        score_range: range(130, 131),
        comment: '야! 여기야! 여기!'},
       {type: 'human',
        desc: '',
        query: 'human131',
        score_range: range(131, 132),
        comment: '진짜 언제 한번 보자~ (길가다 마주칠 확률이 더 높다)'},
       {type: 'human',
        desc: '',
        query: 'human132',
        score_range: range(132, 133),
        comment: '.야!!!!! 너 뭐야???!! (오랜만이라 반가운데 할말은 없어서 일단'},
       {type: 'human',
        desc: '',
        query: 'human133',
        score_range: range(133, 134),
        comment: '소리지른다)'},
       {type: 'human',
        desc: '',
        query: 'human134',
        score_range: range(134, 135),
        comment: '먼저 간다!'},
       {type: 'human',
        desc: '',
        query: 'human135',
        score_range: range(135, 136),
        comment: '한잔 해야지?'},
       {type: 'human',
        desc: '',
        query: 'human136',
        score_range: range(136, 137),
        comment: '여!~'},
       {type: 'human',
        desc: '',
        query: 'human137',
        score_range: range(137, 138),
        comment: '너 살빠진거 같은데?'},
       {type: 'human',
        desc: '',
        query: 'human138',
        score_range: range(138, 139),
        comment: '잘자♥'},
       {type: 'human',
        desc: '',
        query: 'human139',
        score_range: range(139, 140),
        comment: '안녕..><'},
       {type: 'human',
        desc: '',
        query: 'human140',
        score_range: range(140, 141),
        comment: '잘 지냈어?'},
       {type: 'human',
        desc: '',
        query: 'human141',
        score_range: range(141, 142),
        comment: '지금 시간이 몇시야?..'},
       {type: 'human',
        desc: '',
        query: 'human142',
        score_range: range(142, 143),
        comment: '수고했다!'},
       {type: 'human',
        desc: '',
        query: 'human143',
        score_range: range(143, 144),
        comment: '배고파!'},
       {type: 'human',
        desc: '',
        query: 'human144',
        score_range: range(144, 145),
        comment: '조심해서가!'},
       {type: 'human',
        desc: '',
        query: 'human145',
        score_range: range(145, 146),
        comment: '잘가!'},
       {type: 'human',
        desc: '',
        query: 'human146',
        score_range: range(146, 147),
        comment: '밥은 먹고 다니냐?..'},
       {type: 'human',
        desc: '',
        query: 'human147',
        score_range: range(147, 148),
        comment: '어디갈래?'},
       {type: 'human',
        desc: '',
        query: 'human148',
        score_range: range(148, 149),
        comment: '야 미안미안 늦었다..'},
       {type: 'human',
        desc: '',
        query: 'human149',
        score_range: range(149, 150),
        comment: '뭐 할래?'},
       {type: 'human',
        desc: '',
        query: 'human150',
        score_range: range(150, 151),
        comment: '어머 너무 예뻐졌다!'},
       {type: 'human',
        desc: '',
        query: 'human151',
        score_range: range(151, 152),
        comment: '나 오늘 뭐 달라진거 없어?'},
       {type: 'human',
        desc: '',
        query: 'human152',
        score_range: range(152, 153),
        comment: '와씨 실화냐? 나 씻어야해?'},
       {type: 'human',
        desc: '',
        query: 'human153',
        score_range: range(153, 154),
        comment: '오늘은 과감하게 양치질 패스한다.'},
       {type: 'human',
        desc: '',
        query: 'human154',
        score_range: range(154, 155),
        comment: '세수는 왜 해야하는건데?'},
       {type: 'human',
        desc: '',
        query: 'human155',
        score_range: range(155, 156),
        comment: '테이크어 샤워 해야지 뽀송뽀송~'},
       {type: 'human',
        desc: '',
        query: 'human156',
        score_range: range(156, 157),
        comment: '난 씻을 때 머리부터 감아 그게 좋거든'},
       {type: 'human',
        desc: '',
        query: 'human157',
        score_range: range(157, 158),
        comment: '한 여름에도 뜨거운 물로 샤워하는 나는야 핫소스~'},
       {type: 'human',
        desc: '',
        query: 'human158',
        score_range: range(158, 159),
        comment: '진짜 씻겨주는 기계 나온다고 하면 주식부터 산다.'},
       {type: 'human',
        desc: '',
        query: 'human159',
        score_range: range(159, 160),
        comment: '와 오늘은 씻기 너무 귀찮은데'},
       {type: 'human',
        desc: '',
        query: 'human160',
        score_range: range(160, 161),
        comment: '나 좀 씻겨 줄래?^^'},
       {type: 'human',
        desc: '',
        query: 'human161',
        score_range: range(161, 162),
        comment: '물 온도 어때?'},
       {type: 'human',
        desc: '',
        query: 'human162',
        score_range: range(162, 163),
        comment: '입욕제 없으면 목욕 안함.'},
       {type: 'human',
        desc: '',
        query: 'human163',
        score_range: range(163, 164),
        comment: '씻고나면 바나나 우유는 국룰'},
       {type: 'human',
        desc: '',
        query: 'human164',
        score_range: range(164, 165),
        comment: '오늘은 뽀송하게 가아~~~~'},
       {type: 'human',
        desc: '',
        query: 'human165',
        score_range: range(165, 166),
        comment: '샤워 후 노곤노곤하니~~~ 맥주다!'},
       {type: 'human',
        desc: '',
        query: 'human166',
        score_range: range(166, 167),
        comment: '잠깐 있다가 씻으려고 하니 벌써 새벽임..ee'},
       {type: 'human',
        desc: '',
        query: 'human167',
        score_range: range(167, 168),
        comment: '샤워 하고 거울 탁! 이정도면 괜찮군!'},
       {type: 'human',
        desc: '',
        query: 'human168',
        score_range: range(168, 169),
        comment: '씻고 나면 매번 다른 사람 등장!'},
       {type: 'human',
        desc: '',
        query: 'human169',
        score_range: range(169, 170),
        comment: '안씻을래…어제 씻었어…'},
       {type: 'human',
        desc: '',
        query: 'human170',
        score_range: range(170, 171),
        comment: '최소 결벽증…'},
       {type: 'human',
        desc: '',
        query: 'human171',
        score_range: range(171, 172),
        comment: '샴푸린스트리트먼트바디워시스크럽팩 다함.'},
       {type: 'human',
        desc: '',
        query: 'human172',
        score_range: range(172, 173),
        comment: '너에게선 늘 향긋한 냄새가 나혹시 씻었니?'},
       {type: 'human',
        desc: '',
        query: 'human173',
        score_range: range(173, 174),
        comment: '너에게선 늘 방구 냄새가 나혹시 안 씻었니?'},
       {type: 'human',
        desc: '',
        query: 'human174',
        score_range: range(174, 175),
        comment: '그냥 좀 씻어라.'},
       {type: 'human',
        desc: '',
        query: 'human175',
        score_range: range(175, 176),
        comment: '머리부터 발끝까지~ 야무지게 씻어야징~'},
       {type: 'human',
        desc: '',
        query: 'human176',
        score_range: range(176, 177),
        comment: '외출후 손씻기와 발씻기'},
       {type: 'human',
        desc: '',
        query: 'human177',
        score_range: range(177, 178),
        comment: '손톱까지 깨끗하게! 맑게! 자신있게에~!'},
       {type: 'human',
        desc: '',
        query: 'human178',
        score_range: range(178, 179),
        comment: '가글 말고 양치로 부탁해!'},
       {type: 'human',
        desc: '',
        query: 'human179',
        score_range: range(179, 180),
        comment: '입에서 그런 냄새가 난다는건 씻어야한다는 소리야'},
       {type: 'human',
        desc: '',
        query: 'human180',
        score_range: range(180, 181),
        comment: '너는 코가 혹시 없는 것이니?'},
       {type: 'human',
        desc: '',
        query: 'human181',
        score_range: range(181, 182),
        comment: '난다요~냄새가! 난다요!~'},
       {type: 'human',
        desc: '',
        query: 'human182',
        score_range: range(182, 183),
        comment: '배고파 밥좀 줄래?'},
       {type: 'human',
        desc: '',
        query: 'human183',
        score_range: range(183, 184),
        comment: 'OO아 국이 좀 짜다'},
       {type: 'human',
        desc: '',
        query: 'human184',
        score_range: range(184, 185),
        comment: '이걸 밥이라고 주는거니?'},
       {type: 'human',
        desc: '',
        query: 'human185',
        score_range: range(185, 186),
        comment: '오늘 반찬은 뭐야?'},
       {type: 'human',
        desc: '',
        query: 'human186',
        score_range: range(186, 187),
        comment: '나는 채식주의자야!'},
       {type: 'human',
        desc: '',
        query: 'human187',
        score_range: range(187, 188),
        comment: '고기없이는 밥 안먹어!!'},
       {type: 'human',
        desc: '',
        query: 'human188',
        score_range: range(188, 189),
        comment: '인스턴트가 최고야!'},
       {type: 'human',
        desc: '',
        query: 'human189',
        score_range: range(189, 190),
        comment: '아~배부르다~~~~'},
       {type: 'human',
        desc: '',
        query: 'human190',
        score_range: range(190, 191),
        comment: '야채싫어!!!!'},
       {type: 'human',
        desc: '',
        query: 'human191',
        score_range: range(191, 192),
        comment: '양이 너무 적어! 조금 더 줘!!'},
       {type: 'human',
        desc: '',
        query: 'human192',
        score_range: range(192, 193),
        comment: '너무 많아~ 덜어줘!'},
       {type: 'human',
        desc: '',
        query: 'human193',
        score_range: range(193, 194),
        comment: '꼬르륵.....ㄹㄹ'},
       {type: 'human',
        desc: '',
        query: 'human194',
        score_range: range(194, 195),
        comment: '오늘은 떡볶이다!!'},
       {type: 'human',
        desc: '',
        query: 'human195',
        score_range: range(195, 196),
        comment: '달달한게 땡기네~~~~'},
       {type: 'human',
        desc: '',
        query: 'human196',
        score_range: range(196, 197),
        comment: '더우니까 아이스크림 먹을까??'},
       {type: 'human',
        desc: '',
        query: 'human197',
        score_range: range(197, 198),
        comment: '추워..따뜻한 국물먹고싶어!'},
       {type: 'human',
        desc: '',
        query: 'human198',
        score_range: range(198, 199),
        comment: '입맛없어.안먹을래'},
       {type: 'human',
        desc: '',
        query: 'human199',
        score_range: range(199, 200),
        comment: '다엿트 중!! 내 눈앞에서 음식 치워라!'},
       {type: 'human',
        desc: '',
        query: 'human200',
        score_range: range(200, 201),
        comment: '한입만~!'},
       {type: 'human',
        desc: '',
        query: 'human201',
        score_range: range(201, 202),
        comment: '뭐야~? 완전 맛있어!! JMT'},
       {type: 'human',
        desc: '',
        query: 'human202',
        score_range: range(202, 203),
        comment: '이것도 요리라고 했냐? 맛없어 퉤!'},
       {type: 'human',
        desc: '',
        query: 'human203',
        score_range: range(203, 204),
        comment: '시~원한 물 한잔 내와라~'},
       {type: 'human',
        desc: '',
        query: 'human204',
        score_range: range(204, 205),
        comment: '맛집투어 하고싶어! 나가자~'},
       {type: 'human',
        desc: '',
        query: 'human205',
        score_range: range(205, 206),
        comment: '야식 콜 ~~?'},
       {type: 'human',
        desc: '',
        query: 'human206',
        score_range: range(206, 207),
        comment: '족발어때? 대박 좋지~~?'},
       {type: 'human',
        desc: '',
        query: 'human207',
        score_range: range(207, 208),
        comment: '먹을땐 개도 안건드려ㅡㅡ'},
       {type: 'human',
        desc: '',
        query: 'human208',
        score_range: range(208, 209),
        comment: '첩반상을 내놓으시오!'},
       {type: 'human',
        desc: '',
        query: 'human209',
        score_range: range(209, 210),
        comment: '소고기 사주세요오오오오~~!'},
       {type: 'human',
        desc: '',
        query: 'human210',
        score_range: range(210, 211),
        comment: '윽..그거 왜 먹어?'},
       {type: 'human',
        desc: '',
        query: 'human211',
        score_range: range(211, 212),
        comment: '너무 걱정하지마 다 잘될거야!'},
       {type: 'human',
        desc: '',
        query: 'human212',
        score_range: range(212, 213),
        comment: '지나간 일은 지나간대로 잊어버려~'},
       {type: 'human',
        desc: '',
        query: 'human213',
        score_range: range(213, 214),
        comment: '힘들고 답답할 땐 산책가는건 어때?'},
       {type: 'human',
        desc: '',
        query: 'human214',
        score_range: range(214, 215),
        comment: '오늘 하루도 정말 고생많았어!'},
       {type: 'human',
        desc: '',
        query: 'human215',
        score_range: range(215, 216),
        comment: '슬프면 나한테 기대도 돼'},
       {type: 'human',
        desc: '',
        query: 'human216',
        score_range: range(216, 217),
        comment: '힘들 땐 시간이 약이래이 또한 지나가리라!'},
       {type: 'human',
        desc: '',
        query: 'human217',
        score_range: range(217, 218),
        comment: '네 옆에는 내가 있잖아힘내!'},
       {type: 'human',
        desc: '',
        query: 'human218',
        score_range: range(218, 219),
        comment: '울고 싶을 땐 울어도 괜찮아'},
       {type: 'human',
        desc: '',
        query: 'human219',
        score_range: range(219, 220),
        comment: '너한테 내가 위로가 됐으면 좋겠어.'},
       {type: 'human',
        desc: '',
        query: 'human220',
        score_range: range(220, 221),
        comment: '누가 뭐라해도 너가 최고야'},
       {type: 'human',
        desc: '',
        query: 'human221',
        score_range: range(221, 222),
        comment: '너를 아껴주는 사람들을 생각해봐!'},
       {type: 'human',
        desc: '',
        query: 'human222',
        score_range: range(222, 223),
        comment: '맛있는거 먹으면 기분이 좀 나아질거야!'},
       {type: 'human',
        desc: '',
        query: 'human223',
        score_range: range(223, 224),
        comment: '무슨일 있어? 내가 다 들어줄게'},
       {type: 'human',
        desc: '',
        query: 'human224',
        score_range: range(224, 225),
        comment: '누가 널 힘들게 한거야? 데려와!'},
       {type: 'human',
        desc: '',
        query: 'human225',
        score_range: range(225, 226),
        comment: '네 존재 자체로도 빛이 나'},
       {type: 'human',
        desc: '',
        query: 'human226',
        score_range: range(226, 227),
        comment: '언제나 응원할게 내일도 화이팅!'},
       {type: 'human',
        desc: '',
        query: 'human227',
        score_range: range(227, 228),
        comment: '나한테는 너가 최고야제일 소중해'},
       {type: 'human',
        desc: '',
        query: 'human228',
        score_range: range(228, 229),
        comment: '기운내, 이미 넌 멋있는 사람이야'},
       {type: 'human',
        desc: '',
        query: 'human229',
        score_range: range(229, 230),
        comment: '울고 싶을 땐 울어도 괜찮아'},
       {type: 'human',
        desc: '',
        query: 'human230',
        score_range: range(230, 231),
        comment: '남들과 비교할 필요없어! 너 자체가 빛나'},
       {type: 'human',
        desc: '',
        query: 'human231',
        score_range: range(231, 232),
        comment: '너도 이미 누군가에겐 소중한 사람이야'},
       {type: 'human',
        desc: '',
        query: 'human232',
        score_range: range(232, 233),
        comment: '수고했어, 오늘도'},
       {type: 'human',
        desc: '',
        query: 'human233',
        score_range: range(233, 234),
        comment: '응원할게, 내일도'},
       {type: 'human',
        desc: '',
        query: 'human234',
        score_range: range(234, 235),
        comment: '고마워 항상 노력해줘서'},
       {type: 'human',
        desc: '',
        query: 'human235',
        score_range: range(235, 236),
        comment: '걱정마 충분히 잘하고 있어!'},
       {type: 'human',
        desc: '',
        query: 'human236',
        score_range: range(236, 237),
        comment: '괜찮아 지금처럼만 하면돼'},
       {type: 'human',
        desc: '',
        query: 'human237',
        score_range: range(237, 238),
        comment: '우울하면 맛있는거 먹으러 갈까?'},
       {type: 'human',
        desc: '',
        query: 'human238',
        score_range: range(238, 239),
        comment: '기분이 울적할 땐? 여행을 떠나요~!'},
       {type: 'human',
        desc: '',
        query: 'human239',
        score_range: range(239, 240),
        comment: '때로는 나만의 시간을 갖는 것도 필요해'},
       {type: 'human',
        desc: '',
        query: 'human240',
        score_range: range(240, 241),
        comment: '행복은 소소한 곳에서부터 찾는거래'},
       {type: 'human',
        desc: '',
        query: 'human241',
        score_range: range(241, 242),
        comment: '똥을 일째 못싸서 힘들어..'},
       {type: 'human',
        desc: '',
        query: 'human242',
        score_range: range(242, 243),
        comment: '하.내 똥냄새 너무 심한 것 같아 룸스프레이 들고다녀야겠다.'},
       {type: 'human',
        desc: '',
        query: 'human243',
        score_range: range(243, 244),
        comment: '저번에 화장실 물 안내렸는데 아무도 모르겠지?'},
       {type: 'human',
        desc: '',
        query: 'human244',
        score_range: range(244, 245),
        comment: '아침에 일어나서 싸는 똥은 행복입니다.'},
       {type: 'human',
        desc: '',
        query: 'human245',
        score_range: range(245, 246),
        comment: '지금 나를 똥쟁이로 생각하는건 아니겠지?'},
       {type: 'human',
        desc: '',
        query: 'human246',
        score_range: range(246, 247),
        comment: '나는 오줌을 시간이나 참을 수 있어.'},
       {type: 'human',
        desc: '',
        query: 'human247',
        score_range: range(247, 248),
        comment: '야채만 먹으면 초록색 똥이 나온데 신기하지?'},
       {type: 'human',
        desc: '',
        query: 'human248',
        score_range: range(248, 249),
        comment: '똥마려워'},
       {type: 'human',
        desc: '',
        query: 'human249',
        score_range: range(249, 250),
        comment: '오줌마려워'},
       {type: 'human',
        desc: '',
        query: 'human250',
        score_range: range(250, 251),
        comment: '똥 콸콸 나오기 직전까지 참았다가 싼 사람의 표정입니다(행복)'},
       {type: 'human',
        desc: '',
        query: 'human251',
        score_range: range(251, 252),
        comment: '가끔은 내 장한테 미안해너무 무거운 음식만 보내서'},
       {type: 'human',
        desc: '',
        query: 'human252',
        score_range: range(252, 253),
        comment: '야 나 진짜 못참겠어 화장실 좀'},
       {type: 'human',
        desc: '',
        query: 'human253',
        score_range: range(253, 254),
        comment: '여기 화장실이 어디야?'},
       {type: 'human',
        desc: '',
        query: 'human254',
        score_range: range(254, 255),
        comment: '난 푸세식 화장실이 그리워 힘 주기가 편하거든'},
       {type: 'human',
        desc: '',
        query: 'human255',
        score_range: range(255, 256),
        comment: '아.어제 뭐 잘못 먹었나 배가 왜이렇게 아프지'},
       {type: 'human',
        desc: '',
        query: 'human256',
        score_range: range(256, 257),
        comment: '설사할 때 배가 아픈 이유는 뭘까?'},
       {type: 'human',
        desc: '',
        query: 'human257',
        score_range: range(257, 258),
        comment: '옛날에 똥을 침대에 싸면서 쾌감을 느끼는 사람이 있다던데 그게 나야.'},
       {type: 'human',
        desc: '',
        query: 'human258',
        score_range: range(258, 259),
        comment: '화장실이 쾌적하면 기분이 좋아.'},
       {type: 'human',
        desc: '',
        query: 'human259',
        score_range: range(259, 260),
        comment: '아무리 건물이 좋아도 화장실이 더러우면 짜증부터 나'},
       {type: 'human',
        desc: '',
        query: 'human260',
        score_range: range(260, 261),
        comment: '나 어제 이불에 오줌쌌어.'},
       {type: 'cat',
        desc: '',
        query: 'cat1',
        score_range: range(1, 2),
        comment: '츄르 가져다줘'},
       {type: 'cat',
        desc: '',
        query: 'cat2',
        score_range: range(2, 3),
        comment: '나 만지지 말아줄래 ?'},
       {type: 'cat',
        desc: '',
        query: 'cat3',
        score_range: range(3, 4),
        comment: '혼자 있게 냅둬줘'},
       {type: 'cat',
        desc: '',
        query: 'cat4',
        score_range: range(4, 5),
        comment: '집사야 다른 고양이 쳐다보지마!'},
       {type: 'cat',
        desc: '',
        query: 'cat5',
        score_range: range(5, 6),
        comment: '집사는 나만보고 나만 사랑하고 나만을 챙겨'},
       {type: 'cat',
        desc: '',
        query: 'cat6',
        score_range: range(6, 7),
        comment: '조용히좀 해줘'},
       {type: 'cat',
        desc: '',
        query: 'cat7',
        score_range: range(7, 8),
        comment: '나는 시끄러운건 딱 질색이야'},
       {type: 'cat',
        desc: '',
        query: 'cat8',
        score_range: range(8, 9),
        comment: '나랑 소통하고 싶으면 눈을 깜박여'},
       {type: 'cat',
        desc: '',
        query: 'cat9',
        score_range: range(9, 10),
        comment: '집사한테 비비고 싶은데!'},
       {type: 'cat',
        desc: '',
        query: 'cat10',
        score_range: range(10, 11),
        comment: '내가 허락할 때만 날 만질 수 있어'},
       {type: 'cat',
        desc: '',
        query: 'cat11',
        score_range: range(11, 12),
        comment: '생선좀 챙겨줘봐'},
       {type: 'cat',
        desc: '',
        query: 'cat12',
        score_range: range(12, 13),
        comment: '집에 올 때 박스좀 가져와줘'},
       {type: 'cat',
        desc: '',
        query: 'cat13',
        score_range: range(13, 14),
        comment: '비닐안에 들어가서 혼자있고 싶어'},
       {type: 'cat',
        desc: '',
        query: 'cat14',
        score_range: range(14, 15),
        comment: '지금 건들면 두고봐!!'},
       {type: 'cat',
        desc: '',
        query: 'cat15',
        score_range: range(15, 16),
        comment: '냥냥펀치 맞아볼래 ?'},
       {type: 'cat',
        desc: '',
        query: 'cat16',
        score_range: range(16, 17),
        comment: '장난감 가져와! 나랑 놀자!'},
       {type: 'cat',
        desc: '',
        query: 'cat17',
        score_range: range(17, 18),
        comment: '나 심심해!'},
       {type: 'cat',
        desc: '',
        query: 'cat18',
        score_range: range(18, 19),
        comment: '졸리니까 가만히 냅둬 자게'},
       {type: 'cat',
        desc: '',
        query: 'cat19',
        score_range: range(19, 20),
        comment: '일로와바'},
       {type: 'cat',
        desc: '',
        query: 'cat20',
        score_range: range(20, 21),
        comment: '저리로 가줄래 ?'},
       {type: 'cat',
        desc: '',
        query: 'cat21',
        score_range: range(21, 22),
        comment: '적당한 온도,습도 모든게 맘에 들어 편해'},
       {type: 'cat',
        desc: '',
        query: 'cat22',
        score_range: range(22, 23),
        comment: '날 만질 수 있는 분위는 턱 밑끝'},
       {type: 'cat',
        desc: '',
        query: 'cat23',
        score_range: range(23, 24),
        comment: '장난감 좀 다양하게 부탁할게'},
       {type: 'cat',
        desc: '',
        query: 'cat24',
        score_range: range(24, 25),
        comment: '내발은 아주 귀여운 핑크 스똬일이야 ^>^'},
       {type: 'cat',
        desc: '',
        query: 'cat25',
        score_range: range(25, 26),
        comment: '꾹꾹이좀 하게 일로와바'},
       {type: 'cat',
        desc: '',
        query: 'cat26',
        score_range: range(26, 27),
        comment: '신상 츄르좀 사올 수 있겠어 ?'},
       {type: 'cat',
        desc: '',
        query: 'cat27',
        score_range: range(27, 28),
        comment: '졸린데 자기 시른 이 기분을 알아 ?'},
       {type: 'cat',
        desc: '',
        query: 'cat28',
        score_range: range(28, 29),
        comment: '집사 요즘 너무 맘에 들어'},
       {type: 'cat',
        desc: '',
        query: 'cat29',
        score_range: range(29, 30),
        comment: '재밌는 일이 좀 없을까 ?'},
       {type: 'cat',
        desc: '',
        query: 'cat30',
        score_range: range(30, 31),
        comment: '난 수염으로 이세상을 지배 할 수 있어'},
       {type: 'cat',
        desc: '',
        query: 'cat31',
        score_range: range(31, 32),
        comment: '어제 밤에 무슨 일이 있었는지 모르지 ?'},
       {type: 'cat',
        desc: '',
        query: 'cat32',
        score_range: range(32, 33),
        comment: '산책 따위는 가지 않는다는 것을 알고 있겠지??'},
       {type: 'cat',
        desc: '',
        query: 'cat33',
        score_range: range(33, 34),
        comment: '산책은 강아지나 가는거야.난 위대한 고양이다'},
       {type: 'cat',
        desc: '',
        query: 'cat34',
        score_range: range(34, 35),
        comment: '위대한 고양이는 산책을 가지 않는다'},
       {type: 'cat',
        desc: '',
        query: 'cat35',
        score_range: range(35, 36),
        comment: '위대한 고양이는 끌려다니지 않는다'},
       {type: 'cat',
        desc: '',
        query: 'cat36',
        score_range: range(36, 37),
        comment: '밖에 나갈일 있다면 나를 안고 나가거라'},
       {type: 'cat',
        desc: '',
        query: 'cat37',
        score_range: range(37, 38),
        comment: '이쁜 고양이 알고 있다면 나에게 소개해주어라'},
       {type: 'cat',
        desc: '',
        query: 'cat38',
        score_range: range(38, 39),
        comment: '배가 고프구나, 먹을것을 달라'},
       {type: 'cat',
        desc: '',
        query: 'cat39',
        score_range: range(39, 40),
        comment: '오늘은 쉬고 싶구나, 나를 건들지 마라'},
       {type: 'cat',
        desc: '',
        query: 'cat40',
        score_range: range(40, 41),
        comment: '오래 걷기 싫다내 귀여운 젤리가 닳는단 말이다'},
       {type: 'cat',
        desc: '',
        query: 'cat41',
        score_range: range(41, 42),
        comment: '나는 바람이 선선한 날이 좋다오늘이 그때다'},
       {type: 'cat',
        desc: '',
        query: 'cat42',
        score_range: range(42, 43),
        comment: '나를 안을때 조심스레 안도록 하라, 두손으로 말이다!'},
       {type: 'cat',
        desc: '',
        query: 'cat43',
        score_range: range(43, 44),
        comment: '흙밟는건 기분이 좋지않구나 나를 안아라'},
       {type: 'cat',
        desc: '',
        query: 'cat44',
        score_range: range(44, 45),
        comment: '아스팔트는 영 딱딱한게 기분이 좋지 않구나, 나를 안아라'},
       {type: 'cat',
        desc: '',
        query: 'cat45',
        score_range: range(45, 46),
        comment: '햇빛이 너무 쎈날은 나가지 말도록하여라 나의 피부를 지키거라'},
       {type: 'cat',
        desc: '',
        query: 'cat46',
        score_range: range(46, 47),
        comment: '오늘은 좀 피곤하구나, 식사를 대령하라~'},
       {type: 'cat',
        desc: '',
        query: 'cat47',
        score_range: range(47, 48),
        comment: '털이 좀 뭉치는 하루구나 나의 털 빗어라'},
       {type: 'cat',
        desc: '',
        query: 'cat48',
        score_range: range(48, 49),
        comment: '밖이 왜이리 소란이냐  조용한 곳으로 가자'},
       {type: 'cat',
        desc: '',
        query: 'cat49',
        score_range: range(49, 50),
        comment: '언제 외식이나 한번 하러 가자 집밥이 지겹구나'},
       {type: 'cat',
        desc: '',
        query: 'cat50',
        score_range: range(50, 51),
        comment: '요즘은 생쥐가 도통 보이지 않는구나 , 나가서 찾아보고오너라'},
       {type: 'cat',
        desc: '',
        query: 'cat51',
        score_range: range(51, 52),
        comment: '앗 저건뭐지!! 날쌘 놈이 구나! 잡아라!'},
       {type: 'cat',
        desc: '',
        query: 'cat52',
        score_range: range(52, 53),
        comment: '오늘은 왠지 점프하기 좋은날이구나'},
       {type: 'cat',
        desc: '',
        query: 'cat53',
        score_range: range(53, 54),
        comment: '뭔가 날쌘 놈을 잡고 싶구나~ 오늘은 헌팅데이다!'},
       {type: 'cat',
        desc: '',
        query: 'cat54',
        score_range: range(54, 55),
        comment: '쥐를 잡자 쥐를 잡자 찍찍찍'},
       {type: 'cat',
        desc: '',
        query: 'cat55',
        score_range: range(55, 56),
        comment: '나의 눈빛을 읽었느냐! 오늘은 여유를 즐기고 싶구나'},
       {type: 'cat',
        desc: '',
        query: 'cat56',
        score_range: range(56, 57),
        comment: '나의 동작은 벌처럼 빠르고, 나의 털은 솜처럼 부드럽다!'},
       {type: 'cat',
        desc: '',
        query: 'cat57',
        score_range: range(57, 58),
        comment: '오늘 너무 재미있구나 자 이제 집으로가자'},
       {type: 'cat',
        desc: '',
        query: 'cat58',
        score_range: range(58, 59),
        comment: '좋아좋아 나가자!'},
       {type: 'cat',
        desc: '',
        query: 'cat59',
        score_range: range(59, 60),
        comment: '요즘 집에만 있었더니 몸이 답답하구나 !'},
       {type: 'cat',
        desc: '',
        query: 'cat60',
        score_range: range(60, 61),
        comment: '나 살찐것 같아? 산책좀 해볼까?'},
       {type: 'cat',
        desc: '',
        query: 'cat61',
        score_range: range(61, 62),
        comment: '잠깐 이것은 뭐지? 나 뭔가 발견한것 같아'},
       {type: 'cat',
        desc: '',
        query: 'cat62',
        score_range: range(62, 63),
        comment: '와 오늘 왤케 기분이 좋지?'},
       {type: 'cat',
        desc: '',
        query: 'cat63',
        score_range: range(63, 64),
        comment: '아이고 자도자도 졸리니'},
       {type: 'cat',
        desc: '',
        query: 'cat64',
        score_range: range(64, 65),
        comment: '아무것도 하고 싶지 않구나'},
       {type: 'cat',
        desc: '',
        query: 'cat65',
        score_range: range(65, 66),
        comment: '나 좀 예민하니까 돈터치해라'},
       {type: 'cat',
        desc: '',
        query: 'cat66',
        score_range: range(66, 67),
        comment: '헤이헤이헤이! 기분도 꿀꿀한데 간식 좀 주라'},
       {type: 'cat',
        desc: '',
        query: 'cat67',
        score_range: range(67, 68),
        comment: '에? 그거 뭐야? 궁금해'},
       {type: 'cat',
        desc: '',
        query: 'cat68',
        score_range: range(68, 69),
        comment: '왜 자꾸 쳐다보는거야'},
       {type: 'cat',
        desc: '',
        query: 'cat69',
        score_range: range(69, 70),
        comment: '저게 뭐야?! 너무 무서워ㅜㅠ'},
       {type: 'cat',
        desc: '',
        query: 'cat70',
        score_range: range(70, 71),
        comment: '괜찮아? 왜구래? 힘드렁?'},
       {type: 'cat',
        desc: '',
        query: 'cat71',
        score_range: range(71, 72),
        comment: '와 너무 무서워 덜덜이다 진짜'},
       {type: 'cat',
        desc: '',
        query: 'cat72',
        score_range: range(72, 73),
        comment: '나 지금 집중 하고 있으니까 말해봐'},
       {type: 'cat',
        desc: '',
        query: 'cat73',
        score_range: range(73, 74),
        comment: '집착하게 하지마라~?'},
       {type: 'cat',
        desc: '',
        query: 'cat74',
        score_range: range(74, 75),
        comment: '할수만 있다면 한대 때려도 될까?'},
       {type: 'cat',
        desc: '',
        query: 'cat75',
        score_range: range(75, 76),
        comment: '극도의 흥분 상태'},
       {type: 'cat',
        desc: '',
        query: 'cat76',
        score_range: range(76, 77),
        comment: '그래그래~ 믿어준다 내가~'},
       {type: 'cat',
        desc: '',
        query: 'cat77',
        score_range: range(77, 78),
        comment: '뭐 좀 재밌는 거 없니?'},
       {type: 'cat',
        desc: '',
        query: 'cat78',
        score_range: range(78, 79),
        comment: '쟤는 왜 또 저러는거야?'},
       {type: 'cat',
        desc: '',
        query: 'cat79',
        score_range: range(79, 80),
        comment: '헤헤헤헤 기분 좋다!'},
       {type: 'cat',
        desc: '',
        query: 'cat80',
        score_range: range(80, 81),
        comment: '기분 좋으니까 내 배를 쓰담 해줄 수 있는 기회를 줄게'},
       {type: 'cat',
        desc: '',
        query: 'cat81',
        score_range: range(81, 82),
        comment: '난 널 너무너무 좋아해'},
       {type: 'cat',
        desc: '',
        query: 'cat82',
        score_range: range(82, 83),
        comment: '늘 고맙다!'},
       {type: 'cat',
        desc: '',
        query: 'cat83',
        score_range: range(83, 84),
        comment: '심심한데 나랑 놀아줄래?'},
       {type: 'cat',
        desc: '',
        query: 'cat84',
        score_range: range(84, 85),
        comment: '이제 저거 지겨워! 새로운 장난감 사주라!'},
       {type: 'cat',
        desc: '',
        query: 'cat85',
        score_range: range(85, 86),
        comment: '나 놀고시퍼어어어어!'},
       {type: 'cat',
        desc: '',
        query: 'cat86',
        score_range: range(86, 87),
        comment: '나 좀 예뻐해줄래? 부탁아니고 명령이야!'},
       {type: 'cat',
        desc: '',
        query: 'cat87',
        score_range: range(87, 88),
        comment: '나 건들이는 거 너무 싫어혼자 있을래'},
       {type: 'cat',
        desc: '',
        query: 'cat88',
        score_range: range(88, 89),
        comment: '나 좀 안아주라!'},
       {type: 'cat',
        desc: '',
        query: 'cat89',
        score_range: range(89, 90),
        comment: '이해안가는게 맨날 너 혼자 맛있는 거 먹더라?ㅡㅡ'},
       {type: 'cat',
        desc: '',
        query: 'cat90',
        score_range: range(90, 91),
        comment: '술 좀 작작마셔라 인간아~'},
       {type: 'cat',
        desc: '',
        query: 'cat91',
        score_range: range(91, 92),
        comment: '내가 자는 거에 대해서 불만있어? 그럼 간직만해'},
       {type: 'cat',
        desc: '',
        query: 'cat92',
        score_range: range(92, 93),
        comment: '집사나 지금 마렵다똥.'},
       {type: 'cat',
        desc: '',
        query: 'cat93',
        score_range: range(93, 94),
        comment: '당장 모래를 새걸로 갈지 않으면 신발장을 어지럽혀주겠어.'},
       {type: 'cat',
        desc: '',
        query: 'cat94',
        score_range: range(94, 95),
        comment: '내 몸에 거대한 무언가가 나오려고 한다'},
       {type: 'cat',
        desc: '',
        query: 'cat95',
        score_range: range(95, 96),
        comment: '나는 오줌이 마려운데 마렵지 않다.'},
       {type: 'cat',
        desc: '',
        query: 'cat96',
        score_range: range(96, 97),
        comment: '항상 생각하지만 화장실이 내 스타일이 아니야.'},
       {type: 'cat',
        desc: '',
        query: 'cat97',
        score_range: range(97, 98),
        comment: '미안해저번에 내가 오줌을 바닥에 눴지.'},
       {type: 'cat',
        desc: '',
        query: 'cat98',
        score_range: range(98, 99),
        comment: '아까 너무 많이 먹었나장이 요동친다.'},
       {type: 'cat',
        desc: '',
        query: 'cat99',
        score_range: range(99, 100),
        comment: '집사내 변 냄새에는 꽃향기가 난다 동의하는가?'},
       {type: 'cat',
        desc: '',
        query: 'cat100',
        score_range: range(100, 101),
        comment: '쾌변은 항상 옳다.'},
       {type: 'cat',
        desc: '',
        query: 'cat101',
        score_range: range(101, 102),
        comment: '화장실의 위치를 바꿔줘라햇빛이 들어오는 위치로.'},
       {type: 'cat',
        desc: '',
        query: 'cat102',
        score_range: range(102, 103),
        comment: '내 털에 오줌이 묻은 것 같다 확인좀 해줘.'},
       {type: 'cat',
        desc: '',
        query: 'cat103',
        score_range: range(103, 104),
        comment: '사료를 좀 바꿔보는게 어떤가 집사소화가 잘 안된다.'},
       {type: 'cat',
        desc: '',
        query: 'cat104',
        score_range: range(104, 105),
        comment: '곧 소화가 끝날 시간이야화장실은 깨끗하겠지?'},
       {type: 'cat',
        desc: '',
        query: 'cat105',
        score_range: range(105, 106),
        comment: '난 가끔 집사가 잠에 들었을 때 이불에 오줌을 눠버리고 싶어.'},
       {type: 'cat',
        desc: '',
        query: 'cat106',
        score_range: range(106, 107),
        comment: '내가 똥 쌀때는 항상 클래식을 틀으란 말이야.'},
       {type: 'cat',
        desc: '',
        query: 'cat107',
        score_range: range(107, 108),
        comment: '왜 집사의 화장실이랑 나의 화장실은 다른 것이냐?'},
       {type: 'cat',
        desc: '',
        query: 'cat108',
        score_range: range(108, 109),
        comment: '물을 마시면 왜 오줌이 마려운 것이냐? 설명하거라'},
       {type: 'cat',
        desc: '',
        query: 'cat109',
        score_range: range(109, 110),
        comment: '오늘 똥은 아주 색이 좋아 (흡족)'},
       {type: 'cat',
        desc: '',
        query: 'cat110',
        score_range: range(110, 111),
        comment: '집사내가 똥을 싸고나면 항상 내 엉덩이를 닦아.'},
       {type: 'cat',
        desc: '',
        query: 'cat111',
        score_range: range(111, 112),
        comment: '내 똥을 확인해서 건강 체크좀 해줬으면 좋겠다 집사.'},
       {type: 'cat',
        desc: '',
        query: 'cat112',
        score_range: range(112, 113),
        comment: '건드리지 말거라…'},
       {type: 'cat',
        desc: '',
        query: 'cat113',
        score_range: range(113, 114),
        comment: '아 또 시작이구나..'},
       {type: 'cat',
        desc: '',
        query: 'cat114',
        score_range: range(114, 115),
        comment: '뭘 보느냐'},
       {type: 'cat',
        desc: '',
        query: 'cat115',
        score_range: range(115, 116),
        comment: '너 지금 나를 불렀느냐?'},
       {type: 'cat',
        desc: '',
        query: 'cat116',
        score_range: range(116, 117),
        comment: '이거나 먹어라.냥냥펀치'},
       {type: 'cat',
        desc: '',
        query: 'cat117',
        score_range: range(117, 118),
        comment: '사진 좀 그만 찍어..'},
       {type: 'cat',
        desc: '',
        query: 'cat118',
        score_range: range(118, 119),
        comment: '노잼.재미없어'},
       {type: 'cat',
        desc: '',
        query: 'cat119',
        score_range: range(119, 120),
        comment: '나 좀 쓰다듬어보거라'},
       {type: 'cat',
        desc: '',
        query: 'cat120',
        score_range: range(120, 121),
        comment: '이 정도면 됐지?'},
       {type: 'cat',
        desc: '',
        query: 'cat121',
        score_range: range(121, 122),
        comment: '혼자만의 시간이 필요해.냅둬!'},
       {type: 'cat',
        desc: '',
        query: 'cat122',
        score_range: range(122, 123),
        comment: '나 부르지 마라 진짜 부르지마…'},
       {type: 'cat',
        desc: '',
        query: 'cat123',
        score_range: range(123, 124),
        comment: '할 만큼 했어 집가고 싶어..'},
       {type: 'cat',
        desc: '',
        query: 'cat124',
        score_range: range(124, 125),
        comment: '나는 건드려도 돼그런데 너는 안돼 ^_^'},
       {type: 'cat',
        desc: '',
        query: 'cat125',
        score_range: range(125, 126),
        comment: '왜 자꾸 쳐다보는 거지? (모른척)'},
       {type: 'cat',
        desc: '',
        query: 'cat126',
        score_range: range(126, 127),
        comment: '까짓 것 한번 해줄게'},
       {type: 'cat',
        desc: '',
        query: 'cat127',
        score_range: range(127, 128),
        comment: '이거 놓아라'},
       {type: 'cat',
        desc: '',
        query: 'cat128',
        score_range: range(128, 129),
        comment: '콱 그냥 물어버릴라'},
       {type: 'cat',
        desc: '',
        query: 'cat129',
        score_range: range(129, 130),
        comment: '츄르를 가져다 받쳐라!!'},
       {type: 'cat',
        desc: '',
        query: 'cat130',
        score_range: range(130, 131),
        comment: '목에 이거 뭐야 당장 빼애액!!!!'},
       {type: 'cat',
        desc: '',
        query: 'cat131',
        score_range: range(131, 132),
        comment: 'Wyrano.wyrano…'},
       {type: 'cat',
        desc: '',
        query: 'cat132',
        score_range: range(132, 133),
        comment: '오지마아악!!!'},
       {type: 'cat',
        desc: '',
        query: 'cat133',
        score_range: range(133, 134),
        comment: '대충살자'},
       {type: 'cat',
        desc: '',
        query: 'cat134',
        score_range: range(134, 135),
        comment: '이제 니 일에나 신경쓰면 어떨까?'},
       {type: 'cat',
        desc: '',
        query: 'cat135',
        score_range: range(135, 136),
        comment: '아휴 저 인간..'},
       {type: 'cat',
        desc: '',
        query: 'cat136',
        score_range: range(136, 137),
        comment: '다 부질없어'},
       {type: 'cat',
        desc: '',
        query: 'cat137',
        score_range: range(137, 138),
        comment: '…..(무시)'},
       {type: 'cat',
        desc: '',
        query: 'cat138',
        score_range: range(138, 139),
        comment: '시끄러워…'},
       {type: 'cat',
        desc: '',
        query: 'cat139',
        score_range: range(139, 140),
        comment: '해보자는 것이냐..'},
       {type: 'cat',
        desc: '',
        query: 'cat140',
        score_range: range(140, 141),
        comment: '귀찮네…'},
       {type: 'cat',
        desc: '',
        query: 'cat141',
        score_range: range(141, 142),
        comment: '집사야.해고당하고 싶으냐…'},
       {type: 'cat',
        desc: '',
        query: 'cat142',
        score_range: range(142, 143),
        comment: '흥!...(무시)'},
       {type: 'cat',
        desc: '',
        query: 'cat143',
        score_range: range(143, 144),
        comment: '왔어? 내게 간식을 줄 기회를 주지.'},
       {type: 'cat',
        desc: '',
        query: 'cat144',
        score_range: range(144, 145),
        comment: '감히 날 두고 어디갔다 이제 들어온거야?!'},
       {type: 'cat',
        desc: '',
        query: 'cat145',
        score_range: range(145, 146),
        comment: '빨리 갔다와!'},
       {type: 'cat',
        desc: '',
        query: 'cat146',
        score_range: range(146, 147),
        comment: '조심히 다녀오든가 말든가~'},
       {type: 'cat',
        desc: '',
        query: 'cat147',
        score_range: range(147, 148),
        comment: '넌 누군데 나한테 아는 척을 하는거지?'},
       {type: 'cat',
        desc: '',
        query: 'cat148',
        score_range: range(148, 149),
        comment: '또 술? 술좀 그만 먹어 그만 먹으라고!!'},
       {type: 'cat',
        desc: '',
        query: 'cat149',
        score_range: range(149, 150),
        comment: '왜 이제왔어? 나 심심했잖아!'},
       {type: 'cat',
        desc: '',
        query: 'cat150',
        score_range: range(150, 151),
        comment: '올 때 나에게 맞는 수준 높은 간식을 사오라고~'},
       {type: 'cat',
        desc: '',
        query: 'cat151',
        score_range: range(151, 152),
        comment: '누구신지??'},
       {type: 'cat',
        desc: '',
        query: 'cat152',
        score_range: range(152, 153),
        comment: '나혼자 집에 있기 싫어! 나도 데려가!!'},
       {type: 'cat',
        desc: '',
        query: 'cat153',
        score_range: range(153, 154),
        comment: '뭐해? 왔으면 나부터 쓰다듬어 줘야지?'},
       {type: 'cat',
        desc: '',
        query: 'cat154',
        score_range: range(154, 155),
        comment: '어휴~(절레절레)'},
       {type: 'cat',
        desc: '',
        query: 'cat155',
        score_range: range(155, 156),
        comment: '오늘 빨리오면 내가 특별히 놀아줄게!'},
       {type: 'cat',
        desc: '',
        query: 'cat156',
        score_range: range(156, 157),
        comment: '흥! 나는 처음보는 사람한테는 인사를 하지 않는다고!'},
       {type: 'cat',
        desc: '',
        query: 'cat157',
        score_range: range(157, 158),
        comment: '뭘 보고 서있어 빨리 들어와!'},
       {type: 'cat',
        desc: '',
        query: 'cat158',
        score_range: range(158, 159),
        comment: '오자마자 왜 귀찮게하는거야!'},
       {type: 'cat',
        desc: '',
        query: 'cat159',
        score_range: range(159, 160),
        comment: '.손에 들고 있는거 혹시 내거?'},
       {type: 'cat',
        desc: '',
        query: 'cat160',
        score_range: range(160, 161),
        comment: '빨리들어와서 나 안아줘야지!'},
       {type: 'cat',
        desc: '',
        query: 'cat161',
        score_range: range(161, 162),
        comment: '손님은 싫다~! 나 자꾸 귀찮게 한단 말이야'},
       {type: 'cat',
        desc: '',
        query: 'cat162',
        score_range: range(162, 163),
        comment: '오우! 나에게 간식을 주러온 사람인가?'},
       {type: 'cat',
        desc: '',
        query: 'cat163',
        score_range: range(163, 164),
        comment: '누추하지만 들어와'},
       {type: 'cat',
        desc: '',
        query: 'cat164',
        score_range: range(164, 165),
        comment: '어째서 빈손인거지??'},
       {type: 'cat',
        desc: '',
        query: 'cat165',
        score_range: range(165, 166),
        comment: '안녕~ 친구들!!'},
       {type: 'cat',
        desc: '',
        query: 'cat166',
        score_range: range(166, 167),
        comment: '왔어?..zZ'},
       {type: 'cat',
        desc: '',
        query: 'cat167',
        score_range: range(167, 168),
        comment: '일찍일찍 좀 다니지??'},
       {type: 'cat',
        desc: '',
        query: 'cat168',
        score_range: range(168, 169),
        comment: '난 아무짓도 안했다고!'},
       {type: 'cat',
        desc: '',
        query: 'cat169',
        score_range: range(169, 170),
        comment: '얼른 들어와서 밥줘 배고파!'},
       {type: 'cat',
        desc: '',
        query: 'cat170',
        score_range: range(170, 171),
        comment: '빨리안들어오면 집을 난장판을 만들거야!'},
       {type: 'cat',
        desc: '',
        query: 'cat171',
        score_range: range(171, 172),
        comment: '내 집사가 드디어 왔군! 이제 일을 시켜볼까? 준비 됐나?'},
       {type: 'cat',
        desc: '',
        query: 'cat172',
        score_range: range(172, 173),
        comment: '밥 다 떨어졌다밥 내놔'},
       {type: 'cat',
        desc: '',
        query: 'cat173',
        score_range: range(173, 174),
        comment: '난 깨끗한 물만 마실거야'},
       {type: 'cat',
        desc: '',
        query: 'cat174',
        score_range: range(174, 175),
        comment: '츄르 주라!!'},
       {type: 'cat',
        desc: '',
        query: 'cat175',
        score_range: range(175, 176),
        comment: '난 캣닢이 좋아~~'},
       {type: 'cat',
        desc: '',
        query: 'cat176',
        score_range: range(176, 177),
        comment: '가다랑어포 먹고싶어!!'},
       {type: 'cat',
        desc: '',
        query: 'cat177',
        score_range: range(177, 178),
        comment: '웩! 맛없어'},
       {type: 'cat',
        desc: '',
        query: 'cat178',
        score_range: range(178, 179),
        comment: '사료 바꿔 이제 질려'},
       {type: 'cat',
        desc: '',
        query: 'cat179',
        score_range: range(179, 180),
        comment: '더워~ 시원한 수박 조금만 먹어볼까?'},
       {type: 'cat',
        desc: '',
        query: 'cat180',
        score_range: range(180, 181),
        comment: '간식줄래 ~ 놀아줄래 ~?'},
       {type: 'cat',
        desc: '',
        query: 'cat181',
        score_range: range(181, 182),
        comment: '입맛없어..나중에 먹을게'},
       {type: 'cat',
        desc: '',
        query: 'cat182',
        score_range: range(182, 183),
        comment: '뭐야~? 이거 완전 맛있잖아!!!!'},
       {type: 'cat',
        desc: '',
        query: 'cat183',
        score_range: range(183, 184),
        comment: '생선좋아하는 줄 알았지? 사실 고기 좋아해><'},
       {type: 'cat',
        desc: '',
        query: 'cat184',
        score_range: range(184, 185),
        comment: '간식 많이 사료 조금 ! ㅇㅋ?'},
       {type: 'cat',
        desc: '',
        query: 'cat185',
        score_range: range(185, 186),
        comment: '생선없어?'},
       {type: 'cat',
        desc: '',
        query: 'cat186',
        score_range: range(186, 187),
        comment: '고기없어?'},
       {type: 'cat',
        desc: '',
        query: 'cat187',
        score_range: range(187, 188),
        comment: '오늘 밥,,맛있었다!!'},
       {type: 'cat',
        desc: '',
        query: 'cat188',
        score_range: range(188, 189),
        comment: '배고파 맛있는거 줘!'},
       {type: 'cat',
        desc: '',
        query: 'cat189',
        score_range: range(189, 190),
        comment: '잘~먹었다! 배불러'},
       {type: 'cat',
        desc: '',
        query: 'cat190',
        score_range: range(190, 191),
        comment: '달달한 과일 먹고싶네~'},
       {type: 'cat',
        desc: '',
        query: 'cat191',
        score_range: range(191, 192),
        comment: '더 줘! 또 줘!'},
       {type: 'cat',
        desc: '',
        query: 'cat192',
        score_range: range(192, 193),
        comment: '너 같으면 이거 먹겠어?'},
       {type: 'cat',
        desc: '',
        query: 'cat193',
        score_range: range(193, 194),
        comment: '사료가 너무 적잖아!'},
       {type: 'cat',
        desc: '',
        query: 'cat194',
        score_range: range(194, 195),
        comment: '같이 밥 먹을까?'},
       {type: 'cat',
        desc: '',
        query: 'cat195',
        score_range: range(195, 196),
        comment: '나는 밥 먹었는데 너는 먹었어?'},
       {type: 'cat',
        desc: '',
        query: 'cat196',
        score_range: range(196, 197),
        comment: '밥보단 츄르지!'},
       {type: 'cat',
        desc: '',
        query: 'cat197',
        score_range: range(197, 198),
        comment: '이번 간식 별로더라~'},
       {type: 'cat',
        desc: '',
        query: 'cat198',
        score_range: range(198, 199),
        comment: '오늘은 츄르보다는 고기간식이 먹고싶어'},
       {type: 'cat',
        desc: '',
        query: 'cat199',
        score_range: range(199, 200),
        comment: '너무 많아 조금 덜어줘'},
       {type: 'cat',
        desc: '',
        query: 'cat200',
        score_range: range(200, 201),
        comment: '배불러 배 터지겠다~'},
       {type: 'cat',
        desc: '',
        query: 'cat201',
        score_range: range(201, 202),
        comment: '빨리 먹고 누워야지'},
       {type: 'cat',
        desc: '',
        query: 'cat202',
        score_range: range(202, 203),
        comment: '나 깨끗한데 왜 씻어야해..?'},
       {type: 'cat',
        desc: '',
        query: 'cat203',
        score_range: range(203, 204),
        comment: '놔랏!!! 나갈 것이야!!!'},
       {type: 'cat',
        desc: '',
        query: 'cat204',
        score_range: range(204, 205),
        comment: '물 너무 차갑다.–ㅅ'},
       {type: 'cat',
        desc: '',
        query: 'cat205',
        score_range: range(205, 206),
        comment: '오 온도 적당해 만족스럽군'},
       {type: 'cat',
        desc: '',
        query: 'cat206',
        score_range: range(206, 207),
        comment: '나 씻으면 너 나한테 뭐해줄건데?'},
       {type: 'cat',
        desc: '',
        query: 'cat207',
        score_range: range(207, 208),
        comment: '씻고 나니까 시원하긴 하구나'},
       {type: 'cat',
        desc: '',
        query: 'cat208',
        score_range: range(208, 209),
        comment: '집사얌.나 무서우니까 꼭 잡고 있어..!'},
       {type: 'cat',
        desc: '',
        query: 'cat209',
        score_range: range(209, 210),
        comment: '최대한 빨리 끝내거라'},
       {type: 'cat',
        desc: '',
        query: 'cat210',
        score_range: range(210, 211),
        comment: '발톱을 자른다고?! 발톱 맛 좀 볼테야?'},
       {type: 'cat',
        desc: '',
        query: 'cat211',
        score_range: range(211, 212),
        comment: '털 한 올 한 올 곱게 말려줘'},
       {type: 'cat',
        desc: '',
        query: 'cat212',
        score_range: range(212, 213),
        comment: '아까 나 그루밍 했는데 또 씻어?'},
       {type: 'cat',
        desc: '',
        query: 'cat213',
        score_range: range(213, 214),
        comment: '몸이 젖어서 너무 춥구나..'},
       {type: 'cat',
        desc: '',
        query: 'cat214',
        score_range: range(214, 215),
        comment: '목욕하기 딱 좋은 날씨구만..ㅎㅎ'},
       {type: 'cat',
        desc: '',
        query: 'cat215',
        score_range: range(215, 216),
        comment: '씻고 나오면 츄르 한사바리 해야지~'},
       {type: 'cat',
        desc: '',
        query: 'cat216',
        score_range: range(216, 217),
        comment: '봤지? 나 살찐 게 아니라 털 찐 거라니까 ^_^'},
       {type: 'cat',
        desc: '',
        query: 'cat217',
        score_range: range(217, 218),
        comment: '물에 들어가기 싫어!!'},
       {type: 'cat',
        desc: '',
        query: 'cat218',
        score_range: range(218, 219),
        comment: '쎄하다.오늘 목욕을 당할 것만 같아!!!'},
       {type: 'cat',
        desc: '',
        query: 'cat219',
        score_range: range(219, 220),
        comment: '이제 마무리는 내가 알아서 할게'},
       {type: 'cat',
        desc: '',
        query: 'cat220',
        score_range: range(220, 221),
        comment: '으어어 따뜻하다~~'},
       {type: 'cat',
        desc: '',
        query: 'cat221',
        score_range: range(221, 222),
        comment: '물놀이 좀 재밌네?'},
       {type: 'cat',
        desc: '',
        query: 'cat222',
        score_range: range(222, 223),
        comment: '오 오늘 거품 좀 잘 냈나봐~? 부드럽네'},
       {type: 'cat',
        desc: '',
        query: 'cat223',
        score_range: range(223, 224),
        comment: '지금 씻고 싶은 기분 아니다…'},
       {type: 'cat',
        desc: '',
        query: 'cat224',
        score_range: range(224, 225),
        comment: '목 마르다… 물 좀!'},
       {type: 'cat',
        desc: '',
        query: 'cat225',
        score_range: range(225, 226),
        comment: '물에서 이상한 냄새 나는데?'},
       {type: 'cat',
        desc: '',
        query: 'cat226',
        score_range: range(226, 227),
        comment: '씻은 김에 발톱도 좀 잘라줘!'},
       {type: 'cat',
        desc: '',
        query: 'cat227',
        score_range: range(227, 228),
        comment: '집사자식.가만 두지 않겠어… 부들부들'},
       {type: 'cat',
        desc: '',
        query: 'cat228',
        score_range: range(228, 229),
        comment: '손이 좀 거칠다..? 부드럽게 씻겨라'},
       {type: 'cat',
        desc: '',
        query: 'cat229',
        score_range: range(229, 230),
        comment: '얼른 씻고 누워있고 싶어!'},
       {type: 'cat',
        desc: '',
        query: 'cat230',
        score_range: range(230, 231),
        comment: '노곤노곤하네.조오타~!'},
       {type: 'cat',
        desc: '',
        query: 'cat231',
        score_range: range(231, 232),
        comment: '카악! 귀에 물 들어갔잖아!!!'},
       {type: 'cat',
        desc: '',
        query: 'cat232',
        score_range: range(232, 233),
        comment: '집사야난 너가 행복하길 바래!'},
       {type: 'cat',
        desc: '',
        query: 'cat233',
        score_range: range(233, 234),
        comment: '이것 봐! 너 주려고 가져왔어!'},
       {type: 'cat',
        desc: '',
        query: 'cat234',
        score_range: range(234, 235),
        comment: '나랑 놀아주는 너가 최고야!'},
       {type: 'cat',
        desc: '',
        query: 'cat235',
        score_range: range(235, 236),
        comment: '기분이 안좋아보여.나랑 공가지고 놀까?'},
       {type: 'cat',
        desc: '',
        query: 'cat236',
        score_range: range(236, 237),
        comment: '오늘은 너에게 츄르를 양보한다!'},
       {type: 'cat',
        desc: '',
        query: 'cat237',
        score_range: range(237, 238),
        comment: '무슨 일 있어? 내가 꾹꾹이 해줄게'},
       {type: 'cat',
        desc: '',
        query: 'cat238',
        score_range: range(238, 239),
        comment: '집사가 있어서 난 너무 행복해!'},
       {type: 'cat',
        desc: '',
        query: 'cat239',
        score_range: range(239, 240),
        comment: '내가 너한테 힘이 됐으면 좋겠어!'},
       {type: 'cat',
        desc: '',
        query: 'cat240',
        score_range: range(240, 241),
        comment: '비닐소리 들어봐 기분 좋아질걸?'},
       {type: 'cat',
        desc: '',
        query: 'cat241',
        score_range: range(241, 242),
        comment: '오늘은 내가 특별히 놀아준다!'},
       {type: 'cat',
        desc: '',
        query: 'cat242',
        score_range: range(242, 243),
        comment: '집사야 오늘은 좀 쉬어도 괜찮아'},
       {type: 'cat',
        desc: '',
        query: 'cat243',
        score_range: range(243, 244),
        comment: '혼자 있고 싶으면 내가 비켜줄게..!'},
       {type: 'cat',
        desc: '',
        query: 'cat244',
        score_range: range(244, 245),
        comment: '오늘 하루도 고생많았어!'},
       {type: 'cat',
        desc: '',
        query: 'cat245',
        score_range: range(245, 246),
        comment: '우울하면 나처럼 꼬리를 흔들어봐~'},
       {type: 'cat',
        desc: '',
        query: 'cat246',
        score_range: range(246, 247),
        comment: '오늘은 배 만지는거 허락해줄게!'},
       {type: 'cat',
        desc: '',
        query: 'cat247',
        score_range: range(247, 248),
        comment: '내가 있는데 우울해할거야?'},
       {type: 'cat',
        desc: '',
        query: 'cat248',
        score_range: range(248, 249),
        comment: '나를 봐! 이렇게 귀여운데 우울하다구?'},
       {type: 'cat',
        desc: '',
        query: 'cat249',
        score_range: range(249, 250),
        comment: '넌 이미 충분히 멋있는 사람이야!'},
       {type: 'cat',
        desc: '',
        query: 'cat250',
        score_range: range(250, 251),
        comment: '나한테는 너가 최고인걸?'},
       {type: 'cat',
        desc: '',
        query: 'cat251',
        score_range: range(251, 252),
        comment: '오늘 하루도 고생많았어'},
       {type: 'cat',
        desc: '',
        query: 'cat252',
        score_range: range(252, 253),
        comment: '제일 아끼는 생선 줄게기분풀어~'},
       {type: 'cat',
        desc: '',
        query: 'cat253',
        score_range: range(253, 254),
        comment: '내 핑크 젤리 만져볼래?'},
       {type: 'cat',
        desc: '',
        query: 'cat254',
        score_range: range(254, 255),
        comment: '맛있는거 먹으면 기분이 좀 나아질거야!'},
       {type: 'cat',
        desc: '',
        query: 'cat255',
        score_range: range(255, 256),
        comment: '답답할 때는 이쁜 하늘을 봐!'},
       {type: 'cat',
        desc: '',
        query: 'cat256',
        score_range: range(256, 257),
        comment: '슬프면 나한테 기대도 돼'},
       {type: 'cat',
        desc: '',
        query: 'cat257',
        score_range: range(257, 258),
        comment: '힘들어보이네.내가 얘기 들어줄게!'},
       {type: 'cat',
        desc: '',
        query: 'cat258',
        score_range: range(258, 259),
        comment: '나랑 놀다보면 기분좋아질걸?!'},
       {type: 'cat',
        desc: '',
        query: 'cat259',
        score_range: range(259, 260),
        comment: '힘내라고 꾹꾹이 열심히 해주는중!'},
       {type: 'cat',
        desc: '',
        query: 'cat260',
        score_range: range(260, 261),
        comment: '언제나 난 너 편이야'},
       {type: 'cat',
        desc: '',
        query: 'cat261',
        score_range: range(261, 262),
        comment: '앞으로 좋은 일이 많이 생길거야!'},
       {type: 'dog',
        desc: '',
        query: 'dog1',
        score_range: range(1, 2),
        comment: '잠깐만 기다려봐! 무슨냄새나는데 ?'},
       {type: 'dog',
        desc: '',
        query: 'dog2',
        score_range: range(2, 3),
        comment: '얼른 산책나가자~ 날씨가 너무 좋아!'},
       {type: 'dog',
        desc: '',
        query: 'dog3',
        score_range: range(3, 4),
        comment: '오~저 개 이쁜데~ 저쪽으로 가면 안돼??'},
       {type: 'dog',
        desc: '',
        query: 'dog4',
        score_range: range(4, 5),
        comment: '이 친구들 재밌는데 좀만 더 놀다가면 안돼?'},
       {type: 'dog',
        desc: '',
        query: 'dog5',
        score_range: range(5, 6),
        comment: '오늘 색다른 산책코스로 가고 싶어!'},
       {type: 'dog',
        desc: '',
        query: 'dog6',
        score_range: range(6, 7),
        comment: '목말라! 물마시고싶어!'},
       {type: 'dog',
        desc: '',
        query: 'dog7',
        score_range: range(7, 8),
        comment: '앗 잠깐만! 쉬야좀 할게!'},
       {type: 'dog',
        desc: '',
        query: 'dog8',
        score_range: range(8, 9),
        comment: '엇 무슨냄새지? 맛있는 냄새닷'},
       {type: 'dog',
        desc: '',
        query: 'dog9',
        score_range: range(9, 10),
        comment: '이제 힘든데 ~ 집에 들어가자!'},
       {type: 'dog',
        desc: '',
        query: 'dog10',
        score_range: range(10, 11),
        comment: '저게 뭐지? 뭐가 있는데'},
       {type: 'dog',
        desc: '',
        query: 'dog11',
        score_range: range(11, 12),
        comment: '나 먼저 뛰어간다! 달리고싶어!'},
       {type: 'dog',
        desc: '',
        query: 'dog12',
        score_range: range(12, 13),
        comment: '빨리와!~어서가자!'},
       {type: 'dog',
        desc: '',
        query: 'dog13',
        score_range: range(13, 14),
        comment: '나도 사람처럼 걷고싶어 손잡고 같이 걷고싶어!'},
       {type: 'dog',
        desc: '',
        query: 'dog14',
        score_range: range(14, 15),
        comment: '안아줘 꼭 안아줘!'},
       {type: 'dog',
        desc: '',
        query: 'dog15',
        score_range: range(15, 16),
        comment: '모래 파고 갈랭'},
       {type: 'dog',
        desc: '',
        query: 'dog16',
        score_range: range(16, 17),
        comment: '잠깐 쉬었다갈래!'},
       {type: 'dog',
        desc: '',
        query: 'dog17',
        score_range: range(17, 18),
        comment: '오늘 저녁 뭐먹을지 기대 되는데?'},
       {type: 'dog',
        desc: '',
        query: 'dog18',
        score_range: range(18, 19),
        comment: '저기 친구들 많이 모인데 가보고싶어!'},
       {type: 'dog',
        desc: '',
        query: 'dog19',
        score_range: range(19, 20),
        comment: '앗 저 개 무서워! 돌아서 가자!'},
       {type: 'dog',
        desc: '',
        query: 'dog20',
        score_range: range(20, 21),
        comment: '만세 만세 만세~~신난다~'},
       {type: 'dog',
        desc: '',
        query: 'dog21',
        score_range: range(21, 22),
        comment: '나 오늘 좀 기분 안좋으니까 건들지마'},
       {type: 'dog',
        desc: '',
        query: 'dog22',
        score_range: range(22, 23),
        comment: '기분이 꿀꿀하니 간식을 좀 줄래?'},
       {type: 'dog',
        desc: '',
        query: 'dog23',
        score_range: range(23, 24),
        comment: '오늘 너무 신이난다 신이나!'},
       {type: 'dog',
        desc: '',
        query: 'dog24',
        score_range: range(24, 25),
        comment: '무서운 꿈 꾼 것 같아 너무 무떠어어ㅜㅜ'},
       {type: 'dog',
        desc: '',
        query: 'dog25',
        score_range: range(25, 26),
        comment: '지금 너무 행복한 느낌! 헤헤헿'},
       {type: 'dog',
        desc: '',
        query: 'dog26',
        score_range: range(26, 27),
        comment: '궁금해요! 궁금해!'},
       {type: 'dog',
        desc: '',
        query: 'dog27',
        score_range: range(27, 28),
        comment: '너무 좋아!'},
       {type: 'dog',
        desc: '',
        query: 'dog28',
        score_range: range(28, 29),
        comment: '나한테 관심 좀 주라!!!! 주!!!!!'},
       {type: 'dog',
        desc: '',
        query: 'dog29',
        score_range: range(29, 30),
        comment: '하루종일 혼자 심심했어! ㅜㅜ'},
       {type: 'dog',
        desc: '',
        query: 'dog30',
        score_range: range(30, 31),
        comment: '예뻐해줄래?'},
       {type: 'dog',
        desc: '',
        query: 'dog31',
        score_range: range(31, 32),
        comment: '저 귀엽죠? 사랑스럽죠?!'},
       {type: 'dog',
        desc: '',
        query: 'dog32',
        score_range: range(32, 33),
        comment: '음.....'},
       {type: 'dog',
        desc: '',
        query: 'dog33',
        score_range: range(33, 34),
        comment: '오늘 왜 그러세여?'},
       {type: 'dog',
        desc: '',
        query: 'dog34',
        score_range: range(34, 35),
        comment: '저 좀 그냥 두세요 줴발'},
       {type: 'dog',
        desc: '',
        query: 'dog35',
        score_range: range(35, 36),
        comment: '왤케 짜증이 나는거여?'},
       {type: 'dog',
        desc: '',
        query: 'dog36',
        score_range: range(36, 37),
        comment: '그므해라...ㅂㄷㅂㄷ'},
       {type: 'dog',
        desc: '',
        query: 'dog37',
        score_range: range(37, 38),
        comment: '화난다 진짜ㅡㅡ'},
       {type: 'dog',
        desc: '',
        query: 'dog38',
        score_range: range(38, 39),
        comment: '사랑스러워여><'},
       {type: 'dog',
        desc: '',
        query: 'dog39',
        score_range: range(39, 40),
        comment: '왜이리 기분이 다운 되는 걸까요?'},
       {type: 'dog',
        desc: '',
        query: 'dog40',
        score_range: range(40, 41),
        comment: '아유 지루해 증말'},
       {type: 'dog',
        desc: '',
        query: 'dog41',
        score_range: range(41, 42),
        comment: '근들즈므르...'},
       {type: 'dog',
        desc: '',
        query: 'dog42',
        score_range: range(42, 43),
        comment: '뭐 시키려면 간식을 가져와라 주인아'},
       {type: 'dog',
        desc: '',
        query: 'dog43',
        score_range: range(43, 44),
        comment: '나 가만 놔두는 게 좋을텐데'},
       {type: 'dog',
        desc: '',
        query: 'dog44',
        score_range: range(44, 45),
        comment: '한심하다..ㅎ'},
       {type: 'dog',
        desc: '',
        query: 'dog45',
        score_range: range(45, 46),
        comment: '장난치지마라 혼난다'},
       {type: 'dog',
        desc: '',
        query: 'dog46',
        score_range: range(46, 47),
        comment: '응~ 아니야'},
       {type: 'dog',
        desc: '',
        query: 'dog47',
        score_range: range(47, 48),
        comment: '해보자는 거야?'},
       {type: 'dog',
        desc: '',
        query: 'dog48',
        score_range: range(48, 49),
        comment: '귀찮게하네 진짜^_^'},
       {type: 'dog',
        desc: '',
        query: 'dog49',
        score_range: range(49, 50),
        comment: '됐어! 그만해!'},
       {type: 'dog',
        desc: '',
        query: 'dog50',
        score_range: range(50, 51),
        comment: '왜 옆에서 더 난리여'},
       {type: 'dog',
        desc: '',
        query: 'dog51',
        score_range: range(51, 52),
        comment: '에휴 (절레절레)'},
       {type: 'dog',
        desc: '',
        query: 'dog52',
        score_range: range(52, 53),
        comment: '왜 또 저러니'},
       {type: 'dog',
        desc: '',
        query: 'dog53',
        score_range: range(53, 54),
        comment: '나 좀 내버려 두면 안되겠니?'},
       {type: 'dog',
        desc: '',
        query: 'dog54',
        score_range: range(54, 55),
        comment: '아 짜증나!'},
       {type: 'dog',
        desc: '',
        query: 'dog55',
        score_range: range(55, 56),
        comment: '에헤이 거기 스탑! 가까이 오지마'},
       {type: 'dog',
        desc: '',
        query: 'dog56',
        score_range: range(56, 57),
        comment: '니가 내 맘을 알겠니..'},
       {type: 'dog',
        desc: '',
        query: 'dog57',
        score_range: range(57, 58),
        comment: '시끄러워'},
       {type: 'dog',
        desc: '',
        query: 'dog58',
        score_range: range(58, 59),
        comment: '싫다고 했잖아'},
       {type: 'dog',
        desc: '',
        query: 'dog59',
        score_range: range(59, 60),
        comment: '나 부르지마라 제발 부르지마라'},
       {type: 'dog',
        desc: '',
        query: 'dog60',
        score_range: range(60, 61),
        comment: '됐냐...'},
       {type: 'dog',
        desc: '',
        query: 'dog61',
        score_range: range(61, 62),
        comment: '자고 싶다!!'},
       {type: 'dog',
        desc: '',
        query: 'dog62',
        score_range: range(62, 63),
        comment: '혼자 있게 해줘!'},
       {type: 'dog',
        desc: '',
        query: 'dog63',
        score_range: range(63, 64),
        comment: '저리가줘 !'},
       {type: 'dog',
        desc: '',
        query: 'dog64',
        score_range: range(64, 65),
        comment: '친구들 만나고 싶어!'},
       {type: 'dog',
        desc: '',
        query: 'dog65',
        score_range: range(65, 66),
        comment: '나한테서 떨어지지 마!'},
       {type: 'dog',
        desc: '',
        query: 'dog66',
        score_range: range(66, 67),
        comment: '같이 놀자!!'},
       {type: 'dog',
        desc: '',
        query: 'dog67',
        score_range: range(67, 68),
        comment: '나가서 놀고싶어!'},
       {type: 'dog',
        desc: '',
        query: 'dog68',
        score_range: range(68, 69),
        comment: '문 열어줘!'},
       {type: 'dog',
        desc: '',
        query: 'dog69',
        score_range: range(69, 70),
        comment: '맨날 나랑 같이 있자!'},
       {type: 'dog',
        desc: '',
        query: 'dog70',
        score_range: range(70, 71),
        comment: '어디가면 안돼!'},
       {type: 'dog',
        desc: '',
        query: 'dog71',
        score_range: range(71, 72),
        comment: '나 혼자 두면 안돼'},
       {type: 'dog',
        desc: '',
        query: 'dog72',
        score_range: range(72, 73),
        comment: '집에 나 혼자 있으면 집이 어떻게 되어있는지 두고봐!'},
       {type: 'dog',
        desc: '',
        query: 'dog73',
        score_range: range(73, 74),
        comment: '장난 치기만 해봐 나 화낼꺼야'},
       {type: 'dog',
        desc: '',
        query: 'dog74',
        score_range: range(74, 75),
        comment: '장난감 가져와서 나랑 놀자'},
       {type: 'dog',
        desc: '',
        query: 'dog75',
        score_range: range(75, 76),
        comment: '내눈 똑바로 봐바'},
       {type: 'dog',
        desc: '',
        query: 'dog76',
        score_range: range(76, 77),
        comment: '나 좀 쓰다듬어줘'},
       {type: 'dog',
        desc: '',
        query: 'dog77',
        score_range: range(77, 78),
        comment: '배변 패드좀 새로운걸로 갈아줘봐'},
       {type: 'dog',
        desc: '',
        query: 'dog78',
        score_range: range(78, 79),
        comment: '좀 뛰고싶은데 뛰게 해줘!'},
       {type: 'dog',
        desc: '',
        query: 'dog79',
        score_range: range(79, 80),
        comment: '친구 좀 만들어 줄 수 있어 ?'},
       {type: 'dog',
        desc: '',
        query: 'dog80',
        score_range: range(80, 81),
        comment: '난 사람이야!! 우린 똑같은 입장이야'},
       {type: 'dog',
        desc: '',
        query: 'dog81',
        score_range: range(81, 82),
        comment: '내이름 다른걸로 바꿔줘'},
       {type: 'dog',
        desc: '',
        query: 'dog82',
        score_range: range(82, 83),
        comment: '시원한 물 한사바리 하고싶어'},
       {type: 'dog',
        desc: '',
        query: 'dog83',
        score_range: range(83, 84),
        comment: '패드좀 바꿔줘 자꾸 오줌밟잖아.근데 밟으면 혼낼거잖아.생각해보니 짜증나네'},
       {type: 'dog',
        desc: '',
        query: 'dog84',
        score_range: range(84, 85),
        comment: '나 똥먹고 왔어 주인 핥아도 돼?'},
       {type: 'dog',
        desc: '',
        query: 'dog85',
        score_range: range(85, 86),
        comment: '내 똥엔 영혼이 깃들어있지..’강아지똥’ 치울 때 눈 안마주치게 조심하라구.'},
       {type: 'dog',
        desc: '',
        query: 'dog86',
        score_range: range(86, 87),
        comment: '왜이렇게 소화가 안되지?'},
       {type: 'dog',
        desc: '',
        query: 'dog87',
        score_range: range(87, 88),
        comment: '오줌 마렵다 근데 난 참을 것 이다.'},
       {type: 'dog',
        desc: '',
        query: 'dog88',
        score_range: range(88, 89),
        comment: '똥 마렵다 근데 난 참을 것 이다.'},
       {type: 'dog',
        desc: '',
        query: 'dog89',
        score_range: range(89, 90),
        comment: '왜 항상 똥에서는 좋은 냄새가 나지? 먹고싶게'},
       {type: 'dog',
        desc: '',
        query: 'dog90',
        score_range: range(90, 91),
        comment: '나 배변 잘하잖아 칭찬좀 해줘.'},
       {type: 'dog',
        desc: '',
        query: 'dog91',
        score_range: range(91, 92),
        comment: '내가 배변패드에 오줌을 안싼건.내가 화났다는 뜻이야..'},
       {type: 'dog',
        desc: '',
        query: 'dog92',
        score_range: range(92, 93),
        comment: '밥먹었으니 슬슬 배설을 준비해볼까?'},
       {type: 'dog',
        desc: '',
        query: 'dog93',
        score_range: range(93, 94),
        comment: '근데 나 똥쌀 때 좀 안쳐다봤으면 좋겠어 진지해!'},
       {type: 'dog',
        desc: '',
        query: 'dog94',
        score_range: range(94, 95),
        comment: '날 화나게 하지마 집 어딘가에 똥을 숨겨버릴테니까..'},
       {type: 'dog',
        desc: '',
        query: 'dog95',
        score_range: range(95, 96),
        comment: '산책가서 햇빛받으면서 시원하게 배설하고 싶어물론 산책가고 싶어서 이러는건 아니야'},
       {type: 'dog',
        desc: '',
        query: 'dog96',
        score_range: range(96, 97),
        comment: '아니 내 배변패드에서 왜 다른 녀석 냄새가 나는거지?'},
       {type: 'dog',
        desc: '',
        query: 'dog97',
        score_range: range(97, 98),
        comment: '내 방구가 언제나온다고 생각하나? 배아플 때? 아니야 똥쌀 때? 아니야 바로 너가 잠들기 직전이다!'},
       {type: 'dog',
        desc: '',
        query: 'dog98',
        score_range: range(98, 99),
        comment: '새로운 밥이 나랑 좀 안맞는 거 같은데? 똥싸기가 조금 힘들어.'},
       {type: 'dog',
        desc: '',
        query: 'dog99',
        score_range: range(99, 100),
        comment: '내 똥 냄새를 얼굴 표정으로 표현해주라'},
       {type: 'dog',
        desc: '',
        query: 'dog100',
        score_range: range(100, 101),
        comment: '오늘은 신발장에 오줌싸서 주인을 즐겁게 해줘야지~'},
       {type: 'dog',
        desc: '',
        query: 'dog101',
        score_range: range(101, 102),
        comment: '이제부터 배변패드 정 가운데에 정확히 배설을 하도록 하겠습니다간식주십쇼.'},
       {type: 'dog',
        desc: '',
        query: 'dog102',
        score_range: range(102, 103),
        comment: '밥줘 똥싸게'},
       {type: 'dog',
        desc: '',
        query: 'dog103',
        score_range: range(103, 104),
        comment: '밥이 이게 뭐니?'},
       {type: 'dog',
        desc: '',
        query: 'dog104',
        score_range: range(104, 105),
        comment: '고기없어?'},
       {type: 'dog',
        desc: '',
        query: 'dog105',
        score_range: range(105, 106),
        comment: '뭐해? 밥내놔'},
       {type: 'dog',
        desc: '',
        query: 'dog106',
        score_range: range(106, 107),
        comment: '이걸 밥이라고 준거야 ? 맛없어 !'},
       {type: 'dog',
        desc: '',
        query: 'dog107',
        score_range: range(107, 108),
        comment: '이번 사료 최고야!! 너무 맛있어 ><'},
       {type: 'dog',
        desc: '',
        query: 'dog108',
        score_range: range(108, 109),
        comment: '시원한 물 먹고싶어'},
       {type: 'dog',
        desc: '',
        query: 'dog109',
        score_range: range(109, 110),
        comment: '밥 먹을땐 개도 안건드린다는데_+'},
       {type: 'dog',
        desc: '',
        query: 'dog110',
        score_range: range(110, 111),
        comment: '뭐 먹어? 나도 주라~~'},
       {type: 'dog',
        desc: '',
        query: 'dog111',
        score_range: range(111, 112),
        comment: '야채 싫어!'},
       {type: 'dog',
        desc: '',
        query: 'dog112',
        score_range: range(112, 113),
        comment: '오늘 메뉴는 뭐야?'},
       {type: 'dog',
        desc: '',
        query: 'dog113',
        score_range: range(113, 114),
        comment: '반찬 없어??'},
       {type: 'dog',
        desc: '',
        query: 'dog114',
        score_range: range(114, 115),
        comment: '간식 먹고 싶어'},
       {type: 'dog',
        desc: '',
        query: 'dog115',
        score_range: range(115, 116),
        comment: '너만 입이냐 나도 맛있는거 줘!!'},
       {type: 'dog',
        desc: '',
        query: 'dog116',
        score_range: range(116, 117),
        comment: '고기만 줘 고기!고기!!'},
       {type: 'dog',
        desc: '',
        query: 'dog117',
        score_range: range(117, 118),
        comment: '아 배부르다~~'},
       {type: 'dog',
        desc: '',
        query: 'dog118',
        score_range: range(118, 119),
        comment: '달달한게 땡겨~~!'},
       {type: 'dog',
        desc: '',
        query: 'dog119',
        score_range: range(119, 120),
        comment: '배고파!!'},
       {type: 'dog',
        desc: '',
        query: 'dog120',
        score_range: range(120, 121),
        comment: '엥? 이게 뭐야 누구 코에 붙여 ㅡㅡ'},
       {type: 'dog',
        desc: '',
        query: 'dog121',
        score_range: range(121, 122),
        comment: '사료 바꿔라~ 질린다'},
       {type: 'dog',
        desc: '',
        query: 'dog122',
        score_range: range(122, 123),
        comment: '안 뱉을거야! 뱉기 싫어!!'},
       {type: 'dog',
        desc: '',
        query: 'dog123',
        score_range: range(123, 124),
        comment: '입맛없어 안먹을래.'},
       {type: 'dog',
        desc: '',
        query: 'dog124',
        score_range: range(124, 125),
        comment: '힘들고 답답할떈? 나랑 공원산책가자!'},
       {type: 'dog',
        desc: '',
        query: 'dog125',
        score_range: range(125, 126),
        comment: '슬프면 나한테 기대!'},
       {type: 'dog',
        desc: '',
        query: 'dog126',
        score_range: range(126, 127),
        comment: '오늘 하루도 고생많았어~'},
       {type: 'dog',
        desc: '',
        query: 'dog127',
        score_range: range(127, 128),
        comment: '괜찮아? 내가 아끼는 장난감 줄게 힘내ㅠㅠ'},
       {type: 'dog',
        desc: '',
        query: 'dog128',
        score_range: range(128, 129),
        comment: '무슨일이야! 데꼬와 내가 혼내줄거야!!'},
       {type: 'dog',
        desc: '',
        query: 'dog129',
        score_range: range(129, 130),
        comment: '누가 그랬는데..힘들땐 시간이 약이래'},
       {type: 'dog',
        desc: '',
        query: 'dog130',
        score_range: range(130, 131),
        comment: '내 표정 좀 봐! 웃기지? 귀엽지~?'},
       {type: 'dog',
        desc: '',
        query: 'dog131',
        score_range: range(131, 132),
        comment: '우울하면 나랑 달리기 시합하러 나갈까?!'},
       {type: 'dog',
        desc: '',
        query: 'dog132',
        score_range: range(132, 133),
        comment: '주인 곁엔 내가 있잖아! 힘!'},
       {type: 'dog',
        desc: '',
        query: 'dog133',
        score_range: range(133, 134),
        comment: '괜찮아앞으로 좋은 일이 더 많을거야'},
       {type: 'dog',
        desc: '',
        query: 'dog134',
        score_range: range(134, 135),
        comment: '울고 싶을 땐 울어도 괜찮아!'},
       {type: 'dog',
        desc: '',
        query: 'dog135',
        score_range: range(135, 136),
        comment: '주인한테 내가 위로가 됐음 좋겠다'},
       {type: 'dog',
        desc: '',
        query: 'dog136',
        score_range: range(136, 137),
        comment: '얼굴 찌푸리지 말아용~ 내가 있잖아!'},
       {type: 'dog',
        desc: '',
        query: 'dog137',
        score_range: range(137, 138),
        comment: '맛있는거 먹으면 기분이 좀 나아질거야!'},
       {type: 'dog',
        desc: '',
        query: 'dog138',
        score_range: range(138, 139),
        comment: '무슨일 있어? 내가 다 들어줄게!'},
       {type: 'dog',
        desc: '',
        query: 'dog139',
        score_range: range(139, 140),
        comment: '걱정마, 충분히 잘하고 있어'},
       {type: 'dog',
        desc: '',
        query: 'dog140',
        score_range: range(140, 141),
        comment: '난 주인이가 있어서 너무 행복한걸?'},
       {type: 'dog',
        desc: '',
        query: 'dog141',
        score_range: range(141, 142),
        comment: '나한테는 주인이가 최고야! 제일 소중해'},
       {type: 'dog',
        desc: '',
        query: 'dog142',
        score_range: range(142, 143),
        comment: '응원할게 내일도 화이팅!'},
       {type: 'dog',
        desc: '',
        query: 'dog143',
        score_range: range(143, 144),
        comment: '기운내, 주인은 이미 멋있는 사람이야'},
       {type: 'dog',
        desc: '',
        query: 'dog144',
        score_range: range(144, 145),
        comment: '안녕!안녕!'},
       {type: 'dog',
        desc: '',
        query: 'dog145',
        score_range: range(145, 146),
        comment: '왜 이제야 왔어~~!!나 빨리 안아줘!'},
       {type: 'dog',
        desc: '',
        query: 'dog146',
        score_range: range(146, 147),
        comment: '빨리갔다와!!'},
       {type: 'dog',
        desc: '',
        query: 'dog147',
        score_range: range(147, 148),
        comment: '왔어?!놀자! 놀자!'},
       {type: 'dog',
        desc: '',
        query: 'dog148',
        score_range: range(148, 149),
        comment: '지금 시간이 몇시지?'},
       {type: 'dog',
        desc: '',
        query: 'dog149',
        score_range: range(149, 150),
        comment: '나 두고 가지마 ㅠㅠ'},
       {type: 'dog',
        desc: '',
        query: 'dog150',
        score_range: range(150, 151),
        comment: '잘갔다와!'},
       {type: 'dog',
        desc: '',
        query: 'dog151',
        score_range: range(151, 152),
        comment: '조심히다녀와!'},
       {type: 'dog',
        desc: '',
        query: 'dog152',
        score_range: range(152, 153),
        comment: '야호~왔다왔어!!!신난다! 놀아줘!'},
       {type: 'dog',
        desc: '',
        query: 'dog153',
        score_range: range(153, 154),
        comment: '안녕하세요!'},
       {type: 'dog',
        desc: '',
        query: 'dog154',
        score_range: range(154, 155),
        comment: '누구신데 절 쓰다듬죠?'},
       {type: 'dog',
        desc: '',
        query: 'dog155',
        score_range: range(155, 156),
        comment: '반가워요!'},
       {type: 'dog',
        desc: '',
        query: 'dog156',
        score_range: range(156, 157),
        comment: '올때 메로나맛 간식!'},
       {type: 'dog',
        desc: '',
        query: 'dog157',
        score_range: range(157, 158),
        comment: '잘잤어?'},
       {type: 'dog',
        desc: '',
        query: 'dog158',
        score_range: range(158, 159),
        comment: '.......(무시)'},
       {type: 'dog',
        desc: '',
        query: 'dog159',
        score_range: range(159, 160),
        comment: '.......(절레절레)'},
       {type: 'dog',
        desc: '',
        query: 'dog160',
        score_range: range(160, 161),
        comment: '일어나!'},
       {type: 'dog',
        desc: '',
        query: 'dog161',
        score_range: range(161, 162),
        comment: '친구야!! 안녕!!'},
       {type: 'dog',
        desc: '',
        query: 'dog162',
        score_range: range(162, 163),
        comment: '어서와!! 나 에게 간식하나 씩주는 건 필수애!'},
       {type: 'dog',
        desc: '',
        query: 'dog163',
        score_range: range(163, 164),
        comment: '손에 든거 뭐야~? 나주려고 사온거야~?'},
       {type: 'dog',
        desc: '',
        query: 'dog164',
        score_range: range(164, 165),
        comment: '잘 다녀왔어~~? 오늘 하루도 수고많았어!'},
       {type: 'dog',
        desc: '',
        query: 'dog165',
        score_range: range(165, 166),
        comment: '씻기 싫어! 나를 놔줘!'},
       {type: 'dog',
        desc: '',
        query: 'dog166',
        score_range: range(166, 167),
        comment: '씻는거 오늘은 재밌네!!'},
       {type: 'dog',
        desc: '',
        query: 'dog167',
        score_range: range(167, 168),
        comment: '이건 무슨 냄새지?'},
       {type: 'dog',
        desc: '',
        query: 'dog168',
        score_range: range(168, 169),
        comment: '물에 들어가기 무서워!...'},
       {type: 'dog',
        desc: '',
        query: 'dog169',
        score_range: range(169, 170),
        comment: '얼른 다 씻고 놀고 싶어!'},
       {type: 'dog',
        desc: '',
        query: 'dog170',
        score_range: range(170, 171),
        comment: '지금 난 너무 긴장했어! ㅠㅠ'},
       {type: 'dog',
        desc: '',
        query: 'dog171',
        score_range: range(171, 172),
        comment: '너무 거칠어! 부드럽게 씻겨줘~'},
       {type: 'dog',
        desc: '',
        query: 'dog172',
        score_range: range(172, 173),
        comment: '지금 너무 행복해!'},
       {type: 'dog',
        desc: '',
        query: 'dog173',
        score_range: range(173, 174),
        comment: '씻기에는 지금 너무 피곤해!...'},
       {type: 'dog',
        desc: '',
        query: 'dog174',
        score_range: range(174, 175),
        comment: '물에서 이상한 냄새가 나 ㅠㅠ'},
       {type: 'dog',
        desc: '',
        query: 'dog175',
        score_range: range(175, 176),
        comment: '몸이 젖어서 너무 추워 ㅠㅠ'},
       {type: 'dog',
        desc: '',
        query: 'dog176',
        score_range: range(176, 177),
        comment: '씻는 김에 발톱도 잘라줘!'},
       {type: 'dog',
        desc: '',
        query: 'dog177',
        score_range: range(177, 178),
        comment: '지금 씻고 싶은 기분 아니다...'},
       {type: 'dog',
        desc: '',
        query: 'dog178',
        score_range: range(178, 179),
        comment: '씻고 나면 간식 줄거야??'},
       {type: 'dog',
        desc: '',
        query: 'dog179',
        score_range: range(179, 180),
        comment: '같이 물장구 치며 놀자!!'},
       {type: 'dog',
        desc: '',
        query: 'dog180',
        score_range: range(180, 181),
        comment: '씻고 나니 너무 시원해!'},
       {type: 'dog',
        desc: '',
        query: 'dog181',
        score_range: range(181, 182),
        comment: '얼른 따뜻하게 몸을 말려줘~'},
       {type: 'dog',
        desc: '',
        query: 'dog182',
        score_range: range(182, 183),
        comment: '지금 너무 목이 말라...'},
       {type: 'dog',
        desc: '',
        query: 'dog183',
        score_range: range(183, 184),
        comment: '졸려.ZZZZZZ...'}]
    },
    // dogSoundsEng
    {
        info : {
            mainTitle:"Dog Sound Translator",
            subTitle:"If you want to know all the sound of my dog?",
            mainUrl:"dogSoundsEng",
            scoreType:"DogSounds",
            mainImage:"https://images.ktestone.com/introImages/dogSoundsEng-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/dogSoundsEng-thumb.png",
            lang:"Eng"
        },
        questions:[
            {
                question: '데이트 전 날 나의 모습은?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '나가기 직전 마음에 드는 옷을 입는다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '자기 전 머릿속으로 나의 스타일링을 생각하고 잔다.'
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '전 날 머리부터 발끝까지 스타일링과 옷을 미리 준비한다.'
                    },
                ],
            },
            {
                question: "갑자기 자취방에 놀러 온다는 애인!\n그때의 나는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "아아... 왜 갑자기 오는 거야?! 보이는 곳만 치워 둔다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "모아둔 쓰레기를 버리고 바로 청소를 시작한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 미리미리 해 두었기 때문에 바로 주소를 보낸다."
                    },
                ]
            },
            {
                question: "좋아하는 이성이 생겼을 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "상대의 SNS을 탐방하며, 미래의 우리 모습을 상상해본다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "좋아하는 이성의 친구에게 도움을 요청한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "먼저 연락할 거리를 만들며 적극적으로 대시한다."
                    },
                ]
            },
            {
                question: "카페 안에 이상형인 사람과 계속 눈이 마주친다.\n 눈웃음까지 보내는데...?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "지금 말하면 좋은 말이 안 나올 것 같아. 좀 이따 연락할게."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "아!!!!!!!짜증나!!!!!진짜!!!!!! 도대체 왜 그러는 거야?!?!"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "이런 점에서 나는 화가 난 거야. 그런 부분은 고쳐줬으면 좋겠어."
                    },
                ]
            },
            {
                question: "쉬고 있는데 갑자기 걸려온 남사친/여사친의 전화, \n친구들이 같이 놀고 싶다며 나올 수 있냐고 물어보는데...?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: '귀찮은데… 아쉽긴 하지만 “시간이 너무 늦었어… 나 집에서 쉴래!”'
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "일단 끊고 수십 번 고민 끝에 나가기로 한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '오케이~ 인연 한 번 만들어보자~ “갈게~~~~”'
                    },
                ]
            },
            {
                question: "다가온 기념일! 나는 어떤 선물을 준비할까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "정성 어린 편지와 기억에 남을 만한 선물을 준비한다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "커플로 착용할 수 있는 아이템을 선물한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 사고 싶다거나 필요한 물건을 기억해 두었다가 서프라이즈로 선물한다."
                    },
                ]
            },
            {
                question: "내가 하고 싶은 연애 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "다이나믹한 화려한 연애 (단, 너무 화려해서 바람 피울 가능성 50%)"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "나만 바라보는 연애 (단, 너무 좋아해서 집착 대마왕)"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구같이 편안한 연애 (단, 가끔 친구인지 애인인지 헷갈림)"
                    },
                ]
            },
            {
                question: "애인과 대화할 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 5,
                        content: "장난치고 티키타카가 잘 되는 대화가 좋다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "서로의 생각을 공유하는 대화가 너무 좋다."
                    },
                ]
            },
            {
                question: "친구가 나에게 고민상당을 한다. 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "고민에 대한 구체적인 해결책을 제시한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "고민에 대해 빠져들어 감정적으로 같이 공감해준다."
                    },
                ]
            },
            {
                question: "기다려왔던 짝사랑하던 그/그녀와의 데이트 날..\n갑자기 급한 일이 생겼다며 다음에 만나자고 한다.\n과연 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "어쩔 수 없지… 알겠어 다음에 보자!"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "알겠어…근데 심각한 일이야?"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "아 진짜? 그럼 날짜 다시 조정하자! 언제가 괜찮아?"
                    },
                ]
            },
        ],
        results:[{type: '',
        desc: '',
        query: '1',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/1.png'},
       {type: '',
        desc: '',
        query: '2',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/2.png'},
       {type: '',
        desc: '',
        query: '3',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/3.png'},
       {type: '',
        desc: '',
        query: '4',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/4.png'},
       {type: '',
        desc: '',
        query: '5',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/5.png'},
       {type: '',
        desc: '',
        query: '6',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/6.png'},
       {type: '',
        desc: '',
        query: '7',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/7.png'},
       {type: '',
        desc: '',
        query: '8',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/8.png'},
       {type: '',
        desc: '',
        query: '9',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/9.png'},
       {type: '',
        desc: '',
        query: '10',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/10.png'},
       {type: '',
        desc: '',
        query: '11',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/11.png'},
       {type: '',
        desc: '',
        query: '12',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/12.png'},
       {type: '',
        desc: '',
        query: '13',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/13.png'},
       {type: '',
        desc: '',
        query: '14',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/14.png'},
       {type: '',
        desc: '',
        query: '15',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/15.png'},
       {type: '',
        desc: '',
        query: '16',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/16.png'},
       {type: '',
        desc: '',
        query: '17',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/17.png'},
       {type: '',
        desc: '',
        query: '18',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/18.png'},
       {type: '',
        desc: '',
        query: '19',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/19.png'},
       {type: '',
        desc: '',
        query: '20',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/20.png'},
       {type: '',
        desc: '',
        query: '21',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/21.png'},
       {type: '',
        desc: '',
        query: '22',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/22.png'},
       {type: '',
        desc: '',
        query: '23',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/23.png'},
       {type: '',
        desc: '',
        query: '24',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/24.png'},
       {type: '',
        desc: '',
        query: '25',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/25.png'},
       {type: '',
        desc: '',
        query: '26',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/26.png'},
       {type: '',
        desc: '',
        query: '27',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/27.png'},
       {type: '',
        desc: '',
        query: '28',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/28.png'},
       {type: '',
        desc: '',
        query: '29',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/29.png'},
       {type: '',
        desc: '',
        query: '30',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/30.png'},
       {type: '',
        desc: '',
        query: '31',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/31.png'},
       {type: '',
        desc: '',
        query: '32',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/32.png'},
       {type: '',
        desc: '',
        query: '33',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/33.png'},
       {type: '',
        desc: '',
        query: '34',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/34.png'},
       {type: '',
        desc: '',
        query: '35',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/35.png'},
       {type: '',
        desc: '',
        query: '36',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/36.png'},
       {type: '',
        desc: '',
        query: '37',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/37.png'},
       {type: '',
        desc: '',
        query: '38',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/38.png'},
       {type: '',
        desc: '',
        query: '39',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/39.png'},
       {type: '',
        desc: '',
        query: '40',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/40.png'},
       {type: '',
        desc: '',
        query: '41',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/41.png'},
       {type: '',
        desc: '',
        query: '42',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/42.png'},
       {type: '',
        desc: '',
        query: '43',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/43.png'},
       {type: '',
        desc: '',
        query: '44',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/44.png'},
       {type: '',
        desc: '',
        query: '45',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/45.png'},
       {type: '',
        desc: '',
        query: '46',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/46.png'},
       {type: '',
        desc: '',
        query: '47',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/47.png'},
       {type: '',
        desc: '',
        query: '48',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/48.png'},
       {type: '',
        desc: '',
        query: '49',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/49.png'},
       {type: '',
        desc: '',
        query: '50',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/50.png'},
       {type: '',
        desc: '',
        query: '51',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/51.png'},
       {type: '',
        desc: '',
        query: '52',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/52.png'},
       {type: '',
        desc: '',
        query: '53',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/53.png'},
       {type: '',
        desc: '',
        query: '54',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/54.png'},
       {type: '',
        desc: '',
        query: '55',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/55.png'},
       {type: '',
        desc: '',
        query: '56',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/56.png'},
       {type: '',
        desc: '',
        query: '57',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/57.png'},
       {type: '',
        desc: '',
        query: '58',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/58.png'},
       {type: '',
        desc: '',
        query: '59',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/59.png'},
       {type: '',
        desc: '',
        query: '60',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/60.png'},
       {type: '',
        desc: '',
        query: '61',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/61.png'},
       {type: '',
        desc: '',
        query: '62',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/62.png'},
       {type: '',
        desc: '',
        query: '63',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/63.png'},
       {type: '',
        desc: '',
        query: '64',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/64.png'},
       {type: '',
        desc: '',
        query: '65',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/65.png'},
       {type: '',
        desc: '',
        query: '66',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/66.png'},
       {type: '',
        desc: '',
        query: '67',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/67.png'},
       {type: '',
        desc: '',
        query: '68',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/68.png'},
       {type: '',
        desc: '',
        query: '69',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/69.png'},
       {type: '',
        desc: '',
        query: '70',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/70.png'},
       {type: '',
        desc: '',
        query: '71',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/71.png'},
       {type: '',
        desc: '',
        query: '72',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/72.png'},
       {type: '',
        desc: '',
        query: '73',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/73.png'},
       {type: '',
        desc: '',
        query: '74',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/74.png'},
       {type: '',
        desc: '',
        query: '75',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/75.png'},
       {type: '',
        desc: '',
        query: '76',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/76.png'},
       {type: '',
        desc: '',
        query: '77',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/77.png'},
       {type: '',
        desc: '',
        query: '78',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/78.png'},
       {type: '',
        desc: '',
        query: '79',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/79.png'},
       {type: '',
        desc: '',
        query: '80',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/80.png'},
       {type: '',
        desc: '',
        query: '81',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/81.png'},
       {type: '',
        desc: '',
        query: '82',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/82.png'},
       {type: '',
        desc: '',
        query: '83',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/83.png'},
       {type: '',
        desc: '',
        query: '84',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/84.png'},
       {type: '',
        desc: '',
        query: '85',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/85.png'},
       {type: '',
        desc: '',
        query: '86',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/86.png'},
       {type: '',
        desc: '',
        query: '87',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/87.png'},
       {type: '',
        desc: '',
        query: '88',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/88.png'},
       {type: '',
        desc: '',
        query: '89',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/89.png'},
       {type: '',
        desc: '',
        query: '90',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/90.png'},
       {type: '',
        desc: '',
        query: '91',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/91.png'},
       {type: '',
        desc: '',
        query: '92',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/92.png'},
       {type: '',
        desc: '',
        query: '93',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/93.png'},
       {type: '',
        desc: '',
        query: '94',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/94.png'},
       {type: '',
        desc: '',
        query: '95',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/95.png'},
       {type: '',
        desc: '',
        query: '96',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/96.png'},
       {type: '',
        desc: '',
        query: '97',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/97.png'},
       {type: '',
        desc: '',
        query: '98',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/98.png'},
       {type: '',
        desc: '',
        query: '99',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/99.png'},
       {type: '',
        desc: '',
        query: '100',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/100.png'},
       {type: '',
        desc: '',
        query: '101',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/101.png'},
       {type: '',
        desc: '',
        query: '102',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/102.png'},
       {type: '',
        desc: '',
        query: '103',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/103.png'},
       {type: '',
        desc: '',
        query: '104',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/104.png'},
       {type: '',
        desc: '',
        query: '105',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/105.png'},
       {type: '',
        desc: '',
        query: '106',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/106.png'},
       {type: '',
        desc: '',
        query: '107',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/107.png'},
       {type: '',
        desc: '',
        query: '108',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/108.png'},
       {type: '',
        desc: '',
        query: '109',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/109.png'},
       {type: '',
        desc: '',
        query: '110',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/110.png'},
       {type: '',
        desc: '',
        query: '111',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/111.png'},
       {type: '',
        desc: '',
        query: '112',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/112.png'},
       {type: '',
        desc: '',
        query: '113',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/113.png'},
       {type: '',
        desc: '',
        query: '114',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/114.png'},
       {type: '',
        desc: '',
        query: '115',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/115.png'},
       {type: '',
        desc: '',
        query: '116',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/116.png'},
       {type: '',
        desc: '',
        query: '117',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/117.png'},
       {type: '',
        desc: '',
        query: '118',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/118.png'},
       {type: '',
        desc: '',
        query: '119',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/119.png'},
       {type: '',
        desc: '',
        query: '120',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/120.png'},
       {type: '',
        desc: '',
        query: '121',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/121.png'},
       {type: '',
        desc: '',
        query: '122',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/122.png'},
       {type: '',
        desc: '',
        query: '123',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/123.png'},
       {type: '',
        desc: '',
        query: '124',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/124.png'},
       {type: '',
        desc: '',
        query: '125',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/125.png'},
       {type: '',
        desc: '',
        query: '126',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/126.png'},
       {type: '',
        desc: '',
        query: '127',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/127.png'},
       {type: '',
        desc: '',
        query: '128',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/128.png'},
       {type: '',
        desc: '',
        query: '129',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/129.png'},
       {type: '',
        desc: '',
        query: '130',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/130.png'},
       {type: '',
        desc: '',
        query: '131',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/131.png'},
       {type: '',
        desc: '',
        query: '132',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/132.png'},
       {type: '',
        desc: '',
        query: '133',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/133.png'},
       {type: '',
        desc: '',
        query: '134',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/134.png'},
       {type: '',
        desc: '',
        query: '135',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/135.png'},
       {type: '',
        desc: '',
        query: '136',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/136.png'},
       {type: '',
        desc: '',
        query: '137',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/137.png'},
       {type: '',
        desc: '',
        query: '138',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/138.png'},
       {type: '',
        desc: '',
        query: '139',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/139.png'},
       {type: '',
        desc: '',
        query: '140',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/140.png'},
       {type: '',
        desc: '',
        query: '141',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/141.png'},
       {type: '',
        desc: '',
        query: '142',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/142.png'},
       {type: '',
        desc: '',
        query: '143',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/143.png'},
       {type: '',
        desc: '',
        query: '144',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/144.png'},
       {type: '',
        desc: '',
        query: '145',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/145.png'},
       {type: '',
        desc: '',
        query: '146',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/146.png'},
       {type: '',
        desc: '',
        query: '147',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/147.png'},
       {type: '',
        desc: '',
        query: '148',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/148.png'},
       {type: '',
        desc: '',
        query: '149',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/149.png'},
       {type: '',
        desc: '',
        query: '150',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/150.png'},
       {type: '',
        desc: '',
        query: '151',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/151.png'},
       {type: '',
        desc: '',
        query: '152',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/152.png'},
       {type: '',
        desc: '',
        query: '153',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/153.png'},
       {type: '',
        desc: '',
        query: '154',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/154.png'},
       {type: '',
        desc: '',
        query: '155',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/155.png'},
       {type: '',
        desc: '',
        query: '156',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/156.png'},
       {type: '',
        desc: '',
        query: '157',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/157.png'},
       {type: '',
        desc: '',
        query: '158',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/158.png'},
       {type: '',
        desc: '',
        query: '159',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/159.png'},
       {type: '',
        desc: '',
        query: '160',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/160.png'},
       {type: '',
        desc: '',
        query: '161',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/161.png'},
       {type: '',
        desc: '',
        query: '162',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/162.png'},
       {type: '',
        desc: '',
        query: '163',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/163.png'},
       {type: '',
        desc: '',
        query: '164',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/164.png'},
       {type: '',
        desc: '',
        query: '165',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/165.png'},
       {type: '',
        desc: '',
        query: '166',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/166.png'},
       {type: '',
        desc: '',
        query: '167',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/167.png'},
       {type: '',
        desc: '',
        query: '168',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/168.png'},
       {type: '',
        desc: '',
        query: '169',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/169.png'},
       {type: '',
        desc: '',
        query: '170',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/170.png'},
       {type: '',
        desc: '',
        query: '171',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/171.png'},
       {type: '',
        desc: '',
        query: '172',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/172.png'},
       {type: '',
        desc: '',
        query: '173',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/173.png'},
       {type: '',
        desc: '',
        query: '174',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/174.png'},
       {type: '',
        desc: '',
        query: '175',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/175.png'},
       {type: '',
        desc: '',
        query: '176',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/176.png'},
       {type: '',
        desc: '',
        query: '177',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/177.png'},
       {type: '',
        desc: '',
        query: '178',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/178.png'},
       {type: '',
        desc: '',
        query: '179',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/179.png'},
       {type: '',
        desc: '',
        query: '180',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/180.png'},
       {type: '',
        desc: '',
        query: '181',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/181.png'},
       {type: '',
        desc: '',
        query: '182',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/182.png'},
       {type: '',
        desc: '',
        query: '183',
        score_range: range(0, 2),
        img_src: 'https://images.ktestone.com/resultImages/dogSoundsEng/183.png'}]
    },
    // dogSounds
    {
        info : {
            mainTitle:"강아지 사운드 번역기",
            subTitle:"내 강아지의 숨소리, 짖는 소리 등등 모든 소리가 알고 싶다면?",
            mainUrl:"dogSounds",
            scoreType:"DogSounds",
            mainImage:"https://images.ktestone.com/introImages/dogSounds-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/dogSounds-thumb.png",
            lang:"Kor"
        },
        questions:[
            {
                question: '데이트 전 날 나의 모습은?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '나가기 직전 마음에 드는 옷을 입는다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '자기 전 머릿속으로 나의 스타일링을 생각하고 잔다.'
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '전 날 머리부터 발끝까지 스타일링과 옷을 미리 준비한다.'
                    },
                ],
            },
            {
                question: "갑자기 자취방에 놀러 온다는 애인!\n그때의 나는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "아아... 왜 갑자기 오는 거야?! 보이는 곳만 치워 둔다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "모아둔 쓰레기를 버리고 바로 청소를 시작한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 미리미리 해 두었기 때문에 바로 주소를 보낸다."
                    },
                ]
            },
            {
                question: "좋아하는 이성이 생겼을 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "상대의 SNS을 탐방하며, 미래의 우리 모습을 상상해본다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "좋아하는 이성의 친구에게 도움을 요청한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "먼저 연락할 거리를 만들며 적극적으로 대시한다."
                    },
                ]
            },
            {
                question: "카페 안에 이상형인 사람과 계속 눈이 마주친다.\n 눈웃음까지 보내는데...?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "지금 말하면 좋은 말이 안 나올 것 같아. 좀 이따 연락할게."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "아!!!!!!!짜증나!!!!!진짜!!!!!! 도대체 왜 그러는 거야?!?!"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "이런 점에서 나는 화가 난 거야. 그런 부분은 고쳐줬으면 좋겠어."
                    },
                ]
            },
            {
                question: "쉬고 있는데 갑자기 걸려온 남사친/여사친의 전화, \n친구들이 같이 놀고 싶다며 나올 수 있냐고 물어보는데...?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: '귀찮은데… 아쉽긴 하지만 “시간이 너무 늦었어… 나 집에서 쉴래!”'
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "일단 끊고 수십 번 고민 끝에 나가기로 한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '오케이~ 인연 한 번 만들어보자~ “갈게~~~~”'
                    },
                ]
            },
            {
                question: "다가온 기념일! 나는 어떤 선물을 준비할까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "정성 어린 편지와 기억에 남을 만한 선물을 준비한다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "커플로 착용할 수 있는 아이템을 선물한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 사고 싶다거나 필요한 물건을 기억해 두었다가 서프라이즈로 선물한다."
                    },
                ]
            },
            {
                question: "내가 하고 싶은 연애 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "다이나믹한 화려한 연애 (단, 너무 화려해서 바람 피울 가능성 50%)"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "나만 바라보는 연애 (단, 너무 좋아해서 집착 대마왕)"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구같이 편안한 연애 (단, 가끔 친구인지 애인인지 헷갈림)"
                    },
                ]
            },
            {
                question: "애인과 대화할 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 5,
                        content: "장난치고 티키타카가 잘 되는 대화가 좋다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "서로의 생각을 공유하는 대화가 너무 좋다."
                    },
                ]
            },
            {
                question: "친구가 나에게 고민상당을 한다. 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "고민에 대한 구체적인 해결책을 제시한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "고민에 대해 빠져들어 감정적으로 같이 공감해준다."
                    },
                ]
            },
            {
                question: "기다려왔던 짝사랑하던 그/그녀와의 데이트 날..\n갑자기 급한 일이 생겼다며 다음에 만나자고 한다.\n과연 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "어쩔 수 없지… 알겠어 다음에 보자!"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "알겠어…근데 심각한 일이야?"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "아 진짜? 그럼 날짜 다시 조정하자! 언제가 괜찮아?"
                    },
                ]
            },
        ],
        results:[
            {type: '',
                desc: '',
                query: '1',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/1.png'},
            {type: '',
                desc: '',
                query: '2',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/2.png'},
            {type: '',
                desc: '',
                query: '3',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/3.png'},
            {type: '',
                desc: '',
                query: '4',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/4.png'},
            {type: '',
                desc: '',
                query: '5',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/5.png'},
            {type: '',
                desc: '',
                query: '6',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/6.png'},
            {type: '',
                desc: '',
                query: '7',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/7.png'},
            {type: '',
                desc: '',
                query: '8',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/8.png'},
            {type: '',
                desc: '',
                query: '9',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/9.png'},
            {type: '',
                desc: '',
                query: '10',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/10.png'},
            {type: '',
                desc: '',
                query: '11',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/11.png'},
            {type: '',
                desc: '',
                query: '12',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/12.png'},
            {type: '',
                desc: '',
                query: '13',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/13.png'},
            {type: '',
                desc: '',
                query: '14',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/14.png'},
            {type: '',
                desc: '',
                query: '15',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/15.png'},
            {type: '',
                desc: '',
                query: '16',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/16.png'},
            {type: '',
                desc: '',
                query: '17',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/17.png'},
            {type: '',
                desc: '',
                query: '18',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/18.png'},
            {type: '',
                desc: '',
                query: '19',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/19.png'},
            {type: '',
                desc: '',
                query: '20',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/20.png'},
            {type: '',
                desc: '',
                query: '21',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/21.png'},
            {type: '',
                desc: '',
                query: '22',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/22.png'},
            {type: '',
                desc: '',
                query: '23',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/23.png'},
            {type: '',
                desc: '',
                query: '24',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/24.png'},
            {type: '',
                desc: '',
                query: '25',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/25.png'},
            {type: '',
                desc: '',
                query: '26',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/26.png'},
            {type: '',
                desc: '',
                query: '27',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/27.png'},
            {type: '',
                desc: '',
                query: '28',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/28.png'},
            {type: '',
                desc: '',
                query: '29',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/29.png'},
            {type: '',
                desc: '',
                query: '30',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/30.png'},
            {type: '',
                desc: '',
                query: '31',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/31.png'},
            {type: '',
                desc: '',
                query: '32',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/32.png'},
            {type: '',
                desc: '',
                query: '33',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/33.png'},
            {type: '',
                desc: '',
                query: '34',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/34.png'},
            {type: '',
                desc: '',
                query: '35',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/35.png'},
            {type: '',
                desc: '',
                query: '36',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/36.png'},
            {type: '',
                desc: '',
                query: '37',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/37.png'},
            {type: '',
                desc: '',
                query: '38',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/38.png'},
            {type: '',
                desc: '',
                query: '39',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/39.png'},
            {type: '',
                desc: '',
                query: '40',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/40.png'},
            {type: '',
                desc: '',
                query: '41',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/41.png'},
            {type: '',
                desc: '',
                query: '42',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/42.png'},
            {type: '',
                desc: '',
                query: '43',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/43.png'},
            {type: '',
                desc: '',
                query: '44',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/44.png'},
            {type: '',
                desc: '',
                query: '45',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/45.png'},
            {type: '',
                desc: '',
                query: '46',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/46.png'},
            {type: '',
                desc: '',
                query: '47',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/47.png'},
            {type: '',
                desc: '',
                query: '48',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/48.png'},
            {type: '',
                desc: '',
                query: '49',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/49.png'},
            {type: '',
                desc: '',
                query: '50',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/50.png'},
            {type: '',
                desc: '',
                query: '51',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/51.png'},
            {type: '',
                desc: '',
                query: '52',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/52.png'},
            {type: '',
                desc: '',
                query: '53',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/53.png'},
            {type: '',
                desc: '',
                query: '54',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/54.png'},
            {type: '',
                desc: '',
                query: '55',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/55.png'},
            {type: '',
                desc: '',
                query: '56',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/56.png'},
            {type: '',
                desc: '',
                query: '57',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/57.png'},
            {type: '',
                desc: '',
                query: '58',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/58.png'},
            {type: '',
                desc: '',
                query: '59',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/59.png'},
            {type: '',
                desc: '',
                query: '60',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/60.png'},
            {type: '',
                desc: '',
                query: '61',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/61.png'},
            {type: '',
                desc: '',
                query: '62',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/62.png'},
            {type: '',
                desc: '',
                query: '63',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/63.png'},
            {type: '',
                desc: '',
                query: '64',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/64.png'},
            {type: '',
                desc: '',
                query: '65',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/65.png'},
            {type: '',
                desc: '',
                query: '66',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/66.png'},
            {type: '',
                desc: '',
                query: '67',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/67.png'},
            {type: '',
                desc: '',
                query: '68',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/68.png'},
            {type: '',
                desc: '',
                query: '69',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/69.png'},
            {type: '',
                desc: '',
                query: '70',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/70.png'},
            {type: '',
                desc: '',
                query: '71',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/71.png'},
            {type: '',
                desc: '',
                query: '72',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/72.png'},
            {type: '',
                desc: '',
                query: '73',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/73.png'},
            {type: '',
                desc: '',
                query: '74',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/74.png'},
            {type: '',
                desc: '',
                query: '75',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/75.png'},
            {type: '',
                desc: '',
                query: '76',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/76.png'},
            {type: '',
                desc: '',
                query: '77',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/77.png'},
            {type: '',
                desc: '',
                query: '78',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/78.png'},
            {type: '',
                desc: '',
                query: '79',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/79.png'},
            {type: '',
                desc: '',
                query: '80',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/80.png'},
            {type: '',
                desc: '',
                query: '81',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/81.png'},
            {type: '',
                desc: '',
                query: '82',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/82.png'},
            {type: '',
                desc: '',
                query: '83',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/83.png'},
            {type: '',
                desc: '',
                query: '84',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/84.png'},
            {type: '',
                desc: '',
                query: '85',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/85.png'},
            {type: '',
                desc: '',
                query: '86',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/86.png'},
            {type: '',
                desc: '',
                query: '87',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/87.png'},
            {type: '',
                desc: '',
                query: '88',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/88.png'},
            {type: '',
                desc: '',
                query: '89',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/89.png'},
            {type: '',
                desc: '',
                query: '90',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/90.png'},
            {type: '',
                desc: '',
                query: '91',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/91.png'},
            {type: '',
                desc: '',
                query: '92',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/92.png'},
            {type: '',
                desc: '',
                query: '93',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/93.png'},
            {type: '',
                desc: '',
                query: '94',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/94.png'},
            {type: '',
                desc: '',
                query: '95',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/95.png'},
            {type: '',
                desc: '',
                query: '96',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/96.png'},
            {type: '',
                desc: '',
                query: '97',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/97.png'},
            {type: '',
                desc: '',
                query: '98',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/98.png'},
            {type: '',
                desc: '',
                query: '99',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/99.png'},
            {type: '',
                desc: '',
                query: '100',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/100.png'},
            {type: '',
                desc: '',
                query: '101',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/101.png'},
            {type: '',
                desc: '',
                query: '102',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/102.png'},
            {type: '',
                desc: '',
                query: '103',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/103.png'},
            {type: '',
                desc: '',
                query: '104',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/104.png'},
            {type: '',
                desc: '',
                query: '105',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/105.png'},
            {type: '',
                desc: '',
                query: '106',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/106.png'},
            {type: '',
                desc: '',
                query: '107',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/107.png'},
            {type: '',
                desc: '',
                query: '108',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/108.png'},
            {type: '',
                desc: '',
                query: '109',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/109.png'},
            {type: '',
                desc: '',
                query: '110',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/110.png'},
            {type: '',
                desc: '',
                query: '111',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/111.png'},
            {type: '',
                desc: '',
                query: '112',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/112.png'},
            {type: '',
                desc: '',
                query: '113',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/113.png'},
            {type: '',
                desc: '',
                query: '114',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/114.png'},
            {type: '',
                desc: '',
                query: '115',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/115.png'},
            {type: '',
                desc: '',
                query: '116',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/116.png'},
            {type: '',
                desc: '',
                query: '117',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/117.png'},
            {type: '',
                desc: '',
                query: '118',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/118.png'},
            {type: '',
                desc: '',
                query: '119',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/119.png'},
            {type: '',
                desc: '',
                query: '120',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/120.png'},
            {type: '',
                desc: '',
                query: '121',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/121.png'},
            {type: '',
                desc: '',
                query: '122',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/122.png'},
            {type: '',
                desc: '',
                query: '123',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/123.png'},
            {type: '',
                desc: '',
                query: '124',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/124.png'},
            {type: '',
                desc: '',
                query: '125',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/125.png'},
            {type: '',
                desc: '',
                query: '126',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/126.png'},
            {type: '',
                desc: '',
                query: '127',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/127.png'},
            {type: '',
                desc: '',
                query: '128',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/128.png'},
            {type: '',
                desc: '',
                query: '129',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/129.png'},
            {type: '',
                desc: '',
                query: '130',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/130.png'},
            {type: '',
                desc: '',
                query: '131',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/131.png'},
            {type: '',
                desc: '',
                query: '132',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/132.png'},
            {type: '',
                desc: '',
                query: '133',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/133.png'},
            {type: '',
                desc: '',
                query: '134',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/134.png'},
            {type: '',
                desc: '',
                query: '135',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/135.png'},
            {type: '',
                desc: '',
                query: '136',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/136.png'},
            {type: '',
                desc: '',
                query: '137',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/137.png'},
            {type: '',
                desc: '',
                query: '138',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/138.png'},
            {type: '',
                desc: '',
                query: '139',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/139.png'},
            {type: '',
                desc: '',
                query: '140',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/140.png'},
            {type: '',
                desc: '',
                query: '141',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/141.png'},
            {type: '',
                desc: '',
                query: '142',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/142.png'},
            {type: '',
                desc: '',
                query: '143',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/143.png'},
            {type: '',
                desc: '',
                query: '144',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/144.png'},
            {type: '',
                desc: '',
                query: '145',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/145.png'},
            {type: '',
                desc: '',
                query: '146',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/146.png'},
            {type: '',
                desc: '',
                query: '147',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/147.png'},
            {type: '',
                desc: '',
                query: '148',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/148.png'},
            {type: '',
                desc: '',
                query: '149',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/149.png'},
            {type: '',
                desc: '',
                query: '150',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/150.png'},
            {type: '',
                desc: '',
                query: '151',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/151.png'},
            {type: '',
                desc: '',
                query: '152',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/152.png'},
            {type: '',
                desc: '',
                query: '153',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/153.png'},
            {type: '',
                desc: '',
                query: '154',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/154.png'},
            {type: '',
                desc: '',
                query: '155',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/155.png'},
            {type: '',
                desc: '',
                query: '156',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/156.png'},
            {type: '',
                desc: '',
                query: '157',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/157.png'},
            {type: '',
                desc: '',
                query: '158',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/158.png'},
            {type: '',
                desc: '',
                query: '159',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/159.png'},
            {type: '',
                desc: '',
                query: '160',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/160.png'},
            {type: '',
                desc: '',
                query: '161',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/161.png'},
            {type: '',
                desc: '',
                query: '162',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/162.png'},
            {type: '',
                desc: '',
                query: '163',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/163.png'},
            {type: '',
                desc: '',
                query: '164',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/164.png'},
            {type: '',
                desc: '',
                query: '165',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/165.png'},
            {type: '',
                desc: '',
                query: '166',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/166.png'},
            {type: '',
                desc: '',
                query: '167',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/167.png'},
            {type: '',
                desc: '',
                query: '168',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/168.png'},
            {type: '',
                desc: '',
                query: '169',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/169.png'},
            {type: '',
                desc: '',
                query: '170',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/170.png'},
            {type: '',
                desc: '',
                query: '171',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/171.png'},
            {type: '',
                desc: '',
                query: '172',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/172.png'},
            {type: '',
                desc: '',
                query: '173',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/173.png'},
            {type: '',
                desc: '',
                query: '174',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/174.png'},
            {type: '',
                desc: '',
                query: '175',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/175.png'},
            {type: '',
                desc: '',
                query: '176',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/176.png'},
            {type: '',
                desc: '',
                query: '177',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/177.png'},
            {type: '',
                desc: '',
                query: '178',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/178.png'},
            {type: '',
                desc: '',
                query: '179',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/179.png'},
            {type: '',
                desc: '',
                query: '180',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/180.png'},
            {type: '',
                desc: '',
                query: '181',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/181.png'},
            {type: '',
                desc: '',
                query: '182',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/182.png'},
            {type: '',
                desc: '',
                query: '183',
                score_range: range(0, 2),
                img_src: 'https://images.ktestone.com/resultImages/dogSounds/183.png'}]
    },
    // oneSidedLove in English
    {
        info : {
            mainTitle:"Unrequited love candy test",
            subTitle:"What is my unrequited love cnady type?",
            mainUrl:"oneSidedLoveEng",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/oneSidedLoveEng-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/oneSidedLoveEng-thumb.png",
            lang:"Eng"
        },
        questions:[
            {
                which:"EI",
                question: 'Who am I my friends talk about?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'Energetic and confident when I speak of my opinion'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'passive and a bit quite.'
                    },
                ],
            },
            {
                which:"EI",
                question: "Start up of new semester!\nHow to approach to a friend of the next seat?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Say hello to him first."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Wait until he speaks to me."
                    },
                ]
            },
            {
                which:"EI",
                question: "Your friend asks you to drag you\nin front of the opposite gender\nand have a conversation.",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Laugh and have fun talking together."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "I'm shy,\nso I just smile quietly and be awkward."
                    },
                ]
            },
            {
                which:"SN",
                question: "When I think of the person I like,\nwhat do I do?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Can it be done realistically?"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Ha... If I date that person,\nI will do this and that too~\nOh, it makes my heart flutter!"
                    },
                ]
            },
            {
                which:"SN",
                question: "Me in love,\nwhen I look at the world?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "'A mountain is a mountain.\nWater is water.’\nSee it as it is."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Rather than reality,\nI spread my own world,\nmy imagination."
                    },
                ]
            },
            {
                which:"SN",
                question: "During a date,\nI was hungry and found a restaurant.",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "The review looks good!\nLet's go here!"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Oh, It smells a restaurant that looks perfect."
                    },
                ]
            },
            {
                which:"TF",
                question: "What is my first reaction when I am angry?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Speak rationally about the reason for my anger."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "I'm filled with anger and I'm crying."
                    },
                ]
            },
            {
                which:"TF",
                question: "The person I like is in a difficult situation.",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Propose and support realistic solutions."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Empathize with emotions and\nprovides psychological support."
                    },
                ]
            },
            {
                which:"TF",
                question: "When I talk to someone I like,\nwhat do I do?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Ask questions and ask questions about him."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "React and empathize when he is talking to me."
                    },
                ]
            },
            {
                which:"JP",
                question: "Suddenly the mood Jeju Island!\nI want to go to Jeju Island!",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Plan a detailed schedule for each day of the week."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Flight ticket reservation complete!\nI think the plan is almost over."
                    },
                ]
            },
            {
                which:"JP",
                question: "Which one is closer to me?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "I am well organized and\nfind where my things are."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "I think I know where my things are,\nbut when I look for them,\nI can't find them..."
                    },
                ]
            },
            {
                which:"JP",
                question: "I try to confess to the person you like.",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Make a thorough plan and\naim for the right time to confess."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Confess promptly based on the atmosphere."
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveEng/INFP.png'
            },
        ]
    },
    // oneSidedLove in Chinese
    {
        info : {
            mainTitle:"单恋糖果测试",
            subTitle:"我的单恋糖果类型是什么呢？",
            mainUrl:"oneSidedLoveCN",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/oneSidedLoveCN-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/oneSidedLoveCN-thumb.png",
            lang:"CN"
        },
        questions:[
            {
                which:"EI",
                question: '朋友们口中的我是？',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '活泼开朗，\n表达自己的想法时很有信心！'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '比较被动，很安静'
                    },
                ],
            },
            {
                which:"EI",
                question: "新学期开学啦！一个朋友坐在你身旁，你会？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "会主动先跟朋友打招呼。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "朋友先打招呼之前不会主动问候。"
                    },
                ]
            },
            {
                which:"EI",
                question: "被拉去朋友喜欢的异性面前交谈。",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "一起愉快地聊天。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "很害羞的你保持安静，\n尴尬地微笑。"
                    },
                ]
            },
            {
                which:"SN",
                question: "想喜欢的人时我会？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "思考这段恋情是否现实？"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "哇…和他在一起的话一定要做这个做那个~啊~好心动！"
                    },
                ]
            },
            {
                which:"SN",
                question: "陷入爱河的我，\n看待世界时？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "‘山是山，水是水’\n看起来都一样。"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "比起现实更专注自己的世界，\n会展开想象幻想未来。"
                    },
                ]
            },
            {
                which:"SN",
                question: "约会时肚子饿了，\n这时发现了一家饭馆。",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "评论看起来还不错！\n那就这里了！"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "哇塞，这里一看就不错，\n味道好棒呀。"
                    },
                ]
            },
            {
                which:"TF",
                question: "生气时我的第一个反应是？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "理性地说自己为什么生气。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "愤怒逼心，\n眼泪先出来。"
                    },
                ]
            },
            {
                which:"TF",
                question: "喜欢的人陷入困境时。",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "提出比较现实的解决方案并给对方加油打气。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "理解对方并给予精神上的支持。"
                    },
                ]
            },
            {
                which:"TF",
                question: "和喜欢的人聊天时我会？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "通过提问了解对方，\n越来越好奇。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "和对方对话的时候给与相应的反应并产生共鸣。"
                    },
                ]
            },
            {
                which:"JP",
                question: "突然氛围聊起济州岛！\n济州岛走起吧！",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "详细地计划每天的日程"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "机票订好啦~！\n认为计划几乎完成了。"
                    },
                ]
            },
            {
                which:"JP",
                question: "更接近我的类型是？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "擅长于整理整顿，\n知道自己的东西在哪里，很快能找出来。"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "虽然自己认为知道自己的东西在哪儿，\n但突然找起来的时候却找不到…"
                    },
                ]
            },
            {
                which:"JP",
                question: "准备向喜欢的人表白时。",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "做好一切准备，\n抓住表白的最佳时机。"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "看情况行事，\n直接表白。"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveCN/INFP.png'
            },
        ]
    },
    // oneSidedLove for Russia
    {
        info : {
            mainTitle:"Тест честной любовной конфеты",
            subTitle:"Что такое мой тип взаимной любви к конфету?",
            mainUrl:"oneSidedLoveRus",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/oneSidedLoveRus-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/oneSidedLoveRus-thumb.png",
            lang:"Rus"
        },
        questions:[
            {
                which:"EI",
                question: 'Как друзья о мне думают?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'Уверенно говорю о свой мысли, и активный!'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'Несмелый, тихи характер.'
                    },
                ],
            },
            {
                which:"EI",
                question: "Началось новый семестр! Одно курсник сел на соседний стол как я буду себя вести?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Первый будет здороваться."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Жду, что бы друг первым здоровалось."
                    },
                ]
            },
            {
                which:"EI",
                question: "Когда друг позвал любимого человека просто поболтать",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Вместе весело общаемся."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Стиснительно тихо улыбаюсь не чего не говоря"
                    },
                ]
            },
            {
                which:"SN",
                question: "Как я себя виду, Когда думаю о любимому человека?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Реально мы можем встречаться?"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Ам... Если будем встречаться то куда пойдем что будем делать и.т.д"
                    },
                ]
            },
            {
                which:"SN",
                question: "Когда я в любляюсь как смотрю на мир",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "'Гора это гора, Вода это вода' смотрю как есть"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Вместо реальности я распространяю свой мир, свое воображение."
                    },
                ]
            },
            {
                which:"SN",
                question: "На свидании я проголодался и нашел ресторан.",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Обзор выглядит неплохо! Пойдем сюда!"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Ох, этот ресторан выглядит идеально для Смельнанды."
                    },
                ]
            },
            {
                which:"TF",
                question: "Моя первая реакция, когда я злюсь?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Объясняйте, почему вы злитесь, рационально."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Меня переполняет гнев, и я плачу."
                    },
                ]
            },
            {
                which:"TF",
                question: "Любимый человек находится в сложной ситуации.",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Предлагайте реалистичные решения и поддерживайте их."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Он сопереживает эмоциям и оказывает психологическую поддержку."
                    },
                ]
            },
            {
                which:"TF",
                question: "Когда общаюсь с любимым человеком?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Спрашиваю постоянно интересуюсь о любимому человеку."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Слушаю что говорит, хорошо соглашиваюсь и делаю хороший реакцию."
                    },
                ]
            },
            {
                which:"JP",
                question: "Внезапно захотелось путешествовать! Надо поехать!",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Составьте подробный график."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Бронирование авиабилетов завершено! планы закончилось."
                    },
                ]
            },
            {
                which:"JP",
                question: "Какой мне ближе?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Я хорошо организован и нахожу, где мои вещи."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Я думаю, что знаю, где мои вещи, но не могу их найти ..."
                    },
                ]
            },
            {
                which:"JP",
                question: "Попробуем признаться любимому человеку.",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Составьте тщательный план и постарайтесь найти подходящее время для признания."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Глядя на атмосферу, признаюсь на месте."
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveRus/INFP.png'
            },
        ]
    },
    // oneSidedLove for Japan
    {
        info : {
            mainTitle:"片思いキャンディテストです。",
            subTitle:"私の片思いキャンディタイプは何でしょうか。",
            mainUrl:"oneSidedLoveJP",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/oneSidedLoveJP-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/oneSidedLoveJP-thumb.png",
            lang:"JP"
        },
        questions:[
            {
                which:"EI",
                question: '友達から見た自分の印象は？',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '明るくて自分の意見を堂々とした態度で言える人。'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '大人しくて内向的な人。'
                    },
                ],
            },
            {
                which:"EI",
                question: "新学期の始まり！隣の席にクラスメイトに挨拶するときは？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "自分から挨拶をする。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "相手から挨拶されるのを待つ。"
                    },
                ]
            },
            {
                which:"EI",
                question: "好きな異性の前に連れて行かれて、話しかけてみようよ、と友達に促された。",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "一緒に笑いながら楽しく会話する。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "ぎこちなくて照れくさくて静かに笑うだけ。"
                    },
                ]
            },
            {
                which:"SN",
                question: "好きな人のことを思うときの自分は？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "現実的にこの恋は叶うだろうか？"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "もしあの人と付き合ったら…あれもこれもしたい～もう、ときめきが止まらない！"
                    },
                ]
            },
            {
                which:"SN",
                question: "恋に落ちたあなたの目に、世界はどんな風に映っていますか？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "「山は山　 水は水」ありのままに見えている。"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "現実よりは自分だけの世界、妄想が広がる。"
                    },
                ]
            },
            {
                which:"SN",
                question: "デート中、お腹が減ってきたところ丁度いい店を見つけた。",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "レビューを見たけど、良い店らしい！この店に入ろう！"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "なんとなくだけど、この店絶対に美味しいと思うよ。"
                    },
                ]
            },
            {
                which:"TF",
                question: "あなたの「怒りタイプ」は？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "怒った理由について理性的に話す。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "怒りがこみ上げてきて涙が出る。"
                    },
                ]
            },
            {
                which:"TF",
                question: "好きな人が大変な状況に置かれたら？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "現実的な解決策を提示して応援する。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "その人の気持ちに共感してあげて、精神的に支えてあげる。"
                    },
                ]
            },
            {
                which:"TF",
                question: "好きな人と話すときの自分は？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "相手のことについて知りたいので色々質問する。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "相手の話にリアクションを打ちつつ、話に共感してあげる。"
                    },
                ]
            },
            {
                which:"JP",
                question: "突然沖縄に行きたくなった。旅行に行く時はどうする？ ",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "曜日ごとに詳細な日程を計画する。"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "飛行機のチケットは予約した。これで計画することはもう終わった。"
                    },
                ]
            },
            {
                which:"JP",
                question: "自分により近いタイプは？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "整理整頓上手で、物の置き場所を把握している。"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "物の置き場所をちゃんと把握しているつもりだったのに、いざ探すとその場には無い…"
                    },
                ]
            },
            {
                which:"JP",
                question: "好きな人に告白するなら？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "徹底的にシミュレーションして告白するタイミングを計らう。"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "雰囲気をみて、直感的に告白する。"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLoveJP/INFP.png'
            },
        ]
    },
    // oneSidedLove
    {
        info : {
            mainTitle:"짝사랑 캔디 테스트",
            subTitle:"나의 짝사랑 캔디 타입은 무엇일까?",
            mainUrl:"oneSidedLove",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/oneSidedLove-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/oneSidedLove-thumb.png",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '친구들이 말하는 나는?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '활발하고 내 의견을 얘기할 때 당당한 편!'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '소극적이면서 조금 조용한 편'
                    },
                ],
            },
            {
                which:"EI",
                question: "새 학기의 시작! 옆자리 앉은 친구에게 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "친구에게 먼저 인사한다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "친구가 먼저 인사할 때 까지 기다린다."
                    },
                ]
            },
            {
                which:"EI",
                question: "친구가 좋아하는 이성 앞에 끌고 가 같이 대화를 나누자고 한다.",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "같이 웃으며 즐겁게 대화한다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "쑥스러워서 조용히 미소만 짓고 어색하게 있는다."
                    },
                ]
            },
            {
                which:"SN",
                question: "좋아하는 사람을 생각할 때 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "현실적으로 이루어질 수 있을까?"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "하...그 사람이랑 사귀면 이것도 저것도 하고~ 아 설레네!"
                    },
                ]
            },
            {
                which:"SN",
                question: "사랑에 빠진 나, 내가 세상을 바라볼 때?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "‘산은 산이요. 물은 물이로다.’ 있는 그대로 본다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "현실보다는 나만의 세계, 상상의 나래를 펼친다."
                    },
                ]
            },
            {
                which:"SN",
                question: "데이트 중 슬슬 배가 고픈데 음식점을 발견했다.",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "리뷰 보니 괜찮다! 여기로 가자!"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "오오 보기에 딱 여긴 맛집 스멜난다."
                    },
                ]
            },
            {
                which:"TF",
                question: "화가 났을 때 나의 첫 반응은?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "화난 이유에 대해 이성적으로 말한다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "분노에 차올라 눈물부터 난다."
                    },
                ]
            },
            {
                which:"TF",
                question: "좋아하는 사람이 힘든 상황에 처했다.",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "현실적인 해결책을 제시하고 응원한다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "감정을 공감하고 정신적인 지지를 해준다."
                    },
                ]
            },
            {
                which:"TF",
                question: "좋아하는 사람과 대화할 때 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "질문으로 상대방에 대해 물어보고 궁금해한다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "그 사람이 대화할 때 리액션하며 공감한다."
                    },
                ]
            },
            {
                which:"JP",
                question: "갑자기 분위기 제주도! 제주도에 가야겠다!",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "요일별로 세부일정을 계획한다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "비행기 표 예매 완료~! 계획은 거의 끝났다고 본다."
                    },
                ]
            },
            {
                which:"JP",
                question: "나랑 더 가까운 것은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "정리정돈을 잘하고 내 물건이 어딨는지 잘 찾는다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "내 물건들은 어디 있는지 잘 안다고 생각하지만, 막상 찾아보면 없다…"
                    },
                ]
            },
            {
                which:"JP",
                question: "좋아하는 사람에게 고백하려고 한다.",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "철저한 계획을 잡고 고백할 타이밍을 노린다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "분위기 봐서 즉흥적으로 고백한다."
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/oneSidedLove/INFP.png'
            },
        ]
    },
    // hanbokBTIJP
    {
        info : {
            mainTitle:"韓服BTI",
            subTitle:"韓服BTI 韓服テスト",
            mainUrl:"hanbokBTIJP",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/hanbokBTIJP-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/hanbokBTIJP-thumb.png",
            // horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Japan/hanbokBTIJP.png",
            lang:"JP"
        },
        questions:[
            {
                which:"EI",
                question: "時代劇ドラマの主人公の韓服、真似してみようよ。\nと友達に誘われたら？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "いいね！じゃあ、私はファン・ジニの衣装が着てみたい！\nあなたは誰がいい？"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "えっ、ちょっと、恥ずかしいよ…"
                    },
                ],
            },
            {
                which:"SN",
                question: "韓服体験をすることになった。\n韓服を着た自分を想像してみるなら？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "実際着てみないと、\n想像したって意味ないよ"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "うーん。こんな感じはどうかな。\nどれが似合うんだろう？と、イメージを膨らます。"
                    },
                ]
            },
            {
                which:"TF",
                question: "友達とランチをするときの自分は？",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "友達が食べたいものに合わせる。"
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "自分が食べたいものを積極的にアピール！"
                    },
                ]
            },
            {
                which:"JP",
                question: "民俗村に遊びに行って、\n伝統体験をするならどうする？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "どんな体験ができるのか、\nあらかじめネットで調べておく！"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "とりあえず行って、\n気になることから体験する！"
                    },
                ]
            },
            {
                which:"SN",
                question: "韓服を着るときの自分は？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "伝統の着付けを守って着る"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "自分流で好きなように着る！"
                    },
                ]
            },
            {
                which:"SN",
                question: "お悩みの相談に乗るときの自分は？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "共感より現実的なアドバイスをする。"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "その人の感情に共感してあげる。"
                    },
                ]
            },
            {
                which:"JP",
                question: "今日はお酒が飲みたいな、\nと思って友達にLINEをした。",
                answers:[
                    {
                        type: "P",
                        score: 2,
                        content: "今夜焼酎飲もうよ。"
                    },
                    {
                        type: "J",
                        score: 5,
                        content: "週末空いてる？\n焼酎でも飲まない？"
                    },
                ]
            },
            {
                which:"JP",
                question: "民俗村に行くことになった。\nその日の予定を立てるなら？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "必須コースは必ず行かなきゃ！\n予定通りに動く！"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "計画はあくまでも計画に過ぎない。\n歩き回って予定になかった場所にも立ち寄る。"
                    },
                ]
            },
            {
                which:"TF",
                question: "韓服体験どうだった？と友達に聞かれたら、\nどう答える？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "久しぶりに韓服が着れて、\n良い経験だったよ。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "韓服って本当にきれいだね！\n時代劇ドラマの主人公になったような気分だった。"
                    },
                ]
            },
            {
                which:"TF",
                question: "友達に悩みを相談されたけど、\nよくよく聞いたら友達の方が悪い。",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "友人の悪いところをちゃんと説明してあげる。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "直接非難するよりは、\n遠回しに言う。"
                    },
                ]
            },
            {
                which:"EI",
                question: "韓服を着て、\nせっかくだから友達と二人で写真を撮りたい。",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "周りの人にお願いして、\nその人達の写真を撮ってあげた後、\nこちらの写真も撮ってもらう。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "誰かに「写真撮ってください」とお願いされたら、\nついでに「こちらも」言う。"
                    },
                ]
            },
            {
                which:"EI",
                question: "花の金曜日、そして週末。\n何をする？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "友達数人で遊びまくってリフレッシュする。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "自宅で休んでリフレッシュする。"
                    },
                ]
            }
        ],
        results:[
            {
                type: "ESTJ",
                desc: `ESTJ
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `ESTP`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/ESTP.jpg'
            },
            {
                type: "ESFJ",
                desc: `ESFJ`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `ESFP`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `ENTJ`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `ENTP
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `ENFJ`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `ENFP`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `ISTJ`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `ISTP`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `ISFJ`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `ISFP
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/ISFP.jpg'
            },
            {
                type: "INTJ",
                desc: `INTJ`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/INTJ.png'
            },
            {
                type: "INTP",
                desc: `INTP`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/INTP.png'
            },
            {
                type: "INFJ",
                desc: `INFJ`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/INFJ.png'
            },
            {
                type: "INFP",
                desc: `INFP`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIJP/INFP.png'
            },
        ]
    },
    // hanbokBTIEng
    {
        info : {
            mainTitle:"HanbokBTI",
            subTitle:"Which Hanbok style suits me? Korean traditional clothes test",
            mainUrl:"hanbokBTIEng",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/hanbokBTIEng-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/hanbokBTIEng-thumb.png",
            // horizontalBanner: "https://images.ktestone.com/horizontalNewTest/USA/hanbokBTIEng.png",
            lang:"Eng"
        },
        questions:[
            {
                which:"EI",
                question: "Let's try on a Hanbok,\nfollowing the heroine of our historical drama!\nMy friend!",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Yes, yes!\nThen I'll play the role of Hwang Jin-i!\nWhich character you will choose?"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Ah… I'm a little shy.... Hehehe"
                    },
                ],
            },
            {
                which:"SN",
                question: "I, who decide to make experience for a Hanbok,\nimagine myself wearing a Hanbok.",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "What can I only if I imagine wearing it on myself?\nI think I should wear it myself."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Well? Shall we wear it like this?\nWhat would suit me?\nI imagine alone."
                    },
                ]
            },
            {
                which:"TF",
                question: "Friends who want to have lunch with me!",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "Follow what your friends ask to eat!"
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "I actively recommend what I want to eat!"
                    },
                ]
            },
            {
                which:"JP",
                question: "I decided to go to the folk village\nand experience the tradition. I do?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Searching the internet,\nI go there for the experiences you can have in the folk village! "
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Go there first and do what you like!"
                    },
                ]
            },
            {
                which:"SN",
                question: "What if I wore a Hanbok?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Wear it in the traditional way"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Wear it uniquely in my way!"
                    },
                ]
            },
            {
                which:"SN",
                question: "When consulting for others,\nshall I?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Gives them realistic advices rather than empathy."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "I empathizes with them emotionally."
                    },
                ]
            },
            {
                which:"JP",
                question: "As I want to drink liquor,\nI did a Kakaako to my friend!",
                answers:[
                    {
                        type: "P",
                        score: 2,
                        content: "Soju tonight?"
                    },
                    {
                        type: "J",
                        score: 5,
                        content: "What are you going to do this weekend?\nHow about drinking Soju with me?"
                    },
                ]
            },
            {
                which:"JP",
                question: "I decided to go to the folk village\nand made a plan for the day!",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Make sure to go to the “must” course!\nFollow the plan!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "The plan is just a plan only~\nGo around as planned but go somewhere else!"
                    },
                ]
            },
            {
                which:"TF",
                question: "For my acquaintance’s question of\n“How was your Hanbok experience?” Shall I?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "I had a good experience wearing a Hanbok after a while."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Wow, Korean Hanbok is so pretty!\nI looked like I was the main character of a historical drama"
                    },
                ]
            },
            {
                which:"TF",
                question: "A friend who talks about his worries to me,\nwhich I think it may be from his fault most.",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Explain him about the wrong part carefully."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Explain him, beating around bush instead of telling him directly."
                    },
                ]
            },
            {
                which:"EI",
                question: "As I am wearing a Hanbok,\nI want to take a picture with my friend.",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Ask a person passing to take a picture for us."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Speak to someone to asks for taking a picture."
                    },
                ]
            },
            {
                which:"EI",
                question: "During a gorgeous and hot Friday and golden weekend,\nshall I?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Recharge myself while playing actively with several people."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Recharge myself staying at home."
                    },
                ]
            }
        ],
        results:[
            {
                type: "ESTJ",
                desc: `ESTJ
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `ESTP`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/ESTP.jpg'
            },
            {
                type: "ESFJ",
                desc: `ESFJ`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/ESFJ.jpg'
            },
            {
                type: "ESFP",
                desc: `ESFP`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/ESFP.jpg'
            },
            {
                type: "ENTJ",
                desc: `ENTJ`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/ENTJ.jpg'
            },
            {
                type: "ENTP",
                desc: `ENTP
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/ENTP.jpg'
            },
            {
                type: "ENFJ",
                desc: `ENFJ`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `ENFP`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `ISTJ`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/ISTJ.jpg'
            },
            {
                type: "ISTP",
                desc: `ISTP`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/ISTP.jpg'
            },
            {
                type: "ISFJ",
                desc: `ISFJ`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/ISFJ.jpg'
            },
            {
                type: "ISFP",
                desc: `ISFP
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/ISFP.jpg'
            },
            {
                type: "INTJ",
                desc: `INTJ`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/INTJ.jpg'
            },
            {
                type: "INTP",
                desc: `INTP`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/INTP.jpg'
            },
            {
                type: "INFJ",
                desc: `INFJ`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/INFJ.jpg'
            },
            {
                type: "INFP",
                desc: `INFP`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTIEng/INFP.jpg'
            },
        ]
    },
    // hanbokBTI
    {
        info : {
            mainTitle:"한복BTI hanbokBTI",
            subTitle:"나에게 어울리는 한복스타일은? 한복BTI 한복테스트",
            mainUrl:"hanbokBTI",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/hanbokBTI-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/hanbokBTI-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/hanbokBTI.png",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '우리 사극드라마 주인공 한복을 따라 입어보자! 라는 친구!',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '그래그래! 나 그럼 황진이할래! 너 뭐할랭?'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '아…조금 부끄럽네…ㅎ'
                    },
                ],
            },
            {
                which:"SN",
                question: "한복 체험을 하기로 한 나, 한복을 입은 나를 상상해보았다.",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "뭐 직접 입어봐야 알지 상상해봐야 뭐하겠니"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "음? 이렇게 입어볼까? 뭐가 어울릴까? 혼자 상상의 나래를 펼친다."
                    },
                ]
            },
            {
                which:"TF",
                question: "점심을 먹자고 하는 친구들!",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "친구들이 먹자고 하는 거에 따른다!"
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "내가 먹고 싶은 걸 적극적으로 추천한다!"
                    },
                ]
            },
            {
                which:"JP",
                question: "민속촌에 가서 전통체험을 하기로 했다. 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "민속촌에 무슨 체험이 있는지 인터넷 써치해보고 간다!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "일단 가서 먼저 마음에 드는 거 먼저 한다!"
                    },
                ]
            },
            {
                which:"SN",
                question: "한복을 입을 때 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "전통 방식 그대로 따라 입는다 "
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "나만의 방법으로 색다르게 입어본다! "
                    },
                ]
            },
            {
                which:"SN",
                question: "고민 상담을 들어줄 때 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "공감보다는 현실적인 조언을 해준다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "감정적으로 공감해준다."
                    },
                ]
            },
            {
                which:"JP",
                question: "술이 마시고 싶은 나는 친구에게 카톡을 했다!",
                answers:[
                    {
                        type: "P",
                        score: 2,
                        content: "오늘 저녁에 소주 긔?"
                    },
                    {
                        type: "J",
                        score: 5,
                        content: "주말에 머해? 소주 기기할랭?"
                    },
                ]
            },
            {
                which:"JP",
                question: "민속촌을 가기로 해서 하루의 계획을 짜보기로 했다!",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "필수코스는 반드시 가자! 계획대로 움직이기!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "계획은 계획일 뿐~ 돌아다니다가 다른 곳으로 가버리기!"
                    },
                ]
            },
            {
                which:"TF",
                question: "한복 체험 어땠어? 라고 물어보는 지인의 말에 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "오랜만에 한복도 입어보고 좋은 경험했어!"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "와 진짜 우리나라 한복 너무 이뻐! 나 무슨 사극 드라마 주인공 된줄 알았잖아"
                    },
                ]
            },
            {
                which:"TF",
                question: "고민을 얘기 하는 친구, 들어보니 친구의 잘못이 크다",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "친구의 잘못된 부분을 잘 설명해준다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "직접적이기보다 돌려서 잘 설명해준다."
                    },
                ]
            },
            {
                which:"EI",
                question: "한복도 입어봤으니 친구랑 둘이 사진을 찍고 싶다.",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "지나가는 사람에게 다가가서 먼저 찍어주고 우리도 찍어달라고 한다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "누군가 우리에게 찍어 달라고 하면 말한다."
                    },
                ]
            },
            {
                which:"EI",
                question: "화려한 불금 그리고 황금 같은 주말에 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "여러명과 함께 신나게 놀면서 에너지를 채운다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "집에서 휴식을 취하며 에너지를 채운다."
                    },
                ]
            },
            {
                which:"EI",
                question: "내가 생각 하는 한복은?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "우리의 전통미를 상징하는 한복이다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "한민족의 고유한 의복으로 예부터 전해 내려오는 전통의상이다."
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `도도하고 시크한 카리스마가 느껴지는 깔끔한 전통 한복’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `개방적이고 활발한 생활 한복\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `따뜻하면서 밝은 분위기를 돋보이게 하는 전통 한복\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `트렌드를 넘어선, 화려하고 고혹적인 한복\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `늘 자신감이 넘치고 당당한 나에게 어울리는 세련된 한복\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `늘 자신감 넘치는 나만의 개성이 드러난, 화려한 그라데이션 한복 \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `나만의 포인트 아이템을 더한, 단정하면서 부드러운 느낌의 한복\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `기존의 웨딩 한복을 벗어난 매력적인 한복 드레스\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `깔끔하면서 고급스러운 느낌을 주는 생활 한복\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `활동적이고 편안한, 담백한 감성의 생활 한복\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `차분하고 온화한 분위기의 전통 한복\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `단정하면서 무난한데 나만의 포인트를 더한 한복\n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `부족한 나의 감성을 다시 살려줄 낭만적인 한복\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/INTJ.png'
            },
            {
                type: "INTP",
                desc: `느긋하고 편안하게 움직일 수 있는, 개성 있는 생활한복\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/INTP.png'
            },
            {
                type: "INFJ",
                desc: `차분하면서 고급스럽고, 단정하며 캐주얼한 느낌의 한복\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/INFJ.png'
            },
            {
                type: "INFP",
                desc: `섬세하고 비밀스러운 개성이 드러나는 한복\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/hanbokBTI/INFP.png'
            },
        ]
    },
    // constellation
    {
        info : {
            mainTitle:"별자리 테스트",
            subTitle:"별자리로 알아보는 내 성격",
            mainUrl:"constellation",
            scoreType:"Constellation",
            mainImage:"https://images.ktestone.com/introImages/constellation-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/constellation-thumb.png",
            lang:"Kor"
        },
        questions:[
            {
                question: '데이트 전 날 나의 모습은?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '나가기 직전 마음에 드는 옷을 입는다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '자기 전 머릿속으로 나의 스타일링을 생각하고 잔다.'
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '전 날 머리부터 발끝까지 스타일링과 옷을 미리 준비한다.'
                    },
                ],
            },
            {
                question: "갑자기 자취방에 놀러 온다는 애인!\n그때의 나는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "아아... 왜 갑자기 오는 거야?! 보이는 곳만 치워 둔다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "모아둔 쓰레기를 버리고 바로 청소를 시작한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 미리미리 해 두었기 때문에 바로 주소를 보낸다."
                    },
                ]
            },
            {
                question: "좋아하는 이성이 생겼을 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "상대의 SNS을 탐방하며, 미래의 우리 모습을 상상해본다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "좋아하는 이성의 친구에게 도움을 요청한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "먼저 연락할 거리를 만들며 적극적으로 대시한다."
                    },
                ]
            },
            {
                question: "카페 안에 이상형인 사람과 계속 눈이 마주친다.\n 눈웃음까지 보내는데...?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "지금 말하면 좋은 말이 안 나올 것 같아. 좀 이따 연락할게."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "아!!!!!!!짜증나!!!!!진짜!!!!!! 도대체 왜 그러는 거야?!?!"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "이런 점에서 나는 화가 난 거야. 그런 부분은 고쳐줬으면 좋겠어."
                    },
                ]
            },
            {
                question: "쉬고 있는데 갑자기 걸려온 남사친/여사친의 전화, \n친구들이 같이 놀고 싶다며 나올 수 있냐고 물어보는데...?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: '귀찮은데… 아쉽긴 하지만 “시간이 너무 늦었어… 나 집에서 쉴래!”'
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "일단 끊고 수십 번 고민 끝에 나가기로 한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '오케이~ 인연 한 번 만들어보자~ “갈게~~~~”'
                    },
                ]
            },
            {
                question: "다가온 기념일! 나는 어떤 선물을 준비할까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "정성 어린 편지와 기억에 남을 만한 선물을 준비한다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "커플로 착용할 수 있는 아이템을 선물한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 사고 싶다거나 필요한 물건을 기억해 두었다가 서프라이즈로 선물한다."
                    },
                ]
            },
            {
                question: "내가 하고 싶은 연애 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "다이나믹한 화려한 연애 (단, 너무 화려해서 바람 피울 가능성 50%)"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "나만 바라보는 연애 (단, 너무 좋아해서 집착 대마왕)"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구같이 편안한 연애 (단, 가끔 친구인지 애인인지 헷갈림)"
                    },
                ]
            },
            {
                question: "애인과 대화할 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 5,
                        content: "장난치고 티키타카가 잘 되는 대화가 좋다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "서로의 생각을 공유하는 대화가 너무 좋다."
                    },
                ]
            },
            {
                question: "친구가 나에게 고민상당을 한다. 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "고민에 대한 구체적인 해결책을 제시한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "고민에 대해 빠져들어 감정적으로 같이 공감해준다."
                    },
                ]
            },
            {
                question: "기다려왔던 짝사랑하던 그/그녀와의 데이트 날..\n갑자기 급한 일이 생겼다며 다음에 만나자고 한다.\n과연 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "어쩔 수 없지… 알겠어 다음에 보자!"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "알겠어…근데 심각한 일이야?"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "아 진짜? 그럼 날짜 다시 조정하자! 언제가 괜찮아?"
                    },
                ]
            },
        ],
        results:[
            {
                type: "양자리",
                desc: `
                `,
                query: "didwkfl",
                score_range:range(2),
                img_src:'https://images.ktestone.com/resultImages/constellation/didwkfl.png'
            },
            {
                type: "황소자리",
                desc: `
                `,
                query: "ghkdthwkfl",
                score_range:range(2, 3),
                img_src:'https://images.ktestone.com/resultImages/constellation/ghkdthwkfl.png'
            },
            {
                type: "쌍둥이자리",
                desc: `
                `,
                query: "Tkdenddlwkfl",
                score_range:range(3, 4),
                img_src:'https://images.ktestone.com/resultImages/constellation/Tkdenddlwkfl.png'
            },
            {
                type: "게자리",
                desc: `
                `,
                query: "rpwkfl",
                score_range:range(4, 5),
                img_src:'https://images.ktestone.com/resultImages/constellation/rpwkfl.png'
            },
            {
                type: "사자자리",
                desc: `
                `,
                query: "tkwkwkfl",
                score_range:range(5, 6),
                img_src:'https://images.ktestone.com/resultImages/constellation/tkwkwkfl.png'
            },
            {
                type: "처녀자리",
                desc: `
                `,
                query: "cjsuwkfl",
                score_range:range(6, 7),
                img_src:'https://images.ktestone.com/resultImages/constellation/cjsuwkfl.png'
            },
            {
                type: "천칭자리",
                desc: `
                `,
                query: "cjscldwkfl",
                score_range:range(7, 8),
                img_src:'https://images.ktestone.com/resultImages/constellation/cjscldwkfl.png'
            },
            {
                type: "전갈자리",
                desc: `
                `,
                query: "wjsrkfwkfl",
                score_range:range(8, 9),
                img_src:'https://images.ktestone.com/resultImages/constellation/wjsrkfwkfl.png'
            },
            {
                type: "사수자리",
                desc: `
                `,
                query: "tktnwkfl",
                score_range:range(9, 10),
                img_src:'https://images.ktestone.com/resultImages/constellation/tktnwkfl.png'
            },
            {
                type: "염소자리",
                desc: `
                `,
                query: "duathwkfl",
                score_range:range(10, 11),
                img_src:'https://images.ktestone.com/resultImages/constellation/duathwkfl.png'
            },
            {
                type: "물병자리",
                desc: `
                `,
                query: "anfqudwkfl",
                score_range:range(11, 12),
                img_src:'https://images.ktestone.com/resultImages/constellation/anfqudwkfl.png'
            },
            {
                type: "물고기자리",
                desc: `
                `,
                query: "anfrhrlwkfl",
                score_range:range(12, 13),
                img_src:'https://images.ktestone.com/resultImages/constellation/anfrhrlwkfl.png'
            },
        ]
    },
    // persoanlColorFactInd
    {
        info : {
            mainTitle:"FactBTI",
            subTitle:"Personal Color Test Way Harsh",
            mainUrl:"personalColorFactInd",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorFactInd-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorFactInd-thumb.png",
            lang:"Hin"
        },
        questions:[
            {
                which:"EI",
                question: 'क्लास में, मेरे बगल में बैठने वाले दोस्त से…',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'मैं आगे होकर बात करना शुरू करता हूँ '
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'पहले वह बात शुरू करे, तभी मैं भी बात करता हूँ'
                    },
                ],
            },
            {
                which:"EI",
                question: "रास्ते पर बहुत प्यारा सा कुत्ता दिखने पर",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "'अरे कितना प्यारा है' बोलते हुए कुत्ते के पास जाता हूँ"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "मन में ही कितना प्यारा है सोचता हूँ"
                    },
                ]
            },
            {
                which:"EI",
                question: "रास्ते पर चलते- चलते बहुत सुन्दर जगह मिली ! फोटो खींचते समय…",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "अरे आप यहाँ फोटो खिंचवाना चाहेंगे? घणी सुथरी जगह है ! खड़े हो जाइये !"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "अपने मोबाइल से नज़ारे का फोटो खींचकर दोस्त के पीछे जाता हूँ"
                    },
                ]
            },
            {
                which:"SN",
                question: "फिल्म का अंत ठीक से समझ नहीं आया",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "फिल्म निर्देशक के सन्देश को समझने की कोशिश करता हूँ"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "अपनी कल्पनाओं में नायक- नायिका की कहानी बनाकर खुश हो जाता हूँ"
                    },
                ]
            },
            {
                which:"SN",
                question: "कोई चीज़ खरीदने का मन हो रहा है",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "अभी मेरे पास पैसे नहीं है, अगले महीने खरीदता हूँ"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "अभी खरीदता हूँ ! अगले महीने लेने से अभी लेना ज़्यादा बेहतर है ~"
                    },
                ]
            },
            {
                which:"SN",
                question: "मैं कैसा इंसान हूँ ?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "पहले काम की फ़ाइल बनाऊँगा, फिर प्लान के हिसाब से काम करूँगा"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "हल्के कामों को ज़्यादा से ज़्यादा, झट से ख़त्म करूँगा"
                    },
                ]
            },
            {
                which:"TF",
                question: "अगर कोई दोस्त 'क्या मैं मोती लग रही हूँ ?' पूछे, तो मेरा जवाब",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "हां, थोड़ी मोती लग रही हो"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "नहीं ! तुम्हारा दिमाग ठीक है क्या ?! क्या बकवास कर रही हो !! एकदम फिट लग रही हो ?!"
                    },
                ]
            },
            {
                which:"TF",
                question: "आज मेरा मूड ख़राब है, कुछ तीखा खाना पड़ेगा",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "अच्छा ~ क्या खाएगा ?"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "काहे? तेरा मूड क्यों ख़राब है ?"
                    },
                ]
            },
            {
                which:"TF",
                question: "आपका दोस्त भारी सामान लिए जा रहा है",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "अरे बाप रे ? क्या लिए जा रहे हो ? लोहे का टुकड़ा ?"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "भारी है न ? मैं मदद करूँ ?"
                    },
                ]
            },
            {
                which:"JP",
                question: "टीम प्रोजेक्ट में मैं कैसा हूँ ?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "परफेक्ट प्लान बनाकर प्लान के हिसाब से ही करता हूँ"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "दूसरों के काम में योगदान देता हूँ"
                    },
                ]
            },
            {
                which:"JP",
                question: "मेरे लिए 'प्लान ' की परिभाषा क्या है ?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "मकसद को पूरा करने के लिए अच्छे से प्लान बनाता हूँ"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "प्लान ? वह क्या चीज़ है? खाने का नाम है क्या ?"
                    },
                ]
            },
            {
                which:"JP",
                question: "मैं",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "ध्यान केंद्रित करता हूँ, काम को आगे ले जाता हूँ, मगर थोड़ा कड़ा हूँ"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "बिना प्लान के कुछ भी करता हूँ, लेकिन काम शुरू करने से पहले सौ बार सोचता हूँ"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactInd/INFP.png'
            },
        ]
    },
    // persoanlColorFactEng
    {
        info : {
            mainTitle:"FactBTI",
            subTitle:"Personal Color Test Way Harsh",
            mainUrl:"personalColorFactEng",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorFactEng-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorFactEng-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/USA/personalColorFactEng.png",
            lang:"Eng"
        },
        questions:[
            {
                which:"EI",
                question: 'You have a new peer. Do I?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'Saying hello, talk to first'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'He/She says hello and talk to me.'
                    },
                ],
            },
            {
                which:"EI",
                question: "Walking street, you see a pretty dog walking.",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "‘Saying, How pretty!’ loud, walking to her"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Just thinking ‘cute’ in mind"
                    },
                ]
            },
            {
                which:"EI",
                question: "Walking in the street, you spot the beautiful place! Wanna take picture!",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Oh? How about taking a picture here? So beautiful!! Please make posture!"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Just taking picture by mobile and follow the party."
                    },
                ]
            },
            {
                which:"SN",
                question: "The movie has an open ending.",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Think the director’s intention and then stop doing."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Imagine what character is going on and satisfied with it."
                    },
                ]
            },
            {
                which:"SN",
                question: "I have something to buy.",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Buy it next, I don’t have money now."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Get it! I can get money in my bank account. It is almost same to buy now or later."
                    },
                ]
            },
            {
                which:"SN",
                question: "Who am I?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Doing exactly after researching what is going on."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Doing quickly and not deeply a lot of things under my estimation."
                    },
                ]
            },
            {
                which:"TF",
                question: "A friend of mine say “Am I fatty?”",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Yes…look a little chubby."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "What! No way! You are still in good shape!"
                    },
                ]
            },
            {
                which:"TF",
                question: "I want to have hot foods because I am too annoyed.",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Oh! LoL! What are you gonna eat?"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Woops! What make you so annoyed?"
                    },
                ]
            },
            {
                which:"TF",
                question: "Friend carrying heavy stuff.",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Woops?? What is it? Is it steel?"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Oh? What a heavy!! Can I help?"
                    },
                ]
            },
            {
                which:"JP",
                question: "What am I gonna do when the group activity starts?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Make a plan thoroughly and do it systematically."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Take part in that activity cooperatively."
                    },
                ]
            },
            {
                which:"JP",
                question: "What is the plan for me?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Make a plan elaborately to accomplish the goal."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Nothing is another plan…"
                    },
                ]
            },
            {
                which:"JP",
                question: "I am..",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Focus on thoroughly and drive myself but a little stubborn."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Spontaneous but not acting and no plan."
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFactEng/INFP.png'
            },
        ]
    },
    // persoanlColorFact
    {
        info : {
            mainTitle:"팩트BTI FactBTI",
            subTitle:"퍼스널컬러테스트 팩폭편",
            mainUrl:"personalColorFact",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/persoanlColorFact-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/persoanlColorFact-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/personalColorFact.png",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '새로운 짝꿍이 생겼다. 나는?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '먼저 안녕하며 인사를 하고 말을 건다.'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '짝꿍이 먼저 나에게 인사하면 말을 한다.'
                    },
                ],
            },
            {
                which:"EI",
                question: "길을 지나가다가 너무 이쁜 강아지가 산책을 한다.",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "'어머~ 너무 이쁘다' 크게 말하고 다가간다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "그냥 귀엽다 하고 속으로 생각한다. "
                    },
                ]
            },
            {
                which:"EI",
                question: "지나가다가 마음에 드는 장소를 발견! 사진을 찍고 싶다!",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "어? 여기서 사진 찍고 갈까요?! 너무 이쁜데!!! 한번 서보세요!"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "그냥 폰으로 풍경만 찍고 일행을 따라간다."
                    },
                ]
            },
            {
                which:"SN",
                question: "영화를 보는데 열린 결말로 끝났다.",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "그 감독의 의도를 생각하고 찾아보다가 만다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "그들이 어떻게 되었을지 내맘대로 상상하고 만족해한다."
                    },
                ]
            },
            {
                which:"SN",
                question: "사고 싶은 물건이 있다.",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "그래도 현재 돈이 없으니까 다음 달에 사자!"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "일단 사자! 어차피 다음 달에 돈 들어와서 사는 거나 지금 사는 거나~"
                    },
                ]
            },
            {
                which:"SN",
                question: "내 모습과 가까운 것은?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "현재 어떤 일이 있는지 자료 조사 후 정확한 일처리"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "내 판단하에 너무 깊지 않은 많은 일들을 신속하게 처리"
                    },
                ]
            },
            {
                which:"TF",
                question: "나 살쪘지? 라고 물어보는 친구에게",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "응. 아무래도 조금 그래보인다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "아니!?!? 뭔솔?! 짜증나게!!!너무 괜찮은데?!"
                    },
                ]
            },
            {
                which:"TF",
                question: "나 오늘 너무 짜증나서 매운거 먹어야겠어",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "아ㅋㅋㅋ 뭐 먹으려고?"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "잉? 왜 짜증나는데?"
                    },
                ]
            },
            {
                which:"TF",
                question: "무거운 걸 들고 있는 친구",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "이잉??? 그거 뭐여? 쇠야?"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "어? 무겁지? 내가 도와줄까?"
                    },
                ]
            },
            {
                which:"JP",
                question: "조별과제 할 때 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "철저한 계획으로 시작해서 체계적으로 하는 사람"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "매우 협조적으로 참가하는 사람"
                    },
                ]
            },
            {
                which:"JP",
                question: "나에게 계획이란?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "목적을 이루기 위해 촘촘하게 계획을 세운다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "무계획도 계획인 것을…"
                    },
                ]
            },
            {
                which:"JP",
                question: "나는",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "철저하게 집중해서 추진력있지만 좀 고집스러움."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "즉흥적이지만 행동력이 낮고 계획이 없음."
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/persoanlColorFact/INFP.png'
            },
        ]
    },
    // dringkingHabitJP
    {
        info : {
            mainTitle:"アルコールBTI:酒癖テスト",
            subTitle:"性格で分かる「酔っ払った私はどんな人なんだろう？'",
            mainUrl:"dringkingHabitJP",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/dringkingHabitJP-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/dringkingHabitJP-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Japan/dringkingHabit.png",
            lang:"JP"
        },
        questions:[
            {
                which:"EI",
                question: 'お酒の席で他の友達も呼びたいと友人に聞かれた。\nどうする？',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "「全然いいよ、飲みながら仲良くなろうよ！」\nと快諾する。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "「えっ、ちょっと気まずくなりそう…」\nとは思いつつも断れず、渋々了承する。"
                    },
                ],
            },
            {
                which:"EI",
                question: "居酒屋で呼び出しベルを押しても店員さんが来ない。\nどうする？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "すみません！！焼酎一本ください！！！"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "取り敢えずもう一度押して待ってみる。"
                    },
                ]
            },
            {
                which:"EI",
                question: " 「今日は絶対飲むぞ！」と思ったときの自分は？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "電話で友人を誘う。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "一人で宅飲みを楽しむ。"
                    },
                ]
            },
            {
                which:"SN",
                question: "お酒の席で友人が「辛いよ」と泣き出したら？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "現実的なアドバイスをしてあげる。"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "その感情に共感してあげる。"
                    },
                ]
            },
            {
                which:"SN",
                question: "お家に帰りたいのに「2軒目行こう」と言われたら？",
                answers:[
                    {
                        type: "N",
                        score: 2,
                        content: "もーしょうがないな！分かったよ！"
                    },
                    {
                        type: "S",
                        score: 5,
                        content: "ごめん、疲れたから帰るわ"
                    },
                ]
            },
            {
                which:"SN",
                question: "おつまみを頼むときの自分は？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "新しいおつまみよりは、定番ものを頼む。"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "おお！これは何？新しいおつまみ頼んでみようよ!"
                    },
                ]
            },
            {
                which:"TF",
                question: " 自分の向かい側の席の友人が、\nお酒に寄って泣き出した。どうする？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "泣いている理由を教えて。言わないと分からないから。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "何かあったのかな？慰めてあげた方がいいのかな…。"
                    },
                ]
            },
            {
                which:"TF",
                question: "自分の友達が隣のテーブルの人と喧嘩になってしまったが、\n非があるのは友達の方だと思う。",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "友達は今怒っているから、落ち着いたら言葉を選んで言う。"
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "怒っている友達に、「それでもあなたが悪い」と言い聞かせる。"
                    },
                ]
            },
            {
                which:"TF",
                question: "他の人にお酒を注ぐときの自分は？",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "あなたお酒弱いから、これ一杯だけにしておきな。"
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "もー、お酒の前ではみな平等だから。今日は飲もうよ！"
                    },
                ]
            },
            {
                which:"JP",
                question: "ずっと行きたかったお店！\nでもすごい行列ができている。",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "とりあえず待とう。"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "他の店にする。"
                    },
                ]
            },
            {
                which:"JP",
                question: "みんなで集まって飲み会！\n自分が幹事になった！",
                answers:[
                    {
                        type: "P",
                        score: 2,
                        content: "とりあえず自分が立て替えてから、\n事後集金する。"
                    },
                    {
                        type: "J",
                        score: 5,
                        content: "一人2千円の会費を事前徴収しておく。\n残りは後で会計報告する。"
                    },
                ]
            },
            {
                which:"JP",
                question: "友達からの安否確認メールにどう返信している？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "そうそう〜コロナ終わったら会おうか？"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "いいよ！コロナ終わったら一度会おうよ〜"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ISTJ",
                desc: `EB`,
                query: "EB",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/EB.png'
            },
            {
                type: "ESFP",
                desc: `BI`,
                query: "BI",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/BI.png'
            },
            {
                type: "ENFP",
                desc: `DES`,
                query: "DES",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/DES.png'
            },
            {
                type: "INTJ",
                desc: `PR`,
                query: "PR",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/PR.png'
            },
            {
                type: "ISTP",
                desc: `CN`,
                query: "CN",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/CN.png'
            },
            {
                type: "ESFJ",
                desc: `HN`,
                query: "HN",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/HN.png'
            },
            {
                type: "ENFJ",
                desc: `BW`,
                query: "BW",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/BW.png'
            },
            {
                type: "INFP",
                desc: `CJ`,
                query: "CJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/CJ.png'
            },
            {
                type: "ISFJ",
                desc: `SG`,
                query: "SG",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/SG.png'
            },
            {
                type: "ESTP",
                desc: `BUW`,
                query: "BUW",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/BUW.png'
            },
            {
                type: "INFJ",
                desc: `BL`,
                query: "BL",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/BL.png'
            },
            {
                type: "ENTP",
                desc: `ST`,
                query: "ST",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/ST.png'
            },
            {
                type: "ESTJ",
                desc: `PN`,
                query: "PN",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/PN.png'
            },
            {
                type: "ISFP",
                desc: `SS`,
                query: "SS",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/SS.png'
            },
            {
                type: "INTP",
                desc: `GN`,
                query: "GN",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/GN.png'
            },
            {
                type: "ENTJ",
                desc: `BM`,
                query: "BM",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitJP/BM.png'
            },
        ]
    },
    // dringkingHabitEng
    {
        info : {
            mainTitle:"Alcohol_BTI",
            subTitle:"Drinking habits test",
            mainUrl:"dringkingHabitEng",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/dringkingHabitEng-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/dringkingHabitEng-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/USA/dringkingHabitEng.png",
            lang:"Eng"
        },
        questions:[
            {
                which:"EI",
                question: 'My friend asks if it is okay to call his acquaintance at a drinking party.\nThen,  what will you respond?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "‘Yeah, without hesitation say yes and getting close while drinking.’"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Ah… It looks a little awkward... Due to the atmosphere,\nI cannot refuse but say I understand."
                    },
                ],
            },
            {
                which:"EI",
                question: "When I ring the bell at a bar and no one responds, then?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Hi, boss!!!! Here is a bottle of soju!!!!!"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Press once more and wait."
                    },
                ]
            },
            {
                which:"EI",
                question: "If I made up my mind,\n‘I must drink alcohol today, then, you",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Call your friends and tell them to come out."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Enjoy a simple drink at home."
                    },
                ]
            },
            {
                which:"SN",
                question: "When I see a friend crying for having a hard time drinking?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "I give him practical advice."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "I tend to empathize with him emotionally."
                    },
                ]
            },
            {
                which:"SN",
                question: "Friends who want to go to a second bar but want to go home, then?",
                answers:[
                    {
                        type: "N",
                        score: 2,
                        content: "Oh yeah! Let's go!!! "
                    },
                    {
                        type: "S",
                        score: 5,
                        content: "Oh, sorry, I'm tired, I'm going home~ "
                    },
                ]
            },
            {
                which:"SN",
                question: "When ordering snacks. Then,?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Let's just order an acceptable snack rather than a new snack!"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Oh what is this? Let's make an order for a new snack! "
                    },
                ]
            },
            {
                which:"TF",
                question: "A friend sitting in front of me is drunk and cries. then?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Tell me why you cry. I don't know why if you don't tell me."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Why are you crying... I don't have words to say for your comfort."
                    },
                ]
            },
            {
                which:"TF",
                question: "Disputing with the guys at the next table. But it seems my friend did it first.",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "As he got angry, talk to him hitting the bush when he calms down."
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "Tell your angry friend that it's still your fault. "
                    },
                ]
            },
            {
                which:"TF",
                question: "When do I pour alcohol?",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "Uh, you can't drink, so just take this"
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "Eh? Alcohol is fair to everyone! Drink it, boy "
                    },
                ]
            },
            {
                which:"JP",
                question: "There is a bar that I wanted to go to! But I have to put my name in the waiting list.",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Waiting."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Go to another bar."
                    },
                ]
            },
            {
                which:"JP",
                question: "Drinking party together! I am the secretary!",
                answers:[
                    {
                        type: "P",
                        score: 2,
                        content: "First, pay the bill by myself and am refunded later."
                    },
                    {
                        type: "J",
                        score: 5,
                        content: "Send 20,000 won to this account in advance! I'll pay for the rest and let you know"
                    },
                ]
            },
            {
                which:"JP",
                question: "What is my reply to the friend who received the best regards?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Yes~ When do you want to meet after the Corona pandemic ends?"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Okay! Let's meet once the corona is over~"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ISTJ",
                desc: `EB`,
                query: "EB",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/EB_.png'
            },
            {
                type: "ESFP",
                desc: `BI`,
                query: "BI",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/BI_.png'
            },
            {
                type: "ENFP",
                desc: `DES`,
                query: "DES",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/DES_.png'
            },
            {
                type: "INTJ",
                desc: `PR`,
                query: "PR",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/PR_.png'
            },
            {
                type: "ISTP",
                desc: `CN`,
                query: "CN",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/CN_.png'
            },
            {
                type: "ESFJ",
                desc: `HN`,
                query: "HN",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/HN_.png'
            },
            {
                type: "ENFJ",
                desc: `BW`,
                query: "BW",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/BW_.png'
            },
            {
                type: "INFP",
                desc: `CJ`,
                query: "CJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/CJ_.png'
            },
            {
                type: "ISFJ",
                desc: `SG`,
                query: "SG",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/SG_.png'
            },
            {
                type: "ESTP",
                desc: `BUW`,
                query: "BUW",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/BUW_.png'
            },
            {
                type: "INFJ",
                desc: `BL`,
                query: "BL",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/BL_.png'
            },
            {
                type: "ENTP",
                desc: `ST`,
                query: "ST",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/ST_.png'
            },
            {
                type: "ESTJ",
                desc: `PN`,
                query: "PN",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/PN_.png'
            },
            {
                type: "ISFP",
                desc: `SS`,
                query: "SS",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/SS_.png'
            },
            {
                type: "INTP",
                desc: `GN`,
                query: "GN",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/GN_.png'
            },
            {
                type: "ENTJ",
                desc: `BM`,
                query: "BM",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabitEng/BM_.png'
            },
        ]
    },
    // dringkingHabit
    {
        info : {
            mainTitle:"알콜BTI : 술버릇 테스트",
            subTitle:"성격으로 알아보는 취한 나는 어떤 사람일까? 알콜비티아이 술비티아이",
            mainUrl:"dringkingHabit",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/dringkingHabit-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/dringkingHabit-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/dringkingHabit.png",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '술 자리 중 친구가\n아는 지인을 불러도 되냐고 물어본다.\n나는?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "‘그래그래~ 마시면서 친해지는 것이지~ 불러’\n흔쾌히 알겠다고 한다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "‘아…좀 어색할 것 같은데…’\n분위기상 거절하지 못하고 알겠다고 한다."
                    },
                ],
            },
            {
                which:"EI",
                question: "술집에서 벨을 눌렀는데 아무도 오지 않을 때 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "사장님!!!! 여기 소주 한병이요!!!!!"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "한 번 더 누르고 기다려본다."
                    },
                ]
            },
            {
                which:"EI",
                question: "‘오늘은 꼭 술을 먹어야겠어’\n라고 마음먹은 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "친구들에게 전화를 돌리며 나오라고 한다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "집에서 간단한 혼술을 즐긴다."
                    },
                ]
            },
            {
                which:"SN",
                question: "술 마시는데 힘들다고 우는 친구를 볼 때 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "현실적으로 조언해주는 편이다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "감정적으로 공감해주는 편이다."
                    },
                ]
            },
            {
                which:"SN",
                question: "집에 가고 싶은 데 이차가자고 하는 친구들",
                answers:[
                    {
                        type: "N",
                        score: 2,
                        content: "아유 그래그래! 가자 가!!! "
                    },
                    {
                        type: "S",
                        score: 5,
                        content: "아 미안 나 피곤해 집 간다~"
                    },
                ]
            },
            {
                which:"SN",
                question: "안주를 시킬 때 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "새로운 안주 보다는 그냥 무난한 안주시키자!"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "오오 이거 뭐야? 새로운 안주시켜 보자!"
                    },
                ]
            },
            {
                which:"TF",
                question: "내 앞자리에 앉은 친구가 술에 취해서 운다. 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "왜 우는지 이유를 말해. 말하지 않으면 모르잖아."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "왜 울지… 뭐라고 위로의 말을 해줘야 할지 모르겠다."
                    },
                ]
            },
            {
                which:"TF",
                question: "옆자리와 시비가 붙었다.\n하지만 내 친구가 먼저 잘못한 듯하다.",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "화나 있는 친구여서 진정시킨 뒤 돌려서 말한다."
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "화나 있는 친구에게 그래도 너의 잘못이라고 말해준다."
                    },
                ]
            },
            {
                which:"TF",
                question: "술을 따라줄 때 나는?",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "어휴 너 술 못 마시니까 그냥 이것만 받아라"
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "엥? 술은 공평한 법!\n마시거라 이녀석아"
                    },
                ]
            },
            {
                which:"JP",
                question: "가고 싶었던 술집이 있다!\n근데 웨이팅을 해야된다.",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "기다린다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "다른 술집으로 간다."
                    },
                ]
            },
            {
                which:"JP",
                question: "다같이 만나는 술자리!\n내가 총무다!",
                answers:[
                    {
                        type: "P",
                        score: 2,
                        content: "일단 먼저 계산하고 나중에 받는다."
                    },
                    {
                        type: "J",
                        score: 5,
                        content: "미리 2만원씩 이 계좌로 보내줘! 나머지는 정산하고 알려줄게"
                    },
                ]
            },
            {
                which:"JP",
                question: "안부 연락이 온 친구 나의 답장은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "그래그래~ 코로나 끝나면 언제 만날래?"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "그래! 코로나 끝나면 한 번 만나자~"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ISTJ",
                desc: `EB`,
                query: "EB",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/EB_.png'
            },
            {
                type: "ESFP",
                desc: `BI`,
                query: "BI",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/BI_.png'
            },
            {
                type: "ENFP",
                desc: `DES`,
                query: "DES",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/DES_.png'
            },
            {
                type: "INTJ",
                desc: `PR`,
                query: "PR",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/PR_.png'
            },
            {
                type: "ISTP",
                desc: `CN`,
                query: "CN",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/CN_.png'
            },
            {
                type: "ESFJ",
                desc: `HN`,
                query: "HN",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/HN_.png'
            },
            {
                type: "ENFJ",
                desc: `BW`,
                query: "BW",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/BW_.png'
            },
            {
                type: "INFP",
                desc: `CJ`,
                query: "CJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/CJ_.png'
            },
            {
                type: "ISFJ",
                desc: `SG`,
                query: "SG",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/SG_.png'
            },
            {
                type: "ESTP",
                desc: `BUW`,
                query: "BUW",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/BUW_.png'
            },
            {
                type: "INFJ",
                desc: `BL`,
                query: "BL",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/BL_.png'
            },
            {
                type: "ENTP",
                desc: `ST`,
                query: "ST",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/ST_.png'
            },
            {
                type: "ESTJ",
                desc: `PN`,
                query: "PN",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/PN_.png'
            },
            {
                type: "ISFP",
                desc: `SS`,
                query: "SS",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/SS_.png'
            },
            {
                type: "INTP",
                desc: `GN`,
                query: "GN",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/GN_.png'
            },
            {
                type: "ENTJ",
                desc: `BM`,
                query: "BM",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/dringkingHabit/BM_.png'
            },
        ]
    },
    // personalTaro
    {
        info : {
            mainTitle:"퍼스널 타로 테스트",
            subTitle:"타로보고 스트레스 해소법 찾자!",
            mainUrl:"personalTaro",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalTaro-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalTaro-thumb.png",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '사람들과 있을 때 나는?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '스트레스 풀리는 느낌!\n완전 재밌고 에너지 충전 완료!'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '노는 건 좋지만 너무 많은 사람들이 있으면 기 빨린다.'
                    },
                ],
            },
            {
                which:"EI",
                question: "회의를 할 때 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "‘일단 계속 말해봐 그 중에 하나는 건지겠지’\n생각 나는 대로 말한다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "‘ 마냥 말하기만 하는 건 의미 없어‘\n한참 고민 후 그 중 제일 나은 아이디어로 말한다."
                    },
                ]
            },
            {
                which:"EI",
                question: "더 스트레스 받는 상황은?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "내내 집에만 있어야 할 때"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "사람들이 많은 곳에 있어야 할 때"
                    },
                ]
            },
            {
                which:"SN",
                question: "둘 중 한 과목만 들을 수 있다면?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "정확한 답이 정해져 있는 수학과목"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "감정에 초점을 맞춘 국어과목"
                    },
                ]
            },
            {
                which:"SN",
                question: "사생대회에 참가했다 나는?",
                answers:[
                    {
                        type: "N",
                        score: 2,
                        content: "상상력을 발휘한 그림"
                    },
                    {
                        type: "S",
                        score: 5,
                        content: "눈에 보이는 장면이나 사물 그림"
                    },
                ]
            },
            {
                which:"SN",
                question: "무언갈 배우고 싶은 욕구가 뿜뿌~ 어떤 배움일까?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "현재 내가 부족한 부분을 채울 수 있는 배움"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "훗날 나에게 도움이 될 것 같은 배움"
                    },
                ]
            },
            {
                which:"TF",
                question: "회사에서는",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "일만 잘 하면 되는 것이다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "일도 일이지만 팀내 의사소통도 잘 해야 하는 것이다."
                    },
                ]
            },
            {
                which:"TF",
                question: "‘나 그림 그리려고 아이패드 샀어’\n라는 말에 제일 먼저 나오는 말은?",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "올~~~ 플렉스 해버렸네~"
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "프로? 에어?"
                    },
                ]
            },
            {
                which:"TF",
                question: "나 요즘 스트레스 받아서 취미생활을 시작해보려고",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "잉...? 뭐 때문에 스트레스 받는데...?"
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "에? 취미생활이랑 스트레스랑 뭔 상관이야...?\n그거 하면 나아지나...?"
                    },
                ]
            },
            {
                which:"JP",
                question: "평소 나의 일 스타일은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "전체적인 틀을 세우고 신속하게 바로 시작"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "뭘 해야 하는 건지 조사하고 계획 잡고 시작"
                    },
                ]
            },
            {
                which:"JP",
                question: "오늘 안에 다하기로 마음먹은 과제를 못했다.\n(과제 마감일은 아직 많이 남은 상태)",
                answers:[
                    {
                        type: "P",
                        score: 2,
                        content: "뭐, 내일 하면 되겠지"
                    },
                    {
                        type: "J",
                        score: 5,
                        content: "아..망했다... 불안하다... 오늘 안에 했어야 하는데..휴"
                    },
                ]
            },
            {
                which:"JP",
                question: "일이 너무 많을 때 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "고민 없이 바로 시작을 한다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "뭐 부터 할지 계획부터 짠다."
                    },
                ]
            },
        ],
        results:[
            {
                type: "ISTJ",
                desc: `은둔자`,
                query: "09THermit",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/09THermit.png'
            },
            {
                type: "ESFP",
                desc: `별`,
                query: "17Tstar",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/17TStar.png'
            },
            {
                type: "ENFP",
                desc: `마법사`,
                query: "01TMagician",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/01TMagician.png'
            },
            {
                type: "INTJ",
                desc: `황제`,
                query: "04TEmperor",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/04TEmperor.png'
            },
            {
                type: "ISTP",
                desc: `운명의 수레바퀴`,
                query: "10Wof",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/10WOF.png'
            },
            {
                type: "ESFJ",
                desc: `절제`,
                query: "14Temperance",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/14Temperance.png'
            },
            {
                type: "ENFJ",
                desc: `힘`,
                query: "08Strength",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/08Strength.png'
            },
            {
                type: "INFP",
                desc: `태양`,
                query: "19Tsun",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/19TSun.png'
            },
            {
                type: "ISFJ",
                desc: `여황제`,
                query: "03TEmpress",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/03TEmpress.png'
            },
            {
                type: "ESTP",
                desc: `어릿광대`,
                query: "00TheFool",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/00TheFool.png'
            },
            {
                type: "INFJ",
                desc: `여사제`,
                query: "02THP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/02THP.png'
            },
            {
                type: "ENTP",
                desc: `연인`,
                query: "06TLovers",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/06TLovers.png'
            },
            {
                type: "ESTJ",
                desc: `교황`,
                query: "05THH",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/05THH.png'
            },
            {
                type: "ISFP",
                desc: `정의`,
                query: "11Justice",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/11Justice.png'
            },
            {
                type: "INTP",
                desc: `심판`,
                query: "20Judgement",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/20Judgement.png'
            },
            {
                type: "ENTJ",
                desc: `전차`,
                query: "07TChariot",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalTaro/07TChariot.png'
            },
        ]
    },
    // personalIncenseJP
    {
        info : {
            mainTitle:"香りでBTI_香りでわかる性格診断",
            subTitle:"香りでBTI_香りでわかる性格診断",
            mainUrl:"personalIncenseJP",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalIncenseJP-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalIncenseJP-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Japan/personalIncenseJP.png",
            lang:"JP"
        },
        questions:[
            {
                which:"EI",
                question: '周りからどんな人だと言われてる？',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '近づきやすい人 '
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '近寄りがたい人 '
                    },
                ],
            },
            {
                which:"EI",
                question: "集まりがあるときの自分は？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "集まりの状況をよく把握している。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "人から聞いて知ることが多い。"
                    },
                ]
            },
            {
                which:"EI",
                question: "電話をかけるときの自分は？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "相手が電話に出るとすぐ用件を言い出す。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "予め用件を整理してから電話をかける。"
                    },
                ]
            },
            {
                which:"EI",
                question: "香りの選択基準は？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "実際にお店で香りをお試しする。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "周りの人にオススメを教えてもらう。"
                    },
                ]
            },
            {
                which:"SN",
                question: "好きな本のジャンルは？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "推理できる推理小説 "
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "ロマンス小説や無限に想像が広がるような本 "
                    },
                ]
            },
            {
                which:"SN",
                question: "旅行に行くなら？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "計画を立てる。"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "思いつきで度に出る旅に出る。"
                    },
                ]
            },
            {
                which:"SN",
                question: "いずれか一つの世界に住めるなら？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "偏見のない世界 "
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "人情味あふれる世界"
                    },
                ]
            },
            {
                which:"SN",
                question: "香水をつける理由は？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "自分が良い香りを感じたいから"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "周りから好かれたいから"
                    },
                ]
            },
            {
                which:"TF",
                question: "頑張ったプロジェクトが失敗に終わった。\n自分の反応は？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "失敗か…頑張ったけど、\n失敗したら終わりだね。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "お疲れ様～頑張ったからこれでいいんだ！"
                    },
                ]
            },
            {
                which:"TF",
                question: "自分はどのタイプ？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "公正な判断ができる人"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "寛大な心を持つ人"
                    },
                ]
            },
            {
                which:"TF",
                question: "人に頼み事をするときの自分は？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "本論に入る前の前置きが長い。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "早速本論に入る。"
                    },
                ]
            },
            {
                which:"JP",
                question: "人と待ち合わせをするときの自分は？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "迷いなくすぐにOK！"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "どうしようかな…ちょっと待って…うーん… "
                    },
                ]
            },
            {
                which:"JP",
                question: "今日の予定は？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "早朝に起きて運動して、\n朝ごはん食べたら勉強しようか…はっ、\nでもやってないな(笑)"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "予定ね…呼吸をすることくらい？"
                    },
                ]
            },
            {
                which:"JP",
                question: "学校の課題（宿題）があるときの自分は？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "計画を立てるところから。"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "まずはやり始めよう。"
                    },
                ]
            },
            {
                which:"JP",
                question: "香りを嗅ぐときの自分は？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "甘い匂いがするけど、バニラかな？"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "おっ、良いね！私好みの香りだよ～"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ISTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "Ssoapy",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/Ssoapy.png'
            },
            {
                type: "ESFP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "BabyS",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/BabyS.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "PBreeze",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/PBreeze.png'
            },
            {
                type: "INTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "CMusk",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/CMusk.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ACotton",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/ACotton.png'
            },
            {
                type: "ESFJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "SDilicious",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/SDilicious.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "SDelight",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/SDelight.png'
            },
            {
                type: "INFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "Intensive",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/Intensive.png'
            },
            {
                type: "ISFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "LBlanc",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/LBlanc.png'
            },
            {
                type: "ESTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "CF",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/CF.png'
            },
            {
                type: "INFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "SFlower",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/SFlower.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "LBloom",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/LBloom.png'
            },
            {
                type: "ESTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "HGreen",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/HGreen.png'
            },
            {
                type: "ISFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "BFleur",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/BFleur.png'
            },
            {
                type: "INTP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "SRose",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/SRose.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "PViolet",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseJP/PViolet.png'
            },
        ]
    },
    // personalIncenseEng
    {
        info : {
            mainTitle:"Incense BTI_My Personality reflected by Incense",
            subTitle:"Incense BTI_My Personality reflected by Incense",
            mainUrl:"personalIncenseEng",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalFragranceEng-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalIncenseEng-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/USA/personalIncenseEng.png",
            lang:"Eng"
        },
        questions:[
            {
                which:"EI",
                question: 'Who am I to others?!',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'A person who is accessible with ease'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'A person who is accessible with caution'
                    },
                ],
            },
            {
                which:"EI",
                question: "What is my position in the meeting?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Understand the situation of the meeting very well"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Usually be informed by others"
                    },
                ]
            },
            {
                which:"EI",
                question: "How do I look when calling?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Speak out to the call promptly."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Prepare what to say and make a call."
                    },
                ]
            },
            {
                which:"EI",
                question: "How do I choose fragrance?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Closely approach and smell the fragrance."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Listen to other's recommendation"
                    },
                ]
            },
            {
                which:"SN",
                question: "What is your favorite book genre?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Mystery novels"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Romance novels or an infinite imaginable books"
                    },
                ]
            },
            {
                which:"SN",
                question: "What if you are going for a trip?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Make an impromptu trip."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Make a plan and go."
                    },
                ]
            },
            {
                which:"SN",
                question: "What if I choose to live in one of the two?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "A world without prejudice"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "A world with a lot of compassion"
                    },
                ]
            },
            {
                which:"SN",
                question: "What is your reason for spraying perfume?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "To smell a good smell"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "To be favorable around me"
                    },
                ]
            },
            {
                which:"TF",
                question: "The project I worked hard on failed.\nWhat is my reaction?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "I couldn't win the top...\nWorked very hard but couldn't win.\nThat's it."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Good job~ Anyway, you did your best!!\nThat's it."
                    },
                ]
            },
            {
                which:"TF",
                question: "I am this kind of person.",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Someone like a fair judge"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "A generous person"
                    },
                ]
            },
            {
                which:"TF",
                question: "When do I ask for something from others?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "The introduction lengthens before going into the main subject."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Directly go into the main point"
                    },
                ]
            },
            {
                which:"JP",
                question: "When I make an appointment?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Okay! right away without worrying!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Stop worrying... Wait... Um..."
                    },
                ]
            },
            {
                which:"JP",
                question: "What is today's schedule?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Let's do some... Later, but I didn't do it ^^"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Schedule?... just breathing?"
                    },
                ]
            },
            {
                which:"JP",
                question: "When do I do my homework?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Start from the sweet one as planned"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Start first to catch the plan"
                    },
                ]
            },
            {
                which:"JP",
                question: "When I smell the incense",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Is it vanilla that smells sweet?"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Oh~ Good! It's my style~"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ISTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "Ssoapy",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/Ssoapy.png'
            },
            {
                type: "ESFP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "BabyS",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/BabyS.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "PBreeze",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/PBreeze.png'
            },
            {
                type: "INTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "CMusk",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/CMusk.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ACotton",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/ACotton.png'
            },
            {
                type: "ESFJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "SDilicious",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/SDilicious.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "SDelight",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/SDelight.png'
            },
            {
                type: "INFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "Intensive",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/Intensive.png'
            },
            {
                type: "ISFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "LBlanc",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/LBlanc.png'
            },
            {
                type: "ESTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "CF",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/CF.png'
            },
            {
                type: "INFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "SFlower",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/SFlower.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "LBloom",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/LBloom.png'
            },
            {
                type: "ESTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "HGreen",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/HGreen.png'
            },
            {
                type: "ISFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "BFleur",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/BFleur.png'
            },
            {
                type: "INTP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "SRose",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/SRose.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "PViolet",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalIncenseEng/PViolet.png'
            },
        ]
    },
    // personalIncense
    {
        info : {
            mainTitle:"퍼스널 향 테스트",
            subTitle:"나에게 어울리는 향은 무엇일까? 향비티아이",
            mainUrl:"personalIncense",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/duftDoft-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/duftDoft-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/personalIncense.png",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '남들에게 나는 어떤 사람?!',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '쉽게 다가갈 수 있는 사람'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '조심스럽게 다가가야 하는 사람'
                    },
                ],
            },
            {
                which:"EI",
                question: "무리에서 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "무리의 상황을 잘 파악하고 있다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "보통 다른 사람이 소식을 전해준다."
                    },
                ]
            },
            {
                which:"EI",
                question: "전화할 때 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "그냥 바로 전화받자마자 말한다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "할 말 미리 준비해두고 전화한다."
                    },
                ]
            },
            {
                which:"EI",
                question: "내가 향을 선택할 때?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "주변인들에게 추천을 받는다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "직접 가서 향을 맡아본다."
                    },
                ]
            },
            {
                which:"SN",
                question: "내가 좋아하는 책은?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "추리 가능한 추리소설"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "로맨스 소설이나 무한으로 상상이 가능한 책"
                    },
                ]
            },
            {
                which:"SN",
                question: "여행을 간다면?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "즉흥적으로 여행을 간다"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "계획을 세우고 여행을 간다"
                    },
                ]
            },
            {
                which:"SN",
                question: "둘 중 한곳에 살아야 한다면?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "편견 없는 세상"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "인정이 많은 세상"
                    },
                ]
            },
            {
                which:"SN",
                question: "내가 향수를 뿌리는 이유는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "내가 좋은 향을 맡기 위해 "
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "주변 사람에게 잘 보이기 위해"
                    },
                ]
            },
            {
                which:"TF",
                question: "열심히 한 프로젝트가 실패했다",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "일등을 못 했다니... 열심히 했어도 일등 못했으니 끝이지 뭐"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "수고했어~ 열심히 했으니까 된 거야! "
                    },
                ]
            },
            {
                which:"TF",
                question: "나는 이런 사람이다.",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "공정한 판사 같은 사람"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "궁예처럼 관대한 사람"
                    },
                ]
            },
            {
                which:"TF",
                question: "난 부탁할 때",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "본론을 꺼내기 위해 서론이 길어진다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "바로 본론부터"
                    },
                ]
            },
            {
                which:"JP",
                question: "약속을 잡을 때 나는",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "고민 없이 바로 오카이!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "멈칫멈칫 고민... 잠깐만... 음..."
                    },
                ]
            },
            {
                which:"JP",
                question: "오늘의 일정은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "아침에 일찍 일어나서 운동하고 밥 먹고 공부 좀 하자...\n후 근데 안 했네 ^^"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "일정이라... 그냥 숨쉬기?"
                    },
                ]
            },
            {
                which:"JP",
                question: "과제 할 때 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "시작은 달콤하게 계획부터"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "각 잡으려면 일단 시작해"
                    },
                ]
            },
            {
                which:"JP",
                question: "나는 향을 맡을 때",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "달달한 냄새가 나는 게 바닐라인가?"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "오~ 굿! 마이스타일~"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ISTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "Ssoapy",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/Ssoapy.png'
            },
            {
                type: "ESFP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "BabyS",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/BabyS.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "PBreeze",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/PBreeze.png'
            },
            {
                type: "INTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "CMusk",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/CMusk.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ACotton",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/ACotton.png'
            },
            {
                type: "ESFJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "SDilicious",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/SDilicious.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "SDelight",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/SDelight.png'
            },
            {
                type: "INFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "Intensive",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/intensive.png'
            },
            {
                type: "ISFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "LBlanc",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/LBlanc.png'
            },
            {
                type: "ESTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "CF",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/CF.png'
            },
            {
                type: "INFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "SFlower",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/SFlower.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "LBloom",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/LBloom.png'
            },
            {
                type: "ESTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "HGreen",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/HGreen.png'
            },
            {
                type: "ISFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "BFleur",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/BFleur.png'
            },
            {
                type: "INTP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "SRose",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/SRose.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "PViolet",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/duftDoft/PViolet.png'
            },
        ]
    },
    // persoanlColor in French
    {
        info : {
            mainTitle:"Test de couleur personnelle_Version française",
            subTitle:"Quelle est ma couleur perosale?",
            mainUrl:"personalColorFra",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorFra-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorFra-thumb.png",
            lang:"Fra"
        },
        questions:[
            {
                which:"EI",
                question: 'Moi avec des gens que\nje rencontre pour la première fois ?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'Je leur parle avant eux.'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'Dans la plupart du temps,\nils me parlent avant moi.'
                    },
                ],
            },
            {
                which:"EI",
                question: "Moi, le week-end?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "J’aime rencontrer les gens."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Rester seul à la maison ne me dérange pas."
                    },
                ]
            },
            {
                which:"EI",
                question: "Moi avec mes amis pour nous amuser?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "J’aime une ambiance bien animée pleine de gaieté."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "J’aime parler dans le calme avec quelques amis."
                    },
                ]
            },
            {
                which:"SN",
                question: "Ce qui est plus important pour moi?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Pas de présent,\npas de futur."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Sans penser au futur,\npas de progrès."
                    },
                ]
            },
            {
                which:"SN",
                question: "Moi au travail?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "J’aime bien suivre ce que les autres font."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "J’aime créer ma propre méthode."
                    },
                ]
            },
            {
                which:"SN",
                question: "Mon entourage me dit souvent?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Tu es constant(e) et patient(e)."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Tu es créatif(ve) et unique."
                    },
                ]
            },
            {
                which:"TF",
                question: "Dans une situation que je dois dire non,\nmoi alors?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Je dis fermement que je ne peux pas."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Souvent,\nje ne dis pas non après avoir un peu réfléchi."
                    },
                ]
            },
            {
                which:"TF",
                question: "Quand je suis en colère?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Je parle très logiquement et argumente."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Je pleure d’abord sans pouvoir supporter\nla colère alors que j’ai beaucoup de choses à dire."
                    },
                ]
            },
            {
                which:"TF",
                question: "Un(e) ami(e) me confie son souci,\nil semble cependant que ce soit à cause de sa faute.\nMoi alors?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Je lui remarque ses erreurs."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "J’en parle indirectement de peur que mon ami(e) se sente mal."
                    },
                ]
            },
            {
                which:"JP",
                question: "Quand je dois faire des préparatifs?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Je les prépare depuis la veille."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Je les oublie souvent en me disant\n« je vais les préparer demain »."
                    },
                ]
            },
            {
                which:"JP",
                question: "J’allais travailler à la maison,\nmes amis me retiennent cependant pour jouer ensemble.\nJe dis alors?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "« Heu… ce n’est pas quelque chose de prévu…\nje ne sais pas du tout… »"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "« Ça marche!\nC’est comme ça la vie qui ne va pas comme prévu!\nAllons-y ! »"
                    },
                ]
            },
            {
                which:"JP",
                question: "Moi, en général?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Je fais ce que j’ai organisé comme prévu!\nJ’aime bien faire quelque chose en ordre!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "J’aime bien spontanément faire quelque chose!\nJ’aime bien la flexibilité!"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorFra/INFP.png'
            },
        ]
    },
    // persoanlColor in German
    {
        info : {
            mainTitle:"Persönliche Farbprüfung",
            subTitle:"Was ist meine persische Farbe?",
            mainUrl:"personalColorGer",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorGer-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorGer-thumb.png",
            lang:"Ger"
        },
        questions:[
            {
                which:"EI",
                question: 'Fremden,\ndie ich zum ersten Mal treffe...',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'spreche ich erst an.'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'spricht anderer Freund erst an.'
                    },
                ],
            },
            {
                which:"EI",
                question: "Am Wochenende...",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "treffe ich gern mit Leuten."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "genieße ich, allein Zeit zu verbringen."
                    },
                ]
            },
            {
                which:"EI",
                question: "Wenn ich mit Freunden etwas unternehme...",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "mag ich eine laute und aktive Stimmung."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "habe ich lieber ein kleines\nGespräch mit wenigen Freunden."
                    },
                ]
            },
            {
                which:"SN",
                question: "Was finde ich wichtiger?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Ohne Gegenwart gibt es keine Zukunft."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Ohne Zukunft gibt es keine Entwicklung."
                    },
                ]
            },
            {
                which:"SN",
                question: "Bei der Arbeit...",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "mache ich selber meinen eigenen Weg."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "folge ich, wie die anderen Leute machen."
                    },
                ]
            },
            {
                which:"SN",
                question: "Leute, die mich kennen,\nsagen mir oft...",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "dass ich ständig und geduldig bin."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "dass ich kreativ und unkonventionell bin."
                    },
                ]
            },
            {
                which:"TF",
                question: "Wenn ich versagen soll...",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "sage ich stark, dass ich nicht kann."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "denke ich nach und sage meistens zu."
                    },
                ]
            },
            {
                which:"TF",
                question: "Wenn ich ärgerlich bin...",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "sage ich logisch und stelle klar."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "habe ich viel zu sagen,\naber ich kann meinen Ärger nicht überwinden,\ndeshalb weine ich einfach."
                    },
                ]
            },
            {
                which:"TF",
                question: "Ein Freund/Eine Freundin sagt mir seine/ihre Sorge.\nEs klingt so, dass es seine/ihre Schuld ist.\nIn diesem Fall...",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "sage ich ihm/ihr,\nwas genau das Problem ist."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "sage ich indirekt,\nansonsten fühlt sich er/sie nicht gut."
                    },
                ]
            },
            {
                which:"JP",
                question: "Beim Einpacken meiner Sachen...",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "bereite ich vor einem Tag schon vor."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "denke ich nur im Kopf\n“Ich muss morgen einpacken.”\nund dann oft vergesse."
                    },
                ]
            },
            {
                which:"JP",
                question: "Ich wollte nach der Schule zu Hause lernen,\naber Freunde schalgen vor,\netwas zu unternehmen.\nDann mache ich so",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Das steht nicht auf dem Plan...\nSehr ratlos."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "OK! Das ist ja das Leben!\nGehen wir rausss!!!"
                    },
                ]
            },
            {
                which:"JP",
                question: "Meistens bin ich so",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Nach meinem Plan!\nIch arbeite gern der Ordnung nach ordentlich."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Von Fall zu Fall arbeite ich frei!\nIch arbeite gern flexibel."
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorGer/INFP.png'
            },
        ]
    },
    // persoanlColor in Malay
    {
        info : {
            mainTitle:"Ujian Personaliti Warna_Personaliti",
            subTitle:"Warna apa yang sesuai dengan saya?",
            mainUrl:"personalColorMalay",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorMalay-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorMalay-thumb.png",
            lang:"Bahasa"
        },
        questions:[
            {
                which:"EI",
                question: 'Bagaimana sikap saya terhadap rakan-rakan baru?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'Saya yang akan tegur mereka dulu.'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'Selalunya,\nmereka yang akan mula tegur saya dulu.'
                    },
                ],
            },
            {
                which:"EI",
                question: "Apa saya buat pada hujung minggu?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Saya suka jumpa orang dan bersosial."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Saya tak kisah untuk bersendirian."
                    },
                ]
            },
            {
                which:"EI",
                question: "Apa saya buat bila berjumpa rakan?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Saya suka berborak dan mewujudkan suasana ceria."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Saya suka perbualan kecil bersama sebilangan kecil rakan-rakan."
                    },
                ]
            },
            {
                which:"SN",
                question: "Mana satu yang lagi penting bagi saya?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Kalau tak manfaatkan masa sekarang,\nmasa depan takkan wujud. "
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Kalau tak fikirkan masa depan,\nakan tiada perkembangan."
                    },
                ]
            },
            {
                which:"SN",
                question: "Bagaimana sikap saya semasa bekerja?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Lebih baik ikut apa yang orang lain buat."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Lebih baik selesaikan sesuatu dengan cara saya sendiri."
                    },
                ]
            },
            {
                which:"SN",
                question: "Apa pandangan orang lain terhadap saya?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Saya seorang yang tabah dan penyabar."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Saya seorang yang kreatif dan unik."
                    },
                ]
            },
            {
                which:"TF",
                question: "Apa yang saya akan buat bila perlu menolak sesuatu?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Saya akan tegas mengatakan saya tak dapat melakukannya."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Setelah berfikir sejenak,\nsaya akur pada kehendak orang lain."
                    },
                ]
            },
            {
                which:"TF",
                question: "Apa jadi bila saya marah?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Saya akan behujah secara logik. "
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Banyak yang saya nak cakap,\ntapi akhirnya saya menangis kerana terlalu marah."
                    },
                ]
            },
            {
                which:"TF",
                question: "Kawan saya mengadu masalahnya,\ntapi bila dengar, macam dia yang bersalah.\nApa akan saya buat?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Saya beritahu rakan saya apa kesalahannya."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Saya akan pusing-pusing ayat kerana risau dia terasa hati."
                    },
                ]
            },
            {
                which:"JP",
                question: "Apa sikap saya semasa menyediakan barang keperluan?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Saya akan sediakan semuanya sehari sebelum."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "‘Saya akan sediakan semuanya esok’\ntapi akhirnya lupa dan barangnya pun tertinggal."
                    },
                ]
            },
            {
                which:"JP",
                question: "Sekolah dah tamat, jadi saya nak balik rumah dan belajar,\ntapi rakan ajak lepak pula.\nApa akan saya buat?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Tapi tiada dalam jadual saya hari ini…\nsaya terkejut dan bingung."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Okey! Hidup tak perlu terlalu serius.\nJom lepak!!!"
                    },
                ]
            },
            {
                which:"JP",
                question: "Secara amnya,\nsaya jenis orang macam mana?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Asalkan semua benda dah rancang, saya okey!\nSaya suka bila semuanya tersusun!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Saya urus benda ikut apa yang saya fikir masa tu!\nSaya seorang yang fleksibel!"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorMalay/INFP.png'
            },
        ]
    },
    // persoanlColor in Russian
    {
        info : {
            mainTitle:"Персональный цветовой тест_ Личность",
            subTitle:"Какой цвет вам подходит?",
            mainUrl:"personalColorRus",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorRus-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorRus-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/ETC/personalColorRus.png",
            lang:"Rus"
        },
        questions:[
            {
                which:"EI",
                question: 'Когда вы видите человека в первый раз?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'Вы начинаете разговор.'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'Обычно с вами начинают разговор первыми.'
                    },
                ],
            },
            {
                which:"EI",
                question: "Чем обычно занимаетесь в выходные?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Наслаждаетесь общением с людьми."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Предпочитаете быть в одиночку."
                    },
                ]
            },
            {
                which:"EI",
                question: "Когда проводите время с друзьями, то?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Любите шумную компанию."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Предпочитаете разговаривать с небольшим количеством друзей."
                    },
                ]
            },
            {
                which:"SN",
                question: "Что вы считаете более важным?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Если нет настоящего, нет и будущего."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Если не задумываться о будущем, не будет развития."
                    },
                ]
            },
            {
                which:"SN",
                question: "На работе вы?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Делаете так, как все."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Придумываете свой способ действия."
                    },
                ]
            },
            {
                which:"SN",
                question: "Что обычно говорят вам окружающие?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Стабильный и терпеливый"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Творческий и экстраординарный."
                    },
                ]
            },
            {
                which:"TF",
                question: "Когда нужно отказать, вы?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Даете твердый отказ."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Сразу не соглашаетесь, но все равно помогаете."
                    },
                ]
            },
            {
                which:"TF",
                question: "Когда вы злитесь, то...?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Логически высказываете свою точку зрения"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Вам есть что сказать,\nно так злы, что начинаете плакать.\nего чувства, поэтому говорите завуалированно."
                    },
                ]
            },
            {
                which:"TF",
                question: "Друг рассказал о своей проблеме,\nно вам кажется это его вина. Ваши действия?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Расскажете другу, в чем его ошибка."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Если сказать прямо, это может ранить"
                    },
                ]
            },
            {
                which:"JP",
                question: "Когда вы готовитесь к чему-то?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "отовитесь заранее накануне."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Оставляете дела на завтра,\nа потом забываете."
                    },
                ]
            },
            {
                which:"JP",
                question: "После занятий вам нужно домой учиться,\nно друзья зовут гулять.\nВаши действия?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Я это не планировал(а)..Не знаю,\nчто и делать."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "ОК! Все-таки жизнь-это когда все идет не по плану!\nГуляем!!!"
                    },
                ]
            },
            {
                which:"JP",
                question: "В целом как вы себя опишите?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Мне нравится,\nкогда всё идет по плану!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Думаю на месте!\nЛюблю адаптироваться к ситуации!"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/INFP.png'
            },
        ]
    },
    // persoanlColor in Indian
    {
        info : {
            mainTitle:"Personal color test",
            subTitle:"What is my perosnal color?",
            mainUrl:"personalColorInd",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorInd-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorInd-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/ETC/personalColorInd.png",
            lang:"Hin"
        },
        questions:[
            {
                which:"EI",
                question: 'पहली मुलाक़ात में',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'पहले मैं बात शुरू करता हूँ'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'सामने वाले के बात शुरू करने का इंतज़ार करता हूँ '
                    },
                ],
            },
            {
                which:"EI",
                question: "वीकेंड को मैं",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "लोगों से मिलना पसंद करता हूँ"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "अकेले रहना भी ठीक है"
                    },
                ]
            },
            {
                which:"EI",
                question: "दोस्तों के साथ ",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "शोर मचाते हुए ज़ोर से बात करना पसंद है"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "कम दोस्तों के साथ छोटी सी बातें करना पसंद है"
                    },
                ]
            },
            {
                which:"SN",
                question: "मेरे लिए ज़्यादा ज़रूरी क्या है ?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "इस पल की ख़ुशी के बिना भविष्य भी बेकार है"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "भविष्य की योजना के बिना विकास नहीं होगा"
                    },
                ]
            },
            {
                which:"SN",
                question: "मेरा काम करने का तरीका",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "दूसरे लोगों के तरीके से काम करना पसंद है"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "अपना तरीका खुद बनाना पसंद है"
                    },
                ]
            },
            {
                which:"SN",
                question: "दूसरे लोग मेरे बारे में क्या बोलते हैं ?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "तुम हमेशा काम को सम्पूर्ण करते हो, और तुम्हारी सहनशक्ति बहुत मज़बूत है"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "तुम बहुत अलग और अनोखे इंसान हो"
                    },
                ]
            },
            {
                which:"TF",
                question: "अगर किसी को मना करना पड़े तो",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "सख्ती से मना करता हूँ"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "बहुत सोचने के बाद मना नहीं कर पाता"
                    },
                ]
            },
            {
                which:"TF",
                question: "अगर मुझे गुस्सा आए तो",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "बातों से सामने वाले को समझाता हूँ"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "बोलने के लिए बहुत कुछ है लेकिन आँसू ही पहले निकलते हैं"
                    },
                ]
            },
            {
                which:"TF",
                question: "दोस्त अपनी दुःख की बात शेयर कर रहा है,\nमगर उसकी ही गलती लगती है। तो मैं क्या करता हूँ ?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "सीधे उसकी गलती को समझाता हूँ"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "बात को घुमा-फिराकर दोस्त को समझाता हूँ ताकि उसे चोट न लगे"
                    },
                ]
            },
            {
                which:"JP",
                question: "स्कूल में कोई चीज़ ले जाना है तो",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "एक दिन पहले से तैयार करके रखता हूँ"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "कल तैयार करूँगा' बोलकर भूल जाता हूँ"
                    },
                ]
            },
            {
                which:"JP",
                question: "घर जाकर पढ़ाई करने की सोची थी,\nअचानक दोस्त खेल पर बुला रहे हैं",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "यह तो प्लान के बाहर है। सोचना पड़ेगा"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "कोई बात नहीं! ज़िंदगी कहाँ प्लान से चलती है? जमकर मज़ा करता हूँ !"
                    },
                ]
            },
            {
                which:"JP",
                question: "आम तौर पर मैं",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "अपने प्लान के हिसाब से, बारी के अनुसार काम करना पसंद करता हूँ"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "जब मूड हो तब कर लूँगा ~ हालत के हिसाब से काम करना पसंद करता हूँ"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorInd/INFP.png'
            },
        ]
    },
    // persoanlColor in Arabian
    {
        info : {
            mainTitle:"اختبار الألوان الرئيسي - لوحة الشخصيات",
            subTitle:"ما هو اللون المناسب لي؟",
            mainUrl:"personalColorArb",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorArb-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorArb-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/ETC/personalColorArab.png",
            lang:"Arb"
        },
        questions:[
            {
                which:"EI",
                question: 'كيف أكون بالنسبة لشخص أقابله للمرة الأولى؟',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'عادة ما ابدأ أنا الحديث أولا'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'عادة ما يبدأ الشخص الآخر الحديث أولا'
                    },
                ],
            },
            {
                which:"EI",
                question: "كيف أكون في عطلات نهاية الأسبوع؟",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "أستمتع بمقابلة الآخرين"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "لا أكره البقاء وحدي"
                    },
                ]
            },
            {
                which:"EI",
                question: "كيف أكون وأنا ألعب مع أصدقائي؟",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "أحب الأجواء الصاخبة الحماسية"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "أحب المحادثات الصغيرة مع عدد قليل من الأصدقاء"
                    },
                ]
            },
            {
                which:"SN",
                question: "ما هو الشيء الأكثر أهمية بالنسبة لي؟",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "بدون حاضر، لا مستقبل"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "إذا لم أفكر في المستقبل لن أتطور"
                    },
                ]
            },
            {
                which:"SN",
                question: "كيف أكون أثناء العمل؟",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "أحب وضع طريقة خاصة بي بنفسي"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "أفضل اتباع ما يفعله الآخرون"
                    },
                ]
            },
            {
                which:"SN",
                question: "ماذا يقول الآخرون لي؟",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "أنني مثابر وصبور"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "أنني مبدع وفريد"
                    },
                ]
            },
            {
                which:"TF",
                question: "عندما يتعين علي رفض شيء ما؟",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "أرفض بقوة"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "عادة ما أقبل بعد تفكير"
                    },
                ]
            },
            {
                which:"TF",
                question: "ماذا أفعل عندما أغضب؟",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "أفند الموقف مع الحديث على نحو منطقي"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "عادة ما أبدأ في البكاء لشدة غضبي، مع أنني أرغب في قول الكثير"
                    },
                ]
            },
            {
                which:"TF",
                question: "صديقي يحدثني عن شيء يقلقه،وعلى ما يبدو  هو من أخطأ، ماذا أفعل؟",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "أخبره بالنقطة التي أخطأ بها"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "إذا أخبرته بشكل مباشر قد أجرحه، لذا أخبره بشكل غير مباشر"
                    },
                ]
            },
            {
                which:"JP",
                question: "عند تحضير بعض الاحتياجات ماذا أفعل؟",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "أحضر ما أحتاجه قبل يوم"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "أقول 'سأحضرها غدا'، ولكن عادة ما أنسى"
                    },
                ]
            },
            {
                which:"JP",
                question: "بعد المدرسة كنت أنوي الذهاب إلى البيت للدراسة، ولكن أصدقائي يلحون علي لألعب معهم، أنا؟",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "هذا أمر لم أكن أخطط له... هذا الموقف يثير ارتباكي."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "حسنا، كما هو متوقع الحياة لا تسير وفقا لما هو مخطط لها! فلنلعب!"
                    },
                ]
            },
            {
                which:"JP",
                question: "بشكل عام، أنا؟",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "أحب ممارسة الأمور وفقا لما هو مخطط له، وبالترتيب المخطط له"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "أتمم الأمور عندما أتذكرها! أحب العمل بمرونة"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorArb/INFP.png'
            },
        ]
    },
    // persoanlColor in Spanish
    {
        info : {
            mainTitle:"Testeo de colores personales",
            subTitle:"¿Cuál es el color que mejor me queda?",
            mainUrl:"personalColorES",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorES-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorES-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/ETC/personalColorES.png",
            lang:"ES"
        },
        questions:[
            {
                which:"EI",
                question: '¿Cómo soy con nuevos amigos?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'Yo le hablo primero.'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'Espero a que esa persona me hable primero.'
                    },
                ],
            },
            {
                which:"EI",
                question: "¿Qué hago los fines de semana?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Disfruto encontrarme con gente."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "No me disgusta estar solo."
                    },
                ]
            },
            {
                which:"EI",
                question: "¿Cómo soy cuando estoy con amigos?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Me gustan ambientes alegres y bulliciosos."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Prefiero conversar tranquilo con pocos amigos."
                    },
                ]
            },
            {
                which:"SN",
                question: "¿Qué es más importante para mí?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Sin el presente, no existe un futuro."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Debo pensar en el futuro para desarrollarme."
                    },
                ]
            },
            {
                which:"SN",
                question: "¿Cómo soy cuando trabajo?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Me gusta armar mis propios métodos."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Me gusta seguir los métodos de otros."
                    },
                ]
            },
            {
                which:"SN",
                question: "¿Qué me dice la gente que me rodea?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Me dicen que soy constante y paciente."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Me dicen que soy creativo e ingenioso."
                    },
                ]
            },
            {
                which:"TF",
                question: "¿Cómo reacciono ante una situación en donde debo rechazar?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Soy firme con mi postura."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Suelo pensar y luego accedo."
                    },
                ]
            },
            {
                which:"TF",
                question: "¿Cómo soy cuando me enojo?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Hablo tranquilo con lógica."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Tengo mucho para decir, pero empiezo a llorar del enojo."
                    },
                ]
            },
            {
                which:"TF",
                question: "Un amigo me cuenta su problema, pero creo que él tiene la culpa. ¿Qué hago en esta situación?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Le digo cuáles son sus errores."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Trato de no ser tan directo para no incomodarlo."
                    },
                ]
            },
            {
                which:"JP",
                question: "¿Cómo soy para preparar las cosas?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Las preparo un día antes."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Lo dejo para otro día y me olvido."
                    },
                ]
            },
            {
                which:"JP",
                question: "Mi plan era ir a casa a estudiar,\npero mis amigos me invitan a salir.\n¿Qué hago?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "¡Está bien! La vida no sale como uno planea. ¡¡¡Me divertiré!!!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Me siento confundido porque no estaba en mis planes."
                    },
                ]
            },
            {
                which:"JP",
                question: "¿Cómo soy por lo general?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "¡Me gusta que todo salga acorde a mis planes, como lo planeé!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "¡Resuelvo espontáneamente, me gusta ser flexible!"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorES/INFP.png'
            },
        ]
    },
    // persoanlColor in Chinese
    {
        info : {
            mainTitle:"颜色心理测试性格篇",
            subTitle:"最适合我的颜色是什么？ K测试 你的颜色是？",
            mainUrl:"personalColorCN",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorCN-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorCN-thumb.png",
            lang:"CN"
        },
        questions:[
            {
                which:"EI",
                question: '初次结识的朋友面前我是？',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '通常我先说话。'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '通常对方先说话。'
                    },
                ],
            },
            {
                which:"EI",
                question: "周末我会？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "喜欢和其他人见面。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "并不介意独自度过。"
                    },
                ]
            },
            {
                which:"EI",
                question: "和朋友们出行时我是？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "喜欢喧嚣热闹的气氛。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "喜欢和少数朋友们一起聊天。"
                    },
                ]
            },
            {
                which:"SN",
                question: "我认为更重要的是？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "没有现在就意味着没有未来。"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "不考虑未来的话就不会有进步。"
                    },
                ]
            },
            {
                which:"SN",
                question: "工作时的我是？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "更偏向跟随别人的脚步。"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "更偏向采取自己的方式。"
                    },
                ]
            },
            {
                which:"SN",
                question: "周围的人认为我是？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "经常说我很有耐心和恒心。"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "经常说我很有自己独创的思维。"
                    },
                ]
            },
            {
                which:"TF",
                question: "遇到必须拒绝的情况时，我会？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "直接了当地拒绝。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "深思熟虑后也往往会顺从。"
                    },
                ]
            },
            {
                which:"TF",
                question: "我生气的时候会？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "说得很有道理，同时也很计较。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "想说的话很多，但因为太生气，往往眼泪先流出来。"
                    },
                ]
            },
            {
                which:"TF",
                question: "朋友向我诉说烦恼，我却觉得是朋友的错时，我会？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "告诉他错的原因。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "直接了当地说的话担心朋友会伤心，所以故意绕着弯子说。"
                    },
                ]
            },
            {
                which:"JP",
                question: "做准备工作时的我会？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "提前一天做好准备。"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "总想着‘明天再说明天再说’，经常忘记。"
                    },
                ]
            },
            {
                which:"JP",
                question: "结束了一天的日程回家后准备学习，结果朋友们突然叫我出去玩，这时我会？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "不在我的计划范围内…很纠结。"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "OK！果然人生不会按计划走！玩起！！！"
                    },
                ]
            },
            {
                which:"JP",
                question: "总体上我是？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "按我的计划进行！更偏向按计划的顺序进行！"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "想起什么就先做什么！更偏向灵活处理！"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorCN/INFP.png'
            },
        ]
    },
    // persoanlColor in English
    {
        info : {
            mainTitle:"Personal color test",
            subTitle:"What is my perosnal color?",
            mainUrl:"personalColorEng",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorEng-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorEng-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/USA/personalColorEng.png",
            lang:"Eng"
        },
        questions:[
            {
                which:"EI",
                question: 'What am I to my first-time friends?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'I speak to others first.'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'Most of the time, the other friend speaks to you first.'
                    },
                ],
            },
            {
                which:"EI",
                question: "What do I do during the weekend?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "I enjoy meeting people."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "I don't hate being alone."
                    },
                ]
            },
            {
                which:"EI",
                question: "What do I do when playing with my friends?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "I like the chatty and exciting atmosphere."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "I like to have small conversations with a small number of friends."
                    },
                ]
            },
            {
                which:"SN",
                question: "What do I think more important?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "No present, no future."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "No preparation for the future, no progress."
                    },
                ]
            },
            {
                which:"SN",
                question: "What do I do when working?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "It is good to follow what others do."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "It's good to go on your own way."
                    },
                ]
            },
            {
                which:"SN",
                question: "What are the others say to me?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "They often say that I am persistent and patient."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "They often say that I am creative and unique."
                    },
                ]
            },
            {
                which:"TF",
                question: "What if I have to refuse?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "I strongly say I can't do it."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "I tend to accept most of what they ask after a little hesitation."
                    },
                ]
            },
            {
                which:"TF",
                question: "What if I am angry?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "I speak logically and argue."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "I have a lot to say,\nbut I am so angry that I start to tear up."
                    },
                ]
            },
            {
                which:"TF",
                question: "My friend talks about his worries.\nSeems to me, it's fault.\nThen, what is my response?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Tell the friend it is his fault."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Saying it directly may hurt his mind.\nI will tell him beating around the bush. "
                    },
                ]
            },
            {
                which:"JP",
                question: "When do I do when preparing the supplies?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Prepare in advance a day before."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "'I will prepare them tomorrow'\nbut I frequent forget and leave behind."
                    },
                ]
            },
            {
                which:"JP",
                question: "After school, I want go home and study,\nbut my friends catch me up to play. Then?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "It wasn't in the plan...\nVery embarrassing."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Okay! After all, life doesn't go as planned!\nLet's play!!!"
                    },
                ]
            },
            {
                which:"JP",
                question: "In general, who am I?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "As I planned! I like to go through the order of things I made!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "I take care of things as I think of!\nI love to be flexible!"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/ESTJ_.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/ESTP_.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/ESFJ_.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/ESFP_.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/ENTJ_.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/ENTP_.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/ENFJ_.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/ENFP_.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/ISTJ_.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/ISTP_.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/ISFJ_.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/ISFP_.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/INTJ_.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/INTP_.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/INFJ_.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorEng/INFP_.png'
            },
        ]
    },
    // persoanlColor for Japan
    {
        info : {
            mainTitle:"パーソナルカラー診断_性格編",
            subTitle:"自分に似合う色は何だろう？ パーソナルカラーテスト - ケイテスト",
            mainUrl:"personalColorJP",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorJP-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorJP-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Japan/personalColorJP.png",
            lang:"JP"
        },
        questions:[
            {
                which:"EI",
                question: '初対面の人とあったときの自分は？',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '自分から声をかける。'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'ほとんどの場合、\nその人から声をかけてくれる。'
                    },
                ],
            },
            {
                which:"EI",
                question: " 週末の過ごし方は？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "よく人と会って過ごす。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "一人で過ごすのも嫌いじゃない。"
                    },
                ]
            },
            {
                which:"EI",
                question: "友達と遊ぶときの自分は？",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "ワイワイと賑やかな雰囲気が好き。"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "少人数でのんびりおしゃべりすることが好き。"
                    },
                ]
            },
            {
                which:"SN",
                question: "自分がより重要だと思う価値観は？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "今を生きないと将来もない。"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "将来のことを考えないと成長もない。"
                    },
                ]
            },
            {
                which:"SN",
                question: "仕事するときの自分は？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "人が作ったレールに沿って行きたい。"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "自分だけのやり方を作りたい。"
                    },
                ]
            },
            {
                which:"SN",
                question: "周りの人によく言われる言葉は？",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "着実で忍耐強いとよく言われる。"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "ユニークで創造的だとよく言われる。"
                    },
                ]
            },
            {
                which:"TF",
                question: "断らなきゃいけないときはどうする？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "できないものはできないと強く言う。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "悩んだあげく、\nだいたいは聞いてあげる。"
                    },
                ]
            },
            {
                which:"TF",
                question: "怒ったときの自分は？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "論理的に話しつつ問い詰める。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "言いたいことはたくさんあるけど、\n悔しすぎて涙が出てしまう。"
                    },
                ]
            },
            {
                which:"TF",
                question: "友達にお悩み相談をされたけど、\nよくよく聞いたらその友達のせいっぽい。\nそういうときの自分は？",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "友達の悪いところを指摘Ｓる。"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "友達を配慮してオブラートに包んで言ってあげる。"
                    },
                ]
            },
            {
                which:"JP",
                question: "明日の持ち物を用意するときの自分は？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "前日から前もっと用意しておいく。"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "「明日用意しよう」と思って、\nいざ当日になると忘れてしまうことが多い。"
                    },
                ]
            },
            {
                which:"JP",
                question: "終わったらお家に帰って勉強しよう、\nと思っていたら友達に遊びに誘われた。\nどうする？",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "計画になかったし、\n非常に困るなぁ。"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "オッケー！計画通りにならないのが人生だし！\n遊んじゃおう！"
                    },
                ]
            },
            {
                which:"JP",
                question: "おおむね自分はこんな感じです！",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "全ては計画したとおり！\n計画通りに物事を進めることが好き。"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "その場の思いつきによって物事を進める。\n柔軟に対応することが好き。"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/ESTJ_.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/ESTP_.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/ESFJ_.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/ESFP_.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/ENTJ_.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/ENTP_.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/ENFJ_.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/ENFP_.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/ISTJ_.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/ISTP_.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/ISFJ_.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/ISFP_.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/INTJ_.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/INTP_.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/INFJ_.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorJP/INFP_.png'
            },
        ]
    },
    // persoanlColor
    {
        info : {
            mainTitle:"퍼스널 컬러 테스트",
            subTitle:"나에게 어울리는 컬러는 무엇일까?",
            mainUrl:"personalColor",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColor-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColor-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/personalColor.png",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '처음 보는 친구들에게 나는?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '내가 먼저 말을 건낸다.'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '대부분 다른 친구가 먼저 말을 건낸다. '
                    },
                ],
            },
            {
                which:"EI",
                question: "주말에 난?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "사람들과 만나는 것을 즐긴다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "혼자 있는 게 싫지 않은 편이다."
                    },
                ]
            },
            {
                which:"EI",
                question: "친구들과 놀 때 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "왁자지껄한 신나는 분위기를 좋아한다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "소수의 친구들과 소소하게 대화하는 것을 좋아한다. "
                    },
                ]
            },
            {
                which:"SN",
                question: "내가 더 중요하게 생각하는 것은?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "현재가 없으면 미래도 없다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "미래를 생각하지 않으면 발전이 없다."
                    },
                ]
            },
            {
                which:"SN",
                question: "일할 때 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "남들이 하는 대로 따라 가는 것이 좋다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "스스로 나만의 방법을 만드는 게 좋다. "
                    },
                ]
            },
            {
                which:"SN",
                question: "주변 사람들이 나에게 하는 말은?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "꾸준하고 참을성이 있다는 말을 자주한다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "창의적이고 독창적이라는 말을 자주한다."
                    },
                ]
            },
            {
                which:"TF",
                question: "거절해야 하는 상황이 오면 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "강력하게 할 수 없다고 말한다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "고민하다가 대부분 들어주는 편이다."
                    },
                ]
            },
            {
                which:"TF",
                question: "화났을 때 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "논리적으로 잘 말하면서 따진다. "
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "할말이 많지만 너무 분해서 눈물부터 난다."
                    },
                ]
            },
            {
                which:"TF",
                question: "고민을 얘기하는 친구, 듣다 보니 친구의 잘못인 것 같다. 그럴 때 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "친구의 잘못된 점을 말해준다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "직접적으로 말하면 친구가 그래 할까봐 돌려 말한다."
                    },
                ]
            },
            {
                which:"JP",
                question: "준비물을 준비할 때 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "하루 전 날 미리 준비한다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "‘내일 챙겨야지’ 하다가 까먹고 놓고 오는 일이 많다."
                    },
                ]
            },
            {
                which:"JP",
                question: "끝나고 집에 가서 공부하려 했는데, 친구들이 놀자고 붙잡는다. 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "계획에 없던 일인데…매우 당황스럽다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "오케이! 역시 계획대로 안 되는 것이 인생! 놀자!!!!"
                    },
                ]
            },
            {
                which:"JP",
                question: "내가 가고싶은 여행지 스타일은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "내가 계획한대로! 계획적으로 일의 순서대로 진행하는 것을 좋아해!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "그때그때 생각나는 대로 일 처리! 융통성 있게 하는 것을 좋아해!"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColor/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColor/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColor/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColor/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColor/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColor/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColor/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColor/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColor/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColor/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColor/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColor/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColor/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColor/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColor/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColor/INFP.png'
            },
        ]
    },
    // Cyworld
    {
        info : {
            mainTitle:"케이테스트 도토리테스트",
            subTitle:"나의 도토리력은? , 싸이월드테스트, 도토리테스트",
            mainUrl:"dotori",
            scoreType:"numberScoringImg",
            mainImage:"https://images.ktestone.com/introImages/cyworld-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/cyworld-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/dotori.png",
            lang:"Kor"
        },
        questions:[
            {
                question: '싸이월드의 캐쉬는?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 0,
                        content: '도토리묵'
                    },
                    {
                        type: "치와와",
                        score: 0,
                        content: '밤'
                    },
                    {
                        type: "포메라니안",
                        score: 0,
                        content: '쿠키'
                    },
                    {
                        type: "치와와",
                        score: 1,
                        content: '도토리'
                    },
                ],
                questionImage:'',
            },
            {
                question: "다음중 미니홈피에서 서로 친구를 맺는 단어는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 0,
                        content: "이종사촌"
                    },
                    {
                        type: "웰시코기",
                        score: 0,
                        content: "버디버디"
                    },
                    {
                        type: "포메라니안",
                        score: 1,
                        content: "일촌"
                    },
                    {
                        type: "웰시코기",
                        score: 0,
                        content: "서이추"
                    },
                ],
                questionImage:'',
            },
            {
                question: "'ㅈㅉ ㅈㅅ'의 뜻은 무엇인가?",
                answers:[
                    {
                        type: "치와와",
                        score: 0,
                        content: "진짜 죄송합니다"
                    },
                    {
                        type: "웰시코기",
                        score: 1,
                        content: "전체쪽지 죄송합니다"
                    },
                    {
                        type: "웰시코기",
                        score: 0,
                        content: "전체쪽지 조심하세요"
                    },
                ],
                questionImage:'',
            },
            {
                question: "박태준이 유명해진 이유는?",
                answers:[
                    {
                        type: "비글",
                        score: 0,
                        content: "외모지상주의 웹툰"
                    },
                    {
                        type: "리트리버",
                        score: 1,
                        content: "가캐 주인공이라"
                    },
                    {
                        type: "리트리버",
                        score: 0,
                        content: "잘생긴 웹툰 작가라서"
                    },
                ],
                questionImage:'',
            },
            {
                question: "다음 중 가끔 눈물 흘리는 사람은?",
                answers:[
                    {
                        type: "리트리버",
                        score: 0,
                        content: '광수'
                    },
                    {
                        type: "웰시코기",
                        score: 0,
                        content: "지석진"
                    },
                    {
                        type: "리트리버",
                        score: 1,
                        content: '채연'
                    },
                    {
                        type: "웰시코기",
                        score: 0,
                        content: "홍록기"
                    },
                ],
                questionImage:'',
            },
            {
                question: "다음중 미니홈피 bgm과 어울리지 않는 노래는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 0,
                        content: "에픽하이 LoveLoveLove"
                    },
                    {
                        type: "비글",
                        score: 1,
                        content: "방탄소년단 피땀눈물"
                    },
                    {
                        type: "포메라니안",
                        score: 0,
                        content: "프리스타일 Y"
                    },
                    {
                        type: "비글",
                        score: 0,
                        content: "엠씨몽 I Love u Oh Thank U"
                    },
                ],
                questionImage:'',
            },
            {
                question: "다음중 빈칸에 들어갈 순서로 알맞는 것은?",
                answers:[
                    {
                        type: "비글",
                        score: 0,
                        content: "교실, 교복, 출소"
                    },
                    {
                        type: "웰시코기",
                        score: 0,
                        content: "집, 유니폼, 출소"
                    },
                    {
                        type: "비글",
                        score: 1,
                        content: "교실, 교복, 석방"
                    },
                ],
                questionImage:'https://images.ktestone.com/storyImages/cyworld/cyworld_option_7.jpeg',
            },
            {
                question: "다음 사진의 명칭은?",
                answers:[
                    {
                        type: "치와와",
                        score: 0,
                        content: "플로피"
                    },
                    {
                        type: "리트리버",
                        score: 1,
                        content: "플로피디스켓"
                    },
                    {
                        type: "리트리버",
                        score: 0,
                        content: "디스켓플로피"
                    },
                ],
                questionImage:'https://images.ktestone.com/storyImages/cyworld/cyworld_option_8.jpeg',
            },
            {
                question: "쥬니어 네이버의 슈 게임이 아닌것은? \n (슈의는 생략)",
                answers:[
                    {
                        type: "치와와",
                        score: 0,
                        content: "미용실"
                    },
                    {
                        type: "리트리버",
                        score: 0,
                        content: "신속배달"
                    },
                    {
                        type: "치와와",
                        score: 0,
                        content: "라면가게"
                    },
                    {
                        type: "리트리버",
                        score: 1,
                        content: "동물농장"
                    },
                ],
                questionImage:'',
            },
            {
                question: "도토리 한 개의 가격은?",
                answers:[
                    {
                        type: "치와와",
                        score: 0,
                        content: "10원"
                    },
                    {
                        type: "리트리버",
                        score: 0,
                        content: "90원"
                    },
                    {
                        type: "치와와",
                        score: 1,
                        content: "100원"
                    },
                    {
                        type: "리트리버",
                        score: 0,
                        content: "110원"
                    },
                ],
                questionImage:'',
            },
        ],
        results:[
            {
                type: "20%",
                desc: ``,
                query: "alemdfhr",
                score_range:range(2),
                img_src:'https://images.ktestone.com/resultImages/cyworld/cyworld-1.png'
            },
            {
                type: "40%",
                desc: ``,
                query: "ghldnjsrkdlq",
                score_range:range(2, 4),
                img_src:'https://images.ktestone.com/resultImages/cyworld/cyworld-2.png'
            },
            {
                type: "60%",
                desc: ``,
                query: "gmrdurtk",
                score_range:range(4, 6),
                img_src:'https://images.ktestone.com/resultImages/cyworld/cyworld-3.png'
            },
            {
                type: "80%",
                desc: ``,
                query: "rkRmasnsanf",
                score_range:range(6, 8),
                img_src:'https://images.ktestone.com/resultImages/cyworld/cyworld-4.png'
            },
            {
                type: "100%",
                desc: ``,
                query: "vmfhaktmxj",
                score_range:range(8, 11),
                img_src:'https://images.ktestone.com/resultImages/cyworld/cyworld-5.png'
            },
        ]
    },
    // peopleColor
    {
        info : {
            mainTitle:"퍼스널 컬러 궁합 테스트",
            subTitle:"우리에게 어울리는 컬러는 무엇일까?",
            mainUrl:"peopleColor",
            scoreType:"dualMBTI",
            mainImage:"https://images.ktestone.com/introImages/peopleColor-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/peopleColor-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/peopleColor.png",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '처음 보는 친구들에게 나는?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '내가 먼저 말을 건낸다.'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '대부분 다른 친구가 먼저 말을 건낸다. '
                    },
                ],
            },
        ],
        results:[
            {type: 'ENFJENFJ',
                desc: '',
                query: 'ENFJENFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/48/47/SmSkS45c_o.png'},
            {type: 'ENFJENFP',
                desc: '',
                query: 'ENFJENFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/07/90/BFjToDFl_o.png'},
            {type: 'ENFJENTJ',
                desc: '',
                query: 'ENFJENTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/8b/c3/SCYb83tN_o.png'},
            {type: 'ENFJENTP',
                desc: '',
                query: 'ENFJENTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/b4/51/6zjsgIao_o.png'},
            {type: 'ENFJESFJ',
                desc: '',
                query: 'ENFJESFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/64/33/I3UR8J1i_o.png'},
            {type: 'ENFJESFP',
                desc: '',
                query: 'ENFJESFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/b1/34/bZEkwLsd_o.png'},
            {type: 'ENFJESTJ',
                desc: '',
                query: 'ENFJESTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/bc/c1/wJHJE3k2_o.png'},
            {type: 'ENFJESTP',
                desc: '',
                query: 'ENFJESTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/4a/f7/cIhh5beS_o.png'},
            {type: 'ENFJINFJ',
                desc: '',
                query: 'ENFJINFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/a0/6e/1ppyBzeh_o.png'},
            {type: 'ENFJINFP',
                desc: '',
                query: 'ENFJINFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/1c/71/CrtccNKr_o.png'},
            {type: 'ENFJINTJ',
                desc: '',
                query: 'ENFJINTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/80/09/ENeXRrVn_o.png'},
            {type: 'ENFJINTP',
                desc: '',
                query: 'ENFJINTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/60/66/jCWrdOES_o.png'},
            {type: 'ENFJISFJ',
                desc: '',
                query: 'ENFJISFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/fe/02/dnKiyPAe_o.png'},
            {type: 'ENFJISFP',
                desc: '',
                query: 'ENFJISFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/dd/94/w960F4K8_o.png'},
            {type: 'ENFJISTJ',
                desc: '',
                query: 'ENFJISTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/28/4e/5T1h8VEP_o.png'},
            {type: 'ENFJISTP',
                desc: '',
                query: 'ENFJISTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/48/18/2SqzfNg2_o.png'},
            {type: 'ENFPENFJ',
                desc: '',
                query: 'ENFPENFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/0f/fa/7QmkNI9G_o.png'},
            {type: 'ENFPENFP',
                desc: '',
                query: 'ENFPENFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/63/2b/kjhkZayy_o.png'},
            {type: 'ENFPENTJ',
                desc: '',
                query: 'ENFPENTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/0e/fc/GsmAJ585_o.png'},
            {type: 'ENFPENTP',
                desc: '',
                query: 'ENFPENTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/32/26/pG2aJHHz_o.png'},
            {type: 'ENFPESFJ',
                desc: '',
                query: 'ENFPESFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/66/cf/nAxBF11G_o.png'},
            {type: 'ENFPESFP',
                desc: '',
                query: 'ENFPESFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/48/f6/uTqr3jm1_o.png'},
            {type: 'ENFPESTJ',
                desc: '',
                query: 'ENFPESTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/98/b6/oUJyb1d0_o.png'},
            {type: 'ENFPESTP',
                desc: '',
                query: 'ENFPESTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/c2/5a/JKidTl2U_o.png'},
            {type: 'ENFPINFJ',
                desc: '',
                query: 'ENFPINFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/8e/01/acsdQV0M_o.png'},
            {type: 'ENFPINFP',
                desc: '',
                query: 'ENFPINFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/99/ab/CGY7n2zQ_o.png'},
            {type: 'ENFPINTJ',
                desc: '',
                query: 'ENFPINTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/a8/a1/4k8iJkyk_o.png'},
            {type: 'ENFPINTP',
                desc: '',
                query: 'ENFPINTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/8a/9b/E6O3cdj6_o.png'},
            {type: 'ENFPISFJ',
                desc: '',
                query: 'ENFPISFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/26/7f/GDAHt265_o.png'},
            {type: 'ENFPISFP',
                desc: '',
                query: 'ENFPISFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/08/c8/HBaqOZHu_o.png'},
            {type: 'ENFPISTJ',
                desc: '',
                query: 'ENFPISTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/6e/5c/erp0gcrD_o.png'},
            {type: 'ENFPISTP',
                desc: '',
                query: 'ENFPISTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/1e/d2/9LVjdaSK_o.png'},
            {type: 'ENTJENFJ',
                desc: '',
                query: 'ENTJENFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/32/44/znqVZzUp_o.png'},
            {type: 'ENTJENFP',
                desc: '',
                query: 'ENTJENFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/74/0c/CGSirPJc_o.png'},
            {type: 'ENTJENTJ',
                desc: '',
                query: 'ENTJENTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/9a/4f/oH5rKjN1_o.png'},
            {type: 'ENTJENTP',
                desc: '',
                query: 'ENTJENTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/9b/7f/yTiZxSOM_o.png'},
            {type: 'ENTJESFJ',
                desc: '',
                query: 'ENTJESFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/12/58/hmnhOSg7_o.png'},
            {type: 'ENTJESFP',
                desc: '',
                query: 'ENTJESFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/8e/8c/5Gnt0sN4_o.png'},
            {type: 'ENTJESTJ',
                desc: '',
                query: 'ENTJESTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/57/74/OH3FrKRb_o.png'},
            {type: 'ENTJESTP',
                desc: '',
                query: 'ENTJESTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/3d/84/odDGKuOA_o.png'},
            {type: 'ENTJINFJ',
                desc: '',
                query: 'ENTJINFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/65/d3/RfaUXAnf_o.png'},
            {type: 'ENTJINFP',
                desc: '',
                query: 'ENTJINFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/78/71/O1CHydaL_o.png'},
            {type: 'ENTJINTJ',
                desc: '',
                query: 'ENTJINTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/89/f9/WW4Wtie1_o.png'},
            {type: 'ENTJINTP',
                desc: '',
                query: 'ENTJINTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/1c/5d/WshQ4ztg_o.png'},
            {type: 'ENTJISFJ',
                desc: '',
                query: 'ENTJISFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/fc/0c/YD474g0P_o.png'},
            {type: 'ENTJISFP',
                desc: '',
                query: 'ENTJISFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/24/62/7238W08Z_o.png'},
            {type: 'ENTJISTJ',
                desc: '',
                query: 'ENTJISTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/5d/bc/nNOkRa9T_o.png'},
            {type: 'ENTJISTP',
                desc: '',
                query: 'ENTJISTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/92/26/ZNsDlmUB_o.png'},
            {type: 'ENTPENFJ',
                desc: '',
                query: 'ENTPENFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/e7/a9/smf5Qkhd_o.png'},
            {type: 'ENTPENFP',
                desc: '',
                query: 'ENTPENFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/ea/6f/v1l6d6Xb_o.png'},
            {type: 'ENTPENTJ',
                desc: '',
                query: 'ENTPENTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/90/d6/kQcwcDjg_o.png'},
            {type: 'ENTPENTP',
                desc: '',
                query: 'ENTPENTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/da/51/ikNA7T0A_o.png'},
            {type: 'ENTPESFJ',
                desc: '',
                query: 'ENTPESFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/ce/de/JIxXPi26_o.png'},
            {type: 'ENTPESFP',
                desc: '',
                query: 'ENTPESFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/1f/9c/oDyKN5ZA_o.png'},
            {type: 'ENTPESTJ',
                desc: '',
                query: 'ENTPESTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/b9/b9/3M7V1R4c_o.png'},
            {type: 'ENTPESTP',
                desc: '',
                query: 'ENTPESTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/c8/c8/8HaLzGSg_o.png'},
            {type: 'ENTPINFJ',
                desc: '',
                query: 'ENTPINFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/20/b5/ZnQXDZrw_o.png'},
            {type: 'ENTPINFP',
                desc: '',
                query: 'ENTPINFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/2d/d1/zLnw2b7F_o.png'},
            {type: 'ENTPINTJ',
                desc: '',
                query: 'ENTPINTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/95/15/WLZ5O5W2_o.png'},
            {type: 'ENTPINTP',
                desc: '',
                query: 'ENTPINTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/1f/d4/oYUURy4G_o.png'},
            {type: 'ENTPISFJ',
                desc: '',
                query: 'ENTPISFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/91/e7/CHZJGLea_o.png'},
            {type: 'ENTPISFP',
                desc: '',
                query: 'ENTPISFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/db/07/NYY6tJMq_o.png'},
            {type: 'ENTPISTJ',
                desc: '',
                query: 'ENTPISTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/5a/d0/xS72ioyO_o.png'},
            {type: 'ENTPISTP',
                desc: '',
                query: 'ENTPISTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/af/3c/5P1TlROr_o.png'},
            {type: 'ESFJENFJ',
                desc: '',
                query: 'ESFJENFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/52/b9/SzId3Xxy_o.png'},
            {type: 'ESFJENFP',
                desc: '',
                query: 'ESFJENFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/e1/c3/Enee0zej_o.png'},
            {type: 'ESFJENTJ',
                desc: '',
                query: 'ESFJENTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/59/58/mlC61DCj_o.png'},
            {type: 'ESFJENTP',
                desc: '',
                query: 'ESFJENTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/71/e7/iubqVkjY_o.png'},
            {type: 'ESFJESFJ',
                desc: '',
                query: 'ESFJESFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/6c/78/iCbLbk3z_o.png'},
            {type: 'ESFJESFP',
                desc: '',
                query: 'ESFJESFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/fb/7d/4CgWzgaM_o.png'},
            {type: 'ESFJESTJ',
                desc: '',
                query: 'ESFJESTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/03/cf/Yv5J7djk_o.png'},
            {type: 'ESFJESTP',
                desc: '',
                query: 'ESFJESTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/90/bd/DBc5gTNJ_o.png'},
            {type: 'ESFJINFJ',
                desc: '',
                query: 'ESFJINFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/57/f9/kgxb2ypz_o.png'},
            {type: 'ESFJINFP',
                desc: '',
                query: 'ESFJINFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/07/75/4khg8s4A_o.png'},
            {type: 'ESFJINTJ',
                desc: '',
                query: 'ESFJINTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/5c/4b/6FG9fBHA_o.png'},
            {type: 'ESFJINTP',
                desc: '',
                query: 'ESFJINTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/d0/01/2OrPAGxK_o.png'},
            {type: 'ESFJISFJ',
                desc: '',
                query: 'ESFJISFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/1e/5b/3UIXm8g0_o.png'},
            {type: 'ESFJISFP',
                desc: '',
                query: 'ESFJISFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/4d/d0/ZPGHCTCm_o.png'},
            {type: 'ESFJISTJ',
                desc: '',
                query: 'ESFJISTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/7e/3d/ewMDgBCU_o.png'},
            {type: 'ESFJISTP',
                desc: '',
                query: 'ESFJISTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/7a/16/JNdn7J4M_o.png'},
            {type: 'ESFPENFJ',
                desc: '',
                query: 'ESFPENFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/8e/b5/Kt73B0no_o.png'},
            {type: 'ESFPENFP',
                desc: '',
                query: 'ESFPENFP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/da/2e/va03wgTx_o.png'},
            {type: 'ESFPENTJ',
                desc: '',
                query: 'ESFPENTJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/08/c1/BycOPVzc_o.png'},
            {type: 'ESFPENTP',
                desc: '',
                query: 'ESFPENTP',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/cb/f4/wyLCmvCu_o.png'},
            {type: 'ESFPESFJ',
                desc: '',
                query: 'ESFPESFJ',
                score_range: range(0, 26),
                img_src: 'https://images2.imgbox.com/05/46/adxkK0bN_o.png'},
            {type: 'INTJINTJ',
            desc: '',
            query: 'INTJINTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/73/55/qVw9dV2U_o.png'},
            {type: 'INTJINTP',
            desc: '',
            query: 'INTJINTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/62/2f/iM1hHZZF_o.png'},
            {type: 'INTJISFJ',
            desc: '',
            query: 'INTJISFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/33/da/8ianBhcr_o.png'},
            {type: 'INTJISFP',
            desc: '',
            query: 'INTJISFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/74/e3/UaK0b4dH_o.png'},
            {type: 'INTJISTJ',
            desc: '',
            query: 'INTJISTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/aa/56/SZZElC3g_o.png'},
            {type: 'INTJISTP',
            desc: '',
            query: 'INTJISTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/24/8e/eBZuNo0s_o.png'},
            {type: 'INTPENFJ',
            desc: '',
            query: 'INTPENFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/a0/84/ZaDHjW0R_o.png'},
            {type: 'INTPENFP',
            desc: '',
            query: 'INTPENFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/a0/f2/bfoygVrt_o.png'},
            {type: 'INTPENTJ',
            desc: '',
            query: 'INTPENTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/7e/30/SfctuFL8_o.png'},
            {type: 'INTPENTP',
            desc: '',
            query: 'INTPENTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/f7/f8/d5npwAId_o.png'},
            {type: 'INTPESFJ',
            desc: '',
            query: 'INTPESFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/af/2b/vJlLtr0n_o.png'},
            {type: 'INTPESFP',
            desc: '',
            query: 'INTPESFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/c3/ec/s2WZS7XT_o.png'},
            {type: 'INTPESTJ',
            desc: '',
            query: 'INTPESTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/1c/23/1pYKTN6s_o.png'},
            {type: 'INTPESTP',
            desc: '',
            query: 'INTPESTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/6f/76/2RkGm25y_o.png'},
            {type: 'INTPINFJ',
            desc: '',
            query: 'INTPINFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/9e/f7/PTLlcQw8_o.png'},
            {type: 'INTPINFP',
            desc: '',
            query: 'INTPINFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/f5/9a/tViS9cgb_o.png'},
            {type: 'INTPINTJ',
            desc: '',
            query: 'INTPINTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/bd/4a/xnUduVfw_o.png'},
            {type: 'INTPINTP',
            desc: '',
            query: 'INTPINTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/fc/69/Qj5e6TAo_o.png'},
            {type: 'INTPISFJ',
            desc: '',
            query: 'INTPISFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/19/8e/1W7wZMRj_o.png'},
            {type: 'INTPISFP',
            desc: '',
            query: 'INTPISFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/ab/27/fysq7vNu_o.png'},
            {type: 'INTPISTJ',
            desc: '',
            query: 'INTPISTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/4d/50/kXUgxgX5_o.png'},
            {type: 'INTPISTP',
            desc: '',
            query: 'INTPISTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/09/bd/MEcV9UrD_o.png'},
            {type: 'ISFJENFJ',
            desc: '',
            query: 'ISFJENFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/ff/05/qbjhcHhi_o.png'},
            {type: 'ISFJENFP',
            desc: '',
            query: 'ISFJENFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/80/73/tkCN9KOj_o.png'},
            {type: 'ISFJENTJ',
            desc: '',
            query: 'ISFJENTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/d0/8c/13Bd0SMI_o.png'},
            {type: 'ISFJENTP',
            desc: '',
            query: 'ISFJENTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/6b/66/33a56SN4_o.png'},
            {type: 'ISFJESFJ',
            desc: '',
            query: 'ISFJESFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/5a/90/Vsks390c_o.png'},
            {type: 'ISFJESFP',
            desc: '',
            query: 'ISFJESFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/53/ac/VjTl3w9P_o.png'},
            {type: 'ISFJESTJ',
            desc: '',
            query: 'ISFJESTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/b3/4f/1gj2tY6O_o.png'},
            {type: 'ISFJESTP',
            desc: '',
            query: 'ISFJESTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/13/e2/2HlWcnvy_o.png'},
            {type: 'ISFJINFJ',
            desc: '',
            query: 'ISFJINFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/b3/4f/1gj2tY6O_o.png'},
            {type: 'ISFJINFP',
            desc: '',
            query: 'ISFJINFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/cc/a8/WD7rbn5R_o.png'},
            {type: 'ISFJINTJ',
            desc: '',
            query: 'ISFJINTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/13/6b/7nUsJUQ4_o.png'},
            {type: 'ISFJINTP',
            desc: '',
            query: 'ISFJINTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/fd/bc/h9tg4lMx_o.png'},
            {type: 'ISFJISFJ',
            desc: '',
            query: 'ISFJISFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/83/33/L5vFO8b4_o.png'},
            {type: 'ISFJISFP',
            desc: '',
            query: 'ISFJISFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/38/3a/4VrYBZoh_o.png'},
            {type: 'ISFJISTJ',
            desc: '',
            query: 'ISFJISTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/53/d2/ntUIrK3Q_o.png'},
            {type: 'ISFJISTP',
            desc: '',
            query: 'ISFJISTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/c0/45/NRssoaUT_o.png'},
            {type: 'ISFPENFJ',
            desc: '',
            query: 'ISFPENFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/ba/5e/Fz3SlVeu_o.png'},
            {type: 'ISFPENFP',
            desc: '',
            query: 'ISFPENFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/1e/1e/20o9E3Ro_o.png'},
            {type: 'ISFPENTJ',
            desc: '',
            query: 'ISFPENTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/68/f8/Yl1C6paf_o.png'},
            {type: 'ISFPENTP',
            desc: '',
            query: 'ISFPENTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/b6/09/WGv41c3y_o.png'},
            {type: 'ISFPESFJ',
            desc: '',
            query: 'ISFPESFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/2d/d2/tesmQZzM_o.png'},
            {type: 'ISFPESFP',
            desc: '',
            query: 'ISFPESFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/e7/f5/vkVQKYbf_o.png'},
            {type: 'ISFPESTJ',
            desc: '',
            query: 'ISFPESTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/62/5e/5jAklNyJ_o.png'},
            {type: 'ISFPESTP',
            desc: '',
            query: 'ISFPESTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/f1/6b/AZApQvqe_o.png'},
            {type: 'ISFPINFJ',
            desc: '',
            query: 'ISFPINFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/c6/88/VuMiRfEn_o.png'},
            {type: 'ISFPINFP',
            desc: '',
            query: 'ISFPINFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/6a/35/i878ewsu_o.png'},
            {type: 'ISFPINTJ',
            desc: '',
            query: 'ISFPINTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/95/72/vF5somU5_o.png'},
            {type: 'ISFPINTP',
            desc: '',
            query: 'ISFPINTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/46/1d/8XCkNf8W_o.png'},
            {type: 'ISFPISFJ',
            desc: '',
            query: 'ISFPISFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/34/85/18Z4NtzQ_o.png'},
            {type: 'ISFPISFP',
            desc: '',
            query: 'ISFPISFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/c5/e3/G0NLO9Yn_o.png'},
            {type: 'ISFPISTJ',
            desc: '',
            query: 'ISFPISTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/e7/cf/GGiA5GFc_o.png'},
            {type: 'ISFPISTP',
            desc: '',
            query: 'ISFPISTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/e3/e0/gLRrYeBz_o.png'},
            {type: 'ISTJENFJ',
            desc: '',
            query: 'ISTJENFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/d0/95/cBFJ36pX_o.png'},
            {type: 'ISTJENFP',
            desc: '',
            query: 'ISTJENFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/a9/af/wMR7fFOa_o.png'},
            {type: 'ISTJENTJ',
            desc: '',
            query: 'ISTJENTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/99/83/M6b507AY_o.png'},
            {type: 'ISTJENTP',
            desc: '',
            query: 'ISTJENTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/b8/5a/rqL5VdRC_o.png'},
            {type: 'ISTJESFJ',
            desc: '',
            query: 'ISTJESFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/d6/3c/1BEr8bod_o.png'},
            {type: 'ISTJESFP',
            desc: '',
            query: 'ISTJESFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/d5/89/wCUAdCv2_o.png'},
            {type: 'ISTJESTJ',
            desc: '',
            query: 'ISTJESTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/72/68/GxHYqx8y_o.png'},
            {type: 'ISTJESTP',
            desc: '',
            query: 'ISTJESTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/7e/db/YWHsIomL_o.png'},
            {type: 'ISTJINFJ',
            desc: '',
            query: 'ISTJINFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/4b/9b/52bXn5Qi_o.png'},
            {type: 'ISTJINFP',
            desc: '',
            query: 'ISTJINFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/5b/a0/ReQdzcTg_o.png'},
            {type: 'ISTJINTJ',
            desc: '',
            query: 'ISTJINTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/6e/28/RiR69DMB_o.png'},
            {type: 'ISTJINTP',
            desc: '',
            query: 'ISTJINTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/14/1b/dhorX23t_o.png'},
            {type: 'ISTJISFJ',
            desc: '',
            query: 'ISTJISFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/77/89/bnyff17X_o.png'},
            {type: 'ISTJISFP',
            desc: '',
            query: 'ISTJISFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/90/e7/P3uUBDEJ_o.png'},
            {type: 'ISTJISTJ',
            desc: '',
            query: 'ISTJISTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/b3/e9/i4nZk2Dw_o.png'},
            {type: 'ISTJISTP',
            desc: '',
            query: 'ISTJISTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/fd/55/4CaNssLJ_o.png'},
            {type: 'ISTPENFJ',
            desc: '',
            query: 'ISTPENFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/a2/fc/IgGE5ail_o.png'},
            {type: 'ISTPENFP',
            desc: '',
            query: 'ISTPENFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/35/39/TDQVJOnT_o.png'},
            {type: 'ISTPENTJ',
            desc: '',
            query: 'ISTPENTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/0a/28/BtshzsDa_o.png'},
            {type: 'ISTPENTP',
            desc: '',
            query: 'ISTPENTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/f3/3d/aPY9iYVt_o.png'},
            {type: 'ISTPESFJ',
            desc: '',
            query: 'ISTPESFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/da/b9/n3BrX9ut_o.png'},
            {type: 'ISTPESFP',
            desc: '',
            query: 'ISTPESFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/be/75/Mo8Yn50v_o.png'},
            {type: 'ISTPESTJ',
            desc: '',
            query: 'ISTPESTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/bb/5e/VScimGcn_o.png'},
            {type: 'ISTPESTP',
            desc: '',
            query: 'ISTPESTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/11/5b/RCUUBHUc_o.png'},
            {type: 'ISTPINFJ',
            desc: '',
            query: 'ISTPINFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/26/17/pOfTM06i_o.png'},
            {type: 'ISTPINFP',
            desc: '',
            query: 'ISTPINFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/6b/84/ItJckarI_o.png'},
            {type: 'ISTPINTJ',
            desc: '',
            query: 'ISTPINTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/c8/7f/XUkn8Cdo_o.png'},
            {type: 'ISTPINTP',
            desc: '',
            query: 'ISTPINTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/f6/84/nAae2vnJ_o.png'},
            {type: 'ISTPISFJ',
            desc: '',
            query: 'ISTPISFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/e5/f5/pQKYtvCc_o.png'},
            {type: 'ISTPISFP',
            desc: '',
            query: 'ISTPISFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/70/2b/5ei47CC8_o.png'},
            {type: 'ISTPISTJ',
            desc: '',
            query: 'ISTPISTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/f9/75/lp7QwCbV_o.png'},
            {type: 'ISTPISTP',
            desc: '',
            query: 'ISTPISTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/d9/67/ieVg5IW0_o.png'},
            {type: 'ESFPESFP',
            desc: '',
            query: 'ESFPESFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/6b/b5/LmLn8T1t_o.png'},
            {type: 'ESFPESTJ',
            desc: '',
            query: 'ESFPESTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/93/a8/Yn9NeuZC_o.png'},
            {type: 'ESFPESTP',
            desc: '',
            query: 'ESFPESTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/54/29/G52uIjfC_o.png'},
            {type: 'ESFPINFJ',
            desc: '',
            query: 'ESFPINFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/61/ec/BVZvLqiV_o.png'},
            {type: 'ESFPINFP',
            desc: '',
            query: 'ESFPINFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/e0/99/dTyPeNGJ_o.png'},
            {type: 'ESFPINTJ',
            desc: '',
            query: 'ESFPINTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/ab/bf/dj26DznQ_o.png'},
            {type: 'ESFPINTP',
            desc: '',
            query: 'ESFPINTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/18/df/AfqJf6Wr_o.png'},
            {type: 'ESFPISFJ',
            desc: '',
            query: 'ESFPISFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/4a/60/Sji6vBsA_o.png'},
            {type: 'ESFPISFP',
            desc: '',
            query: 'ESFPISFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/a5/9a/CVQSstW0_o.png'},
            {type: 'ESFPISTJ',
            desc: '',
            query: 'ESFPISTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/32/49/8Aodjynk_o.png'},
            {type: 'ESFPISTP',
            desc: '',
            query: 'ESFPISTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/d5/02/ZG8nc2wP_o.png'},
            {type: 'ESTJENFJ',
            desc: '',
            query: 'ESTJENFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/4b/ea/tdWmQrhA_o.png'},
            {type: 'ESTJENFP',
            desc: '',
            query: 'ESTJENFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/1d/00/JQCYziUW_o.png'},
            {type: 'ESTJENTJ',
            desc: '',
            query: 'ESTJENTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/dd/e4/q80A2bWz_o.png'},
            {type: 'ESTJENTP',
            desc: '',
            query: 'ESTJENTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/7f/d9/AdWQD5jb_o.png'},
            {type: 'ESTJESFJ',
            desc: '',
            query: 'ESTJESFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/5c/46/en0auJhE_o.png'},
            {type: 'ESTJESFP',
            desc: '',
            query: 'ESTJESFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/7e/63/AzqXao4G_o.png'},
            {type: 'ESTJESTJ',
            desc: '',
            query: 'ESTJESTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/15/fc/uVs9GqSO_o.png'},
            {type: 'ESTJESTP',
            desc: '',
            query: 'ESTJESTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/92/12/EGrE1mgq_o.png'},
            {type: 'ESTJINFJ',
            desc: '',
            query: 'ESTJINFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/21/c5/DziKD2kN_o.png'},
            {type: 'ESTJINFP',
            desc: '',
            query: 'ESTJINFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/5d/0c/IlH5TmoH_o.png'},
            {type: 'ESTJINTJ',
            desc: '',
            query: 'ESTJINTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/42/4e/hnXqJbY1_o.png'},
            {type: 'ESTJINTP',
            desc: '',
            query: 'ESTJINTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/44/2c/Rs2ADbtK_o.png'},
            {type: 'ESTJISFJ',
            desc: '',
            query: 'ESTJISFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/a5/e4/ezGRC0uc_o.png'},
            {type: 'ESTJISFP',
            desc: '',
            query: 'ESTJISFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/c8/0a/yyrRq762_o.png'},
            {type: 'ESTJISTJ',
            desc: '',
            query: 'ESTJISTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/fd/64/0ED0GmkP_o.png'},
            {type: 'ESTJISTP',
            desc: '',
            query: 'ESTJISTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/64/cd/gejiWIiy_o.png'},
            {type: 'ESTPENFJ',
            desc: '',
            query: 'ESTPENFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/7c/e2/Ye2OS7Ud_o.png'},
            {type: 'ESTPENFP',
            desc: '',
            query: 'ESTPENFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/03/74/qsdAhSXU_o.png'},
            {type: 'ESTPENTJ',
            desc: '',
            query: 'ESTPENTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/2e/e7/Lv2UWgCv_o.png'},
            {type: 'ESTPENTP',
            desc: '',
            query: 'ESTPENTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/19/1c/RPozTENf_o.png'},
            {type: 'ESTPESFJ',
            desc: '',
            query: 'ESTPESFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/2a/92/eSf0QgsQ_o.png'},
            {type: 'ESTPESFP',
            desc: '',
            query: 'ESTPESFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/05/43/bMfIWvcc_o.png'},
            {type: 'ESTPESTJ',
            desc: '',
            query: 'ESTPESTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/53/4b/DthRm4b4_o.png'},
            {type: 'ESTPESTP',
            desc: '',
            query: 'ESTPESTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/0c/c3/w17H3B0n_o.png'},
            {type: 'ESTPINFJ',
            desc: '',
            query: 'ESTPINFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/fa/d2/j6G6MT0p_o.png'},
            {type: 'ESTPINFP',
            desc: '',
            query: 'ESTPINFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/c3/97/BYUn0Rnf_o.png'},
            {type: 'ESTPINTJ',
            desc: '',
            query: 'ESTPINTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/6d/a3/3Te4b1WG_o.png'},
            {type: 'ESTPINTP',
            desc: '',
            query: 'ESTPINTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/8f/e8/wx0XMta2_o.png'},
            {type: 'ESTPISFJ',
            desc: '',
            query: 'ESTPISFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/92/7b/16QClwaA_o.png'},
            {type: 'ESTPISFP',
            desc: '',
            query: 'ESTPISFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/ab/83/arVOcb1P_o.png'},
            {type: 'ESTPISTJ',
            desc: '',
            query: 'ESTPISTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/1e/18/AhRiZHoZ_o.png'},
            {type: 'ESTPISTP',
            desc: '',
            query: 'ESTPISTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/c4/69/5sZOVL0a_o.png'},
            {type: 'INFJENFJ',
            desc: '',
            query: 'INFJENFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/6e/da/20CvAvyn_o.png'},
            {type: 'INFJENFP',
            desc: '',
            query: 'INFJENFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/b7/90/IAfsWQDx_o.png'},
            {type: 'INFJENTJ',
            desc: '',
            query: 'INFJENTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/33/96/5Csaquk5_o.png'},
            {type: 'INFJENTP',
            desc: '',
            query: 'INFJENTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/ca/44/CUhGVy9h_o.png'},
            {type: 'INFJESFJ',
            desc: '',
            query: 'INFJESFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/71/17/tjuluqPl_o.png'},
            {type: 'INFJESFP',
            desc: '',
            query: 'INFJESFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/85/05/i9Cmgzn4_o.png'},
            {type: 'INFJESTJ',
            desc: '',
            query: 'INFJESTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/65/6e/tREdLhrs_o.png'},
            {type: 'INFJESTP',
            desc: '',
            query: 'INFJESTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/43/17/HewmxUfG_o.png'},
            {type: 'INFJINFJ',
            desc: '',
            query: 'INFJINFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/f3/cc/7fgKu36s_o.png'},
            {type: 'INFJINFP',
            desc: '',
            query: 'INFJINFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/71/4d/Ve4A7Dfi_o.png'},
            {type: 'INFJINTJ',
            desc: '',
            query: 'INFJINTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/52/96/7Ng7quF8_o.png'},
            {type: 'INFJINTP',
            desc: '',
            query: 'INFJINTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/d5/ab/oNDMutgx_o.png'},
            {type: 'INFJISFJ',
            desc: '',
            query: 'INFJISFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/2d/26/3LBhotDY_o.png'},
            {type: 'INFJISFP',
            desc: '',
            query: 'INFJISFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/20/e3/4wlvwU4X_o.png'},
            {type: 'INFJISTJ',
            desc: '',
            query: 'INFJISTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/fd/4e/5mBxtGZZ_o.png'},
            {type: 'INFJISTP',
            desc: '',
            query: 'INFJISTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/4f/ab/R4t1iXZ3_o.png'},
            {type: 'INFPENFJ',
            desc: '',
            query: 'INFPENFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/ef/69/jHNKtPXg_o.png'},
            {type: 'INFPENFP',
            desc: '',
            query: 'INFPENFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/3a/6c/37oehQdA_o.png'},
            {type: 'INFPENTJ',
            desc: '',
            query: 'INFPENTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/2b/79/j4yFwCV4_o.png'},
            {type: 'INFPENTP',
            desc: '',
            query: 'INFPENTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/f4/03/iehkdApO_o.png'},
            {type: 'INFPESFJ',
            desc: '',
            query: 'INFPESFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/b0/e4/ouRZ7Sy6_o.png'},
            {type: 'INFPESFP',
            desc: '',
            query: 'INFPESFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/01/84/j3seR5io_o.png'},
            {type: 'INFPESTJ',
            desc: '',
            query: 'INFPESTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/fd/2c/qmAq2Bey_o.png'},
            {type: 'INFPESTP',
            desc: '',
            query: 'INFPESTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/62/a2/YXlkfFVL_o.png'},
            {type: 'INFPINFJ',
            desc: '',
            query: 'INFPINFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/d3/b9/7DzDXsF9_o.png'},
            {type: 'INFPINFP',
            desc: '',
            query: 'INFPINFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/e1/c2/P1Xo0ITU_o.png'},
            {type: 'INFPINTJ',
            desc: '',
            query: 'INFPINTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/e5/5c/AQVYeveF_o.png'},
            {type: 'INFPINTP',
            desc: '',
            query: 'INFPINTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/9d/e8/szVIjgik_o.png'},
            {type: 'INFPISFJ',
            desc: '',
            query: 'INFPISFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/a3/ab/EVPreGWc_o.png'},
            {type: 'INFPISFP',
            desc: '',
            query: 'INFPISFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/a0/2f/EJdjXHpI_o.png'},
            {type: 'INFPISTJ',
            desc: '',
            query: 'INFPISTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/c4/c3/5mqmYa84_o.png'},
            {type: 'INFPISTP',
            desc: '',
            query: 'INFPISTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/c7/12/zcAFIHal_o.png'},
            {type: 'INTJENFJ',
            desc: '',
            query: 'INTJENFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/3c/c4/Ed7RIAae_o.png'},
            {type: 'INTJENFP',
            desc: '',
            query: 'INTJENFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/21/87/daeay6Dd_o.png'},
            {type: 'INTJENTJ',
            desc: '',
            query: 'INTJENTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/06/3e/1aYwER7z_o.png'},
            {type: 'INTJENTP',
            desc: '',
            query: 'INTJENTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/f8/4c/JAx6Kx7n_o.png'},
            {type: 'INTJESFJ',
            desc: '',
            query: 'INTJESFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/bb/8a/wpuLwCd6_o.png'},
            {type: 'INTJESFP',
            desc: '',
            query: 'INTJESFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/8f/b6/7Y8vlWl3_o.png'},
            {type: 'INTJESTJ',
            desc: '',
            query: 'INTJESTJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/40/5e/gFJw4qFu_o.png'},
            {type: 'INTJESTP',
            desc: '',
            query: 'INTJESTP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/0b/41/SEScECq0_o.png'},
            {type: 'INTJINFJ',
            desc: '',
            query: 'INTJINFJ',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/d3/1c/fIgRSTVT_o.png'},
            {type: 'INTJINFP',
            desc: '',
            query: 'INTJINFP',
            score_range: range(0, 26),
            img_src: 'https://images2.imgbox.com/b8/6a/hpTeIuvC_o.png'},
        ]
    },
    // otherLookMe
    {
        info : {
            mainTitle:"남들이 보는 나는?",
            subTitle:"남들이 보는 나는 과연 어떤 모습일까?",
            mainUrl:"otherlookme",
            scoreType:"numberScoring",
            mainImage:"https://images.ktestone.com/introImages/otherlookme-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/otherlookme-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/otherlookme.png",
            lang:"Kor"
        },
        questions:[
            {
                question: '내가 가장 좋아하는 색깔은?',
                answers:[
                    {
                        type: "사자",
                        score: 1,
                        content: '갈색 or 회색'
                    },
                    {
                        type: "너구리",
                        score: 2,
                        content: '화이트'
                    },
                    {
                        type: "펭귄",
                        score: 3,
                        content: '진파랑 or 보라'
                    },
                    {
                        type: "사자",
                        score: 4,
                        content: '녹색'
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: '노랑 or 연파랑'
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: '빨강 or 주황'
                    },
                    {
                        type: "펭귄",
                        score: 7,
                        content: '검정'
                    },
                ],
            },
            {
                question: "파티 날 나의 등장은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "최대한 시선이 집중되지 않도록 조용히 들어간다."
                    },
                    {
                        type: "너구리",
                        score: 4,
                        content: "차분하게 들어가 주변을 두리번거린다."
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: "화려하게 모두가 날 볼 수 있도록 등장"
                    },
                ]
            },
            {
                question: "잠들기 전 나의 포즈는?",
                answers:[
                    {
                        type: "사자",
                        score: 1,
                        content: "이불을 머리 끝까지 덮고 자는 자세"
                    },
                    {
                        type: "너구리",
                        score: 2,
                        content: "한 팔을 베고 있는 자세"
                    },
                    {
                        type: "펭귄",
                        score: 3,
                        content: "옆으로 누워 웅크린 자세"
                    },
                    {
                        type: "너구리",
                        score: 4,
                        content: "엎드려서 자는 자세"
                    },
                    {
                        type: "펭귄",
                        score: 5,
                        content: "몸을 바르게 펴고 누운 자세"
                    },
                ]
            },
            {
                question: "간만에 집중하고 있는 날 누군가 방해한다.",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "나 지금 짜증났다고 투덜거린다"
                    },
                    {
                        type: "너구리",
                        score: 4,
                        content: "속으로 짜증내지만 티 안내기"
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: "오케이! 이 기회에 휴식타임"
                    },
                ]
            },
            {
                question: "편히 앉으라고 했을 때 나는?",
                answers:[
                    {
                        type: "사자",
                        score: 1,
                        content: "한 쪽 다리를 접어 깔고 앉기"
                    },
                    {
                        type: "너구리",
                        score: 2,
                        content: "다리를 쭉 펴고 앉기"
                    },
                    {
                        type: "펭귄",
                        score: 4,
                        content: "정자세로 앉기 (지하철에서의 자세) "
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: "다리 꼬고 앉기"
                    },
                ]
            },
            {
                question: "배꼽이 빠질 듯 재밌는 일이 있을 때 나는?",
                answers:[
                    {
                        type: "사자",
                        score: 3,
                        content: "미소 천사처럼 웃음 소리 내지 않기"
                    },
                    {
                        type: "너구리",
                        score: 4,
                        content: "조용한 소리로 웃기"
                    },
                    {
                        type: "펭귄",
                        score: 5,
                        content: "적당한 웃음 소리로 별로 크지 않게 웃기"
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: "나 지금 웃고 있다는 사실을 알리는 것처럼 숨기지 않고 크게 웃기"
                    },
                ]
            },
            {
                question: "사람들과 대화할 때 나는",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "두 손을 잡으면서"
                    },
                    {
                        type: "너구리",
                        score: 4,
                        content: "셀프 팔짱 끼고 서서"
                    },
                    {
                        type: "펭귄",
                        score: 5,
                        content: "한 손이나 양손을 허리에 올리고"
                    },
                    {
                        type: "너구리",
                        score: 6,
                        content: "내 몸이나 머리카락은 만지작거리며"
                    },
                    {
                        type: "펭귄",
                        score: 7,
                        content: "상대를 터치하며"
                    },
                ]
            },
            {
                question: "나는 평소 걸을 때",
                answers:[
                    {
                        type: "사자",
                        score: 1,
                        content: "느리게 걷기"
                    },
                    {
                        type: "너구리",
                        score: 2,
                        content: "바닥을 보며 빠르지 않게"
                    },
                    {
                        type: "펭귄",
                        score: 4,
                        content: "보폭은 좁게 빨리"
                    },
                    {
                        type: "너구리",
                        score: 6,
                        content: "보폭은 넓고 빨리"
                    },
                    {
                        type: "펭귄",
                        score: 7,
                        content: "정면을 바라보며 너무 빠르지 않게"
                    },
                ]
            },
            {
                question: "하루 중 가장 기분이 좋을 때",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "아침"
                    },
                    {
                        type: "너구리",
                        score: 4,
                        content: "오후나 이른 저녁"
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: "늦은 밤"
                    },
                ]
            },
            {
                question: "내가 주로 꾸는 꿈은?",
                answers:[
                    {
                        type: "사자",
                        score: 1,
                        content: "기분 좋은 느낌인 꿈"
                    },
                    {
                        type: "너구리",
                        score: 2,
                        content: "싸우는 꿈"
                    },
                    {
                        type: "펭귄",
                        score: 3,
                        content: "계속 찾는 꿈"
                    },
                    {
                        type: "사자",
                        score: 4,
                        content: "어디서 떨어지는 꿈"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "날거나 떠오르는 그런 꿈?"
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: "꿈은 잘..."
                    },
                ]
            },
        ],
        results:[
            {
                type: "나는야 소심쟁이",
                desc: `나는야 소심쟁이\n
                ✓   남들이 보는 당신은 부끄럼이 많고, 조금 소심하며 우유부단해 보입니다.\n
                ✓   본인의 일을 잘 결정을 못하는 선택장애라 조금 답답해 보이고 뭔가 대신해줘야 할 것 같은…\n
                ✓   보호본능을 일으킨 달까?\n
                ✓   또한 걱정을 사서하는 타입!\n
                ✓   그래서 친해지면 아니라는 걸 알지만,\n
                ✓   당신과 친해지기 전까지 잘 모르는 사람은 당신을 조금 지루한 사람이라고 생각하기도 합니다.
                `,
                query: "thtlawoddl",
                score_range:range(21),
                img_src:'https://images.ktestone.com/resultImages/otherlookme/otherlookme-1.png'
            },
            {
                type: "나는야 깐깐쟁이",
                desc: `나는야 깐깐쟁이\n
                ✓   남들이 보는 당신은 조금 집요하고 고집 센 깐깐쟁이로 보입니다.\n
                ✓   상당히 신중하고 조심스러운 사람이라 조금 느릴 수 있지만 꾸준하게 성실하고 전진하는 사람.\n
                ✓   그래서 당신의 충동적인 행동은 주변 친구들에게 충격으로 다가온다고요!\n
                ✓   무슨 일이든 꼼꼼하게 계획하며 결정하는 것을 선호하는 당신!\n
                ✓   No!라고 당당하게 말하기 때문에 대부분 퇴짜 놓는 사람이 되어버리는…
                `,
                query: "RksRkswoddl",
                score_range:range(21, 31),
                img_src:'https://images.ktestone.com/resultImages/otherlookme/otherlookme-2.png'
            },
            {
                type: "나는야 겸손쟁이",
                desc: `나는야 겸손쟁이\n
                ✓   남들이 보는 당신은 현명하고 신중한 겸손쟁이입니다.\n
                ✓   당신은 똑똑하고 재능과 능력이 있지만 겸손한 자세로 주변에서 인정받는 사람이네요.\n
                ✓   그러한 당신은 사람을 사귈 때 다급하게 결정하지 않고 가볍게 접근하지 않으며,\n
                ✓   나의 사람들에겐 매우 잘해주고 자신도 그만큼의 대우를 받기 원합니다!\n
                ✓   신뢰는 인간관계에서 가장 중요한 것!\n
                ✓   그 신뢰가 무너지면 극복이 힘들어요…
                `,
                query: "ruathswoddl",
                score_range:range(31, 41),
                img_src:'https://images.ktestone.com/resultImages/otherlookme/otherlookme-3.png'
            },
            {
                type: "나는야 매력쟁이",
                desc: `나는야 매력쟁이\n
                ✓   남들이 보는 당신은 매우 발랄하고, 매력적이며, 재밌고 현실적인 사람이라고 생각해요.\n
                ✓   어디서든 주목을 사로잡는 사람이라고 생각하고 적당한 눈치도 가지고 있어,\n
                ✓   교만해지지 않고 주위를 잘 살핀다고 느껴요.\n
                ✓   다정한 부분도 있고 친절하며 이해심이 많아 다른 사람을 잘 도와줍니다!\n
                ✓   그런 당신은 늘 분위기 메이커!
                `,
                query: "aofurwoddl",
                score_range:range(41, 51),
                img_src:'https://images.ktestone.com/resultImages/otherlookme/otherlookme-4.png'
            },
            {
                type: "나는야 행동쟁이",
                desc: `나는야 행동쟁이\n
                ✓   남들이 보는 당신은 잘 흥분하고, 변덕스러우며 충동적인 사람이라고 생각해요.\n
                ✓   그래서 리더형으로 빠른 결정을 내릴 수 있고 과감하고 모험성이 있는 타입~\n
                ✓   호기심이 매우 있는 편이라 모든 해보려고 하는 당신!\n
                ✓   그런 당신의 친구들은 당신이 발하는 강렬하고 진취적인 모습에 강력하게 끌립니다!
                `,
                query: "godehdwoddl",
                score_range:range(51, 61),
                img_src:'https://images.ktestone.com/resultImages/otherlookme/otherlookme-5.png'
            },
            {
                type: "나는야 지배쟁이",
                desc: `태양처럼 주위를 밝게 비추는 타입\n
                ✓   남들이 보는 당신은 약간의 허영심이 있고,\n
                ✓   남을 지배하고 싶은 욕구가 강해 보입니다.\n
                ✓   남이 해주는 칭찬을 좋아하고 칭찬에 약하지만,\n
                ✓   남에게 칭찬을 잘 못해주는 양면적인 성격!\n
                ✓   그런 당신의 당당한 성격을 부러워하고 우러러보는,\n
                ✓   사람들이 있지만 정작 그렇게 될까 두려워할 수도 있어요!
                `,
                query: "wlqowoddl",
                score_range:range(61, 101),
                img_src:'https://images.ktestone.com/resultImages/otherlookme/otherlookme-6.png'
            },
        ]
    },
    // latte
    {
        info : {
            mainTitle:"라떼 테스트",
            subTitle:"과연 나는 라떼일까?",
            mainUrl:"latte",
            scoreType:"numberScoring",
            mainImage:"https://images.ktestone.com/introImages/latte-main.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/latte-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/latte.png",
            lang:"Kor"
        },
        questions:[
            {
                question: '누군가 내 의견에 반대하면?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 1,
                        content: '그럴 수도 있지! '
                    },
                    {
                        type: "치와와",
                        score: 2,
                        content: '가슴속에서 분노가…'
                    },
                ],
            },
            {
                question: "처음 만나는 사람을 보면?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 1,
                        content: "나이부터 확인한다."
                    },
                    {
                        type: "웰시코기",
                        score: 2,
                        content: "상대방이 먼저 나이를 물어본다."
                    },
                ]
            },
            {
                question: "여러 사람들과 밥을 먹을 때",
                answers:[
                    {
                        type: "치와와",
                        score: 1,
                        content: "가위/바위/보나 분할해 계좌 이체하기"
                    },
                    {
                        type: "웰시코기",
                        score: 2,
                        content: "연장자가 계산한다"
                    },
                ]
            },
            {
                question: "회식 때 나의 모습은?",
                answers:[
                    {
                        type: "비글",
                        score: 1,
                        content: "마지막까지 남아 있어야지!"
                    },
                    {
                        type: "리트리버",
                        score: 2,
                        content: "눈치껏 집에 가서 쉬어야지!"
                    },
                ]
            },
            {
                question: "고기 먹을 때",
                answers:[
                    {
                        type: "리트리버",
                        score: 1,
                        content: '제일 어린 사람이 굽지 않고 먹기만 하면 화가나!'
                    },
                    {
                        type: "웰시코기",
                        score: 2,
                        content: "그냥 누가 구워도 상관 노노!"
                    },
                ]
            },
            {
                question: "회사에서 보너스를 받았다.",
                answers:[
                    {
                        type: "포메라니안",
                        score: 1,
                        content: "나를 위해 써야지~사고 싶은 거 구입하기!"
                    },
                    {
                        type: "비글",
                        score: 2,
                        content: "미래를 위해 저축해두자! 통장에 입금하기!"
                    },
                ]
            },
            {
                question: "퇴근할 때 나는?",
                answers:[
                    {
                        type: "비글",
                        score: 1,
                        content: "바로 퇴근한다."
                    },
                    {
                        type: "웰시코기",
                        score: 2,
                        content: "주변 눈치를 보며 퇴근 타이밍을 본다."
                    },
                ]
            },
            {
                question: "식당에 가면?",
                answers:[
                    {
                        type: "치와와",
                        score: 1,
                        content: "수저, 젓가락을 먼저 세팅한다."
                    },
                    {
                        type: "리트리버",
                        score: 2,
                        content: "누군가 늘 미리 먼저 세팅해 놓는다."
                    },
                ]
            },
        ],
        results:[
            {
                type: "따뜻한 우유",
                desc: ``,
                query: "milk",
                score_range:range(11),
                img_src:'https://images.ktestone.com/resultImages/latte/milk.png'
            },
            {
                type: "밀크 커피",
                desc: ``,
                query: "milkCoffee",
                score_range:range(11, 14),
                img_src:'https://images.ktestone.com/resultImages/latte/milkCoffee.png'
            },
            {
                type: "라떼",
                desc: ``,
                query: "latte",
                score_range:range(14, 20),
                img_src:'https://images.ktestone.com/resultImages/latte/latte.png'
            },
        ]
    },
    // whosFault
    {
        info : {
            mainTitle:"누구의 잘못일까?",
            subTitle:"도대체 누구의 잘못일까?",
            mainUrl:"whosFault",
            scoreType:"storyTelling",
            mainImage:"https://images.ktestone.com/introImages/whosFault-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/whosFault-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/whosFault.png",
            lang:"Kor"
        },
        questions:[
            {
                question: 'whosFault-0',
                answers:[
                    {
                        type: "whosFault-0",
                        score: 0,
                        content: 'https://images.ktestone.com/storyImages/whosFault/whosFault-0.png'
                    }
                ]
            },
            {
                question: "whosFault-1",
                answers:[
                    {
                        type: "whosFault-1",
                        score: 0,
                        content: "https://images.ktestone.com/storyImages/whosFault/whosFault-1.png"
                    }
                ]
            },
            {
                question: "whosFault-2",
                answers:[
                    {
                        type: "whosFault-2",
                        score: 0,
                        content: "https://images.ktestone.com/storyImages/whosFault/whosFault-2.png"
                    }
                ]
            },
            {
                question: "whosFault-3",
                answers:[
                    {
                        type: "whosFault-3",
                        score: 0,
                        content: "https://images.ktestone.com/storyImages/whosFault/whosFault-3.png"
                    }
                ]
            },
            {
                question: "whosFault-4",
                answers:[
                    {
                        type: "whosFault-4",
                        score: 0,
                        content: 'https://images.ktestone.com/storyImages/whosFault/whosFault-4.png'
                    }
                ]
            },
            {
                question: "whosFault-5",
                answers:[
                    {
                        type: "whosFault-5",
                        score: 0,
                        content: "https://images.ktestone.com/storyImages/whosFault/whosFault-5.png"
                    }
                ]
            },
            {
                question: "whosFault-6",
                answers:[
                    {
                        type: "whosFault-6",
                        score: 0,
                        content: "https://images.ktestone.com/storyImages/whosFault/whosFault-6.png"
                    }
                ]
            },
            {
                question: "whosFault-7",
                answers:[
                    {
                        type: "whosFault-7",
                        score: 0,
                        content: "https://images.ktestone.com/storyImages/whosFault/whosFault-7.png"
                    }
                ]
            },
        ],
        results:[
            {
                type: "whosFault-result",
                desc: `whosFault-result`,
                query: "snrndmlwkfaht",
                score_range:range(2),
                img_src:'https://images.ktestone.com/storyImages/whosFault/whosFault-8.png'
            }
        ]
    },
    // birthNum
    {
        info : {
            mainTitle:"탄생수 테스트",
            subTitle:"탄생숫자로 알아보는 숨겨진 나의 성격",
            mainUrl:"birthNum",
            scoreType:"birthdayCalc",
            mainImage:"https://images.ktestone.com/introImages/birthNum-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/birthNum-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/birthNum.png",
            lang:"Kor"
        },
        questions:[
            {
                question: '데이트 전 날 나의 모습은?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '나가기 직전 마음에 드는 옷을 입는다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '자기 전 머릿속으로 나의 스타일링을 생각하고 잔다.'
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '전 날 머리부터 발끝까지 스타일링과 옷을 미리 준비한다.'
                    },
                ],
            },
            {
                question: "갑자기 자취방에 놀러 온다는 애인!\n그때의 나는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "아아... 왜 갑자기 오는 거야?! 보이는 곳만 치워 둔다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "모아둔 쓰레기를 버리고 바로 청소를 시작한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 미리미리 해 두었기 때문에 바로 주소를 보낸다."
                    },
                ]
            },
            {
                question: "좋아하는 이성이 생겼을 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "상대의 SNS을 탐방하며, 미래의 우리 모습을 상상해본다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "좋아하는 이성의 친구에게 도움을 요청한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "먼저 연락할 거리를 만들며 적극적으로 대시한다."
                    },
                ]
            },
            {
                question: "카페 안에 이상형인 사람과 계속 눈이 마주친다.\n 눈웃음까지 보내는데...?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "지금 말하면 좋은 말이 안 나올 것 같아. 좀 이따 연락할게."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "아!!!!!!!짜증나!!!!!진짜!!!!!! 도대체 왜 그러는 거야?!?!"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "이런 점에서 나는 화가 난 거야. 그런 부분은 고쳐줬으면 좋겠어."
                    },
                ]
            },
            {
                question: "쉬고 있는데 갑자기 걸려온 남사친/여사친의 전화, \n친구들이 같이 놀고 싶다며 나올 수 있냐고 물어보는데...?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: '귀찮은데… 아쉽긴 하지만 “시간이 너무 늦었어… 나 집에서 쉴래!”'
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "일단 끊고 수십 번 고민 끝에 나가기로 한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '오케이~ 인연 한 번 만들어보자~ “갈게~~~~”'
                    },
                ]
            },
            {
                question: "다가온 기념일! 나는 어떤 선물을 준비할까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "정성 어린 편지와 기억에 남을 만한 선물을 준비한다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "커플로 착용할 수 있는 아이템을 선물한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 사고 싶다거나 필요한 물건을 기억해 두었다가 서프라이즈로 선물한다."
                    },
                ]
            },
            {
                question: "내가 하고 싶은 연애 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "다이나믹한 화려한 연애 (단, 너무 화려해서 바람 피울 가능성 50%)"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "나만 바라보는 연애 (단, 너무 좋아해서 집착 대마왕)"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구같이 편안한 연애 (단, 가끔 친구인지 애인인지 헷갈림)"
                    },
                ]
            },
            {
                question: "애인과 대화할 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 5,
                        content: "장난치고 티키타카가 잘 되는 대화가 좋다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "서로의 생각을 공유하는 대화가 너무 좋다."
                    },
                ]
            },
            {
                question: "친구가 나에게 고민상당을 한다. 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "고민에 대한 구체적인 해결책을 제시한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "고민에 대해 빠져들어 감정적으로 같이 공감해준다."
                    },
                ]
            },
            {
                question: "기다려왔던 짝사랑하던 그/그녀와의 데이트 날..\n갑자기 급한 일이 생겼다며 다음에 만나자고 한다.\n과연 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "어쩔 수 없지… 알겠어 다음에 보자!"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "알겠어…근데 심각한 일이야?"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "아 진짜? 그럼 날짜 다시 조정하자! 언제가 괜찮아?"
                    },
                ]
            },
        ],
        results:[
            {
                type: "탄생수 1",
                desc: `태양처럼 주위를 밝게 비추는 타입\n
                ✓   넘치는 열정과 자신감이 최대 장점, 상황이 어떻든 당당하게 자신의 의견을 말하는 용감한 사람\n
                ✓   강력하고 개인적이며 창조적인 인간.\n
                ✓   정의로운 성격이기에 목적을 위해 편법을 쓰거나 비굴하게 굴지 않는다.\n
                ✓   리더십/행동력/포용력 어느 하나 빠지는 것이 없이 리더감으로 최고\n
                ✓   지배적인 리더십…하지만 폭군일 가능성이 크다.\n
                ✓   무뚝뚝하고 개인적인 관계보다 사회적 활동에 많은 에너지를 쏟는다.
                `,
                query: "xkstodtn1",
                score_range:range(2),
                img_src:'https://images.ktestone.com/resultImages/birthNum/birthNum_1.png'
            },
            {
                type: "탄생수 2",
                desc: `부드러운 여성스러운 타입\n
                ✓   친절함/섬세함을 장점으로 여러 사람들과 잘 어울린다.\n
                ✓   하지만 속으로는 강한 소유욕과 뚜렷한 호 불호를 지닌…\n
                ✓   행동보다는 생각을 많이 하는 타입 \n
                ✓   평화주의자, 본인의 원래 성격을 숨기는데 스트레스 받아서 집에서 폭발. \n
                ✓   예민 보스, 변덕스럽다. 감수성이 풍부, 모성/부성애가 강한 스타일\n
                ✓   풍부한 상상력, 너무 매력적인 스타일이지만 과하면 최악, 스스로 컨트롤해야 함.
                `,
                query: "xkstodtn2",
                score_range:range(2, 3),
                img_src:'https://images.ktestone.com/resultImages/birthNum/birthNum_2.png'
            },
            {
                type: "탄생수 3",
                desc: `자유로운 영혼 스타일 \n
                ✓   구속받는 것을 싫어하는 낙천적이고 쾌활한 타입, 엔터 쪽 분야에서 많이 보임. \n
                ✓   다재다능해 어떤 일이든 보통 이상의 성공을 이룰 가능성이 큼.\n
                ✓   하지만 너무 자유분방해서 가끔 스스로 수습하기 힘든 상황인 데도 주변에 도와 달라는 말 잘 안 함.\n
                ✓   특출난 재능인들이 많음 \n
                ✓   자존심 강하고 독립적인 성향 그렇지만 매우 활발 \n
                ✓   교제를 좋아하고 친절하며 우정이 두터워 인기쟁이임!
                `,
                query: "xkstodtn3",
                score_range:range(3, 4),
                img_src:'https://images.ktestone.com/resultImages/birthNum/birthNum_3.png'
            },
            {
                type: "탄생수 4",
                desc: `근면/성실 노력파 타입 \n
                ✓   겉보기에는 소극적인 것처럼 보이지만 내면은 열정과 냉철함 \n
                ✓   아니면 아닌 거지 라는 마음으로 내가 좋아하는 상대방에게 표현하는 사람들이에요. \n
                ✓   목표 있으면 끈질기고 신중하게 전진하는 타입 \n
                ✓   착실하고 성실하지만 집순이/집돌이 \n
                ✓   가까운 사람에겐 누구보다 잘해주고 다정하지만 낯가림 \n
                ✓   다른 사람보다 조금 느긋하고 느리지만 독립적으로 나아가 최종적으로 상장한 발전을 이루는 타입 \n
                ✓   참을성이 많고, 실용적인 성격
                `,
                query: "xkstodtn4",
                score_range:range(4, 5),
                img_src:'https://images.ktestone.com/resultImages/birthNum/birthNum_4.png'
            },
            {
                type: "탄생수 5",
                desc: `날카로운 지성이 빛나는 타입 \n
                ✓   재치 있고 활기찬 성격으로 감각적이며 즐거움을 추구 \n
                ✓   그래서인지 단순하고 반복적인 일상은 못 견디는 타입 \n
                ✓   늘 신선한 거, 지적인 것을 채울 수 있도록 도전하지만 얼마 못가 질려 하는 스타일 \n
                ✓   미지의 영역을 손대는… 덕분에 업적이라도 남길 수도… \n
                ✓   특유의 친화력과 재치로 인싸 중 인싸 \n
                ✓   붙임성이 좋지만 반대로 마음은 비판적이고 분석적인 사고 지님 \n
                ✓   마음속 여러 가치관이 공존해서 때로 혼란과 분열의 원인이 된다. \n
                ✓   압도적인 개성, 아무도 생각하지 못한 아이디어와 대처능력의 소유자.
                `,
                query: "xkstodtn5",
                score_range:range(5, 6),
                img_src:'https://images.ktestone.com/resultImages/birthNum/birthNum_5.png'
            },
            {
                type: "탄생수 6",
                desc: `센스와 배려를 타고난 천사표 타입 \n
                ✓   봄처럼 온화한 성품으로 다른 이의 어려움도 자기 일처럼 나섬. 믿음직스럽고 신뢰 가는 타입 \n
                ✓   학교나 회사 동료들에게 인기1이 될 것 같은 사람 \n
                ✓   스스로 만든 룰 때문에 괴로워함. \n
                ✓   거절해야 할 필요성을 매우 느끼고 있지만 누군가 도와 달라고 하면 거절 못 하고 도와주고 있음. \n
                ✓   한번 화나면 주변에서 손댈 수 없을 정도로 몹시 거침. \n
                ✓   분노가 가장 오를 경우는 강렬한 나의 소유욕을 건드렸을 때 \n
                ✓   이성으로 사람으로서 너무 매력적이며 미적 센스와 언제나 자신감이 넘친다. \n
                ✓   책임감도 있어 인내 강해, 하지만 큰 변화를 싫어한다. \n
                ✓   하지만 고집 센 금사빠인 사랑의 사냥꾼
                `,
                query: "xkstodtn6",
                score_range:range(6, 7),
                img_src:'https://images.ktestone.com/resultImages/birthNum/birthNum_6.png'
            },
            {
                type: "탄생수 7",
                desc: `외로운 천재 타입 \n
                ✓   정신적으로 색채가 강하고 신비한 느낌 \n
                ✓   매우 날카로운 통찰력과 비판력, 풍부한 독창성을 가지고 있지만 극단적일 경우는 괴짜 \n
                ✓   무슨 생각을 하는지 파악이 어려움. \n
                ✓   모순된 행동으로 인해 주변인을 당황시키고는 날 이해해 주는 사람 없다며 외로워함. \n
                ✓   천재적인 독창성, 발명, 영감이 마구 떠오름. \n
                ✓   너무 앞선 미래를 생각해 비로소 나중에야 빛을 바람. \n
                ✓   친구, 애인 누구에게나 평등하고 박애에 가까운 애정의 소유자 \n
                ✓   지위나 돈보다는 꿈보다 희망. 가치관을 이해해 주는 사람과 만나면 행복함. \n
                ✓   학문이나 연구적인 분야에서의 재능이 매우 뛰어남. 호기심 덩어리
                `,
                query: "xkstodtn7",
                score_range:range(7, 8),
                img_src:'https://images.ktestone.com/resultImages/birthNum/birthNum_7.png'
            },
            {
                type: "탄생수 8",
                desc: `폼생폼사에 죽는 유아독존 타입 \n
                ✓   큰 의지력과 개성이 있는 삶에 위험이 없으면 짜릿한 스릴을 느낄 수 없다는 대담한 타입 \n
                ✓   무언가 꽂히면 자신의 판단이 옳다는 자신감으로 몰두하기 때문에 아랫사람으로부터 신뢰감 뿜뿜 \n
                ✓   타인을 지배하려는 타입과 급한 성격, 굽히는 걸 싫어하려는 성격, 우유부단/애매모호 극혐 \n
                ✓   냉혹한 면모가 있어 다른 사람이 오해할 수도… \n
                ✓   매우 적극적이다. 야망이 큰 편, 목표 달성을 위한 전진 \n
                ✓   성공에 대한 욕심이 있다 \n
                ✓   내 안은 자기중심적인 나와 남을 위한 내가 존재 
                `,
                query: "xkstodtn8",
                score_range:range(8, 9),
                img_src:'https://images.ktestone.com/resultImages/birthNum/birthNum_8.png'
            },
            {
                type: "탄생수 9",
                desc: `부끄러움이 많은 포커페이스 \n
                ✓   되고 싶은 성격에 따라 기분에 따라 표정을 연기하고 숨길 수 있음. \n
                ✓   자신을 드러내기 꺼려 하는 부끄럼쟁이지만 때로는 자신의 의견을 강력하게 말하는 .. 고집도… \n
                ✓   불의 보면 못 참아, 투쟁의 중심… 대체로 성공하는 케이스 \n
                ✓   사람을 도울 때 기쁨을 느끼고 자신을 희생하는 봉사정신 \n
                ✓   머리가 좋고 박식하며 이해력이 좋아 다양한 가능성을 숨기고 있는 사람 \n
                ✓   성격이 불같아 감정 변화 크지만 봉사정신이 투철하고 영웅적인 면모도! \n
                ✓   로맨티시스트, 이상을 꿈꾸는 걸 좋아하지만 계산적인 현실적인 면도 있는…
                `,
                query: "xkstodtn9",
                score_range:range(9, 10),
                img_src:'https://images.ktestone.com/resultImages/birthNum/birthNum_9.png'
            },
        ]
    },
    // loveLevel
    {
        info : {
            mainTitle:"연애고수 테스트",
            subTitle:"나의 연애 점수는?",
            mainUrl:"lovelevel",
            scoreType:"numberScoring",
            mainImage:"https://images.ktestone.com/introImages/lovelevel-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/lovelevel-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/lovelevel.png",
            lang:"Kor"
        },
        questions:[
            {
                question: '데이트 전 날 나의 모습은?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '나가기 직전 마음에 드는 옷을 입는다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '자기 전 머릿속으로 나의 스타일링을 생각하고 잔다.'
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '전 날 머리부터 발끝까지 스타일링과 옷을 미리 준비한다.'
                    },
                ],
            },
            {
                question: "갑자기 자취방에 놀러 온다는 애인!\n그때의 나는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "아아... 왜 갑자기 오는 거야?! 보이는 곳만 치워 둔다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "모아둔 쓰레기를 버리고 바로 청소를 시작한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 미리미리 해 두었기 때문에 바로 주소를 보낸다."
                    },
                ]
            },
            {
                question: "좋아하는 이성이 생겼을 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "상대의 SNS을 탐방하며, 미래의 우리 모습을 상상해본다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "좋아하는 이성의 친구에게 도움을 요청한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "먼저 연락할 거리를 만들며 적극적으로 대시한다."
                    },
                ]
            },
            {
                question: "카페 안에 이상형인 사람과 계속 눈이 마주친다.\n 눈웃음까지 보내는데...?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "지금 말하면 좋은 말이 안 나올 것 같아. 일단 모르는 척 침묵."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "나?! 진짜 나?! 하면서 흘깃흘깃 몰래보기"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "나도 눈웃음 보내다가, 바로 번호 물어보기!"
                    },
                ]
            },
            {
                question: "쉬고 있는데 갑자기 걸려온 남사친/여사친의 전화, \n친구들이 같이 놀고 싶다며 나올 수 있냐고 물어보는데...?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: '귀찮은데… 아쉽긴 하지만 “시간이 너무 늦었어… 나 집에서 쉴래!”'
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "일단 끊고 수십 번 고민 끝에 나가기로 한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '오케이~ 인연 한 번 만들어보자~ “갈게~~~~”'
                    },
                ]
            },
            {
                question: "다가온 기념일! 나는 어떤 선물을 준비할까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "정성 어린 편지와 기억에 남을 만한 선물을 준비한다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "커플로 착용할 수 있는 아이템을 선물한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 사고 싶다거나 필요한 물건을 기억해 두었다가 서프라이즈로 선물한다."
                    },
                ]
            },
            {
                question: "내가 하고 싶은 연애 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "다이나믹한 화려한 연애 (단, 너무 화려해서 바람 피울 가능성 50%)"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "나만 바라보는 연애 (단, 너무 좋아해서 집착 대마왕)"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구같이 편안한 연애 (단, 가끔 친구인지 애인인지 헷갈림)"
                    },
                ]
            },
            {
                question: "애인과 대화할 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 5,
                        content: "장난치고 티키타카가 잘 되는 대화가 좋다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "서로의 생각을 공유하는 대화가 너무 좋다."
                    },
                ]
            },
            {
                question: "친구가 나에게 고민상당을 한다. 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "고민에 대한 구체적인 해결책을 제시한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "고민에 대해 빠져들어 감정적으로 같이 공감해준다."
                    },
                ]
            },
            {
                question: "기다려왔던 짝사랑하던 그/그녀와의 데이트 날..\n갑자기 급한 일이 생겼다며 다음에 만나자고 한다.\n과연 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "어쩔 수 없지… 알겠어 다음에 보자!"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "알겠어…근데 심각한 일이야?"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "아 진짜? 그럼 날짜 다시 조정하자! 언제가 괜찮아?"
                    },
                ]
            },
        ],
        results:[
            {
                type: "프로망상러",
                desc: `연애는 어케하세요...? \n
                ✓   연애 시작도 전에 상상만으로 연애부터 이별까지 다하는 프로망상러들!\n
                ✓   감정 표현이 서툴러서 늘 고민하고 짝사랑만 하다가 끝나는 경우가 많아요.\n
                ✓   애정표현도 스킨십도 너무 북흐북흐! \n
                ✓   다가오는 사람이 있어도 나도 모르게 철벽을 치는! \n
                ✓   본인은 표현한다고 하지만… \n
                ✓   그런 식이면 상대방은 절대 알지 못해요. \n
                ✓   싫은 건 싫다! 좋은 건 좋다! \n
                ✓   의사 표현을 잘 해야 합니다.  \n
                ✓   안 그럼 나만 힘들어~ 계속 의심만 하지 말고 이제 마음을 열고 연애해봐요~ \n
                ✓   안나 언니가 말하잖아요! 사랑은 열린 문이라고 !! \n
                `,
                query: "vmfhakdtkdfj",
                score_range:range(31),
                img_src:'https://images.ktestone.com/resultImages/lovelevel/lovelevel_1.png'
            },
            {
                type: "연애꾸러기",
                desc: `이제 밀당은 가능해요 \n
                ✓   나 나름 연애 잘하는데?라고 생각하는 연애 꾸러기들!\n
                ✓   하지만 현실은 아기에 불과하죠.\n
                ✓   표현을 잘하긴 하지만 가끔은 너무 감정적이어서 상대방이 지칠 수 있어요. \n
                ✓   이제 연애하기 시작하는데 이 사람을 놓치기 싫은 마음에 많은 사랑을 요구하죠. \n
                ✓   그런 부분이 상대방을 지치게 할 수 있어요! \n
                ✓   너무 상대방만 바라보지 말고 나 자신도 돌봐주세요! \n
                ✓   내가 아니라고 하는 사람에게 굳이 노력할 필요 없잖아요! \n
                ✓   가끔은 나 자신도 소중하게 생각해 봐요~  \n
                ✓   세상은 넓고 내 사람은 분명 찾을 수 있으니까요! 걱정하지 마세요!
                `,
                query: "dusdoRNfjrl",
                score_range:range(31, 66),
                img_src:'https://images.ktestone.com/resultImages/lovelevel/lovelevel_2.png'
            },
            {
                type: "아수라백작",
                desc: `눈치 만렙 보스?! 오늘은 어떤모습을? \n
                ✓   연애는 연애! 나는 나! \n
                ✓   애정표현이나 스킨십에도 적극적인 친구들! \n
                ✓   때로는 수줍게 때로는 직진러로 상황에 맞게 아수라 백작 같은!! \n
                ✓   서로의 생활은 소중하게~ 연애할 땐 연애에 충실하게! \n
                ✓   컨트롤이 가능한 나! 사이보그 아닌가요? \n
                ✓   좋아하는 사람이 다가오면 포커페이스 유지 가능한 나란 사람~ \n
                ✓   관심 없는 척하지만 뒤에선 아주아주 사람을 잘 유혹하는 엄청난 능력이 있는 사람들이랍니다! \n
                ✓   과거에 속앓이 하던 나에서 안녕~~~~ \n
                ✓   다 나를 위함이다~ 상처는 덜 받자! \n
                ✓   표현은 잘하자~ 연애 학습형 결과랍니다!
                `,
                query: "dusdoRnfjrl",
                score_range:range(66, 86),
                img_src:'https://images.ktestone.com/resultImages/lovelevel/lovelevel_3.png'
            },
            {
                type: "프로직진러",
                desc: `연애하고 싶으면 표현해 \n
                ✓   쿨내 풀풀 나는 프로직진러들은 표현하는 것에 대해 혹은 거절에 대해 두려워하지 않아요! \n
                ✓   아니면 아닌 거지 라는 마음으로 내가 좋아하는 상대방에게 표현하는 사람들이에요. \n
                ✓   왜냐면 말하지 않으면 알 수가 없으니까요. \n
                ✓   주변에 친구들도 많은 인싸력! 이상형을 만나면 어떻게든 성공시키는! \n
                ✓   열 번 찍어 안 넘어가는 나무 없잖아요! \n
                ✓   상대방의 눈치를 잘 보지 않고 표현하는 직진러! \n
                ✓   하지만 너무 나에게 집착하는 건 싫어요! \n
                ✓   외로운 것도 싫어서 늘 연애를 하고 있는 사람들! \n
                ✓   사람은 사람으로 잊는 거죠! 
                `,
                query: "vmfhwlrwlsfj",
                score_range:range(86, 101),
                img_src:'https://images.ktestone.com/resultImages/lovelevel/lovelevel_4.png'
            },
        ]
    },
    // humanWall
    {
        info : {
            mainTitle:"철벽남녀 테스트",
            subTitle:"이성이 다가올 때 나의 반응은?",
            mainUrl:"humanwall",
            scoreType:"typeCounting",
            mainImage:"https://images.ktestone.com/introImages/humanWall-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/humanWall-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/humanwall.png",
            lang:"Kor"
        },
        questions:[
            {
                question: '남녀사이에 우정이란?',
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: '있을 수 없어. 같이 있으면 있을수록 감정은 생기기 마련!'
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: '친구는 친구지. 이성으로 생각한 적 1도 없다! '
                    },
                ],
            },
            {
                question: "마음에 드는 이성과 함께 있을 때 나는?",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: "표현하지 않지만 이미 머릿속으로 이 사람과 사귀게 됐을 때 모습을 상상한다."
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "적극적으로 리액션 하며 호감을 표현하려고 노력한다."
                    },
                ]
            },
            {
                question: "좋아하는 이성이 다가올 때 나는?",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: "너무 좋아했지만 막상 나에게 다가오면 피하게 된다."
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "서로의 마음이 어느 정도 확인했으니 적극적으로 표현한다."
                    },
                ]
            },
            {
                question: "헤어질 것이 뻔한 인연이라는 걸 알고 있을 때 나의 선택은?",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: "헤어질 인연이라면 시작하지도 않겠다."
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "헤어질 걸 알아도 시작은 해본다."
                    },
                ]
            },
            {
                question: "마음에 들지 않는 상대에게 계속 연락이 온다.",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: '연락을 그만 했으면 좋겠다는 의사를 확실하게 표현한다.'
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "드문드문 답장하거나 안읽씹한다."
                    },
                ]
            },
            {
                question: "생전 처음 보는 사람과 과제를 같이 하게 되었다.",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: "상대방이 먼저 말 걸어줄 때까지 가만히 있는 편이다."
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "먼저 다가가 말을 걸며 인사하는 편이다."
                    },
                ]
            },
            {
                question: "소개팅을 제안하는 친구!",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: "소개팅…하고는 싶지만 어색함 너무 싫어 난 자만추 스타일!"
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "무조건 오케이~ 사람 인연이라는 것이 어디서 만날지 몰라~"
                    },
                ]
            },
            {
                question: "내가 더 선호하는 연애스타일은?",
                answers:[
                    {
                        type: "철벽인",
                        score: 5,
                        content: "친구 같은 편안한 연애"
                    },
                    {
                        type: "자동문",
                        score: 10,
                        content: "매 순간에 설렘이 가득한 연애 "
                    },
                ]
            },
            {
                question: "연애할 때 나는?",
                answers:[
                    {
                        type: "철벽인",
                        score: 5,
                        content: "사주나 타로 어플을 자주 이용한다."
                    },
                    {
                        type: "자동문",
                        score: 10,
                        content: "나는 내 스타일대로~ 내 맘대로 해야지!"
                    },
                ]
            },
            {
                question: "나는 연애의 대한 고민상담을",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: "들어주는 편이다."
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "친구들에게 요청하는 편이다."
                    },
                ]
            },
        ],
        results:[
            {
                type: "철벽인",
                desc: `접근금지 확실한 철벽수비수 \n
                ✓   연애는 하고 싶지만 연애에 대한 환상이 크고,\n
                ✓   자존심이 높아 자신의 이상형에 미치지 못하는 사람들이 아예 접근하지 못하도록 방어하는 당신은 ‘철벽인’\n
                ✓   만리장성은 저리 가라 할 정도로 엄청난 철벽을 치고 있는 당신! \n
                ✓   남들의 연애 상담은 빠삭하지만 실전은 너무 약한... \n
                ✓   상대방을 너무 좋아하지만 정작 상대방이 적극적으로 다가오면 부담스러워서 피하고, \n
                ✓   상대방의 이상한 오점을 발견하면 바로 마음을 접어버려요. \n
                ✓   나는 눈이 낮다고 하지만 높은 거랍니다. \n
                ✓   이제 너무 철벽만 치지 마세요! \n
                ✓   그 벽 얼른 허무시고 행복하고 즐거운 연애해야죠!
                `,
                query: "cjfqurdls",
                score_range:range(31),
                img_src:'https://images.ktestone.com/resultImages/humanwall/humanwall-1.png'
            },
            {
                type: "자동문",
                desc: `철벽이 뭐죠? 오픈마인드의 소유자 \n
                ✓   철벽이 뭐죠?\n
                ✓   연애 경험은 많을수록 좋은 거라고 했어요~ \n
                ✓   철벽이라는 단어 자체가 어울리지 않는 당신! \n
                ✓   들어오는 소개팅, 미팅은 다 받는데! \n
                ✓   인연이면 만나는 거고 아니면 친구로 만들어버리는~ \n
                ✓   살짝 금사빠 기질도? \n
                ✓   한번 사랑에 빠지면 간이고 쓸개고 다 줄 것처럼 직진하는 직진인!  \n
                ✓   하지만 포인트 하나 나가면 식는 것도 한순간인 당신! \n
                ✓   공백기가 짧은 타입이랍니다! \n
                ✓   세상은 넓고 인연은 많으니 이쁜 사랑 많이 하자~ \n
                ✓   많이 만나야 미래의 배우자를 잘 만나지! ><
                `,
                query: "wkehdans",
                score_range:range(31, 66),
                img_src:'https://images.ktestone.com/resultImages/humanwall/humanwall-2.png'
            },
        ]
    },
    // wind
    {
        info : {
            mainTitle:"바람끼 테스트",
            subTitle:"내 애인의 바람끼는 어느 정도일까.?",
            mainUrl:"wind",
            scoreType:"numberScoring",
            mainImage:"https://images.ktestone.com/introImages/wind-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/wind-thumb.png",
            lang:"Kor"
        },
        questions:[
            {
                question: '난 친구들의 기분 변화를 잘 캐치한다.',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '기분이 좋지 않을 땐 혼자 있다가 기분이 나아 질 때 힘차게 돌아온다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '음 때에 따라 다른 것 같아요.'
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '넹, 친구들이 기분이 나쁘거나 안 좋은 거 있음 먼저 눈치채는 편이죠.'
                    },
                ],
            },
            {
                question: "회사 내 사내연애 커플이 탄생했다. \n 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "엥??? 둘이요???? 그 둘이 사귄다고요???"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "아 진짜? 나는 그냥 친한 사이인 줄 알았는데. "
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "모두가 아는 그 비밀연애?! 알고 있었어! 티 나더라."
                    },
                ]
            },
            {
                question: "놀이공원에 간 당신! \n친구들이 제일 스릴넘치는 롤러코스터를 타자고 한다!",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "아 미안 난 여기서 기다리고 있을게 타고와..!"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "아 싫은데...그래도 타자니까 다같이 타야지ㅜ"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "그렇지~ 놀이공원 왔으면 타야지~"
                    },
                ]
            },
            {
                question: "카페 안에 이상형인 사람과 계속 눈이 마주친다.\n 눈웃음까지 보내는데...?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "부끄럽기 때문에 그냥 수줍게 눈을 피한다."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "그냥 똑같이 눈을 보며 웃어준다."
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "너무 떨리지만 용기를 내 먼저 가서 번호를 물어본다."
                    },
                ]
            },
            {
                question: "친구들과 있을 때 나의 포지션은??",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: "내가 중심! 말을 먼저 꺼내고 분위기를 으쌰 하게 만드는 분위기메이커~!"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "리액션을 많이 하고 잘 웃으며, 박수친다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: "웃긴 웃지만 대부분 조용조용한 편이다."
                    },
                ]
            },
            {
                question: "친구들과의 약속에 늦은 당신! \n준비도 하나도 못했는데..\n이 때 당신은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "꾸미는 건 사치, 일단 집에서 나간다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "먼저 사과하고, 최소한의 준비만 한 뒤 나간다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "카톡이나 전화로 먼저 가라고 말한 뒤, 모든 준비를 다 하고 나간다."
                    },
                ]
            },
            {
                question: "소개팅을 할 때 가장 많이 보는 것은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "음 나는 외모도 외모! 성격도 성격! 둘다 중요한 것같아! 평범한게 최고!"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "외모도 외모인데 나는 성격이 더 좋아야해! 잘생기고 이쁘면 인물값 한다잖아."
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "첫인상의 90%는 외모지! 외모가 호감이 가야 좋아지는거지!"
                    },
                ]
            },
            {
                question: "너무 좋아했던 짝사랑이 애인때문에 \n 힘들어 헤어진다는데 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "그래도 마지막으로 대화는 한번 더 해봐 라고 하며 위로해준다."
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "그래! 헤어져버려!!"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "너 마음가는대로 해..."
                    },
                ]
            },
            {
                question: "나의 이별 유형은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "그동안 못 만난 친구들을 만나고 나만의 시간을 갖는다."
                    },
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "새로운 사랑...? 난 이제 사랑 같은 거 못해..\n슬픔에 잠기는 스타일이다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "이별의 아픔은 새로운 사랑으로 치유하는 것, 소개를 받는다."
                    },
                ]
            },
            {
                question: "오늘부터 운동을 시작한 당신! 당신의 복장은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "운동하기 편안한 티셔츠와 신기 편한 운동화"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "유행을 따라간 스타일의 운동복과 포인트인 운동화"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "전문가의 느낌이 나는 트레이닝복"
                    },
                ]
            },
        ],
        results:[
            {
                type: "해바라기",
                desc: `밀당이 뭔데? '해바라기' 그것이 바로 나야 \n
                ✓   바람이 뭐야? 해바라기 스타일\n
                ✓   한 사람에게 빠지면 그 사람만 바라보는 당신은 해바라기 같은 사람! \n
                ✓   자기도 바쁘면서 남을 도우려고 먼저 양보하는 사람! \n
                ✓   이런 사람과 만나면 늘 사람 자체만으로 힐링 된다고 하는 사람들이 많아~ \n
                ✓   가끔 사랑을 주는 것만큼 되돌려 받지 못해 서운해하거나 속상해 하는 일이 많은 사람들이야. \n
                ✓   사랑을 바라는 것뿐인데 상대방이 떠나갈 때도 있지.  \n
                ✓   사랑을 더 주는건 손해가 아닌데도 손해를 보는 것같은 느낌이 들곤 하지.\n
                ✓   모두 나와 같은 사람들이면 좋을텐데! \n
                ✓   하지만 말하지 않으면 몰라! 더 표현해야해. \n
                ✓   싫은건 싫다 좋은 건 좋다고 말해보자~ \n
                ✓   같이 사랑하는 거니까! \n
                `,
                query: "goqkfkrl",
                score_range:range(51),
                img_src:'https://images.ktestone.com/resultImages/wind/wind_goqofkrl.png'
            },
            {
                type: "관심러",
                desc: `애인이 있을 땐 눈 안돌리는 스타일 \n 친화력은 100점 바람기는 50점! \n
                ✓   바람은 아니지만 주변에 관심이 많아요~ \n
                ✓   잘생긴 사람! 이쁜 사람 좋아하는 건 그냥 좋아하는 것 뿐이지 내 사랑은 너야! \n
                ✓   그들은 그들인거고! 이쁜걸 누가 안좋아해? \n
                ✓   절대 바람은 피지 않지만 속으로는 여러 관심이 많은 사람들이죠! \n
                ✓   누구나 다 그렇잖아요~ 그냥 평범한 사랑을 하는 사람들이에요! \n
                ✓   지금도 나쁘지 않죠! 잘생긴고 이쁜 건 늘 짜릿하니까\n
                ✓   내사람은 당신! 내사람을 만날 때는 최선을 다하는! \n
                ✓   다른 이성을 좋아하는건 이해가 가지 않아요!
                `,
                query: "rhkstlafj",
                score_range:range(51, 81),
                img_src:'https://images.ktestone.com/resultImages/wind/wind_rhkstlafj.png'
            },
            {
                type: "매력쟁이",
                desc: `난 매력쟁이지~ \n 주변에서 날 가만히 놔두지 않아! \n
                ✓   사람을 좋아하고 놀기를 너무 좋아하는 사람들!\n
                ✓   에너지 자체가 넘치고 활기찬 사람들이야~\n
                ✓   스킨쉽도 너무 좋아하고 늘 먼저 시도하려고 하는 사람들이 많지? \n
                ✓   사람을 너무 좋아해서 그래! \n
                ✓   하지만 이런 사람들도 예민한 부분이 많다고 해. \n
                ✓   관계에 갈등이 있거나 상대방이 나에게 호감이 없다는 느낌이 오면 지나치게 감정적으로 행동하게 되어 갈등 해결을 포기하고 다른 사람을 만나기도 한데! \n
                ✓   상대방이 날 안 좋아하니 방어책을 만들어 놓기 위함이지~ \n
                ✓   외모도 출중하니까 모두에게 인기가 많아 이성접근이 쉽다는데~~~ \n
                ✓   하지만 모두 그러는 건 아니니 조심하자구~
                `,
                query: "aofurwoddl",
                score_range:range(81, 101),
                img_src:'https://images.ktestone.com/resultImages/wind/wind_aofurwoddl.png'
            },
        ]
    },
    // daengdaeng
    {
        info : {
            mainTitle:"강아지로 보는 성격 테스트",
            subTitle:"내가 강아지 라면?",
            mainUrl:"daengdaeng",
            scoreType:"typeCounting",
            mainImage:"https://images.ktestone.com/introImages/daengdaeng-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/daenngdaeng-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/Korea/daengdaeng.png",
            lang:"Kor"
        },
        questions:[
            {
                question: '기분이 좋지 않을 때 난',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '기분이 좋지 않을 땐 혼자 있다가 기분이 나아 질 때 힘차게 돌아온다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '기분이 좋지 않을 때 누군가 날 건들이면 그 사람에 대해 참고 있던 게 폭발한다. '
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '“아 몰랑! 그냥 신경 안쓸래에에에에!!!” 하고 털어낸다.'
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: '세상 살며 기분 안 좋을 일이 별로 없다.'
                    },
                ],
            },
            {
                question: "다음 중 나의 연애 스타일과 가장 비슷한 것은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "애인도! 친구도! 다 같이 놀면 얼마나 좋아!? 둘 다 내꺼! "
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "집착 싫어! 집착은NO! 알아서 잘할 게! 의심하지 말아줬으면 좋겠어!"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "질투는 잘 안 하는 편인데... 집착도 딱히…?"
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "난 질투쟁이인데? 질투를 하는 만큼 그 사람을 좋아한다는 거 아냐?\n ...넌 나만 바라봐."
                    },
                ]
            },
            {
                question: "첫 조별과제 날, 과연 나의 역할은?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "모두를 컨트롤 하는 리더십의 끝판 왕 조장"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "화려한 나의 발표실력을 보여주지, 발표자"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "꼼꼼함은 필수! 자료조사"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "미적 센스가 필요한 PPT"
                    },
                ]
            },
            {
                question: "드디어 동창회날, 과연 나는?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "여기저기 아는 사람과 반갑게 인사하며, 돌아다니면서 노는 인싸 스타일"
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "가만히 있어도 주변에 친구들이 먼저 다가오는 인기쟁이 스타일"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "처음에 낯을 가려 조금 어색해하지만 금세 친해져서 재밌게 분위기를 주도하는 반인싸스타일"
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "아는 친구들은 많지 않지만 친한 친구들과는 재밌게 노는 스타일"
                    },
                ]
            },
            {
                question: "드디어 기다렸던 주말! 나의 모습은?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: "집밖은 위험해~잠을 자거나 침대 위에서 크게 벗어나지 않는 휴식"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "집에서 쉬는 건 너무 시간이 안 가 친구들에게 만나자고 연락한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: "주말에는 무조건 나가야지! 평일에 미리 봐두었던 힙한 곳과 핫플인 곳을 찾아간다."
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "평일에 받은 스트레스를 맛난 음식을 먹으며, 미뤄왔던 영화나 드라마를 본다."
                    },
                ]
            },
            {
                question: "인형을 선물 받았다. 어떤 인형일까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "극세사로 만든 복슬거리는 중간사이즈 강아지 인형"
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "껴안고 자기 좋은 길다란 바나나 인형"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "완전 큰 곰인형"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "납작해서 베개로 사용하기도 딱 좋은 원숭이 인형"
                    },
                ]
            },
            {
                question: "놀이공원에서 당신의 모습은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "귀신의 집, 롤러코스터 등 가능한 모든 기구를 다 타본다!"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "딱히 불평하지 않고 다 탄다!"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "궁금은 하지만 겁이 많아서 고민하거나 무서운 건 타지 않는다."
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "타긴 다 타지만 힘들면 못타는 사람과 함께 쉰다."
                    },
                ]
            },
            {
                question: "맛집을 가자는 친구들의 말에 나는?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "맛집 리스트 보유자라면서 적극적으로 맛집을 홍보한다."
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "맛집이라고 추천하는 친구의 말에 따라간다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "아무 곳이든 상관 ㄴㄴ 별생각이 없다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "일단 만나 돌아다니며 맛집스러워 보이는 곳에 들어간다."
                    },
                ]
            },
            {
                question: "파티가 있을 때 나의 드레스 코드는?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "주인공은 바로 나, 돋보일 수 있게 화려하고 멋있게 최대한 꾸미고 간다."
                    },
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "나의 장점을 최대한으로 이끌 수 있게 스타일링을 한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "깔끔하지만 스타일리시한 포인트를 준다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "기본템을 장착한 댄디하고 캐주얼한 느낌"
                    },
                ]
            },
            {
                question: "내가 가고싶은 여행지 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "네온사인 가득~ 신나는 파라다이스 놀이공원"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "이곳의 유명한 박물관이나 건물들은 꼭 가봐야지"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "꽃, 나무 자연이 가득한 여행지"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구들끼리 프라이빗하게 놀 수 있는 수영장이 있는 풀빌라"
                    },
                ]
            },
        ],
        results:[
            {
                type: "포메라니안",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                ✓   친구들에게 인기가 많은 타입으로 주변에 사람이 많고 늘 주인공 역할을 해요! \n
                ✓   활발하고 호기심이 많지만 겁이 너무 많아요 \n
                ✓   살짝 성격이 지랄맞을 때도 있는데 그럴 땐 좀 냅둬야 합니다. 풀어주려고 하지 말고 가만히 냅두세요. 알아서 풀리고 다시 기분이 좋아집니다.\n
                ✓   외모에 관심이 많은 스타일이라 스타일링을 바꾸고 싶어하지만 결국 다시 원래의 스타일로 돌아오곤 하죠.\n
                ✓   자기가 기분 좋을 땐 세상 애교쟁이, 기분 안 좋으면 세상 지랄견!\n
                ✓   사람을 너무 좋아해서 이것저것 다 퍼줍니다. \n
                ✓   기분 안 좋은 티를 숨기지 못해 가끔 표정관리가 안돼요.\n
                ✓   우리 친구들은 낯을 많이 가리는데 시간이 지나면서 친해지면 미친듯이 활기차게 놀아요.\n
                ✓   한 번 화나면 불같이 화를 내는 다혈질 적인 성격이 있어요.\n
                `,
                query: "1chqhwlqzhrfj",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/daengdaeng/daengdaeng_pome.png'
            },
            {
                type: "치와와",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n
                ✓   뽈뽈 돌아다니면서 많은 참견을 하는 참견쟁이들\n
                ✓   내 사람은 너무너무 소중하지만, 친하지 않은 사람들에겐 낯을 많이 가려요. 경계심 대마왕이라서 섣불리 다가가면 안 됩니다. 치와와 친구들에게 시간을 주세요!\n
                ✓   질투심이 많아서 조심해야해요. 잘못걸리는 순간 그날은 전쟁입니다. 나에게 질투에 대한 실험을 하지마세요!!\n
                ✓   불의를 보면 물불 가리지 않는 겁이 없는 용감한 용자! 으르렁!\n
                ✓   스트레스는 음식으로 풀 때가 있어요.\n
                ✓   내사람을 너무 좋아하다 보니 가끔 외로움을 많이 타요.\n
                ✓   눈치가 빨라서 행동에 막힘이 없이 재빠르게 움직이는 부지런쟁이들입니다.\n
                ✓   기부니가 좋을 땐 애교쟁이><기분이가 안 좋을 땐 까칠쟁이 -_-\n
                ✓   가끔 앞 뒤가 다른 사회생활 만랩이랍니다~\n
                ✓   참는 걸 극도로 싫어해요.`,
                query: "2tjsxorgudwlqzhrfj",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/daengdaeng/daengdaeng_chiwawa.png'
            },
            {
                type: "웰시코기",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n
                ✓   상당히 활동적인 스타일, 열정이 가득해요. 허허..\n
                ✓   가끔 에너지가 너무 넘쳐나서 가끔 주변인들이 감당하기 힘들어요\n
                ✓   집에 있으면 시간이 너무 안가는 느낌, 밖을 나가야합니다.\n
                ✓   날 가두는 느낌 너무 힘들어.. 나에게 집착하지 말아줄래? 난 자유로운 영혼이거든! 알아서 잘하니까 너무 의심하거나 집착하지 말아주세요.\n
                ✓   하는 행동에 있어 단단함이 있고 자신감이 넘쳐나지만 친절해서 주위에 사람들이 넘쳐나요. 학생 시절엔 반장, 부반장의 경험 많죠. \n
                ✓   저 사람은 너무 순딩해하는 소리를 많이 듣지만 사실 나는 단호박입니다. \n
                ✓   눈으로 말을 하는 것 같은..뭔가…매력이 있어….왜지…눈으로 사람 설레게 하기 만랩\n
                ✓   이성에게 인기가 많은 타입이에요. 난 그냥 이 사람을 도와준 것 뿐인데 보면 저를 좋아하고 있더라구요. 왤까요? 하면서 다른 사람이 가지지 못한 마성의 매력`,
                query: "3ehfdusqusdlwlqzhrfj",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/daengdaeng/daengdaeng_wealthy.png'
            },
            {
                type: "리트리버",
                desc: `친숙한 댕댕이 , 리트리버\n
                ✓   순한 성격의 소유자, 이런들 어떠하리~ 저런들 어떠하리~ 이해심이 넘쳐나요\n
                ✓   사람을 잘 따르고 상냥한 친절한 성격을 지니고 있어 주변에서 은근 좋아하는 이성이 많아요. 하지만 본인은 모르죠. 주인공아닌가요? \n
                ✓   어쩜 이렇게 화를 안낼까 하지만 화를 내면 세상 제일 무서워요.\n
                ✓   은근 아무것도 하기 싫고 잘 누워있는 편이라 주변에서 놀자고 해야해요. 아니면 집 밖에 잘 안나오려고 해서… 누군가라도 만나자고 하면 일단 만나니까 놀아줘요.\n
                ✓   순둥순둥해서 걱정하겠지만 은근히 모든 걸 다 잘해냅니다.\n
                ✓   한 번 놀 때 미친듯이 놀면 적당한 휴식이 꼭 필요해요\n
                ✓   사람 자체가 너무 편안해서 같이 있으면 그냥 행복해지는 에너자이저~\n
                ✓   인내심 최강자이면서 예의도 바르지만 또 장난꾸러기 하지만 머리도 좋아 뭐야 못하는게 뭐야~~완전 워너비 애인상이로구나!`,
                query: "4vmfhwlqzhrfj",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/daengdaeng/daengdaeng_retriever.png'
            },
            {
                type: "비글",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n
                ✓   체력이 대단하다고 생각할 정도로 미친 텐션의 소유자 비글!\n
                ✓   영리하고 머리가 좋아요~ 그래서 눈치도 수준급! \n
                ✓   여기저기 맛집 탐방을 좋아하고 음식을 너무 좋아해요. 맛집 물어보면 왠만한 건 다 알정도로 아주 맛집 리스트를 가지고 있죠.\n
                ✓   악마견이라 불리지만 사실은 에너지가 넘쳐나고 사람을 너무 좋아해서 관심을 달라는 말이에요. \n
                ✓   외로움을 많이 타서 늘 밖으로 나가고 싶어해요. 누구든 만나서 힘차게 놀아야 외롭지 않거든요. 혼자 있는 거 너무 싫어!!! 스트레스 만땅!\n
                ✓   노는게 제일 좋아~ 친구들 모여라~ 언제나! 즐거워!\n
                ✓   될 대로 돼라~~~라는 마인드 늘 긍정적이고 낙천적인 마인드의 소유자`,
                query: "4vmfhwlqzhrfj",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/daengdaeng/daengdaeng_beagle.png'
            },
        ]
    },
    // zipkok
    {
        info : {
            mainTitle:"프로 집콕러 테스트",
            subTitle:"이시국엔 집에 붙어 있자 꼭!",
            mainUrl:"zipkok",
            scoreType:"numberScoring",
            mainImage:"https://images.ktestone.com/introImages/zipkok-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/zipkok-thumb.png",
            lang:"Kor"
        },
        questions:[
            {
                question: '주말에 만나자는 친구! \n 하지만 집밖은 위험해! 나의 답장은?',
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: '그래도 친구가 오래간만에 만나자니 나간다.'
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: '귀찮지만 뭐하는 지에 따라 나갈지 말지 결정한다.'
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: '귀찮은 건 no! 약속 있는 척하고 집에서 쉰다.'
                    },
                ],
            },
            {
                question: "나에게 소확행이란?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "남자친구와 주말에 걸어다니면서 소소한 데이트하기"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "친구들이랑 다같이 모여서 캠핑이나 1박 여행을 간다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "행복이란 \n '내침대에 따뜻한 전기장판과 부드러운 극세사 이불을 덮고 밀린 영화나 드라마를 귤을 까먹으면 보는 것'.."
                    },
                ]
            },
            {
                question: "아무런 약속이 없는 주말, 뭐할까?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "밥먹고 샤워를 한 뒤 밀린 방 청소나 할일을 찾아 움직인다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "밥먹고 세수와 양치만 하고 쇼파에 앉아 티비를 본다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "양치만 하고 누워서 넷플릭스나 왓챠를 켜본다."
                    },
                ]
            },
            {
                question: "드디어 금요일, 주말에 뭐할까?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "집에 있는 건 너무 심심해! \n 친구들한테 만나자며 먼저 연락한다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "집에 있다가 만나자는 연락을 받으면 저녁에 슬슬 기어나간다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "주말에..왜 약속을.. \n 난 쉴랭! 굳이 먼저 약속을 따로 잡지 않는다."
                    },
                ]
            },
            {
                question: "집에 있을 때 나의 모습은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "으 시간이 왜 이렇게 안가... \n 주변 친구들에게 연락해서 나갈 각 잡기"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "낮엔 자고 밤에 나가야지~ \n 8.9시쯤 나갈 준비를 해본다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "밀린 드라마나 영화가 너무 많아... \n 하루가 너무 짧다."
                    },
                ]
            },
            {
                question: "배달 앱 속 나의 등급은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "배달은 별로, 난 맛집 탐방가임"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "그냥 가끔 집에 있거나 친구들이랑 파티할 때 시킴"
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "vip 이하로 떨어져본적이 없수다"
                    },
                ]
            },
            {
                question: "갑자기 일이생겨 못만난다고 하는 친구!",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "아,,어쩔 수 없지 하면서 바로 만날 친구에게 전화를 건다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "밖에 있으면 누구라도 나오겟지. \n 카페나 pc방에서 친구들을 부른다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "안타까워하는 척 하면서 집에서 쉴 생각에 기분이 좋아진다."
                    },
                ]
            },
            {
                question: "집에만 있으니 심심한 당신!\n생각에 빠지게 되는데...",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "휴 이렇게 집에만 있으니 좀 그렇다..\n 라고 생각하며 당장 뭘 배워야할지 찾아보고 상담예약을 잡아본다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "당분간은 계속 집에 있어야하는데.. \n 먹을 간식과 생필품을 구입한다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "나는.. 아무생각이 없다. \n 왜냐면 아무생각이 없기 때문이다."
                    },
                ]
            },
            {
                question: "약속 시간 전 당신의 모습은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "옷은 전 날에 미리 골라놨으니 메이크업, 헤어 등 섬세하게 꾸민다"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "약속 2시간전 부터 일어나서 준비중이지만 세월아 네월아한다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "아 귀찮다...나가지말까 \n 하고 늘어져있다가 시간을 보고 재빨리 준비한다."
                    },
                ]
            },
            {
                question: "친구들과의 약속이 있을때 나의 모습은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "10분 전에 미리 도착해 친구들을 기다린다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "조금 늦는다고 친구들이 다 가있을때 그 장소로 간다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "진짜 되도록 안나가지만 굳이 약속이 있다면 정각에 도착한다."
                    },
                ]
            },
        ],
        results:[
            {
                type: "Level 1. 초보 집콕러",
                desc: "집에 있으면 있지만 심심하면 집 밖을 나가고 싶어하는 \n 초보집콕러~ \n 아직은 집이랑 서먹서먹한 42~ \n 이틀이상 집에 있으면 나가고 싶어서 안달난 마치 라푼젤같은 그대! \n 집에 있다가도 나오라면 바로 나오는 오케이맨~!",
                query: "chqhwlqzhrfj",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/zipkok/zipkok_chqhwlqzhrfj.png'
            },
            {
                type: "Level 2. 선택형 집콕러",
                desc: "주말엔 집에서 쉬는게 최고지만~~ \n 날 만나고 싶다면 ~ 나가줘야지~~~~ 뭐할건데? \n 꼭 재밌는 일이 있으면 무조건 튀어나가는 그대는 바로 \n 선택형 집콕러! \n 당신은 집에 있는 걸 좋아하지만 선택장애의 면모가 리를 빗 \n 있기때문에 친구들의 설득과 흥미 딘딘한 일이 있으면 \n 바로 집에서 튀어나가버리곤 하지~~",
                query: "tjsxorgudwlqzhrfj",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/zipkok/zipkok_tjsxorgudwlqzhrfj.png'
            },
            {
                type: "Level 3. 돌연변이 집콕러",
                desc: "극과극인 정말 집콕하고 싶을때 집에서 절대 나오지 않z...! \n 하지만 어느순간 또 약속 줄줄 잡아 버리는 그대! \n 성수기와 비성수기가 확실한 당신은 바로 \n 돌연변이 집콕러! \n 집에서도 밖에서도 최선을 다해 노는 당신! \n 한번 놀고 나면 꼭 충분한 휴식이 필요하지~",
                query: "ehfdusqusdlwlqzhrfj",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/zipkok/zipkok_ehfdusqusdlwlqzhrfj.png'
            },
            {
                type: "Level 4. 프로 집콕러",
                desc: "집이 곧 나의 삶의 전부일세, 당신은 바로 \n 프로 집콕러~ \n 집을 왜 나가~~ 집밖은 위험해~ \n 주변에 아무리 불러도 순순히 나가지 않지!! 마치 나는 신비주의~!! \n 하지만 그냥 나가기 귀찮은 사람 ^^ \n 개인적인 시간은 필수! 집에서 나가는 것 조차 큰 결심이 필요해요~ \n 집에 놀거리 가득하면 집 밖에 더더욱 안나갈 자신이 있어~~~~~",
                query: "vmfhwlqzhrfj",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/zipkok/zipkok_vmfhwlqzhrfj.png'
            },
        ]
    },
    // kakaoMobility
    {
        info : {
            mainTitle:"운전 MBTI",
            subTitle:"운전 MBTI",
            mainUrl:"driveTest",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/test-thumb.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/test-thumb.png",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: "차가 있는 데 급 만나자는 친구!",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "오케이 마시다가 대리하는 거지~"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "앗! 오늘은 무리야 차가 있어서~"
                    },
                ]
            },
            {
                which:"SN",
                question: "길안내가 의심스러울 때 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "에이… 별일 있겠어? 믿고 내비대로 간다!"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "머야? 오류인가봐!! 내비를 무시하고 내 뜻대로 간다"
                    },
                ]
            },
            {
                which:"TF",
                question: '나는 어떤 사람?',
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: '내 차 안의 모든 기능을 다룰 수 있다.'
                    },
                    {
                        type: "F",
                        score: 5,
                        content: '쓰는 것만 사용한다.'
                    },
                ],
            },
            {
                which:"JP",
                question: "드라이브 가자!",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "드라이브하기 좋은 명소 찾은 후 내비 찍고 이동하기"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "안전운전 키고 일단 운전하며 목적지 정하기"
                    },
                ]
            },
            {
                which:"EI",
                question: "차 안에서 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "조용한 건 싫다! 통화하거나,\n신나게 노래 부르면서 탄다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "할 말 미리 준비해두고 전화한다.\n엔진소리를 느끼며 홀로 드라이브를 즐긴다."
                    },
                ]
            },
            {
                which:"SN",
                question: "운전할 때 끼어드는 차량을 보면",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "아놔..진짜 저@#$%$#!\n누군 안 급한가? 왜 끼어들어?"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "오…화장실 마려운 감?\n허허허 많이 급한 가 보군"
                    },
                ]
            },
            {
                which:"SN",
                question: "사고가 난 장면을 보고 제일 첫번째로 드는 생각은?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "누구의 과실일까 먼저 생각한다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "안 다쳤나?를 먼저 생각한다."
                    },
                ]
            },
            {
                which:"SN",
                question: "내비를 쓰는 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "즐겨찾기에 온갖 맛집,\n여행지 다 저장하는 스타일"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "집, 회사 끝! 정리는 귀찮아~ㅎㅎ"
                    },
                ]
            },
            {
                which:"SN",
                question: "차를 고를 때 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "옵션, 연비, 성능까지 꼼꼼하게 체크해 봐야 지!"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "일단 내 마음에 쏙 든다! 이거 지~ 너로 정했다"
                    },
                ]
            },
            {
                which:"TF",
                question: "앞에 차들이 느릿느릿 갈 때 드는 생각은?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "사고 났나? 도로가 공사 중인가?"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "아니 앞 차는 뭐하나~~~ 왜 이리 안가는 겨!"
                    },
                ]
            },
            {
                which:"EI",
                question: "카풀 할 때 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "사람만나는 거 완전 짜릿하고 재밌어!"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "어우 어색하고 기 빨리는 기분"
                    },
                ]
            },
            {
                which:"SN",
                question: "나의 차상태는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "깔끔하게 관리한다. 언제나 세차도 정성스럽게…"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "차는 차일 뿐! 청소도 내가 하고싶을 때 한다."
                    },
                ]
            },
            {
                which:"TF",
                question: "운전 하다가 경미한 사고가 났다는 친구!",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "괜찮아? 보험은 잘 들어 놨지?"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "괜찮아? 아고 조심하지ㅜㅜ 다친 곳은?"
                    },
                ]
            },
            {
                which:"JP",
                question: "운전 알려주라! 라는 친구의 부탁",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "운전 하는 법을 세세하게 옆에서 알려준다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "일단 하면 느는거야~"
                    },
                ]
            },
            {
                which:"JP",
                question: "나의 여행 스타일은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "계획한 여행이 고생도 안하고 편하고 좋지~"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "가끔은 그냥 훌훌 떠나보자~ 차박도 추억이지~"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ISTJ",
                desc: `“이게 코너링이 아주 기본적이면서도~” 기본적인거 잘하고 운전자 준수 잘 지키는 생충이 아빠 기택\n\n

                나의 운전 스타일은?\n
                늘 차분하고 착실한 모범생 같은 당신은! 운전 또한 차분하고 규칙에 대해 매우 엄격하게 생각하기 때문에 굉장히 규칙적으로 운전합니다! 차분하지만 운전을 잘해서 반전 매력이!? 하지만 사람이 많은 곳을 가면 금방 지치기 때문에 되도록이면 혼자 운전 하는 것을 좋아해요! 카플도 나와 비슷한 사람! 약속시간 잘 지키고 예의가 바른 사람이랑은 할 것 같아요!\n\n
                
                이런 건 어때요?\n
                침착하고 차분하게 운전하는 당신! 워낙 안전 운전과 동시에 신호 하나라도 철저하게 지키고 있군요! 하지만 당신과 함께 가는 친구나 지인 동료는 조금 당신을 재미없다고 생각 할 수도 있어요! 정말 너무 잔잔하고 조용한 당신과 당신의 차…상대방은 조수석에 졸면 안 된다는 생각을 하고 있는데 말이죠…! 말도 없고 잠이 쏟아지는 상대방을 위해 가끔은 신나는 분위기의 음악이나 대화를 나누는 건 어떨까요?\n\n
                
                같이 드라이브하면 좋은 친구\n“마포대교는 무너졌냐” 내비는 저리가라, 내가 바로 인간 내비 곽철용이\n\n
                드라이브하다가 뛰어내릴 친구\n“자…운전이라는 건 말이야~...” 입으로는 운전 박사 급 납득이`,
                query: "todcnddl",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "ESFP",
                desc: `“아아가서 드라이브 한잔하지” 흥 넘치고 드라이브 좋아하는 안상구\n\n

                나의 운전 스타일은?\n
                졸음운전은 저리 가라! 나와 함께 있으면 시끄럽고 왁자지껄한 분위기 속에서 신나게 놀 수 있어요! 운전도 안전하게! 하지만 플레이리스트는 신나는 곡으로 선정! 여행을 갈 때도 계획 보다는 즉흥으로! 조용한 분위기 보다는 신나는 분위기가 너무 좋아요! 하고 싶은 건 무조건 해야하는 ! 그래서 성격이 조금 급하기도 하고 충동적인 물건 구매도 많아요! 그래서 여행만 다녀오면 트렁크에 짐이 한가득~?\n\n
                
                이런 건 어때요?\n
                당신이 조수석에 앉아있는 동승자가 된다면 조금 조용한 걸 좋아하고 내성적인 사람이 엄청 부담스러워할 수도 있어요! 운전자는 조용하게 가고 싶은데 신나는 거 좋아하는 당신이라 떠들기도 좋아하고 정적을 싫어하는 것도 알지만 운전하는 가장 중요한 사람이 어떤 사람인지 파악하고 행동해주세요! 졸음 운전은 안 하긴 하는데...귀에서 피가 날 수도..\n\n
                
                같이 드라이브하면 좋은 친구\n”이게 코너링이 아주 기본적이면서도~” 기본적인거 잘하고 운전자 준수 잘 지키는 생충이 아빠 기택\n\n
                
                드라이브하다가 뛰어내릴 친구\n“지금까지 이런 초보는 없었다. 이것은 엑셀인가 브레이크인가…?” 몰라도 일단 운전하는 게 즐거운 고반장`,
                query: "dkstkdrn",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "ENFP",
                desc: `“지금까지 이런 초보는 없었다. 이것은 엑셀인가 브레이크인가…?” 몰라도 일단 운전하는 게 즐거운 고반장\n\n
                나의 운전 스타일은?\n
                계획적인 거 싫어하는 나는 야 자유로운 영혼! 그래서 이리저리 돌아다니는 것도 너무 좋아요! 자동차만 있다면 언제든지 좋아하는 내 친구들과 함께 창문 다~ 열어 놓고 바람을 느끼면 신나는 노래와 떠나고 싶어요! 하지만 가끔은 귀찮을 때도? 늘 트렁크엔 집이 한가득! 그냥 떠나는 상황 자체를 너무너무 즐겨요! 감정이 풍부하고 충동적이며 좋고 싫음이 티나는 성격입니다!\n\n
                
                이런 건 어때요?\n
                너무 즉흥적이고 자유로운 당신은 고민하지 않고 바로 실천해버리는 성격입니다! 정작 해야 할  당신의 일들을 잊어버리고 떠나는 그런 행동은 이제 그만해야 합니다. 반복적이고 지루한 일상이 싫다고 떠나버리는 행동은 회피입니다! 이제 우선순위를 정해서 하나하나 실천하세요! 갑자기 떠나는 당신! 늘 차량점검도 미리미리 해요! 도로위에 멈춘 차를 보면서도 이또한 추억이지~ 하고 넘어가지 말도록!!!! 차량점검은 늘 필수!\n\n
                 
                같이 드라이브하면 좋은 친구\n”아직 1KM 더 남았다" 겉으로는 냉정해보이지만 속으론 따뜻한 놤좌 차태시기\n\n
                드라이브하다가 뛰어내릴 친구\n꼭 그렇게 운전해야만 속이 후련했냐!?” 끼어드는 차들 때문에 화가나는 오태시기`,
                query: "rhqkswkd",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "INTJ",
                desc: `“니가해라. 운전” 고집이 강력한 츤데레 동수\n\n

                나의 운전 스타일은?\n
                내가 좋아하는 건 한없이 무한 집중력의 끝판왕을 보여주는 고집쟁이인 당신! 내 사람들에겐 선의를 베풀고 잘해 주지만 선 넘으면 그냥 다시는 보지 않아요! 친절하기도 하기도 하고 매정할 때도 있어요! 그래서 차를 태워 달라고 하는 직장 동료의 말에 태워 주기는 하지만 선이 넘거나 좀 신경에 거슬리면 웃고 있긴 하지만 속으로는 욕하고 있기도 합니다. 친한 사람과 함께 운전을 할 때 아닌 것 같은 일엔 놀러가는 상황이든 어떤 상황이든 그건 아니지 않니? 하고 분위기를 차갑게 만들 수도…?\n\n
                
                이런 건 어때요?\n
                워낙 남 눈치를 보지 않는 사람이라 기분이 나쁠 땐 대놓고 싫다고 말하며 상대방 기분보다 잘못된 팩트에 관해서 얘기하는 경향이 있어요! 당신이 화가 다 풀려서 다시 기분이 좋아져도 상대방은 당신의 말로 인해서 이미 기분이 좋지 않은 상황들이 생기곤 합니다. 늘 나의 감정이 앞서길 보다 주위 사람들을 잘 신경 쓰도록 해야 해요! 특히 이런 상황이 놀러갈 때 생긴다면 완전 최악~ \n\n
                
                같이 드라이브하면 좋은 친구\n“드루와~ 드루와~들어올 수 있으면 드러와이~!” 끼어들기 절대 안 봐주는 정청이\n\n
                드라이브하다가 뛰어내릴 친구\n“누구든 내 옆자리에만 앉아~ 운전은 내가 한다” _ 불편한 친구가 없어요 왜냐면 운전은 내가 할 거니까`,
                query: "ehdtn",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "ISTP",
                desc: `“꼭 그렇게 운전해야만 속이 후련했냐?!”\n끼어드는 차들 때문에 화가나는 오태시기\n\n나의 운전스타일은?\n
                늘 간섭 받기 싫어하는 당신! 평상시엔 조근조근 하지만 나를 간섭하면 화가 나요. 기계를 잘 다루고 관심이 많아서 차도 너무 좋은데 다만 조금 귀찮아요… 하지만 막상 운전하면 역시 직접 해봐야지 하면서 차 자체, 하나하나를 다 느껴요. 장거리 운전도 별로 힘들어하지 않아요! 좋아하는 노래 틀어 놓고 혼자 운전을 즐기는~? 하지만 워낙 귀찮아 해서 나가기 까지가 힘들죠! 차안에서 누군가와 있어도 정적을 어색해하지 않고, 꽂히는 건 무조건 해야 하는 사람입니다!\n\n
                이런 건 어때요? \n
                막상 운전을 하면 당신은 너무 재밌어서 매번 운전을 하고 싶어해요. 운전에 관심이 생기면 친구 옆에 앉아서 하나하나 다 관찰하고 차에 대해서 미친듯이 파고들곤 하죠. 운전할 때 스릴을 즐기는 편이라 음악 크게 틀고 속도를 즐기는 데 … 늘 사고가 날 수 있다는 생각으로 안전운전 해주세요! 스트레스 받는 다고 운전으로 해소하는 건 절대 no! 
                \n\n
                같이 드라이브하면 좋은 친구\n“여러분~ 미안해요...이렇게 밖에 할 수 없는 나~ 용서해줘~” 운전만 하면 미안한 일 많아지는 엽기적인 그녀\n\n
                드라이브하다가 뛰어내릴 친구\n“니가해라. 운전” 고집이 강력한 츤데레 동수

                `,
                query: "dhxotlrl",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "ESFJ",
                desc: `“여러분~ 미안해요...이렇게 운전할 수밖에 할 수 없는 나~ 용서해줘~” 운전만 하면 미안한 일 많아지는 엽기적인 그녀!\n\n

                나의 운전 스타일은?\n
                당신은 완전 분위기 메이커! 친구, 가족 내 사람 엄청 잘 챙기고 좋아해요! 그래서 다같이 놀러 다니는 것도 좋아하고 다같이 노는 거 너무 좋아해요! 하지만 걱정이 많아요! 여행을 시작하면 누구보다 재밌게 놀고 음악 크게 틀고 신나게 놀지만 떠나기 전엔 우리 사고…괜찮겠지 하면서 일어나지도 않을 일에 대해서 걱정하죠…하지만 잠시뿐이 랍니다! 그리고 누군가 나의 운전 실력을 칭찬해주면 기부니가 좋아지죠~ 넌 오늘 집에 데려다준다^^\n\n
                
                이런 건 어때요?\n
                너무 즐거운 거 즉흥적인 거 내가 좋은 걸 너무 원하는 사람이라 계획적인 것이 필요합니다! 일이 안 풀리거나 답답할 때 모든 걸 던지고 떠나는 행동! 아주 가끔 정말 특별한 날 아니고 서는 제발 그 행동은 이제 그만! 나머지 당신의 일을 처리하는 것도 당신의 몫입니다!!! 매번 놀러 다니는 것도 좋지만 우리 좀 자중해요~ 그리고 너무 신나서 운전 할 때 미안할 일이 많아지죠 “끼어들어서 미안해요~ 어머 미안해요~” 운전은 조심 또 조심해요!\n\n
                
                같이 드라이브하면 좋은 친구\n“ 너는 다 계획이 있구나?” 언제 어디로 어떻게 갈지 큰그림 그리는 생충이 아들 기우\n\n
                드라이브하다가 뛰어내릴 친구\n”아직 1KM 더 남았다" 겉으로는 냉정해보이지만 속으론 따뜻한 놤좌 차태시기`,
                query: "duqrlwjrdls",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "ENFJ",
                desc: `“자...운전이라는 건 말이야~..” 입으로는 운전 박사 급 납득이\n\n

                나의 운전 스타일은?\n
                대인관계가 좋고 주변에 인기가 많으며 사람을 좋아하고 잘 믿어요! 나보다 남을 먼저 생각하는 성격이고 갈등상황을 싫어해서 인지 억지로 끼어드는 차량도 웬만하면 다 받아줍니다. 하지만 나에게 고맙다고 깜빡이를 하지 않으면 급 울컥해요! 하지만 이내 다시 또 신나는 음악이나 발라드를 따라 부르면서 속상했던 순간을 잊어버리곤 합니다! 운전만 할 수 있다면! 차만 있다면 언제든지 친구들을 픽업하고 놀러 다니면서 힐링~\n\n
                
                이런 건 어때요?\n
                갑자기 순간 욱하는 당신의 성격! 친구가 있어도 누가 있어도 욱하거나 분노가 치밀어 오르면 화를 내는 당신! 안 그러던 사람이 그러면 주변에서 당신의 눈치를 보게 될 수도…? 늘 친절하고 상냥하지만 기복이 롤러코스터 같은 사람입니다! 또 친한 사람의 거절을 못하는 사람이라 주변에서 가는 김에 태워줘! 라는 부탁도 거절할 줄 알아야합니다! 매번 들어주는 거 곤란해요!’\n\n
                
                같이 드라이브하면 좋은 친구\n“날 지나가랏…” 여유 넘치는 운전자 최재현 중위\n\n
                드라이브하다가 뛰어내릴 친구\n“이게 코너링이 아주 기본적이면서도~” 기본적인거 잘하고 운전자 준수 잘 지키는 생충이 아빠 기택`,
                query: "skqemrdl",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "INFP",
                desc: `“…너나 잘하세요…” 들릴 듯 말듯 소심한 의견 한 스푼 금자씨\n\n
                나의 운전 스타일은?\n
                완벽하게 하지 못할 거 라면 시작하지 않아요. 남들에 가치관에 대해서 뭐라하지 않는 만큼 나의 가치관 가지고 뭐라고 하면 싫어요. 그만큼 나의 세계는 확고해요! 남들이 좋다고 해도 내 맘에 들지 않으면 하지 않죠! 내 개인적인 얘기 싫어하고 공간에 침범하는 것도 싫어서 운전은 되도록 혼자 하는 게 편하고 남들에게 관심도 없어요! 차량에 문제가 생긴다면 하나하나 다 조사하고 알아보지만 결국 카센터에 맡기는 시작은 열심히 하지만 끝은 흐지부지~\n\n
                
                이런 건 어때요?\n
                남에게 의지하는 것도 의지하기도 싫어하는 당신이라 스트레스 받거나 화가 났을 때 혼자 있어야하는 사람입니다! 생각이 많아서 운전에 집중이 잘 안되고 가끔 멍 때릴 때가 있는데… 너무 생각이 많고 힘이 든다면 운전대를 잡지 말고 가끔은 친구들과 함께 스트레스를 풀러 떠나보는 건 어떨까요? 친구가 운전하는 차를 타고 힐링을 하러 떠나봐요!\n\n
                
                같이 드라이브하면 좋은 친구\n“자…운전이라는 건 말이야~...” 입으로는 운전 박사 급 납득이\n\n
                드라이브하다가 뛰어내릴 친구\n“운전대를 잡을 명분이 없다 아임니까 명분이” – 사전 계획 철저하고 냉정한 형배`,
                query: "rmqwkTl",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "ISFJ",
                desc: `“너는 다 계획이 있구나?” 언제 어디로 어떻게 갈지 큰 그림 그리는 생충이 아들 기우\n\n나의 운전 스타일은?\n
                계획 없인 차를 잘 몰 일이 없습니다! 어디로 가야할 지 내비보고 착실 하게 가는 당신! 외로움을 많이 타긴 하지만 많은 사람들이랑 있는 건 싫어서 친한 친구나 지인들만 내 차에 탑니다! 성격이 대체로 온화하고 배려심이 깊어 장거리 운전을 해도 혼자 그냥 묵묵히 잘 견뎌내는 스타일! 그래서 인지 여행갈 때도 내 차 끌고 가니까 내가 들고 갈게 하며 깊은 배려심으로 주변 사람들을 편안하게 해줍니다.\n\n
                
                이런 건 어때요?\n
                워낙 싫은 소리를 못해서 무조건 응~ 괜찮아 라고 하지만 힘들면 힘들다고 말해봐요! 나의 의견을 확실하게 전달할 수 있어야해요! “나 지금 운전 좀 힘드니 바꿔줄래?”라고 말하면 아마 당신의 노고를 안 모두가 “그래!” 라고 흔쾌히 답할 것입니다! 만약 싫어하는 내색을 보이는 사람은 멀리하세요! 이제 너무 혼자 배려하는 마음은 좀 접어두고 당신도 편하게 여행해봐요!\n\n
                
                같이 드라이브하면 좋은 친구\n”아아가서 드라이브 한잔하지" 흥 넘치고 드라이브 좋아하는 안상구\n\n
                드라이브하다가 뛰어내릴 친구\n“…너나 잘하세요…” 들릴 듯 말듯 소심한 의견 한 스푼, 금자씨`,
                query: "rldn",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "ESTP",
                desc: `“마포대교는 무너졌냐” 내비는 저리가라, 내가 바로 인간 내비 곽철용이\n\n
                나의 운전 스타일은?\n
                쉽게 욱하고 금방 잊어버리는 다혈질인 당신! 즉흥적이고 순발력이 좋으며 임기응변이 뛰어납니다. 그래서인지 내비를 보다 가도 혼자 나만의 길을 개척해서 나가는 스타일! 스릴 넘치는 것도 좋아하고 내기도 너무 좋아하는 스타일이라 운전에도 재미를 잘 느낍니다! 내기와 같은 스릴을 좋아하고 경쟁심이 있어서 운전 또한 누구보다 내가 잘해야합니다.\n\n
                
                이런 건 어때요?\n
                돌려 말하는 사람을 답답해하는 당신! 또한 표현이 직설적이어서 운전은 내가 제일 잘 해야 하면서도 누군가 운전을 못하는 친구가 있으면 살짝 무시하는 경향이 있어요! 우리 표현을 조금만 돌려서 말해봐요~ 소비 습관이 남다른 당신은 또 차에 관해 좋다고 하면 무조건 사야해~ 하는 당신의 소유욕 이젠 줄이도록 해보아요.\n\n
                
                같이 드라이브하면 좋은 친구\n“너는 다 계획이 있구나?” 언제 어디로 어떻게 갈지 큰 그림 그리는 생충이 아들 기우\n\n
                드라이브하다가 뛰어내릴 친구\n“자…운전이라는 건 말이야~..” 입으로는 운전 박사 급 납득이`,
                query: "rhkrcnfdyddl",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "INFJ",
                desc: `"아직 1KM 더 남았다" 겉으로는 냉정해보이지만 속으론 따뜻한 놤좌 차태시기\n\n

                나의 운전 스타일은?\n
                내가 비록 피곤할지라도 남을 먼저 배려하는 게 마음이 편한 당신! 그래서 어딜 갈 때 누가 운전하지? 하면 다들 곤란해할 때 비로소 본인이 손을 들어요! 감정이 욱해질 땐 혼자 생각할 시간이 필요해 가끔은 혼자 드라이브를 즐기며 심신안정의 시간이 필요하곤 하죠! 친하고 내 마음 맞는 사람들이랑 함께 하는 걸 좋아합니다! 집에 있는 걸 좋아하지만 여행가는 것도 너무 좋아요! 내가 하고 싶은 건 열심히 하는 조용하지만 튀고 싶은 나!\n\n
                
                이런 건 어때요?\n
                당신의 속마음을 말하지 않고 혼자서 정해진 선에서 상대방이 선 넘으면 상대하지 않아요! 말하지 않으면 상대방은 모르겠죠? 속으로 욕하지 말고 겉으로 이제 당당하게 표현하세요! 당신이 말을 아끼고 행동하는 것을 아끼다가 가끔 분출되는 똘끼… 적응하기 힘들어합니다. 그리고 동승자가 있으면 말도 걸어주고 해주세요! 민망해요!!\n\n
                
                같이 드라이브하면 좋은 친구\n“드루와~ 드루와~들어올 수 있으면 드러와이~!” 끼어들기 절대 안 봐주는 정청이\n\n  
                드라이브하다가 뛰어내릴 친구\n”아아가서 드라이브 한잔하지" 흥 넘치고 드라이브 좋아하는 안상구`,
                query: "ckxotlrl",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "ENTP",
                desc: `드루와~ 드루와~들어올 수 있으면 드러와이~!” 끼어들기 절대 안 봐주는 정청이\n\n
                나의 운전스타일은?\n\n
                직설적이고 표현 잘 하는 성격처럼 운전도 내가 하고 싶은 대로 합니다! 상황 보고 안전하면 무법운전도 하는 당신! 감정 기복도 심해서 기분에 따라 수십 번 변하는 나의 플레이리스트! 사람들을 좋아하고 외부적인 활동도 좋아하지만 의외로 또 귀찮아 하기도 해요! 하지만 자기주장이 강하고 늘 확고한 성격이라 문득 발견한 기스 하나라도 누가 그랬는지 꼭 잡으려고 합니다. 계획적이면서도 즉흥적인 당신! 불의를 당하거나 틀린 것이 있으면 참지 않고 직설적으로 말하는 사람이죠!\n\n
                이런 건 어때요?\n
                하고 싶은 건 다해야하는 당신! 한적한 도로나 조용한 도로 위에서 가끔 안전을 확인하고 무법운전을 하는 행동은 이제 그만! 사고는 나만 조심해서 발생하는 게 아니랍니다! 늘 안전! 또 안전! 그리고 표현에 있어 직설적이기 때문에 당신의 표현으로 인해 싸움이나 감정이 상할 수 있으니 늘 동승자와 함께 있을 때 말을 조심해주세요! 
                \n\n
                같이 드라이브하면 좋은 친구\n“지금까지 이런 초보는 없었다. 이것은 엑셀인가 브레이크인가…?” 몰라도 일단 운전하는 게 즐거운 고반장\n\n
                드라이브하다가 뛰어내릴 친구\n“누구든 내 옆자리에만 앉아~ 운전은 내가 한다” _ 불편한 친구가 없어요 왜냐면 운전은 내가 할 거니까`,
                query: "wjdcjddl",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "ESTJ",
                desc: `“운전대를 잡을 명분이 없다 아임니까 명분이” – 사전 계획 철저하고 냉정한 형배\n\n
                나의 운전스타일은?\n
                목표를 한 번 정하면 목표가 이루어질 때까지 한 우물만 파는 고집쟁이 +확실한 거 좋아하는 엄격한 나! 운전을 할 때도 계획적이어서 내가 거기에 언제까지 도착할 것 같은 지 미리 내비를 보고 판단해서 준비를 해요. 이것저것 배우는 거 좋아해서 차에 대해서도 완벽하게 잘 알고 있어요! 가만히 있지 못하는 워커홀릭인 나도 가끔은 비 오는 날 감성에 취해 노래를 따라 부르면서 즐기기도 합니다.\n\n
                
                이런 건 어때요?\n
                시간 약속 어기는 것을 극혐하는 당신! 친구가 ‘도로가 막혀서 늦었어’ 라고 해도 당신은 절대 이해 못해주죠... 왜냐면 어디가 막히는 지 미리 확인했으니까요 하지만 조금 유연한 마음을 가지고 이해해보도록 하는 건 어떨까요~? 차가 막히는 건 어쩔 수 없는 문제 잖아요! 그리고 놀 때도 늘 일 생각만 하는 당신! 좀 놀러갈 땐 맘 편하게 즐겨보세요! 놀 땐 놀고 일할 땐 일 해요!\n\n
                
                같이 드라이브하면 좋은 친구\n꼭 그렇게 운전해야만 속이 후련했냐!?” 끼어드는 차들 때문에 화가나는 오태시기\n\n
                드라이브하다가 뛰어내릴 친구\n“자…운전이라는 건 말이야~..” 입으로는 운전 박사 급 납득이`,
                query: "gudqo",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "ISFP",
                desc: `“날 지나가랏...” 여유 넘치는 운전자 최재현 중위\n\n

                나의 운전스타일은?\n
                뭐가 저리 급한지~ 서둘러서 가는 차량들을 봐도 느긋하게 양보해주거나 신경 쓰지 않아요! 하지만 갑자기 매너없이 끼어든다면 순간 욱! 하지만 워낙 순딩하고 착한 사람이라 그게 다예요! 운전은 하고 싶지만 귀차니즘의 성격 때문에 아직 면허가 없다면 따야 하는데~ 하고 미루거나 운전을 해야 할 상황이 오면 집에 있고 싶어요! 하지만 막상 하면 재밌다고 잘합니다! 낯을 워낙 많이 가려서 동승자는 내가 허락한 예상 가능 한 친구들 만 태우고 다니죠!\n\n
                
                이런 건 어때요?\n
                차 안 동승자가 과자 부스러기를 흘리면서 먹는다 거나 나의 눈에 거슬리는 행동을 하면 마음에 담아두고 있다가 나의 기준을 넘으면 다시는 태우지 않으려고 해요. 상대방은 영문도 모르고 응? 왜 그러지? 나 피하나? 라고 생각할 수 있으니 우리 일단 참지 말고 말해보는 건 어떨까요? 그리고 운전을 해야할 땐 귀찮다고 생각하지 말아요~ 나가면 잘 놀거면서~\n\n
                
                같이 드라이브하면 좋은 친구\n“여러분~ 미안해요…이렇게 밖에 할 수 없는 나~ 용서해줘~” 운전만 하면 미안한 일 많아지는 엽기적인 그녀\n\n
                드라이브하다가 뛰어내릴 친구\n“지금까지 이런 초보는 없었다. 이것은 엑셀인가 브레이크인가…?” 몰라도 일단 운전하는 게 즐거운 고반장`,
                query: "chleogus",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "INTP",
                desc: `"아~ 운전하기 딱 좋은 날씨다"운전에도 다 논리적인 이유가 있는 중구\n\n

                나의 운전 스타일은?\n
                평상시 조용하고 얌전한 스타일! 하지만 나의 차 안 플레이 리스트는 나만의 독특한 스타일로 구성되어 있어요! 워낙 평범함 과는 거리가 달라서 늘 나의 기분이나 감정도 한 번 더 생각하고 표현하는 사람입니다! 평소 말이 없지만 내가 좋아하는 것에 서는 말을 많이 해요! 그래서 옆에서 누가 뭘 말해도 영혼 없는 리액션을 하다가 관심사가 나오면 어? 하고 갑자기 말아지는 서타일~ 길을 가다가 막혀서 모두가 짜증 낸다면 과감하게 돌아서 빨리 가는 길을 찾는 센스도 있는 사람! \n\n

                이런 건 어때요?\n
                평범함 과는 거리가 먼 살짝 독특한 관심사가 있어서 만약 누군가 당신의 관심사를 건드리면 한없이 신나서 얘기하지만…. 보통 사람들과의 관심사가 너무 다르다보니 상대방은 지루하거나…쟤 왜 저러나 싶은 생각을 할 수도 있습니다. 그럴 땐 흥분을 가라 앉히고 상대방의 기분을 살펴보도록 하세요! 그리고 똑똑하지 않은 사람도 운전은 잘 할 수 있습니다! 무시하지 말고 그들의 의견에도 집중해주세요!\n\n
                같이 드라이브하면 좋은 친구\n“내가 마! 고속타로도 타고! 흐잉?! 다했어 마!” 운전에 대한 자신감이 넘치는 최익혀니\n\n
                드라이브하다가 뛰어내릴 친구\n“누구든 내 옆자리에만 앉아~ 운전은 내가 한다” _ 불편한 친구가 없어요 왜냐면 운전은 내가 할 거니까`,
                query: "wndrn",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/'
            },
            {
                type: "ENTJ",
                desc: `“내가 마! 고속도로도 타고! 흐잉? 다했어 마!”_운전에 자신감이 넘치는 최익혀니\n\n
                나의 운전스타일은?\n\n
                매사에 자신감이 넘치고 목표가 확실한 당신! 운전에 대한 자신감도 한껏~ 운전도 남들이 답답하게 하면 그냥 차라리 내가 하는게 편해요! 여행을 갈 때도 일단 고! 참을성이 조금은 부족해서 일단 실천부터 하는 추친력이 아주 대단한 사람입니다! 운전을 잘하는 내 자신이 너무 멋있어 보인다고 생각하는 자기애가 강한스타일! 엄청 현실적이고 논리적인 사람이며 머리가 똑똑해요! 트렁크도 애초에 더러운 적이 없는 당신은 차량검사도 미리미리 하는 철두철미한 모습이 있군요
                \n\n
                이런 건 어때요?\n\n
                운전에 대한 자신감이 넘치다 보니 가끔 운전을 서툴게 하는 사람을 보면 왜 그런 식으로 운전을 하냐며 직설적이게 말 표현을 할 수 있어요. 당신의 답답한 마음도 이해를 하지만 냉정하게 말하지 말고 생각하고 말 해주세요. 특히 친구들이나 지인 들과 여행을 간다면… 그들이 운전을 하든 길을 찾던 ..의도적으로 무시하는 행동은 이제 그만!
                \n\n
                드라이브하면 좋은 친구\n“아~ 운전하기 딱 좋은 날씨다” 운전에도 다 논리적인 이유가 있는 중구행님\n\n
                드라이브하면 불편한 친구\n“누구든 내 옆자리에만 앉아~ 운전은 내가 한다” _ 불편한 친구가 없어요 왜냐면 운전은 내가 할 거니까`,
                query: "chldlrgusl",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/'
            },
        ]
    }
]

export default TESTS;
