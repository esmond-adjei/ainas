import { cn } from "@/lib/utils";
import React from "react";

const CustomIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 105 105"
    {...props}
    >
  <g>
    <path xmlns="http://www.w3.org/2000/svg" d="M51.262,48.586h6.804c0.063-1.865,0.229-3.707,0.511-5.513c-2.378,0.487-4.821,0.778-7.314,0.878V48.586z"></path>

    <path xmlns="http://www.w3.org/2000/svg" d="M51.262,51.305v4.939c2.497,0.1,4.94,0.393,7.317,0.879c-0.294-1.902-0.464-3.846-0.518-5.818H51.262z"></path>

    <path xmlns="http://www.w3.org/2000/svg" d="M47.974,41.245V27.327c-3.766,0.331-7.264,1.572-10.282,3.505c1.416,3.037,2.514,6.252,3.235,9.605  C43.217,40.897,45.57,41.167,47.974,41.245z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M39.21,48.586c-0.073-1.999-0.28-3.965-0.614-5.89c-3.091-0.751-6.06-1.823-8.871-3.17c-1.432,2.742-2.324,5.807-2.537,9.06  H39.21z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M47.974,48.586v-4.623c-2.217-0.07-4.393-0.295-6.52-0.67c0.26,1.734,0.42,3.502,0.48,5.293H47.974z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M37.976,39.727c-0.625-2.519-1.492-4.936-2.537-7.259c-1.643,1.358-3.089,2.94-4.297,4.702  C33.33,38.2,35.605,39.073,37.976,39.727z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M31.141,63.027c1.208,1.756,2.651,3.338,4.291,4.693c1.048-2.316,1.913-4.734,2.537-7.248  C35.602,61.125,33.328,61.998,31.141,63.027z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M39.217,51.305H27.166c0.175,3.367,1.083,6.539,2.561,9.365c2.811-1.346,5.776-2.416,8.867-3.168  C38.947,55.482,39.157,53.41,39.217,51.305z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M68.561,63.445c-2.063-1.031-4.213-1.92-6.446-2.611c0.614,2.387,1.449,4.684,2.447,6.893  C66.07,66.479,67.412,65.041,68.561,63.445z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M68.561,36.75c-1.148-1.592-2.494-3.037-4.006-4.287c-0.998,2.211-1.833,4.514-2.447,6.904  C64.345,38.674,66.494,37.784,68.561,36.75z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M51.262,41.235c2.697-0.117,5.328-0.484,7.875-1.077c0.721-3.251,1.796-6.371,3.175-9.325  c-3.222-2.063-6.994-3.342-11.05-3.565V41.235z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M47.974,51.305h-6.036c-0.05,1.898-0.21,3.768-0.487,5.602c2.13-0.377,4.306-0.602,6.523-0.672V51.305z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M47.974,58.951c-2.404,0.08-4.76,0.35-7.05,0.809c-0.725,3.352-1.823,6.566-3.238,9.6c3.018,1.938,6.52,3.178,10.289,3.51  V58.951z"></path>

    <path xmlns="http://www.w3.org/2000/svg" d="M60.789,48.586H72.81c-0.224-3.437-1.201-6.664-2.78-9.52c-2.714,1.373-5.578,2.491-8.569,3.309  C61.093,44.403,60.862,46.477,60.789,48.586z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M59.144,60.039c-2.551-0.592-5.185-0.961-7.882-1.076v13.965c4.06-0.223,7.835-1.504,11.057-3.57  C60.942,66.408,59.868,63.287,59.144,60.039z"></path>

    <path xmlns="http://www.w3.org/2000/svg" d="M60.782,51.305c0.066,2.217,0.294,4.395,0.685,6.518c2.984,0.82,5.852,1.934,8.562,3.311  c1.622-2.941,2.62-6.277,2.804-9.828H60.782z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M49.917,13.173c2.229,0,4.032-1.81,4.032-4.04s-1.803-4.036-4.032-4.036c-2.23,0-4.037,1.806-4.037,4.036  S47.687,13.173,49.917,13.173z"></path>
    <circle xmlns="http://www.w3.org/2000/svg" cx="25.743" cy="17.026" r="4.039"></circle><circle xmlns="http://www.w3.org/2000/svg" cx="10.885" cy="37.66" r="4.037"></circle><circle xmlns="http://www.w3.org/2000/svg" cx="11.063" cy="63.087" r="4.037"></circle><path xmlns="http://www.w3.org/2000/svg" d="M28.547,80.215c-1.819-1.291-4.339-0.859-5.63,0.959c-1.29,1.82-0.863,4.336,0.957,5.629  c1.819,1.287,4.338,0.861,5.63-0.959C30.792,84.025,30.367,81.504,28.547,80.215z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M50.434,87.021c-2.229,0.031-4.009,1.867-3.979,4.098c0.03,2.227,1.863,4.008,4.093,3.979  c2.229-0.033,4.012-1.865,3.979-4.096C54.497,88.771,52.663,86.988,50.434,87.021z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M72.122,79.605c-1.782,1.338-2.14,3.871-0.798,5.654c1.339,1.779,3.869,2.141,5.652,0.799  c1.782-1.346,2.14-3.873,0.798-5.656C76.432,78.619,73.901,78.26,72.122,79.605z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M90.289,58.127c-2.137-0.645-4.394,0.559-5.034,2.691c-0.651,2.133,0.558,4.389,2.69,5.037  c2.134,0.643,4.387-0.559,5.031-2.695C93.627,61.029,92.422,58.775,90.289,58.127z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M89.915,40.379c2.104-0.736,3.215-3.037,2.477-5.145c-0.737-2.104-3.041-3.213-5.144-2.477  c-2.106,0.738-3.218,3.039-2.478,5.141C85.505,40.006,87.809,41.114,89.915,40.379z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M70.857,19.685c1.839,1.267,4.353,0.801,5.618-1.035c1.262-1.836,0.801-4.35-1.035-5.613  c-1.839-1.265-4.353-0.801-5.618,1.035C68.561,15.907,69.018,18.424,70.857,19.685z"></path>

    <path xmlns="http://www.w3.org/2000/svg" d="M85.448,43.18l-0.938-2.686l-3.608-1.16l-0.051-0.14l2.1-3.159l-0.935-2.683c-0.483-1.38-1.996-2.108-3.378-1.624  l-6.966,2.436c3.073,4.189,4.958,9.288,5.183,14.825l6.971-2.437C85.205,46.07,85.933,44.559,85.448,43.18z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M71.022,33.295l4.178-6.068c0.831-1.205,0.527-2.854-0.675-3.682l-2.347-1.614l-3.599,1.195l-0.123-0.085L68.29,19.25  l-2.34-1.611c-1.205-0.831-2.854-0.526-3.686,0.679l-4.17,6.053C63.251,26.011,67.726,29.161,71.022,33.295z"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M49.913,23.103c2.733,0,5.369,0.414,7.854,1.169V16.92c0-1.462-1.185-2.649-2.647-2.649h-2.84l-2.291,3.028H49.84  l-2.287-3.028h-2.841c-1.465,0-2.65,1.187-2.65,2.649v7.351C44.547,23.517,47.181,23.103,49.913,23.103z"></path>

    <path xmlns="http://www.w3.org/2000/svg" d="M28.352,33.905c3.186-4.235,7.577-7.495,12.677-9.274l-4.348-5.953c-0.864-1.182-2.523-1.438-3.703-0.576l-2.293,1.678  l-0.063,3.792l-0.12,0.09l-3.635-1.095l-2.293,1.676c-1.18,0.865-1.439,2.524-0.574,3.706L28.352,33.905z"></path>

    <path xmlns="http://www.w3.org/2000/svg" d="M27.701,34.776l-7.011-2.234c-1.396-0.445-2.884,0.326-3.328,1.719l-0.865,2.706l2.19,3.103l-0.047,0.141l-3.579,1.262  l-0.863,2.707c-0.444,1.395,0.325,2.883,1.721,3.33l7.016,2.236C23.008,44.188,24.753,39.039,27.701,34.776z"></path>

    <path xmlns="http://www.w3.org/2000/svg" d="M22.954,50.831l-6.995,2.337c-1.389,0.463-2.136,1.965-1.672,3.354l0.899,2.695l3.597,1.211l0.045,0.143l-2.145,3.127  l0.901,2.697c0.464,1.387,1.966,2.135,3.353,1.67l6.99-2.334C24.918,61.502,23.104,56.379,22.954,50.831z"></path>

    <path xmlns="http://www.w3.org/2000/svg" d="M28.58,66.602l-4.269,6.014c-0.848,1.191-0.566,2.848,0.627,3.691l2.317,1.643l3.619-1.139l0.12,0.084l0.117,3.791  l2.317,1.646c1.193,0.846,2.848,0.564,3.693-0.627l4.261-6.006C36.254,73.99,31.821,70.785,28.58,66.602z"></path>

    <path xmlns="http://www.w3.org/2000/svg" d="M49.913,77.098c-2.601,0-5.107-0.389-7.487-1.074l0.103,7.359c0.02,1.463,1.222,2.635,2.684,2.611l2.844-0.037l2.247-3.057  h0.146l2.334,2.99l2.838-0.039c1.465-0.021,2.633-1.223,2.61-2.688l-0.101-7.35C55.54,76.643,52.78,77.098,49.913,77.098z"></path>

    <path xmlns="http://www.w3.org/2000/svg" d="M71.707,65.99c-3.13,4.285-7.481,7.6-12.551,9.451l4.434,5.889c0.881,1.17,2.54,1.406,3.709,0.525l2.273-1.707l0.01-3.799  l0.117-0.082l3.651,1.037l2.267-1.709c1.169-0.879,1.402-2.541,0.524-3.709L71.707,65.99z"></path>

    <path xmlns="http://www.w3.org/2000/svg" d="M83.946,52.213l-7.035-2.132c0,0.006,0.002,0.012,0.002,0.018c0,5.558-1.683,10.72-4.561,15.013l7.034,2.133  c1.401,0.426,2.877-0.365,3.301-1.764l0.828-2.721l-2.233-3.068l0.044-0.143l3.562-1.311l0.821-2.721  C86.137,54.119,85.345,52.641,83.946,52.213z"></path>

    </g>
