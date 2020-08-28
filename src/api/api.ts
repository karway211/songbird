const birdsData = [
  [       
    {
      id: 1,
      name: 'Воронок',
      species: 'Delichon urbica',
      description: 'Ласточка чёрно-белой окраски с коротким (без косиц) хвостом и широкой белой перевязью в области поясницы, хорошо заметной у летящей птицы. Песня состоит из набора журчащих звуков, похожих на «трри» или «тррит».',
      image: 'https://www.ebirds.ru/images/e/254.jpg',
      audio: 'https://dibird.com/media/xeno/378658.mp3'
    },
    {
      id: 2,
      name: 'Лесной жаворонок',
      species: 'Lullula arborea',
      description: 'Мелкий жаворонок размером примерно с воробья. Длина тела 14–18 см, размах крыльев 28–34 см, масса 23–32 г. Позывки звучат, как короткие «тли», «тюи» или «тюд-ли», иногда они сливаются в серии, например, «тюдли-тли-тли», при беспокойстве более резкое и сухое «цвьии».',
      image: 'https://www.ebirds.ru/images/e/260.jpg',
      audio: 'https://dibird.com/media/xeno/379414.mp3'
    },
    {
      id: 3,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description: 'Поющий скворец широко раскрывает клюв, топорщит перья на горле, периодически встряхивает полураспущенными крыльями. Позывка и крик тревоги — мягкое журчащее «чрр», «чрррр».',
      image: 'https://www.ebirds.ru/images/e/285.jpg',
      audio: 'https://dibird.com/media/xeno/378941.mp3'
    },
    {
      id: 4,
      name: 'Ворон',
      species: 'Corvus corax',
      description: 'Крупная чёрная птица. Характерное низкое рокочущее карканье «крук-крук», у молодых — «кра-кра»; используют и другие, достаточно разнообразные сигналы.',
      image: 'https://www.ebirds.ru/images/e/298.jpg',
      audio: 'https://dibird.com/media/xeno/378450.mp3'
    },
    {
      id: 5,
      name: 'Галка',
      species: 'Corvus monedula',
      description: 'Средних размеров тёмно-серая птица, величиной примерно с голубя. Голос громкий и приятный — «кэ-кэ-кэ» или «гал-ка, гал-ка», песни нет.',
      image: 'https://www.ebirds.ru/images/e/294.jpg',
      audio: 'https://dibird.com/media/xeno/372846.mp3'
    },
    {
      id: 6,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description: 'Хорошо известная чёрная птица размером с ворону, но телосложение более стройное, клюв длиннее. Хриплое и картавое «краа», «граа». Может издавать высокие и звонкие крики «клю» и другие.',
      image: 'https://www.ebirds.ru/images/e/295.jpg',
      audio: 'https://dibird.com/media/xeno/374164.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Глухарь',
      species: 'Tetrao urogallus',
      description: 'В период токования издаёт особую песню, состоящую из двух главных частей: серии двойных щелчков, сливающихся в конце, и шипящих звуков, передаваемых как «точение». Будучи потревоженным, редко подаёт голос.',
      image: 'https://www.ebirds.ru/images/e/105.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OGZZVVEHKU/XC313913-tj%C3%A4der-0141-160423.mp3'
    },
    {
      id: 2,
      name: 'Тетерев',
      species: 'Lyrurus tetrix',
      description: 'Весной на току самцы издают слышное издалека «бормотание», а также двухсложный шипящий звук «чуффы». Бормотание самцов можно слышать в течение всего года, но наиболее интенсивно эта песня исполняется в период токования. Самки издают мелодичные квохчущие звуки, которые при опасности сливаются в частые серии.',
      image: 'https://www.ebirds.ru/images/e/103.jpg',
      audio: 'https://dibird.com/media/xeno/368130.mp3'
    },    
    {
      id: 3,
      name: 'Перепел',
      species: 'Coturnix coturnix',
      description: 'Большую часть года молчалив, и только в начале периода размножения самец часто издаёт характерный и легко запоминающийся крик «подь-полоть», называемый «боем». Для самок характерно негромкое квохтание и двусложные позывки, похожие на «бри-бит».',
      image: 'https://www.ebirds.ru/images/e/110.jpg',
      audio: 'https://dibird.com/media/xeno/377048.mp3'
    },
    {
      id: 4,
      name: 'Рябчик',
      species: 'Tetrastes bonasia',
      description: 'Небольшая куриная птица размерами несколько крупнее голубя. Обычно молчалив. Позывка как самца, так и самки — тонкий посвист. Брачная песня самца — тонкий, четырёхсложный свист.',
      image: 'https://www.ebirds.ru/images/e/106.jpg',
      audio: 'https://dibird.com/media/xeno/361691.mp3'
    },
    {
      id: 5,
      name: 'Фазан',
      species: 'Phasianus colchicus',
      description: 'Птица крупных размеров. При токовании самец издаёт грубый, но звонкий двусложный крик, сопровождаемый частыми взмахами крыльев, создающими особый вибрирующий звук. При сильном возбуждении вблизи самки негромко «гукает». Самка молчалива; вспугнутая, издаёт тонкий писк.',
      image: 'https://www.ebirds.ru/images/e/113.jpg',
      audio: 'https://dibird.com/media/xeno/376895.mp3'
    },
    {
      id: 6,
      name: 'Кеклик',
      species: 'Alectoris chukar',
      description: 'Крикливы. Наиболее характерно громкое «ке-ке-лек», слышное в течение большей части года и служащее основой общения между стаями и отдельными особями. При токовании квохтанье самца заканчивается так называемым «скирканьем», повторяющимся несколько раз подряд. Весной особи в парах тихо щебечут. В период насиживания и вождения птенцов молчалив.',
      image: 'https://www.ebirds.ru/images/e/112.jpg',
      audio: 'https://dibird.com/media/xeno/233760.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Гага',
      species: 'Somateria mollissima',
      description: 'Массивная нырковая утка, заметно крупнее домашней утки. Голос самца в брачный период — глухое воркующее «агууу-агууу». Голос самки — низкое кряканье «корр-крр-крр».',
      image: 'https://www.ebirds.ru/images/e/60.jpg',
      audio: 'https://dibird.com/media/xeno/321242.mp3'
    },
    {
      id: 2,
      name: 'Гоголь',
      species: 'Bucephala clangula',
      description: 'Во время брачных демонстраций самец издаёт пронзительный скрежет «бибиииззз, сюрприииззз», самка отвечает скрипучим «беррр-беррр». Обычный голос самки — хрипловатое карканье. Крылья у летящих взрослых самцов издают высокий частый звенящий свист.',
      image: 'https://www.ebirds.ru/images/e/59.jpg',
      audio: 'https://dibird.com/media/xeno/378447.mp3'
    },
    {
      id: 3,
      name: 'Гуменник',
      species: 'Anser fabalis',
      description: 'Голос Гуменника схож по тембру с голосом серого гуся, но гоготанье несколько короче и тише. По сравнению с другими видами гусей это весьма молчаливая птица.',
      image: 'https://www.ebirds.ru/images/e/35.jpg',
      audio: 'https://dibird.com/media/xeno/366298.mp3'
    },
    {
      id: 4,
      name: 'Кряква',
      species: 'Anas platyrhynchos',
      description: 'Голос селезня — негромкое журчащее кряканье, кряканье самки раскатистое, гнусавое, сходно с голосом домашних уток. Токующие самцы издают мелодичный свист.',
      image: 'https://www.ebirds.ru/images/e/45.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC357884-colvert.mp3'
    },
    {
      id: 5,
      name: 'Лебедь-кликун',
      species: 'Cygnus cygnus',
      description: 'Голос кликуна — громкое трубное «крру, крру-ру» и более тихое гортанное воркование. Звук крыльев в полёте на большом расстоянии почти не слышен. В кульминации брачного ритуала птицы, сплывшись клюв в клюв с прямыми шеями, сначала негромко переговариваются, а затем синхронно перекрещивают выброшенные вперёд прямые шеи и громко «трубят».',
      image: 'https://www.ebirds.ru/images/e/41.jpg',
      audio: 'https://dibird.com/media/xeno/376382.mp3'
    },
    {
      id: 6,
      name: 'Чёрная казарка',
      species: 'Branta bernicla',
      description: 'Весьма молчаливый гусь; голос тихий, похожий на гнусавое бормотание. При пролёте голоса, издаваемые стаями птиц этого вида, слышны только на близком расстоянии.',
      image: 'https://www.ebirds.ru/images/e/31.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/PKWMZIRVUO/XC295121-rotgans8nov2015OostTexelLS101498.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Белый аист',
      species: 'Ciconia ciconia',
      description: 'Взрослые птицы не способны издавать голосовых сигналов, кроме тихого шипения; при брачных демонстрациях, которые самцы устраивают, стоя на крупном гнезде, они закидывают голову назад и стучат клювом. Птенцы в гнезде подают негромкие каркающие сигналы.',
      image: 'https://www.ebirds.ru/images/e/27.jpg',
      audio: 'https://dibird.com/media/xeno/372951.mp3'
    },
    {
      id: 2,
      name: 'Чёрный аист',
      species: 'Ciconia nigra',
      description: 'В отличие от белого аиста, издаёт короткие серии сдвоенных голосовых сигналов, звучащих примерно как дребезжащее «ши-луу, ши-луу», одиночные тонкие высокие сигналы, похожие на крик канюка, и ряд других клокочущих звуков. Стучит клювом редко.',
      image: 'https://www.ebirds.ru/images/e/28.jpg',
      audio: 'https://dibird.com/media/xeno/336616.mp3'
    },
    {
      id: 3,
      name: 'Большая белая цапля',
      species: 'Casmerodius albus',
      description: 'Голос птиц этого вида удаётся услышать редко. Он заметно отличается от скрипучих и хриплых выкриков других крупных цапель, у неё он скорее сухой и трескучий, похожий на карканье.',
      image: 'https://www.ebirds.ru/images/e/21.jpg',
      audio: 'https://dibird.com/media/xeno/365950.mp3'
    },
    {
      id: 4,
      name: 'Каравайка',
      species: 'Plegadis falcinellus',
      description: 'Каравайка молчалива, за пределами гнездовых колоний от неё очень редко удаётся услышать хоть какой-то звук. У гнёзд издаёт негромкие крики, напоминающие карканье и шипенье.',
      image: 'https://www.ebirds.ru/images/e/25.jpg',
      audio: 'https://dibird.com/media/xeno/357886.mp3'
    },
    {
      id: 5,
      name: 'Кваква',
      species: 'Nycticorax nycticorax',
      description: 'Кваква издает скрипучее «кв... кв...», именно благодаря ему вид получил своё русское название. Иногда пишут, что голос кваквы похож на скрип мокрой резины. Чаще всего его приходится слышать в гнездовых колониях.',
      image: 'https://www.ebirds.ru/images/e/18.jpg',
      audio: 'https://dibird.com/media/xeno/371129.mp3'
    },
    {
      id: 6,
      name: 'Выпь',
      species: 'Botaurus stellaris',
      description: 'Весной и в начале лета самцы обозначают своё присутствие в зарослях низким, гулким двухсложным уханьем: «у-нуммб». В полёте, особенно ночью, часто издаёт хрипловатое «хау», напоминающее некоторые сигналы серой цапли.',
      image: 'https://www.ebirds.ru/images/e/16.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC358621-butor.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Белая сова',
      species: 'Nyctea scandiaca',
      description: 'Токовые крики самца — серия низких глухих лающих сигналов, самка обычно отвечает глухим «хуу». В других ситуациях птицы издают разнообразные глухие крики типа «у», «хуууу», «ххав», «йя-йя-йя» и тому подобное. Слётки и молодые птицы, выпрашивая корм, сипло свистят.',
      image: 'https://www.ebirds.ru/images/e/222.jpg',
      audio: 'https://dibird.com/media/xeno/277678.mp3'
    },
    {
      id: 2,
      name: 'Сипуха',
      species: 'Tyto alba',
      description: 'Голос самца при токовании — сиплое, пронзительное и немного дребезжащее «хрии-ииии» длительностью около 2 секунд, издаваемое с присады или в полёте. Птицы могут издавать и другие сипящие и шипящие звуки. Слётки выпрашивают корм с помощью хриплого протяжного сипения.',
      image: 'https://www.ebirds.ru/images/e/221.jpg',
      audio: 'https://dibird.com/media/xeno/370711.mp3'
    },
    {
      id: 3,
      name: 'Сплюшка',
      species: 'Otus scops',
      description: 'Брачный крик самца — грустный односложный свист «тюю», который монотонно повторяется в течение длительного времени. Он похож на крик воробьиного сыча, но более низкий, глубокий и музыкальный.',
      image: 'https://www.ebirds.ru/images/e/226.jpg',
      audio: 'https://dibird.com/media/xeno/376903.mp3'
    },
    {
      id: 4,
      name: 'Филин',
      species: 'Bubo bubo',
      description: 'Токовой крик самца — низкое и мощное двойное уханье с ударением на первом слоге: «уу-хуу», длящееся около 0,7 секунды. Этот крик слышен на расстоянии до 4 км. Самка отвечает похожим криком, но более изменчивым и высоким.',
      image: 'https://www.ebirds.ru/images/e/223.jpg',
      audio: 'https://dibird.com/media/xeno/366025.mp3'
    },
    {
      id: 5,
      name: 'Ястребиная сова',
      species: 'Surnia ulula',
      description: 'Токовый крик самца — быстрая булькающая трель «уль-уль-улъ-улъ-уль», длящаяся обычно 8–10 секунд, которая исполняется с присады или в полёте и слышна на расстоянии до 1 км. Самка может издавать похожую трель, но менее звонкую. При тревоге слышны дрожащие трели типа «ки-ки-ки-ки-ки».',
      image: 'https://www.ebirds.ru/images/e/230.jpg',
      audio: 'https://dibird.com/media/xeno/365394.mp3'
    },
    {
      id: 6,
      name: 'Болотная сова',
      species: 'Asio flammeus',
      description: 'При токовании самец в сумерках или ночью издаёт серии быстрых глухих криков «бу-бу-бу-бу-бу-бу» (16–20 звуков в серии с интервалами примерно в полсекунды), при токовом полёте часто слышны серии хлопков крыльями. Другие сигналы — глухие хрипловатые «ях-ях-ях», резкое хриплое «ииях» и нечто подобное.',
      image: 'https://www.ebirds.ru/images/e/225.jpg',
      audio: 'https://dibird.com/media/xeno/343174.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Беркут',
      species: 'Aquila chrysaetos',
      description: 'Самый крупный из орлов, в нашем регионе уступает размерами только грифам и орлану-белохвосту. Издает резкий громкий клёкот «къяк-кьяк-кьяк», мелодичные высокие трели.',
      image: 'https://www.ebirds.ru/images/e/89.jpg',
      audio: 'https://dibird.com/media/xeno/341722.mp3'
    },
    {
      id: 2,
      name: 'Сапсан',
      species: 'Falco peregrinus',
      description: 'Крупный, плотно сложенный сокол, больше вороны, но заметно мельче кречета и балобана, более острокрылый и короткохвостый. Голос Сапсана - хрипловатое «кье-кье-къе...», более низкое и грубое у самки.',
      image: 'https://www.ebirds.ru/images/e/97.jpg',
      audio: 'https://dibird.com/media/xeno/374236.mp3'
    },
    {
      id: 3,
      name: 'Степной лунь',
      species: 'Circus macrourus',
      description: 'Сравнительно некрупный, изящный и узкокрылый лунь, несколько больше вороны. Самец во время тока издаёт короткие мелодичные вибрирующие трели «тюррр», при беспокойстве самец и самка издают короткие верещащие трели.',
      image: 'https://www.ebirds.ru/images/e/74.jpg',
      audio: 'https://dibird.com/media/xeno/145150.mp3'
    },
    {
      id: 4,
      name: 'Степной орёл',
      species: 'Aquila nipalensis',
      description: 'Сегодня степные орлы внесены в Красную книгу, как вымирающий вид, но всего 3 десятка лет назад хищники были достаточно многочисленны и распространены по большей части Северной Евразии. Издает скрипучее или хриплое тявканье.',
      image: 'https://www.ebirds.ru/images/e/85.jpg',
      audio: 'https://dibird.com/media/xeno/106053_asuFkYP.mp3'
    },
    {
      id: 5,
      name: 'Кречет',
      species: 'Falco rusticolus',
      description: 'Хищник среднего размера, при этом самый крупный из соколов, мощного сложения, относительно ширококрылый и длиннохвостый, с хорошо развитыми «штанами» на голени. Низкий хрипловатый крик «кеек-кеек-кеек...» издаёт обычно при беспокойстве у гнезда. В целом молчалив.',
      image: 'https://www.ebirds.ru/images/e/95.jpg',
      audio: 'https://dibird.com/media/xeno/189210_M3Zv2cI.mp3'
    },
    {
      id: 6,
      name: 'Курганник',
      species: 'Buteo rufinus',
      description: 'Крик курганника похож на крик канюка, но более громкий и низкий, при беспокойстве издаёт укороченное «кее», больше похожее на клёкот.',
      image: 'https://www.ebirds.ru/images/e/82.jpg',
      audio: 'https://dibird.com/media/xeno/314853.mp3'
    }
  ],
  
];

