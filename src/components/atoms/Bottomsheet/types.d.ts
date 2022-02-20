export interface BottomSheetInterface {
  close(): void;
  open(): void;
}
export type BottomSheetTypes = {
  children?: React.ReactElement;
  active?: false;
  onPress?: void;
};
