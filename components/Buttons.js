import Link from "next/link";

const variants = {
  primary: "",
};

const sizes = {
  sm: " text-xs py-2 px-4",
  md: " text-xs py-3 px-6",
};

export default function Button({
  onClick,
  target,
  className,
  as = "link",
  href = "/",
  children,
  variant = "primary",
  size = "md",
  type,
}) {
  if (as === "btn") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={` ${variants[variant]} ${className} ${sizes[size]}`}
      >
        {children}
      </button>
    );
  }
  return (
    <Link
      target={target}
      href={href}
      className={` ${variants[variant]} ${className} ${sizes[size]}`}
    >
      {children}
    </Link>
  );
}
