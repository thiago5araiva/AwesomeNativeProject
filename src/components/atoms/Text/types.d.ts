export type TextTypes = {
  children: React.ReactElement | string;
  type:
    | 'heading'
    | 'headline'
    | 'title'
    | 'subtitle'
    | 'text'
    | 'descriptive'
    | 'description'
    | 'helper';
  customStyle?: object;
};

export type TypesText = {
  [key: string]: object;
};
