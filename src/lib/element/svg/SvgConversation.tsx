import * as React from 'react';
import {Component} from 'react';
import ModalAssembly from "../../api/assembly/ModalAssembly";
import {MouseEvent} from "react";
import Emitter from "../../api/emitter/Emitter";

export default class SvgConversation extends Component<SvgProps, {}> {

    public render() {
        return (
            <svg width="100mm" height="100mm" viewBox="0 0 10000 10000" className={this.props.className || ""} onClick={this.onClick}>
                <g>
                    <path fill="rgb(0,0,0)" stroke="none" d="M 55567,8431 L 55462,8317 55462,7073 55462,5829 53081,5829 50699,5829 50595,5716 50490,5602 50490,3639 50490,1675 50576,1583 C 50623,1532 50715,1479 50781,1466 50847,1453 52579,1448 54630,1454 L 58358,1465 58457,1573 58556,1680 58567,2921 58578,4161 58987,4161 59397,4161 59397,1116 59397,-1928 58503,-1928 57609,-1928 57600,-484 57590,961 57487,974 C 57428,981 57370,965 57353,935 57337,907 57323,226 57323,-578 L 57322,-2040 57408,-2149 57495,-2258 58499,-2258 59502,-2258 59600,-2152 C 59685,-2061 59700,-2007 59713,-1774 L 59727,-1502 60012,-1502 C 60279,-1502 60303,-1495 60401,-1388 L 60506,-1275 60506,-727 C 60506,-197 60503,-176 60418,-84 60338,2 60301,11 60024,11 L 59719,11 59719,205 59719,399 59985,399 C 60476,399 60516,464 60499,1232 60485,1898 60475,1912 60019,1912 L 59719,1912 59719,2105 59719,2299 59985,2299 C 60289,2299 60409,2345 60466,2480 60527,2626 60517,3520 60453,3654 60385,3797 60341,3812 60002,3812 L 59719,3812 59719,4006 C 59719,4168 59729,4200 59784,4200 59820,4200 59884,4240 59927,4290 60005,4379 60005,4380 60005,6367 L 60005,8354 59917,8449 59829,8544 57750,8544 55671,8544 55567,8431 Z M 59719,6372 L 59719,4510 57733,4510 55748,4510 55748,6372 55748,8234 57733,8234 59719,8234 59719,6372 Z M 56177,7275 C 56177,7020 56240,6856 56397,6694 56563,6524 56804,6457 57023,6520 57264,6590 57391,6705 57492,6945 57563,7114 57577,7192 57559,7336 57495,7850 56945,8161 56524,7920 56322,7804 56177,7535 56177,7275 Z M 57131,7562 C 57241,7453 57260,7408 57260,7268 57260,7058 57164,6913 56978,6841 56853,6794 56822,6795 56711,6852 56308,7059 56437,7683 56884,7689 56968,7690 57038,7654 57131,7562 L 57131,7562 Z M 58306,7936 C 58052,7791 57925,7560 57925,7244 57925,7007 57982,6870 58153,6691 58450,6381 58947,6446 59179,6825 59365,7130 59357,7431 59155,7724 58984,7973 58556,8080 58306,7936 Z M 58882,7559 C 58984,7448 59003,7399 59003,7254 59003,7043 58911,6900 58734,6837 58476,6745 58217,6955 58216,7257 58216,7426 58268,7523 58406,7615 58584,7733 58738,7714 58882,7559 Z M 56750,6219 C 56540,6173 56393,6066 56280,5875 56183,5711 56174,5668 56185,5437 56195,5227 56216,5154 56299,5036 56550,4679 56959,4611 57299,4871 57422,4964 57572,5294 57572,5471 57573,5783 57345,6106 57057,6199 56960,6230 56879,6254 56877,6251 56876,6249 56819,6234 56750,6219 Z M 57245,5341 C 57198,5155 57062,5053 56861,5054 56619,5056 56464,5224 56464,5483 56464,5851 56861,6037 57120,5790 57258,5659 57293,5531 57245,5341 Z M 57925,5481 C 57922,5145 58134,4832 58421,4745 58616,4687 58700,4694 58898,4786 59100,4880 59269,5118 59307,5361 59362,5715 59139,6092 58814,6197 58714,6229 58631,6254 58630,6251 58629,6249 58571,6234 58502,6219 58147,6142 57927,5861 57925,5481 Z M 59003,5481 C 59003,5392 58987,5286 58966,5245 58887,5083 58559,4997 58393,5093 58296,5149 58216,5334 58216,5501 58216,5712 58405,5907 58610,5907 58733,5907 58782,5883 58882,5775 58981,5667 59003,5613 59003,5481 Z M 55462,5402 C 55462,5297 55451,5286 55346,5285 55176,5284 54949,5158 54844,5009 54731,4846 54663,4581 54695,4420 54817,3791 55477,3566 55889,4013 56021,4155 56035,4161 56267,4161 56499,4161 56513,4156 56639,4015 56772,3866 56976,3773 57165,3774 57310,3775 57535,3897 57660,4040 57757,4153 57782,4161 58008,4161 L 58252,4161 58252,2978 58252,1795 54514,1795 50776,1795 50776,3657 50776,5519 53119,5519 55462,5519 55462,5402 Z M 51581,5221 C 51421,5130 51349,5051 51268,4879 51032,4378 51375,3775 51896,3774 52060,3773 52324,3921 52431,4073 52634,4362 52634,4721 52432,5009 52257,5258 51831,5364 51581,5221 L 51581,5221 Z M 52157,4844 C 52259,4733 52279,4684 52279,4539 52279,4328 52186,4185 52010,4122 51751,4030 51492,4240 51492,4542 51492,4711 51543,4808 51682,4900 51859,5017 52014,4999 52157,4844 Z M 52942,4420 C 53057,3817 53673,3580 54090,3977 54261,4140 54328,4298 54328,4538 54328,5093 53760,5465 53309,5207 53063,5066 52889,4694 52942,4420 Z M 54031,4539 C 54031,4328 53939,4185 53762,4122 53506,4030 53244,4235 53244,4528 53244,4711 53293,4807 53434,4900 53612,5017 53766,4999 53910,4844 54012,4733 54031,4684 54031,4539 Z M 51238,2486 C 51318,2222 51641,1988 51921,1990 52130,1992 52388,2179 52509,2417 52713,2819 52504,3349 52089,3482 51990,3514 51907,3539 51905,3536 51904,3534 51847,3519 51778,3504 51330,3406 51093,2960 51238,2486 Z M 52278,2759 C 52277,2496 52122,2338 51867,2338 51700,2338 51613,2391 51546,2531 51452,2728 51475,2910 51613,3060 51713,3168 51762,3191 51885,3191 52008,3191 52057,3168 52157,3060 52258,2950 52278,2900 52278,2759 Z M 53103,3015 C 53166,2933 53219,2945 53370,3075 53563,3242 53746,3237 53910,3060 54002,2959 54031,2895 54031,2790 54031,2378 53686,2206 53350,2452 53231,2538 53178,2556 53130,2528 52898,2394 53300,1990 53666,1989 53864,1989 54162,2202 54262,2416 54454,2826 54247,3352 53844,3482 53743,3514 53660,3539 53658,3536 53657,3534 53584,3517 53497,3498 53210,3437 52988,3165 53103,3015 Z M 55283,3504 C 54805,3400 54555,2871 54768,2412 54873,2185 55173,1990 55419,1989 55616,1989 55915,2202 56015,2416 56206,2826 56000,3352 55597,3482 55496,3514 55412,3539 55411,3536 55410,3534 55352,3519 55283,3504 Z M 55784,2790 C 55784,2496 55633,2338 55353,2338 55142,2338 54997,2507 54997,2753 54997,2900 55016,2949 55119,3060 55218,3168 55267,3191 55391,3191 55514,3191 55563,3168 55662,3060 55755,2959 55784,2895 55784,2790 Z M 56519,2413 C 56630,2180 56929,1988 57179,1990 57310,1991 57540,2117 57658,2254 57791,2408 57857,2682 57817,2916 57750,3302 57384,3577 57036,3503 56550,3401 56299,2873 56519,2413 Z M 57537,2790 C 57537,2496 57386,2338 57106,2338 56900,2338 56750,2500 56750,2721 56750,3020 56896,3189 57156,3190 57265,3191 57318,3165 57415,3060 57508,2959 57537,2895 57537,2790 Z M 55462,4683 C 55462,4423 55472,4380 55551,4293 55601,4240 55641,4190 55641,4182 55641,4174 55585,4147 55516,4122 55421,4089 55360,4089 55266,4122 54845,4273 54938,4960 55382,4973 55458,4976 55462,4961 55462,4683 L 55462,4683 Z M 57242,4116 C 57176,4090 57111,4090 57045,4116 56958,4150 56970,4155 57143,4155 57316,4155 57328,4150 57242,4116 Z M 60219,3056 L 60219,2610 59969,2610 59719,2610 59719,3056 59719,3502 59969,3502 60219,3502 60219,3056 Z M 60219,1155 L 60219,709 59969,709 59719,709 59719,1155 59719,1601 59969,1601 60219,1601 60219,1155 Z M 60219,-745 L 60219,-1191 59969,-1191 59719,-1191 59719,-745 59719,-299 59969,-299 60219,-299 60219,-745 Z M 52136,1186 C 52106,1174 52046,1129 52001,1085 51922,1006 51921,998 51922,-83 51923,-878 51935,-1189 51967,-1234 52044,-1343 52162,-1385 52384,-1385 L 52601,-1385 52601,-1658 C 52601,-1808 52623,-1990 52651,-2063 52721,-2243 52891,-2289 53413,-2271 53794,-2258 53821,-2252 53912,-2153 53998,-2060 54010,-2013 54024,-1717 L 54040,-1385 54751,-1385 55462,-1385 55462,-1657 55462,-1928 55051,-1928 C 54711,-1928 54639,-1918 54639,-1871 54639,-1784 54466,-1751 54398,-1824 54348,-1878 54348,-1902 54394,-2033 54467,-2241 54612,-2287 55148,-2271 55549,-2259 55572,-2253 55664,-2153 55751,-2060 55763,-2014 55777,-1717 L 55793,-1385 56005,-1385 C 56223,-1385 56341,-1342 56418,-1234 56450,-1189 56462,-878 56462,-83 L 56464,1006 56371,1100 56279,1194 54234,1201 C 53109,1205 52165,1198 52136,1186 L 52136,1186 Z M 56177,-105 L 56177,-1075 54192,-1075 52207,-1075 52207,-105 52207,864 54192,864 56177,864 56177,-105 Z M 53709,-1657 L 53709,-1928 53316,-1928 52922,-1928 52922,-1657 52922,-1385 53316,-1385 53709,-1385 53709,-1657 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none" d="M 36855,13983 C 36792,13915 36792,4020 36855,3953 36887,3917 37573,3906 39725,3906 L 42552,3906 43348,4772 44144,5637 44144,6032 44144,6427 43985,6427 43826,6427 43815,6165 43805,5904 43110,5893 C 42678,5887 42397,5867 42368,5841 42333,5809 42319,5605 42312,5037 L 42302,4275 39727,4275 37151,4275 37151,8968 37151,13661 39897,13671 42642,13681 42642,13855 42642,14030 39770,14030 C 37583,14030 36887,14018 36855,13983 L 36855,13983 Z M 42669,4565 C 42654,4565 42642,4784 42642,5050 L 42642,5535 43089,5535 C 43335,5535 43536,5522 43536,5507 43536,5469 42704,4565 42669,4565 Z M 43672,13950 C 43290,13731 43204,13174 43496,12813 43528,12774 43610,12710 43679,12672 L 43805,12603 43795,10873 43785,9142 42552,9142 41319,9142 41319,8968 41319,8793 43143,8793 44967,8793 44967,7419 C 44967,6077 44965,6044 44895,6020 44786,5982 44613,5811 44549,5677 44476,5524 44475,5199 44547,5049 44875,4368 45800,4595 45800,5356 45800,5467 45780,5601 45755,5653 45695,5780 45500,6001 45448,6001 45426,6001 45381,6032 45349,6071 45297,6133 45289,6313 45280,7632 L 45271,9123 44717,9142 44162,9162 44152,9792 44143,10422 44484,10422 C 44778,10422 44829,10413 44848,10354 44896,10206 45056,10022 45195,9954 45455,9826 45715,9867 45909,10066 46425,10595 46013,11441 45308,11298 45163,11268 44954,11086 44875,10921 44823,10811 44820,10810 44483,10810 L 44144,10810 44144,11696 44144,12581 44276,12675 C 44348,12727 44457,12836 44517,12918 44614,13049 44627,13097 44627,13309 44627,13507 44610,13579 44529,13712 44346,14011 43964,14117 43672,13950 L 43672,13950 Z M 44123,13636 C 44234,13581 44323,13384 44299,13247 44277,13127 44162,13002 44044,12971 43705,12882 43500,13408 43798,13605 43929,13692 43998,13698 44123,13636 Z M 45625,10921 C 45807,10831 45858,10540 45722,10369 45505,10097 45100,10317 45161,10674 45202,10910 45417,11024 45625,10921 Z M 45415,5561 C 45555,5343 45390,4992 45146,4992 44900,4992 44736,5344 44879,5565 44993,5741 45300,5739 45415,5561 L 45415,5561 Z M 37634,12769 L 37634,12594 38636,12594 39637,12594 39637,12769 39637,12944 38636,12944 37634,12944 37634,12769 Z M 37634,11877 L 37634,11702 39476,11702 41319,11702 41319,11877 41319,12051 39476,12051 37634,12051 37634,11877 Z M 41640,11877 L 41640,11702 41801,11702 41962,11702 41962,11877 41962,12051 41801,12051 41640,12051 41640,11877 Z M 42320,11877 L 42320,11702 42481,11702 42642,11702 42642,11877 42642,12051 42481,12051 42320,12051 42320,11877 Z M 42964,11877 L 42964,11702 43143,11702 43322,11702 43322,11877 43322,12051 43143,12051 42964,12051 42964,11877 Z M 37634,10965 L 37634,10771 40478,10771 43322,10771 43322,10965 43322,11159 40478,11159 37634,11159 37634,10965 Z M 37634,10054 L 37634,9879 40478,9879 43322,9879 43322,10054 43322,10228 40478,10228 37634,10228 37634,10054 Z M 37956,8968 L 37956,8793 38135,8793 38314,8793 38314,8968 38314,9142 38135,9142 37956,9142 37956,8968 Z M 38636,8968 L 38636,8793 38797,8793 38958,8793 38958,8968 38958,9142 38797,9142 38636,9142 38636,8968 Z M 39315,8968 L 39315,8793 39476,8793 39637,8793 39637,8968 39637,9142 39476,9142 39315,9142 39315,8968 Z M 39959,8968 L 39959,8793 40138,8793 40317,8793 40317,8968 40317,9142 40138,9142 39959,9142 39959,8968 Z M 40639,8968 L 40639,8793 40800,8793 40961,8793 40961,8968 40961,9142 40800,9142 40639,9142 40639,8968 Z M 37634,7882 L 37634,7707 40478,7707 43322,7707 43322,7882 43322,8056 40478,8056 37634,8056 37634,7882 Z M 37634,6990 L 37634,6815 39798,6815 41962,6815 41962,6990 41962,7164 39798,7164 37634,7164 37634,6990 Z M 37634,5710 L 37634,5535 37795,5535 37956,5535 37956,5710 37956,5884 37795,5884 37634,5884 37634,5710 Z M 38314,5710 L 38314,5535 38475,5535 38636,5535 38636,5710 38636,5884 38475,5884 38314,5884 38314,5710 Z M 38958,5710 L 38958,5535 39637,5535 40317,5535 40317,5710 40317,5884 39637,5884 38958,5884 38958,5710 Z M 37634,4992 L 37634,4798 37795,4798 37956,4798 37956,4992 37956,5186 37795,5186 37634,5186 37634,4992 Z M 38314,4992 L 38314,4798 38475,4798 38636,4798 38636,4992 38636,5186 38475,5186 38314,5186 38314,4992 Z M 38958,4992 L 38958,4798 39637,4798 40317,4798 40317,4992 40317,5186 39637,5186 38958,5186 38958,4992 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none" d="M 15461,15859 C 14838,15619 14508,14858 14750,14220 14902,13821 15161,13558 15516,13445 L 15668,13397 15668,12763 15668,12129 15224,12129 C 14867,12129 14768,12117 14723,12068 14675,12017 14667,11884 14667,11221 14667,10508 14673,10428 14732,10370 14790,10314 14919,10306 15825,10306 16465,10306 16879,10321 16922,10346 16982,10381 16992,10430 16992,10715 L 16992,11043 17743,11043 18494,11043 18494,10752 C 18494,10325 18519,10306 19066,10306 L 19495,10306 19495,10005 19495,9705 18682,9259 C 18008,8889 17866,8797 17856,8723 17850,8674 17865,8607 17890,8574 17916,8541 18287,8324 18716,8091 L 19495,7668 19495,7284 19495,6900 18997,6887 C 18561,6875 18486,6863 18398,6793 18212,6645 18172,6499 18172,5962 18172,5417 18212,5292 18431,5147 18541,5074 18613,5070 19678,5070 20794,5070 20810,5071 20930,5158 21132,5304 21176,5451 21177,5973 21177,6497 21138,6641 20957,6780 20847,6866 20796,6874 20345,6887 L 19853,6900 19853,7284 19853,7668 20640,8095 21426,8522 22510,8522 C 23306,8522 23606,8534 23638,8568 23668,8602 23680,8854 23680,9460 L 23680,10306 24122,10306 C 24504,10306 24572,10316 24623,10377 24709,10481 24712,11975 24626,12068 24581,12117 24481,12129 24125,12129 L 23680,12129 23680,12763 23680,13397 23832,13445 C 24349,13607 24716,14174 24673,14745 24626,15385 24178,15869 23587,15921 23063,15966 22540,15568 22390,15009 L 22346,14844 21840,14844 21334,14844 21293,15009 C 21108,15748 20317,16131 19666,15797 19108,15512 18847,14727 19113,14138 19240,13858 19528,13569 19777,13472 20043,13369 20447,13397 20698,13536 20958,13681 21200,13986 21276,14268 L 21338,14495 21841,14495 22344,14495 22404,14287 C 22521,13887 22798,13586 23167,13460 L 23358,13395 23358,12762 23358,12129 22901,12129 C 22592,12129 22429,12114 22400,12082 22369,12049 22357,11801 22357,11211 22357,10435 22361,10384 22426,10346 22464,10324 22690,10306 22927,10306 L 23358,10306 23358,9588 23358,8871 22375,8871 21392,8871 20622,9287 19853,9704 19853,10005 19853,10306 20282,10306 C 20885,10306 20855,10258 20855,11209 20855,11823 20845,11972 20799,12043 20744,12129 20738,12129 19678,12129 18418,12129 18494,12157 18494,11690 L 18494,11392 17743,11392 16992,11392 16992,11714 C 16992,11913 16975,12054 16949,12082 16920,12114 16756,12129 16448,12129 L 15990,12129 15990,12762 15990,13395 16182,13460 C 16543,13584 16821,13879 16940,14268 17023,14540 16999,14958 16886,15210 16633,15773 15994,16064 15461,15859 L 15461,15859 Z M 16202,15466 C 16782,15145 16815,14267 16260,13895 16108,13793 16052,13778 15832,13778 15556,13780 15431,13832 15261,14016 15094,14197 15015,14406 15015,14670 15015,15036 15194,15342 15489,15480 15673,15567 16034,15559 16202,15466 L 16202,15466 Z M 20949,14329 C 20825,14007 20487,13759 20175,13759 19863,13759 19525,14007 19401,14329 19249,14721 19437,15268 19789,15462 19915,15531 19991,15544 20211,15534 20445,15524 20500,15506 20645,15397 20946,15172 21086,14681 20949,14329 Z M 24319,14708 C 24334,14372 24263,14189 24032,13975 23425,13412 22502,14069 22713,14914 22761,15106 22956,15358 23141,15468 23341,15585 23761,15559 23960,15416 24199,15245 24303,15038 24319,14708 Z M 16670,11237 L 16670,10694 15829,10694 14988,10694 14988,11237 14988,11780 15829,11780 16670,11780 16670,11237 Z M 20497,11237 L 20497,10694 19674,10694 18852,10694 18852,11237 18852,11780 19674,11780 20497,11780 20497,11237 Z M 24324,11237 L 24324,10694 23502,10694 22679,10694 22679,11237 22679,11780 23502,11780 24324,11780 24324,11237 Z M 20346,9033 L 20963,8695 20319,8348 19674,8000 19030,8348 18385,8695 19003,9033 C 19343,9219 19645,9371 19674,9371 19704,9371 20006,9219 20346,9033 Z M 20823,6398 C 20843,6340 20855,6120 20849,5910 20839,5586 20826,5521 20767,5474 20711,5429 20500,5419 19667,5419 18410,5419 18494,5380 18494,5964 18494,6179 18511,6389 18531,6430 18566,6502 18617,6505 19676,6505 L 20785,6505 20823,6398 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none" d="M 47628,-6521 C 47628,-6581 49087,-12115 49561,-13854 49721,-14441 49710,-14431 50053,-14332 50273,-14268 50346,-14213 50346,-14111 50346,-14039 48433,-6828 48315,-6456 48244,-6233 48191,-6213 47904,-6299 47700,-6361 47628,-6419 47628,-6521 Z M 43980,-10315 C 43980,-10456 46570,-13263 46700,-13263 46809,-13263 47163,-12892 47163,-12777 47163,-12729 46758,-12262 46063,-11508 L 44964,-10315 46063,-9122 C 46783,-8342 47163,-7902 47163,-7850 47163,-7737 46807,-7367 46697,-7367 46630,-7367 46310,-7693 45295,-8793 44275,-9899 43980,-10241 43980,-10315 Z M 50811,-7853 C 50811,-7901 51216,-8368 51911,-9122 L 53011,-10315 51911,-11508 C 51192,-12288 50811,-12728 50811,-12779 50811,-12893 51168,-13263 51277,-13263 51405,-13263 53995,-10454 53995,-10315 53995,-10174 51405,-7367 51275,-7367 51213,-7367 51125,-7432 50998,-7572 50895,-7685 50811,-7811 50811,-7853 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none" d="M 1130,9914 C 1083,9842 1074,9679 1074,8928 L 1074,8029 743,7667 C 381,7271 240,7025 103,6548 -12,6147 -12,5555 105,5190 369,4358 1044,3653 1906,3308 2052,3250 2076,3226 2076,3134 2076,2955 2251,2358 2384,2084 3087,632 5018,-257 6762,66 7939,285 8707,734 9392,1603 9590,1854 9810,2303 9915,2669 10020,3036 10029,3710 9934,4104 9788,4712 9353,5425 8892,5816 L 8693,5985 8693,7138 8693,8292 8605,8354 C 8498,8430 8569,8489 7569,7498 6899,6834 6858,6801 6732,6811 6409,6837 6392,6846 6269,7090 6131,7363 5828,7728 5541,7968 5281,8184 4765,8454 4347,8591 4047,8689 3976,8697 3311,8702 L 2598,8708 2292,9011 C 2124,9177 1830,9468 1638,9657 1447,9845 1267,10000 1238,10000 1209,10000 1160,9961 1130,9914 L 1130,9914 Z M 2664,8349 C 2917,8404 3404,8416 3721,8374 4487,8273 5098,7979 5592,7475 5753,7310 5921,7106 5964,7022 L 6043,6869 5731,6841 C 5063,6783 4490,6616 3931,6316 3505,6088 3345,5969 3013,5636 2701,5323 2475,4989 2312,4602 2186,4305 2076,3884 2076,3702 2076,3609 2065,3598 1995,3622 1684,3725 1168,4089 889,4401 258,5107 138,6134 592,6955 731,7207 1047,7576 1262,7738 L 1396,7838 1396,8652 1396,9466 1794,9064 C 2013,8843 2274,8586 2373,8494 2527,8350 2570,8329 2664,8349 Z M 8531,5718 C 9106,5230 9494,4641 9638,4037 9712,3731 9711,3152 9636,2827 9490,2187 9082,1584 8478,1114 8151,859 7643,612 7159,472 6683,335 5798,301 5258,399 4389,556 3645,966 3089,1594 2594,2153 2361,2738 2363,3420 2364,3869 2401,4040 2591,4473 3013,5436 3899,6136 5045,6412 5364,6489 6402,6532 6694,6481 6804,6461 6925,6459 6962,6476 6999,6492 7328,6802 7692,7163 L 8353,7820 8371,6830 8389,5839 8531,5718 Z"/>
                    <rect fill="none" stroke="none" x="17" y="0" width="9984" height="10001"/>
                </g>
            </svg>
        );
    }

    private onClick(e: MouseEvent<SVGElement>) {
        if (typeof this.props.onClick === "function") {
            (this.props.onClick as ((e: MouseEvent<SVGElement>) => void))(e);
        } else {
            Emitter.emit("charis:modalContainer:show", this.props.onClick);
        }
    }

}
interface SvgProps {
    className?: string;
    onClick: ((e: MouseEvent<SVGElement>) => void) | ModalAssembly;
}
