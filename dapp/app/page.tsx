"use client";
import ConnectWallet from "@/components/connect-wallet";
import useDecrementCounter from "@/hooks/useDecrementCounter";
import useIncrementCounter from "@/hooks/useIncrementCounter";
import useReadCurrentCounter from "@/hooks/useReadCurrentCounter";

export default function Home() {
  const { data: currentCount } = useReadCurrentCounter();
  const { mutate: decrementCounter } = useDecrementCounter();
  const { mutate: incrementCounter } = useIncrementCounter();

  const onIncrement = () => {
    incrementCounter();
  };

  const onDecrement = () => {
    decrementCounter();
  };

  return (
    <div className="">
      <div className="w-full flex items-center justify-center sticky">
        <div className="w-full max-w-[1440px] flex items-center justify-between p-4">
          <p>Counter DAPP</p>
          <ConnectWallet />
        </div>
      </div>
      <div className="w-full flex items-center justify-center sticky">
        <div className="w-full max-w-[1440px] min-h-screen flex flex-col items-center justify-center gap-8">
          <p>Current Count: {Number(currentCount)}</p>

          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}
