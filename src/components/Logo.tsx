export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Иконка-стрелка вверх */}
      <rect x="0" y="10" width="30" height="20" rx="4" fill="white" />
      <path d="M15 18L9 25H21L15 18Z" fill="#0a0a0a" />

      {/* Скупка */}
      <text
        x="38"
        y="28"
        fontFamily="'Courier New', monospace"
        fontSize="18"
        fontWeight="700"
        fill="white"
      >
        Скупка
      </text>
      {/* Go */}
      <text
        x="118"
        y="28"
        fontFamily="'Courier New', monospace"
        fontSize="18"
        fontWeight="700"
        fill="white"
        opacity="0.5"
      >
        Go
      </text>
    </svg>
  );
};
