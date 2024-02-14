const Bubbles = () => {
  return (
    <div className="absolute h-1/2 w-1/3 z-10 right-0">
      <span className="size-7 absolute left-[25%] rounded-full shadow-[inset_-2px_-2px_8px_rgba(0,0,0,.25),_inset_2px_2px_8px_rgba(255,255,255,.5)] bg-[linear-gradient(180deg,#F560B6_0,#F2446C_100%)] animate-bubbles"></span>
      <span
        className="size-5 absolute left-[40%] top-[40%] rounded-full shadow-[inset_-2px_-2px_8px_rgba(0,0,0,.25),_inset_2px_2px_8px_rgba(255,255,255,.5)] bg-[linear-gradient(180deg,#8980F7_0,#4136C1_100%)] animate-bubbles"
        style={{
          animationDuration: "3s",
        }}
      ></span>
      <span className="size-4 absolute left-[10%] bottom-[10%] rounded-full shadow-[inset_-2px_-2px_8px_rgba(0,0,0,.25),_inset_2px_2px_8px_rgba(255,255,255,.5)] bg-[linear-gradient(180deg,#5CF0BE_0,#2F9B69_100%)]"></span>
      <span className="size-3 absolute right-[15%] bottom-[22%] rounded-full shadow-[inset_-2px_-2px_8px_rgba(0,0,0,.25),_inset_2px_2px_8px_rgba(255,255,255,.5)] bg-[linear-gradient(180deg,#FCD830_0,#BAAC00_100%)]"></span>
      <span
        className="size-4 absolute right-[5%] bottom-1/3 rounded-full shadow-[inset_-2px_-2px_8px_rgba(0,0,0,.25),_inset_2px_2px_8px_rgba(255,255,255,.5)] bg-[linear-gradient(180deg,#FAC538_0,#FF8008_100%)] animate-bubbles"
        style={{
          animationDuration: "2s",
        }}
      ></span>
      <span className="size-2 absolute right-0 top-6 rounded-full shadow-[inset_-2px_-2px_8px_rgba(0,0,0,.25),_inset_2px_2px_8px_rgba(255,255,255,.5)] bg-[linear-gradient(180deg,#47D6E2_0,#387DFF_100%)]"></span>
    </div>
  );
};
export default Bubbles;
