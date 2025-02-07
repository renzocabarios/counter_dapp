import { ABI } from "@/app/lib/abi";
import { config } from "@/components/providers";
import { useQuery } from "@tanstack/react-query";
import { readContract } from "@wagmi/core";

export default function useReadCurrentCounter() {
  const { ...query } = useQuery({
    queryFn: async () => {
      const result = await readContract(config, {
        abi: ABI,
        address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
        functionName: "currentCount",
      });

      return result;
    },
    queryKey: ["count"],
  });

  return { ...query };
}
