import * as React from 'react';
import {Component} from 'react';

export default class SvgPattern extends Component<SvgPatternProps, {}> {

    public render() {
        return (
            <svg className={this.props.className || ""} viewBox="0 0 10000 10000">
                <g>
                    <path fill="rgb(0,0,0)" stroke="none" d="M -30227,12961 C -30603,12844 -30879,12612 -31004,12307 -31095,12085 -31088,11705 -30988,11510 -30835,11209 -30470,10942 -30107,10867 -29998,10844 -29994,10834 -29994,10611 L -29994,10380 -30735,10380 C -31421,10380 -31482,10374 -31558,10308 -31618,10256 -31640,10189 -31640,10058 L -31640,9879 -33038,9879 C -34378,9879 -34437,9876 -34478,9810 -34503,9769 -34521,9452 -34521,9033 L -34522,8325 -34736,8235 C -35399,7958 -35356,7053 -34669,6838 L -34521,6791 -34521,6050 C -34521,5126 -34588,5197 -33709,5197 L -33081,5197 -33081,4399 C -33081,3670 -33074,3595 -33005,3541 -32942,3491 -32827,3482 -32285,3482 L -31640,3482 -31640,3306 C -31640,3001 -31740,3017 -29830,3017 -27919,3017 -28019,3001 -28019,3306 L -28019,3482 -26643,3482 C -25267,3482 -25266,3482 -25202,3561 -25152,3623 -25138,3743 -25138,4115 L -25138,4589 -25004,4637 C -24269,4905 -24252,5790 -24977,6074 L -25138,6137 -25138,6849 C -25138,7271 -25155,7589 -25181,7630 -25220,7693 -25272,7699 -25819,7699 L -26414,7699 -26414,9841 C -26414,11741 -26421,11989 -26479,12039 -26534,12087 -26691,12095 -27562,12095 L -28580,12095 -28650,12287 C -28846,12829 -29607,13153 -30227,12961 L -30227,12961 Z M -29344,12587 C -29024,12403 -28863,12037 -28964,11724 -29159,11121 -30062,10953 -30519,11435 -30804,11735 -30800,12106 -30509,12437 -30263,12717 -29697,12790 -29344,12587 L -29344,12587 Z M -26753,9745 L -26764,7717 -27629,7707 -28494,7698 -29082,8213 -29670,8727 -29657,8919 -29644,9111 -28883,9120 C -28226,9128 -28115,9138 -28070,9190 -28035,9231 -28019,9404 -28019,9743 -28019,10417 -27965,10380 -28924,10380 L -29665,10380 -29665,10611 C -29665,10834 -29661,10844 -29552,10867 -29334,10912 -29062,11054 -28907,11203 -28747,11357 -28597,11601 -28596,11711 -28595,11769 -28523,11774 -27669,11774 L -26742,11774 -26753,9745 Z M -28389,9736 L -28389,9415 -29830,9415 -31270,9415 -31270,9736 -31270,10058 -29830,10058 -28389,10058 -28389,9736 Z M -31640,9430 C -31640,9121 -31661,9129 -30775,9129 L -29994,9129 -29994,8924 -29994,8719 -30580,8209 -31166,7699 -31403,7699 -31640,7699 -31640,7556 -31640,7413 -31425,7413 -31209,7413 -30602,6886 -29994,6360 -29994,6172 -29994,5984 -30752,5984 C -31630,5984 -31640,5980 -31640,5695 L -31640,5519 -32895,5519 -34150,5519 -34150,6155 -34150,6791 -34004,6837 C -33632,6954 -33427,7251 -33459,7627 -33482,7910 -33637,8108 -33933,8234 L -34146,8325 -34148,8959 -34150,9593 -32895,9593 -31640,9593 -31640,9430 Z M -33081,7556 L -33081,7413 -32895,7413 -32710,7413 -32710,7556 -32710,7699 -32895,7699 -33081,7699 -33081,7556 Z M -32340,7556 L -32340,7413 -32175,7413 -32011,7413 -32011,7556 -32011,7699 -32175,7699 -32340,7699 -32340,7556 Z M -29315,7985 L -28822,7556 -29326,7118 -29830,6681 -30333,7118 -30837,7556 -30344,7985 C -30073,8221 -29842,8414 -29830,8414 -29817,8414 -29586,8221 -29315,7985 Z M -33845,7359 C -34091,6909 -34861,7062 -34861,7560 -34861,7970 -34278,8169 -33959,7866 -33787,7704 -33749,7534 -33845,7359 Z M -25509,6775 L -25509,6137 -25679,6071 C -26027,5934 -26208,5688 -26208,5352 -26208,5039 -25998,4766 -25663,4645 L -25509,4589 -25509,4196 -25509,3803 -26764,3803 -28019,3803 -28019,3980 C -28019,4265 -28029,4268 -28907,4268 L -29665,4268 -29665,4500 -29665,4733 -28906,4733 C -27959,4733 -28019,4690 -28019,5375 -28020,5641 -28038,5883 -28059,5912 -28091,5956 -28245,5969 -28871,5984 L -29644,6001 -29657,6177 -29670,6354 -29061,6883 -28452,7413 -26980,7413 -25509,7413 -25509,6775 Z M -25127,5792 C -24834,5684 -24719,5428 -24849,5174 -24978,4920 -25379,4815 -25625,4971 -25974,5193 -25923,5642 -25533,5790 -25370,5851 -25290,5852 -25127,5792 L -25127,5792 Z M -28389,5376 L -28389,5054 -29830,5054 -31270,5054 -31270,5376 -31270,5698 -29830,5698 -28389,5698 -28389,5376 Z M -31640,5030 C -31640,4739 -31621,4733 -30749,4733 L -29994,4733 -29994,4500 -29994,4268 -30752,4268 C -31630,4268 -31640,4265 -31640,3980 L -31640,3803 -32175,3803 -32710,3803 -32710,4500 -32710,5197 -32175,5197 -31640,5197 -31640,5030 Z M -28389,3643 L -28389,3339 -29830,3339 -31270,3339 -31270,3643 -31270,3946 -29830,3946 -28389,3946 -28389,3643 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none" d="M -17310,25621 L -15693,21876 -15302,21865 -14912,21855 -16529,25600 -18146,29346 -18536,29356 -18927,29366 -17310,25621 Z M -20622,28013 C -20949,27625 -21537,26934 -21929,26477 -22320,26020 -22640,25629 -22640,25608 -22640,25587 -22422,25315 -22156,25004 -21890,24692 -21302,24002 -20849,23470 L -20026,22503 -19584,22502 C -19341,22501 -19142,22510 -19142,22521 -19142,22538 -20005,23530 -21314,25016 -21571,25309 -21789,25566 -21798,25588 -21807,25610 -21258,26280 -20578,27076 -19897,27872 -19304,28568 -19259,28622 L -19177,28720 -19602,28719 -20026,28717 -20622,28013 Z M -14580,28622 C -14535,28568 -13942,27872 -13261,27076 -12581,26280 -12024,25620 -12024,25611 -12023,25601 -12624,24905 -13360,24065 -14095,23225 -14697,22530 -14697,22520 -14697,22509 -14498,22501 -14255,22501 L -13812,22502 -13051,23398 C -12632,23891 -12044,24581 -11745,24931 -11445,25281 -11199,25583 -11199,25603 -11199,25623 -11655,26175 -12213,26831 -12770,27487 -13358,28179 -13520,28370 L -13812,28717 -14237,28718 -14662,28720 -14580,28622 -14580,28622 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none" d="M 43,9938 C 17,9896 0,9562 0,9101 0,8450 10,8324 65,8276 141,8210 147,8209 250,8257 324,8292 329,8339 329,9008 L 329,9721 1070,9721 1811,9721 1811,7916 1811,6111 1070,6111 329,6111 329,6980 C 329,7853 317,7934 180,7934 152,7934 100,7909 65,7878 7,7828 0,7545 0,5306 0,2855 2,2789 80,2753 132,2728 1082,2716 2875,2716 5289,2716 5598,2722 5655,2772 5708,2818 5720,2921 5720,3322 5720,3853 5698,3913 5506,3889 5414,3878 5411,3866 5400,3440 L 5388,3002 4649,3002 3909,3002 3909,4807 3909,6612 4650,6612 5390,6612 5401,5423 5412,4235 5506,4223 C 5718,4197 5720,4208 5720,5454 L 5720,6612 7008,6612 C 7955,6612 8309,6623 8346,6654 8381,6685 8395,6906 8395,7423 L 8395,8148 9118,8148 C 9538,8148 9874,8164 9920,8185 9996,8220 10000,8269 10000,9093 10000,9854 9992,9966 9935,9985 9899,9997 7668,10007 4978,10007 183,10007 84,10006 43,9938 L 43,9938 Z M 6255,9078 L 6255,8434 4198,8434 2140,8434 2140,9078 2140,9721 4198,9721 6255,9721 6255,9078 Z M 9712,9078 L 9712,8434 8148,8434 6584,8434 6584,9078 6584,9721 8148,9721 9712,9721 9712,9078 Z M 3580,6361 L 3580,4574 2860,4574 2140,4574 2140,6361 2140,8148 2860,8148 3580,8148 3580,6361 Z M 8066,7523 L 8066,6898 5988,6898 3909,6898 3909,7523 3909,8148 5988,8148 8066,8148 8066,7523 Z M 1811,5200 L 1811,4574 1070,4574 329,4574 329,5200 329,5825 1070,5825 1811,5825 1811,5200 Z M 3580,3645 L 3580,3002 1955,3002 329,3002 329,3645 329,4288 1955,4288 3580,4288 3580,3645 Z M 7951,5676 C 7913,5643 7901,5180 7901,3745 L 7901,1858 6643,1858 C 5855,1858 5356,1844 5306,1821 5231,1786 5226,1738 5226,935 5226,322 5240,73 5276,42 5313,10 5887,0 7611,0 8868,0 9920,13 9949,29 9990,52 9998,645 9990,2879 L 9979,5700 8990,5710 C 8256,5717 7989,5708 7951,5676 L 7951,5676 Z M 9712,3645 L 9712,1858 8971,1858 8230,1858 8230,3645 8230,5432 8971,5432 9712,5432 9712,3645 Z M 9712,929 L 9712,285 7634,285 5556,285 5556,929 5556,1572 7634,1572 9712,1572 9712,929 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none" d="M 45334,409 C 45294,362 45282,-252 45282,-2371 45282,-5378 45271,-5249 45536,-5249 45611,-5249 46709,-4850 48241,-4267 49659,-3726 50846,-3284 50879,-3284 50949,-3284 55404,-4973 55404,-4999 55403,-5016 51194,-6686 50969,-6758 50871,-6789 50649,-6711 49083,-6093 48106,-5708 47263,-5392 47209,-5392 47155,-5392 47070,-5417 47020,-5448 46904,-5518 46892,-5747 47000,-5830 47082,-5893 50801,-7358 50879,-7358 50939,-7358 56248,-5270 56383,-5193 L 56476,-5141 56476,-2405 C 56476,-735 56460,356 56436,395 56391,469 50980,2652 50857,2645 50812,2643 49563,2153 48081,1555 46598,958 45362,442 45334,409 Z M 50591,82 C 50591,-1730 50593,-1773 50674,-1837 50719,-1872 50812,-1902 50879,-1902 50946,-1902 51039,-1872 51084,-1837 51165,-1773 51167,-1730 51167,85 L 51167,1942 51260,1922 C 51310,1911 52371,1491 53616,990 L 55879,79 55889,-2246 C 55897,-3800 55886,-4570 55858,-4570 55835,-4570 54725,-4152 53391,-3641 52057,-3130 50925,-2712 50876,-2712 50828,-2712 50470,-2834 50082,-2984 48081,-3756 45933,-4570 45898,-4570 45872,-4570 45862,-3728 45868,-2245 L 45879,80 48183,1007 C 49451,1517 50511,1934 50539,1934 50580,1935 50591,1540 50591,82 L 50591,82 Z"/>
                    <rect fill="none" stroke="none" x="0" y="0" width="10001" height="10008"/>
                </g>
            </svg>
        );
    }

}
interface SvgPatternProps {
    className?:string;
}
