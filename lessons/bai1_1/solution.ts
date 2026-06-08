import crypto from "crypto";

export type Block = {
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
};

export function isValidBlock(block: Block): boolean {
  const dataString = block.index.toString() + 
                     block.timestamp + 
                     JSON.stringify(block.transactions) + 
                     block.previous_hash;

  const calculatedHash = crypto.createHash('sha256').update(dataString).digest('hex');

  return calculatedHash === block.current_hash;
}