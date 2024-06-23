const DashboardSVG = ({color}:{color?: string}) => {
  return(<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    <path
      fill={color ? color : "currentColor"}
      d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"
    />
  </svg>)
};

const PeopleSVG = ({color}:{color?: string}) => {
  return(<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 32 32"
  >
    <path
      fill={color ? color : "currentColor"}
      d="M10.5 16a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M23 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3zm18 7c-1.456 0-2.608-.198-3.521-.513c.432-.7.68-1.375.82-1.92a6.391 6.391 0 0 0 .193-1.196c.002-.04.004-.076.004-.107l.001-.042V21a4.484 4.484 0 0 0-1.145-3h8.241A2.406 2.406 0 0 1 30 20.406S30 25 23 25"
    />
  </svg>)
};

const GameIconSVG = ({color}:{color?: string}) => {
  return(
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 20 20"
  >
    <path
      fill={color ? color : "currentColor"}
      d="M15.949 5.5h.05a2.5 2.5 0 1 1-1.354 4.602l.449 1.854a1.25 1.25 0 0 1-1.215 1.544h-.763a1.25 1.25 0 0 1-1.214-1.545l.45-1.853a2.483 2.483 0 0 1-1.417.397a2.001 2.001 0 0 0-.7-1.07A3.99 3.99 0 0 0 10.5 8c0-.818-.246-1.578-.667-2.212A2.493 2.493 0 0 1 11.05 5.5a2.508 2.508 0 0 1 0-1a2.5 2.5 0 0 1 4.9 1M6.5 5a3 3 0 0 0-2.236 5H4a1 1 0 1 0 0 2h.52c-.372 1.798-1.353 2.836-1.9 3.293c-.346.29-.62.736-.62 1.256C2 17.35 2.65 18 3.451 18H9.55c.8 0 1.45-.65 1.45-1.451c0-.52-.274-.966-.62-1.256c-.547-.457-1.528-1.495-1.9-3.293H9a1 1 0 1 0 0-2h-.264A3 3 0 0 0 6.5 5"
    />
  </svg>
  )
  
};

export const SvgIcons={
  DashboardSVG,
  PeopleSVG,
  GameIconSVG
}