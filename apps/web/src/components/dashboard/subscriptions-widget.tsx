'use client';

import {
  IconBrandYoutube,
  IconDots,
  IconFileText,
  IconMusic,
} from '@tabler/icons-react';
import type { SVGProps } from 'react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { WidgetHeader } from './widget-header';

const PromoCardArt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 320 124"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    {...props}
  >
    <g clipPath="url(#clip0_2022_153)">
      <path
        d="M0 12C0 5.37259 5.37258 0 12 0H308C314.627 0 320 5.37258 320 12V112C320 118.627 314.627 124 308 124H12C5.37259 124 0 118.627 0 112V12Z"
        fill="#F5F7FA"
      />
      <ellipse
        cx="32"
        cy="32.0155"
        rx="12.7611"
        ry="12.7765"
        fill="url(#paint0_linear_2022_153)"
      />
      <path
        d="M29.1551 24.5106L37.5629 22.8396C37.946 22.7635 38.3031 23.0566 38.3031 23.4472V36.3294C38.3031 37.4261 37.5362 38.3734 36.4635 38.6016L35.7207 38.7596C34.4268 39.0349 33.208 38.0482 33.208 36.7252C33.208 35.7933 33.8361 34.9785 34.7373 34.7413L36.8425 34.1873C37.1283 34.1121 37.3274 33.8538 37.3274 33.5583V27.5773C37.3274 27.3023 37.0748 27.0968 36.8056 27.1527L29.7993 28.6089C29.5837 28.6537 29.4292 28.8437 29.4292 29.0638V37.9955C29.4292 39.1951 28.5899 40.2311 27.4164 40.4801L26.9071 40.5881C25.5738 40.8709 24.3186 39.854 24.3186 38.4911C24.3186 37.6225 24.9032 36.8627 25.7428 36.6401L27.9464 36.0558C28.218 35.9838 28.4071 35.738 28.4071 35.457V25.422C28.4071 24.9786 28.7203 24.597 29.1551 24.5106Z"
        fill="url(#paint1_radial_2022_153)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 32C46 39.732 39.732 46 32 46C24.268 46 18 39.732 18 32C18 24.268 24.268 18 32 18C39.732 18 46 24.268 46 32ZM44.7611 32.0155C44.7611 39.0718 39.0477 44.792 32 44.792C24.9523 44.792 19.2389 39.0718 19.2389 32.0155C19.2389 24.9592 24.9523 19.2389 32 19.2389C39.0477 19.2389 44.7611 24.9592 44.7611 32.0155Z"
        fill="url(#paint2_radial_2022_153)"
      />
      <ellipse
        cx="314"
        cy="12.0795"
        rx="65.4004"
        ry="65.4798"
        fill="url(#paint3_linear_2022_153)"
      />
      <path
        d="M299.42 -26.3831L342.51 -34.9471C344.473 -35.3373 346.303 -33.8351 346.303 -31.8332V34.1883C346.303 39.8087 342.373 44.6634 336.876 45.8331L333.069 46.643C326.437 48.054 320.191 42.9968 320.191 36.2168C320.191 31.4408 323.41 27.2648 328.029 26.0494L338.818 23.2101C340.282 22.8247 341.303 21.5007 341.303 19.9864V-10.6665C341.303 -12.0757 340.008 -13.1291 338.629 -12.8423L302.721 -5.37925C301.617 -5.14965 300.825 -4.17627 300.825 -3.04799V42.727C300.825 48.8749 296.523 54.1846 290.509 55.4603L287.899 56.014C281.066 57.4634 274.633 52.2519 274.633 45.2669C274.633 40.8153 277.629 36.9213 281.932 35.7804L293.225 32.7859C294.617 32.4168 295.586 31.1572 295.586 29.7172V-21.7123C295.586 -23.9845 297.192 -25.9402 299.42 -26.3831Z"
        fill="url(#paint4_radial_2022_153)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M385.75 12C385.75 51.6264 353.626 83.75 314 83.75C274.374 83.75 242.25 51.6264 242.25 12C242.25 -27.6264 274.374 -59.75 314 -59.75C353.626 -59.75 385.75 -27.6264 385.75 12ZM379.4 12.0794C379.4 48.2429 350.12 77.5592 314 77.5592C277.88 77.5592 248.6 48.2429 248.6 12.0794C248.6 -24.0841 277.88 -53.4004 314 -53.4004C350.12 -53.4004 379.4 -24.0841 379.4 12.0794Z"
        fill="url(#paint5_radial_2022_153)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2022_153"
        x1="32"
        y1="19.239"
        x2="32"
        y2="44.7921"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#DDE2E7" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_2022_153"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(24.3186 43.7389) rotate(-55.1325) scale(28.0109 21.9967)"
      >
        <stop stopColor="#7A66FB" />
        <stop offset="0.440198" stopColor="#52A2F4" />
        <stop offset="0.702" stopColor="#FC5D6D" />
        <stop offset="1" stopColor="#E85E7B" />
      </radialGradient>
      <radialGradient
        id="paint2_radial_2022_153"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(24.3186 43.7389) rotate(-55.1325) scale(28.0109 21.9967)"
      >
        <stop stopColor="#7A66FB" />
        <stop offset="0.440198" stopColor="#52A2F4" />
        <stop offset="0.702" stopColor="#FC5D6D" />
        <stop offset="1" stopColor="#E85E7B" />
      </radialGradient>
      <linearGradient
        id="paint3_linear_2022_153"
        x1="314"
        y1="-53.4004"
        x2="314"
        y2="77.5593"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#DDE2E7" />
      </linearGradient>
      <radialGradient
        id="paint4_radial_2022_153"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(274.633 72.1621) rotate(-55.1325) scale(143.556 112.733)"
      >
        <stop stopColor="#7A66FB" />
        <stop offset="0.440198" stopColor="#52A2F4" />
        <stop offset="0.702" stopColor="#FC5D6D" />
        <stop offset="1" stopColor="#E85E7B" />
      </radialGradient>
      <radialGradient
        id="paint5_radial_2022_153"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(274.633 72.1621) rotate(-55.1325) scale(143.556 112.733)"
      >
        <stop stopColor="#7A66FB" />
        <stop offset="0.440198" stopColor="#52A2F4" />
        <stop offset="0.702" stopColor="#FC5D6D" />
        <stop offset="1" stopColor="#E85E7B" />
      </radialGradient>
      <clipPath id="clip0_2022_153">
        <path
          d="M0 12C0 5.37259 5.37258 0 12 0H308C314.627 0 320 5.37258 320 12V112C320 118.627 314.627 124 308 124H12C5.37259 124 0 118.627 0 112V12Z"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

