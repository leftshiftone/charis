import * as React from 'react';
import {Component} from 'react';

export default class SvgPlay extends Component<SvgProps, {}> {

    public render() {
        return (
            <svg className={this.props.className || ""} onClick={this.props.onClick} viewBox="0 0 10000 10000">
                <path d="M -89698,23370 C -90141,23253 -90466,23022 -90614,22717 -90721,22495 -90712,22115 -90595,21920 -90415,21619 -89983,21353 -89556,21277 -89427,21254 -89422,21245 -89422,21022 L -89422,20790 -90296,20790 C -91105,20790 -91177,20785 -91267,20718 -91338,20666 -91364,20599 -91364,20468 L -91364,20290 -93013,20290 C -94594,20290 -94664,20287 -94712,20221 -94742,20180 -94763,19862 -94763,19443 L -94764,18735 -95016,18646 C -95798,18369 -95747,17464 -94937,17249 L -94763,17202 -94763,16461 C -94763,15538 -94842,15609 -93805,15609 L -93063,15609 -93063,14810 C -93063,14082 -93056,14007 -92975,13953 -92900,13903 -92765,13894 -92125,13894 L -91364,13894 -91364,13717 C -91364,13413 -91482,13429 -89228,13429 -86975,13429 -87092,13413 -87092,13717 L -87092,13894 -85469,13894 C -83846,13894 -83845,13894 -83769,13973 -83710,14035 -83694,14155 -83694,14526 L -83694,15000 -83536,15049 C -82668,15317 -82648,16202 -83504,16486 L -83694,16549 -83694,17260 C -83694,17682 -83714,18000 -83744,18041 -83790,18104 -83852,18110 -84497,18110 L -85199,18110 -85199,20251 C -85199,22150 -85207,22399 -85275,22449 -85340,22497 -85525,22505 -86553,22505 L -87754,22505 -87836,22697 C -88068,23238 -88965,23563 -89698,23370 L -89698,23370 Z M -88655,22996 C -88278,22813 -88088,22447 -88207,22134 -88437,21531 -89502,21363 -90042,21845 -90378,22145 -90373,22515 -90030,22847 -89740,23127 -89072,23199 -88655,22996 L -88655,22996 Z M -85599,20156 L -85611,18128 -86632,18118 -87653,18109 -88346,18623 -89039,19138 -89025,19330 -89010,19521 -88112,19531 C -87337,19539 -87205,19548 -87153,19600 -87111,19641 -87092,19815 -87092,20154 -87092,20828 -87029,20790 -88160,20790 L -89034,20790 -89034,21022 C -89034,21245 -89029,21254 -88900,21277 -88644,21322 -88323,21464 -88140,21613 -87951,21767 -87775,22011 -87773,22121 -87772,22179 -87687,22183 -86679,22183 L -85586,22183 -85599,20156 Z M -87529,20147 L -87529,19825 -89228,19825 -90927,19825 -90927,20147 -90927,20468 -89228,20468 -87529,20468 -87529,20147 Z M -91364,19841 C -91364,19532 -91389,19539 -90343,19539 L -89422,19539 -89422,19334 -89422,19129 -90114,18620 -90805,18110 -91084,18110 -91364,18110 -91364,17967 -91364,17824 -91110,17824 -90856,17824 -90139,17298 -89422,16771 -89422,16583 -89422,16395 -90317,16395 C -91352,16395 -91364,16392 -91364,16106 L -91364,15930 -92845,15930 -94326,15930 -94326,16566 -94326,17202 -94152,17248 C -93715,17365 -93473,17662 -93510,18037 -93537,18321 -93720,18519 -94069,18645 L -94320,18735 -94323,19370 -94326,20004 -92845,20004 -91364,20004 -91364,19841 Z M -93063,17967 L -93063,17824 -92845,17824 -92626,17824 -92626,17967 -92626,18110 -92845,18110 -93063,18110 -93063,17967 Z M -92190,17967 L -92190,17824 -91995,17824 -91801,17824 -91801,17967 -91801,18110 -91995,18110 -92190,18110 -92190,17967 Z M -88621,18396 L -88040,17967 -88634,17529 -89228,17092 -89822,17529 -90417,17967 -89835,18396 C -89516,18632 -89242,18825 -89228,18825 -89214,18825 -88941,18632 -88621,18396 Z M -93965,17770 C -94255,17320 -95164,17473 -95164,17971 -95164,18381 -94476,18579 -94100,18277 -93897,18115 -93852,17945 -93965,17770 Z M -84131,17186 L -84131,16549 -84332,16482 C -84742,16346 -84956,16100 -84956,15764 -84956,15451 -84708,15178 -84313,15056 L -84131,15000 -84131,14608 -84131,14215 -85611,14215 -87092,14215 -87092,14391 C -87092,14676 -87104,14680 -88139,14680 L -89034,14680 -89034,14912 -89034,15144 -88139,15144 C -87022,15144 -87092,15101 -87093,15786 -87093,16052 -87114,16294 -87140,16323 -87177,16367 -87358,16380 -88098,16395 L -89010,16413 -89025,16589 -89040,16765 -88322,17294 -87603,17824 -85867,17824 -84131,17824 -84131,17186 Z M -83680,16203 C -83335,16096 -83199,15840 -83352,15585 -83505,15331 -83978,15227 -84268,15383 -84680,15604 -84620,16053 -84159,16201 -83967,16263 -83873,16263 -83680,16203 L -83680,16203 Z M -87529,15787 L -87529,15466 -89228,15466 -90927,15466 -90927,15787 -90927,16109 -89228,16109 -87529,16109 -87529,15787 Z M -91364,15442 C -91364,15151 -91342,15144 -90313,15144 L -89422,15144 -89422,14912 -89422,14680 -90317,14680 C -91352,14680 -91364,14676 -91364,14391 L -91364,14215 -91995,14215 -92626,14215 -92626,14912 -92626,15609 -91995,15609 -91364,15609 -91364,15442 Z M -87529,14054 L -87529,13751 -89228,13751 -90927,13751 -90927,14054 -90927,14358 -89228,14358 -87529,14358 -87529,14054 Z"/>
                <path d="M -97345,35721 L -95438,31977 -94977,31967 -94517,31956 -96424,35701 -98332,39445 -98792,39455 -99253,39465 -97345,35721 Z M -101252,38112 C -101639,37725 -102332,37034 -102794,36577 -103255,36120 -103633,35729 -103633,35708 -103633,35687 -103376,35416 -103062,35104 -102749,34793 -102055,34103 -101521,33571 L -100550,32604 -100028,32603 C -99741,32602 -99506,32611 -99506,32621 -99506,32639 -100525,33631 -102069,35117 -102372,35409 -102630,35666 -102640,35688 -102651,35710 -102003,36380 -101200,37176 -100398,37972 -99698,38667 -99645,38721 L -99548,38819 -100049,38818 -100550,38817 -101252,38112 Z M -94125,38721 C -94072,38667 -93372,37972 -92569,37176 -91767,36380 -91110,35721 -91109,35711 -91108,35701 -91818,35006 -92685,34166 -93553,33326 -94263,32631 -94263,32621 -94263,32610 -94028,32602 -93741,32602 L -93219,32603 -92321,33499 C -91827,33992 -91134,34682 -90780,35031 -90426,35381 -90137,35684 -90137,35703 -90137,35723 -90675,36275 -91332,36931 -91990,37586 -92684,38279 -92874,38469 L -93219,38816 -93720,38818 -94221,38819 -94125,38721 -94125,38721 Z"/>
                <path d="M -56008,52087 C -56200,52013 -56293,51949 -56377,51831 -56488,51678 -56490,51651 -56490,50687 -56490,49642 -56484,49613 -56263,49613 -56115,49613 -56106,49656 -56090,50390 L -56078,51005 -55943,51104 -55809,51203 -53249,51221 -50689,51239 -50422,51341 C -50275,51397 -50094,51485 -50020,51536 L -49885,51629 -49899,48468 -49912,45307 -50026,45147 C -50177,44932 -50330,44818 -50606,44715 L -50835,44629 -53189,44618 C -55830,44605 -55870,44608 -56017,44825 -56095,44940 -56102,45126 -56102,47134 -56102,49051 -56111,49324 -56176,49364 -56233,49399 -56279,49400 -56370,49369 L -56490,49329 -56490,47083 -56490,44836 -56377,44679 C -56293,44561 -56200,44497 -56004,44422 L -55743,44322 -53240,44332 -50737,44343 -50470,44435 C -50200,44530 -49998,44651 -49800,44840 L -49691,44945 -49610,44858 C -49459,44695 -49184,44527 -48917,44436 L -48650,44344 -46927,44332 C -45036,44319 -44986,44324 -45050,44513 L -45082,44606 -46793,44620 C -48734,44636 -48763,44639 -49120,44900 -49518,45192 -49500,45019 -49500,48532 L -49500,51619 -49293,51495 C -49180,51426 -48951,51337 -48785,51296 -48495,51224 -48390,51221 -46055,51221 L -43627,51221 -43468,51117 -43310,51013 -43295,48017 C -43285,45931 -43297,44981 -43334,44887 -43416,44680 -43556,44634 -44179,44612 -44696,44594 -44718,44589 -44734,44510 -44764,44354 -44672,44325 -44150,44325 -43547,44325 -43264,44401 -43058,44620 L -42921,44765 -42921,48255 -42921,51745 -43058,51891 C -43150,51988 -43274,52061 -43432,52111 -43667,52186 -43687,52186 -49709,52186 L -55751,52186 -56008,52087 Z M -50252,51793 C -50329,51734 -50491,51649 -50613,51605 -50832,51526 -50864,51525 -53359,51507 -55368,51493 -55907,51479 -56000,51440 -56115,51392 -56116,51393 -56087,51525 -56046,51710 -55934,51821 -55750,51860 -55661,51879 -54397,51895 -52852,51897 L -50112,51900 -50252,51793 Z M -43661,51862 C -43453,51820 -43343,51716 -43300,51525 L -43271,51393 -43422,51450 C -43554,51500 -43868,51507 -46000,51507 -48308,51507 -48441,51511 -48687,51578 -48830,51618 -49020,51706 -49111,51775 L -49276,51900 -46560,51900 C -44823,51900 -43778,51886 -43661,51862 L -43661,51862 Z M -44790,49762 L -44790,49497 -44997,49636 C -45280,49828 -45493,49918 -45830,49990 -46704,50175 -47661,49846 -48063,49220 -48200,49009 -48213,48956 -48213,48630 -48213,48298 -48202,48255 -48054,48035 -47851,47731 -47429,47436 -47037,47323 -46674,47219 -46089,47210 -45730,47301 -45189,47440 -44749,47751 -44541,48142 -44444,48325 -44432,48424 -44413,49169 -44394,49905 -44401,50000 -44473,50054 -44569,50124 -44652,50130 -44732,50071 -44767,50045 -44790,49921 -44790,49762 Z M -45227,47886 C -45911,47312 -47203,47443 -47678,48135 -48314,49061 -47019,50070 -45732,49651 -44789,49344 -44537,48464 -45227,47886 Z M -55216,50018 C -55249,50008 -55277,49956 -55277,49902 -55277,49847 -55006,49145 -54676,48341 -54346,47537 -53992,46672 -53890,46419 -53781,46147 -53657,45916 -53591,45858 -53371,45666 -52953,45638 -52681,45795 -52519,45889 -52531,45866 -52072,46987 -51863,47498 -51515,48348 -51297,48875 -51080,49403 -50909,49867 -50917,49908 -50925,49948 -50970,49999 -51017,50020 -51177,50094 -51261,50000 -51445,49539 -51543,49295 -51692,48930 -51777,48728 L -51932,48361 -53103,48371 -54275,48380 -54601,49172 C -54780,49608 -54941,49982 -54958,50003 -54992,50043 -55109,50050 -55216,50018 L -55216,50018 Z M -52935,46013 C -53035,45956 -53148,45956 -53254,46013 -53307,46042 -53478,46408 -53724,47023 -53937,47553 -54122,48007 -54134,48032 -54152,48067 -53928,48077 -53115,48077 -52449,48077 -52073,48064 -52073,48041 -52073,47923 -52869,46051 -52935,46013 Z"/>
                <path d="M -93041,5955 C -92136,5220 -91935,5019 -91578,4492 -91100,3786 -90941,3225 -90942,2250 -90943,1678 -90955,1586 -91042,1443 -91286,1047 -91795,855 -92370,943 -92707,994 -92978,1145 -93151,1379 -93287,1563 -93293,1588 -93325,2247 -93361,2972 -93412,3173 -93660,3575 -93879,3931 -94091,4143 -94735,4650 -95042,4892 -95213,4936 -95312,4800 -95379,4709 -95349,4675 -94847,4266 -94398,3900 -94232,3728 -94048,3435 -93848,3117 -93757,2735 -93757,2220 -93757,1469 -93639,1204 -93169,893 -92498,449 -91428,519 -90864,1045 -90522,1363 -90490,1493 -90518,2421 -90544,3315 -90632,3679 -90965,4284 -91290,4875 -91581,5212 -92259,5785 -93082,6480 -93095,6488 -93284,6407 -93437,6342 -93375,6227 -93041,5955 Z M -92106,6288 C -92106,6262 -91953,6107 -91766,5942 -90898,5177 -90407,4453 -90144,3551 -90035,3177 -89955,2282 -89992,1843 -90053,1111 -90452,645 -91262,363 -91574,254 -91630,246 -92106,247 -92524,248 -92667,263 -92897,331 -93428,487 -93897,832 -94099,1217 -94194,1396 -94214,1523 -94244,2122 -94282,2873 -94356,3126 -94646,3490 -94826,3716 -95648,4373 -95751,4373 -95832,4373 -95990,4250 -95990,4187 -95990,4173 -95808,4011 -95586,3829 -95075,3410 -94997,3326 -94842,3027 -94728,2807 -94712,2717 -94681,2087 -94653,1509 -94630,1354 -94544,1181 -94161,406 -93218,-91 -92129,-93 -91012,-94 -89994,457 -89673,1237 -89579,1462 -89574,1544 -89595,2399 -89620,3388 -89649,3542 -89932,4195 -90227,4877 -90643,5432 -91317,6045 -91766,6454 -91873,6505 -92030,6390 -92072,6359 -92106,6313 -92106,6288 Z M -93580,5356 C -92895,4793 -92672,4569 -92402,4169 -92022,3607 -91864,3047 -91864,2259 -91864,1682 -91897,1608 -92148,1629 -92357,1647 -92396,1762 -92397,2355 -92398,2766 -92421,2960 -92495,3189 -92675,3741 -92958,4170 -93422,4596 -93810,4952 -94632,5588 -94704,5588 -94795,5588 -94922,5488 -94922,5416 -94922,5383 -94667,5147 -94357,4892 -94046,4636 -93709,4347 -93608,4248 -93377,4024 -93054,3529 -92957,3249 -92863,2980 -92786,2386 -92786,1935 L -92786,1586 -92592,1443 C -92413,1312 -92377,1300 -92134,1300 -91921,1300 -91842,1318 -91720,1394 -91455,1558 -91427,1637 -91427,2219 -91427,3128 -91604,3715 -92086,4409 -92379,4832 -92644,5090 -93392,5680 -93896,6077 -94014,6135 -94136,6046 -94262,5953 -94173,5843 -93580,5356 Z M -89458,4346 C -89349,4110 -89230,3916 -89181,3894 -89065,3842 -88931,3907 -88911,4026 -88896,4122 -89160,4748 -89250,4828 -89323,4892 -89508,4885 -89586,4816 -89641,4768 -89622,4697 -89458,4346 Z M -96572,3698 C -96572,3633 -96457,3510 -96191,3291 -95808,2975 -95729,2861 -95617,2465 -95570,2301 -95450,2228 -95323,2287 -95102,2389 -95255,2963 -95582,3266 -96090,3736 -96403,3915 -96540,3814 -96558,3801 -96572,3748 -96572,3698 Z M -89094,3413 C -89127,3367 -89126,3243 -89090,3028 -89060,2848 -89047,2421 -89060,2033 -89085,1319 -89135,1130 -89400,747 -89510,587 -89855,247 -90013,143 -90161,45 -90151,-121 -89997,-149 -89614,-220 -88846,638 -88686,1317 -88556,1864 -88607,3294 -88761,3430 -88842,3502 -89036,3492 -89094,3413 L -89094,3413 Z M -96791,2746 L -96573,2548 -96573,2088 C -96573,1559 -96511,1179 -96370,841 -96129,259 -95476,-486 -95209,-486 -95054,-486 -94952,-407 -94990,-318 -95006,-283 -95118,-165 -95240,-57 -95519,190 -95911,776 -96018,1104 -96069,1260 -96110,1596 -96129,2000 -96159,2618 -96165,2652 -96286,2786 -96579,3111 -96806,3223 -96951,3116 -97054,3040 -97014,2948 -96791,2746 Z M -88028,2623 C -88087,2596 -88107,2459 -88132,1918 -88168,1136 -88240,901 -88602,391 -88900,-29 -89525,-508 -90092,-750 -90697,-1010 -91461,-1164 -92139,-1165 -92566,-1165 -92738,-1307 -92468,-1437 -92367,-1486 -92268,-1493 -91922,-1477 -90584,-1412 -89451,-984 -88648,-240 -88188,185 -87850,745 -87739,1265 -87668,1598 -87673,2561 -87747,2615 -87816,2667 -87928,2670 -88028,2623 L -88028,2623 Z M -95503,1127 C -95148,183 -94057,-570 -92796,-741 -92503,-781 -92398,-746 -92398,-611 -92398,-504 -92468,-468 -92786,-416 -93362,-321 -94077,-2 -94473,336 -94664,499 -94962,900 -95051,1114 -95090,1207 -95141,1418 -95165,1583 -95215,1923 -95293,1994 -95541,1920 -95638,1891 -95616,1426 -95503,1127 Z M -97437,1722 C -97563,1629 -97454,1049 -97207,504 -96869,-243 -96146,-954 -95213,-1456 -94656,-1756 -93636,-2053 -92898,-2131 -92381,-2186 -91374,-2166 -91264,-2099 -91172,-2042 -91157,-1896 -91239,-1859 -91270,-1845 -91658,-1831 -92101,-1827 -92802,-1822 -92969,-1809 -93377,-1728 -95373,-1332 -96839,-65 -97039,1436 -97057,1568 -97093,1696 -97119,1720 -97180,1777 -97361,1778 -97437,1722 L -97437,1722 Z M -87383,684 C -87408,660 -87476,546 -87534,432 -87671,160 -87971,-215 -88272,-491 -88548,-744 -88578,-859 -88386,-924 -88267,-964 -88246,-957 -88090,-825 -87791,-572 -87498,-250 -87276,70 -87030,424 -86968,596 -87058,676 -87131,740 -87320,745 -87383,684 L -87383,684 Z M -91456,-416 C -91613,-441 -91772,-482 -91809,-506 -91897,-565 -91843,-725 -91727,-752 -91622,-777 -90983,-661 -90718,-569 -90501,-494 -90437,-361 -90582,-283 -90691,-224 -90726,-226 -90970,-306 -91080,-342 -91298,-392 -91456,-416 Z M -93687,-1268 C -93251,-1384 -93125,-1381 -93059,-1253 -93023,-1184 -93106,-1058 -93188,-1057 -93299,-1056 -94023,-820 -94264,-706 -94539,-577 -94535,-578 -94650,-640 -94901,-775 -94460,-1061 -93687,-1268 Z M -97084,-880 C -97172,-952 -97172,-957 -97084,-1078 -96967,-1238 -96203,-1781 -95792,-1996 -95408,-2197 -94570,-2523 -94438,-2523 -94340,-2523 -94242,-2426 -94242,-2330 -94242,-2297 -94437,-2202 -94734,-2090 -95471,-1812 -95987,-1517 -96552,-1053 -96843,-814 -96957,-777 -97084,-880 L -97084,-880 Z M -90019,-1494 C -90246,-1573 -90482,-1655 -90543,-1676 -90630,-1706 -90651,-1739 -90640,-1824 -90626,-1927 -90614,-1933 -90426,-1931 -90099,-1926 -88911,-1470 -88832,-1319 -88793,-1244 -88931,-1093 -89037,-1096 -89083,-1097 -89230,-1154 -89363,-1224 -89497,-1294 -89792,-1415 -90019,-1494 Z M -90792,-2433 C -91405,-2550 -92712,-2559 -93326,-2450 -93554,-2410 -93580,-2412 -93673,-2481 -93758,-2544 -93766,-2570 -93720,-2643 -93678,-2711 -93607,-2740 -93408,-2770 -91487,-3056 -89434,-2658 -87972,-1715 -87604,-1477 -87494,-1387 -87494,-1324 -87494,-1257 -87632,-1165 -87728,-1167 -87773,-1168 -88007,-1297 -88247,-1455 -88997,-1945 -89746,-2233 -90792,-2433 Z M -89719,-3032 C -89730,-3106 -89706,-3139 -89618,-3169 -89521,-3201 -89437,-3185 -89086,-3066 -88614,-2905 -88516,-2809 -88707,-2695 -88767,-2659 -88830,-2631 -88847,-2632 -88864,-2633 -89064,-2702 -89291,-2784 -89644,-2912 -89705,-2948 -89719,-3032 Z M -95361,-2811 C -95454,-2939 -95317,-3029 -94798,-3179 -93543,-3542 -92021,-3651 -90804,-3466 -90345,-3396 -90262,-3365 -90262,-3259 -90262,-3096 -90366,-3077 -90857,-3146 -92139,-3328 -93642,-3205 -94815,-2823 -95141,-2717 -95290,-2714 -95361,-2811 L -95361,-2811 Z"/>
                <path d="M -53988,20348 C -54019,20307 -54039,19972 -54039,19511 -54039,18860 -54027,18734 -53962,18687 -53872,18620 -53866,18620 -53744,18668 -53656,18702 -53650,18749 -53650,19418 L -53650,20131 -52776,20131 -51903,20131 -51903,18327 -51903,16522 -52776,16522 -53650,16522 -53650,17391 C -53650,18264 -53665,18345 -53826,18345 -53859,18345 -53920,18320 -53962,18289 -54030,18239 -54039,17956 -54039,15717 -54039,13267 -54036,13201 -53945,13165 -53883,13140 -52763,13128 -50647,13128 -47799,13128 -47435,13134 -47367,13184 -47305,13230 -47291,13333 -47291,13734 -47291,14265 -47317,14324 -47543,14301 -47652,14289 -47655,14278 -47668,13851 L -47682,13414 -48554,13414 -49427,13414 -49427,15218 -49427,17023 -48554,17023 -47680,17023 -47668,15835 -47655,14647 -47543,14635 C -47293,14609 -47291,14619 -47291,15866 L -47291,17023 -45771,17023 C -44654,17023 -44236,17034 -44193,17066 -44152,17096 -44135,17317 -44135,17834 L -44135,18559 -43282,18559 C -42787,18559 -42390,18575 -42336,18596 -42247,18631 -42242,18680 -42242,19504 -42242,20264 -42251,20377 -42319,20396 -42361,20408 -44992,20417 -48167,20417 -53823,20417 -53939,20416 -53988,20348 L -53988,20348 Z M -46660,19488 L -46660,18845 -49087,18845 -51514,18845 -51514,19488 -51514,20131 -49087,20131 -46660,20131 -46660,19488 Z M -42582,19488 L -42582,18845 -44426,18845 -46271,18845 -46271,19488 -46271,20131 -44426,20131 -42582,20131 -42582,19488 Z M -49815,16773 L -49815,14986 -50665,14986 -51514,14986 -51514,16773 -51514,18559 -50665,18559 -49815,18559 -49815,16773 Z M -44523,17934 L -44523,17309 -46975,17309 -49427,17309 -49427,17934 -49427,18559 -46975,18559 -44523,18559 -44523,17934 Z M -51903,15611 L -51903,14986 -52776,14986 -53650,14986 -53650,15611 -53650,16237 -52776,16237 -51903,16237 -51903,15611 Z M -49815,14057 L -49815,13414 -51733,13414 -53650,13414 -53650,14057 -53650,14700 -51733,14700 -49815,14700 -49815,14057 Z M -44659,16087 C -44704,16054 -44718,15592 -44718,14157 L -44718,12270 -46202,12270 C -47132,12270 -47720,12257 -47779,12233 -47868,12198 -47873,12150 -47873,11347 -47873,10734 -47857,10486 -47815,10455 -47771,10423 -47094,10412 -45060,10413 -43577,10413 -42336,10426 -42302,10442 -42254,10464 -42244,11058 -42254,13291 L -42266,16112 -43433,16121 C -44299,16128 -44615,16119 -44659,16087 L -44659,16087 Z M -42582,14057 L -42582,12270 -43455,12270 -44329,12270 -44329,14057 -44329,15844 -43455,15844 -42582,15844 -42582,14057 Z M -42582,11341 L -42582,10698 -45033,10698 -47485,10698 -47485,11341 -47485,11984 -45033,11984 -42582,11984 -42582,11341 Z"/>
                <path d="M -37027,6248 C -37067,6219 -37086,6050 -37086,5721 L -37086,5237 -37263,5166 C -37735,4976 -37723,4499 -37241,4272 L -37089,4201 -37087,3016 -37086,1832 -37252,1760 C -37725,1554 -37731,1090 -37263,863 L -37085,777 -37085,-460 -37085,-1696 -37259,-1765 C -37731,-1952 -37721,-2434 -37241,-2660 L -37089,-2731 -37087,-3180 C -37085,-3641 -37058,-3714 -36883,-3714 -36737,-3714 -36697,-3591 -36697,-3148 L -36697,-2720 -36527,-2647 C -36434,-2606 -36320,-2516 -36275,-2446 -36230,-2376 -36158,-2320 -36113,-2320 -35921,-2320 -34988,-2122 -34602,-2000 -33680,-1708 -32715,-1104 -32182,-488 -32035,-318 -31898,-178 -31877,-177 -31855,-177 -31347,-434 -30748,-748 -30149,-1063 -29511,-1387 -29330,-1469 -28854,-1685 -28099,-1943 -27570,-2072 -27050,-2198 -26010,-2353 -25670,-2355 -25464,-2356 -25435,-2367 -25345,-2479 -25291,-2546 -25180,-2627 -25098,-2658 L -24949,-2715 -24949,-3145 C -24949,-3591 -24909,-3714 -24763,-3714 -24588,-3714 -24560,-3641 -24560,-3179 L -24560,-2729 -24383,-2659 C -24191,-2583 -24029,-2376 -24027,-2203 -24026,-2047 -24194,-1842 -24386,-1765 L -24560,-1696 -24560,-458 -24560,781 -24394,854 C -23922,1059 -23914,1530 -24378,1750 L -24560,1837 -24560,3024 -24560,4212 -24394,4284 C -23923,4488 -23919,4981 -24386,5167 L -24560,5236 -24560,5721 C -24560,6220 -24586,6291 -24763,6291 -24910,6291 -24949,6168 -24949,5695 L -24949,5237 -25095,5176 C -25175,5143 -25287,5058 -25342,4989 -25398,4919 -25461,4862 -25483,4862 -25504,4862 -25770,4831 -26073,4793 -27564,4604 -28910,3954 -29756,3012 L -30017,2722 -30238,2841 C -30359,2906 -30936,3203 -31520,3500 -33291,4401 -34253,4693 -36095,4883 -36195,4894 -36263,4928 -36300,4986 -36329,5035 -36431,5111 -36525,5156 L -36696,5237 -36697,5695 C -36697,5947 -36720,6184 -36747,6222 -36804,6300 -36940,6313 -37027,6248 L -37027,6248 Z M -36899,4505 C -37060,4505 -37231,4616 -37231,4721 -37231,4815 -37022,4969 -36894,4969 -36839,4969 -36751,4937 -36697,4898 -36500,4752 -36627,4505 -36899,4505 Z M -24534,4882 C -24389,4775 -24382,4672 -24512,4576 -24706,4433 -25046,4524 -25046,4718 -25046,4860 -24916,4957 -24716,4966 -24681,4968 -24599,4930 -24534,4882 Z M -34992,4438 C -34275,4305 -33532,4089 -32976,3853 -32495,3649 -30242,2502 -30241,2460 -30240,2411 -32539,-376 -32741,-570 -33010,-827 -33555,-1204 -33933,-1392 -34520,-1686 -35383,-1941 -36045,-2016 -36223,-2036 -36248,-2029 -36298,-1948 -36329,-1899 -36431,-1821 -36525,-1776 L -36696,-1695 -36696,-443 -36697,808 -36536,872 C -36447,907 -36337,983 -36290,1041 -36228,1119 -36178,1142 -36099,1130 -36041,1121 -35864,1104 -35706,1091 -35299,1058 -34319,854 -33833,700 -33606,628 -33229,489 -32995,390 -32562,208 -32449,190 -32362,292 -32278,390 -32356,456 -32750,626 -33674,1024 -34796,1298 -35979,1413 -36142,1429 -36215,1454 -36235,1502 -36273,1589 -36551,1789 -36633,1789 -36685,1789 -36697,2026 -36697,3002 L -36697,4215 -36548,4279 C -36466,4315 -36353,4398 -36297,4465 L -36196,4585 -35870,4563 C -35691,4551 -35296,4495 -34992,4438 L -34992,4438 Z M -25345,4453 C -25291,4386 -25180,4305 -25098,4274 L -24949,4217 -24949,3003 C -24949,2247 -24966,1789 -24996,1789 -25071,1789 -25386,1572 -25386,1519 -25386,1438 -25451,1434 -25979,1485 -27041,1587 -27696,1741 -28702,2122 -29412,2390 -29536,2404 -29536,2214 -29536,2144 -29462,2098 -29124,1959 -28197,1578 -27057,1294 -26143,1216 -25453,1157 -25386,1146 -25386,1094 -25386,1042 -25072,824 -24996,824 -24966,824 -24949,350 -24949,-435 L -24949,-1695 -25095,-1756 C -25175,-1790 -25287,-1874 -25342,-1944 -25465,-2096 -25512,-2099 -26308,-2002 -27251,-1888 -28102,-1658 -28991,-1278 -29457,-1078 -31648,72 -31648,117 -31648,168 -29495,2796 -29268,3022 -28382,3905 -27055,4451 -25500,4572 -25469,4574 -25400,4521 -25345,4453 L -25345,4453 Z M -36708,1483 C -36489,1370 -36636,1074 -36912,1074 -37030,1074 -37231,1221 -37231,1307 -37231,1388 -37031,1539 -36923,1539 -36864,1539 -36767,1514 -36708,1483 Z M -24515,1445 C -24460,1393 -24415,1331 -24415,1307 -24415,1225 -24615,1074 -24723,1074 -25012,1074 -25152,1318 -24949,1467 -24813,1567 -24636,1558 -24515,1445 Z M -36878,-2443 C -36958,-2461 -37019,-2444 -37109,-2378 -37250,-2274 -37263,-2191 -37156,-2078 -37064,-1982 -36819,-1971 -36689,-2058 -36508,-2178 -36609,-2383 -36878,-2443 Z M -24465,-2115 C -24399,-2202 -24398,-2223 -24463,-2309 -24618,-2511 -25046,-2448 -25046,-2222 -25046,-1992 -24618,-1913 -24465,-2115 L -24465,-2115 Z"/>
                <path d="M -41901,38947 C -42287,38854 -42683,38594 -42872,38311 -42990,38134 -43008,38065 -43008,37786 -43008,37501 -42992,37441 -42866,37258 -42433,36629 -41440,36389 -40603,36711 L -40373,36800 -39679,36257 C -39297,35958 -38912,35656 -38822,35585 L -38660,35457 -38847,35246 C -39248,34794 -39248,34348 -38848,33907 L -38652,33691 -38887,33469 C -39016,33348 -39281,33100 -39475,32919 L -39828,32591 -40098,32681 C -40337,32762 -40417,32771 -40814,32760 -41310,32746 -41566,32675 -41879,32463 -42294,32183 -42499,31734 -42399,31325 -42369,31204 -42322,31073 -42294,31033 -41748,30251 -40362,30082 -39552,30699 -39242,30935 -39101,31190 -39101,31515 -39101,31850 -39156,31998 -39369,32231 -39467,32338 -39522,32433 -39500,32459 -39481,32483 -39216,32737 -38913,33024 L -38361,33546 -38160,33469 C -37992,33404 -37879,33391 -37474,33391 -37042,33391 -36961,33402 -36742,33487 L -36496,33582 -35135,32343 -33774,31104 -33883,31014 C -34104,30833 -34213,30617 -34235,30313 -34263,29947 -34179,29748 -33877,29466 -33560,29169 -33163,29031 -32619,29031 -32301,29031 -32181,29048 -31958,29126 -31246,29371 -30864,29885 -30996,30420 -31103,30853 -31409,31150 -31944,31338 -32339,31476 -32819,31484 -33235,31358 L -33510,31275 -34875,32520 -36240,33766 -36121,33882 C -35931,34068 -35840,34266 -35825,34533 L -35810,34783 -34530,35059 C -33826,35212 -33245,35337 -33239,35337 -33233,35338 -33194,35289 -33152,35229 -33016,35036 -32730,34835 -32428,34720 -32164,34620 -32089,34609 -31697,34607 -31323,34606 -31220,34619 -30985,34700 -30644,34818 -30337,35045 -30172,35302 -30068,35466 -30047,35550 -30046,35803 -30046,36062 -30066,36139 -30186,36330 -30762,37248 -32550,37261 -33177,36352 -33268,36220 -33301,36107 -33315,35884 L -33333,35590 -33510,35554 C -33607,35534 -34187,35410 -34797,35278 -35783,35065 -35914,35045 -35963,35095 -35993,35126 -36088,35226 -36175,35317 -36581,35744 -37476,35920 -38142,35703 L -38368,35629 -38751,35921 C -38962,36082 -39355,36390 -39625,36605 -40058,36951 -40108,37003 -40047,37053 -40009,37084 -39920,37202 -39849,37317 -39733,37503 -39722,37557 -39740,37834 -39755,38066 -39789,38189 -39877,38321 -40233,38863 -41115,39136 -41901,38947 L -41901,38947 Z M -40712,38613 C -40491,38509 -40231,38268 -40135,38078 -39966,37739 -40139,37308 -40543,37066 -41051,36762 -41689,36755 -42193,37048 -42591,37281 -42778,37683 -42647,38027 -42539,38311 -42128,38639 -41792,38709 -41740,38720 -41523,38724 -41309,38719 -40982,38711 -40888,38695 -40712,38613 L -40712,38613 Z M -30546,35328 C -30812,34981 -31393,34788 -31920,34871 -32233,34920 -32333,34959 -32562,35119 -32899,35354 -33030,35661 -32936,35995 -32763,36609 -31872,36941 -31109,36675 -30424,36436 -30167,35822 -30546,35328 Z M -36659,33850 C -36799,33767 -36995,33681 -37096,33661 -37964,33484 -38780,33933 -38780,34587 -38780,35313 -37772,35752 -36871,35418 -36067,35119 -35953,34273 -36659,33850 Z M -39587,31131 C -40002,30519 -41053,30404 -41685,30901 -41937,31100 -42032,31276 -42034,31550 -42036,31815 -41910,32041 -41658,32223 -41239,32525 -40689,32594 -40181,32407 -39511,32161 -39258,31616 -39587,31131 Z M -31943,29405 C -32512,29146 -33368,29305 -33729,29737 -33929,29976 -33964,30348 -33811,30609 -33678,30837 -33409,31032 -33101,31123 -32795,31214 -32318,31201 -32034,31094 -31121,30751 -31070,29803 -31943,29405 Z"/>
                <path d="M -15859,23686 C -16005,23627 -16139,23466 -16139,23348 -16139,23159 -15862,22955 -15605,22955 -15348,22955 -15071,23159 -15071,23348 -15071,23469 -15207,23629 -15361,23687 -15538,23755 -15687,23754 -15859,23686 L -15859,23686 Z M -15907,22099 C -16129,21971 -16153,21868 -16128,21142 -16109,20570 -16090,20439 -15998,20243 -15813,19850 -15653,19659 -15271,19378 -14979,19163 -14803,19070 -14440,18935 -13458,18573 -12922,18135 -12645,17470 -11966,15842 -13887,14255 -16166,14561 -17349,14720 -18314,15389 -18616,16259 -18669,16411 -18712,16617 -18712,16717 -18712,16960 -18841,17114 -19091,17169 -19459,17250 -19780,17051 -19780,16741 -19780,16509 -19605,15912 -19465,15664 -18953,14758 -17921,14089 -16649,13838 -16096,13729 -15110,13729 -14564,13838 -13188,14114 -12084,14877 -11655,15849 -11063,17191 -11763,18634 -13374,19391 -13520,19459 -13793,19572 -13981,19642 -14413,19802 -14705,20016 -14896,20311 -15044,20540 -15047,20554 -15071,21222 -15096,21929 -15119,22007 -15325,22114 -15475,22191 -15761,22184 -15907,22099 L -15907,22099 Z"/>
                <path d="M -3547,30374 C -3587,30339 -3634,30282 -3651,30246 -3693,30160 -3564,29983 -3438,29953 -3080,29870 -2815,30185 -3080,30380 -3183,30456 -3456,30452 -3547,30374 L -3547,30374 Z M -3538,29078 C -3632,29009 -3635,28959 -3635,27437 -3635,25681 -3647,25741 -3302,25762 -3001,25781 -3002,25773 -3016,27476 -3027,28917 -3033,29004 -3120,29075 -3237,29169 -3412,29171 -3538,29078 L -3538,29078 Z"/>
                <path d="M 9440,31088 C 9343,30799 9721,30530 10105,30615 10167,30629 10989,31205 11930,31895 L 13641,33151 17925,30000 C 21667,27249 22232,26847 22386,26827 22816,26769 23164,27123 22931,27382 22801,27527 14017,33992 13874,34047 13678,34124 13531,34110 13321,33995 12945,33790 9473,31190 9440,31088 Z"/>
                <path d="M 37,9880 C 17,9859 1,7659 0,4991 -1,188 0,140 96,69 207,-13 300,-21 452,39 510,62 2207,917 4223,1939 6239,2961 8271,3990 8738,4226 9883,4802 10000,4874 10000,4997 10000,5051 9956,5126 9901,5162 9804,5227 9151,5562 7014,6644 5923,7196 4488,7924 2330,9019 159,10121 353,10036 169,9960 116,9937 56,9902 37,9880 Z M 7233,5965 C 7444,5857 7946,5602 8348,5399 8749,5197 9077,5020 9077,5006 9077,4993 8443,4660 7668,4267 6894,3874 5660,3247 4926,2874 1553,1157 772,765 704,754 639,744 630,1218 630,4991 630,7328 643,9249 658,9260 673,9271 1606,8813 2733,8243 3860,7672 5246,6970 5815,6683 6383,6396 7021,6073 7233,5965 Z"/>
            </svg>
        );
    }

}
interface SvgProps {
    className?: string;
    onClick?: () => void;
}
