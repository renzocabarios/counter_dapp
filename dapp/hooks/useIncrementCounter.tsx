import { ABI } from "@/app/lib/abi";
import { config } from "@/components/providers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { waitForTransactionReceipt, writeContract } from "@wagmi/core";

export default function useIncrementCounter() {
  const query = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      const result = await writeContract(config, {
        abi: ABI,
        address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
        functionName: "increment",
      });

      const transactionReceipt = await waitForTransactionReceipt(config, {
        hash: result,
      });

      return transactionReceipt;
    },
    onSuccess() {
      query.invalidateQueries();
    },
  });

  return { ...mutation };
}