const subscriptions = [
  {
    id: 1,
    name: 'Spotify',
    price: '$7.99',
    period: '/month',
    status: 'Paid',
    statusVariant: 'success' as const,
    icon: () => (
      <div className="flex size-10 items-center justify-center rounded-full border border-[var(--stroke-soft-200)] bg-white p-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5ZM15.9122 16.4108C16.2112 16.5816 16.5939 16.5019 16.7733 16.2172C16.9526 15.9326 16.857 15.5682 16.558 15.3975C13.927 13.8604 10.6501 13.5074 6.83511 14.3386C6.50025 14.4069 6.29695 14.7257 6.3687 15.0445C6.44046 15.3633 6.77532 15.5568 7.11018 15.4885C10.6023 14.7371 13.5562 15.0445 15.9122 16.4108ZM16.9168 13.8718C17.2875 14.0767 17.7659 13.9742 17.9931 13.6213C18.2203 13.2683 18.1007 12.8129 17.7539 12.608C14.6565 10.7977 10.1359 10.2967 6.50025 11.3442C6.08168 11.458 5.85445 11.8679 5.97405 12.2664C6.09364 12.6535 6.52417 12.8698 6.94275 12.756C10.1239 11.8337 14.2259 12.2892 16.9168 13.8718ZM6.46437 9.80711C9.54986 8.91903 14.8717 9.08981 18.1007 10.9115C18.5432 11.1734 19.1173 11.0254 19.3684 10.5927C19.6315 10.1714 19.488 9.62494 19.0455 9.37445C15.3381 7.27949 9.45419 7.07455 5.91425 8.09926C5.42392 8.24727 5.1369 8.74824 5.29237 9.21505C5.44784 9.69325 5.97405 9.95512 6.46437 9.80711Z"
            fill="#1ED760"
          />
        </svg>
      </div>
    ),
  },
  {
    id: 2,
    name: 'Youtube Music',
    price: '$79.99',
    period: '/year',
    status: 'Expiring',
    statusVariant: 'faded' as const,
    icon: () => (
      <div className="flex size-10 items-center justify-center rounded-full border border-[var(--stroke-soft-200)] bg-white p-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z"
            fill="#FF0000"
          />
          <path
            d="M12 7.21115C14.641 7.21115 16.7889 9.35908 16.7889 12.0001C16.7889 14.641 14.641 16.789 12 16.789C9.35902 16.789 7.21109 14.641 7.21109 12.0001C7.21109 9.35908 9.35902 7.21115 12 7.21115ZM12 6.75006C9.09995 6.75006 6.75 9.10001 6.75 12.0001C6.75 14.9001 9.09995 17.2501 12 17.2501C14.9001 17.2501 17.25 14.9001 17.25 12.0001C17.25 9.10001 14.9001 6.75006 12 6.75006Z"
            fill="white"
          />
          <path d="M10.5 15L15 11.8696L10.5 9V15Z" fill="white" />
        </svg>
      </div>
    ),
  },
  {
    id: 3,
    name: 'Prime Video',
    price: '$9.99',
    period: '/month',
    status: 'Paused',
    statusVariant: 'warning' as const,
    icon: () => (
      <div className="flex size-10 items-center justify-center rounded-full border border-[var(--stroke-soft-200)] bg-white p-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.80284 13.1736C1.74643 13.1764 1.69106 13.1566 1.64803 13.1178C1.6113 13.0712 1.59424 13.0107 1.6008 12.9504V7.26104C1.59424 7.2008 1.6113 7.14028 1.64803 7.09371C1.69159 7.05857 1.74564 7.04184 1.80022 7.0463H2.38271C2.49291 7.03458 2.59209 7.11686 2.60836 7.23316L2.66608 7.45627C2.83375 7.28419 3.03185 7.14865 3.24857 7.05745C3.47029 6.96207 3.70722 6.91271 3.94652 6.91243C4.42353 6.8957 4.87955 7.12132 5.17447 7.52041C5.4993 7.99621 5.66067 8.57602 5.63102 9.16309C5.63994 9.58924 5.56306 10.0123 5.40537 10.4042C5.27523 10.7305 5.06375 11.013 4.79402 11.2213C4.53321 11.4104 4.22281 11.508 3.90716 11.5002C3.69279 11.5013 3.47974 11.4637 3.27744 11.3887C3.09141 11.3223 2.91955 11.218 2.77104 11.0819V12.956C2.77681 13.0157 2.76107 13.0757 2.72643 13.1234C2.68156 13.1602 2.62515 13.1769 2.569 13.1708L1.80284 13.1736ZM3.56868 10.5631C3.82792 10.5829 4.07876 10.4597 4.23251 10.2368C4.39598 9.92503 4.46997 9.56916 4.44505 9.21329C4.47023 8.85408 4.39729 8.49486 4.23514 8.1786C4.08086 7.95353 3.82739 7.82999 3.56606 7.8523C3.28872 7.85258 3.01689 7.93234 2.77891 8.08378V10.3289C3.01505 10.485 3.28793 10.567 3.56606 10.5659L3.56868 10.5631Z"
            fill="#00A8E1"
          />
          <path
            d="M6.62808 11.4109C6.53415 11.4296 6.44363 11.3638 6.42605 11.2636C6.42211 11.2413 6.42211 11.2184 6.42605 11.1961V7.26096C6.41949 7.20072 6.43654 7.1402 6.47328 7.09363C6.51683 7.05849 6.57088 7.04176 6.62546 7.04622H7.20533C7.31553 7.0345 7.41471 7.11678 7.43098 7.23308L7.53593 7.69046C7.70832 7.47599 7.91429 7.29471 8.14466 7.15499C8.33253 7.0504 8.54139 6.99602 8.75339 6.99602H8.86622C8.92316 6.99072 8.98009 7.00745 9.02627 7.04343C9.06301 7.09 9.08006 7.15052 9.0735 7.21076V7.93031C9.07796 7.98832 9.06222 8.04577 9.0289 8.09206C8.98508 8.13111 8.92814 8.14924 8.87147 8.14226H8.72715C8.66759 8.14226 8.59255 8.14226 8.5015 8.14226C8.34985 8.14561 8.19871 8.1643 8.0502 8.19804C7.8954 8.22844 7.74426 8.27613 7.5989 8.34028V11.1989C7.6031 11.2569 7.58736 11.3144 7.5543 11.3607C7.51048 11.3997 7.45354 11.4179 7.39687 11.4109H6.62808Z"
            fill="#00A8E1"
          />
          <path
            d="M10.2361 6.36587C10.0571 6.37535 9.8815 6.31149 9.74526 6.18738C9.61874 6.0616 9.55075 5.88311 9.55889 5.69932C9.54996 5.51441 9.61795 5.3348 9.74526 5.20847C10.033 4.96388 10.4419 4.96388 10.7296 5.20847C10.8562 5.33425 10.9241 5.51274 10.916 5.69653C10.9241 5.88032 10.8562 6.05881 10.7296 6.18459C10.5931 6.31037 10.4165 6.37535 10.2361 6.36587ZM9.85026 11.4138C9.75629 11.4325 9.66572 11.3667 9.64814 11.2666C9.6442 11.2443 9.6442 11.2214 9.64814 11.1991V7.26111C9.64157 7.20087 9.65864 7.14035 9.69539 7.09378C9.73896 7.05864 9.79304 7.0419 9.84764 7.04637H10.622C10.6782 7.04023 10.7346 7.05696 10.7795 7.09378C10.8142 7.14147 10.8299 7.20143 10.8241 7.26111V11.1991C10.8286 11.2571 10.8128 11.3145 10.7795 11.3608C10.7357 11.3999 10.6787 11.418 10.622 11.411L9.85026 11.4138Z"
            fill="#00A8E1"
          />
          <path
            d="M12.0227 11.4107C11.9287 11.4293 11.8382 11.3635 11.8206 11.2634C11.8167 11.2411 11.8167 11.2182 11.8206 11.1959V7.26073C11.8141 7.20049 11.8311 7.13997 11.8679 7.0934C11.9114 7.05826 11.9655 7.04152 12.0201 7.04598H12.5999C12.7101 7.03427 12.8093 7.11654 12.8256 7.23284L12.8912 7.46432C13.1299 7.28946 13.3881 7.14722 13.66 7.04041C13.8843 6.9573 14.1202 6.91407 14.3579 6.91212C14.7714 6.87447 15.1687 7.09117 15.3812 7.4699C15.6207 7.29476 15.881 7.15419 16.1552 7.05156C16.3971 6.96594 16.6506 6.92271 16.9056 6.92327C17.2278 6.90263 17.5438 7.02367 17.7794 7.25794C17.9966 7.51118 18.1084 7.84724 18.089 8.18944V11.1987C18.0932 11.2567 18.0774 11.3142 18.0444 11.3605C18.0006 11.3995 17.9436 11.4176 17.887 11.4107H17.1234C17.0295 11.4293 16.939 11.3635 16.9214 11.2634C16.9174 11.2411 16.9174 11.2182 16.9214 11.1959V8.4516C16.9214 8.06311 16.7579 7.86872 16.4307 7.86872C16.1258 7.87234 15.8254 7.94876 15.5517 8.09183V11.1987C15.5562 11.2567 15.5405 11.3142 15.5071 11.3605C15.4633 11.3995 15.4064 11.4176 15.3497 11.4107H14.5783C14.4844 11.4293 14.3938 11.3635 14.3763 11.2634C14.3723 11.2411 14.3723 11.2182 14.3763 11.1959V8.4516C14.3763 8.06311 14.2128 7.86872 13.8856 7.86872C13.577 7.87067 13.2732 7.95015 12.9987 8.1002V11.1959C13.0029 11.2539 12.9872 11.3114 12.9541 11.3577C12.9103 11.3967 12.8534 11.4148 12.7967 11.4079L12.0227 11.4107Z"
            fill="#00A8E1"
          />
          <path
            d="M20.8965 11.5396C20.3311 11.5789 19.7756 11.3681 19.3616 10.9567C18.983 10.496 18.7938 9.89331 18.8368 9.28337C18.799 8.65112 18.9906 8.02724 19.3721 7.5403C19.7696 7.10411 20.3261 6.87291 20.8965 6.90721C21.3185 6.88044 21.7351 7.01737 22.0694 7.29208C22.3522 7.54866 22.5081 7.92935 22.4918 8.32398C22.511 8.71025 22.3376 9.07895 22.0353 9.29453C21.6283 9.54163 21.1621 9.65597 20.6945 9.62362C20.4295 9.62697 20.165 9.59517 19.9074 9.5288C19.9089 9.83725 20.0259 10.1323 20.2327 10.3487C20.4775 10.5334 20.7756 10.6212 21.075 10.597C21.2214 10.597 21.3678 10.5866 21.5131 10.5663C21.7131 10.5334 21.9109 10.4885 22.1061 10.4324H22.1534H22.1927C22.2838 10.4324 22.3292 10.4985 22.3292 10.6304V11.0237C22.3341 11.0903 22.3215 11.157 22.2924 11.2161C22.2552 11.2627 22.2058 11.2964 22.1507 11.3137C21.7493 11.4707 21.3242 11.5474 20.8965 11.5396ZM20.6342 8.85388C20.8407 8.86978 21.0471 8.82348 21.2298 8.72001C21.3552 8.62881 21.426 8.47403 21.4161 8.31283C21.4161 7.95389 21.2148 7.77457 20.8126 7.77457C20.2965 7.77457 19.9984 8.11119 19.9178 8.78416C20.1522 8.83185 20.3904 8.85527 20.6289 8.85388H20.6342Z"
            fill="#00A8E1"
          />
          <path
            d="M20.4741 16.2166C18.1756 18.0182 14.8434 18.9748 11.9755 18.9748C8.14313 18.9966 4.44089 17.4981 1.59298 14.7719C1.37782 14.5655 1.56936 14.2839 1.82912 14.4428C4.99295 16.363 8.5737 17.3715 12.2169 17.3684C14.9355 17.3531 17.6246 16.7682 20.1304 15.6477C20.5292 15.4719 20.8546 15.907 20.4741 16.2166Z"
            fill="#00A8E1"
          />
          <path
            d="M21.4423 15.0699C21.1484 14.6711 19.5006 14.8803 18.7581 14.9751C18.5324 15.003 18.4957 14.7966 18.7004 14.646C20.0123 13.6643 22.1717 13.9488 22.421 14.2779C22.6702 14.607 22.3554 16.9023 21.109 17.9983C20.9201 18.1657 20.7391 18.0764 20.823 17.8533C21.1038 17.1031 21.7256 15.4576 21.4423 15.0699Z"
            fill="#00A8E1"
          />
        </svg>
      </div>
    ),
  },
];

