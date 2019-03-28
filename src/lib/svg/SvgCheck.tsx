import * as React from 'react';
import IIcon from "../api/IIcon";

export default class SvgCheck extends React.Component<SvgProps, {}> implements IIcon {

    public render() {
        const colour = this.props.colour;
        const radius = this.props.radius || 20;

        return(
            <svg style={{width:radius * 2, height: radius * 2}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g transform="translate(171.55437,-43.723693)" style={{fill:colour}}>
                    <path d="m -128.25056,143.63728 c -5.73946,-1.17298 -7.34526,-1.56801 -9.61415,-2.36518 -9.48954,-3.3341 -17.73135,-9.30275 -23.61321,-17.10046 -4.90281,-6.49977 -8.56744,-14.92337 -9.71886,-22.34 -0.47995,-3.09151 -0.47593,-12.990805 0.007,-16.157578 0.6971,-4.575324 3.18794,-11.860628 5.19329,-15.189503 0.37478,-0.622119 1.30024,-2.180997 2.0566,-3.464177 5.65731,-9.597805 16.03758,-17.583818 27.55473,-21.199091 5.18719,-1.628281 9.69225,-2.225874 15.64328,-2.075095 9.59341,0.243085 15.67491,1.89615 23.84865,6.482517 7.730785,4.337809 13.392807,9.839314 18.126189,17.612302 3.211156,5.273249 5.210636,10.404514 6.483052,16.637459 0.97253,4.763969 0.973312,13.735361 0.0015,18.647346 -3.900155,19.71568 -18.721122,35.03273 -38.366481,39.65064 -3.11981,0.73336 -4.35614,0.8452 -10.20577,0.92322 -3.66078,0.0488 -6.98874,0.0208 -7.39551,-0.0624 z m 12.33532,-2.86556 c 7.54812,-1.05822 12.26184,-2.63032 18.091529,-6.03382 10.668981,-6.22878 18.043162,-15.4768 21.761022,-27.29069 2.595394,-8.247123 2.544739,-19.492943 -0.125209,-27.796196 -2.039512,-6.342683 -5.939729,-13.094998 -10.341502,-17.903892 -6.638278,-7.252276 -16.95785,-12.933911 -26.48645,-14.582628 -3.13653,-0.542712 -14.08578,-0.547011 -17.15754,-0.0073 -10.84355,1.90718 -22.30366,8.772421 -28.74295,17.218611 -4.93264,6.46996 -7.77753,12.659922 -9.63982,20.974535 -0.4237,1.891705 -0.42733,14.89087 -0.004,16.80539 1.84931,8.37719 4.55728,14.30803 9.50198,20.81072 6.45288,8.48607 17.35383,15.23014 27.71141,17.1442 6.87137,1.2698 10.10054,1.40802 15.43222,0.66053 z m -10.26118,-23.98885 c -0.24217,-0.10383 -1.30712,-0.92039 -2.36655,-1.81468 -1.05944,-0.8943 -2.79151,-2.35315 -3.84907,-3.24189 -1.05755,-0.88875 -2.78811,-2.34329 -3.84566,-3.23231 -5.83272,-4.90322 -7.09181,-6.08515 -6.87919,-6.45766 1.11627,-1.95564 3.7544,-5.326297 4.02838,-5.146936 0.31695,0.207503 1.67372,1.338964 9.30755,7.761846 l 3.15741,2.65657 0.88746,-1.05771 c 0.4881,-0.58174 1.63319,-1.99533 2.54464,-3.14133 1.61222,-2.02709 7.19489,-8.992836 10.60582,-13.233361 1.5652,-1.945876 6.26454,-7.818781 10.03898,-12.545996 0.87704,-1.098432 1.714,-1.997141 1.85993,-1.997141 0.60118,0 4.697117,4.061488 4.61655,4.57773 -0.06876,0.440524 -4.7345,6.465478 -10.32638,13.334645 -0.58962,0.724283 -2.64004,3.280199 -4.55649,5.679827 -1.91646,2.399616 -4.24399,5.308246 -5.17229,6.463606 -0.92829,1.15538 -2.32545,2.90056 -3.1048,3.87817 -0.77934,0.97763 -2.19789,2.74227 -3.15231,3.92141 -0.95443,1.17916 -2.00928,2.52439 -2.3441,2.98943 -0.63337,0.87968 -0.72318,0.9172 -1.44988,0.60578 z" />
                </g>
            </svg>
        );
    }

}
interface SvgProps {
    colour?:string;
    radius?:number;
}