</svg>
);

export function Logo(
  {theme = "primary", size = "medium"}:
  {theme?: "primary" | "secondary" | "white" | "black", size?: "large" | "medium" | "small"}
) {
  const colorVariable = 
    theme === "white" ? "white" : 
    theme === "black" ? "black" : 
    theme === "secondary" ? "var(--secondary-color)" : 
    "var(--primary-color)";

  const childTextColorClass = {
    white: "[&>*]:text-white",
    black: "[&>*]:text-black",
    secondary: "[&>*]:text-secondary",
    primary: "[&>*]:text-primary"
  }[theme];

  return (
    <div className="hcc gap-1">
      <CustomIcon
        className={cn("inline-block",
          size === "large" ? "size-24" :
          size === "medium" ? "size-12" :
          size === "small" ? "size-8" : ""
        )}
        style={{ fill: colorVariable }}
      />
      <div className={cn(childTextColorClass)}>
        <h1 className={cn("font-heading font-bold font-serif tracking-widest",
          size === "large" ? "text-5xl" :
          size === "medium" ? "text-3xl leading-6" :
          size === "small" ? "text-xl leading-4" : ""
        )}>
          AINAS
        </h1>
        <p className={cn(
          size === "large" ? "text-lg leading-4" :
          size === "medium" ? "text-xs leading-3" :
          size === "small" ? "text-[0.5rem] leading-none" : "",
        )}>
          African Initiative for <br /> Nature-Based Solutions
        </p>
      </div>
    </div>
  );
}