const statusStyles = {
  success:
    'bg-[var(--state-success-lighter,#e0faec)] text-[var(--state-success-base,#1fc16b)]',
  faded:
    'bg-[var(--state-faded-lighter,#f2f5f8)] text-[var(--state-faded-base,#717784)]',
  warning:
    'bg-[var(--state-warning-lighter,#fff1eb)] text-[var(--state-warning-base,#ff8447)]',
};

export function SubscriptionsWidget() {
  const handleLearnMore = () => {
    toast.info('Apple Music Promotion', {
      description: 'Get 50% off for the first 6 months!',
    });
  };

  const handleManageSubscription = (
    e: React.MouseEvent,
    subscription: (typeof subscriptions)[0]
  ) => {
    e.stopPropagation();
    toast.success('Manage subscription', {
      description: `Managing ${subscription.name}`,
    });
  };

  return (
    <Card className="border-border p-4">
      <div className="flex flex-col gap-4">
        <WidgetHeader
          icon={<IconFileText className="size-6" />}
          title="My Subscriptions"
          action={{
            label: 'See All',
            onClick: () => toast.info('Viewing all subscriptions'),
          }}
        />

        <button
          type="button"
          onClick={handleLearnMore}
          className="relative overflow-hidden rounded-2xl border border-[var(--stroke-soft-200)] bg-[#f5f7fa] p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary-base,#335cff)]"
        >
          <PromoCardArt className="pointer-events-none absolute inset-0 h-full w-full" />
          <div className="relative z-10 flex-col items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-white/60">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="16"
                  cy="16.0155"
                  rx="12.7611"
                  ry="12.7765"
                  fill="url(#paint0_linear_2022_154)"
                />
                <path
                  d="M13.1551 8.51062L21.5629 6.8396C21.946 6.76345 22.3031 7.05657 22.3031 7.44718V20.3294C22.3031 21.4261 21.5362 22.3734 20.4635 22.6016L19.7207 22.7596C18.4268 23.0349 17.208 22.0482 17.208 20.7252C17.208 19.7933 17.8361 18.9785 18.7373 18.7413L20.8425 18.1873C21.1283 18.1121 21.3274 17.8538 21.3274 17.5583V11.5773C21.3274 11.3023 21.0748 11.0968 20.8056 11.1527L13.7993 12.6089C13.5837 12.6537 13.4292 12.8437 13.4292 13.0638V21.9955C13.4292 23.1951 12.5899 24.2311 11.4164 24.4801L10.9071 24.5881C9.57379 24.8709 8.31858 23.854 8.31858 22.4911C8.31858 21.6225 8.90319 20.8627 9.74278 20.6401L11.9464 20.0558C12.218 19.9838 12.4071 19.738 12.4071 19.457V9.42199C12.4071 8.97864 12.7203 8.59704 13.1551 8.51062Z"
                  fill="url(#paint1_radial_2022_154)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM28.7611 16.0155C28.7611 23.0718 23.0477 28.792 16 28.792C8.95226 28.792 3.23894 23.0718 3.23894 16.0155C3.23894 8.95919 8.95226 3.23894 16 3.23894C23.0477 3.23894 28.7611 8.95919 28.7611 16.0155Z"
                  fill="url(#paint2_radial_2022_154)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2022_154"
                    x1="16"
                    y1="3.23895"
                    x2="16"
                    y2="28.792"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#DDE2E7" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_2022_154"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.31858 27.7389) rotate(-55.1325) scale(28.0109 21.9967)"
                  >
                    <stop stopColor="#7A66FB" />
                    <stop offset="0.440198" stopColor="#52A2F4" />
                    <stop offset="0.702" stopColor="#FC5D6D" />
                    <stop offset="1" stopColor="#E85E7B" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_2022_154"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.31858 27.7389) rotate(-55.1325) scale(28.0109 21.9967)"
                  >
                    <stop stopColor="#7A66FB" />
                    <stop offset="0.440198" stopColor="#52A2F4" />
                    <stop offset="0.702" stopColor="#FC5D6D" />
                    <stop offset="1" stopColor="#E85E7B" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="font-medium text-[var(--text-strong-950)] text-sm leading-5">
                50% discount on Apple Music
              </p>
              <p className="text-[var(--text-sub-600)] text-xs leading-4">
                For only $4.99 per month!{' '}
                <span className="font-medium text-[#335cff] underline underline-offset-2">
                  Learn More
                </span>
              </p>
            </div>
          </div>
        </button>

        <div className="flex flex-col">
          {subscriptions.map((subscription, index) => {
            const Icon = subscription.icon;
            return (
              <div key={subscription.id}>
                <div className="flex items-center gap-3 py-2">
                  <Icon />
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="text-left font-normal text-[var(--text-sub-600)] text-xs leading-4">
                      {subscription.name}
                    </p>
                    <div className="flex items-center gap-1">
                      <p className="font-medium text-[var(--text-strong-950)] text-sm leading-5">
                        {subscription.price}
                      </p>
                      <p className="text-[var(--text-soft-400)] text-xs leading-4">
                        {subscription.period}
                      </p>
                    </div>
                  </div>
                  <Badge
                    className={`${
                      statusStyles[subscription.statusVariant]
                    } rounded-full px-2 py-0.5 font-medium text-xs leading-4`}
                  >
                    {subscription.status}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => handleManageSubscription(e, subscription)}
                    className="size-8 shrink-0 p-1.5 transition-colors"
                  >
                    <IconDots className="size-5 text-[var(--text-strong-950)]" />
                  </Button>
                </div>
                {index < subscriptions.length - 1 && (
                  <div className="h-px w-full bg-[var(--stroke-soft-200)]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
