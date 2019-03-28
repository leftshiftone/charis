import * as React from 'react';
import IIcon from "../api/IIcon";

export default class SvgInsight extends React.Component<SvgProps, {}> implements IIcon {

    public render() {
        const colour = this.props.colour;
        const radius = this.props.radius || 20;

        return(
            <svg style={{width:radius * 2, height: radius * 2}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g transform="translate(175.84693,142.01524)" style={{fill:colour}}>
                    <path d="m -128.54773,-42.04781 c -3.40576,-0.12872 -7.29562,-0.686375 -10.13476,-1.452937 -10.88613,-2.939232 -21.42191,-10.163453 -27.54477,-18.88702 -2.53886,-3.617241 -3.97075,-6.140755 -5.62299,-9.909764 -5.46022,-12.455488 -5.31665,-27.787129 0.37527,-40.072379 4.50224,-9.71752 10.86165,-16.95089 19.54971,-22.23639 8.92371,-5.42886 18.47364,-7.87441 28.64762,-7.33611 3.60646,0.19082 9.96847,1.29096 11.89147,2.05633 0.59457,0.23664 1.24272,0.4361 1.44033,0.44324 0.44048,0.0159 3.24481,1.20895 6.07187,2.58313 8.668977,4.21384 15.779115,10.76376 20.96639,19.3144 1.731676,2.85447 4.230007,8.63994 5.162587,11.95517 1.058219,3.76183 1.898071,9.791078 1.898071,13.62609 0,2.743409 -0.723641,9.096044 -1.330682,11.681616 -0.756655,3.222866 -2.36024,7.50283 -4.099751,10.942271 -3.653925,7.224702 -9.475699,13.944707 -16.118954,18.605935 -2.29039,1.60704 -8.972751,5.125098 -10.476481,5.515549 -0.44593,0.115787 -0.93239,0.311617 -1.08104,0.435195 -0.5718,0.475344 -6.91141,2.026765 -9.47343,2.318307 -3.13279,0.356505 -7.24444,0.526068 -10.12046,0.417367 z m 9.5039,-2.447106 c 6.26434,-0.87011 9.94237,-2.091835 16.03572,-5.326572 12.77268,-6.780564 21.77906,-19.120388 24.4987,-33.566192 0.503353,-2.673639 0.614477,-4.227665 0.623824,-8.724237 0.0072,-3.264301 -0.116181,-6.007945 -0.304844,-6.801958 -0.173913,-0.731946 -0.460544,-2.129305 -0.63697,-3.105245 -0.963939,-5.3324 -3.707368,-11.53827 -7.778793,-17.59635 -1.595087,-2.37341 -6.187946,-7.52151 -7.70665,-8.63834 -0.506631,-0.37255 -1.827238,-1.36375 -2.934684,-2.20264 -8.988893,-6.80909 -21.160733,-10.30952 -32.426443,-9.32534 -10.10978,0.8832 -18.92629,4.45195 -26.89932,10.8883 -8.24579,6.65654 -14.30818,16.85944 -16.58337,27.90946 -0.69843,3.392158 -1.00356,11.189437 -0.56128,14.343249 0.47711,3.402186 1.35232,7.875934 1.61162,8.237961 0.13331,0.186127 0.32786,0.737657 0.43235,1.22562 0.26011,1.214745 1.55477,4.204852 3.20121,7.393437 3.61034,6.99192 9.14257,13.238257 15.41508,17.40486 10.59897,7.040513 21.64813,9.601573 34.01385,7.883987 z m -12.07137,-29.171139 c -5.73054,-0.612056 -11.85544,-2.905527 -16.10851,-6.031831 -3.90187,-2.868149 -8.00375,-8.369431 -8.28639,-11.113365 -0.22905,-2.223679 0.48008,-1.65365 2.34728,1.886824 3.35483,6.361242 9.76343,10.853857 18.27048,12.808137 2.37174,0.544857 3.77896,0.677779 7.02026,0.663137 6.35827,-0.02873 10.47038,-1.200561 16.66589,-4.749306 3.08817,-1.76889 4.19389,-2.951522 4.44022,-4.749049 0.34225,-2.497393 2.28234,-3.881465 3.94833,-2.816744 2.34181,1.496618 1.11799,5.10865 -1.73579,5.123024 -0.33922,0.0022 -1.34646,0.608781 -2.23833,1.349031 -4.65604,3.864587 -10.06344,6.282307 -16.0805,7.189806 -2.44643,0.368968 -6.75578,0.599179 -8.24294,0.440336 z m 27.91894,-11.679191 c 0.0593,-0.559678 -0.0613,-0.815653 -0.43457,-0.922476 -0.69072,-0.197651 -1.40424,0.271411 -1.40424,0.923158 0,0.73958 0.27741,0.962715 1.07094,0.861448 0.51295,-0.0655 0.70645,-0.282712 0.76787,-0.86213 z m -22.00023,6.423199 c -1.12484,-1.230863 -1.21266,-2.432966 -0.26561,-3.635862 0.60565,-0.769267 0.78157,-0.824518 2.41279,-0.757755 l 1.7595,0.07198 0.99763,-1.254961 c 3.46129,-4.354127 3.44755,-9.980964 -0.0344,-14.092428 -0.93676,-1.106134 -2.08563,-2.038697 -3.46982,-2.816587 -2.18495,-1.22789 -2.59589,-2.00361 -1.15745,-2.18487 1.149,-0.14479 3.05229,1.02632 5.09503,3.13499 3.14481,3.246314 4.23386,6.793327 3.50054,11.401283 -0.35617,2.238053 -0.92972,3.455648 -2.79455,5.932575 -0.72164,0.95849 -1.47233,2.162437 -1.66821,2.675438 -0.46299,1.212543 -1.90871,2.531674 -2.77463,2.531674 -0.41519,0 -1.04136,-0.393312 -1.60081,-1.005513 z m 2.27122,-1.842594 c 0.0577,-0.647209 -0.0529,-0.977671 -0.37208,-1.1117 -0.92752,-0.389479 -1.59768,1.036587 -0.86427,1.839129 0.55666,0.609128 1.14821,0.261072 1.23635,-0.727429 z m -9.31741,1.04782 c -1.46668,-0.47018 -4.21127,-2.705852 -5.52539,-4.500842 -1.94376,-2.65504 -2.5761,-6.130204 -1.86355,-10.241623 0.36826,-2.124903 0.90594,-3.252375 2.50404,-5.250761 0.75482,-0.943903 1.59823,-2.274803 1.87423,-2.957543 1.23544,-3.05621 4.23185,-3.3601 5.08958,-0.51617 0.44536,1.47666 -0.0162,2.5733 -1.36287,3.237791 -0.99002,0.488522 -1.40598,0.489964 -2.47085,0.0089 -0.69076,-0.312251 -2.62175,1.779754 -3.48642,3.777145 -2.39894,5.541588 -0.39275,11.234797 5.065,14.373575 1.3345,0.767479 1.84423,1.222983 1.84423,1.648051 0,0.684899 -0.47365,0.804677 -1.668,0.421793 z m 0.45182,-22.777539 c 0,-0.7037 -0.11405,-0.85557 -0.64255,-0.85557 -0.35341,0 -0.80554,0.21487 -1.00471,0.4775 -0.3102,0.40898 -0.27426,0.55538 0.25037,1.02026 0.79879,0.70779 1.39689,0.43282 1.39689,-0.64219 z m 0.65503,14.428608 c -1.22937,-1.217953 -1.29469,-1.36203 -1.41026,-3.110354 -0.10626,-1.607521 -0.0341,-1.977272 0.58613,-3.002838 0.9005,-1.489017 2.1007,-2.175068 3.85014,-2.20081 1.07705,-0.01587 1.6036,0.150628 2.37521,0.750936 2.79575,2.175068 3.10026,5.026731 0.79196,7.416597 -0.99758,1.032831 -1.98473,1.423573 -3.59652,1.423573 -1.16238,0 -1.45071,-0.141809 -2.59666,-1.277104 z m 5.08801,-1.410496 c 1.04624,-1.225531 1.02835,-2.868674 -0.0455,-4.183625 -0.68522,-0.839026 -0.95255,-0.962056 -2.0365,-0.937209 -1.6942,0.0389 -2.85023,1.193407 -2.85023,2.846633 0,3.03912 3.07059,4.454925 4.93226,2.274201 z m 24.30894,-2.265997 c -0.28833,-0.447311 -0.84095,-1.501189 -1.22803,-2.341947 -2.65496,-5.766869 -9.31719,-10.686228 -17.26194,-12.746148 -2.6965,-0.69914 -3.59533,-0.79067 -7.77836,-0.79195 -4.00012,-10e-4 -5.16721,0.10663 -7.56729,0.6993 -4.40615,1.08807 -7.88241,2.67909 -11.14512,5.10092 -2.24218,1.6643 -2.63817,2.215471 -2.63817,3.672029 0,1.425742 -1.02786,2.906421 -2.25076,3.242282 -1.66583,0.457516 -3.42629,-1.881604 -2.82847,-3.758167 0.35,-1.098667 0.81992,-1.465264 2.25392,-1.758424 0.67264,-0.13751 1.7762,-0.68566 2.45234,-1.21812 4.0605,-3.19763 7.27604,-4.86541 13.16239,-6.82686 2.68456,-0.89456 2.87702,-0.91613 8.02064,-0.89895 3.33438,0.0112 6.44317,0.19657 8.46387,0.50484 4.22062,0.64389 7.87916,0.25124 11.92634,-1.28001 2.06464,-0.78115 2.85219,-1.35674 2.85219,-2.08456 0,-0.3211 0.43981,-1.11651 0.97737,-1.76761 0.78423,-0.94987 1.16333,-1.18379 1.91852,-1.18379 1.78117,0 3.081324,2.41819 2.23287,4.15298 -0.43571,0.89089 -1.34148,1.26512 -3.23694,1.33738 -1.13543,0.0433 -2.33014,0.32627 -3.37825,0.80017 -0.89185,0.40326 -2.80733,1.0422 -4.2566,1.41987 -1.44927,0.37766 -2.63504,0.77715 -2.63504,0.88776 0,0.11066 0.63849,0.51486 1.41887,0.89833 1.12968,0.55513 1.85953,0.6925 3.58095,0.67399 2.58323,-0.0277 7.0577,-1.20323 9.497048,-2.49491 1.459558,-0.77288 1.680788,-1.003 1.836301,-1.9101 0.244628,-1.42691 1.172738,-2.49818 2.340442,-2.70147 0.825454,-0.1437 1.120097,-0.0264 1.959387,0.77996 1.292848,1.24215 1.36199,2.59406 0.197846,3.86796 -0.704826,0.77126 -0.974317,0.86515 -2.499907,0.87094 -1.144782,0.004 -2.111867,0.20838 -2.926089,0.61734 -1.588005,0.7976 -4.210298,1.69729 -6.844358,2.34821 -1.16314,0.28744 -2.19031,0.60524 -2.2826,0.70622 -0.0923,0.10105 0.68721,1.14458 1.73224,2.31906 3.17942,3.573381 5.23263,7.002628 5.23263,8.739517 0,1.182118 -0.58038,1.237536 -1.29824,0.123958 z m -49.64586,-5.844865 c 0,-0.743581 -0.1062,-0.883165 -0.67195,-0.883165 -0.77,0 -1.05168,0.809606 -0.52383,1.505582 0.54287,0.715783 1.19578,0.375932 1.19578,-0.622417 z m 57.255527,-11.33382 c 0.420584,-0.50854 0.415242,-0.57736 -0.08318,-1.07095 -0.66916,-0.66267 -1.363556,-0.39746 -1.363556,0.52077 0,1.21151 0.68451,1.47183 1.446733,0.55018 z m -7.488877,-3.15701 c 0.20106,-0.57335 -0.36661,-1.32705 -0.99951,-1.32705 -0.51501,0 -0.94928,0.96787 -0.66227,1.47604 0.26088,0.46189 1.48608,0.35205 1.66178,-0.14899 z" />
                </g>
            </svg>
        );
    }

}
interface SvgProps {
    colour?:string;
    radius?:number;
}