export type birdsDataType = typeof birdsData;
// const birdsData = [
//   [       
//     {
//       id: 1,
//       name: 'Ворон',
//       species: 'Corvus corax',
//       description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
//       image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
//     },
//     {
//       id: 2,
//       name: 'Журавль',
//       species: 'Grus grus',
//       description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
//       image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
//     },
//     {
//       id: 3,
//       name: 'Ласточка',
//       species: 'Delichon urbicum',
//       description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
//       image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
//     },
//     {
//       id: 4,
//       name: 'Козодой',
//       species: 'Caprimulgus europaeus',
//       description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
//       image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
//     },
//     {
//       id: 5,
//       name: 'Кукушка',
//       species: 'Cuculus canorus',
//       description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
//       image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
//     },
//     {
//       id: 6,
//       name: 'Синица',
//       species: 'Parus major',
//       description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
//       image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
//     }
//   ],
//   [
//     {
//       id: 1,
//       name: 'Воробей',
//       species: 'Passer domesticus',
//       description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
//       image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
//     },
//     {
//       id: 2,
//       name: 'Грач',
//       species: 'Corvus frugilegus',
//       description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
//       image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
//     },
//     {
//       id: 3,
//       name: 'Галка',
//       species: 'Coloeus monedula',
//       description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
//       image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
//     },
//     {
//       id: 4,
//       name: 'Певчий дрозд',
//       species: 'Turdus philomelos',
//       description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
//       image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
//     },
//     {
//       id: 5,
//       name: 'Сорока',
//       species: 'Pica pica',
//       description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
//       image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
//     },
//     {
//       id: 6,
//       name: 'Сойка',
//       species: 'Garrulus glandarius',
//       description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
//       image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
//     }
//   ],
//   [
//     {
//       id: 1,
//       name: 'Зяблик',
//       species: 'Fringilla coelebs',
//       description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
//       image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
//     },
//     {
//       id: 2,
//       name: 'Клёст',
//       species: 'Loxia curvirostra',
//       description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
//       image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
//     },
//     {
//       id: 3,
//       name: 'Горлица',
//       species: 'Streptopelia turtur',
//       description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
//       image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
//     },
//     {
//       id: 4,
//       name: 'Дятел',
//       species: 'Dendrocopos major',
//       description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
//       image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
//     },
//     {
//       id: 5,
//       name: 'Удод',
//       species: 'Upupa epops',
//       description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
//       image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
//     },
//     {
//       id: 6,
//       name: 'Стриж',
//       species: 'Apus apus',
//       description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
//       image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
//     }
//   ],
//   [
//     {
//       id: 1,
//       name: 'Жаворонок',
//       species: 'Alauda arvensis',
//       description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
//       image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
//     },
//     {
//       id: 2,
//       name: 'Соловей',
//       species: 'Luscinia luscinia',
//       description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
//       image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
//     },
//     {
//       id: 3,
//       name: 'Скворец',
//       species: 'Sturnus vulgaris',
//       description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
//       image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
//     },
//     {
//       id: 4,
//       name: 'Иволга',
//       species: 'Oriolus oriolus',
//       description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
//       image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
//     },
//     {
//       id: 5,
//       name: 'Свиристель',
//       species: 'Bombycilla garrulus',
//       description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
//       image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
//     },
//     {
//       id: 6,
//       name: 'Щегол',
//       species: 'Carduelis carduelis',
//       description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
//       image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
//     }
//   ],
//   [
//     {
//       id: 1,
//       name: 'Орёл',
//       species: 'Aquila nipalensis',
//       description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
//       image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
//     },
//     {
//       id: 2,
//       name: 'Коршун',
//       species: 'Milvus migrans',
//       description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
//       image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
//     },
//     {
//       id: 3,
//       name: 'Лунь',
//       species: 'Circus cyaneus',
//       description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
//       image: 'https://live.staticflickr.com/65535/49322743903_32f3922d9e.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
//     },
//     {
//       id: 4,
//       name: 'Сокол',
//       species: 'Falco peregrinus',
//       description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
//       image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
//     },
//     {
//       id: 5,
//       name: 'Ястреб',
//       species: 'Accipiter gentilis',
//       description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
//       image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
//     },
//     {
//       id: 6,
//       name: 'Филин',
//       species: 'Bubo bubo',
//       description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
//       image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
//     }
//   ],
//   [
//     {
//       id: 1,
//       name: 'Альбатрос',
//       species: 'Diomedea exulans',
//       description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
//       image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
//     },
//     {
//       id: 2,
//       name: 'Олуша',
//       species: 'Sula nebouxii',
//       description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
//       image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
//     },    
//     {
//       id: 3,
//       name: 'Буревестник',
//       species: 'Puffinus griseus',
//       description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
//       image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
//     },
//     {
//       id: 4,
//       name: 'Пеликан',
//       species: 'Pelecanus',
//       description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
//       image: 'https://classpic.ru/wp-content/uploads/2016/04/22117/Letyashhij-pelikan.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
//     },
//     {
//       id: 5,
//       name: 'Пингвин',
//       species: 'Aptenodytes forsteri',
//       description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
//       image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
//     },
//     {
//       id: 6,
//       name: 'Чайка',
//       species: 'Larus argentatus',
//       description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
//       image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
//       audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
//     }
//   ]
// ];
  
  export default birdsData;
  