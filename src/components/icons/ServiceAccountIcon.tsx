import React from "react";
import { IconProps } from "~~/types";

const ServiceAccountIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_83946_436)">
        <path
          opacity="0.4"
          d="M15.9076 9.70497L15.2626 9.33247C15.3276 8.98045 15.3276 8.6195 15.2626 8.26747L15.9076 7.89497C15.9436 7.87438 15.9714 7.84203 15.9865 7.80334C16.0015 7.76466 16.0028 7.72198 15.9901 7.68247C15.8239 7.14824 15.5403 6.65793 15.1601 6.24747C15.1321 6.21696 15.0946 6.19687 15.0537 6.19051C15.0128 6.18415 14.971 6.19189 14.9351 6.21247L14.2901 6.58497C14.0176 6.35269 13.705 6.17222 13.3676 6.05247V5.30747C13.3675 5.2661 13.3534 5.22596 13.3275 5.1937C13.3016 5.16143 13.2655 5.13895 13.2251 5.12997C12.6802 5.00746 12.1149 5.00746 11.5701 5.12997C11.5297 5.13895 11.4935 5.16143 11.4676 5.1937C11.4417 5.22596 11.4276 5.2661 11.4276 5.30747V6.05247C11.0902 6.17222 10.7775 6.35269 10.5051 6.58497L9.86006 6.21247C9.82413 6.19198 9.78231 6.18429 9.74144 6.19065C9.70057 6.19701 9.66307 6.21704 9.63506 6.24747C9.25486 6.65793 8.97127 7.14824 8.80506 7.68247C8.79298 7.72201 8.79454 7.76447 8.8095 7.80301C8.82447 7.84156 8.85196 7.87395 8.88756 7.89497L9.53256 8.26747C9.46756 8.6195 9.46756 8.98045 9.53256 9.33247L8.88756 9.70497C8.85153 9.72557 8.82368 9.75792 8.80866 9.7966C8.79364 9.83529 8.79237 9.87796 8.80506 9.91747C8.97185 10.4515 9.25537 10.9416 9.63506 11.3525C9.66302 11.383 9.70053 11.4031 9.74142 11.4094C9.78232 11.4158 9.82416 11.4081 9.86006 11.3875L10.5051 11.015C10.7775 11.2473 11.0902 11.4277 11.4276 11.5475V12.2925C11.4276 12.3339 11.4417 12.374 11.4676 12.4062C11.4935 12.4385 11.5297 12.461 11.5701 12.47C12.1149 12.5925 12.6802 12.5925 13.2251 12.47C13.2655 12.461 13.3016 12.4385 13.3275 12.4062C13.3534 12.374 13.3675 12.3339 13.3676 12.2925V11.5475C13.705 11.4277 14.0176 11.2473 14.2901 11.015L14.9351 11.3875C14.971 11.408 15.0128 11.4157 15.0537 11.4093C15.0945 11.4029 15.1321 11.3829 15.1601 11.3525C15.5403 10.942 15.8239 10.4517 15.9901 9.91747C16.0021 9.87793 16.0006 9.83548 15.9856 9.79693C15.9707 9.75839 15.9432 9.726 15.9076 9.70497ZM12.4001 10.0125C12.1603 10.0125 11.9258 9.94136 11.7264 9.80813C11.527 9.6749 11.3716 9.48553 11.2799 9.26398C11.1881 9.04242 11.1641 8.79863 11.2109 8.56343C11.2576 8.32822 11.3731 8.11218 11.5427 7.94261C11.7123 7.77304 11.9283 7.65756 12.1635 7.61077C12.3987 7.56399 12.6425 7.588 12.8641 7.67977C13.0856 7.77154 13.275 7.92695 13.4082 8.12634C13.5415 8.32574 13.6126 8.56016 13.6126 8.79997C13.6122 9.12145 13.4844 9.42966 13.2571 9.65698C13.0297 9.88429 12.7215 10.0121 12.4001 10.0125Z"
          fill="#213F7D"
        />
        <path
          d="M10.63 12.2925V12.0625C10.5725 12.0325 10.515 11.9975 10.46 11.965L10.2625 12.08C10.0697 12.1919 9.84461 12.2348 9.62421 12.2016C9.40382 12.1684 9.20129 12.0612 9.05 11.8975C8.58975 11.3995 8.24641 10.805 8.045 10.1575C7.97798 9.94459 7.98582 9.71516 8.06723 9.50732C8.14863 9.29948 8.2987 9.12575 8.4925 9.015L8.69 8.9C8.6875 8.835 8.6875 8.77 8.69 8.705L8.4925 8.59C8.29857 8.47939 8.14839 8.30567 8.06696 8.09779C7.98554 7.88991 7.97779 7.6604 8.045 7.4475C8.0675 7.375 8.1 7.3025 8.125 7.23C8.03 7.2225 7.9375 7.2 7.84 7.2H7.4225C6.85106 7.46352 6.22927 7.59999 5.6 7.59999C4.97073 7.59999 4.34894 7.46352 3.7775 7.2H3.36C2.46893 7.2002 1.61442 7.55426 0.984341 8.18434C0.354262 8.81442 0.000198832 9.66893 0 10.56L0 11.6C0 11.9183 0.126428 12.2235 0.351472 12.4485C0.576515 12.6736 0.88174 12.8 1.2 12.8H10C10.243 12.7997 10.4801 12.7256 10.68 12.5875C10.6483 12.4923 10.6314 12.3928 10.63 12.2925ZM5.6 6.4C6.2329 6.4 6.85159 6.21233 7.37782 5.8607C7.90406 5.50908 8.31421 5.00931 8.55641 4.42459C8.79862 3.83986 8.86199 3.19645 8.73851 2.57571C8.61504 1.95497 8.31027 1.38479 7.86274 0.93726C7.41521 0.489732 6.84503 0.184961 6.22429 0.0614885C5.60355 -0.0619842 4.96014 0.0013865 4.37541 0.243587C3.79069 0.485787 3.29092 0.895939 2.9393 1.42218C2.58768 1.94841 2.4 2.5671 2.4 3.2C2.4 4.04869 2.73714 4.86263 3.33726 5.46274C3.93737 6.06286 4.75131 6.4 5.6 6.4Z"
          fill="#213F7D"
        />
      </g>
      <defs>
        <clipPath id="clip0_83946_436">
          <rect width="16" height="12.8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ServiceAccountIcon;
