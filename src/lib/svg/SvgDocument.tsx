import * as React from 'react';
import IIcon from "../api/IIcon";

export default class SvgDocument extends React.Component<SvgProps, {}> implements IIcon {

    public render() {
        const colour = this.props.colour;
        const radius = this.props.radius || 20;

        return(
            <svg style={{width:radius * 2, height: radius * 2}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g transform="translate(169.3233,18.824169)" style={{fill:colour}}>
                    <path d="m -121.1785,81.141364 c -0.51788,-0.0577 -2.45484,-0.251414 -4.30436,-0.430508 -6.33287,-0.613215 -10.86894,-2.032403 -17.35194,-5.428883 -7.31611,-3.832936 -12.93959,-8.799237 -17.64126,-15.579657 -4.71997,-6.806814 -7.73732,-14.515334 -8.57496,-21.906746 -0.36215,-3.195662 -0.36325,-10.335849 -0.002,-13.54652 0.2758,-2.451749 1.70224,-8.664959 2.12415,-9.252225 0.11855,-0.165042 0.37155,-0.829542 0.56221,-1.476677 0.31713,-1.076476 2.57156,-5.8102406 3.68197,-7.7312559 1.10832,-1.917402 4.20385,-6.24220458 5.66774,-7.9184652 5.55762,-6.3639093 14.05426,-11.9082939 22.38743,-14.6086769 5.33211,-1.727891 7.93307,-2.084823 15.19976,-2.085912 5.8997,-8.89e-4 7.10546,0.08083 9.81932,0.665101 18.979009,4.086374 33.319483,17.50269613 38.577584,36.091518 0.736553,2.603938 1.040356,4.389162 1.523529,8.952827 0.665674,6.287398 -0.50056,15.264751 -2.768288,21.309684 -2.591826,6.908818 -7.844498,14.88395 -12.745954,19.352181 -6.673129,6.083311 -15.868171,10.941115 -23.779811,12.563044 -2.77368,0.568622 -10.64178,1.22424 -12.37502,1.031171 z m 7.14962,-3.065742 c 4.42492,-0.459958 10.39433,-2.064866 13.953,-3.751344 11.298879,-5.354617 18.835333,-12.849768 24.019474,-23.887807 3.462767,-7.372912 4.760409,-15.865247 3.842991,-25.150169 -1.075832,-10.888173 -7.887813,-23.4174862 -16.562987,-30.464396 -4.933291,-4.0073496 -10.572897,-7.111681 -15.991738,-8.802695 -0.96176,-0.300131 -2.17236,-0.684668 -2.69022,-0.854534 -1.5866,-0.520428 -9.40759,-1.50108 -11.9715,-1.50108 -3.54511,0 -10.6142,1.058554 -13.72013,2.054527 -10.02909,3.215974 -18.16403,8.8129448 -23.87703,16.4277654 -4.84476,6.457553 -7.51862,12.2920516 -9.12203,19.9047266 -0.5391,2.559512 -0.61956,3.724684 -0.61956,8.971694 0,5.24701 0.0804,6.412182 0.61956,8.971694 1.43513,6.813673 3.63615,11.985261 7.63671,17.943388 6.21098,9.250168 16.31632,16.201466 27.78355,19.11185 4.91413,1.247221 10.9856,1.620373 16.69991,1.02638 z m 2.53518,-23.821634 c -6.40319,-2.059775 -11.11337,-3.523366 -11.33898,-3.523366 -0.13544,0 -0.69436,-0.20472 -1.24205,-0.454934 -1.57948,-0.721601 -0.63924,-1.007335 3.29976,-1.002788 3.09215,0.0033 3.82452,0.10773 6.32202,0.89915 6.50485,2.061308 6.05766,1.985141 6.30247,1.07334 0.26189,-0.975439 6.00343,-25.857261 6.601,-28.606473 0.28132,-1.29427 0.70472,-3.203457 0.94085,-4.242633 0.48404,-2.130026 0.46483,-2.168649 -1.33477,-2.684351 -3.95258,-1.132642 -6.7734,-2.157032 -7.06185,-2.564537 -0.27014,-0.381646 -0.33627,2.894008 -0.33627,16.656677 0,18.098935 -0.0243,18.47609 -1.22265,18.978907 -0.23952,0.100503 -6.22769,0.182718 -13.30703,0.182718 h -12.87155 l -0.55757,-0.775055 c -0.54942,-0.763725 -0.55743,-1.018386 -0.54839,-17.428619 l 0.009,-16.653565 2.03634,-2.353235 c 1.11999,-1.294281 2.69821,-3.1143596 3.50716,-4.0446162 l 1.47081,-1.6913918 h 10.1621 c 11.80107,0 11.01232,-0.2156375 11.25403,3.0768486 0.0993,1.3526154 0.23096,1.8535644 0.44084,1.6772834 0.28456,-0.239007 10.124198,2.734904 10.885977,3.29014 0.676554,0.493123 0.825857,1.562294 0.423376,3.031811 -0.214733,0.784005 -0.919248,3.808111 -1.565603,6.720241 -0.646345,2.912119 -1.61051,7.147936 -2.14259,9.412919 -0.53207,2.264995 -1.75625,7.647973 -2.72039,11.962192 -1.86501,8.345349 -2.14442,9.371117 -2.64791,9.721178 -0.57293,0.398333 -2.1549,0.179616 -4.75832,-0.657841 z m -0.60328,-26.835069 0.0692,-18.4581559 h -8.47623 -8.47622 v 2.6282299 c 0,1.445536 -0.11088,2.947106 -0.24639,3.336834 -0.24403,0.701823 -1.49896,1.482681 -2.2097,1.374951 -0.20275,-0.03069 -1.12528,-0.04013 -2.05003,-0.02101 l -1.6814,0.03491 v 14.857934 14.857934 l 11.50071,-0.07671 11.50071,-0.07671 z m -20.98577,10.345366 c -0.63206,-0.402536 -0.60167,-1.644064 0.0496,-2.025165 0.32891,-0.192468 3.82724,-0.304501 9.5086,-0.304501 8.366,0 9.01906,0.03724 9.43347,0.537927 0.57058,0.689393 0.56101,1.021232 -0.0468,1.62264 -0.43753,0.432943 -1.48697,0.48583 -9.48304,0.477869 -5.60483,-0.0056 -9.16837,-0.12186 -9.46186,-0.30877 z m -0.0255,-5.809139 c -0.24488,-0.295862 -0.44523,-0.732685 -0.44523,-0.970703 0,-1.09075 0.41917,-1.138756 9.94292,-1.138756 9.12975,0 9.30357,0.01112 9.64726,0.612804 0.29348,0.513812 0.2812,0.727615 -0.076,1.323687 l -0.426,0.710906 h -9.09886 c -8.47318,0 -9.12947,-0.03702 -9.54409,-0.537938 z m -0.23468,-5.809217 c -0.22469,-0.539206 -0.234,-0.900328 -0.0322,-1.250156 0.2547,-0.44167 1.22643,-0.499837 9.5106,-0.569378 8.30012,-0.06971 9.27672,-0.02813 9.72284,0.413276 0.62584,0.619285 0.62687,1.061255 0.004,1.677661 -0.4376,0.43301 -1.50871,0.486819 -9.69058,0.486819 h -9.1986 l -0.31596,-0.758222 z m 0.2122,-5.292948 c -0.50347,-0.550512 -0.54673,-1.343599 -0.1,-1.832153 0.2387,-0.261008 2.75986,-0.352984 9.67534,-0.352984 9.17831,0 9.35805,0.01134 9.65012,0.608034 0.2315,0.472977 0.20235,0.766994 -0.13125,1.323687 l -0.42886,0.715664 h -9.12134 c -7.93343,0 -9.1764,-0.06015 -9.54409,-0.462248 z m 1.49474,-8.141752 c 0.0189,-0.202241 0.0629,-0.665524 0.0978,-1.029548 0.0349,-0.364014 0.0432,-0.661844 0.0184,-0.661844 -0.0247,0 -0.45567,0.463294 -0.95761,1.029537 l -0.91262,1.029537 h 0.85984 c 0.49022,0 0.8746,-0.158059 0.89418,-0.367682 z" />
                </g>
            </svg>
        );
    }

}
interface SvgProps {
    colour?:string;
    radius?:number;
}
