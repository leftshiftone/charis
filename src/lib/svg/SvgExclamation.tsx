import * as React from 'react';
import IIcon from "../api/IIcon";

export default class SvgExclamation extends React.Component<SvgProps, {}> implements IIcon {

    public render() {
        const colour = this.props.colour;
        const radius = this.props.radius || 20;

        return(
            <svg style={{width:radius * 2, height: radius * 2}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g transform="translate(69.689285,-98.847635)" style={{fill:colour}}>
                    <path d="m -27.558484,198.5323 c -2.203475,-0.30989 -7.602456,-1.79285 -10.345873,-2.84174 -0.954444,-0.36491 -3.360681,-1.53201 -5.347194,-2.59354 -10.266051,-5.48588 -17.426448,-13.22652 -22.271887,-24.07669 -2.953731,-6.61418 -4.165847,-12.42831 -4.165847,-19.98222 0,-20.98293 12.00693,-38.69604 31.780276,-46.88353 8.985148,-3.72047 22.108084,-4.378271 31.5842647,-1.58321 12.4095294,3.66027 23.0574743,11.71133 29.1202733,22.01823 0.444111,0.75501 1.133766,1.9178 1.532573,2.58398 1.615351,2.69835 3.818581,8.53706 4.844814,12.8391 0.653979,2.74148 1.285389,10.01691 1.10726,12.75835 -0.478315,7.36176 -1.729477,12.70098 -4.314266,18.41079 -5.020645,11.09068 -12.253624,18.77088 -22.8087506,24.21909 -5.2232725,2.69606 -10.2850833,4.39328 -15.3649224,5.15181 -2.698391,0.40292 -12.432567,0.38997 -15.350721,-0.0204 z m 12.936932,-2.54848 c 11.2502485,-1.14046 22.7512629,-7.03089 30.204852,-15.46989 3.686516,-4.17388 5.700004,-7.33801 8.136106,-12.7856 1.747025,-3.90667 2.908693,-7.7484 3.467187,-11.46635 0.473932,-3.15497 0.478829,-11.45362 0.0089,-14.51954 -0.382864,-2.49618 -1.73462,-8.00926 -2.102435,-8.5747 -0.115565,-0.17765 -0.389212,-0.83171 -0.608116,-1.45349 -0.752554,-2.13758 -3.351254,-6.94885 -5.331185,-9.87025 -7.034914,-10.37998 -19.92728851,-18.2788 -32.383662,-19.84062 -3.338827,-0.41862 -9.884258,-0.41689 -13.05831,0.004 -2.693794,0.35675 -8.053974,1.66689 -9.732881,2.3789 -5.139758,2.17976 -8.541081,4.05085 -12.397157,6.81977 -7.777974,5.5851 -14.313198,15.19847 -17.112507,25.17264 -2.151454,7.66585 -2.03918,18.67706 0.266351,26.12053 3.745107,12.09124 11.638691,21.72464 22.89714,27.9439 8.552192,4.72428 17.727918,6.55681 27.746026,5.54123 z M -22.785191,172.089 c -2.212199,-0.70884 -3.790769,-2.81978 -3.790769,-5.06919 0,-4.42375 4.761524,-6.71776 7.915606,-3.81358 1.023356,0.94228 1.682879,3.20519 1.405584,4.82269 -0.446409,2.60388 -3.372038,4.75168 -5.530421,4.06008 z m 2.920252,-1.8129 c 1.203503,-0.83383 1.640775,-1.92761 1.484066,-3.71226 -0.215423,-2.45324 -1.158912,-3.35745 -3.503277,-3.35745 -1.64699,0 -1.85669,0.0835 -2.649829,1.05484 -0.677384,0.82959 -0.861292,1.36087 -0.861292,2.48802 0,2.03007 0.532434,3.07973 1.912593,3.77052 1.269581,0.63542 2.465129,0.5549 3.617739,-0.24367 z m -3.426513,-14.53843 c -0.539094,-0.4132 -0.653399,-0.73834 -0.539395,-1.53424 0.792671,-5.53352 1.434021,-9.65915 1.688445,-10.86131 0.169182,-0.79942 0.562812,-3.19766 0.874724,-5.32944 1.958355,-13.38442 2.081785,-13.94802 3.15223,-14.39337 0.400513,-0.16663 1.900277,-0.30296 3.332825,-0.30296 2.076051,0 2.738832,0.11891 3.266022,0.58606 0.652785,0.57843 0.655473,0.61318 0.205862,2.66473 -0.250553,1.14325 -0.810052,3.82283 -1.24333,5.9546 -0.433279,2.13178 -1.101615,5.32945 -1.485194,7.10592 -0.816142,3.77986 -1.950166,9.28873 -2.647307,12.86009 -0.434472,2.22572 -0.603286,2.59796 -1.42764,3.14801 -1.206191,0.80481 -4.183685,0.86342 -5.177242,0.10193 z" />
                </g>
            </svg>
        );
    }

}
interface SvgProps {
    colour?:string;
    radius?:number;
}
