export default function Box({ title, child }) {
  return (
    <div className=" box flex flex-col items-center rounded-md p-10 max-w-[230px] max-h-[260px] gap-2">
      <div className="circle flex items-center justify-center"> {child}</div>

      <h6 className="text-light-blue font-semibold text-center">{title}</h6>
    </div>
  );
}
