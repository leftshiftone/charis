import * as React from 'react';
import AbstractSvgComponent from "./AbstractSvgComponent";

export default class SvgNotification extends AbstractSvgComponent {

    protected renderSvg() {
        return (
            <g>
                <path fill="rgb(0,0,0)" stroke="none" d="M 3886,9430 L 3791,9307 2309,9628 C 1494,9804 755,9951 667,9953 475,9959 294,9873 175,9717 47,9550 64,9456 290,9086 640,8513 805,7963 805,7368 805,6943 724,6602 383,5596 2,4471 -20,4371 9,3889 35,3453 135,3143 366,2773 551,2477 934,2087 1219,1907 1349,1824 1500,1727 1553,1692 L 1651,1629 1539,1343 C 1328,804 1402,473 1791,208 2165,-47 2639,-64 3051,163 3264,281 3421,513 3548,900 L 3649,1209 3899,1232 C 5112,1346 6187,1952 6706,2814 6796,2963 6993,3459 7176,3994 7564,5132 7635,5305 7863,5666 8215,6223 8864,6800 9515,7136 9885,7326 9966,7400 9995,7574 10023,7740 9927,7910 9756,8000 9691,8033 8959,8207 8129,8386 L 6619,8711 6586,8952 C 6567,9088 6505,9268 6444,9364 6312,9571 5986,9817 5717,9912 5458,10003 4972,10029 4726,9964 4373,9872 4089,9691 3886,9430 Z M 5599,9595 C 5808,9516 6081,9255 6146,9071 6247,8785 6271,8786 5213,9014 4686,9128 4247,9227 4237,9235 4201,9263 4500,9517 4637,9573 4942,9700 5296,9708 5599,9595 Z M 4698,8777 C 6866,8313 8831,7894 9066,7844 9709,7710 9734,7638 9228,7375 8565,7028 7836,6375 7477,5804 7271,5476 7193,5288 6822,4216 6622,3639 6407,3078 6345,2970 6078,2504 5513,2050 4900,1809 4433,1625 4087,1562 3544,1562 2980,1563 2629,1628 2130,1823 1280,2155 650,2806 465,3540 338,4044 387,4366 757,5461 1173,6690 1226,6941 1196,7528 1161,8209 1049,8577 689,9187 483,9535 480,9620 674,9620 719,9620 2530,9241 4698,8777 L 4698,8777 Z M 2944,1266 C 3078,1253 3195,1233 3205,1220 3216,1207 3176,1063 3119,899 2998,559 2856,414 2589,357 2358,307 2152,363 1975,524 1787,694 1792,914 1997,1423 2019,1479 1981,1483 2370,1378 2552,1329 2810,1278 2944,1266 Z"/>
                <path fill="rgb(0,0,0)" stroke="none" d="M -7833,28309 L -7454,27557 -7785,27557 C -8809,27557 -9572,27132 -9801,26432 -9861,26248 -9870,25830 -9870,23369 -9870,20679 -9866,20508 -9786,20303 -9611,19857 -9285,19556 -8756,19357 L -8456,19244 -3585,19244 1286,19244 1586,19357 C 2115,19556 2441,19857 2616,20303 2696,20508 2700,20679 2700,23369 2700,26474 2702,26454 2445,26804 2191,27148 1691,27431 1183,27517 1025,27544 193,27557 -1300,27557 L -3544,27557 -5724,28380 C -6923,28832 -7952,29202 -8010,29202 -8070,29202 -8137,29171 -8164,29132 -8202,29075 -8139,28919 -7833,28309 Z M -5089,27768 L -3742,27253 -1318,27234 C 1501,27211 1373,27226 1829,26863 2304,26485 2274,26720 2274,23355 L 2274,20458 2126,20219 C 1965,19959 1736,19777 1402,19646 L 1196,19566 -3585,19566 -8366,19566 -8572,19646 C -8906,19777 -9135,19959 -9296,20219 L -9444,20458 -9444,23355 C -9444,26720 -9474,26485 -8999,26863 -8640,27148 -8458,27198 -7671,27225 -7337,27236 -7039,27261 -7008,27280 -6914,27340 -6942,27435 -7205,27944 -7481,28480 -7585,28702 -7561,28702 -7553,28702 -7296,28607 -6991,28492 -6686,28376 -5830,28050 -5089,27768 Z M -5810,26184 C -6029,26108 -6189,25930 -6189,25763 -6189,25684 -6058,25295 -5897,24897 -5737,24500 -5605,24143 -5605,24103 -5605,24051 -5814,23911 -6357,23598 -6771,23359 -7165,23118 -7234,23061 -7488,22849 -7482,22554 -7219,22353 L -7081,22247 -5960,22230 C -5029,22215 -4831,22203 -4796,22158 -4772,22129 -4629,21799 -4478,21425 -4159,20634 -4080,20498 -3901,20425 -3732,20355 -3438,20355 -3269,20425 -3090,20498 -3011,20634 -2692,21425 -2541,21799 -2398,22129 -2374,22158 -2339,22203 -2141,22215 -1210,22230 L -89,22247 49,22353 C 224,22486 301,22694 233,22849 160,23016 10,23123 -813,23598 -1356,23911 -1565,24051 -1565,24103 -1565,24143 -1433,24500 -1273,24897 -1110,25299 -981,25684 -981,25765 -981,26053 -1407,26293 -1754,26202 -1840,26179 -2272,25952 -2714,25697 -3156,25442 -3548,25233 -3585,25233 -3622,25233 -4013,25441 -4454,25696 -5414,26250 -5515,26286 -5810,26184 L -5810,26184 Z M -4760,25466 C -3885,24961 -3780,24911 -3585,24911 -3390,24911 -3285,24961 -2410,25466 -1984,25711 -1611,25912 -1581,25912 -1506,25912 -1385,25812 -1385,25749 -1385,25721 -1519,25373 -1683,24974 -1993,24220 -2026,24065 -1913,23893 -1874,23833 -1513,23596 -1048,23322 -609,23065 -223,22822 -190,22782 -138,22720 -140,22697 -198,22630 -266,22553 -288,22551 -1272,22551 -1873,22551 -2328,22536 -2404,22513 -2694,22426 -2761,22328 -3092,21510 -3421,20697 -3452,20654 -3674,20710 -3745,20728 -3828,20892 -4078,21510 -4409,22328 -4477,22426 -4766,22513 -4842,22536 -5297,22551 -5898,22551 -6882,22551 -6904,22553 -6972,22630 -7030,22697 -7032,22720 -6980,22782 -6947,22822 -6561,23065 -6122,23322 -5657,23596 -5296,23833 -5257,23893 -5144,24065 -5177,24220 -5487,24974 -5651,25373 -5785,25721 -5785,25749 -5785,25812 -5664,25912 -5589,25912 -5559,25912 -5186,25711 -4760,25466 L -4760,25466 Z"/>
            </g>
        );
    }

}
