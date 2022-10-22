export type AsyncThunkStatusType =
  | 'idle'
  | 'pending'
  | 'fulfilled'
  | 'rejected'
  | 'canceled';

export interface IAuthor {
  wallet: string;
}
